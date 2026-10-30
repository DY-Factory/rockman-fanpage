// 프로젝트 상태와 편집 계획. 공식 설정 또는 확정된 팬 게임 기획과 구분합니다.
const projectRoadmapData = [
    {
        id: 'evidence', title: '1. 기존 자료의 근거 정리', status: '1차 검수',
        deliverable: '인물별로 어떤 문장까지 확인했는지 추적할 수 있는 자료집',
        progress: '64명 모두 소개·소속·별칭의 확인 범위와 보류 이유를 기록했다. PSP 리메이크 설명서 원문을 별도 보충하고, 상세 설계 분석은 18명으로 확대했다. 출처 연결과 사실 확정은 구별한다.',
        next: '보류된 경력·성격의 일본어 설정집 원문과 게임 화면을 확보한다. 추가 상세 분석은 의무 복종·자발적 가담 등 X9에 필요한 대비부터 확대한다.',
        doneWhen: '64명 모두 소개의 확인 범위와 출처 또는 미확인 사유를 갖는다. 출처 하나가 있다는 이유로 전체 설정을 검증했다고 표시하지 않는다.'
    },
    {
        id: 'continuity', title: '2. X8 이후의 출발점 정리', status: '초안 완료',
        deliverable: '확인한 사실·남은 질문·창작 선택을 나눈 기준표',
        progress: '주역·사회 4행 상태표와 근거 6항목을 정리했다. 제로 시리즈가 X 이후라는 공식 소개와, 그 사이 사건의 추정을 구분했다.',
        next: '현재 팬 기획은 카피 칩 중단 기간을 선택했다. 대본을 쓸 때 회복 시점·정책·연도를 창작 가정 목록과 대조한다.',
        doneWhen: '각 항목의 근거와 판본 한계를 확인할 수 있고, 팬 창작의 가정을 본편 사실과 구분할 수 있다.'
    },
    {
        id: 'voices', title: '4. 엑스·제로·엑셀의 판단과 말투', status: '초안 완료',
        deliverable: '세 인물의 행동 기준과 대사 작성용 참고표',
        progress: '인물마다 장면 4개, 가치·분노·선택의 한계·말투·반대 사례를 정리했다. 같은 문 앞에서 세 사람이 어떻게 다르게 행동할지 창작 예문을 붙였다.',
        next: '첫 대화 장면을 쓸 때 이 기준서를 적용하고, 인용은 게임 화면·일본어 원문과 추가 대조한다.',
        doneWhen: '인물마다 장면 근거가 있는 판단 기준과 창작 대사 예문이 있으며, 세 사람의 반응이 같은 목소리로 들리지 않는다.'
    },
    {
        id: 'premise', title: '3. X9 한 작품의 이야기 정하기', status: '기획 v0.1',
        deliverable: '시작 시점·중심 질문·적의 주장·결말의 변화를 담은 한 장 기획',
        progress: '안전과 선택권을 중심으로 하버 링의 사고·아비터의 주장·엑스의 변화·결말을 작성했다. 기존 세 장의 유지·축소·보류 이유와 창작 가정 6개를 기록했다.',
        next: '교량 사고 도입과 최종 수동 복구 장면을 실제 대본으로 확장한다. 개별 보스 대사가 중심 질문을 반복하기만 하지 않도록 행동의 차이를 살린다.',
        doneWhen: '주인공이 무엇을 위해 싸우고 마지막에 어떤 선택을 하는지 한 문단으로 설명할 수 있다. 기존 초안을 바꾸는 이유가 기록되어 있다.'
    },
    {
        id: 'boss-lineup', title: '5. 새 8보스를 같은 세계 안에 배치하기', status: '기획 v0.1',
        deliverable: '직업·모티프·성격·대립 이유·전장·획득 능력을 연결한 8보스 표',
        progress: '8명 비교표·개별 설정서·16개 공격·관계망·8개 도구 상호작용을 작성했다. 체형·이동·전장·기능과 겹치기 쉬운 조합을 점검했다. 첫 제작 대상으로 키스톤 아이벡스를 제안했다.',
        next: '아이벡스와 발판을 단순 모형으로 만들고 예고·회피·빈틈을 검증한다. 상성은 현재 문서상 가설이며 실제 재미와 수치는 플레이로 확인해야 한다.',
        doneWhen: '8명의 체형과 역할을 구분할 수 있고, 각 보스의 선택이 중심 갈등과 연결된다. 첫 제작 보스의 기능과 공격 예고가 정의되어 있다.'
    },
    {
        id: 'visual-reference', title: '6. 모델링에 필요한 형태 자료 만들기', status: '예정',
        deliverable: '주인공과 첫 보스의 정면·측면·후면, 관절, 재질, 대표 자세 자료',
        progress: '현재 갤러리는 삽화 중심이다. 그림 수가 많다는 사실이 제작용 삼면도와 가동 검증을 대신하지는 않는다.',
        next: '공식 그림에서 보이는 부분과 새로 설계해야 하는 뒷면·관절을 구분한다. 단순한 덩어리로 비율과 공격 자세를 먼저 시험한다.',
        doneWhen: '출처가 있는 참고도와 창작 보완도가 구분되며, 대표 동작에서 주요 부품의 간섭을 확인할 수 있다.'
    },
    {
        id: 'prototype', title: '7. 한 번 끝까지 플레이할 수 있는 시제품', status: '예정',
        deliverable: '플레이어 한 명·짧은 맵 하나·보스 한 명의 실행 가능한 시제품',
        progress: '이 저장소는 웹 자료집이다. 게임 엔진·게임 코드·3D 제작 파일은 아직 준비하지 않았다.',
        next: '엔진과 조작 방식을 정한 뒤 이동·점프·대시·공격을 만들고, 단순한 모형으로 보스의 예고·회피 공간·빈틈을 검증한다. 첫 범위는 엑스 한 명을 제안한다.',
        doneWhen: '시작부터 보스 격파까지 진행할 수 있고, 실패·재시작이 작동한다. 실행 방법과 해결되지 않은 문제가 남아 있다.'
    },
    {
        id: 'expand', title: '8. 시제품을 보고 제작 범위 조정하기', status: '예정',
        deliverable: '검증된 한 구간을 기준으로 계산한 다음 제작 목록',
        progress: '전체 스테이지·플레이어 수·연출 분량은 아직 고정하지 않았다.',
        next: '한 보스에 실제로 든 작업량을 기록하고 추가 스테이지, 제로·엑셀 조작, 대화 연출의 순서를 정한다.',
        doneWhen: '다음 제작 항목마다 필요한 모델·동작·맵·대사가 보이고, 시제품에서 드러난 문제를 반영한다.'
    }
];

// 요청한 결과물 순서: 근거 → 출발점 → 주제 → 주역 → 보스 → 제작.
projectRoadmapData.sort((a,b)=>parseInt(a.title,10)-parseInt(b.title,10));

const x9ContinuityData = [
    {
        id: 'axl-after-x8', title: '엑셀의 부상과 크리스털',
        known: '루미네의 잔해에서 나온 공격에 엑셀이 부상한다. 추가 엔딩에서는 손상된 크리스털 안에 빛이 보인다.',
        unknown: '빛의 정체와 이후의 회복 과정은 확인한 엔딩에서 설명되지 않는다. 루미네의 의식 이식이나 악역화는 확정할 수 없다.',
        choice: '회복에 집중하는 이야기, 능력 변화가 드러나는 이야기 등을 창작할 수 있다. 어느 안을 택하든 새로 정한 가정으로 기록한다.',
        characterIds: ['axl', 'lumine'], sources: ['ending_x8_script', 'mystery_axl'],
        locator: 'X8 전사본 24·25.7 / Axl의 X8 행적 정리',
        sourceScope: '영어 전사본과 팬 위키가 제공한 장면 요약을 대조. 일본어 원문·실기 영상 전체는 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'sigma-claim', title: '시그마의 결말과 루미네의 주장',
        known: 'X8의 결전에서 시그마를 쓰러뜨린다. 제로의 독백은 루미네의 말이 맞다면 시그마가 돌아오지 않을 것이라고 생각하는 형태다.',
        unknown: '등장인물의 주장과 조건부 독백을 이후 모든 시대에 적용되는 전지적 설명으로 바꾸지 않는다.',
        choice: '시그마가 재등장하지 않아도 성립하는 갈등을 먼저 검토한다. 재등장을 선택한다면 그것이 왜 필요한지와 새로 만든 작동 원리를 따로 밝힌다.',
        characterIds: ['sigma', 'zero', 'lumine'], sources: ['ending_x8_script', 'x8'],
        locator: 'X8 전사본 25.3 / X8 Plot',
        sourceScope: '영어판 조건부 독백을 근거로 한 구분. 작품 밖에서 모든 미래를 확정하는 제작진 발언으로 취급하지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'copy-chip-policy', title: '카피 칩의 중단과 수년 뒤 재개',
        known: '후일담은 카피 칩의 제조·사용 중단과, 우주 개발 수요 때문에 수년 뒤 생산이 재개된 일을 서술한다.',
        unknown: '중단과 재개 사이의 구체적인 연도, 의사결정자, 사회적 갈등은 이 글에서 자세히 설명되지 않는다.',
        choice: '사건 직후·중단 기간·재개 무렵 중 출발 시점을 정한다. 금지와 재개를 같은 날의 상태처럼 쓰지 않고, 그 사이의 사건은 팬 창작으로 구성한다.',
        characterIds: ['axl', 'lumine'], sources: ['ending_x8_script'],
        locator: 'X8 전사본 25.5 Epilogue 1',
        sourceScope: '영어판 후일담의 검색 제공 본문을 확인. 한국어 요약이며 상세 정책·연표는 임의로 확정하지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'jakob-society', title: '야콥과 우주 개발을 필요로 하는 사회',
        known: 'X8 도입부는 야콥과 달 이주를 소개하며, 후일담에도 우주 개발을 위한 신세대 레플리로이드의 수요가 남는다.',
        unknown: '결전 뒤 시설의 운영 체제, 달의 생활상, 기존 노동자와 신세대의 관계는 별도로 정리할 필요가 있다.',
        choice: '새 보스에게 운송·정비·구조·자원 채굴 같은 사회적 역할을 줄 수 있다. 구체적인 기업이나 법률을 추가한다면 창작 설정임을 표시한다.',
        characterIds: ['x', 'axl', 'lumine'], sources: ['ending_x8_script', 'x8'],
        locator: 'X8 전사본 1 Opening·25.5 / X8 Plot',
        sourceScope: '전사본의 도입·후일담을 참고. 사회 구조에 관한 제안은 편집자의 창작 질문.', reviewedAt: '2026-10-25'
    },
    {
        id: 'hunters-next-choice', title: '세 헌터가 다음 사건을 맞는 태도',
        known: '귀환 장면에서 엑스는 고민하고, 제로는 운명에도 맞서야 한다고 말한다. 엑셀은 부상한 채 동료들과 돌아온다.',
        unknown: '셋이 이후 어떤 결론에 도달하고 서로에게 무엇을 말했는지는 엔딩 밖의 공백이다.',
        choice: '엑스의 판단, 제로의 실천, 엑셀 자신의 선택이 드러나는 장면을 준비한다. 엑셀을 다른 인물의 구출 대상만으로 두지 않는 방향을 검토한다.',
        characterIds: ['x', 'zero', 'axl'], sources: ['ending_x8_script'],
        locator: 'X8 전사본 25.2·25.4·25.7',
        sourceScope: '영어판 장면 요약과 집필 제안을 구분. 세 인물의 영구적인 성격 공식으로 단정하지 않음.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-era-gap', title: '제로 시리즈로 이어지는 먼 미래',
        known: '캡콤은 제로 시리즈를 X 시리즈 이후 먼 미래의 이야기로 소개한다. X6에는 제로의 연구·봉인 결말이 있지만 X7·X8에서도 활동하므로, 이 자료집은 봉인을 X6 직후로 고정하지 않는다.',
        unknown: 'X8과 제로 시리즈 사이의 모든 사건·연도·연구 주체를 현재 확보한 자료만으로 확정할 수 없다.',
        choice: '한 편의 X9에서 다룰 사건의 범위를 정한다. 마더 엘프·요정 전쟁·제로의 이별을 한 작품 안에 넣는 것은 선택 가능한 팬 기획이며 필수 조건이 아니다.',
        characterIds: ['x', 'zero'], sources: ['review_zero_future', 'x6', 'ending_x6_context'],
        locator: '캡콤 2020-02-25 소개 A Hero Reborn / X6 결말·봉인 시점 자료',
        sourceScope: '시리즈의 미래 관계는 개발사 소개, X6 결말 비교는 2차 자료로 구분. X8→마더 엘프→요정 전쟁의 상세 인과·연도를 확정한 자료가 아님.', reviewedAt: '2026-10-25'
    }
];

function getProjectAudit(bosses, designs, media) {
    const missingSources = bosses.filter(boss => !boss.sources?.length).map(boss => boss.id);
    const missingDesigns = bosses.filter(boss => !designs.some(item => item.bossId === boss.id && item.observation)).map(boss => boss.id);
    const missingGallery = Object.entries(media.characters).flatMap(([id, person]) => person.gallery
        .filter(group => group.scope === 'main' && !group.assetIds.length).map(group => ({ id, series: group.series })));
    return { totalBosses: bosses.length, linkedSources: bosses.length - missingSources.length, missingSources, missingDesigns, missingGallery };
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projectRoadmapData, x9ContinuityData, getProjectAudit };
} else {
    Object.assign(window, { projectRoadmapData, x9ContinuityData, getProjectAudit });
}
