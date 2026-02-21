// DOM 요소 캐싱
const btnReploids = document.querySelector('[data-target="reploids-section"]');
const btnAffiliation = document.querySelector('[data-target="affiliation-section"]');
const btnStory = document.querySelector('[data-target="story-section"]');
const btnTimeline = document.querySelector('[data-target="timeline-section"]');
const btnX9 = document.querySelector('[data-target="x9-section"]');

const secReploids = document.getElementById('reploids-section');
const secAffiliation = document.getElementById('affiliation-section');
const secStory = document.getElementById('story-section');
const secTimeline = document.getElementById('timeline-section');
const secX9 = document.getElementById('x9-section');

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
    [secReploids, secAffiliation, secStory, secTimeline, secX9].forEach(sec => sec.classList.remove('active'));
    [btnReploids, btnAffiliation, btnStory, btnTimeline, btnX9].forEach(btn => btn.classList.remove('active'));
}

btnReploids.addEventListener('click', () => { hideAllSections(); btnReploids.classList.add('active'); secReploids.classList.add('active'); });
btnAffiliation.addEventListener('click', () => { hideAllSections(); btnAffiliation.classList.add('active'); secAffiliation.classList.add('active'); });
btnStory.addEventListener('click', () => { hideAllSections(); btnStory.classList.add('active'); secStory.classList.add('active'); });
btnTimeline.addEventListener('click', () => { hideAllSections(); btnTimeline.classList.add('active'); secTimeline.classList.add('active'); });
btnX9.addEventListener('click', () => { hideAllSections(); btnX9.classList.add('active'); secX9.classList.add('active'); });


// --- 데이터 로컬 필터 상태 ---
let currentType = 'HUNTER'; // 기본값
let currentSeries = 'ALL';
let currentSearch = '';

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
            const weakMatch = item.weakness && item.weakness.toLowerCase().includes(currentSearch);
            return nameMatch || engMatch || affMatch || weakMatch;
        });
    }

    gridReploids.innerHTML = '';

    allData.forEach(item => {
        const isBoss = !!item.series;

        // 카드 테마 결정: IRREGULAR = 빨강(boss-card), REPLOID = 초록(reploid-card), HUNTER = 파랑(기본)
        let themeClass = '';
        if (item.type === 'IRREGULAR') themeClass = 'boss-card';
        else if (item.type === 'REPLOID') themeClass = 'reploid-card';

        const cardTypeLabel = isBoss ? `[${item.series}]` : `[${item.type}]`;

        const card = document.createElement('div');
        card.className = `cyber-card ${themeClass}`;
        card.innerHTML = `
            <div class="card-header">
                <h3>${item.name}</h3>
                <div class="card-meta" style="font-size:0.8rem;">
                    ${cardTypeLabel} | ${item.affiliation || '불명'}
                </div>
            </div>
            <div class="card-desc">${item.profile}</div>
        `;

        card.addEventListener('click', () => {
            if (isBoss) openBossModal(item);
            else openHunterModal(item);
        });

        gridReploids.appendChild(card);
    });
}

// --- 필터 이벤트 연결 ---
function setupFilters() {
    // Type Filter 연결
    const typeBtns = document.querySelectorAll('.type-filter-bar .type-btn');
    typeBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            typeBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentType = e.target.dataset.type;
            renderReploids();
        });
    });

    // Series Filter 연결
    const seriesBtns = document.querySelectorAll('.filter-bar .filter-btn');
    seriesBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            seriesBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentSeries = e.target.dataset.filter;
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
            modalContent.className = 'modal-content cyber-card boss-theme';
            let matrixHtml = '<div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">';

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
                <h2 class="modal-title" style="color: var(--secondary-color); text-shadow: 0 0 10px var(--secondary-glow);">IRREGULAR WEAKNESS MATRIX</h2>
                <div class="modal-subtitle">시리즈별 보스 상성 데이터베이스</div>
                <div style="margin-top: 1.5rem; max-height: 50vh; overflow-y: auto; padding-right: 10px;" class="custom-scroll">
                    ${matrixHtml}
                </div>
            `;
            openModal();
        });
    }
}


// --- 모달 로직 ---
function openModal() {
    modal.classList.remove('hidden');
}

function closeModal() {
    modal.classList.add('hidden');
    modalContent.className = 'modal-content cyber-card'; // 클래스 초기화
}
window.closeModal = closeModal; // 전역 노출

// Event Delegation for modal close
modal.addEventListener('click', (e) => {
    // 닫기 버튼을 클릭하거나, 모달 바깥 배경을 클릭했을 때 닫음
    if (e.target.closest('.close-btn') || e.target === modal) {
        closeModal();
    }
});

function openHunterModal(char) {
    modalContent.className = 'modal-content cyber-card'; // 초기화

    // REPLOID(중립)일 경우 초록 테마 적용
    if (char.type === 'REPLOID') {
        modalContent.classList.add('reploid-theme');
    }

    // Story Object 처리
    let storyHtml = '';
    if (char.story_arc) {
        for (let arc in char.story_arc) {
            storyHtml += `<li><strong>${arc}:</strong> ${char.story_arc[arc]}</li>`;
        }
    }

    // 네임태그 생성기 색상 분기 (HUNTER: 파랑, REPLOID: 초록)
    let avatarBg = '0a0e17';
    let avatarColor = '00e5ff';
    if (char.type === 'REPLOID') {
        avatarBg = '051a10';
        avatarColor = '00ff88';
    }
    const imgUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(char.name)}&background=${avatarBg}&color=${avatarColor}&size=150&font-size=0.3`;

    modalBody.innerHTML = `
        <div class="modal-header-container">
            <img src="${imgUrl}" alt="${char.name}" class="modal-image">
            <div class="modal-header-text">
                <h2 class="modal-title">${char.name}</h2>
                <div class="modal-subtitle">${char.english_name}</div>
            </div>
        </div>
        
        <div class="modal-detail-row">
            <span class="modal-label">소속:</span>
            <span class="modal-value">${char.affiliation}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">랭크:</span>
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
        
        <div class="modal-story">
            <strong>[주요 행적]</strong><br/>
            <ul style="padding-left: 20px; margin-top: 10px;">
                ${storyHtml}
            </ul>
        </div>
    `;

    openModal();
}

function openBossModal(boss) {
    modalContent.className = 'modal-content cyber-card boss-theme';

    const imgUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(boss.name)}&background=1a050d&color=ff0055&size=150&font-size=0.25`;

    modalBody.innerHTML = `
        <div class="modal-header-container">
            <img src="${imgUrl}" alt="${boss.name}" class="modal-image">
            <div class="modal-header-text">
                <h2 class="modal-title">${boss.name}</h2>
                <div class="modal-subtitle">${boss.english_name} - ${boss.title}</div>
            </div>
        </div>
        
        <div class="modal-detail-row">
            <span class="modal-label">출현작:</span>
            <span class="modal-value">록맨 ${boss.series}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">소속:</span>
            <span class="modal-value">${boss.affiliation}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">약점 무기:</span>
            <span class="modal-value highlight">${boss.weakness}</span>
        </div>
        <div class="modal-detail-row">
            <span class="modal-label">획득 무기:</span>
            <span class="modal-value">${boss.weapon}</span>
        </div>
        
        <div class="modal-story boss-story">
            <strong>[타겟 상세 프로필]</strong><br/>
            ${boss.profile}
        </div>
    `;

    openModal();
}

// 모달 전역 호출 바인딩 (innerHTML 인라인 클릭용)
window.openHunterModalByClick = function (id) {
    const char = window.charactersData.find(c => c.id === id);
    if (char) openHunterModal(char);
};
window.openBossModalByClick = function (id) {
    const boss = window.bossesData.find(b => b.id === id);
    if (boss) openBossModal(boss);
};

// --- 스토리 렌더링 ---
function renderStories() {
    if (!window.storyData) return;
    storyContainer.innerHTML = '';
    window.storyData.forEach(st => {
        const div = document.createElement('div');
        div.className = 'story-card';
        div.innerHTML = `
            <h3>${st.title}</h3>
            <div class="story-meta"><strong>시대적 배경:</strong> ${st.timeline}</div>
            <div class="story-content">
                <p><strong>주요 갈등:</strong> ${st.conflict}</p>
                <p style="margin-top: 10px;">${st.summary}</p>
                <div class="story-meta" style="margin-top: 15px;"><strong>주요 인물:</strong> ${st.characters.join(', ')}</div>
            </div>
        `;
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

    const finalGroups = { '기타(etc)': [] };

    for (let aff in grouped) {
        if (grouped[aff].length < 2) {
            finalGroups['기타(etc)'].push(...grouped[aff]);
        } else {
            finalGroups[aff] = grouped[aff];
        }
    }

    // 기타 배열이 비어있으면 삭제
    if (finalGroups['기타(etc)'].length === 0) delete finalGroups['기타(etc)'];

    accordionContainer.innerHTML = '';

    // 키 정렬: 부대명이 먼저 오고 레플리포스/레드 얼럿 등이 그 뒤, 마지막이 기타
    const sortedKeys = Object.keys(finalGroups).sort((a, b) => {
        if (a === '기타(etc)') return 1;
        if (b === '기타(etc)') return -1;
        return a.localeCompare(b);
    });

    sortedKeys.forEach(aff => {
        const groupItems = finalGroups[aff];
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        // 헤더
        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.innerHTML = `<span><span style="color:#fff;">[소속]</span> ${aff}</span> <span class="badge">${groupItems.length}명</span>`;

        // 바디
        const body = document.createElement('div');
        body.className = 'accordion-body';

        let cardsHtml = '<div class="cards-grid">';
        groupItems.forEach(person => {
            const isBoss = !!person.series;

            let themeClass = '';
            if (person.type === 'IRREGULAR') themeClass = 'boss-card';
            else if (person.type === 'REPLOID') themeClass = 'reploid-card';

            // 원본 소속명을 카드 메타 정보에 표기 (상세 식별 목적)
            const originAff = person.affiliation || '불명';
            cardsHtml += `
                <div class="cyber-card ${themeClass}" style="margin-bottom: 0;" onclick="${isBoss ? 'openBossModalByClick' : 'openHunterModalByClick'}('${person.id}')">
                    <div class="card-header">
                        <h3>${person.name}</h3>
                        <div class="card-meta" style="font-size:0.8rem;">
                            ${isBoss ? `[${person.series}]` : `[X HUNTER]`} | ${originAff}
                        </div>
                    </div>
                </div>
            `;
        });
        cardsHtml += '</div>';
        body.innerHTML = cardsHtml;

        // 아코디언 토글 이벤트
        header.addEventListener('click', () => {
            itemDiv.classList.toggle('open');
        });

        itemDiv.appendChild(header);
        itemDiv.appendChild(body);
        accordionContainer.appendChild(itemDiv);
    });
}


// --- SFX System Removed per Feedback ---

// --- 3D Tilt Effect removed based on user feedback ---

// --- 세계관 연혁 랜더링 (Vertical Timeline) ---
function renderTimeline() {
    timelineContainer.innerHTML = '';
    const tlData = window.timelineData || [];

    tlData.forEach(item => {
        const itemHtml = `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content cyber-card">
                    <span class="timeline-era" style="color: var(--secondary-color); font-weight: bold; font-family: var(--font-en);">${item.era}</span>
                    <h3 style="margin-top: 0.5rem; margin-bottom: 0.5rem; color: var(--primary-color);">[${item.series}] ${item.title}</h3>
                    <p style="color: #ccc; line-height: 1.6; font-size: 0.95rem;">${item.desc}</p>
                </div>
            </div>
        `;
        timelineContainer.insertAdjacentHTML('beforeend', itemHtml);
    });
}

// --- X9 전용 랜더링 ---
function renderX9() {
    x9Container.innerHTML = '';
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

    const textToType = "INITIALIZING HUNTER BASE SYSTEM...";
    let textIdx = 0;

    // Allow user to click to skip intro
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
                    introStatusText.textContent = "ACCESS GRANTED. WELCOME, HUNTER.";
                    introStatusText.style.color = "#00ff88";

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

// --- 초기화 ---
document.addEventListener('DOMContentLoaded', () => {
    // 데이터 불러오기 및 렌더링
    setTimeout(() => {
        setupFilters();
        renderReploids();
        renderAffiliations();
        renderStories();
        renderTimeline();
        renderX9();
        runIntroSequence();
    }, 100); // 딜레이로 스크립트 로드 보장
});
