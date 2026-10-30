const societyEvidenceLabels={primary:'공식 소개·설명서',transcript:'게임·설명서 전사',secondary:'2차 자료 정리',unknown:'신원·세부 미확정',interpretation:'편집자 독해'};

function societyRecord(record) {
    const id=`society-${record.id}`;
    return `<details class="society-record" id="${escapeHtml(id)}"><summary><span class="society-evidence society-${record.evidence}">${escapeHtml(societyEvidenceLabels[record.evidence])}</span><strong>${escapeHtml(record.title)}</strong><small>${escapeHtml(record.scope)}</small></summary><div class="society-record-body"><p>${escapeHtml(record.fact)}</p><aside class="society-limit"><strong>구분해서 읽기</strong><p>${escapeHtml(record.limit)}</p></aside>${record.characterIds?.length?`<div class="character-links">${record.characterIds.map(personLink).join('')}</div>`:''}${renderSources(record.sources,`확인 위치: ${record.locator}. 인용이 아닌 한국어 요약이며 원전·전사·2차 자료의 확인 범위를 아래에서 확인하세요.`,window.worldSocietyData.reviewedAt)}</div></details>`;
}

function societyHeading(id,number,title,text) {
    return `<div class="society-section-heading"><span>${number}</span><div><h3 id="${id}" tabindex="-1">${title}</h3><p class="content-note">${text}</p></div><a href="#world-society-heading" aria-label="세계와 인간 사회 목차로">↑ 목차</a></div>`;
}

function renderWorldSociety() {
    const d=window.worldSocietyData;
    document.getElementById('world-society-container').innerHTML=`
        <section class="society-intro" aria-labelledby="world-society-heading"><span class="atlas-eyebrow">EARTH / HUMANITY / COEXISTENCE</span><h3 id="world-society-heading" tabindex="-1">인간은 어디에 있고,<br>이 세계에서 무엇을 하는가.</h3><p>레플리로이드의 전투 너머에 있는 연구, 노동, 피난과 생활을 읽습니다.</p><p class="content-note">${escapeHtml(d.scope)}</p><div class="society-quick-facts"><span>무대 <strong>미래의 지구</strong></span><span>기준 <strong>X1~X8</strong></span><span>인구 비율 <strong>확인된 수치 없음</strong></span></div></section>
        <nav class="society-contents" aria-label="세계와 인간 사회 목차">${[['society-overview','01 세계의 기본 설정'],['society-population','02 인구와 비율'],['society-roles','03 인간의 역할'],['society-people','04 인물과 판별'],['society-eras','05 작품별 인간 사회'],['society-later','06 후대·다른 세계'],['society-boundaries','07 판본 구분'],['society-unknowns','08 남은 빈칸'],['society-creative','09 X9에 활용하기']].map(([id,title])=>`<a href="#${id}">${title}</a>`).join('')}</nav>
        ${societyHeading('society-overview','01','세계의 기본 설정','설정의 골격과 그 위에서 읽어낸 주제를 구분합니다.')}
        <div class="society-overview-grid">${d.overview.map(r=>`<article class="society-overview-card"><span class="society-evidence society-${r.evidence}">${escapeHtml(societyEvidenceLabels[r.evidence])}</span><h4>${escapeHtml(r.title)}</h4><p>${escapeHtml(r.text)}</p><p class="society-card-limit">${escapeHtml(r.limit)}</p>${renderSources(r.sources,r.locator,d.reviewedAt)}</article>`).join('')}</div>
        <div class="society-links"><button class="atlas-link" type="button" data-open-atlas="official">지역·시설에서 생활 기반 살펴보기 →</button><button class="atlas-link" type="button" data-society-timeline>시리즈 전체 연혁 →</button></div>
        ${societyHeading('society-population','02','인구와 비율 · 모르는 수치는 비워 둡니다','“공식 수치를 확인하지 못함”과 “인간이 존재하지 않음”은 다른 말입니다. 검토 범위는 아래 참고자료에서 확인할 수 있습니다.')}
        <div class="society-metrics">${d.metrics.map(m=>`<article><h4>${escapeHtml(m.label)}</h4><strong>${escapeHtml(m.display)}</strong><p>${escapeHtml(m.text)}</p></article>`).join('')}</div>
        <p class="society-numbers-note">제로 3의 <strong>인간 약 60% · 레플리로이드 약 90%</strong>는 각각의 집단이 입은 전쟁 피해율입니다. X 시대의 인구 구성비가 아닙니다. <a href="#society-later-losses">근거와 분모 확인 ↓</a></p>
        ${renderSources(['society_cain_journal','society_earth','society_x6_manual','ending_x8_script','society_elf_war'],'검토한 사회·재난 관련 자료의 범위. 이를 전 설정집·전 언어판의 인구 통계 부재를 증명한 조사로 표시하지 않습니다.',d.reviewedAt)}
        ${societyHeading('society-roles','03','인간이 맡는 역할','직업 사례, 제도에 관한 기록, 인물의 주장과 해석을 나눕니다. 제목을 펼치면 관련 사건의 스포일러가 있습니다.')}
        <div class="society-records">${d.roles.map(societyRecord).join('')}</div>
        ${societyHeading('society-people','04','인간 인물과 혼동하기 쉬운 사례','현재 시대의 생존자, 전 시대의 인물, 신원 미상의 연구자를 같은 명단으로 세지 않습니다.')}
        <div class="society-human-portraits">${['cain','light','wily'].map(id=>`<div>${mediaFigure(window.mediaData.characters[id].portrait,'society-human-art',false)}${personLink(id)}</div>`).join('')}</div>
        <div class="society-records">${d.people.map(societyRecord).join('')}</div>
        ${societyHeading('society-eras','05','작품을 따라 달라지는 인간의 상황','공동 생활 → 전쟁과 피난 → 복구와 이주. 모든 시기에 동일한 사회 상태를 적용하지 않습니다. 펼친 내용은 스포일러를 포함합니다.')}
        <div class="society-records">${d.eras.map(societyRecord).join('')}</div>
        ${societyHeading('society-later','06','후대·다른 세계에서의 인간','제로·ZX·대시는 후대의 참고 사례이며 X8의 현재 상태표가 아닙니다. 에그제·유성은 별도 세계입니다. 핵심 스포일러가 접혀 있습니다.')}
        <div class="society-records">${d.later.map(societyRecord).join('')}</div>
        ${societyHeading('society-boundaries','07','본편과 다른 자료를 합치기 전에','공식 작품이어도 판본·외전·시대가 다르면 적용 범위를 확인합니다.')}
        <div class="society-records">${d.boundaries.map(societyRecord).join('')}</div>
        ${societyHeading('society-unknowns','08','아직 확정하지 않은 사회 설정','자료에서 확인하지 못한 항목을 따로 보관합니다. 상상으로 채울 때는 창작 설정이라고 표시합니다.')}
        <div class="society-unknown-grid">${d.unknowns.map(u=>`<article><h4>${escapeHtml(u.title)}</h4><p>${escapeHtml(u.known)}</p><p><strong>미확인:</strong> ${escapeHtml(u.missing)}</p>${renderSources(u.sources,'이 항목을 검토한 범위의 근거. 상세 제도 전체가 설명되어 있다는 뜻은 아닙니다.',d.reviewedAt)}</article>`).join('')}</div>
        ${societyHeading('society-creative','09','내 X9에서 인간에게도 선택을 준다면','다음은 새 인물 설계를 위한 제안입니다. 공식 인물·직업 설정이나 기존 X9 기획의 확정 추가 사항이 아닙니다.')}
        <details class="society-proposals"><summary>인간 캐릭터 역할 6가지 · 팬 창작 제안 펼치기</summary><div class="society-proposal-grid">${d.creative.map(c=>`<article><span class="society-evidence society-fan">팬 창작 제안</span><h4>${escapeHtml(c.role)}</h4><p>${escapeHtml(c.proposal)}</p><p class="society-creative-question">${escapeHtml(c.question)}</p></article>`).join('')}</div><p class="content-note">하버 링의 주민 비율·행정 구조를 정한다면 공식 통계가 아닌 “이 도시의 팬 기획 수치”로 기록합니다. 이 자료에서는 임의의 인구 비율을 만들지 않았습니다.</p><button class="atlas-link" type="button" data-atlas-x9>팬 창작 X9 기획서 →</button></details>`;
}

function societyHumanLink(person) {
    if(person.type!=='HUMAN')return '';
    return `<button class="atlas-link society-human-link" type="button" data-society-human="${escapeHtml(person.id)}">세계관 속 인간 · 역할과 출연 형태 살펴보기 →</button>`;
}

document.addEventListener('click',event=>{
    const human=event.target.closest('[data-society-human]');
    const open=event.target.closest('[data-open-society]');
    if(human||open){
        if(document.getElementById('cyber-modal').open)closeModal();
        document.querySelector('[data-target="glossary-section"]').click();
        const target=human?document.getElementById(`society-human-${human.dataset.societyHuman}`):document.getElementById('world-society-heading');
        if(!target)return;
        if(target instanceof HTMLDetailsElement)target.open=true;
        const focus=target.querySelector('summary')||target;focus.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:'instant'});
    }
    if(event.target.closest('[data-society-timeline]')){
        document.querySelector('[data-target="timeline-section"]').click();
        document.querySelector('#timeline-section h2').scrollIntoView({block:'start'});
        document.querySelector('[data-target="timeline-section"]').focus({preventScroll:true});
    }
    const link=event.target.closest('#world-society-container a[href^="#"], .lore-jumps a[href="#world-society-heading"], .lore-jumps a[href="#society-population"]');
    if(link){
        const target=document.getElementById(link.getAttribute('href').slice(1));
        if(!target)return;
        event.preventDefault();
        if(target instanceof HTMLDetailsElement)target.open=true;
        const focus=target.querySelector('summary')||target;focus.focus({preventScroll:true});target.scrollIntoView({block:'start',behavior:'instant'});
    }
});
