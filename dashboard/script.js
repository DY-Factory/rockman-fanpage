// DOM 요소 캐싱
const btnReploids = document.querySelector('[data-target="reploids-section"]');
const btnAffiliation = document.querySelector('[data-target="affiliation-section"]');
const btnStory = document.querySelector('[data-target="story-section"]');
const btnTimeline = document.querySelector('[data-target="timeline-section"]');
const btnX9 = document.querySelector('[data-target="x9-section"]');
const btnGlossary = document.querySelector('[data-target="glossary-section"]');
const btnCreators = document.querySelector('[data-target="creators-section"]');

const secReploids = document.getElementById('reploids-section');
const secAffiliation = document.getElementById('affiliation-section');
const secStory = document.getElementById('story-section');
const secTimeline = document.getElementById('timeline-section');
const secX9 = document.getElementById('x9-section');
const secGlossary = document.getElementById('glossary-section');
const secCreators = document.getElementById('creators-section');

const gridReploids = document.getElementById('reploids-grid');
const accordionContainer = document.getElementById('affiliation-accordion');
const storyContainer = document.getElementById('story-container');
const timelineContainer = document.getElementById('timeline-container');
const x9Container = document.getElementById('x9-container');

const modal = document.getElementById('cyber-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalBody = document.getElementById('modal-body');
const modalContent = document.querySelector('.modal-content');

// --- 탭 전환 이벤트 ---
function hideAllSections() {
    document.querySelectorAll('.data-section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.cyber-nav .tab-btn').forEach(btn => btn.classList.remove('active'));
}

btnReploids.addEventListener('click', () => { hideAllSections(); btnReploids.classList.add('active'); secReploids.classList.add('active'); });
btnAffiliation.addEventListener('click', () => { hideAllSections(); btnAffiliation.classList.add('active'); secAffiliation.classList.add('active'); });
btnStory.addEventListener('click', () => { hideAllSections(); btnStory.classList.add('active'); secStory.classList.add('active'); });
btnTimeline.addEventListener('click', () => { hideAllSections(); btnTimeline.classList.add('active'); secTimeline.classList.add('active'); });
btnX9.addEventListener('click', () => { hideAllSections(); btnX9.classList.add('active'); secX9.classList.add('active'); });
btnGlossary.addEventListener('click', () => { hideAllSections(); btnGlossary.classList.add('active'); secGlossary.classList.add('active'); });
btnCreators.addEventListener('click', () => { hideAllSections(); btnCreators.classList.add('active'); secCreators.classList.add('active'); });
document.querySelector('[data-target="atlas-section"]').addEventListener('click', () => { hideAllSections(); document.querySelector('[data-target="atlas-section"]').classList.add('active'); document.getElementById('atlas-section').classList.add('active'); });
document.querySelector('[data-target="images-section"]').addEventListener('click', () => { hideAllSections(); document.querySelector('[data-target="images-section"]').classList.add('active'); document.getElementById('images-section').classList.add('active'); });


// --- 데이터 로컬 필터 상태 ---
let currentType = 'ALL';
let currentSeries = 'ALL';
let currentSearch = '';

const typeLabels = { HUNTER: '이레귤러 헌터', IRREGULAR: '이레귤러', REPLOID: '레플리로이드', HUMAN: '인간' };

function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
}

function renderSources(sourceIds = [], scope = '', reviewedAt = '') {
    const sources = [...new Set(sourceIds)].map(id => window.sourcesData?.[id]).filter(Boolean);
    if (!sources.length) return '';
    return `<details class="sources-panel">
        <summary>참고자료 · ${sources.length}개</summary>
        ${scope ? `<p>${escapeHtml(scope)}</p>` : ''}
        ${reviewedAt ? `<p>확인일: ${escapeHtml(reviewedAt)}</p>` : ''}
        <ul>${sources.map(source => `<li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} <span class="sr-only">(새 탭)</span></a> <span class="source-kind">${escapeHtml(source.kind)}</span>${source.accessNote ? `<p class="source-access-note">${escapeHtml(source.accessNote)}</p>` : ''}</li>`).join('')}</ul>
    </details>`;
}

function renderBossGuide(guide) {
    if (!guide) return '';
    return `<section class="boss-guide" aria-label="상세 공략">
        <h3>상세 공략</h3>
        <p class="content-note">${escapeHtml(guide.version)} · 플레이어: ${escapeHtml(guide.playableCharacter)}</p>
        <p><strong>스테이지:</strong> ${escapeHtml(guide.stage)}</p>
        <h4>공격 패턴과 회피</h4>
        <ul class="detail-list">${guide.patterns.map(p => `<li><strong>${escapeHtml(p.name)}</strong><p>${escapeHtml(p.response)}</p></li>`).join('')}</ul>
        <h4>약점 운용</h4>
        <p>${escapeHtml(guide.tactic)}</p>
        <details class="spoiler-block">
            <summary>수집 요소·스테이지 변화 보기</summary>
            <ul class="detail-list">${guide.items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
            <p>${escapeHtml(guide.stageEffect)}</p>
        </details>
        ${renderSources(guide.sources, '패턴·회피·수집 요소를 정리한 공략입니다. PSP 리메이크판에는 차이가 있습니다.', guide.reviewedAt)}
    </section>`;
}

function findPerson(id) {
    return [...(window.charactersData || []), ...(window.bossesData || [])].find(person => person.id === id);
}

function personLink(id) {
    const person = findPerson(id);
    return person ? `<button type="button" class="character-link" data-person-id="${escapeHtml(id)}" aria-haspopup="dialog">${escapeHtml(person.name)}</button>` : '';
}

function renderRelationships(id) {
    const relations = (window.relationshipsData || []).filter(relation => relation.from === id || relation.to === id);
    if (!relations.length) return '';
    return `<section class="relationships-panel" aria-label="인물 관계">
        <h3>인물 관계</h3>
        <details class="spoiler-block relationships-details"><summary>관계와 변화 보기 · 스포일러 포함 (${relations.length})</summary>
            <ul class="detail-list">${relations.map(relation => `<li>
                ${personLink(relation.from === id ? relation.to : relation.from)} <strong>${escapeHtml(relation.label)}</strong>
                <p>${escapeHtml(relation.summary)}</p><p>${escapeHtml(relation.development)}</p>
                ${renderSources(relation.sources, relation.sourceScope, relation.reviewedAt)}
            </li>`).join('')}</ul>
        </details>
    </section>`;
}

function renderArcs(person) {
    if (!person.story_arc) return '';
    return `<details class="spoiler-block character-arcs"><summary>작품별 주요 행적 보기 · 스포일러 포함</summary>
        <ul class="detail-list">${Object.entries(person.story_arc).map(([series, text]) => `<li><strong>${escapeHtml(series)}</strong><p>${escapeHtml(text)}</p></li>`).join('')}</ul>
        ${person.reading ? `<aside class="reading-note"><strong>읽는 관점 · 편집자의 해석</strong><p>${escapeHtml(person.reading)}</p></aside>` : ''}
    </details>`;
}

function renderBranches(story) {
    if (!story.branches?.length) return '';
    return `<div class="branch-table-wrap" role="region" aria-label="${escapeHtml(story.series)} 분기 비교" tabindex="0"><table class="branch-table">
        <caption>루트별 사건과 결말</caption><thead><tr><th scope="col">조건·루트</th><th scope="col">주요 사건</th><th scope="col">결말·차이</th></tr></thead>
        <tbody>${story.branches.map(branch => `<tr><th scope="row">${escapeHtml(branch.condition)}</th><td>${escapeHtml(branch.event)}</td><td>${escapeHtml(branch.outcome)}</td></tr>`).join('')}</tbody>
    </table></div>`;
}

function renderGlossary() {
    document.getElementById('glossary-container').innerHTML = (window.glossaryData || []).map(term => `<article class="cyber-card glossary-card">
        <h3>${escapeHtml(term.name)}</h3><p>${escapeHtml(term.text)}</p>
        <div class="character-links"><strong>관련 인물:</strong> ${term.characterIds.map(personLink).join('')}</div>
        ${renderSources(term.sources, term.sourceScope, term.reviewedAt)}
    </article>`).join('');
}

function renderCreatorNote(note, showPeople = false) {
    const kindLabel = note.category === 'design'
        ? ({ intent: '디자인 의도', concept: '초기·미채택 구상' }[note.kind] || window.creatorNoteKinds[note.kind])
        : window.creatorNoteKinds[note.kind];
    const sourceLinks = note.sources.map(id => window.sourcesData?.[id]).filter(Boolean).map(source => `
        <li><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} <span class="sr-only">(새 탭)</span></a>
        <span class="source-kind">${escapeHtml(source.kind)}</span>
        <p>${escapeHtml(source.accessNote || '')}</p></li>`).join('');
    return `<details class="creator-note" data-note-id="${escapeHtml(note.id)}">
        <summary><span class="creator-kind creator-kind-${escapeHtml(note.kind)}">${escapeHtml(kindLabel)}</span> ${escapeHtml(note.title)}</summary>
        <div class="creator-note-body">
            <dl class="creator-meta">
                ${note.subject ? `<div><dt>대상 인물</dt><dd>${escapeHtml(note.subject)}</dd></div>` : ''}
                ${note.work ? `<div><dt>대상 작품·시기</dt><dd>${escapeHtml(note.work)}</dd></div>` : ''}
                <div><dt>발언자·작성 주체</dt><dd>${escapeHtml(note.speaker)}</dd></div>
                <div><dt>당시 역할·자료 성격</dt><dd>${escapeHtml(note.role)}</dd></div>
                <div><dt>발표 시점</dt><dd>${escapeHtml(note.publishedAt)}</dd></div>
                <div><dt>발표 매체</dt><dd>${escapeHtml(note.publication)}</dd></div>
            </dl>
            <p class="creator-summary"><strong>설명 요약</strong> ${escapeHtml(note.summary)}</p>
            <aside class="creator-context"><strong>발언을 읽는 맥락</strong><p>${escapeHtml(note.context)}</p></aside>
            ${showPeople && note.characterIds.length ? `<div class="character-links"><strong>관련 인물:</strong> ${note.characterIds.map(personLink).join('')}</div>` : ''}
            <div class="creator-evidence"><strong>원문·확인 자료</strong>
                <p>해당 부분: ${escapeHtml(note.locator)}</p><ul>${sourceLinks}</ul>
                <p>${escapeHtml(note.sourceScope)}</p><p>확인일: ${escapeHtml(note.reviewedAt)}</p>
            </div>
        </div>
    </details>`;
}

function renderReadings(field, id) {
    const readings = (window.readingsData || []).filter(item => field === 'series'
        ? item.series === id : item.characterIds.includes(id));
    if (!readings.length) return '';
    return `<section class="story-readings" aria-label="이야기 깊이 읽기">
        <h3>이야기 깊이 읽기</h3>
        <p class="content-note">사건을 바탕으로 인물의 선택과 관계를 살펴봅니다. 해석은 편집자의 독해이며, 펼친 내용에는 결말이 포함됩니다.</p>
        ${readings.map(item => `<details class="reading-card" data-reading-id="${escapeHtml(item.id)}">
            <summary><span class="reading-work">${escapeHtml(item.series)}</span> ${escapeHtml(item.title)}</summary>
            <div class="reading-body">
                <h4>작품에서 일어난 일</h4><p>${escapeHtml(item.scene)}</p>
                <h4>인물의 선택을 읽는 관점 <span class="reading-label">편집자 해석</span></h4><p>${escapeHtml(item.reading)}</p>
                <h4>함께 보면 달라지는 장면</h4><p>${escapeHtml(item.contrast)}</p>
                <aside class="reading-boundary"><strong>사실과 해석의 경계</strong><p>${escapeHtml(item.boundary)}</p></aside>
                <div class="character-links"><strong>함께 읽을 인물:</strong> ${item.characterIds.filter(personId => field === 'series' || personId !== id).map(personLink).join('')}</div>
                ${renderSources(item.sources, item.sourceScope, item.reviewedAt)}
            </div>
        </details>`).join('')}
    </section>`;
}

function renderCreatorNotes(field, id) {
    const notes = (window.creatorNotesData || []).filter(note => note[field].includes(id)
        && (field !== 'characterIds' || note.category !== 'design'));
    if (!notes.length) return '';
    return `<section class="creator-notes" aria-label="제작진 설명">
        <h3>${field === 'characterIds' ? '제작진이 설명한 인물' : '제작진이 설명한 이야기'}</h3>
        <p class="content-note">발언 당시의 맥락과 자료 종류를 함께 확인해 주세요. 펼친 내용에는 스포일러가 포함됩니다.</p>
        ${notes.map(note => renderCreatorNote(note)).join('')}
    </section>`;
}

function renderCreatorArchive() {
    const notes = window.creatorNotesData || [];
    document.getElementById('creators-container').innerHTML = `${renderBossDesignArchive()}${renderDesignHistory()}
        <section class="creator-notes" aria-label="인물과 세계에 관한 제작진 설명">
            <h3>인물과 세계에 관한 제작진 설명</h3>
            ${notes.filter(note => note.category !== 'design').map(note => renderCreatorNote(note, true)).join('')}
        </section>`;
}

function renderBossDesign(bossId) {
    const item = (window.bossDesignData || []).find(entry => entry.bossId === bossId);
    if (!item) return '';
    return `<details class="boss-design-detail" data-design-id="${escapeHtml(bossId)}">
        <summary>${item.observation ? '보스 설계 읽기 · 외형, 인물, 모델링' : '모티프에서 내 보스로 · 창작 질문'}</summary>
        <div class="boss-design-body">
            <p><span class="reading-label">편집자 분석</span> 형태 모티프: <strong>${escapeHtml(item.motif)}</strong></p>
            ${item.observation ? `<h4>작품 요소 · 참고자료에서 확인한 내용</h4><p>${escapeHtml(item.observation)}</p>
                <h4>연결해서 읽기 · 제작 의도 미확인</h4><p>${escapeHtml(item.analysis)}</p>
                <h4>내 모델을 만들 때 · 제안</h4><p>${escapeHtml(item.modeling)}</p>
                <h4>인물과 세계로 확장하기 · 창작 질문</h4><p>${escapeHtml(item.storyQuestion)}</p>`
                : '<p class="content-note">이 보스의 개별 제작진 코멘트와 상세 설계 분석은 아직 확보하지 않았습니다. 아래 질문은 새 보스를 위한 연습입니다.</p>'}
            <aside class="boss-design-prompt"><strong>내 보스에 적용한다면</strong><p>${escapeHtml(item.prompt)}</p></aside>
            ${item.locator ? `<p class="content-note">확인한 부분: ${escapeHtml(item.locator)}</p>` : ''}
            ${renderSources(item.sources, item.sourceScope, item.reviewedAt)}
        </div>
    </details>`;
}

function renderBossDesignArchive() {
    const items = window.bossDesignData || [];
    const series = [...new Set((window.bossesData || []).map(boss => boss.series))];
    return `<section class="boss-design-archive" aria-label="보스 디자인 연구">
        <h3>보스는 어떤 아이디어로 만들어졌을까?</h3>
        <p>형태 모티프 ${items.length}명 · 상세 사례 ${items.filter(item => item.observation).length}명. X1~X8의 각 8보스를 다룹니다. 중간 보스와 최종 보스는 이 비교의 대상에 포함하지 않았습니다.</p>
        <p class="content-note">식물·균류·신화 속 생물도 모티프가 됩니다. 이름의 유래, 완성된 작품의 특징, 디자이너가 직접 밝힌 의도는 서로 다른 근거입니다. 펼친 사례에는 인물의 행적에 관한 스포일러가 있습니다.</p>
        <aside class="boss-design-principle">
            <h4>제작자가 설명한 출발점</h4>
            <p>이나후네는 공격 방식과 플레이어와의 상호작용을 외형에 앞서 생각하고, 보스에게서 얻는 무기가 다른 보스에게 어떻게 작용할지도 고려한다고 설명했습니다.</p>
            <p class="content-note">2014년 Mighty No. 9 개발 당시 인터뷰입니다. X 보스 전원의 탄생 과정을 확인한 발언은 아닙니다. 자세한 맥락은 아래 ‘디자인 히스토리’에 수록했습니다.</p>
            ${renderSources(['boss_design_inafune_2014'], '직접 인터뷰의 보스 설계 문답을 요약. X 시리즈 개별 제작 의도와 구분.', '2026-10-25')}
        </aside>
        <details class="boss-workshop">
            <summary>내 X9 보스 설계하기 · 질문지와 창작 예시</summary>
            <div class="boss-design-body">
                <p>다음은 이 사이트의 설계 제안입니다. 아래 순서를 실제 제작진의 공통 작업 절차로 단정하지 않습니다.</p>
                <ol class="boss-design-steps">
                    <li><strong>평소의 역할.</strong> 이 사회는 왜 이 레플리로이드를 필요로 했을까? 구조·운송·연구·군사 중 구체적인 일 하나를 정한다.</li>
                    <li><strong>자신의 선택.</strong> 무엇을 지키며, 무엇을 두려워하고, 왜 헌터와 충돌할까? ‘바이러스에 감염됨’만으로 설명하지 않아도 되는 동기를 시험한다.</li>
                    <li><strong>모티프와 동사.</strong> 생물이나 사물 하나에서 ‘감는다·붙잡는다·굴린다’ 같은 행동 하나를 뽑는다. 얼음·불 같은 속성은 그 뒤에 붙여도 된다.</li>
                    <li><strong>한눈에 보이는 몸.</strong> 주된 부위 하나와 보조 부위 두 개를 고른다. 정면·측면·후면, 대표 공격 자세를 그려 기능과 관절을 확인한다.</li>
                    <li><strong>전장과 세 동작.</strong> 핵심 행동을 기본 공격·변형 공격·위기 대응으로 바꿔 본다. 각각 예고, 피할 공간, 공격 후 빈틈을 적는다.</li>
                    <li><strong>남겨지는 힘.</strong> 플레이어가 얻을 무기는 어떤 기능을 이어받을까? 다른 보스나 지형과의 상호작용 한 가지를 정한다.</li>
                    <li><strong>여덟 명을 함께 보기.</strong> 체형·이동·직업·대립 이유가 겹치는지 비교한다. 상세 모델 전에 한 명의 단순한 형태와 핵심 동작부터 시험한다.</li>
                </ol>
                <aside class="boss-design-example">
                    <h4>창작 예시 · 가칭 ‘앵커 오크토’</h4>
                    <p class="content-note">이 페이지에서 만든 연습용 캐릭터입니다. 공식 인물이나 프로젝트 X9의 확정 설정이 아닙니다.</p>
                    <dl>
                        <div><dt>직업과 몸</dt><dd>해저 도시의 구조용 문어형 레플리로이드. 굵은 고정 팔 두 개, 작업 팔 네 개, 이동용 팔 두 개로 기능을 나눈다. 흡착판은 진공 고정 장치, 팔 끝은 구조 공구로 설계한다.</dd></div>
                        <div><dt>충돌의 이유</dt><dd>도시를 봉쇄해야 대형 사고를 막는다고 믿지만, 그 결정 때문에 대피하지 못한 주민이 생긴다. 엑스는 구조 통로를 열려 하고 그는 봉쇄를 유지하려 한다.</dd></div>
                        <div><dt>대표 행동</dt><dd>핵심 동사는 ‘고정한다’. 팔로 통로를 막고, 바닥을 붙잡아 수압을 버티며, 위기에는 주변 잔해를 당겨 임시 벽을 만든다. 연결된 팔의 발광으로 작동 상태를 예고한다.</dd></div>
                        <div><dt>남겨지는 기능</dt><dd>벽에 부착하는 앵커 장치. 회전 장치 하나를 잠시 멈추는 기능부터 시험한다. 런처 오크토펄드의 어뢰 중심 이미지와 어떻게 달라지는지도 비교한다.</dd></div>
                    </dl>
                    <p>검토할 점: 이 수압은 왜 평소 구조 장비로 처리할 수 없는가? 헌터에게 설명하고 협력하는 대신 싸워야 하는 이유가 충분한가? 먼저 이 두 질문에 답해야 갈등이 성립한다.</p>
                </aside>
            </div>
        </details>
        <div class="boss-design-series-list">${series.map(work => `<details class="boss-design-series" data-design-series="${escapeHtml(work)}">
            <summary>${escapeHtml(work)} · 8보스의 모티프 비교</summary>
            <div class="boss-design-grid">${items.filter(item => findPerson(item.bossId)?.series === work).map(item => `<article class="boss-design-card" data-design-boss="${escapeHtml(item.bossId)}">
                <div class="boss-design-heading">${characterPortrait(item.bossId, 'design-portrait')}<div>${personLink(item.bossId)}<p>${escapeHtml(item.motif)}</p></div></div>
                ${item.combination ? `<p class="boss-design-combination">${escapeHtml(item.combination)}</p>` : ''}
                <p class="boss-design-question"><strong>창작 질문</strong> ${escapeHtml(item.prompt)}</p>
                ${item.observation ? renderBossDesign(item.bossId) : '<p class="content-note">현재 모티프·창작 질문 수록 · 개별 제작 경위 미확인</p>'}
            </article>`).join('')}</div>
        </details>`).join('')}</div>
        ${renderSources(['boss_motif_index'], '64명의 형태 모티프 대조용 2차 자료. 이름을 누르면 인물 소개와 작품별 삽화를 볼 수 있습니다. 질문과 모델링 조언은 편집자 제안입니다.', '2026-10-25')}
    </section>`;
}

function renderDesignHistory(characterId) {
    const notes = (window.creatorNotesData || []).filter(note => note.category === 'design'
        && (!characterId || note.characterIds.includes(characterId)));
    if (!notes.length) return '';
    return `<section class="creator-notes design-history" aria-label="디자인 히스토리">
        <h3>디자인 히스토리 <span class="design-count">${notes.length}건</span></h3>
        <p class="content-note">공개 인터뷰로 읽는 외형의 탄생과 변화입니다. 디자인 의도·제작진 회고·초기 구상을 구분하며, 각 항목에서 대상 작품과 출처를 확인할 수 있습니다. 펼친 내용에는 스포일러가 포함될 수 있습니다.</p>
        ${notes.map(note => renderCreatorNote(note, !characterId)).join('')}
    </section>`;
}

function renderEvidenceSources(ids) {
    return `<ul>${ids.map(id => window.sourcesData[id]).map(source => `<li>
        <a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(source.title)} <span class="sr-only">(새 탭)</span></a>
        <span class="source-kind">${escapeHtml(source.kind)}</span>
        ${source.accessNote ? `<p>${escapeHtml(source.accessNote)}</p>` : ''}
    </li>`).join('')}</ul>`;
}

function renderMotif(motif, showPeople = false) {
    return `<details class="motif-note" data-motif-id="${escapeHtml(motif.id)}">
        <summary><span class="motif-kind motif-kind-${escapeHtml(motif.kind)}">${escapeHtml(window.motifKinds[motif.kind])}</span>
            <span>${escapeHtml(motif.title)}</span><span class="motif-work">${escapeHtml(motif.work)}</span>
        </summary>
        <div class="motif-body">
            <dl class="motif-comparison">
                <div><dt>원전·비교 대상</dt><dd>${escapeHtml(motif.origin)}</dd></div>
                <div><dt>작품에 등장한 요소</dt><dd>${escapeHtml(motif.element)}</dd></div>
                <div><dt>읽는 관점 · 해석</dt><dd>${escapeHtml(motif.interpretation)}</dd></div>
                <div class="motif-confirmation"><dt>공식 자료·제작진 확인 여부</dt><dd>${escapeHtml(motif.confirmation)}</dd></div>
            </dl>
            ${showPeople && motif.characterIds.length ? `<div class="character-links"><strong>관련 인물:</strong> ${motif.characterIds.map(personLink).join('')}</div>` : ''}
            <div class="motif-evidence">
                <h4>원전·배경 확인 자료</h4>
                ${motif.originSources.length ? renderEvidenceSources(motif.originSources) : '<p>별도의 성경·신화 원전을 지정하지 않은 항목입니다.</p>'}
                <h4>작품·공식 설명 확인 자료</h4>
                ${renderEvidenceSources(motif.workSources)}
                <p>${escapeHtml(motif.sourceScope)}</p><p>확인일: ${escapeHtml(motif.reviewedAt)}</p>
            </div>
        </div>
    </details>`;
}

function renderMotifs(field, id) {
    const motifs = (window.motifsData || []).filter(motif => motif[field].includes(id));
    if (!motifs.length) return '';
    return `<section class="motifs-panel" aria-label="이름과 모티프"><h3>이름과 모티프</h3>
        <p class="content-note">이름·형상의 대응과 제작 의도를 구분합니다. 펼친 설명에는 해당 작품의 스포일러가 포함됩니다.</p>
        ${motifs.map(motif => renderMotif(motif)).join('')}
    </section>`;
}

function renderMotifArchive() {
    document.getElementById('motifs-container').innerHTML = (window.motifsData || []).map(motif => renderMotif(motif, true)).join('');
}

function renderMystery(mystery, showPeople = false) {
    return `<details class="mystery-note" data-mystery-id="${escapeHtml(mystery.id)}">
        <summary><span class="mystery-label">단서와 해석</span> ${escapeHtml(mystery.title)}
            <span class="mystery-work">${escapeHtml(mystery.work)} · 스포일러 포함</span>
        </summary>
        <div class="mystery-body">
            <dl class="mystery-reading">
                <div><dt>실제 장면 · 자료에서 확인한 내용</dt><dd>${escapeHtml(mystery.evidence)}</dd></div>
                <div><dt>가능한 해석 · 공식 결론 아님</dt><dd>${escapeHtml(mystery.interpretation)}</dd></div>
                <div><dt>반대 근거·다른 설명</dt><dd>${escapeHtml(mystery.alternatives)}</dd></div>
                <div class="mystery-open-question"><dt>아직 밝혀지지 않은 점</dt><dd>${escapeHtml(mystery.unresolved)}</dd></div>
            </dl>
            <p class="mystery-confirmation"><strong>공식 설명·확인 범위</strong> ${escapeHtml(mystery.confirmation)}</p>
            ${showPeople ? `<div class="character-links"><strong>관련 인물:</strong> ${mystery.characterIds.map(personLink).join('')}</div>` : ''}
            <div class="mystery-evidence"><h4>확인 자료</h4><p>해당 부분: ${escapeHtml(mystery.locator)}</p>
                ${renderEvidenceSources(mystery.sources)}
                <p>${escapeHtml(mystery.sourceScope)}</p><p>확인일: ${escapeHtml(mystery.reviewedAt)}</p>
            </div>
        </div>
    </details>`;
}

function renderMysteries(field, id) {
    const mysteries = (window.mysteriesData || []).filter(mystery => mystery[field].includes(id));
    if (!mysteries.length) return '';
    return `<section class="mysteries-panel" aria-label="미해결 단서와 해석"><h3>미해결 단서와 해석</h3>
        <p class="content-note">장면의 존재와 그 의미에 대한 추측을 구분합니다. 펼친 설명에는 해당 작품의 주요 사건·엔딩이 포함됩니다.</p>
        ${mysteries.map(mystery => renderMystery(mystery)).join('')}
    </section>`;
}

function renderMysteryArchive() {
    document.getElementById('mysteries-container').innerHTML = (window.mysteriesData || []).map(mystery => renderMystery(mystery, true)).join('');
}

// 이미지는 로컬 파일로 표시합니다. 수록 작품과 서사 속 등장 시점을 구분합니다.
function mediaImage(key, className = '', eager = false) {
    const asset = window.mediaData?.assets[key];
    if (!asset) return '';
    return `<img class="${className}" src="${escapeHtml(asset.src)}" alt="${escapeHtml(asset.alt)}" width="${asset.width}" height="${asset.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
}

function mediaFigure(key, className = '', eager = false) {
    const asset = window.mediaData?.assets[key];
    if (!asset) return '';
    return `<figure class="art-figure ${className}">${mediaImage(key, '', eager)}<figcaption>${escapeHtml(asset.caption)} · ${escapeHtml(asset.copyright)} · <a href="${escapeHtml(asset.source)}" target="_blank" rel="noopener noreferrer">${escapeHtml(asset.sourceLabel || 'CAPCOM 공식 사이트')}</a> · <a href="${escapeHtml(asset.original)}" target="_blank" rel="noopener noreferrer">원본</a></figcaption></figure>`;
}

function characterPortrait(id, className = '') {
    const key = window.mediaData?.characters[id]?.portrait;
    return key ? `<span class="portrait-frame ${className}">${mediaImage(key, 'character-portrait')}</span>` : '';
}

function characterArtwork(id) {
    const record = window.mediaData?.characters[id];
    if (!record) return '';
    const groups = characterImageGroups(id);
    const count = new Set(groups.flatMap(group => group.assetIds)).size;
    return `<details class="character-artwork character-gallery" data-gallery-person="${escapeHtml(id)}" data-gallery-selected="representative">
        <summary>대표·작품별 이미지 · ${count}장 <span class="gallery-spoiler-note">외형 스포일러</span></summary>
        <div class="gallery-body">
            <p class="content-note">작품을 선택해 당시의 삽화를 살펴보세요. ‘미확보’는 이 자료집에 해당 작품 이미지가 없다는 뜻입니다.</p>
            <div class="gallery-filters" role="group" aria-label="이미지의 작품 선택">
                ${groups.map((group, index) => `<button type="button" class="gallery-filter${index === 0 ? ' active' : ''}" data-gallery-series="${escapeHtml(group.series)}" aria-pressed="${index === 0}" aria-controls="gallery-panel-${escapeHtml(id)}">${escapeHtml(group.title)} <span>${group.assetIds.length ? `${group.assetIds.length}장` : '미확보'}</span></button>`).join('')}
            </div>
            <p class="gallery-status sr-only" aria-live="polite" aria-atomic="true">대표 이미지 1장</p>
            <div class="gallery-panel" id="gallery-panel-${escapeHtml(id)}" role="region" aria-label="선택한 작품의 이미지">${renderCharacterImageGroup(groups[0])}</div>
        </div>
    </details>`;
}

function characterImageGroups(id) {
    const record = window.mediaData?.characters[id];
    if (!record) return [];
    return [{ series: 'representative', title: '대표', assetIds: [record.portrait], note: window.mediaData.assets[record.portrait].note }, ...(record.gallery || [])];
}

function renderCharacterImageGroup(group) {
    return `<h3 class="gallery-title">${escapeHtml(group.title === '대표' ? '대표 이미지' : group.title)}</h3>
        ${group.assetIds.length ? group.assetIds.map(key => mediaFigure(key, 'gallery-figure', true)).join('') : '<p class="gallery-empty">이 작품의 이미지는 아직 확보하지 못했습니다. 등장 기록과 이미지 확보 여부는 별개이며, 다른 작품의 삽화로 대신 표시하지 않습니다.</p>'}
        ${group.note ? `<p class="content-note gallery-context">${escapeHtml(group.note)}</p>` : ''}`;
}

// 모달의 DOM을 보관하는 인물 이동 이력과 함께 선택한 작품도 유지됩니다.
modalBody.addEventListener('click', event => {
    const button = event.target.closest('[data-gallery-series]');
    if (!button) return;
    const gallery = button.closest('.character-gallery');
    const group = characterImageGroups(gallery.dataset.galleryPerson).find(item => item.series === button.dataset.gallerySeries);
    if (!group) return;
    gallery.dataset.gallerySelected = group.series;
    gallery.querySelectorAll('[data-gallery-series]').forEach(control => {
        const selected = control === button;
        control.classList.toggle('active', selected);
        control.setAttribute('aria-pressed', String(selected));
    });
    gallery.querySelector('.gallery-panel').innerHTML = renderCharacterImageGroup(group);
    gallery.querySelector('.gallery-status').textContent = `${group.title} · ${group.assetIds.length ? `${group.assetIds.length}장` : '이미지 미확보'}`;
});

function renderMedia() {
    document.getElementById('header-art').innerHTML = mediaFigure('x-banner', 'header-figure', true);
    const assets = getImageArchiveAssets();
    document.getElementById('image-credits-content').innerHTML = `<p>게임 화면·공식 삽화의 권리는 CAPCOM 등 원권리자에게, 팬 지도·번역 작업의 권리는 각 작성자에게 있습니다. 자료 보관처와 제작 주체를 구분합니다. 원본 비율을 유지하며 이미지의 수록 작품을 첫 등장이나 본편 연혁과 동일시하지 않습니다. 파일 수록은 재사용 허락을 뜻하지 않습니다.</p><ul>${assets.map(asset => `<li>${escapeHtml(asset.caption)} · ${escapeHtml(referenceKinds[asset.kind])} · ${escapeHtml(asset.author)} · <a href="${escapeHtml(asset.source)}" target="_blank" rel="noopener noreferrer">출처 페이지</a> · <a href="${escapeHtml(asset.original)}" target="_blank" rel="noopener noreferrer">원본</a></li>`).join('')}</ul>`;
}

// 파일이 누락되어도 깨진 이미지 아이콘 대신 안내를 남깁니다. lazy 이미지에도 적용됩니다.
document.addEventListener('error', event => {
    const img = event.target;
    if (!(img instanceof HTMLImageElement) || !img.closest('.art-figure, .profile-card, .modal-header-container, .character-link, .reference-card, .reference-viewer-stage')) return;
    const fallback = document.createElement('span');
    fallback.className = 'art-unavailable';
    fallback.textContent = '이미지를 불러올 수 없습니다';
    img.replaceWith(fallback);
}, true);

renderMedia();

// 목록과 소속 탭에서 동일한 분류 및 키보드 동작을 사용합니다.
function createReploidCard(item, compact = false) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'cyber-card profile-card';
    if (compact) card.classList.add('compact-profile');
    if (item.type === 'IRREGULAR') card.classList.add('boss-card');
    else if (item.type === 'REPLOID') card.classList.add('reploid-card');
    card.setAttribute('aria-haspopup', 'dialog');
    card.setAttribute('aria-label', `${item.name} 상세 정보`);

    const portrait = characterPortrait(item.id);
    if (portrait) {
        card.classList.add('has-portrait');
        card.insertAdjacentHTML('beforeend', portrait);
    }

    const title = document.createElement('span');
    title.className = 'card-title';
    title.textContent = item.name;
    const meta = document.createElement('span');
    meta.className = 'card-meta';
    meta.textContent = `[${item.displayType || typeLabels[item.type] || '기타'}]${item.series ? ` [${item.series}]` : ''} | ${item.affiliation || '불명'}`;
    card.append(title, meta);
    if (!compact) {
        const description = document.createElement('span');
        description.className = 'card-desc';
        description.textContent = item.profile;
        card.appendChild(description);
    }
    card.addEventListener('click', () => {
        // 마우스로 연 경우에도 닫은 후 이 카드로 포커스를 되돌립니다.
        card.focus({ preventScroll: true });
        if (item.series) openBossModal(item);
        else openHunterModal(item);
    });
    return card;
}

function syncFilterButtons() {
    document.querySelectorAll('.type-btn, .filter-btn').forEach(btn => {
        const selected = btn.dataset.type !== undefined
            ? btn.dataset.type === currentType : btn.dataset.filter === currentSeries;
        btn.classList.toggle('active', selected);
        btn.setAttribute('aria-pressed', String(selected));
    });
}

function resetFilters() {
    currentType = 'ALL';
    currentSeries = 'ALL';
    currentSearch = '';
    document.getElementById('search-input').value = '';
    syncFilterButtons();
    renderReploids();
    document.getElementById('search-input').focus();
}

// --- 레플리로이드 렌더링 (통합) ---
function renderReploids() {
    const characters = window.charactersData || [];
    // bosses 데이터에는 series 값이 있으니 type을 강제로 IRREGULAR 로 취급
    const bosses = (window.bossesData || []).map(b => ({ ...b, type: 'IRREGULAR' }));

    let allData = [...characters, ...bosses];

    // 1. 타입(Type) 필터링
    if (currentType !== 'ALL') {
        allData = allData.filter(item => item.type === currentType);
    }

    // 2. 시리즈(Series) 필터링
    if (currentSeries !== 'ALL') {
        allData = allData.filter(item => item.appearances && item.appearances.includes(currentSeries));
    }

    // 3. 통합 검색(Search) 필터링
    if (currentSearch) {
        allData = allData.filter(item => {
            const nameMatch = item.name && item.name.toLowerCase().includes(currentSearch);
            const engMatch = item.english_name && item.english_name.toLowerCase().includes(currentSearch);
            const affMatch = item.affiliation && item.affiliation.toLowerCase().includes(currentSearch);
            const profileMatch = item.profile && item.profile.toLowerCase().includes(currentSearch);
            const aliasMatch = item.aliases?.some(alias => alias.toLowerCase().includes(currentSearch));
            return nameMatch || engMatch || affMatch || profileMatch || aliasMatch;
        });
    }

    gridReploids.innerHTML = '';

    document.getElementById('results-count').textContent = `전체 ${characters.length + bosses.length}명 중 ${allData.length}명 표시`;
    document.getElementById('empty-results').hidden = allData.length !== 0;
    allData.forEach(item => gridReploids.appendChild(createReploidCard(item)));
}

// --- 필터 이벤트 연결 ---
function setupFilters() {
    syncFilterButtons();
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    document.getElementById('empty-reset-filters').addEventListener('click', resetFilters);
    // Type Filter 연결
    const typeBtns = document.querySelectorAll('.type-filter-bar .type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentType = e.currentTarget.dataset.type;
            syncFilterButtons();
            renderReploids();
        });
    });

    // Series Filter 연결
    const seriesBtns = document.querySelectorAll('.filter-bar .filter-btn');
    seriesBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            currentSeries = e.currentTarget.dataset.filter;
            syncFilterButtons();
            renderReploids();
        });
    });

    // Search Input 연결
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase().trim();
            renderReploids();
        });
    }

    // Weakness Matrix 연결
    const btnMatrix = document.getElementById('btn-weakness-matrix');
    if (btnMatrix) {
        btnMatrix.addEventListener('click', () => {
            btnMatrix.focus({ preventScroll: true });
            modalContent.className = 'modal-content cyber-card boss-theme';
            let matrixHtml = '<div class="weakness-grid">';

            const bossesBySeries = {};
            (window.bossesData || []).forEach(b => {
                if (!bossesBySeries[b.series]) bossesBySeries[b.series] = [];
                bossesBySeries[b.series].push(b);
            });

            for (let s = 1; s <= 8; s++) {
                const seriesBosses = bossesBySeries[`X${s}`];
                if (!seriesBosses) continue;

                matrixHtml += `<div style="border: 1px solid rgba(255,0,85,0.3); padding: 1rem; background: rgba(0,0,0,0.3); border-radius: 4px;">
                    <h3 style="color: var(--secondary-color); border-bottom: 1px dotted rgba(255,0,85,0.5); padding-bottom: 0.5rem; margin-bottom: 0.8rem;">[록맨 X${s}]</h3>
                    <ul style="list-style: none; font-size: 0.9rem; color: #ccc;">`;
                seriesBosses.forEach(b => {
                    matrixHtml += `<li style="margin-bottom: 0.6rem; line-height: 1.4;">
                        <span style="color:#fff; font-weight: bold;">${b.name}</span> 
                        <br/><span style="color:var(--text-muted); font-size:0.8rem;">└ 약점:</span> <span style="color:var(--secondary-color);">${b.weakness}</span>
                    </li>`;
                });
                matrixHtml += `</ul></div>`;
            }
            matrixHtml += '</div>';

            modalBody.innerHTML = `
                <h2 class="modal-title" id="modal-title" style="color: var(--secondary-color); text-shadow: 0 0 10px var(--secondary-glow);">이레귤러 약점표</h2>
                <div class="modal-subtitle">시리즈별 보스 상성 데이터베이스</div>
                <div style="margin-top: 1.5rem;">
                    ${matrixHtml}
                </div>
            `;
            openModal();
        });
    }
}


// --- 모달 로직 ---
let modalTrigger = null;
const modalHistory = [];

function renderBackButton() {
    return modalHistory.length ? '<button class="reset-btn modal-back" type="button" data-modal-back>이전 인물로 돌아가기</button>' : '';
}

// 관계를 따라 이동해도 최초 목록의 포커스와 읽던 위치를 보존합니다.
document.addEventListener('click', event => {
    const back = event.target.closest('[data-modal-back]');
    if (back && modalHistory.length) {
        const previous = modalHistory.pop();
        modalBody.replaceChildren(...previous.nodes);
        modalContent.className = previous.theme;
        previous.trigger.focus({preventScroll:true});
        modalContent.scrollTop = previous.scrollTop;
        return;
    }
    const link = event.target.closest('[data-person-id]');
    if (!link) return;
    const person = findPerson(link.dataset.personId);
    if (!person) return;
    link.focus({preventScroll:true});
    if (modal.open) modalHistory.push({nodes:[...modalBody.childNodes],theme:modalContent.className,scrollTop:modalContent.scrollTop,trigger:link});
    if (person.series) openBossModal(person); else openHunterModal(person);
});

function openModal() {
    if (modal.open) {
        modalContent.scrollTop = 0;
        (modalBody.querySelector('[data-modal-back]') || modalCloseBtn).focus({preventScroll:true});
        return;
    }
    modalTrigger = document.activeElement;
    document.body.classList.add('modal-open');
    modal.showModal();
    modalContent.scrollTop = 0;
    modalCloseBtn.focus({ preventScroll: true });
}

function closeModal() {
    modal.close();
}

modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    modalContent.className = 'modal-content cyber-card';
    // close 이벤트가 전달되기 전에 사용자가 다음 링크로 이동했다면 포커스를 빼앗지 않는다.
    if (modalTrigger?.isConnected && (document.activeElement === document.body || document.activeElement === modalTrigger || modal.contains(document.activeElement))) {
        modalTrigger.focus({ preventScroll: true });
    }
    modalTrigger = null;
    modalHistory.length = 0;
});

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('button, a[href], summary, input, select, textarea, [tabindex="0"]')]
        .filter(element => !element.disabled && element.checkVisibility());
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
    }
});

// Event Delegation for modal close
modal.addEventListener('click', (e) => {
    // 닫기 버튼을 클릭하거나, 모달 바깥 배경을 클릭했을 때 닫음
    if (e.target === modal) {
        closeModal();
    }
});

function openHunterModal(char) {
    modalContent.className = 'modal-content cyber-card'; // 초기화

    // REPLOID(중립)일 경우 초록 테마 적용
    if (char.type === 'REPLOID') {
        modalContent.classList.add('reploid-theme');
    } else if (char.type === 'IRREGULAR') {
        modalContent.classList.add('boss-theme');
    }

    modalBody.innerHTML = `
        ${renderBackButton()}
        <div class="modal-header-container">
            ${characterPortrait(char.id, 'modal-portrait')}
            <div class="modal-header-text">
                <h2 class="modal-title" id="modal-title">${char.name}</h2>
                <div class="modal-subtitle">${char.english_name}</div>
            </div>
        </div>
        
        ${characterArtwork(char.id)}
        ${equipmentCharacterLink(char.id)}
        ${renderDesignHistory(char.id)}
        <div class="modal-detail-row">
            <span class="modal-label">소속:</span>
            <span class="modal-value">${char.affiliation}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">역할·직책:</span>
            <span class="modal-value">${char.rank}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">첫 등장:</span>
            <span class="modal-value">${char.debut}</span>
        </div>
        
        <div class="modal-story">
            <strong>[프로필 요약]</strong><br/>
            ${char.profile}
        </div>
        
        ${char.appearance_notes ? `<p class="content-note">${Object.entries(char.appearance_notes).map(([series, note]) => `${escapeHtml(series)}: ${escapeHtml(note)}`).join(' · ')}</p>` : ''}
        ${renderRelationships(char.id)}
        ${renderLocationLinks(char.id)}
        ${societyHumanLink(char)}
        ${renderReferenceGallery('character',char.id)}
        ${renderArcs(char)}
        ${renderReadings('characterIds', char.id)}
        ${renderCreatorNotes('characterIds', char.id)}
        ${renderMotifs('characterIds', char.id)}
        ${renderMysteries('characterIds', char.id)}
        ${(window.characterGuidesData || []).filter(g=>g.characterId===char.id).map(g=>renderCharacterGuide(g,true)).join('')}
        ${renderSources(char.sources, char.sourceScope, char.reviewedAt)}
    `;

    openModal();
}

function openBossModal(boss) {
    modalContent.className = 'modal-content cyber-card boss-theme';

    modalBody.innerHTML = `
        ${renderBackButton()}
        <div class="modal-header-container">
            ${characterPortrait(boss.id, 'modal-portrait')}
            <div class="modal-header-text">
                <h2 class="modal-title" id="modal-title">${boss.name}</h2>
                <div class="modal-subtitle">${boss.english_name}</div>
            </div>
        </div>
        ${characterArtwork(boss.id)}
        ${renderDesignHistory(boss.id)}
        <div class="modal-detail-row">
            <span class="modal-label">출현작:</span>
            <span class="modal-value">록맨 ${boss.series}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">소속·활동지역:</span>
            <span class="modal-value">${boss.affiliation}</span>
        </div>
        
        <div class="modal-story boss-story">
            <strong>[인물 소개]</strong><br/>
            ${boss.profile}
        </div>
        ${boss.reviewNote ? `<p class="content-note">${escapeHtml(boss.reviewNote)}</p>` : ''}
        ${renderBossEvidence(boss)}
        ${renderBossDesign(boss.id)}
        ${renderRelationships(boss.id)}
        ${renderLocationLinks(boss.id)}
        ${renderReferenceGallery('character',boss.id)}
        ${renderArcs(boss)}
        ${renderReadings('characterIds', boss.id)}
        ${renderCreatorNotes('characterIds', boss.id)}
        ${renderMotifs('characterIds', boss.id)}
        ${renderMysteries('characterIds', boss.id)}
        ${renderSources(boss.sources, boss.sourceScope, boss.reviewedAt)}
        <details class="supplement-panel combat-details">
            <summary>보조 자료 · 약점과 공략</summary>
            <p><strong>약점 무기:</strong> ${escapeHtml(boss.weakness)}</p>
            <p><strong>획득 무기:</strong> ${escapeHtml(boss.weapon)}</p>
            ${renderBossGuide(boss.guide)}
        </details>
    `;

    openModal();
}

// --- 스토리 렌더링 ---
function endingJump(series, label = series) {
    return `<button type="button" class="ending-jump" data-ending-series="${escapeHtml(series)}" aria-controls="ending-${escapeHtml(series)}">${escapeHtml(label)}</button>`;
}

function renderEndingsOverview() {
    const endings = window.endingsData || [];
    document.getElementById('endings-overview').innerHTML = `<details class="ending-overview">
        <summary>엔딩으로 읽는 X1~X8 · 줄곧 무엇을 이야기해 왔는가 <span class="reading-label">전체 결말 스포일러</span></summary>
        <div class="ending-overview-body">
            <p class="ending-thesis">평화를 위해 싸우는 이들이, 그 싸움 속에서도 타인을 지키려는 마음과 스스로 선택할 힘을 잃지 않을 수 있는가.</p>
            <p class="content-note">여덟 작품의 결말을 묶어 읽는 편집자의 해석입니다. 모든 작품이 처음부터 하나의 장기 계획으로 만들어졌다는 주장이나 공식 주제 선언은 아닙니다. 현재 범위는 X 본편 1~8이며 다른 록맨 계열의 결말은 포함하지 않습니다.</p>
            <nav class="ending-map" aria-label="작품별 엔딩으로 이동">
                ${endings.map(item => endingJump(item.series, `${item.series} · ${item.title}`)).join('')}
            </nav>
            <h3>반복되는 네 가지 질문</h3>
            <div class="ending-themes">${(window.endingThemesData || []).map(theme => `<article class="ending-theme">
                <h4>${escapeHtml(theme.title)}</h4><p>${escapeHtml(theme.reading)}</p>
                <div class="ending-related"><span>비교할 엔딩:</span> ${theme.seriesIds.map(series => endingJump(series)).join('')}</div>
                <p class="ending-prompt"><strong>X9 창작 검토 · 제안</strong><br>${escapeHtml(theme.prompt)}</p>
            </article>`).join('')}</div>
            <p class="content-note">각 작품의 엔딩 상세에서 마지막 장면, 루트 차이, 후일담, 출처와 확인 범위를 볼 수 있습니다. 꿈·예고·인물의 주장은 실제로 일어난 사건과 구분합니다.</p>
        </div>
    </details>`;
}

function renderEnding(series) {
    const item = (window.endingsData || []).find(ending => ending.series === series);
    if (!item) return '';
    return `<details class="ending-detail" id="ending-${escapeHtml(series)}" data-ending-detail="${escapeHtml(series)}">
        <summary>엔딩과 남겨진 질문 · ${escapeHtml(item.title)} <span class="reading-label">스포일러</span></summary>
        <div class="reading-body">
            <p class="content-note">대상 판본·범위: ${escapeHtml(item.version)}</p>
            <h4>마지막 장면</h4><p>${escapeHtml(item.scene)}</p>
            <h4>경로별 차이</h4>
            <ul class="ending-routes">${item.routes.map(route => `<li><strong>${escapeHtml(route.condition)}</strong><p>${escapeHtml(route.result)}</p></li>`).join('')}</ul>
            <h4>마지막 말과 후일담 · 내용 요약</h4><p>${escapeHtml(item.epilogue)}</p>
            <h4>이 결말이 남기는 질문 <span class="reading-label">편집자 해석</span></h4><p>${escapeHtml(item.theme)}</p>
            <h4>후속작과 연결할 때</h4><p>${escapeHtml(item.continuation)}</p>
            <aside class="reading-boundary"><strong>판본·분기·해석의 경계</strong><p>${escapeHtml(item.caution)}</p></aside>
            <p class="ending-prompt"><strong>X9 창작 검토 · 질문</strong><br>${escapeHtml(item.creativeQuestion)}</p>
            <p class="content-note">확인 위치: ${escapeHtml(item.locator)}</p>
            ${renderSources(item.sources, item.sourceScope, item.reviewedAt)}
        </div>
    </details>`;
}

secStory.addEventListener('click', event => {
    const button = event.target.closest('[data-ending-series]');
    if (!button) return;
    const target = document.getElementById(`ending-${button.dataset.endingSeries}`);
    if (!target) return;
    target.open = true;
    target.querySelector('summary').focus({ preventScroll: true });
    target.scrollIntoView({ block: 'start', behavior: 'auto' });
});

function renderStories() {
    if (!window.storyData) return;
    renderEndingsOverview();
    storyContainer.innerHTML = '';
    window.storyData.forEach(st => {
        const div = document.createElement('div');
        div.className = 'story-card';
        div.innerHTML = `
            <h3>${st.title}</h3>
            <div class="story-meta"><strong>시대적 배경:</strong> ${st.timeline}</div>
            <div class="story-content">
                <p><strong>주요 갈등:</strong> ${st.conflict}</p>
                <p style="margin-top: 10px;">${escapeHtml(st.setup || '')}</p>
                <details class="spoiler-block">
                    <summary>사건 전개·결말 보기 · 스포일러 포함</summary>
                    <p>${escapeHtml(st.summary)}</p>
                    ${renderBranches(st)}
                    <aside class="connection-note"><h4>다음 이야기와의 연결</h4><p>${escapeHtml(st.connection)}</p></aside>
                </details>
                ${renderEnding(st.series)}
                <div class="story-meta character-links" style="margin-top: 15px;"><strong>주요 인물:</strong></div>
                ${renderReadings('series', st.series)}
                ${renderCreatorNotes('seriesIds', st.series)}
                ${renderMotifs('seriesIds', st.series)}
                ${renderMysteries('seriesIds', st.series)}
                ${renderSources(st.sources, st.sourceScope, st.reviewedAt)}
            </div>
        `;
        const links = div.querySelector('.character-links');
        (st.characterIds || []).forEach(id => {
            const char = window.charactersData.find(person => person.id === id);
            if (!char) return;
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'character-link';
            button.innerHTML = `${characterPortrait(char.id, 'story-portrait')}<span>${escapeHtml(char.name)}</span>`;
            if (window.mediaData?.characters[char.id]) button.classList.add('illustrated-link');
            button.setAttribute('aria-haspopup', 'dialog');
            button.setAttribute('aria-label', `${char.name} 상세 정보`);
            button.addEventListener('click', () => {
                button.focus({ preventScroll: true });
                openHunterModal(char);
            });
            links.appendChild(button);
        });
        storyContainer.appendChild(div);
    });
}

// --- 소속(Affiliation) 렌더링 ---
function renderAffiliations() {
    const characters = window.charactersData || [];
    const bosses = (window.bossesData || []).map(b => ({ ...b, type: 'IRREGULAR' }));
    const allData = [...characters, ...bosses];
    const grouped = {};

    // 소속을 정규화/단순화 (예: '전 이레귤러 헌터 제17정예부대 대장' -> '제17정예부대')
    function normalizeAffiliation(affText) {
        if (!affText) return '기타';
        if (affText.includes('17정예부대')) return '제17정예부대';
        if (affText.includes('0특수부대') || affText.includes('0부대')) return '제0특수부대';
        if (affText.includes('7공수부대')) return '제7공수부대';
        if (affText.includes('6함대')) return '제6함대';
        if (affText.includes('14격투부대')) return '제14격투부대';
        if (affText.includes('13극지부대')) return '제13극지부대';
        if (affText.includes('8기갑부대')) return '제8기갑부대';
        if (affText.includes('4육상부대')) return '제4육상부대';
        if (affText.includes('9방수부대')) return '제9방수부대';
        if (affText.includes('헌터 본부') || affText.includes('총사령관')) return '이레귤러 헌터 본부';
        if (affText.includes('레드 얼럿')) return '레드 얼럿';
        if (affText.includes('레플리포스') || affText.includes('레플리 에어포스')) return '레플리포스';

        // 특정 소속으로 묶기 애매한 고유명사는 원본 그대로 사용
        return affText.trim();
    }

    allData.forEach(item => {
        const aff = normalizeAffiliation(item.affiliation);
        if (!grouped[aff]) grouped[aff] = [];
        grouped[aff].push(item);
    });

    const finalGroups = { '기타': [] };

    for (let aff in grouped) {
        if (grouped[aff].length < 2) {
            finalGroups['기타'].push(...grouped[aff]);
        } else {
            finalGroups[aff] = grouped[aff];
        }
    }

    // 기타 배열이 비어있으면 삭제
    if (finalGroups['기타'].length === 0) delete finalGroups['기타'];

    accordionContainer.innerHTML = '';

    // 키 정렬: 부대명이 먼저 오고 레플리포스/레드 얼럿 등이 그 뒤, 마지막이 기타
    const sortedKeys = Object.keys(finalGroups).sort((a, b) => {
        if (a === '기타') return 1;
        if (b === '기타') return -1;
        return a.localeCompare(b);
    });

    sortedKeys.forEach((aff, index) => {
        const groupItems = finalGroups[aff];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        // 헤더
        const header = document.createElement('button');
        header.type = 'button';
        header.className = 'accordion-header';
        header.id = `affiliation-heading-${index}`;
        header.setAttribute('aria-expanded', 'false');
        header.setAttribute('aria-controls', `affiliation-body-${index}`);
        header.innerHTML = `<span><span style="color:#fff;">[소속]</span> ${aff}</span> <span class="badge">${groupItems.length}명</span>`;

        // 바디
        const body = document.createElement('div');
        body.className = 'accordion-body';
        body.id = `affiliation-body-${index}`;
        body.setAttribute('aria-labelledby', header.id);
        body.hidden = true;
        const cards = document.createElement('div');
        cards.className = 'cards-grid';
        groupItems.forEach(person => cards.appendChild(createReploidCard(person, true)));
        body.appendChild(cards);

        // 아코디언 토글 이벤트
        header.addEventListener('click', () => {
            const expanded = itemDiv.classList.toggle('open');
            header.setAttribute('aria-expanded', String(expanded));
            body.hidden = !expanded;
        });

        itemDiv.appendChild(header);
        itemDiv.appendChild(body);
        accordionContainer.appendChild(itemDiv);
    });
}


// --- SFX System Removed per Feedback ---

// --- 3D Tilt Effect removed based on user feedback ---

// 세계별로 별도의 연혁을 만들고, 시리즈 사이의 사건은 개요 순서에서 제외합니다.
function renderTimeline() {
    const tlData = window.timelineData || [];
    const worlds = window.timelineWorldsData || [];
    document.getElementById('timeline-overview').innerHTML = worlds.map(world => `<article class="world-card" data-world-id="${escapeHtml(world.id)}">
        <h3>${escapeHtml(world.name)}</h3><p>${escapeHtml(world.summary)}</p>
        <ol class="world-sequence" aria-label="${escapeHtml(world.name)}의 시대 순서">
            ${tlData.filter(item => item.worldId === world.id && item.kind === 'series').map(item => `<li><a href="#era-${escapeHtml(item.id)}">${escapeHtml(item.shortName)}</a></li>`).join('')}
        </ol>
        <p class="content-note">이름을 누르면 해당 시대의 설명으로 이동합니다.</p>
        ${renderSources(world.sources, world.sourceScope, world.reviewedAt)}
    </article>`).join('');

    timelineContainer.innerHTML = worlds.map(world => `<section class="world-timeline" data-world-id="${escapeHtml(world.id)}" aria-labelledby="world-${escapeHtml(world.id)}">
        <h3 id="world-${escapeHtml(world.id)}">${escapeHtml(world.name)}의 연혁</h3>
        <p class="content-note">${escapeHtml(world.scope)} · 사건 상세는 스포일러를 포함합니다.</p>
        <ol class="cyber-timeline">
            ${tlData.filter(item => item.worldId === world.id).map(item => `<li class="timeline-item" data-era-id="${escapeHtml(item.id)}" data-kind="${escapeHtml(item.kind)}">
                <div class="timeline-dot" aria-hidden="true"></div>
                <article class="timeline-content cyber-card">
                    <span class="timeline-era">${escapeHtml(item.era)}</span>
                    <h4 id="era-${escapeHtml(item.id)}" tabindex="-1">${item.kind === 'event' ? '시대 사이의 사건 · ' : ''}${escapeHtml(item.series)}</h4>
                    ${mediaFigure(window.mediaData?.eras[item.id], 'timeline-art')}
                    <p>${escapeHtml(item.intro)}</p>
                    <aside class="timeline-connection"><strong>시대의 연결과 남은 빈칸</strong><p>${escapeHtml(item.connection)}</p></aside>
                    <details class="spoiler-block timeline-detail"><summary>사건 상세 보기 · 스포일러 포함</summary>
                        <strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.desc)}</p>
                    </details>
                    ${renderSources(item.sources, item.sourceScope, item.reviewedAt)}
                </article>
            </li>`).join('')}
        </ol>
    </section>`).join('');
}

// --- X9 전용 랜더링 ---
function renderProjectWorkspace() {
    const audit = window.getProjectAudit(window.bossesData, window.bossDesignData, window.mediaData);
    const roadmap = window.projectRoadmapData || [];
    const continuity = window.x9ContinuityData || [];
    document.getElementById('x9-workspace').innerHTML = `
        ${renderX9Planning()}
        <section class="project-audit" aria-label="자료집 점검 현황">
            <h3>지금 확보한 자료와 남은 빈칸</h3>
            <div class="project-audit-grid">
                <div><strong>${audit.linkedSources} / ${audit.totalBosses}</strong><span>본문 출처가 연결된 보스</span></div>
                <div><strong>${audit.missingSources.length}</strong><span>본문 출처 미연결</span></div>
                <div><strong>${audit.totalBosses - audit.missingDesigns.length} / ${audit.totalBosses}</strong><span>상세 설계 분석</span></div>
                <div><strong>${audit.missingGallery.length}</strong><span>본편 작품별 이미지 미확보</span></div>
            </div>
            <p class="content-note">현재 데이터에서 집계합니다. 출처 연결 수는 전체 문장의 정확도나 검수 완료율이 아닙니다. 약점 자료만 연결된 인물도 포함되며, 이미지 미확보는 인물 수가 아닌 작품별 갤러리 항목 수입니다.</p>
            <details class="project-audit-details"><summary>검토할 인물과 이미지 빈칸 보기</summary>
                <div class="project-body"><h4>본문 출처가 연결되지 않은 보스</h4>
                    ${audit.missingSources.length ? `<div class="character-links">${audit.missingSources.map(personLink).join('')}</div>` : '<p>모든 보스에 본문 출처가 연결되어 있습니다. 출처의 적용 범위는 개별 검토해야 합니다.</p>'}
                    <h4>형태 모티프·질문만 있는 보스</h4><p class="content-note">개별 제작 비화를 확보했다는 뜻이 아닙니다. 분석 확대는 X9 설계에 필요한 사례부터 진행합니다.</p>
                    <div class="character-links">${audit.missingDesigns.map(personLink).join('')}</div>
                    <h4>작품별 이미지 빈칸</h4><ul>${audit.missingGallery.map(gap => `<li>${personLink(gap.id)} · ${escapeHtml(gap.series)}</li>`).join('')}</ul>
                </div>
            </details>
        </section>
        <section class="project-roadmap" aria-label="앞으로 할 일">
            <h3>앞으로 할 일 · 완료 기준까지</h3>
            <p class="content-note">1~5는 이번에 정리한 창작 기반, 6~8은 실제 제작을 위한 다음 단계입니다. 이야기와 보스는 수정 가능한 기획 v0.1이며, 모델·게임 구현은 아직 시작하지 않았습니다.</p>
            ${roadmap.map(phase => `<details class="project-phase" data-project-phase="${escapeHtml(phase.id)}">
                <summary><span class="project-status">${escapeHtml(phase.status)}</span> ${escapeHtml(phase.title)}</summary>
                <div class="project-body"><dl>
                    <div><dt>만들 결과물</dt><dd>${escapeHtml(phase.deliverable)}</dd></div>
                    <div><dt>현재 상태</dt><dd>${escapeHtml(phase.progress)}</dd></div>
                    <div><dt>다음 작업</dt><dd>${escapeHtml(phase.next)}</dd></div>
                    <div><dt>완료를 판단할 기준</dt><dd>${escapeHtml(phase.doneWhen)}</dd></div>
                </dl></div>
            </details>`).join('')}
        </section>
        <section id="x9-continuity" class="project-continuity" aria-label="X8 이후의 출발점">
            <h3>2. X8 이후, 무엇을 이어받고 무엇을 정할까?</h3>
            <p class="content-note">루미네와의 최종전·후일담이 있는 경로를 기준으로 한 초안입니다. 사실 항목도 확인한 자료의 범위 안에서 읽으며, 쉬움 난이도와 언어판 차이를 함께 고려합니다.</p>
            <details class="project-continuity-details"><summary>주역·사회 상태표와 사실·미해결·창작 선택 ${continuity.length}항목 · 스포일러</summary>
                ${renderWorldStateTable()}
                <div class="project-continuity-grid">${continuity.map(item => `<article class="project-continuity-card" data-continuity-id="${escapeHtml(item.id)}">
                    <h4>${escapeHtml(item.title)}</h4><dl>
                        <div><dt>확인한 내용</dt><dd>${escapeHtml(item.known)}</dd></div>
                        <div><dt>아직 답이 없는 부분</dt><dd>${escapeHtml(item.unknown)}</dd></div>
                        <div class="project-choice"><dt>우리가 정할 수 있는 부분 · 창작 제안</dt><dd>${escapeHtml(item.choice)}</dd></div>
                    </dl>
                    <div class="character-links">${item.characterIds.map(personLink).join('')}</div>
                    <p class="content-note">근거 위치: ${escapeHtml(item.locator)}</p>
                    ${renderSources(item.sources, item.sourceScope, item.reviewedAt)}
                </article>`).join('')}</div>
            </details>
        </section>`;
    const workspace = document.getElementById('x9-workspace');
    workspace.querySelector('#planning-continuity-slot').replaceWith(workspace.querySelector('#x9-continuity'));
}

function renderX9() {
    x9Container.innerHTML = '';
    renderProjectWorkspace();
    const x9 = window.x9Data || [];

    const sectionTitle = document.querySelector('#x9-section .section-title');
    if (sectionTitle) {
        sectionTitle.classList.add('x9-glitch-title');
    }

    x9.forEach(item => {
        const itemHtml = `
            <div class="cyber-card x9-card-special" style="margin-bottom: 0;">
                <div style="font-family: var(--font-en); color: var(--secondary-color); margin-bottom: 0.5rem; font-size: 0.8rem; letter-spacing: 2px;">
                    ${item.chapter}
                </div>
                <h3 style="color: #fff; margin-bottom: 1rem; border-bottom: 1px dotted rgba(255,0,85,0.5); padding-bottom: 0.5rem;">${item.title}</h3>
                <p style="color: #bbb; line-height: 1.5; font-size: 0.9rem;">
                    ${item.content}
                </p>
            </div>
        `;
        x9Container.insertAdjacentHTML('beforeend', itemHtml);
    });
}

// --- Intro Sequence ---
function runIntroSequence() {
    const introOverlay = document.getElementById('intro-sequence');
    const introText = document.getElementById('intro-text');
    const introProgress = document.getElementById('intro-progress');
    const introStatusText = document.getElementById('intro-status-text');

    if (!introOverlay) return;

    if (sessionStorage.getItem('systemBooted')) {
        introOverlay.style.display = 'none';
        return;
    }

    const textToType = "헌터 베이스 기록 보관소 연결 중...";
    let textIdx = 0;

    let dismissed = false;
    function dismissIntro() {
        if (dismissed) return;
        dismissed = true;
        const hadFocus = introOverlay.contains(document.activeElement);
        introOverlay.classList.add('hidden');
        introOverlay.inert = true;
        sessionStorage.setItem('systemBooted', 'true');
        if (hadFocus) btnReploids.focus({ preventScroll: true });
    }
    introOverlay.addEventListener('click', dismissIntro, { once: true });
    // 키보드 사용자가 인트로 뒤쪽으로 이동하면 화면도 즉시 열어줍니다.
    document.addEventListener('focusin', (event) => {
        if (!introOverlay.contains(event.target)) dismissIntro();
    });

    function typeChar() {
        if (dismissed) return;
        if (textIdx < textToType.length) {
            introText.textContent += textToType.charAt(textIdx);
            textIdx++;
            setTimeout(typeChar, 40);
        } else {
            let progress = 0;
            const progressInterval = setInterval(() => {
                if (dismissed) {
                    clearInterval(progressInterval);
                    return;
                }
                progress += Math.random() * 20;
                if (progress > 100) progress = 100;
                introProgress.style.width = `${progress}%`;

                if (progress === 100) {
                    clearInterval(progressInterval);
                    introStatusText.textContent = "접속 완료. 이야기와 인물 기록을 열었습니다.";
                    introStatusText.style.color = "#00ff88";

                    setTimeout(dismissIntro, 1200);
                }
            }, 100);
        }
    }

    setTimeout(typeChar, 500);
}

// --- 초기화 ---
document.addEventListener('DOMContentLoaded', () => {
    // 데이터 불러오기 및 렌더링
    setTimeout(() => {
        setupFilters();
        renderReploids();
        renderAffiliations();
        renderAtlas();
        renderImageArchive();
        renderStories();
        renderTimeline();
        renderX9();
        renderGlossary();
        renderWorldSociety();
        renderCreatorArchive();
        renderMotifArchive();
        renderMysteryArchive();
        runIntroSequence();
    }, 100); // 딜레이로 스크립트 로드 보장
});
