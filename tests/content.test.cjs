const test = require('node:test');
const assert = require('node:assert/strict');
const { charactersData } = require('../data/characters.js');
const { bossesData } = require('../data/bosses.js');
const { storyData, timelineData, timelineWorldsData, x9Data } = require('../data/story.js');
const { sourcesData } = require('../data/sources.js');
const { relationshipsData, glossaryData } = require('../data/lore.js');
const { creatorNotesData, creatorNoteKinds } = require('../data/creator-notes.js');
const { motifsData, motifKinds } = require('../data/motifs.js');
const { mysteriesData } = require('../data/mysteries.js');
const { mediaData } = require('../data/media.js');
const { readingsData } = require('../data/readings.js');
const { endingsData, endingThemesData } = require('../data/endings.js');
const { bossDesignData } = require('../data/boss-designs.js');
const { projectRoadmapData, x9ContinuityData, getProjectAudit } = require('../data/project.js');
const { x9PremiseData, x9WorldStateData, characterGuidesData, x9SocietyData, x9BossesData, x9DesignChecksData } = require('../data/x9-planning.js');
const fs = require('node:fs');
const path = require('node:path');

test('atlas locations have evidence and real people; fan facilities stay separate', () => {
    const {locationsData,atlasReferencesData,harborFacilitiesData,harborConnectionsData}=require('../data/locations.js');
    const people=new Set([...charactersData,...bossesData].map(p=>p.id));
    const ids=new Set(locationsData.map(p=>p.id));
    assert.equal(ids.size,locationsData.length);
    assert.deepEqual([...new Set(locationsData.map(p=>p.series))].sort(),['X1','X2','X3','X4','X5','X6','X7','X8']);
    for (const p of locationsData) {
        assert.ok(p.locator && p.unknown && p.relation && p.sources.length);
        assert.ok(!('x' in p) && !('y' in p),'Official locations must not invent map coordinates');
        for (const id of p.characterIds) assert.ok(people.has(id),`${p.id}: ${id}`);
        for (const id of p.sources) assert.ok(sourcesData[id],`${p.id}: ${id}`);
    }
    for (const ref of atlasReferencesData) {
        for (const id of ref.sources) assert.ok(sourcesData[id]);
        if (ref.image) {
            assert.ok(fs.statSync(path.join(__dirname,'../dashboard',ref.image.src)).size>0);
            assert.ok(ref.image.width>0 && ref.image.height>0 && ref.image.credit && ref.image.original && ref.image.source);
        }
    }
    assert.deepEqual(harborFacilitiesData.map(f=>f.id).sort(),x9BossesData.map(b=>b.id).sort());
    const fanIds=new Set(harborFacilitiesData.map(f=>f.id));
    for (const id of fanIds) assert.ok(!ids.has(id) && !people.has(id));
    for (const e of harborConnectionsData) {
        assert.ok(fanIds.has(e.from) && fanIds.has(e.to) && e.from!==e.to && e.kind && e.label);
    }
    for (const id of fanIds) assert.ok(harborConnectionsData.some(e=>e.from===id||e.to===id));
    assert.equal(new Set(harborConnectionsData.map(e=>e.from+'>'+e.to)).size,harborConnectionsData.length);
});

test('every main character and boss has a local image with dimensions and provenance', () => {
    const people = [...charactersData, ...bossesData];
    assert.deepEqual(Object.keys(mediaData.characters).sort(), people.map(p => p.id).sort());
    assert.equal(new Set(people.map(p => mediaData.characters[p.id].portrait)).size, people.length);
    for (const person of people) {
        for (const key of [mediaData.characters[person.id].portrait, mediaData.characters[person.id].artwork]) {
            const asset = mediaData.assets[key];
            assert.ok(asset, `${person.id}: ${key}`);
            assert.ok(asset.width > 0 && asset.height > 0, person.id);
            assert.ok(asset.alt.includes(person.name), person.id);
            assert.ok(asset.caption && asset.sourceLabel && asset.copyright, person.id);
            assert.match(asset.source, /^https:\/\//);
            assert.match(asset.original, /^https:\/\//);
            assert.match(asset.src, /^assets\/images\/characters\/[a-z0-9_]+\.(png|jpg)$/);
            assert.ok(fs.statSync(path.join(__dirname, '../dashboard', asset.src)).size > 0, person.id);
        }
    }
});

test('galleries cover appearances, keep source works separate, and disclose missing images', () => {
    for (const person of [...charactersData, ...bossesData]) {
        const gallery = mediaData.characters[person.id].gallery;
        const appearances = person.appearances || [person.series];
        assert.deepEqual(gallery.filter(g => g.scope === 'main').map(g => g.series), appearances);
        assert.equal(new Set(gallery.map(g => g.series)).size, gallery.length);
        for (const group of gallery) {
            assert.ok(group.title && ['main', 'supplement'].includes(group.scope));
            assert.equal(new Set(group.assetIds).size, group.assetIds.length);
            if (!group.assetIds.length) assert.ok(group.note, `${person.id}/${group.series}`);
            for (const key of group.assetIds) {
                const asset = mediaData.assets[key];
                assert.ok(asset, `${person.id}/${group.series}/${key}`);
                assert.equal(asset.workId, group.series);
                assert.ok(asset.alt.includes(person.name));
                assert.ok(asset.width > 0 && asset.height > 0 && asset.sourceLabel);
                assert.match(asset.original, /^https:\/\//);
                assert.match(asset.source, /^https:\/\//);
                assert.match(asset.src, /^assets\/images\/characters\/[a-z0-9_]+\.(png|jpg)$/);
                assert.ok(fs.statSync(path.join(__dirname, '../dashboard', asset.src)).size > 0);
            }
        }
    }
    for (const id of ['x', 'zero', 'sigma']) {
        assert.equal(mediaData.characters[id].gallery.filter(g => g.scope === 'main' && g.assetIds.length).length, 8);
    }
    assert.ok(mediaData.characters.sigma.gallery.find(g => g.series === 'X2').assetIds.length > 1);
    assert.ok(mediaData.characters.light.gallery.find(g => g.series === 'X1').assetIds.length === 0);
    assert.equal(mediaData.characters.light.gallery.find(g => g.series === 'MM11').scope, 'supplement');
});

test('story links point to the intended characters and their appearances', () => {
    const byId = new Map(charactersData.map(c => [c.id, c]));
    for (const story of storyData) {
        assert.equal(story.characters.length, story.characterIds.length);
        story.characterIds.forEach((id, index) => {
            const character = byId.get(id);
            assert.ok(character, `Unknown character ${id} in ${story.series}`);
            assert.equal(character.name, story.characters[index]);
            assert.ok(character.appearances.includes(story.series));
        });
    }
});

test('character arcs use individual games and cover every listed appearance', () => {
    for (const character of charactersData) {
        assert.deepEqual(Object.keys(character.story_arc).sort(), [...character.appearances].sort(), character.id);
        assert.ok(Object.values(character.story_arc).every(text => text.trim().length > 0));
    }
});

test('all eight X1 guides agree with the searchable weapon data', () => {
    const x1 = bossesData.filter(b => b.series === 'X1');
    assert.equal(x1.length, 8);
    for (const boss of x1) {
        assert.ok(boss.guide, boss.id);
        assert.equal(boss.guide.weaknessWeapon, boss.weakness);
        assert.equal(boss.guide.rewardWeapon, boss.weapon);
        assert.ok(boss.guide.patterns.length >= 2);
        assert.ok(boss.guide.items.length >= 1);
        assert.ok(boss.guide.sources.includes(boss.id));
        assert.match(boss.guide.version, /SFC\/SNES/);
    }
});

test('source references resolve to public HTTPS URLs and disclose their scope', () => {
    const records = [...charactersData, ...bossesData, ...storyData, ...timelineData, ...timelineWorldsData, ...relationshipsData, ...glossaryData, ...creatorNotesData, ...mysteriesData, ...readingsData, ...endingsData, ...bossDesignData, ...x9ContinuityData, ...characterGuidesData];
    for (const record of records) {
        if (record.sources?.length) assert.ok(record.sourceScope, record.id || record.series);
        for (const id of [...(record.sources || []), ...(record.guide?.sources || [])]) {
            assert.ok(sourcesData[id], `Missing source ${id}`);
            const url = new URL(sourcesData[id].url);
            assert.equal(url.protocol, 'https:');
            assert.ok(sourcesData[id].title && sourcesData[id].kind);
        }
    }
});

test('relationships and glossary links resolve to people, including stage characters', () => {
    const ids = new Set([...charactersData, ...bossesData].map(person => person.id));
    const pairs = new Set();
    for (const relation of relationshipsData) {
        assert.ok(ids.has(relation.from), relation.from);
        assert.ok(ids.has(relation.to), relation.to);
        assert.notEqual(relation.from, relation.to);
        const pair = [relation.from, relation.to].sort().join(':');
        assert.ok(!pairs.has(pair), `Duplicate relationship ${pair}`);
        pairs.add(pair);
        assert.ok(relation.summary && relation.development && relation.sources.length);
    }
    for (const term of glossaryData) {
        for (const id of term.characterIds) assert.ok(ids.has(id), `${term.id}: ${id}`);
        assert.ok(term.sources.length);
    }
});

test('narrative coverage distinguishes human appearances and story branches', () => {
    for (const id of ['light', 'cain', 'wily']) {
        const person = charactersData.find(person => person.id === id);
        assert.equal(person.type, 'HUMAN');
        assert.ok(person.appearance_notes);
    }
    for (const story of storyData) {
        assert.ok(story.connection, story.series);
        if (story.series !== 'X1') assert.ok(story.branches.length >= 2, story.series);
        for (const branch of story.branches) assert.ok(branch.condition && branch.event && branch.outcome);
    }
});

test('records remain unique and fan fiction is explicitly classified', () => {
    const ids = [...charactersData, ...bossesData].map(item => item.id);
    assert.equal(new Set(ids).size, ids.length);
    for (let i = 1; i <= 8; i++) assert.equal(bossesData.filter(b => b.series === `X${i}`).length, 8);
    assert.ok(x9Data.every(chapter => chapter.kind === 'fan-fiction'));
});

test('creator notes disclose provenance and link only to existing people and stories', () => {
    const people = new Set([...charactersData, ...bossesData].map(person => person.id));
    const series = new Set(storyData.map(story => story.series));
    assert.equal(new Set(creatorNotesData.map(note => note.id)).size, creatorNotesData.length);
    for (const note of creatorNotesData) {
        assert.ok(creatorNoteKinds[note.kind], note.id);
        for (const field of ['title', 'speaker', 'role', 'publishedAt', 'publication', 'locator', 'summary', 'context', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof note[field] === 'string' && note[field].trim(), `${note.id}: ${field}`);
        }
        if (note.category === 'design') {
            assert.ok(note.subject && note.work, `${note.id}: unlisted characters need an explicit subject and work`);
        } else {
            assert.ok(note.characterIds.length + note.seriesIds.length > 0, note.id);
        }
        note.characterIds.forEach(id => assert.ok(people.has(id), `${note.id}: ${id}`));
        note.seriesIds.forEach(id => assert.ok(series.has(id), `${note.id}: ${id}`));
        assert.ok(note.sources.length, note.id);
        note.sources.forEach(id => assert.ok(sourcesData[id]?.accessNote, `${note.id}: source access scope`));
    }
    for (const kind of Object.keys(creatorNoteKinds)) assert.ok(creatorNotesData.some(note => note.kind === kind));
});

test('story readings cover every game and link to people present in that game', () => {
    assert.equal(new Set(readingsData.map(item => item.id)).size, readingsData.length);
    assert.deepEqual([...new Set(readingsData.map(item => item.series))].sort(), storyData.map(item => item.series).sort());
    const people = new Map([...charactersData, ...bossesData].map(person => [person.id, person]));
    for (const item of readingsData) {
        for (const key of ['title', 'scene', 'reading', 'contrast', 'boundary', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof item[key] === 'string' && item[key].trim(), `${item.id}: ${key}`);
        }
        assert.ok(item.sources.length && item.characterIds.length, item.id);
        assert.equal(new Set(item.characterIds).size, item.characterIds.length, item.id);
        for (const id of item.characterIds) {
            const person = people.get(id);
            assert.ok(person, `${item.id}: ${id}`);
            assert.ok((person.appearances || [person.series]).includes(item.series), `${item.id}: ${id} absent in ${item.series}`);
        }
    }
});

test('boss design research covers the roster and separates observations from creative proposals', () => {
    assert.deepEqual(bossDesignData.map(item => item.bossId).sort(), bossesData.map(boss => boss.id).sort());
    const cases = bossDesignData.filter(item => item.observation);
    assert.deepEqual([...new Set(cases.map(item => bossesData.find(boss => boss.id === item.bossId).series))].sort(), storyData.map(story => story.series).sort());
    for (const item of bossDesignData) {
        assert.equal(item.kind, 'analysis', item.bossId);
        for (const key of ['motif', 'prompt', 'sourceScope', 'reviewedAt']) assert.ok(item[key]?.trim(), `${item.bossId}: ${key}`);
        assert.ok(item.sources.length, item.bossId);
        if (item.observation) {
            for (const key of ['combination', 'analysis', 'modeling', 'storyQuestion', 'locator']) assert.ok(item[key]?.trim(), `${item.bossId}: ${key}`);
            assert.notDeepEqual(item.sources, ['boss_motif_index'], `${item.bossId}: detailed claims need individual evidence`);
        }
    }
    const generalInterview = creatorNotesData.find(note => note.id === 'boss-attack-before-appearance');
    assert.deepEqual(generalInterview.seriesIds, [], 'MN9-era interview must not be indexed as an X-game event');
});

test('ending comparisons cover each game once and preserve route and source boundaries', () => {
    assert.deepEqual(endingsData.map(item => item.series), storyData.map(item => item.series));
    const series = new Set(endingsData.map(item => item.series));
    for (const item of endingsData) {
        for (const key of ['title', 'version', 'scene', 'epilogue', 'theme', 'continuation', 'caution', 'creativeQuestion', 'locator', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof item[key] === 'string' && item[key].trim(), `${item.series}: ${key}`);
        }
        assert.ok(item.sources.length && item.routes.length, item.series);
        assert.equal(new Set(item.routes.map(route => route.condition)).size, item.routes.length);
        for (const route of item.routes) assert.ok(route.condition && route.result, item.series);
    }
    assert.equal(new Set(endingThemesData.map(theme => theme.id)).size, endingThemesData.length);
    for (const theme of endingThemesData) {
        assert.ok(theme.title && theme.reading && theme.prompt);
        assert.ok(theme.seriesIds.length > 1);
        for (const id of theme.seriesIds) assert.ok(series.has(id), `${theme.id}: ${id}`);
    }
});

test('project audit tracks missing evidence and distinguishes continuity from creative choices', () => {
    const audit = getProjectAudit(bossesData, bossDesignData, mediaData);
    assert.equal(audit.linkedSources + audit.missingSources.length, bossesData.length);
    assert.deepEqual(audit.missingSources, bossesData.filter(b => !b.sources?.length).map(b => b.id));
    assert.equal(audit.missingDesigns.length, bossesData.length - bossDesignData.filter(b => b.observation).length);
    for (const gap of audit.missingGallery) {
        assert.equal(mediaData.characters[gap.id].gallery.find(group => group.series === gap.series).assetIds.length, 0);
    }
    // Counts respond to added evidence, not a hardcoded completion percentage.
    const fixture = [{id:'without_source'}, {id:'with_source', sources:['test_source']}];
    const before = getProjectAudit(fixture, [], {characters:{}});
    assert.deepEqual(before.missingSources, ['without_source']);
    const amended = fixture.map(b => ({...b, sources:['test_source']}));
    assert.equal(getProjectAudit(amended, [], {characters:{}}).linkedSources, before.linkedSources + 1);
    assert.equal(new Set(projectRoadmapData.map(p => p.id)).size, projectRoadmapData.length);
    for (const phase of projectRoadmapData) {
        for (const key of ['title', 'status', 'deliverable', 'progress', 'next', 'doneWhen']) assert.ok(phase[key]?.trim());
    }
    const people = new Set([...charactersData, ...bossesData].map(p => p.id));
    assert.equal(new Set(x9ContinuityData.map(p => p.id)).size, x9ContinuityData.length);
    for (const item of x9ContinuityData) {
        for (const key of ['known', 'unknown', 'choice', 'locator', 'sourceScope', 'reviewedAt']) assert.ok(item[key]?.trim(), item.id);
        assert.equal(new Set([item.known, item.unknown, item.choice]).size, 3);
        assert.ok(item.sources.length && item.characterIds.length);
        item.characterIds.forEach(id => assert.ok(people.has(id)));
    }
    for (const boss of bossesData.filter(b => b.series === 'X8')) {
        assert.deepEqual(boss.reviewedFields, ['profile', 'affiliation', 'title']);
        assert.ok(boss.sources.length && boss.reviewNote && boss.sourceScope);
        assert.doesNotMatch(boss.profile + boss.affiliation, /\?{3,}|다이너모 해적|가공의 생태계/);
    }
});

test('motifs distinguish interpretation, confirmation and source roles with valid links', () => {
    const people = new Set([...charactersData, ...bossesData].map(person => person.id));
    const series = new Set(storyData.map(story => story.series));
    assert.equal(new Set(motifsData.map(motif => motif.id)).size, motifsData.length);
    for (const motif of motifsData) {
        assert.ok(motifKinds[motif.kind], motif.id);
        for (const field of ['title', 'work', 'origin', 'element', 'interpretation', 'confirmation', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof motif[field] === 'string' && motif[field].trim(), `${motif.id}: ${field}`);
        }
        assert.ok(Array.isArray(motif.originSources));
        assert.ok(motif.workSources.length, motif.id);
        for (const id of [...motif.originSources, ...motif.workSources]) {
            const source = sourcesData[id];
            assert.ok(source?.title && source.kind, `${motif.id}: ${id}`);
            assert.equal(new URL(source.url).protocol, 'https:');
        }
        motif.characterIds.forEach(id => assert.ok(people.has(id), `${motif.id}: ${id}`));
        motif.seriesIds.forEach(id => assert.ok(series.has(id), `${motif.id}: ${id}`));
        // Zero-series comparisons must not be presented as events in an X-series story.
        if (motif.work.startsWith('록맨 제로')) assert.deepEqual(motif.seriesIds, []);
        if (motif.kind === 'comparison') assert.ok(motif.originSources.length, motif.id);
        if (motif.kind === 'commentary') {
            assert.ok(motif.workSources.some(id => sourcesData[id].kind.startsWith('공식')), motif.id);
        }
    }
});

test('unresolved clues separate evidence, interpretation, alternatives and unanswered questions', () => {
    const people = new Set([...charactersData, ...bossesData].map(person => person.id));
    const series = new Set(storyData.map(story => story.series));
    assert.equal(new Set(mysteriesData.map(item => item.id)).size, mysteriesData.length);
    for (const item of mysteriesData) {
        for (const field of ['title', 'work', 'evidence', 'interpretation', 'alternatives', 'unresolved', 'confirmation', 'locator', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof item[field] === 'string' && item[field].trim(), `${item.id}: ${field}`);
        }
        assert.equal(new Set([item.evidence, item.interpretation, item.alternatives, item.unresolved]).size, 4, item.id);
        assert.ok(item.sources.length && item.characterIds.length && item.seriesIds.length, item.id);
        item.characterIds.forEach(id => assert.ok(people.has(id), `${item.id}: ${id}`));
        item.seriesIds.forEach(id => assert.ok(series.has(id), `${item.id}: ${id}`));
        for (const ids of [item.sources, item.characterIds, item.seriesIds]) assert.equal(new Set(ids).size, ids.length, item.id);
    }
});

test('timelines keep all seven series in two separate worlds and distinguish historical events', () => {
    assert.deepEqual(timelineWorldsData.map(world => world.id), ['robot', 'network']);
    assert.equal(new Set(timelineData.map(item => item.id)).size, timelineData.length);
    const expected = {
        robot: ['classic', 'x-era', 'zero-era', 'zx-era', 'dash-era'],
        network: ['exe-era', 'starforce-era']
    };
    for (const world of timelineWorldsData) {
        assert.ok(world.name && world.summary && world.scope && world.sources.length && world.reviewedAt);
        const items = timelineData.filter(item => item.worldId === world.id);
        assert.deepEqual(items.filter(item => item.kind === 'series').map(item => item.id), expected[world.id]);
    }
    for (const item of timelineData) {
        assert.ok(expected[item.worldId], item.id);
        assert.ok(['series', 'event'].includes(item.kind), item.id);
        for (const field of ['shortName', 'era', 'series', 'intro', 'title', 'desc', 'connection', 'sourceScope', 'reviewedAt']) {
            assert.ok(typeof item[field] === 'string' && item[field].trim(), `${item.id}: ${field}`);
        }
        assert.ok(item.sources.length, item.id);
    }
    const robotIds = timelineData.filter(item => item.worldId === 'robot').map(item => item.id);
    assert.equal(timelineData.find(item => item.id === 'elf-wars').kind, 'event');
    assert.ok(robotIds.indexOf('elf-wars') > robotIds.indexOf('x-era'));
    assert.ok(robotIds.indexOf('elf-wars') < robotIds.indexOf('zero-era'));
});

test('all boss reviews keep unresolved claims and remake-only evidence explicit', () => {
    for (const boss of bossesData) {
        assert.equal(boss.titleKind, 'editorial', boss.id);
        assert.deepEqual(boss.reviewedFields, ['profile','affiliation','title']);
        assert.ok(boss.evidence.pending && boss.evidence.locator && boss.evidence.edition && boss.evidence.titleNote, boss.id);
        assert.ok(['기본 정보만 확인','범위 한정 대조'].includes(boss.evidence.status));
        if (boss.evidence.status === '기본 정보만 확인') {
            assert.notEqual(boss.evidence.pending, boss.evidence.known, boss.id);
        }
        if (boss.evidence.supplement) {
            assert.equal(boss.evidence.supplement.kind, 'official-remake');
            assert.equal(boss.series, 'X1');
            assert.ok(boss.sources.includes(boss.evidence.supplement.source));
            assert.ok(sourcesData[boss.evidence.supplement.source]?.accessNote);
        }
        assert.doesNotMatch(boss.profile, /학원장|부스터 밀수단|변이된 엑스의 정글|콜로세움|미친 과학자/);
    }
    assert.equal(bossesData.filter(b=>b.evidence.supplement).length,8);
});

test('voice guides cite separate scenes and distinguish examples from quotations', () => {
    assert.deepEqual(characterGuidesData.map(g=>g.characterId).sort(), ['axl','x','zero']);
    for (const guide of characterGuidesData) {
        assert.equal(guide.kind,'analysis');
        assert.ok(guide.scenes.length >= 3);
        assert.equal(new Set(guide.scenes.map(s=>s.work+':'+s.locator)).size,guide.scenes.length);
        for (const field of ['values','anger','limits','speech','tension','example','exampleAction','avoid']) assert.ok(guide[field]?.trim(), `${guide.id}: ${field}`);
        for (const scene of guide.scenes) {
            assert.ok(scene.work && scene.locator && scene.scene && scene.supports);
            scene.sources.forEach(id=>assert.ok(sourcesData[id]?.accessNote,id));
            if (scene.quote) {
                assert.ok(scene.quoteSpeaker && scene.translation);
                assert.notEqual(scene.quote, guide.example);
            }
        }
    }
});

test('X9 premise and world assumptions are fan planning with traceable continuity', () => {
    assert.equal(x9PremiseData.kind,'fan-fiction');
    assert.equal(x9SocietyData.kind,'fan-fiction');
    const continuity = new Set(x9ContinuityData.map(c=>c.id));
    assert.equal(x9PremiseData.draftReview.length,x9Data.length);
    for (const field of ['question','theme','start','antagonist','incident','conflict','change','ending','scope']) assert.ok(x9PremiseData[field]?.trim(),field);
    assert.equal(new Set(x9PremiseData.assumptions.map(a=>a.id)).size,x9PremiseData.assumptions.length);
    x9PremiseData.assumptions.forEach(a=> {
        assert.ok(a.choice && a.boundary);
        assert.ok(continuity.has(a.continuityId));
    });
    assert.deepEqual(x9WorldStateData.map(s=>s.id).sort(),['axl','society','x','zero']);
    for (const row of x9WorldStateData) {
        assert.ok(row.known && row.unresolved && row.proposal);
        row.continuityIds.forEach(id=>assert.ok(continuity.has(id)));
    }
});

test('new eight bosses have a connected society and a complete non-repeating tool cycle', () => {
    assert.equal(x9BossesData.length,8);
    const ids = new Set(x9BossesData.map(b=>b.id));
    assert.equal(ids.size,8);
    const officialIds = new Set([...charactersData,...bossesData].map(p=>p.id));
    for (const b of x9BossesData) {
        assert.ok(!officialIds.has(b.id));
        assert.equal(b.kind,'fan-fiction');
        for(const field of ['role','protects','conflict','personality','question','body','motion','toolChain','stage','resolution','cost','modelNotes','distinction']) assert.ok(b[field]?.trim(),`${b.id}: ${field}`);
        assert.ok(b.weapon.name && b.weapon.function && b.weapon.limit);
        assert.ok(b.attacks.length>=2 && b.relationships.length>=2);
        for(const attack of b.attacks) for(const field of ['name','cue','action','response','recovery']) assert.ok(attack[field]?.trim(),`${b.id}: ${field}`);
        b.relationships.forEach(r=> { assert.ok(ids.has(r.id)); assert.notEqual(r.id,b.id); assert.ok(r.text); });
    }
    for(const key of ['silhouetteTag','movementTag','arenaTag','weaponTag']) assert.equal(new Set(x9BossesData.map(b=>b[key])).size,8,key);
    const edges = x9DesignChecksData.interactions;
    assert.equal(edges.length,8);
    assert.deepEqual([...new Set(edges.map(e=>e.from))].sort(),[...ids].sort());
    assert.deepEqual([...new Set(edges.map(e=>e.to))].sort(),[...ids].sort());
    const visited=new Set(); let cursor=edges[0].from;
    while(!visited.has(cursor)) { visited.add(cursor); cursor=edges.find(e=>e.from===cursor).to; }
    assert.equal(visited.size,8,'one cycle covers the full roster');
    assert.ok(ids.has(x9DesignChecksData.prototype.bossId));
    for(const pair of x9DesignChecksData.pairChecks) { pair.ids.forEach(id=>assert.ok(ids.has(id))); assert.ok(pair.risk && pair.distinction); }
});
