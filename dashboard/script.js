// ============================================================================
// Rockman X Fanpage Dashboard
// 정적 페이지 단일 스크립트. 데이터는 window.* 글로벌(data/*.js) 에서 읽는다.
// ============================================================================

// --- 안전 유틸 ---
// innerHTML에 외부 텍스트를 주입할 때 HTML 특수문자 이스케이프.
function escapeHtml(value) {
    if (value === undefined || value === null) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function debounce(fn, wait) {
    let t;
    return function (...args) {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), wait);
    };
}

// --- DOM 요소 캐싱 ---
const tabButtons = Array.from(document.querySelectorAll('.tab-btn'));
const sections = Array.from(document.querySelectorAll('.data-section'));

const gridReploids = document.getElementById('reploids-grid');
const accordionContainer = document.getElementById('affiliation-accordion');
const storyContainer = document.getElementById('story-container');
const timelineContainer = document.getElementById('timeline-container');
const x9Container = document.getElementById('x9-container');

const modal = document.getElementById('cyber-modal');
const modalBody = document.getElementById('modal-body');
const modalContent = modal.querySelector('.modal-content');

// --- 데이터 로컬 필터 상태 ---
let currentType = 'HUNTER';
let currentSeries = 'ALL';
let currentSearch = '';

// 모달 트리거 element 보관 (닫을 때 포커스 복귀)
let lastFocusedBeforeModal = null;

// ============================================================================
// 탭 전환 (URL 해시 동기화)
// ============================================================================
function activateTab(targetId, options = {}) {
    const { updateHash = true } = options;

    let matched = false;
    tabButtons.forEach(btn => {
        const isActive = btn.dataset.target === targetId;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        if (isActive) matched = true;
    });
    sections.forEach(sec => {
        sec.classList.toggle('active', sec.id === targetId);
    });

    if (!matched) return false;
    if (updateHash) {
        const targetHash = `#${targetId}`;
        if (location.hash !== targetHash) {
            history.replaceState(null, '', targetHash);
        }
    }
    return true;
}

function setupTabs() {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => activateTab(btn.dataset.target));
        btn.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            e.preventDefault();
            const idx = tabButtons.indexOf(btn);
            const next = e.key === 'ArrowRight'
                ? tabButtons[(idx + 1) % tabButtons.length]
                : tabButtons[(idx - 1 + tabButtons.length) % tabButtons.length];
            next.focus();
            activateTab(next.dataset.target);
        });
    });

    // 초기 진입: URL 해시가 있으면 그 탭, 없으면 기본(레플리로이드)
    const initial = location.hash.replace('#', '');
    const fallback = tabButtons[0]?.dataset.target;
    if (!initial || !activateTab(initial, { updateHash: false })) {
        if (fallback) activateTab(fallback, { updateHash: false });
    }

    window.addEventListener('hashchange', () => {
        const id = location.hash.replace('#', '');
        if (id) activateTab(id, { updateHash: false });
    });
}

// ============================================================================
// 소속(Affiliation) 정규화 (data/affiliation-rules.js 기반)
// ============================================================================
function normalizeAffiliation(item) {
    if (item.affiliation_group) return item.affiliation_group;
    const text = item.affiliation;
    if (!text) return '기타';
    const rules = window.affiliationRules || [];
    for (const rule of rules) {
        if (rule.keywords.some(kw => text.includes(kw))) return rule.group;
    }
    return text.trim();
}

// ============================================================================
// 카드 빌더 (DOM API 사용 - XSS 안전)
// ============================================================================
function getCardThemeClass(item) {
    if (item.type === 'IRREGULAR') return 'boss-card';
    if (item.type === 'REPLOID') return 'reploid-card';
    return '';
}

function buildPersonCard(item, options = {}) {
    const { showProfile = true } = options;
    const isBoss = !!item.series;

    const card = document.createElement('article');
    card.className = `cyber-card ${getCardThemeClass(item)}`.trim();
    card.dataset.id = item.id;
    card.dataset.kind = isBoss ? 'boss' : 'character';
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.name} 상세 정보 열기`);

    const header = document.createElement('div');
    header.className = 'card-header';
    const h3 = document.createElement('h3');
    h3.textContent = item.name;
    header.appendChild(h3);

    const meta = document.createElement('div');
    meta.className = 'card-meta card-meta-small';
    const cardTypeLabel = isBoss ? `[${item.series}]` : `[${item.type}]`;
    meta.textContent = `${cardTypeLabel} | ${item.affiliation || '불명'}`;
    header.appendChild(meta);
    card.appendChild(header);

    if (showProfile && item.profile) {
        const desc = document.createElement('div');
        desc.className = 'card-desc';
        desc.textContent = item.profile;
        card.appendChild(desc);
    }
    return card;
}

function findItemById(id, kind) {
    if (kind === 'boss') return (window.bossesData || []).find(b => b.id === id);
    return (window.charactersData || []).find(c => c.id === id);
}

// ============================================================================
// 레플리로이드 렌더링 (통합)
// ============================================================================
function getAllPeople() {
    const characters = window.charactersData || [];
    const bosses = window.bossesData || [];
    return [...characters, ...bosses];
}

function renderReploids() {
    let allData = getAllPeople();

    if (currentType !== 'ALL') {
        allData = allData.filter(item => item.type === currentType);
    }

    if (currentSeries !== 'ALL') {
        allData = allData.filter(item => item.appearances && item.appearances.includes(currentSeries));
    }

    if (currentSearch) {
        const q = currentSearch;
        allData = allData.filter(item => {
            return (item.name && item.name.toLowerCase().includes(q))
                || (item.english_name && item.english_name.toLowerCase().includes(q))
                || (item.affiliation && item.affiliation.toLowerCase().includes(q))
                || (item.weakness && item.weakness.toLowerCase().includes(q));
        });
    }

    gridReploids.innerHTML = '';
    if (allData.length === 0) {
        const empty = document.createElement('p');
        empty.className = 'empty-state';
        empty.textContent = '조건에 일치하는 데이터가 없습니다.';
        empty.style.color = 'var(--text-muted)';
        gridReploids.appendChild(empty);
        return;
    }
    const frag = document.createDocumentFragment();
    allData.forEach(item => frag.appendChild(buildPersonCard(item)));
    gridReploids.appendChild(frag);
}

// ============================================================================
// 필터/검색 이벤트 + Weakness Matrix
// ============================================================================
function setupFilters() {
    const typeBtns = document.querySelectorAll('.type-filter-bar .type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            typeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentType = btn.dataset.type;
            renderReploids();
        });
    });

    const seriesBtns = document.querySelectorAll('.series-filters .filter-btn');
    seriesBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            seriesBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSeries = btn.dataset.filter;
            renderReploids();
        });
    });

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        const onInput = debounce((value) => {
            currentSearch = value.toLowerCase().trim();
            renderReploids();
        }, 180);
        searchInput.addEventListener('input', (e) => onInput(e.target.value));
    }

    // 그리드 카드 클릭/키보드 위임
    gridReploids.addEventListener('click', (e) => {
        const card = e.target.closest('.cyber-card');
        if (!card || !gridReploids.contains(card)) return;
        openItemModal(card.dataset.id, card.dataset.kind, card);
    });
    gridReploids.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.cyber-card');
        if (!card) return;
        e.preventDefault();
        openItemModal(card.dataset.id, card.dataset.kind, card);
    });

    const btnMatrix = document.getElementById('btn-weakness-matrix');
    if (btnMatrix) {
        btnMatrix.addEventListener('click', () => openWeaknessMatrix(btnMatrix));
    }
}

function openItemModal(id, kind, trigger) {
    const item = findItemById(id, kind);
    if (!item) return;
    if (kind === 'boss') openBossModal(item, trigger);
    else openHunterModal(item, trigger);
}

function openWeaknessMatrix(trigger) {
    modalContent.className = 'modal-content cyber-card boss-theme';

    const bossesBySeries = {};
    (window.bossesData || []).forEach(b => {
        if (!bossesBySeries[b.series]) bossesBySeries[b.series] = [];
        bossesBySeries[b.series].push(b);
    });

    let matrixHtml = '<div class="matrix-grid">';
    for (let s = 1; s <= 8; s++) {
        const seriesBosses = bossesBySeries[`X${s}`];
        if (!seriesBosses) continue;
        matrixHtml += `<div class="matrix-card"><h3>[록맨 X${s}]</h3><ul>`;
        seriesBosses.forEach(b => {
            matrixHtml += `<li>
                <span class="boss-name">${escapeHtml(b.name)}</span>
                <br/><span class="boss-weakness-label">└ 약점:</span>
                <span class="boss-weakness-value">${escapeHtml(b.weakness)}</span>
            </li>`;
        });
        matrixHtml += '</ul></div>';
    }
    matrixHtml += '</div>';

    modalBody.innerHTML = `
        <h2 class="modal-title matrix-modal-title" id="modal-title-anchor">IRREGULAR WEAKNESS MATRIX</h2>
        <div class="modal-subtitle">시리즈별 보스 상성 데이터베이스</div>
        <div class="matrix-scroll-area custom-scroll">${matrixHtml}</div>
    `;
    openModal(trigger);
}

// ============================================================================
// 모달 제어 (ESC, 포커스 트랩, ARIA)
// ============================================================================
function openModal(triggerEl) {
    lastFocusedBeforeModal = triggerEl || document.activeElement;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    // 첫 포커스 가능한 요소 또는 콘텐츠 자체로 포커스 이동
    const focusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    (focusable || modalContent).focus({ preventScroll: true });
}

function closeModal() {
    if (modal.classList.contains('hidden')) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    modalContent.className = 'modal-content cyber-card';
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        lastFocusedBeforeModal.focus({ preventScroll: true });
    }
    lastFocusedBeforeModal = null;
}

function setupModal() {
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('#modal-close')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
    });
    // 포커스 트랩 (간단)
    modal.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab') return;
        const focusables = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); first.focus();
        }
    });
}

function avatarUrl(name, type) {
    let bg = '0a0e17', color = '00e5ff';
    if (type === 'IRREGULAR') { bg = '1a050d'; color = 'ff0055'; }
    else if (type === 'REPLOID') { bg = '051a10'; color = '00ff88'; }
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}&size=150&font-size=0.3`;
}

function openHunterModal(char, trigger) {
    modalContent.className = 'modal-content cyber-card';
    if (char.type === 'REPLOID') modalContent.classList.add('reploid-theme');

    let storyHtml = '';
    if (char.story_arc) {
        for (const arc in char.story_arc) {
            storyHtml += `<li><strong>${escapeHtml(arc)}:</strong> ${escapeHtml(char.story_arc[arc])}</li>`;
        }
    }

    const imgUrl = avatarUrl(char.name, char.type);
    modalBody.innerHTML = `
        <div class="modal-header-container">
            <img src="${imgUrl}" alt="${escapeHtml(char.name)} 프로필 이미지" class="modal-image">
            <div class="modal-header-text">
                <h2 class="modal-title" id="modal-title-anchor">${escapeHtml(char.name)}</h2>
                <div class="modal-subtitle">${escapeHtml(char.english_name || '')}</div>
            </div>
        </div>

        <div class="modal-detail-row">
            <span class="modal-label">소속:</span>
            <span class="modal-value">${escapeHtml(char.affiliation || '불명')}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">랭크:</span>
            <span class="modal-value">${escapeHtml(char.rank || '불명')}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">첫 등장:</span>
            <span class="modal-value">${escapeHtml(char.debut || '불명')}</span>
        </div>

        <div class="modal-story">
            <strong>[프로필 요약]</strong><br/>
            ${escapeHtml(char.profile || '')}
        </div>

        ${storyHtml ? `<div class="modal-story">
            <strong>[주요 행적]</strong>
            <ul class="modal-list">${storyHtml}</ul>
        </div>` : ''}
    `;
    openModal(trigger);
}

function openBossModal(boss, trigger) {
    modalContent.className = 'modal-content cyber-card boss-theme';
    const imgUrl = avatarUrl(boss.name, 'IRREGULAR');
    modalBody.innerHTML = `
        <div class="modal-header-container">
            <img src="${imgUrl}" alt="${escapeHtml(boss.name)} 프로필 이미지" class="modal-image">
            <div class="modal-header-text">
                <h2 class="modal-title" id="modal-title-anchor">${escapeHtml(boss.name)}</h2>
                <div class="modal-subtitle">${escapeHtml(boss.english_name || '')} - ${escapeHtml(boss.title || '')}</div>
            </div>
        </div>

        <div class="modal-detail-row">
            <span class="modal-label">출현작:</span>
            <span class="modal-value">록맨 ${escapeHtml(boss.series)}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">소속:</span>
            <span class="modal-value">${escapeHtml(boss.affiliation || '불명')}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">약점 무기:</span>
            <span class="modal-value highlight">${escapeHtml(boss.weakness || '불명')}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">획득 무기:</span>
            <span class="modal-value">${escapeHtml(boss.weapon || '불명')}</span>
        </div>

        <div class="modal-story boss-story">
            <strong>[타겟 상세 프로필]</strong><br/>
            ${escapeHtml(boss.profile || '')}
        </div>
    `;
    openModal(trigger);
}

// ============================================================================
// 스토리 / 소속 / 타임라인 / X9 렌더링
// ============================================================================
function renderStories() {
    if (!window.storyData) return;
    storyContainer.innerHTML = '';
    const frag = document.createDocumentFragment();
    window.storyData.forEach(st => {
        const div = document.createElement('div');
        div.className = 'story-card';
        div.innerHTML = `
            <h3>${escapeHtml(st.title)}</h3>
            <div class="story-meta"><strong>시대적 배경:</strong> ${escapeHtml(st.timeline)}</div>
            <div class="story-content">
                <p><strong>주요 갈등:</strong> ${escapeHtml(st.conflict)}</p>
                <p>${escapeHtml(st.summary)}</p>
                <div class="story-meta"><strong>주요 인물:</strong> ${escapeHtml((st.characters || []).join(', '))}</div>
            </div>
        `;
        frag.appendChild(div);
    });
    storyContainer.appendChild(frag);
}

function renderAffiliations() {
    const allData = getAllPeople();
    const grouped = {};
    allData.forEach(item => {
        const aff = normalizeAffiliation(item);
        if (!grouped[aff]) grouped[aff] = [];
        grouped[aff].push(item);
    });

    const finalGroups = { '기타(etc)': [] };
    for (const aff in grouped) {
        if (grouped[aff].length < 2) finalGroups['기타(etc)'].push(...grouped[aff]);
        else finalGroups[aff] = grouped[aff];
    }
    if (finalGroups['기타(etc)'].length === 0) delete finalGroups['기타(etc)'];

    accordionContainer.innerHTML = '';
    const sortedKeys = Object.keys(finalGroups).sort((a, b) => {
        if (a === '기타(etc)') return 1;
        if (b === '기타(etc)') return -1;
        return a.localeCompare(b);
    });

    sortedKeys.forEach((aff) => {
        const groupItems = finalGroups[aff];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        const header = document.createElement('button');
        header.type = 'button';
        header.className = 'accordion-header';
        header.setAttribute('aria-expanded', 'false');
        header.innerHTML = `<span><span style="color:#fff;">[소속]</span> ${escapeHtml(aff)}</span> <span class="badge">${groupItems.length}명</span>`;

        const body = document.createElement('div');
        body.className = 'accordion-body';
        const grid = document.createElement('div');
        grid.className = 'cards-grid';
        groupItems.forEach(person => grid.appendChild(buildPersonCard(person, { showProfile: false })));
        body.appendChild(grid);

        header.addEventListener('click', () => {
            const opened = itemDiv.classList.toggle('open');
            header.setAttribute('aria-expanded', opened ? 'true' : 'false');
        });

        itemDiv.appendChild(header);
        itemDiv.appendChild(body);
        accordionContainer.appendChild(itemDiv);
    });

    // 아코디언 내부 카드 위임
    accordionContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.cyber-card');
        if (!card || !accordionContainer.contains(card)) return;
        openItemModal(card.dataset.id, card.dataset.kind, card);
    });
    accordionContainer.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const card = e.target.closest('.cyber-card');
        if (!card) return;
        e.preventDefault();
        openItemModal(card.dataset.id, card.dataset.kind, card);
    });
}

function renderTimeline() {
    timelineContainer.innerHTML = '';
    const tlData = window.timelineData || [];
    const frag = document.createDocumentFragment();
    tlData.forEach(item => {
        const wrap = document.createElement('div');
        wrap.className = 'timeline-item';
        wrap.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content cyber-card">
                <span class="timeline-era">${escapeHtml(item.era)}</span>
                <h3>[${escapeHtml(item.series)}] ${escapeHtml(item.title)}</h3>
                <p>${escapeHtml(item.desc)}</p>
            </div>
        `;
        frag.appendChild(wrap);
    });
    timelineContainer.appendChild(frag);
}

function renderX9() {
    x9Container.innerHTML = '';
    const x9 = window.x9Data || [];

    const sectionTitle = document.querySelector('#x9-section .section-title');
    if (sectionTitle) sectionTitle.classList.add('x9-glitch-title');

    const frag = document.createDocumentFragment();
    x9.forEach(item => {
        const card = document.createElement('article');
        card.className = 'cyber-card x9-card-special';
        card.innerHTML = `
            <div class="x9-chapter-tag">${escapeHtml(item.chapter)}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.content)}</p>
        `;
        frag.appendChild(card);
    });
    x9Container.appendChild(frag);
}

// ============================================================================
// 인트로 시퀀스
// ============================================================================
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

    const textToType = 'INITIALIZING HUNTER BASE SYSTEM...';
    let textIdx = 0;

    introOverlay.addEventListener('click', () => {
        introOverlay.classList.add('hidden');
        sessionStorage.setItem('systemBooted', 'true');
    }, { once: true });

    function typeChar() {
        if (textIdx < textToType.length) {
            introText.textContent += textToType.charAt(textIdx);
            textIdx++;
            setTimeout(typeChar, 40);
        } else {
            let progress = 0;
            const progressInterval = setInterval(() => {
                progress += Math.random() * 20;
                if (progress > 100) progress = 100;
                introProgress.style.width = `${progress}%`;
                if (progress === 100) {
                    clearInterval(progressInterval);
                    introStatusText.textContent = 'ACCESS GRANTED. WELCOME, HUNTER.';
                    introStatusText.style.color = '#00ff88';
                    setTimeout(() => {
                        introOverlay.classList.add('hidden');
                        sessionStorage.setItem('systemBooted', 'true');
                    }, 1200);
                }
            }, 100);
        }
    }
    setTimeout(typeChar, 500);
}

// ============================================================================
// 초기화
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    setupTabs();
    setupFilters();
    setupModal();
    renderReploids();
    renderAffiliations();
    renderStories();
    renderTimeline();
    renderX9();
    runIntroSequence();
});
