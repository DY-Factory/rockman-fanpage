// Official locations are an editorial relationship index, never a reconstructed geographic atlas.
let atlasSelectedPlace = 'jakob';
let harborSelectedFacility = 'capacitor_bison';

function atlasButton(id, label) {
    return `<button class="atlas-link" type="button" data-atlas-place="${escapeHtml(id)}">${escapeHtml(label)}</button>`;
}

function renderLocationLinks(personId) {
    const places = window.locationsData.filter(p => p.characterIds.includes(personId));
    if (!places.length) return '';
    return `<section class="atlas-person-places"><h3>관련 장소 · 사건과 활동 지역</h3><p class="content-note">이름을 누르면 지역·시설 페이지로 이동합니다. 관련 장소가 곧 소속이나 소유 시설이라는 뜻은 아닙니다.</p><div class="atlas-button-row">${places.map(p => atlasButton(p.id, `${p.series} · ${p.name}`)).join('')}</div></section>`;
}

function renderAtlas() {
    const root = document.getElementById('atlas-container');
    root.innerHTML = `<div class="atlas-intro"><span class="atlas-eyebrow">PLACES / PEOPLE / EVENTS</span><h3>세계는 장소와 사람 사이에서 이어진다.</h3><p>작품의 지도 화면, 장소의 기록, 새로 만드는 도시를 각각 살펴보세요.</p></div>
        <div class="atlas-mode-switch" role="group" aria-label="지도 자료 구분">
            <button type="button" data-atlas-mode="official" aria-pressed="true" aria-controls="atlas-official">작품 속 장소 <small>공식 작품 · 출처별 확인</small></button>
            <button type="button" data-atlas-mode="fan" aria-pressed="false" aria-controls="atlas-fan">X9 하버 링 <small>팬 창작 · 시설 연결도</small></button>
        </div>
        <div id="atlas-official">
            <details class="planning-detail atlas-references"><summary>게임에 등장하는 지도와 확인 범위 · X5 실제 화면 보기</summary><div class="atlas-reference-grid">${window.atlasReferencesData.map(ref => `<article><span class="atlas-eyebrow">${escapeHtml(ref.kind)}</span><h3>${escapeHtml(ref.title)}</h3>${ref.image ? `<figure><a href="${escapeHtml(ref.image.src)}" target="_blank" rel="noopener" aria-label="X5 지도 화면 원본 크기로 보기 (새 탭)"><img src="${escapeHtml(ref.image.src)}" alt="${escapeHtml(ref.image.alt)}" width="${ref.image.width}" height="${ref.image.height}" loading="lazy"></a><figcaption>${escapeHtml(ref.image.credit)} <a href="${escapeHtml(ref.image.source)}" target="_blank" rel="noopener noreferrer">캡처 출처 <span class="sr-only">(새 탭)</span></a></figcaption></figure>` : ''}<p>${escapeHtml(ref.text)}</p>${renderSources(ref.sources,'확인한 자료의 성격과 범위를 함께 표시합니다.','2026-10-25')}</article>`).join('')}</div></details>
            <div class="atlas-catalog-heading"><h3>장소에서 읽는 X1~X8</h3><span class="atlas-label">편집 관계도 · 좌표·거리 미지정</span></div>
            <p class="content-note">처음 수록한 12곳입니다. 2차 자료·대사 전사본에서 확인한 내용을 정리했으며, 공식 원전과의 직접 대조가 남은 부분을 표시했습니다. 사건은 펼쳐서 읽을 수 있습니다.</p>
            <form class="atlas-filters" role="search" aria-label="장소 찾기" onsubmit="return false">
                <label>작품<select id="atlas-series"><option value="ALL">모든 작품</option>${Array.from({length:8},(_,i)=>`<option>X${i+1}</option>`).join('')}</select></label>
                <label>시설 기능<select id="atlas-category"><option value="ALL">모든 기능</option>${[...new Set(window.locationsData.map(p=>p.category))].map(c=>`<option>${escapeHtml(c)}</option>`).join('')}</select></label>
                <label class="atlas-search-label">장소·세력·인물<input type="search" id="atlas-search" placeholder="야콥, 레플리포스, 셸던…"></label>
                <button type="button" class="reset-btn" id="atlas-reset">초기화</button>
            </form>
            <p id="atlas-count" class="content-note" role="status" aria-live="polite" aria-atomic="true"></p>
            <div class="atlas-browser"><div id="atlas-place-list" class="atlas-place-list" role="group" aria-label="장소 선택"></div><div id="atlas-place-detail"></div></div>
        </div>
        <div id="atlas-fan" hidden>
            <div class="atlas-fan-heading"><span class="atlas-label">FAN CONCEPT · v0.1</span><h3>하버 링 · 여덟 시설이 서로를 살리는 도시</h3><p>이 도시의 이름·시설 배치·공급망은 모두 팬 창작입니다. 공식 지구 지도상의 위치는 정하지 않았습니다.</p></div>
            <div class="harbor-layout"><div>
                <div class="harbor-map" aria-label="하버 링 시설 선택"><svg class="harbor-lines" viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true" focusable="false"><defs><marker id="harbor-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs><path class="harbor-shore" d="M0 420 Q140 360 180 470 T460 530 T730 570 L1000 600 L0 600 Z"/><ellipse cx="500" cy="305" rx="390" ry="240" class="harbor-ring"/>${window.harborConnectionsData.map((edge,i)=>{
                    const a=window.harborFacilitiesData.find(f=>f.id===edge.from),b=window.harborFacilitiesData.find(f=>f.id===edge.to);
                    const dx=(b.x-a.x)*10,dy=(b.y-a.y)*6,len=Math.hypot(dx,dy),inset=64;
                    return `<line data-harbor-edge="${i}" x1="${a.x*10+dx/len*inset}" y1="${a.y*6+dy/len*inset}" x2="${b.x*10-dx/len*inset}" y2="${b.y*6-dy/len*inset}" marker-end="url(#harbor-arrow)"/>`;
                }).join('')}</svg><div class="harbor-map-caption" aria-hidden="true">HARBOR RING / FACILITY NETWORK</div>${window.harborFacilitiesData.map((facility,i)=>`<button type="button" class="harbor-node" data-harbor-facility="${facility.id}" style="--node-x:${facility.x}%;--node-y:${facility.y}%" aria-pressed="false" aria-controls="harbor-detail"><span class="harbor-node-number">${String(i+1).padStart(2,'0')} / ${escapeHtml(facility.short)}</span><strong>${escapeHtml(facility.name)}</strong><small>${escapeHtml(facility.zone)}</small></button>`).join('')}</div>
                <p class="content-note">시설을 선택하면 연결이 밝아집니다. 화살표는 제공하는 쪽 → 받는 쪽입니다. 선은 도로·거리·보스 공략 순서를 뜻하지 않습니다. 좁은 화면에서는 시설 목록으로 표시합니다.</p>
                <p id="harbor-selection-status" class="sr-only" role="status" aria-live="polite"></p>
            </div><div id="harbor-detail"></div></div>
            <details class="planning-detail"><summary>도시의 권한과 이야기 · 팬 창작 스포일러</summary><div class="planning-body"><p>${escapeHtml(window.x9SocietyData.structure)}</p><p>${escapeHtml(window.x9SocietyData.operation)}</p><p>${escapeHtml(window.x9SocietyData.finale)}</p><button type="button" class="atlas-link" data-atlas-x9>팬 창작 X9 기획서로 이동 →</button></div></details>
        </div>`;
    for (const id of ['atlas-series','atlas-category','atlas-search']) {
        document.getElementById(id).addEventListener(id==='atlas-search'?'input':'change',updateAtlasPlaces);
    }
    document.getElementById('atlas-reset').addEventListener('click',()=>{resetAtlasFilters();updateAtlasPlaces();});
    updateAtlasPlaces();
    selectHarborFacility(harborSelectedFacility);
}

function setAtlasMode(mode) {
    document.querySelectorAll('[data-atlas-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.atlasMode===mode)));
    document.getElementById('atlas-official').hidden=mode!=='official';
    document.getElementById('atlas-fan').hidden=mode!=='fan';
}

function resetAtlasFilters() {
    document.getElementById('atlas-series').value='ALL';
    document.getElementById('atlas-category').value='ALL';
    document.getElementById('atlas-search').value='';
}

function updateAtlasPlaces() {
    const series=document.getElementById('atlas-series').value;
    const category=document.getElementById('atlas-category').value;
    const query=document.getElementById('atlas-search').value.trim().toLocaleLowerCase();
    const places=window.locationsData.filter(p=>(series==='ALL'||p.series===series)&&(category==='ALL'||p.category===category)&&
        [p.name,p.original,p.faction,p.purpose,...p.characterIds.map(id=>findPerson(id)?.name||'')].join(' ').toLocaleLowerCase().includes(query));
    if (!places.some(p=>p.id===atlasSelectedPlace)) atlasSelectedPlace=places[0]?.id||null;
    document.getElementById('atlas-count').textContent=`${places.length} / ${window.locationsData.length}곳 · 장소를 선택해 관계와 자료 확인`;
    document.getElementById('atlas-place-list').innerHTML=places.length?places.map(p=>`<button type="button" class="atlas-place-button" data-select-place="${p.id}" aria-pressed="${p.id===atlasSelectedPlace}" aria-controls="atlas-place-detail"><span>${escapeHtml(p.series)} · ${escapeHtml(p.category)}</span><strong>${escapeHtml(p.name)}</strong><small>${escapeHtml(p.original)}</small></button>`).join(''):'<p class="atlas-empty">조건에 맞는 장소가 없습니다. 검색어나 필터를 바꾸거나 초기화해 주세요.</p>';
    renderAtlasPlace();
}

function renderAtlasPlace() {
    const p=window.locationsData.find(p=>p.id===atlasSelectedPlace);
    const target=document.getElementById('atlas-place-detail');
    if (!p) {target.innerHTML='';return;}
    document.querySelectorAll('[data-select-place]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.selectPlace===p.id)));
    target.innerHTML=`<article class="atlas-detail" aria-labelledby="atlas-place-title"><span class="atlas-eyebrow">${escapeHtml(p.series)} / ${escapeHtml(p.original)}</span><h3 id="atlas-place-title" tabindex="-1">${escapeHtml(p.name)}</h3><p>${escapeHtml(p.purpose)}</p>
        ${renderReferenceGallery('location',p.id)}
        <div class="atlas-relation-flow"><div><small>장소의 기능</small><strong>${escapeHtml(p.category)}</strong></div><span aria-hidden="true">↓</span><div><small>관련 세력·관계</small><strong>${escapeHtml(p.faction)}</strong></div><span aria-hidden="true">↓</span><div><small>이곳의 이야기와 연결된 인물</small><div class="character-links">${p.characterIds.map(personLink).join('')}</div></div></div>
        <p class="content-note">${escapeHtml(p.relation)}</p>
        <details class="planning-detail"><summary>이곳에서 일어난 일 · 스포일러</summary><div class="planning-body"><p>${escapeHtml(p.event)}</p></div></details>
        <div class="atlas-unknown"><strong>아직 확정하지 않은 정보</strong><p>${escapeHtml(p.unknown)}</p></div>
        <div class="atlas-writing"><strong>창작으로 이어 볼 질문 · 편집자 제안</strong><p>${escapeHtml(p.question)}</p></div>
        ${renderSources(p.sources,`공식 게임에 등장하는 장소에 관한 2차 자료·전사본 요약. 확인 위치: ${p.locator}. 이 관계도의 도형 배치는 편집 구성이며 공식 지도가 아닙니다.`,'2026-10-25')}</article>`;
}

function selectHarborFacility(id) {
    const facility=window.harborFacilitiesData.find(f=>f.id===id);
    const boss=window.x9BossesData.find(b=>b.id===id);
    if (!facility||!boss) return;
    harborSelectedFacility=id;
    const edges=window.harborConnectionsData.filter(e=>e.from===id||e.to===id);
    const related=new Set(edges.flatMap(e=>[e.from,e.to]));
    document.querySelectorAll('[data-harbor-facility]').forEach(b=>{
        b.setAttribute('aria-pressed',String(b.dataset.harborFacility===id));
        b.classList.toggle('harbor-related',related.has(b.dataset.harborFacility));
    });
    document.querySelectorAll('[data-harbor-edge]').forEach(line=>{
        const edge=window.harborConnectionsData[Number(line.dataset.harborEdge)];
        line.classList.toggle('is-selected',edge.from===id||edge.to===id);
    });
    const connectionList=(incoming)=>{
        const links=edges.filter(e=>incoming?e.to===id:e.from===id);
        return links.length?`<ul class="harbor-connections">${links.map(e=>{
            const other=window.harborFacilitiesData.find(f=>f.id===(incoming?e.from:e.to));
            return `<li><span class="atlas-label">${escapeHtml(e.kind)}</span> ${escapeHtml(e.label)}<button type="button" class="atlas-link" data-harbor-jump="${other.id}">${incoming?'←':'→'} ${escapeHtml(other.name)}</button></li>`;
        }).join('')}</ul>`:'<p class="content-note">현재 기획에 연결을 더 정하지 않았습니다. 자급 시설이라는 뜻은 아닙니다.</p>';
    };
    document.getElementById('harbor-detail').innerHTML=`<article class="atlas-detail harbor-detail"><span class="atlas-eyebrow">팬 창작 / ${escapeHtml(facility.zone)}</span><h3 id="harbor-detail-title" tabindex="-1">${escapeHtml(facility.name)}</h3><p>${escapeHtml(facility.service)}</p><div class="harbor-manager"><small>시설 담당자</small><strong>${escapeHtml(boss.name)}</strong><span>${escapeHtml(boss.role)}</span></div><h4>공급받거나 인계받는 것</h4>${connectionList(true)}<h4>다른 시설에 제공하는 것</h4>${connectionList(false)}<details class="planning-detail"><summary>보호 대상·충돌 이유 · 창작 스포일러</summary><div class="planning-body"><p><strong>지키려는 것:</strong> ${escapeHtml(boss.protects)}</p><p>${escapeHtml(boss.conflict)}</p><p><strong>전장:</strong> ${escapeHtml(boss.stage)}</p>${fanBossLink(boss.id)}</div></details><p class="content-note">기존 8보스 기획을 바탕으로 만든 공급망 초안입니다. 선이 없는 관계는 부재가 아니라 미설계일 수 있습니다.</p></article>`;
    document.getElementById('harbor-selection-status').textContent=`${facility.name} 선택, 연결 ${edges.length}개. 아래 설명에서 공급·인계 관계를 읽을 수 있습니다.`;
}

document.addEventListener('click',event=>{
    const mode=event.target.closest('[data-atlas-mode]');
    if (mode) setAtlasMode(mode.dataset.atlasMode);
    const place=event.target.closest('[data-select-place]');
    if (place) {
        atlasSelectedPlace=place.dataset.selectPlace;renderAtlasPlace();
        const heading=document.getElementById('atlas-place-title');
        heading.focus({preventScroll:true});
        if (window.matchMedia('(max-width: 700px)').matches) heading.scrollIntoView({block:'start',behavior:'instant'});
    }
    const facility=event.target.closest('[data-harbor-facility], [data-harbor-jump]');
    if (facility) {
        selectHarborFacility(facility.dataset.harborFacility||facility.dataset.harborJump);
        // Linked buttons inside the replaced detail would otherwise lose keyboard focus.
        if (facility.dataset.harborJump || window.matchMedia('(max-width: 700px)').matches) {
            const heading=document.getElementById('harbor-detail-title');
            heading.focus({preventScroll:true});
            if (window.matchMedia('(max-width: 700px)').matches) heading.scrollIntoView({block:'start',behavior:'instant'});
        }
    }
    const link=event.target.closest('[data-atlas-place], [data-open-atlas]');
    if (link) {
        const dialog=document.getElementById('cyber-modal');
        if (dialog.open) closeModal();
        document.querySelector('[data-target="atlas-section"]').click();
        setAtlasMode(link.dataset.openAtlas||'official');
        if (link.dataset.atlasPlace) {resetAtlasFilters();atlasSelectedPlace=link.dataset.atlasPlace;updateAtlasPlaces();}
        const heading=document.getElementById(link.dataset.atlasPlace?'atlas-place-title':'atlas-heading');
        heading.focus({preventScroll:true});heading.scrollIntoView({block:'start',behavior:'instant'});
    }
    if (event.target.closest('[data-atlas-x9]')) {
        document.querySelector('[data-target="x9-section"]').click();
        document.querySelector('#x9-section h2').scrollIntoView({block:'start',behavior:'instant'});
        document.querySelector('[data-target="x9-section"]').focus({preventScroll:true});
    }
});
