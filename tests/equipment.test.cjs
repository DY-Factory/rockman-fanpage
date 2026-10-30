const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const vm = require('node:vm');
const { equipmentData } = require('../data/equipment');
const base = path.join(__dirname, '../dashboard');

test('equipment covers the three hunters and all main games with local, traceable images', () => {
    assert.equal(new Set(equipmentData.map(a=>a.id)).size,equipmentData.length);
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(base,'assets/images/equipment/manifest.json'),'utf8')),equipmentData);
    for(const person of ['x','zero','axl']) {
        const works=[...new Set(equipmentData.filter(a=>a.characterId===person).map(a=>a.work))].sort();
        assert.deepEqual(works,person==='axl'?['X7','X8']:Array.from({length:8},(_,i)=>`X${i+1}`));
    }
    for(const a of equipmentData) {
        assert.match(a.src,/^assets\/images\/equipment\/[a-f0-9]+\.(png|gif|jpg)$/);
        const bytes=fs.readFileSync(path.join(base,a.src));
        assert.ok(bytes.length>100 && a.width>0 && a.height>0,a.id);
        assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),a.sha256,a.id);
        assert.match(a.source,/^https:\/\//);assert.match(a.original,/^https:\/\//);
        assert.ok(a.copyright && a.reviewedAt && a.name && a.imageKind);
        if(a.imageKind==='텍스처 자료')assert.match(a.note,/텍스처/);
    }
    for(const name of ['퍼스트 아머','세컨드 아머','서드 아머','포스 아머','팔콘 아머','가이아 아머','블레이드 아머','섀도 아머','뉴트럴 아머','이카루스 아머','헤르메스 아머','화이트 엑셀'])assert.ok(equipmentData.some(a=>a.name===name),name);
    assert.ok(equipmentData.some(a=>a.work==='X7'&&a.name.startsWith('글라이드 아머')));
    assert.ok(!equipmentData.some(a=>a.work==='X7'&&['블랙 제로','얼티밋 아머','화이트 엑셀'].includes(a.name)));
});

function harness() {
    const nodes=new Map(),listeners={};
    function element(key) {
        if(key==='dialog')key='#equipment-viewer';
        if(!nodes.has(key))nodes.set(key,{innerHTML:'',textContent:'',value:'',events:{},attrs:{},open:false,focused:false,clicked:false,
            addEventListener(type,fn){this.events[type]=fn;},
            querySelector(selector){return element(selector);},
            setAttribute(name,value){this.attrs[name]=value;},
            focus(){this.focused=true;},click(){this.clicked=true;},scrollIntoView(){},
            showModal(){this.open=true;},close(){this.open=false;this.events.close?.();},
            classList:{add(){},remove(){},toggle(){return true;}}});
        return nodes.get(key);
    }
    const modal=element('modal');
    const ctx=vm.createContext({window:{equipmentData},document:{getElementById:id=>element('#'+id),querySelector:element,addEventListener:(type,fn)=>{listeners[type]=fn;}},
        escapeHtml:v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),modal,closeModal:()=>modal.close(),hideAllSections(){}});
    vm.runInContext(fs.readFileSync(path.join(base,'equipment.js'),'utf8'),ctx);
    listeners.DOMContentLoaded();
    return {ctx,element,listeners,modal,click:(selector,value)=>listeners.click({target:{closest:q=>q===selector?value:null}})};
}

test('equipment filters combine person, game, kind, format and text; reset restores the catalog',()=>{
    const h=harness();
    const change=(key,value)=>h.element('#equipment-'+key).events[key==='query'?'input':'change']({target:{value}});
    assert.match(h.element('#equipment-status').textContent,new RegExp('^'+equipmentData.length+'개'));
    change('person','axl');change('work','X8');change('kind','무기·기술');change('format','게임 화면');change('query','레이 건');
    assert.match(h.element('#equipment-status').textContent,/^1개/);
    assert.match(h.element('#equipment-results').innerHTML,/레이 건/);
    assert.doesNotMatch(h.element('#equipment-results').innerHTML,/글라이드 아머/);
    change('query','<script>');assert.match(h.element('#equipment-status').textContent,/^0개/);
    h.click('[data-equipment-reset]',{});
    assert.match(h.element('#equipment-status').textContent,new RegExp('^'+equipmentData.length+'개'));
});

test('hunter link closes the existing modal, filters the catalog, and viewer returns focus',()=>{
    const h=harness();h.modal.open=true;
    h.click('[data-open-equipment]',{dataset:{openEquipment:'zero'}});
    assert.equal(h.modal.open,false);
    assert.equal(h.element('#equipment-person').value,'zero');
    assert.ok(h.element('#equipment-heading').focused);
    assert.ok(h.element('[data-target="equipment-section"]').clicked);
    const button={dataset:{equipmentImage:equipmentData[0].id},focused:false,focus(){this.focused=true;}};
    h.click('[data-equipment-image]',button);
    assert.ok(h.element('#equipment-viewer').open);
    assert.match(h.element('.equipment-viewer-image').innerHTML,new RegExp(equipmentData[0].src));
    assert.match(h.element('.equipment-viewer-credit').innerHTML,/출처 자료실/);
    h.click('[data-equipment-zoom]',{});assert.equal(h.element('[data-equipment-zoom]').attrs['aria-pressed'],'true');
    h.click('[data-equipment-close]',{});assert.equal(h.element('#equipment-viewer').open,false);assert.ok(button.focused);
});
