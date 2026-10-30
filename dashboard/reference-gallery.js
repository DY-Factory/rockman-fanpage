// Image provenance stays with the file, including in contextual galleries.
const referenceKinds = {'in-game':'인게임 화면','official-art':'공식 삽화·홍보','official-document':'공식 개발 문서','fan-work':'팬 창작·번역'};
let archiveAssetCache;
let archiveFiltered = [];
let archivePage = 0;
const archivePageSize = 24;
let imageViewerItems = [], imageViewerIndex = 0, imageViewerTrigger;

function getImageArchiveAssets() {
    if (archiveAssetCache) return archiveAssetCache;
    const legacy = Object.entries(window.mediaData.assets).map(([id,a])=>({
        ...a, id:`legacy-${id}`, kind:'official-art', work:(a.workId||{classic:'MM11','x-banner':'X-series','zero-zx':'ZERO-ZX'}[id]||'X-series').replace('XDiVE','XDIVE'),
        author:a.copyright, edition:a.workId||a.caption, notes:a.note||'', spoiler:false, locationIds:[],
        characterIds:Object.entries(window.mediaData.characters).filter(([,c])=>c.portrait===id||c.artwork===id||c.gallery?.some(g=>g.assetIds.includes(id))).map(([key])=>key)
    }));
    const maps=window.atlasReferencesData.filter(r=>r.image).map((r,i)=>({
        ...r.image,id:`atlas-${i}`,kind:'in-game',work:'X5',caption:r.title,author:r.image.credit,
        notes:r.text,edition:'X5 · Windows',spoiler:false,locationIds:[],characterIds:[]
    }));
    const seen=new Set();
    archiveAssetCache=[...window.referenceMediaData.assets,...legacy,...maps].filter(a=>!seen.has(a.src)&&seen.add(a.src));
    return archiveAssetCache;
}

function referenceCard(a,scope) {
    return `<figure class="reference-card"><button type="button" class="reference-preview" data-image-id="${escapeHtml(a.id)}" data-image-scope="${escapeHtml(scope)}" aria-label="${escapeHtml(a.caption)} · 확대 보기"><img src="${escapeHtml(a.src)}" width="${a.width}" height="${a.height}" alt="${escapeHtml(a.alt||a.caption)}" loading="lazy" decoding="async"></button><figcaption><span class="reference-kind ${a.kind==='fan-work'?'is-fan':''}">${escapeHtml(referenceKinds[a.kind])}</span><strong>${escapeHtml(a.caption)}</strong><small>${escapeHtml(a.edition||a.work)}${a.spoiler?' · 스포일러':''}</small></figcaption></figure>`;
}

function referenceScope(scope) {
    if (scope==='archive') return archiveFiltered;
    const [type,id,visibility]=scope.split(':');
    return window.referenceMediaData.assets.filter(a=>(type==='location'?a.locationIds:a.characterIds).includes(id)&&a.spoiler===(visibility==='spoiler'));
}

function renderReferenceGallery(type,id) {
    const safe=referenceScope(`${type}:${id}:safe`), spoilers=referenceScope(`${type}:${id}:spoiler`);
    if (!safe.length&&!spoilers.length) return '';
    const cards=(items,scope)=>`<div class="reference-grid contextual-grid">${items.map(a=>referenceCard(a,scope)).join('')}</div>`;
    return `<section class="reference-context"><div class="reference-heading"><h4>${type==='location'?'장소 이미지':'관련 화면·참고 이미지'}</h4><span>${safe.length+spoilers.length}개 파일</span></div><p class="content-note">이미지를 누르면 출처·판본과 원본을 확인할 수 있습니다. 팬 작업은 별도 표기합니다.</p>
        ${cards(safe.slice(0,4),`${type}:${id}:safe`)}
        ${safe.length>4?`<details class="reference-more"><summary>이미지 ${safe.length-4}개 더 보기</summary>${cards(safe.slice(4),`${type}:${id}:safe`)}</details>`:''}
        ${spoilers.length?`<details class="reference-spoilers"><summary>사건·결말 관련 이미지 ${spoilers.length}개 · 스포일러 펼치기</summary>${cards(spoilers,`${type}:${id}:spoiler`)}</details>`:''}
        ${type==='location'?`<button type="button" class="atlas-link" data-image-place="${escapeHtml(id)}">자료실에서 이 장소 모아 보기 →</button>`:''}</section>`;
}

function renderImageArchive() {
    const assets=getImageArchiveAssets();
    const works=[...new Set(assets.map(a=>a.work))].sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
    document.getElementById('images-container').innerHTML=`<div class="image-archive-intro"><span class="atlas-eyebrow">VISUAL REFERENCE LIBRARY</span><h3>세계의 모습까지 읽는 자료실</h3><p>전체 ${assets.length}개 파일 · 새로 모은 ${window.referenceMediaData.assets.length}개와 기존 인물·지도 이미지</p><p class="content-note">공개 자료에서 확인한 수록분입니다. 인터넷 전체나 모든 시리즈의 이미지가 망라된 목록은 아닙니다. 이미지가 보관된 팬 사이트와 이미지 자체의 제작 주체는 구분합니다.</p><a href="assets/images/references/manifest.json" download="rockman-reference-manifest.json">신규 수집 파일 목록·출처 내려받기 (JSON)</a></div>
        <form class="image-filters" role="search" aria-label="이미지 찾기" onsubmit="return false">
        <label>자료 종류<select id="image-kind"><option value="ALL">모든 자료</option>${Object.entries(referenceKinds).map(([key,label])=>`<option value="${key}">${label}</option>`).join('')}</select></label>
        <label>작품<select id="image-work"><option value="ALL">모든 작품</option>${works.map(w=>`<option>${escapeHtml(w)}</option>`).join('')}</select></label>
        <label>장소<select id="image-place"><option value="ALL">모든 장소·인물</option>${window.locationsData.map(p=>`<option value="${p.id}">${escapeHtml(p.series+' · '+p.name)}</option>`).join('')}</select></label>
        <label>이름·장면·작성자<input type="search" id="image-search" placeholder="엑스, 야콥, IrregularSaturn…"></label>
        <label class="image-spoiler-control"><input type="checkbox" id="image-spoilers">사건·결말 이미지 포함</label><button type="button" class="reset-btn" id="image-reset">초기화</button></form>
        <p id="image-count" class="content-note" role="status" aria-live="polite" aria-atomic="true"></p><div id="image-results" class="reference-grid"></div>
        <div class="image-pagination"><button type="button" class="reset-btn" id="image-prev-page">← 이전</button><span id="image-page-count"></span><button type="button" class="reset-btn" id="image-next-page">다음 →</button></div>`;
    for (const id of ['image-kind','image-work','image-place','image-search','image-spoilers']) document.getElementById(id).addEventListener(id==='image-search'?'input':'change',()=>updateImageArchive(true));
    document.getElementById('image-reset').addEventListener('click',()=>{resetImageArchive();updateImageArchive(true);});
    for (const [id,direction] of [['image-prev-page',-1],['image-next-page',1]]) document.getElementById(id).addEventListener('click',()=>{
        archivePage+=direction;updateImageArchive(false);document.getElementById('image-count').scrollIntoView({block:'start'});
        document.querySelector('#image-results button')?.focus({preventScroll:true});
    });
    updateImageArchive(true);
}

function resetImageArchive() {
    for (const id of ['image-kind','image-work','image-place']) document.getElementById(id).value='ALL';
    document.getElementById('image-search').value='';document.getElementById('image-spoilers').checked=false;
}

function updateImageArchive(reset) {
    if(reset) archivePage=0;
    const kind=document.getElementById('image-kind').value, work=document.getElementById('image-work').value, place=document.getElementById('image-place').value;
    const query=document.getElementById('image-search').value.trim().toLocaleLowerCase();
    const includeSpoilers=document.getElementById('image-spoilers').checked;
    const matching=getImageArchiveAssets().filter(a=>(kind==='ALL'||a.kind===kind)&&(work==='ALL'||a.work===work)&&(place==='ALL'||a.locationIds.includes(place))&&
        [a.caption,a.author,a.edition,a.notes,...a.characterIds.map(id=>findPerson(id)?.name||id),...a.locationIds.map(id=>window.locationsData.find(p=>p.id===id)?.name||id)].join(' ').toLocaleLowerCase().includes(query));
    archiveFiltered=matching.filter(a=>includeSpoilers||!a.spoiler);
    const pages=Math.max(1,Math.ceil(archiveFiltered.length/archivePageSize));
    archivePage=Math.max(0,Math.min(archivePage,pages-1));
    document.getElementById('image-count').textContent=`${archiveFiltered.length}개 파일${includeSpoilers?'':` · 사건·결말 이미지 ${matching.length-archiveFiltered.length}개 숨김`} · ${archiveFiltered.length?archivePage*archivePageSize+1:0}–${Math.min((archivePage+1)*archivePageSize,archiveFiltered.length)} 표시`;
    document.getElementById('image-results').innerHTML=archiveFiltered.length?archiveFiltered.slice(archivePage*archivePageSize,(archivePage+1)*archivePageSize).map(a=>referenceCard(a,'archive')).join(''):'<p class="atlas-empty">조건에 맞는 이미지가 없습니다. 필터를 바꾸거나 사건·결말 이미지 포함을 선택해 주세요.</p>';
    document.getElementById('image-page-count').textContent=`${archivePage+1} / ${pages}`;
    document.getElementById('image-prev-page').disabled=archivePage===0;
    document.getElementById('image-next-page').disabled=archivePage>=pages-1;
}

function showReferenceImage(id,scope,trigger) {
    imageViewerItems=referenceScope(scope);
    imageViewerIndex=imageViewerItems.findIndex(a=>a.id===id);
    if(imageViewerIndex<0) return;
    imageViewerTrigger=trigger;
    updateReferenceViewer();
    document.getElementById('reference-viewer').showModal();
}

function updateReferenceViewer() {
    const a=imageViewerItems[imageViewerIndex];
    const dialog=document.getElementById('reference-viewer');
    dialog.querySelector('.reference-viewer-body').innerHTML=`<div class="reference-viewer-stage"><img src="${escapeHtml(a.src)}" width="${a.width}" height="${a.height}" alt="${escapeHtml(a.alt||a.caption)}"></div><div class="reference-viewer-info"><span class="reference-kind ${a.kind==='fan-work'?'is-fan':''}">${escapeHtml(referenceKinds[a.kind])}</span><h3 id="reference-viewer-title">${escapeHtml(a.caption)}</h3><p>${escapeHtml(a.edition||a.work)} · ${a.width} × ${a.height}px${a.spoiler?' · 스포일러':''}</p><p>제작·기록: ${escapeHtml(a.author||'미확인')}</p><p>${escapeHtml(a.notes||'')}</p><div class="reference-viewer-links"><a href="${escapeHtml(a.source)}" target="_blank" rel="noopener noreferrer">출처 페이지 ↗</a><a href="${escapeHtml(a.original)}" target="_blank" rel="noopener noreferrer">외부 원본 ↗</a><a href="${escapeHtml(a.src)}" download>이미지 파일 저장 ↓</a></div></div>`;
    dialog.querySelector('[data-viewer-zoom]').setAttribute('aria-pressed','false');
    dialog.querySelector('[data-viewer-zoom]').textContent='원본 크기';
    dialog.querySelector('[data-viewer-status]').textContent=`${imageViewerIndex+1} / ${imageViewerItems.length}`;
    dialog.querySelector('[data-viewer-prev]').disabled=imageViewerItems.length<2;
    dialog.querySelector('[data-viewer-next]').disabled=imageViewerItems.length<2;
}

document.addEventListener('click',event=>{
    const image=event.target.closest('[data-image-id]');
    if(image) showReferenceImage(image.dataset.imageId,image.dataset.imageScope,image);
    const place=event.target.closest('[data-image-place]');
    if(place) {
        document.querySelector('[data-target="images-section"]').click();resetImageArchive();
        document.getElementById('image-place').value=place.dataset.imagePlace;updateImageArchive(true);
        document.getElementById('images-heading').focus();document.getElementById('images-heading').scrollIntoView({block:'start'});
    }
    const viewer=document.getElementById('reference-viewer');
    if(event.target.closest('[data-viewer-close]')) viewer.close();
    if(event.target.closest('[data-viewer-prev], [data-viewer-next]')) {
        imageViewerIndex=(imageViewerIndex+(event.target.closest('[data-viewer-prev]')?-1:1)+imageViewerItems.length)%imageViewerItems.length;updateReferenceViewer();
    }
    const zoom=event.target.closest('[data-viewer-zoom]');
    if(zoom) {
        const full=viewer.querySelector('.reference-viewer-stage').classList.toggle('is-full-size');
        zoom.setAttribute('aria-pressed',String(full));zoom.textContent=full?'화면에 맞추기':'원본 크기';
    }
});

document.addEventListener('DOMContentLoaded',()=>{
    const viewer=document.getElementById('reference-viewer');
    viewer.addEventListener('close',()=>{if(imageViewerTrigger?.isConnected)imageViewerTrigger.focus({preventScroll:true});});
    viewer.addEventListener('keydown',event=>{
        if(!['ArrowLeft','ArrowRight'].includes(event.key))return;
        event.preventDefault();viewer.querySelector(event.key==='ArrowLeft'?'[data-viewer-prev]':'[data-viewer-next]').click();
    });
});
