// Separate equipment evidence from the representative character art.
const equipmentPeople = {x:'엑스',zero:'제로',axl:'엑셀'};
let equipmentSelection = {person:'ALL',work:'ALL',kind:'ALL',format:'ALL',query:''};
let equipmentReturnFocus;

function equipmentCharacterLink(id) {
    if (!equipmentPeople[id]) return '';
    return `<button type="button" class="reset-btn equipment-jump" data-open-equipment="${id}">아머·무기 모습 보기 →</button>`;
}

function renderEquipment() {
    const root=document.getElementById('equipment-container');
    root.innerHTML=`<div class="equipment-intro"><p>아머의 색과 실루엣부터 버스터의 탄환, 세이버의 궤적까지.</p><p class="content-note">X1~X8 본편의 주요 아머·무기·기술 자료입니다. 스프라이트 시트는 여러 동작을 한 이미지에 모은 게임 자료입니다. 텍스처 자료는 3D 모델의 표면을 펼친 이미지이며 완성된 장착 모습과 다릅니다. 카드를 누르면 확대해서 볼 수 있습니다.</p><a href="assets/images/equipment/manifest.json" download="rockman-equipment-manifest.json">장비 이미지 목록·출처 내려받기</a></div>
    <form class="equipment-filters" aria-label="아머·무기 찾기">
      <label>인물<select id="equipment-person"><option value="ALL">세 인물 모두</option>${Object.entries(equipmentPeople).map(([id,name])=>`<option value="${id}">${name}</option>`).join('')}</select></label>
      <label>작품<select id="equipment-work"><option value="ALL">모든 작품</option>${Array.from({length:8},(_,i)=>`<option>X${i+1}</option>`).join('')}</select></label>
      <label>분류<select id="equipment-kind"><option value="ALL">아머와 무기 모두</option><option>아머·강화 형태</option><option>무기·기술</option></select></label>
      <label>이미지 종류<select id="equipment-format"><option value="ALL">모든 이미지</option><option>스프라이트 시트</option><option>게임 화면</option><option>장비 아이콘</option><option>텍스처 자료</option></select></label>
      <label>장비 이름<input type="search" id="equipment-query" placeholder="팔콘, Z 세이버, 블랙 제로…"></label>
      <button type="button" class="reset-btn" data-equipment-reset>초기화</button>
    </form>
    <p id="equipment-status" class="content-note" role="status" aria-live="polite" aria-atomic="true"></p>
    <div id="equipment-results"></div>
    <dialog id="equipment-viewer" class="equipment-viewer" aria-labelledby="equipment-viewer-title"><div class="equipment-viewer-toolbar"><h3 id="equipment-viewer-title"></h3><button type="button" class="reset-btn" data-equipment-zoom aria-pressed="false">원본 크기</button><button type="button" class="reset-btn" data-equipment-close autofocus>닫기 ×</button></div><div class="equipment-viewer-image"></div><div class="equipment-viewer-credit"></div></dialog>`;
    root.querySelector('form').addEventListener('submit',e=>e.preventDefault());
    for (const [id,key] of [['person','person'],['work','work'],['kind','kind'],['format','format'],['query','query']]) {
        root.querySelector(`#equipment-${id}`).addEventListener(id==='query'?'input':'change',e=>{equipmentSelection[key]=e.target.value;updateEquipment();});
    }
    const dialog=root.querySelector('dialog');
    dialog.addEventListener('close',()=>{dialog.classList.remove('is-original');equipmentReturnFocus?.focus();});
    dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
    updateEquipment();
}

function equipmentCredits(a) {
    return `<p>${escapeHtml(a.copyright)} · <a href="${escapeHtml(a.source)}" target="_blank" rel="noopener noreferrer">출처 자료실</a> · <a href="${escapeHtml(a.original)}" target="_blank" rel="noopener noreferrer">원본 파일</a></p>`;
}

function updateEquipment() {
    const s=equipmentSelection;
    const items=window.equipmentData.filter(a=>(s.person==='ALL'||a.characterId===s.person)&&(s.work==='ALL'||a.work===s.work)&&(s.kind==='ALL'||a.kind===s.kind)&&(s.format==='ALL'||a.imageKind===s.format)&&`${a.name} ${equipmentPeople[a.characterId]} ${a.work}`.toLocaleLowerCase('ko').includes(s.query.trim().toLocaleLowerCase('ko')));
    document.getElementById('equipment-status').textContent=`${items.length}개 자료 · ${new Set(items.map(a=>a.src)).size}개 이미지 파일`;
    const groups=new Map();
    for(const a of items) {
        const key=a.work+' · '+equipmentPeople[a.characterId];
        if(!groups.has(key))groups.set(key,[]);
        groups.get(key).push(a);
    }
    const results=document.getElementById('equipment-results');
    results.innerHTML=items.length?[...groups].sort(([a],[b])=>a.localeCompare(b,'ko',{numeric:true})).map(([label,entries])=>`<section class="equipment-group"><h3>${escapeHtml(label)}</h3><div class="equipment-grid">${entries.map(a=>`<article class="equipment-card"><button type="button" class="equipment-preview${a.imageKind==='텍스처 자료'?' is-texture':''}" data-equipment-image="${a.id}" aria-label="${escapeHtml(a.work+' '+a.name+' · '+a.imageKind+' 확대')}" ><img src="${escapeHtml(a.src)}" width="${a.width}" height="${a.height}" alt="${escapeHtml(a.work+' '+equipmentPeople[a.characterId]+' '+a.name+' · '+a.imageKind)}" loading="lazy" decoding="async"></button><div class="equipment-card-body"><span class="equipment-badge">${escapeHtml(a.kind)} · ${escapeHtml(a.imageKind)}</span><h4>${escapeHtml(a.name)}</h4><p>${escapeHtml(a.note||'원본 시트의 동작과 색상을 비교해 보세요.')}</p><details><summary>이미지 출처</summary>${equipmentCredits(a)}</details></div></article>`).join('')}</div></section>`).join(''):'<div class="empty-state"><h3>조건에 맞는 자료가 없습니다</h3><p>인물·작품·분류 또는 검색어를 바꿔 보세요.</p><button type="button" class="reset-btn" data-equipment-reset>전체 도감 보기</button></div>';
}

function resetEquipment(person='ALL') {
    equipmentSelection={person,work:'ALL',kind:'ALL',format:'ALL',query:''};
    for(const key of ['person','work','kind','format','query'])document.getElementById('equipment-'+key).value=equipmentSelection[key];
    updateEquipment();
}

document.addEventListener('DOMContentLoaded',renderEquipment);
document.addEventListener('click',event=>{
    const tab=event.target.closest('[data-target="equipment-section"]');
    if(tab){hideAllSections();tab.classList.add('active');document.getElementById('equipment-section').classList.add('active');}
    const jump=event.target.closest('[data-open-equipment]');
    if(jump){
        resetEquipment(jump.dataset.openEquipment);
        if(modal.open)closeModal();
        document.querySelector('[data-target="equipment-section"]').click();
        document.getElementById('equipment-heading').focus();
        document.getElementById('equipment-heading').scrollIntoView({block:'start'});
    }
    if(event.target.closest('[data-equipment-reset]'))resetEquipment();
    const button=event.target.closest('[data-equipment-image]');
    if(button){
        const a=window.equipmentData.find(a=>a.id===button.dataset.equipmentImage);
        const viewer=document.getElementById('equipment-viewer');
        equipmentReturnFocus=button;
        viewer.querySelector('h3').textContent=`${a.work} · ${equipmentPeople[a.characterId]} · ${a.name}`;
        viewer.querySelector('.equipment-viewer-image').innerHTML=`<img src="${escapeHtml(a.src)}" width="${a.width}" height="${a.height}" alt="${escapeHtml(a.name+' · '+a.imageKind)}">`;
        viewer.querySelector('.equipment-viewer-credit').innerHTML=`<p>${escapeHtml(a.imageKind+' · '+a.width+' × '+a.height+' · '+a.note)}</p>${equipmentCredits(a)}`;
        viewer.querySelector('[data-equipment-zoom]').setAttribute('aria-pressed','false');
        viewer.showModal();
    }
    if(event.target.closest('[data-equipment-close]'))document.getElementById('equipment-viewer').close();
    if(event.target.closest('[data-equipment-zoom]')){
        const viewer=document.getElementById('equipment-viewer');
        const active=viewer.classList.toggle('is-original');
        viewer.querySelector('[data-equipment-zoom]').setAttribute('aria-pressed',String(active));
    }
});
