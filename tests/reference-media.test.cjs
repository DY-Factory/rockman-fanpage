const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {createHash} = require('node:crypto');
const {referenceMediaData} = require('../data/reference-media.js');
const {locationsData} = require('../data/locations.js');
const {charactersData} = require('../data/characters.js');
const {bossesData} = require('../data/bosses.js');

test('reference files match their manifest and have valid provenance and contextual links',()=>{
    const assets=referenceMediaData.assets;
    const people=new Set([...charactersData,...bossesData].map(p=>p.id));
    const places=new Set(locationsData.map(p=>p.id));
    const hashes=new Set(), ids=new Set();
    for(const a of assets) {
        assert.ok(!ids.has(a.id));ids.add(a.id);
        assert.ok(!hashes.has(a.sha256),'Exact duplicate file: '+a.id);hashes.add(a.sha256);
        const bytes=fs.readFileSync(path.join(__dirname,'../dashboard',a.src));
        assert.equal(bytes.length,a.bytes,a.id);
        assert.equal(createHash('sha256').update(bytes).digest('hex'),a.sha256,a.id);
        assert.ok(a.width>0&&a.height>0&&a.author&&a.caption&&a.notes&&a.edition,a.id);
        assert.equal(typeof a.spoiler,'boolean');
        assert.equal(new URL(a.source).protocol,'https:');
        assert.equal(new URL(a.original).protocol,'https:');
        for(const id of a.characterIds) assert.ok(people.has(id),`${a.id}: ${id}`);
        for(const id of a.locationIds) assert.ok(places.has(id),`${a.id}: ${id}`);
    }
    assert.deepEqual(JSON.parse(fs.readFileSync(path.join(__dirname,'../dashboard/assets/images/references/manifest.json'),'utf8')),referenceMediaData);
    for(const id of places) assert.ok(assets.some(a=>a.locationIds.includes(id)),id);
});

test('fan map and translation are distinct from official document and game editions',()=>{
    const find=id=>referenceMediaData.assets.find(a=>a.id===id);
    assert.equal(find('ref-fan-world-map').kind,'fan-work');
    assert.match(find('ref-fan-world-map').author,/IrregularSaturn/);
    assert.equal(find('ref-design-x1-01').kind,'official-document');
    assert.equal(find('ref-design-x1-02').kind,'fan-work');
    assert.equal(find('ref-jakob-compare-02').work,'X8');
    assert.ok(referenceMediaData.assets.some(a=>a.work==='XDIVE'&&a.locationIds.includes('jakob')));
});
