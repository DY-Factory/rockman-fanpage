// 이름의 일치와 창작 의도의 확인은 별개입니다. 해석은 본편 설정으로 합치지 않습니다.
const motifKinds = {
    commentary: '공식 글의 설명',
    comparison: '이름·형상의 대응',
    interpretation: '서사 해석'
};

const motifsData = [
    {
        id: 'x-variable', title: '엑스 · X라는 이름', work: '록맨 X 시리즈', kind: 'commentary',
        origin: '수학에서 미지수·변수를 나타내는 문자 X. 성경이나 신화의 고유명과는 다른 출발점이다.',
        element: '캡콤 공식 블로그의 2014년 현지화 관련 글은 엑스의 이름을 대수의 변수와 연결하고, 한계가 정해지지 않은 가능성을 상징한다고 설명한다.',
        interpretation: '완성된 답이 아니라 스스로 선택하며 성장하는 존재라는 관점으로 엑스를 읽을 수 있다. 이를 곧바로 그리스도의 상징이라고 단정할 근거는 이 자료에 없다.',
        confirmation: '공식 매체의 설명은 확인했다. 글쓴이 GregaMan의 해설이며, 최초 작명자의 직접 증언으로 분류하지 않는다.',
        characterIds: ['x'], seriesIds: [], originSources: [], workSources: ['motif_x_name'],
        sourceScope: '공식 글의 이름·가능성 설명에 한정. 고전 록맨의 자유의지에 대한 글 전체의 논의를 공통 설정으로 확대하지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-sacrifice', title: '제로 · 영웅 서사를 읽는 관점', work: '록맨 X1·X2', kind: 'interpretation',
        origin: '특정 성경 구절이나 신화에서 가져왔다는 원전은 확인되지 않았다. 희생과 귀환은 여러 영웅 서사에서 비교할 수 있는 이야기 구조다.',
        element: '제로는 X1에서 엑스를 돕기 위해 자신을 희생하고, X2에서 다시 등장한다. X2의 재등장 과정은 부품 회수 여부에 따라 달라진다.',
        interpretation: '다른 이를 살리는 희생과 돌아온 영웅이라는 관점은 가능하다. 그러나 이 유사성만으로 제로를 예수나 특정 신화 인물에 대응시키지는 않는다.',
        confirmation: '특정 종교 인물을 모델로 삼았다는 제작진 발언은 확인하지 못했다. 이 항목은 작명 유래가 아닌 편집자의 서사 비교다.',
        characterIds: ['zero'], seriesIds: [], originSources: [], workSources: ['zero', 'x1', 'x2'],
        sourceScope: '참고자료의 X1·X2 사건 설명과 편집자의 해석을 분리. 귀환을 종교적 부활이라는 공식 설정으로 취급하지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'jakob-ladder', title: '야콥 · 하늘로 이어지는 이름', work: '록맨 X8', kind: 'comparison',
        origin: '창세기 28장 12절에서 야곱은 땅과 하늘을 잇는 사다리 또는 계단을 천사들이 오르내리는 꿈을 꾼다.',
        element: 'X8의 야콥 궤도 엘리베이터는 지상에서 우주로 향하는 통로다. Jakob이라는 이름과 위로 올라가는 시설의 기능이 함께 나타난다.',
        interpretation: '이름과 구조를 함께 보면 ‘야곱의 사다리’를 연상할 수 있다. 성경의 하늘과 게임의 우주 공간을 같은 장소로 설정했다는 뜻은 아니다.',
        confirmation: '원전과 작품의 대응을 정리한 항목이다. 야곱의 꿈에서 작명했다는 개발진의 직접 설명은 확인하지 못했다.',
        characterIds: [], seriesIds: ['X8'], originSources: ['motif_jacob_text'], workSources: ['x8'],
        sourceScope: '창세기 구절과 X8 줄거리의 시설명·기능을 비교. 제작 의도는 미확인.', reviewedAt: '2026-10-25'
    },
    {
        id: 'lumine-paradise', title: '루미네 · 이름과 연출의 상징', work: '록맨 X8', kind: 'comparison',
        origin: '존 밀턴의 장편 서사시 『실낙원』(Paradise Lost)은 기독교 전승을 바탕으로 한 문학 작품이다. 성경의 한 권이 아니며, 제2권에는 추락한 사탄과 천상에 대한 반역이 등장한다.',
        element: '루미네의 마지막 형태에는 여섯 날개가 있고, 최종 공격의 이름은 Paradise Lost다. 외형과 공격명은 천사·실낙원의 이미지를 함께 불러온다.',
        interpretation: '스스로 새로운 질서를 선택한다는 주장과 천사 같은 외형을 반역·타락의 이미지로 읽을 수 있다. ‘루미네=루시퍼’라는 연결은 팬 위키도 추정으로 제시한다.',
        confirmation: '외형과 공격명은 팬 위키의 작품 정리에서 확인했다. 루시퍼가 직접 모델이라는 제작진 발언이나 작명 설명은 확인하지 못했다.',
        characterIds: ['lumine'], seriesIds: ['X8'], originSources: ['motif_milton_text'], workSources: ['lumine'],
        sourceScope: '밀턴 제2권과 MMKB의 Second form·Etymology 설명을 비교. MMKB가 참조한 공략본 원본은 미확인.', reviewedAt: '2026-10-25'
    },
    {
        id: 'harpuia-harpy', title: '하르퓨이아 · 바람과 날개', work: '록맨 제로 시리즈', kind: 'comparison',
        origin: '그리스 신화의 하르피이아이(Harpyiai)는 새와 여성의 형상을 지닌 존재로 묘사되며, 돌풍과 관련된다. 단수 이름 Harpyia와도 비교할 수 있다.',
        element: '인티 크리에이츠 공식 소개는 하르퓨이아의 기상 조작 능력과 날개를 설명한다.',
        interpretation: '이름뿐 아니라 바람·날개라는 특징까지 맞물려 하르피 모티프를 읽을 수 있다. 신화 속 성격과 행적까지 그대로 옮겼다는 뜻은 아니다.',
        confirmation: '인물의 이름·능력은 공식 자료에 있다. 해당 신화를 선택한 이유를 설명하는 제작진 발언은 확인하지 못했다.',
        characterIds: [], seriesIds: [], originSources: ['motif_harpies'], workSources: ['creator_zero_soundtrack'],
        sourceScope: 'Theoi의 신화 해설·고전 인용 모음과 인티 공식 인물 소개를 비교. 제로 시리즈의 사례로 표시.', reviewedAt: '2026-10-25'
    },
    {
        id: 'leviathan-sea', title: '레비아탄 · 바다의 이름', work: '록맨 제로 시리즈', kind: 'comparison',
        origin: '이사야 27장 1절의 레비아탄은 뱀의 모습과 바다의 괴물 이미지로 묘사된다.',
        element: '인티 크리에이츠 공식 소개의 레비아탄은 수류와 수온을 다루며, 얼음을 사용한다. 하르퓨이아와 협력해 인간의 생존권을 재생하는 역할도 설명되어 있다.',
        interpretation: '바다와 관련된 이름이 물을 다루는 인물에게 대응한다. 원전의 괴물을 곧바로 이 인물의 선악이나 정체로 대입하지 않는다.',
        confirmation: '이름과 물 관련 능력은 공식 자료로 확인했다. 성경의 어느 대목을 의도했는지에 대한 제작진 설명은 미확인이다.',
        characterIds: [], seriesIds: [], originSources: ['motif_leviathan_text'], workSources: ['creator_zero_soundtrack'],
        sourceScope: '이사야 한 구절과 인티 공식 인물 소개를 비교. 후대의 악마 분류를 게임 설정에 덧붙이지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'fefnir-dragon', title: '파브닐 · 용을 연상시키는 형상', work: '록맨 제로 시리즈', kind: 'comparison',
        origin: '북유럽·게르만 전승의 파프니르(Fáfnir)는 용의 모습으로 보물을 지키며 시구르드에게 죽는 존재다.',
        element: '파브닐은 영어판에서 Fefnir로 불린다. 팬 위키는 투구·가슴의 돌기와 팔의 포신에서 용의 이빨·턱을 연상시키는 형상을 짚는다.',
        interpretation: '이름과 용을 닮은 장비를 함께 비교할 수 있다. 원전의 탐욕이나 보물 이야기가 인물의 동기라는 근거는 없다.',
        confirmation: '명칭과 디자인에 대한 2차 자료의 비교다. 파프니르 모티프를 설명한 디자이너의 직접 발언은 확인하지 못했다.',
        characterIds: [], seriesIds: [], originSources: ['motif_fafnir_origin'], workSources: ['motif_fefnir'],
        sourceScope: '전승 배경은 백과사전 해설, 작품 디자인은 MMKB 정리로 확인. 에다 원문이나 설정집 원본의 직접 검토는 아님.', reviewedAt: '2026-10-25'
    },
    {
        id: 'sodom-gomorrah', title: '파브닐의 무기 · 소돔과 고모라', work: '록맨 제로 시리즈', kind: 'comparison',
        origin: '창세기 19장 24절에서 소돔과 고모라는 불과 유황으로 파괴되는 도시의 이름이다.',
        element: '인티 크리에이츠 공식 소개는 파브닐의 오른팔 무기를 소돔, 왼팔 무기를 고모라로 명시하고 두 런처가 내뿜는 불을 묘사한다.',
        interpretation: '도시 이름과 불의 파괴 이미지가 무기 명칭·성질에 대응한다. 이를 파브닐이 신의 심판을 수행한다는 세계관 설정으로 확대하지 않는다.',
        confirmation: '무기 이름은 개발사 공식 웹자료에서 직접 확인했다. 성경에서 이름을 고른 과정과 의도에 대한 발언은 미확인이다.',
        characterIds: [], seriesIds: [], originSources: ['motif_sodom_text'], workSources: ['creator_zero_soundtrack'],
        sourceScope: '인티 공식 페이지의 ファーブニル 소개와 창세기 구절을 비교. 공식 무기명과 작명 의도의 추정을 구분.', reviewedAt: '2026-10-25'
    },
    {
        id: 'yggdrasil-tree', title: '위그드라실 · 세계수의 이름', work: '록맨 제로 2', kind: 'comparison',
        origin: '북유럽 신화의 위그드라실(Yggdrasil)은 세계의 중심에 놓이는 거대한 성스러운 나무다.',
        element: '제로 2의 위그드라실은 나무를 닮은 성소다. 그곳에서 엑스의 몸이 다크 엘프를 봉인하고 있다.',
        interpretation: '세계수라는 이름과 나무 형태를, 세계의 질서를 유지하는 봉인의 장소에 겹쳐 읽을 수 있다. 엑스를 오딘이나 예수와 동일시하는 것은 별도의 해석이다.',
        confirmation: '명칭·형태·사건은 팬 위키의 작품 정리에서 확인했다. 특정 신화 장면을 재현했다는 제작진 설명은 미확인이다.',
        characterIds: ['x'], seriesIds: [], originSources: ['motif_yggdrasil_origin'], workSources: ['motif_yggdrasil'],
        sourceScope: '신화 백과사전과 MMKB의 성소 설명을 비교. MMKB가 인용한 설정집 원본은 미확인. X 시리즈가 아닌 제로 2의 사건.', reviewedAt: '2026-10-25'
    },
    {
        id: 'ragnarok-end', title: '라그나로크 · 종말의 이름', work: '록맨 제로 4', kind: 'comparison',
        origin: '북유럽 신화의 라그나로크(Ragnarök)는 신들의 죽음과 세계의 파괴, 이후의 재생을 아우르는 사건이다.',
        element: '제로 4의 라그나로크는 궤도상의 대규모 파괴 병기다. 이야기 후반에는 지상을 향한 추락으로 재앙을 일으키려 한다.',
        interpretation: '세계를 위협하는 병기에 종말의 이름을 붙인 대응을 읽을 수 있다. 게임의 결말 전체가 신화의 사건 순서를 재현한다고 보지는 않는다.',
        confirmation: '병기명과 사건을 원전의 이름과 비교했다. 작명 이유를 직접 밝힌 제작진 발언은 확인하지 못했다.',
        characterIds: [], seriesIds: [], originSources: ['motif_ragnarok_origin'], workSources: ['motif_ragnarok'],
        sourceScope: '신화 백과사전의 개요와 MMKB의 제로 4 병기·사건 설명을 비교. 제작 의도는 미확인.', reviewedAt: '2026-10-25'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { motifsData, motifKinds };
} else {
    window.motifsData = motifsData;
    window.motifKinds = motifKinds;
}
