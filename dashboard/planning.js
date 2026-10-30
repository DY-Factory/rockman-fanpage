// 기존 인물 자료와 팬 기획을 서로 다른 종류로 표시하는 읽기 화면.
function planningFields(rows) {
    return `<dl class="planning-fields">${rows.map(([label,value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>`;
}

function renderBossEvidence(boss) {
    const e = boss.evidence;
    if (!e) return '';
    return `<details class="planning-detail boss-evidence" data-review-id="${escapeHtml(boss.id)}">
        <summary>설정 검수 · ${escapeHtml(e.status)} · 과거·소속·성격의 확인 범위</summary>
        <div class="planning-body">
            ${planningFields([['확인한 범위',e.known],['보류·수정한 주장',e.pending],['판본',e.edition],['근거 위치',e.locator],['별칭 처리',e.titleNote]])}
            ${e.supplement ? `<aside class="planning-boundary"><h4>공식 리메이크 보충 · 원작과 구분</h4><p>${escapeHtml(e.supplement.text)}</p><p>${escapeHtml(e.supplement.locator)}</p>${renderSources([e.supplement.source], '캡콤 공개 PDF 직접 확인. PSP 리메이크의 설명이며 원작 X1의 동일 문장으로 간주하지 않음.', boss.reviewedAt)}</aside>` : ''}
            ${renderSources(boss.sources,boss.sourceScope,boss.reviewedAt)}
        </div>
    </details>`;
}

function renderEvidenceAudit() {
    const bosses = window.bossesData || [];
    const basic = bosses.filter(b => b.evidence?.status === '기본 정보만 확인');
    return `<section id="x9-evidence" class="planning-section" aria-label="기존 설정의 검수 결과">
        <h3>1. 기존 설정 · 어디까지 믿고 사용할까?</h3>
        <p>64명 모두 소개·소속·별칭을 검토했습니다. ${basic.length}명은 이번에 확인한 근거가 형태·등장 작품·장소 수준이어서 과거·성격의 단정을 보류했습니다. 나머지도 개별 확인 범위를 넘어서는 설정까지 확정한 것은 아닙니다.</p>
        <details class="planning-detail evidence-policy"><summary>자료 종류와 창작에 사용하는 기준</summary><div class="planning-body">
            ${planningFields([
                ['게임 본편','대사·장면과 등장인물의 주장 자체를 구별한다. 이 자료집의 다수 근거는 팬 전사본이며 실기·일본어 원문 전체 대조는 남아 있다.'],
                ['공식 설명서·설정집','이번에 직접 읽은 PSP 영문 설명서는 리메이크 보충으로 표시한다. X5 설명서 전사·설정집의 팬 재인용은 원책 직접 확인과 구별한다.'],
                ['인터뷰·개발자 발언','화자·작품·시점·질문 맥락이 있는 발언만 제작 의도의 근거로 쓴다. 다른 게임 인터뷰의 보스 설계 원칙을 특정 X 보스의 제작 비화로 바꾸지 않는다.'],
                ['만화판·리메이크','같은 이름이어도 별도 판본의 인물이다. 버팔로의 후속 행적, 메기의 엑스와의 우정, 백가의 실키 변장은 게임 생애에 자동 합산하지 않는다. 원 만화책을 전부 대조한 자료는 아니다.'],
                ['팬 위키·해석·새 창작','팬 위키는 원전으로 가는 길이지 공식 발표가 아니다. 형태와 동작에서 읽어 낸 의미는 분석으로, 하버 링과 새 8보스는 팬 창작으로 표시한다.'],
                ['현재 사용할 기준','소개에 남긴 짧은 정보는 명시된 판본·확인 범위 안에서 참고한다. 보류 항목은 공식 전제로 쓰지 않고 필요하면 창작 가정으로 따로 선언한다. 별칭·무기·약점의 전면 검증은 완료되지 않았다.']
            ])}
        </div></details>
        <details class="planning-detail evidence-roster"><summary>64명별 보류 항목과 원문 확인 경로 · 스포일러</summary><div class="planning-body">
            ${Array.from({length:8},(_,i) => `<details class="planning-detail"><summary>X${i+1} · 8명</summary><div class="planning-body evidence-list">${bosses.filter(b => b.series === `X${i+1}`).map(b => `<article data-audit-boss="${escapeHtml(b.id)}"><h4>${personLink(b.id)} <span class="planning-tag">${escapeHtml(b.evidence.status)}</span></h4><p>${escapeHtml(b.evidence.pending)}</p><p class="content-note">근거 위치: ${escapeHtml(b.evidence.locator)}</p>${renderSources(b.sources,b.sourceScope,b.reviewedAt)}</article>`).join('')}</div></details>`).join('')}
        </div></details>
        <p class="content-note">상세 설계 분석은 ${window.bossDesignData.filter(b=>b.observation).length}명입니다. 제작진의 실제 구상 순서를 확인한 사례 수가 아닙니다. 각 보스의 상세에서 관찰·해석·모델링 제안을 나누어 볼 수 있습니다.</p>
    </section>`;
}

function renderWorldStateTable() {
    return `<div class="planning-table-scroll" tabindex="0" role="region" aria-label="X8 이후 세계 상태표, 가로로 스크롤 가능">
        <table class="planning-table"><caption>X8 이후 세계 상태표 · 루미네 결전 경로 기준</caption><thead><tr><th scope="col">대상</th><th scope="col">확인한 내용</th><th scope="col">미해결</th><th scope="col">이번 X9의 창작 선택</th></tr></thead>
        <tbody>${window.x9WorldStateData.map(row=>`<tr><th scope="row">${escapeHtml(row.title)}</th><td>${escapeHtml(row.known)}</td><td>${escapeHtml(row.unresolved)}</td><td>${escapeHtml(row.proposal)}<p class="content-note">아래 근거: ${row.continuityIds.map(id=>escapeHtml(window.x9ContinuityData.find(c=>c.id===id).title)).join(' / ')}</p></td></tr>`).join('')}</tbody></table>
    </div>`;
}

function renderCharacterGuide(guide, compact = false) {
    return `<details class="planning-detail character-guide" data-guide-id="${escapeHtml(guide.characterId)}">
        <summary>${escapeHtml(guide.title)} · 장면 스포일러</summary>
        <div class="planning-body">
            ${!compact ? `<div class="planning-portrait">${characterPortrait(guide.characterId,'story-portrait')}${personLink(guide.characterId)}</div>` : ''}
            <p class="planning-tag">장면에 근거한 편집자 해석 · 고정 성격 공식이 아님</p>
            ${planningFields([['소중하게 여기는 것',guide.values],['분노하는 상황',guide.anger],['쉽게 하지 않을 선택',guide.limits],['말투와 문장',guide.speech],['반대 면도 함께 보기',guide.tension]])}
            <h4>근거 장면 ${guide.scenes.length}개 · 요약과 집필 해석</h4>
            <ol class="guide-scenes">${guide.scenes.map(scene=>`<li><h5>${escapeHtml(scene.work)} · ${escapeHtml(scene.locator)}</h5><p><strong>장면 요약:</strong> ${escapeHtml(scene.scene)}</p><p><strong>집필 해석:</strong> ${escapeHtml(scene.supports)}</p>${scene.quote ? `<blockquote><p lang="${guide.characterId === 'x' ? 'ja' : 'en'}">${escapeHtml(scene.quote)}</p><footer>${escapeHtml(scene.quoteSpeaker)} · ${escapeHtml(scene.translation)}</footer></blockquote>`:''}${renderSources(scene.sources,'위에 표시한 전사본 장면. 원 게임 화면 전체 대조는 미완료.')}</li>`).join('')}</ol>
            <aside class="planning-boundary"><h4>같은 사건에 대한 반응 · 새로 쓴 X9 예문</h4><p class="content-note">상황: 승인망이 대피 구역의 문을 닫았고, 강제로 열면 옆 시설에 위험이 생긴다.</p><p>“${escapeHtml(guide.example)}”</p><p><strong>행동:</strong> ${escapeHtml(guide.exampleAction)}</p><p><strong>피할 표현:</strong> ${escapeHtml(guide.avoid)}</p></aside>
            ${renderSources(guide.sources,guide.sourceScope,guide.reviewedAt)}
        </div>
    </details>`;
}

function fanBossLink(id) {
    const boss = window.x9BossesData.find(b=>b.id===id);
    return `<button type="button" class="fan-boss-link" data-fan-boss="${escapeHtml(id)}">${escapeHtml(boss.name)}</button>`;
}

function renderFanBoss(boss) {
    return `<details class="planning-detail fan-boss-sheet" id="fan-boss-${escapeHtml(boss.id)}" data-fan-sheet="${escapeHtml(boss.id)}">
        <summary>${escapeHtml(boss.name)} · ${escapeHtml(boss.role)} <span class="planning-tag">팬 창작 v0.1</span></summary>
        <div class="planning-body">
            <p class="planning-question">${escapeHtml(boss.question)}</p>
            ${planningFields([['입장',boss.stance],['지키려는 대상',boss.protects],['헌터와 충돌하는 이유',boss.conflict],['평소 성격과 맹점',boss.personality],['몸과 실루엣',boss.body],['이동 방식',boss.motion],['모티프 → 공구 → 공격',boss.toolChain],['전장',boss.stage]])}
            <h4>공격과 대응 · 실제 플레이 검증 전</h4>
            <div class="fan-attack-grid">${boss.attacks.map(a=>`<article class="fan-attack"><h5>${escapeHtml(a.name)}</h5>${planningFields([['예고',a.cue],['행동',a.action],['대응',a.response],['빈틈',a.recovery]])}</article>`).join('')}</div>
            ${planningFields([['획득 도구 · '+boss.weapon.name,boss.weapon.function],['기능의 한계',boss.weapon.limit]])}
            <h4>같은 도시의 다른 담당자</h4><ul class="fan-relations">${boss.relationships.map(r=>`<li>${fanBossLink(r.id)}<span>${escapeHtml(r.text)}</span></li>`).join('')}</ul>
            ${planningFields([['전투 뒤의 변화',boss.resolution],['해결에 남는 비용',boss.cost],['모델링 메모',boss.modelNotes],['기존 보스와의 차이',boss.distinction]])}
        </div>
    </details>`;
}

function renderFanBossWorkshop() {
    const society = window.x9SocietyData;
    const bosses = window.x9BossesData;
    const checks = window.x9DesignChecksData;
    return `<section id="x9-boss-workshop" class="planning-section" aria-label="신규 8보스 기획">
        <h3>5. 같은 사회에서 충돌하는 8보스</h3>
        <p>직업·보호 대상·몸의 기능에서 시작한 신규 기획입니다. 이름·도시·기술·사건은 모두 수정 가능한 팬 창작입니다.</p>
        <button type="button" class="atlas-link" data-open-atlas="fan">하버 링 시설 연결도 보기 →</button>
        <details class="planning-detail fan-society"><summary>${escapeHtml(society.title)} · 사회 구조와 공통 규칙</summary><div class="planning-body">${planningFields([['도시와 권한',society.structure],['사건의 압력',society.pressure],['스테이지 운영',society.operation],['세 주역의 역할',society.protagonistRoles],['획득 무기와 격파의 의미',society.weaponRule],['최종전에서 돌아오는 역할',society.finale]])}</div></details>
        <details class="planning-detail fan-comparison"><summary>8명 비교표 · 모티프·직업·체형·이동·전장·무기</summary><div class="planning-body">
            <p class="content-note">좁은 화면에서는 표 안을 가로로 스크롤할 수 있습니다. 이름을 누르면 개별 설정서가 열립니다.</p>
            <div class="planning-table-scroll" tabindex="0" role="region" aria-label="신규 8보스 비교표, 가로로 스크롤 가능"><table class="planning-table fan-comparison-table"><caption>하버 링 8보스 · 미확정 팬 기획</caption><thead><tr><th scope="col">인물·모티프</th><th scope="col">직업·보호 대상</th><th scope="col">충돌 이유</th><th scope="col">체형·이동</th><th scope="col">전장</th><th scope="col">획득 기능</th></tr></thead><tbody>${bosses.map(b=>`<tr><th scope="row">${fanBossLink(b.id)}<p>${escapeHtml(b.motif)}</p></th><td><strong>${escapeHtml(b.role)}</strong><p>${escapeHtml(b.protects)}</p></td><td>${escapeHtml(b.conflict)}</td><td>${escapeHtml(b.body)}<p>${escapeHtml(b.motion)}</p></td><td>${escapeHtml(b.stage)}</td><td><strong>${escapeHtml(b.weapon.name)}</strong><p>${escapeHtml(b.weapon.function)}</p></td></tr>`).join('')}</tbody></table></div>
        </div></details>
        <div class="fan-boss-sheets">${bosses.map(renderFanBoss).join('')}</div>
        <details class="planning-detail fan-checks"><summary>중복 점검 · 도구의 상호작용 · 첫 제작 대상</summary><div class="planning-body">
            <p>${escapeHtml(checks.overlap)}</p>
            <h4>특히 겹치기 쉬운 조합</h4>${checks.pairChecks.map(c=>`<article class="planning-check"><div>${c.ids.map(fanBossLink).join(' ')}</div><p><strong>위험:</strong> ${escapeHtml(c.risk)}</p><p><strong>구분:</strong> ${escapeHtml(c.distinction)}</p></article>`).join('')}
            <h4>8개 도구의 상호작용 가설</h4><ol class="fan-interactions">${checks.interactions.map(r=>`<li>${fanBossLink(r.from)}의 도구 → ${fanBossLink(r.to)}<p>${escapeHtml(r.reason)}</p></li>`).join('')}</ol><p class="planning-boundary">${escapeHtml(checks.balance)}</p>
            <h4>첫 시제품 제안: ${fanBossLink(checks.prototype.bossId)}</h4>${planningFields([['선정 이유',checks.prototype.reason],['작게 만들 범위',checks.prototype.scope],['플레이 확인 기준',checks.prototype.pass],['아직 남은 제작 결정',checks.prototype.pending]])}
        </div></details>
    </section>`;
}

function renderX9Planning() {
    const p = window.x9PremiseData;
    return `<div class="x9-planning">
        <nav class="planning-nav" aria-label="X9 창작 자료 바로가기">
            <a href="#x9-evidence">설정 검수</a><a href="#x9-continuity">출발점</a><a href="#x9-premise">한 장 기획</a><a href="#x9-voices">주역 기준서</a><a href="#x9-boss-workshop">8보스 설계</a>
        </nav>
        ${renderEvidenceAudit()}
        <div id="planning-continuity-slot"></div>
        <section id="x9-premise" class="planning-section" aria-label="X9 한 장 기획">
            <h3>3. ${escapeHtml(p.title)}</h3><p>${escapeHtml(p.logline)}</p>
            <p class="planning-tag">수정 가능한 팬 창작 v${escapeHtml(p.version)} · 공식 후속작 설정 아님</p>
            <details class="planning-detail premise-sheet"><summary>한 장 기획 · 주제부터 결말까지 · 스포일러</summary><div class="planning-body">
                <p class="planning-question">${escapeHtml(p.question)}</p>
                ${planningFields([['주제',p.theme],['출발점',p.start],['적이 원하는 세계',p.antagonist],['적의 주장을 지탱하는 사건',p.incident],['주요 갈등',p.conflict],['엑스의 변화',p.change],['결말',p.ending],['마지막 이미지',p.endingImage],['이번 작품의 범위',p.scope]])}
            </div></details>
            <details class="planning-detail premise-assumptions"><summary>공식 자료에서 넘어온 부분과 새로 정한 가정 ${p.assumptions.length}개</summary><div class="planning-body">${p.assumptions.map(a=>`<article class="planning-check"><h4>${escapeHtml(a.id)} · ${escapeHtml(a.title)}</h4><p><strong>창작 선택:</strong> ${escapeHtml(a.choice)}</p><p><strong>경계:</strong> ${escapeHtml(a.boundary)}</p><p class="content-note">출발점 근거 항목: ${escapeHtml(window.x9ContinuityData.find(c=>c.id===a.continuityId).title)}</p></article>`).join('')}</div></details>
            <details class="planning-detail draft-review"><summary>기존 세 장 초안의 재검토 · 유지·축소·보류</summary><div class="planning-body">${p.draftReview.map(r=>`<article class="planning-check"><h4>${escapeHtml(r.chapter)} <span class="planning-tag">${escapeHtml(r.decision)}</span></h4><p><strong>남길 핵심:</strong> ${escapeHtml(r.keep)}</p><p><strong>바꾸는 부분:</strong> ${escapeHtml(r.revise)}</p></article>`).join('')}<p>이전 초안 전문은 아래에 보관했습니다. 지금의 기획안과 동시에 일어난 사건으로 합치지 않습니다.</p></div></details>
        </section>
        <section id="x9-voices" class="planning-section" aria-label="주역 행동과 말투 기준서"><h3>4. 세 주역 · 같은 사건, 다른 반응</h3><p>공식 대사를 흉내 낸 예문과 실제 전사 구절을 구별했습니다. 장면 요약 아래의 판단 기준은 집필을 돕는 해석입니다.</p>${window.characterGuidesData.map(g=>renderCharacterGuide(g)).join('')}</section>
        ${renderFanBossWorkshop()}
    </div>`;
}

document.addEventListener('click', event => {
    const button = event.target.closest('[data-fan-boss]');
    if (!button) return;
    const sheet = document.getElementById('fan-boss-'+button.dataset.fanBoss);
    if (!sheet) return;
    document.querySelector('[data-target="x9-section"]').click();
    sheet.open = true;
    sheet.querySelector('summary').focus({preventScroll:true});
    sheet.scrollIntoView({block:'start',behavior:'instant'});
});
