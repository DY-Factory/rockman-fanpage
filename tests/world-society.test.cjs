const test=require('node:test');
const assert=require('node:assert/strict');
const {worldSocietyData:d}=require('../data/world-society.js');
const {sourcesData}=require('../data/sources.js');
const {charactersData}=require('../data/characters.js');
const {bossesData}=require('../data/bosses.js');

test('society evidence and person links resolve; summaries preserve limits and source locations',()=>{
    const people=new Set([...charactersData,...bossesData].map(p=>p.id));
    const ids=new Set();
    for(const [group,items] of Object.entries(d)){
        if(!Array.isArray(items))continue;
        for(const row of items){
            assert.ok(!ids.has(row.id),row.id);ids.add(row.id);
            for(const id of row.characterIds||[])assert.ok(people.has(id),`${row.id}: ${id}`);
            if(['metrics','creative'].includes(group))continue;
            assert.ok(row.sources.length,row.id);
            for(const id of row.sources)assert.ok(sourcesData[id],`${row.id}: ${id}`);
            if(group==='unknowns'){assert.ok(row.missing&&row.known);continue;}
            assert.ok(row.limit&&row.locator,row.id);
            assert.ok(['primary','transcript','secondary','unknown','interpretation'].includes(row.evidence),row.id);
        }
    }
});

test('unknown X-era population metrics remain empty; later war losses use separate denominators',()=>{
    for(const row of d.metrics)assert.equal(row.value,null,row.id);
    const losses=d.later.find(r=>r.id==='later-losses');
    assert.match(losses.scope,/Zero 3/);
    assert.match(losses.limit,/X8/);
    assert.equal(losses.statistics.length,2);
    assert.deepEqual(losses.statistics.map(s=>s.value),[60,90]);
    assert.equal(new Set(losses.statistics.map(s=>s.denominator)).size,2);
    for(const stat of losses.statistics){assert.equal(stat.metric,'war-loss-rate');assert.equal(stat.approximately,true);}
    assert.ok(d.later.some(r=>r.scope.includes('별도 세계')));
    const main=[...d.overview,...d.roles,...d.people,...d.eras];
    assert.ok(main.every(r=>!r.statistics),'Do not move future loss rates into X-era census fields');
});

test('current humans, historical appearances and fan proposals remain distinct',()=>{
    for(const id of ['cain','light','wily']){
        assert.equal(charactersData.find(c=>c.id===id).type,'HUMAN');
        assert.ok(d.people.find(r=>r.id===`human-${id}`)?.characterIds.includes(id));
    }
    assert.equal(d.people.find(r=>r.id==='human-unknown-scientist').evidence,'unknown');
    assert.ok(d.boundaries.find(r=>r.id==='boundary-remake'));
    for(const proposal of d.creative){assert.ok(proposal.proposal&&proposal.question);assert.ok(!proposal.statistics);}
});
