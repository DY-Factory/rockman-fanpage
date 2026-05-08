// 록맨 X 시리즈 주요 인물 목록 (이레귤러 헌터, 이레귤러, 레플리로이드)
// type 필드: 'HUNTER' (이레귤러 헌터), 'IRREGULAR' (이레귤러), 'REPLOID' (일반/기타 레플리로이드)
// 스키마: { id, name, english_name, type, affiliation, rank, debut, appearances, profile, story_arc?, affiliation_group? }
const charactersData = [
    {
        id: 'x', name: '엑스', english_name: 'X', type: 'HUNTER', affiliation: '이레귤러 헌터 제17정예부대 대장', rank: 'B급 -> 특A급', debut: '록맨 X', appearances: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'],
        profile: 'Dr. 라이트가 남긴 후기형 로봇으로 모든 레플리로이드의 원형. 평화주의자로 싸움을 혐오하지만, 끝없이 세계의 평화를 위해 싸우는 운명을 짊어졌다. 끝없는 잠재력을 지니고 있다.',
        story_arc: { 'X1~X8': '시그마의 반란을 진압하며 평화를 지키려는 이레귤러 헌터의 주축으로 성장. 영원히 끝나지 않는 갈등 속에서 진정한 평화를 고민한다.' }
    },
    {
        id: 'zero', name: '제로', english_name: 'Zero', type: 'HUNTER', affiliation: '이레귤러 헌터 제0특수부대 대장', rank: '특A급', debut: '록맨 X', appearances: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'],
        profile: '엑스의 든든한 전우이자 가장 믿음직한 파트너. 본래 Dr. 와일리에 의해 파괴 목적으로 만들어졌으나, 이레귤러 헌터로서 거듭났다.',
        story_arc: { 'X1~X8': '폭주와 자폭, 파괴와 부활을 반복하며 점차 자신이 파괴적 숙명을 타고났음을 깨닫지만 동료들을 위해 그 운명에 저항한다.' }
    },
    {
        id: 'axl', name: '엑셀', english_name: 'Axl', type: 'HUNTER', affiliation: '자경단 레드 얼럿 -> 이레귤러 헌터', rank: '측정불명 (프로토타입)', debut: '록맨 X7', appearances: ['X7', 'X8'],
        profile: 'DNA 데이터를 복사해 자신의 모습을 바꾸는 카피 능력을 지닌 프로토타입. 천진난만한 성격으로 화려한 전투를 선호한다.',
        story_arc: { 'X7~X8': '조직을 탈주하여 헌터 베이스에 합류, 신세대 레플리로이드 사태에서 자신과 같은 코어를 지닌 동족들과 맞선다.' }
    },
    {
        id: 'signas', name: '시그너스', english_name: 'Signas', type: 'HUNTER', affiliation: '이레귤러 헌터 총사령관', rank: '총사령관', debut: '록맨 X5', appearances: ['X5', 'X6', 'X7', 'X8'],
        profile: '매우 뛰어난 전자 두뇌를 탑재한 사령관. 항상 침착하고 냉정한 태도로 방대한 정보를 통제해 헌터들을 정확하게 지휘한다.'
    },
    {
        id: 'alia', name: '에이리아', english_name: 'Alia', type: 'HUNTER', affiliation: '이레귤러 헌터 본부', rank: '수석 네비게이터', debut: '록맨 X5', appearances: ['X5', 'X6', 'X7', 'X8'],
        profile: '천재적인 연구원 출신. 각 스테이지의 분석 및 전투 오퍼레이팅, 정보 해석에서 부동의 넘버원을 자랑한다.'
    },
    {
        id: 'douglas', name: '더글라스', english_name: 'Douglas', type: 'HUNTER', affiliation: '이레귤러 헌터 본부', rank: '정비반장', debut: '록맨 X5', appearances: ['X5', 'X6'],
        profile: '헌터의 이동수단과 주요 장비, 무기 등을 점검하고 개발하는 우직한 성격의 메카닉 담당관.'
    },
    {
        id: 'layer', name: '레이야', english_name: 'Layer', type: 'HUNTER', affiliation: '이레귤러 헌터 본부', rank: '네비게이터', debut: '록맨 X8', appearances: ['X8'],
        profile: '에이리아의 후배로 입사한 엘리트 네비게이터. 보스들의 약점 분석에 특화되어 있으며 제로를 흠모한다.'
    },
    {
        id: 'palette', name: '팔렛트', english_name: 'Palette', type: 'HUNTER', affiliation: '이레귤러 헌터 본부', rank: '네비게이터', debut: '록맨 X8', appearances: ['X8'],
        profile: '발랄하고 호기심 많은 신입 네비게이터. 맵 내부 루트나 아이템 개발 시스템을 전담한다.'
    },
    {
        id: 'vava', name: '바바', english_name: 'VAVA (Vile)', type: 'IRREGULAR', affiliation: '전 제17정예부대', rank: '전 특A급', debut: '록맨 X1', appearances: ['X1', 'X3', 'X8'],
        profile: '뛰어난 실력을 지녔으나 파괴 충동을 억제하지 못해 봉인되었던 과거를 지닌 헌터.',
        story_arc: { 'X1, X3, X8': '엑스에 대한 집착과 파괴 본능으로 앞을 가로막는 주요 적대자로, 죽어도 죽어도 부활한다.' }
    },
    {
        id: 'sigma', name: '시그마', english_name: 'Sigma', type: 'IRREGULAR', affiliation: '전 제17정예부대 대장', rank: '전 특A급', debut: '록맨 X1', appearances: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'],
        profile: '가장 우수하고 정의로웠던 대장이었으나, 제로와 교전 중 바이러스에 감염되어 최악의 이레귤러로 타락했다.',
        story_arc: { 'X1~X8': '레플리로이드만의 이상향을 꿈꾸며 끈질기게 부활하는 흑막 겸 시리즈 최강의 적.' }
    },
    // --- 레플리로이드 / 추가 이레귤러 ---
    {
        id: 'sagesse', name: '사게스', english_name: 'Serges', type: 'IRREGULAR', affiliation: '카운터 헌터', rank: '불명', debut: '록맨 X2', appearances: ['X2'],
        profile: '제로의 파츠를 수집해 부활시키려 한 카운터 헌터의 두뇌. 과거 Dr. 와일리와 매우 밀접한 지식을 지니고 있는 정체불명의 노인형 로봇.'
    },
    {
        id: 'violen', name: '바이올렌', english_name: 'Violen', type: 'IRREGULAR', affiliation: '카운터 헌터', rank: '불명', debut: '록맨 X2', appearances: ['X2'],
        profile: '철퇴를 휘두르는 힘센 거한. 폭력성이 뛰어나며 카운터 헌터의 무력을 담당한다.'
    },
    {
        id: 'agile', name: '아질', english_name: 'Agile', type: 'IRREGULAR', affiliation: '카운터 헌터', rank: '불명', debut: '록맨 X2', appearances: ['X2'],
        profile: '스피드와 검술로 무장한 카운터 헌터의 리더급. 레이저 블레이드로 고속 돌진 공격을 펼친다.'
    },
    {
        id: 'doppler', name: 'Dr. 도플러', english_name: 'Dr. Doppler', type: 'IRREGULAR', affiliation: '도플러 타운 설계자', rank: '과학자', debut: '록맨 X3', appearances: ['X3'],
        profile: '위대한 인망을 가진 천재 의사 겸 레플리로이드 였으나 시그마 바이러스에 감염되어 세계 정복을 꾀하는 악의 군단장이 되고 말았다.'
    },
    {
        id: 'bit', name: '바이트', english_name: 'Bit (Vajurila FF)', type: 'IRREGULAR', affiliation: '나이트메어 폴리스', rank: '경호부대', debut: '록맨 X3', appearances: ['X3'],
        profile: '도플러 박사를 호위하기 위해 고등 설계된 특수 경찰. 검과 빔, 고속 태클 등 기동성 위주의 전투를 한다.'
    },
    {
        id: 'byte', name: '만다렐라 BB', english_name: 'Byte (Mandrel)', type: 'IRREGULAR', affiliation: '나이트메어 폴리스', rank: '경호부대', debut: '록맨 X3', appearances: ['X3'],
        profile: '무거운 철퇴와 자력 병기로 엑스의 움직임을 봉쇄하는 거구의 경찰 로봇.'
    },
    {
        id: 'iris', name: '아이리스', english_name: 'Iris', type: 'REPLOID', affiliation: '레플리포스', rank: '오퍼레이터', debut: '록맨 X4', appearances: ['X4'],
        profile: '투쟁심을 제거하고 다정함만을 극대화한 레플리포스 소속 소녀. 커넬의 여동생이며 제로와 깊은 교감을 나누었으나 전쟁의 포화 속에서 비극적 결말을 맞는다.'
    },
    {
        id: 'general', name: '제너럴', english_name: 'General', type: 'REPLOID', affiliation: '레플리포스', rank: '총사령관', debut: '록맨 X4', appearances: ['X4'],
        profile: '강직하고 정의로운 레플리포스의 최고 지휘관. 누명을 쓰고 이레귤러로 규정되자 군의 긍지를 지키기 위해 독립국가를 건설하려 한다.'
    },
    {
        id: 'colonel', name: '커넬', english_name: 'Colonel', type: 'REPLOID', affiliation: '레플리포스', rank: '사령관', debut: '록맨 X4', appearances: ['X4'],
        profile: '제로의 라이벌이자 아이리스의 오빠. 굽힐 줄 모르는 강직한 성격 탓에 오해를 풀지 못하고 끝내 제로와 사투를 벌이게 된다.'
    },
    {
        id: 'double', name: '더블', english_name: 'Double', type: 'IRREGULAR', affiliation: '이레귤러 헌터 본부 (잠입)', rank: '신입(스파이)', debut: '록맨 X4', appearances: ['X4'],
        profile: '평소에는 뚱뚱하고 덜렁대는 신입 네비게이터인 척하지만, 실체는 시그마가 파견한 잔혹하고 흉포한 슬라임형 스파이 로봇이다.'
    },
    {
        id: 'dynamo', name: '다이나모', english_name: 'Dynamo', type: 'IRREGULAR', affiliation: '용병', rank: '특A급 실력', debut: '록맨 X5', appearances: ['X5', 'X6'],
        profile: '시그마의 고용을 받아 유라시아를 탈취하고 헌터들을 방해하는 얄미운 용병. 실력은 최상위권이지만 귀찮은 것을 싫어해 적당주의를 즐긴다.'
    },
    {
        id: 'gate', name: '게이트', english_name: 'Gate', type: 'REPLOID', affiliation: '연구원 (전 에이리아의 동료)', rank: '과학자', debut: '록맨 X6', appearances: ['X6'],
        profile: '시대를 앞서간 천재라 불렸으나 아무도 인정해주지 않자 흑화한 연구원. 나이트메어 바이러스를 통한 궁극의 레플리로이드 이상국가를 꿈꾼다.'
    },
    {
        id: 'isoc', name: '아이조크', english_name: 'Isoc', type: 'IRREGULAR', affiliation: '나이트메어 조사단 파견자', rank: '과학자', debut: '록맨 X6', appearances: ['X6'],
        profile: '게이트의 파트너 과학자. 극단적으로 제로의 편을 드는 발언을 하며 그의 내면 어딘가에 Dr. 와일리의 프로그램이 잔존함을 암시한다.'
    },
    {
        id: 'highmax', name: '하이맥스', english_name: 'High Max', type: 'IRREGULAR', affiliation: '나이트메어 조사단장', rank: '최강 무적의 병기', debut: '록맨 X6', appearances: ['X6'],
        profile: '게이트가 제로의 DNA 데이터를 분석해 만들어낸 역작. 특수한 속성이 아니면 데미지를 받지 않는 오만방자한 나이트메어 조사단장.'
    },
    {
        id: 'red', name: '레드', english_name: 'Red', type: 'REPLOID', affiliation: '레드 얼럿', rank: '자경단 리더', debut: '록맨 X7', appearances: ['X7'],
        profile: '사신의 낫을 다루는 자경단 "레드 얼럿"의 보스. 엑셀의 양아버지 같은 존재였으나 시그마에게 포섭되어 결국 파멸로 치닫는다.'
    },
    {
        id: 'lumine', name: '루미네', english_name: 'Lumine', type: 'IRREGULAR', affiliation: '신세대 레플리로이드 궤도 관리', rank: '관리자', debut: '록맨 X8', appearances: ['X8'],
        profile: '구세대의 레플리로이드를 진화의 뒤처진 개체로 규정하고 자발적인 의지로 시그마의 데이터를 활용해 반란을 주도한 오만하고 아름다운 파괴자.'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { charactersData };
} else {
    window.charactersData = charactersData;
}
