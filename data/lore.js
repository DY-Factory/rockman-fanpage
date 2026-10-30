// 인물 관계와 세계관 용어. 관계 변화는 스포일러를 포함합니다.
const relationshipsData = [
    {
        "id": "x-zero",
        "from": "x",
        "to": "zero",
        "label": "동료와 신뢰",
        "summary": "함께 임무를 수행하며 서로를 지탱하는 헌터 동료다.",
        "development": "X1의 구조와 희생, X2의 재회를 거치며 유대가 이어진다. X5에서는 서로를 걱정하는 마음과 의심이 충돌로 이어진다.",
        "sources": [
            "x1",
            "x2",
            "x5"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "x-light",
        "from": "x",
        "to": "light",
        "label": "제작자와 피조물",
        "summary": "라이트가 만든 엑스는 그가 남긴 메시지와 마주한다.",
        "development": "캡슐의 지원은 이어지지만, 싸움에서 무엇을 선택할지는 엑스에게 남겨진다.",
        "sources": [
            "light"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "x-cain",
        "from": "x",
        "to": "cain",
        "label": "발견자와 연구 대상",
        "summary": "케인은 잠들어 있던 엑스를 발견하고 그 설계를 연구했다.",
        "development": "그 연구로 레플리로이드가 만들어지고, 케인은 X2·X3에서 헌터들을 지원한다.",
        "sources": [
            "cain"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "zero-cain",
        "from": "zero",
        "to": "cain",
        "label": "복구와 지원",
        "summary": "케인은 제로의 복구와 수리를 돕는다.",
        "development": "X2에서 파츠를 모두 회수한 경로에서는 케인이 제로를 재조립한다.",
        "sources": [
            "cain"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "zero-wily",
        "from": "zero",
        "to": "wily",
        "label": "기원에 얽힌 과거",
        "summary": "제로가 보는 과거의 이미지에 와일리와의 연결이 있다.",
        "development": "제로는 와일리의 창조물이다. 다만 사게스나 아이조크가 곧 와일리라는 해석까지 확정되는 것은 아니다.",
        "sources": [
            "wily"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "x-sigma",
        "from": "x",
        "to": "sigma",
        "label": "옛 지휘관과 대립",
        "summary": "시그마는 헌터를 이끌었지만 반란 이후 엑스의 적이 된다.",
        "development": "X1에서 시작된 대립은 육체를 바꾸며 돌아오는 시그마를 상대로 이어진다.",
        "sources": [
            "x1",
            "x3"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "zero-iris",
        "from": "zero",
        "to": "iris",
        "label": "가까운 두 사람",
        "summary": "아이리스는 제로를 아끼며 커넬과의 싸움을 막으려 한다.",
        "development": "X4 제로 루트에서 커넬의 죽음 이후 아이리스도 제로와 싸우다 생명을 잃는다.",
        "sources": [
            "iris",
            "x4"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "iris-colonel",
        "from": "iris",
        "to": "colonel",
        "label": "남매",
        "summary": "커넬은 아이리스의 오빠다.",
        "development": "X4에서 커넬이 조직을 위해 내린 선택은 제로와 아이리스의 관계에도 영향을 준다.",
        "sources": [
            "iris",
            "x4"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "zero-colonel",
        "from": "zero",
        "to": "colonel",
        "label": "대립하는 군인",
        "summary": "서로 다른 조직에 속한 두 사람이 레플리포스 사건에서 충돌한다.",
        "development": "무장 해제 거부로 시작한 대립은 전면전으로 이어지고, 아이리스의 만류에도 결투를 피하지 못한다.",
        "sources": [
            "x4"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "colonel-general",
        "from": "colonel",
        "to": "general",
        "label": "레플리포스 지휘부",
        "summary": "제너럴은 총사령관, 커넬은 그 휘하의 지휘관이다.",
        "development": "독립을 추진하다 헌터와 싸우며, 마지막에 제너럴은 최종 병기를 멈추기 위해 희생한다.",
        "sources": [
            "x4"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "alia-gate",
        "from": "alia",
        "to": "gate",
        "label": "옛 연구 동료",
        "summary": "둘은 같은 연구 현장에서 일했던 동료다.",
        "development": "X6에서 에이리아는 게이트가 배척받았던 과거를 밝힌다. 게이트의 계획을 막는 과정은 자신의 책임을 돌아보는 일이기도 하다.",
        "sources": [
            "alia",
            "x6"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "axl-red",
        "from": "axl",
        "to": "red",
        "label": "떠난 조직의 동료",
        "summary": "엑셀은 레드가 이끄는 레드 얼럿에 속해 있었다.",
        "development": "조직의 방식에 반발한 엑셀의 탈퇴로 갈등이 시작된다. 레드 역시 시그마에게 조직을 장악당한 상태였음이 드러난다.",
        "sources": [
            "x7"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "axl-x",
        "from": "axl",
        "to": "x",
        "label": "새 동료와 인정",
        "summary": "헌터가 되려는 엑셀과 전투에 회의적인 엑스가 만난다.",
        "development": "X7에서 합류와 인정의 과정을 거치고 X8에서는 함께 임무를 수행한다.",
        "sources": [
            "x7",
            "x8"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "axl-zero",
        "from": "axl",
        "to": "zero",
        "label": "동료와 안내자",
        "summary": "제로는 도주하던 엑셀을 본부로 데려온다.",
        "development": "X7에서 함께 레드 얼럿과 싸우며, 엑셀은 헌터로서 자리를 잡아 간다.",
        "sources": [
            "x7"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "doppler-sigma",
        "from": "doppler",
        "to": "sigma",
        "label": "연구를 이용당한 과학자",
        "summary": "도플러의 연구는 X3 반란의 핵심에 놓인다.",
        "development": "시그마에 감염된 도플러는 새 육체를 제작한다. 정신을 되찾은 뒤에는 백신으로 헌터를 돕는다.",
        "sources": [
            "x3"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "magma_dragoon-sigma",
        "from": "magma_dragoon",
        "to": "sigma",
        "label": "거래와 반란",
        "summary": "드라군의 선택은 X4 사건의 원인과 연결된다.",
        "development": "엑스·제로와 싸울 기회를 얻기 위해 시그마의 제안을 받아들이고 스카이 라군 추락을 일으킨다.",
        "sources": [
            "magma_dragoon"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "blizzard_wolfang-alia",
        "from": "blizzard_wolfang",
        "to": "alia",
        "label": "과거의 책임",
        "summary": "볼팡의 과거는 에이리아가 밝히는 연구소의 역사와 연결된다.",
        "development": "게이트를 배척하던 연구자들의 계략 속에서 에이리아가 볼팡을 바다에 던졌다는 사실이 밝혀진다.",
        "sources": [
            "blizzard_wolfang",
            "alia"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "blizzard_wolfang-gate",
        "from": "blizzard_wolfang",
        "to": "gate",
        "label": "제작자와 조사단원",
        "summary": "게이트와 볼팡의 관계는 X6 이전의 연구로 거슬러 올라간다.",
        "development": "게이트는 죽었던 볼팡을 되살려 나이트메어 조사단으로 보낸다.",
        "sources": [
            "blizzard_wolfang"
        ],
        "sourceScope": "게임 속 관계와 변화. 작품별 분기를 포함합니다.",
        "reviewedAt": "2026-10-24"
    }
];

const glossaryData = [
    {
        "id": "reploids",
        "name": "레플리로이드",
        "text": "엑스의 설계를 바탕으로 만들어진, 스스로 사고하고 판단하는 로봇들. 인간과 함께 사회를 이루며 살아간다.",
        "characterIds": [
            "x",
            "cain"
        ],
        "sources": [
            "reploid",
            "cain"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "mavericks",
        "name": "이레귤러",
        "text": "인간과 사회에 위험을 끼치는 로봇을 가리키는 명칭. 바이러스 감염만이 원인은 아니며, 자발적인 행동이나 조직 간 대립과도 얽힌다.",
        "characterIds": [
            "sigma",
            "general"
        ],
        "sources": [
            "maverick"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "hunters",
        "name": "이레귤러 헌터",
        "text": "이레귤러의 위협에 대응하는 조직. 엑스와 제로가 속하며, 시그마도 반란 전에는 지휘관이었다.",
        "characterIds": [
            "x",
            "zero",
            "sigma"
        ],
        "sources": [
            "x1"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "virus",
        "name": "이레귤러 바이러스·시그마 바이러스",
        "text": "로봇의 행동과 정신에 영향을 주는 바이러스와, 시그마의 의식에 결합한 형태를 구분해서 읽어야 한다. 모든 적대자의 행동을 감염 하나로 설명하지는 않는다.",
        "characterIds": [
            "sigma",
            "zero",
            "doppler"
        ],
        "sources": [
            "virus"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "repliforce",
        "name": "레플리포스",
        "text": "제너럴과 커넬이 지휘하는 군사 조직. X4에서 헌터와의 대립과 독립 선언이 사건의 중심을 이룬다.",
        "characterIds": [
            "general",
            "colonel",
            "iris"
        ],
        "sources": [
            "x4"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "eurasia",
        "name": "유라시아",
        "text": "X5에서 지구로 추락할 위기에 놓인 우주 콜로니. 낙하 저지 작전과 그 후의 피해는 X5·X6를 잇는 사건이다.",
        "characterIds": [
            "x",
            "zero",
            "dynamo"
        ],
        "sources": [
            "x5",
            "x6"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "nightmare",
        "name": "나이트메어 현상",
        "text": "X6에서 레플리로이드의 인지와 행동을 뒤흔드는 현상. 제로를 닮은 존재와 조사단의 발표가 사건에 혼란을 더한다.",
        "characterIds": [
            "gate",
            "isoc",
            "highmax",
            "alia"
        ],
        "sources": [
            "x6"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "red-alert",
        "name": "레드 얼럿",
        "text": "레드를 중심으로 활동하는 자경단. 엑셀의 탈퇴가 X7에서 헌터와의 충돌로 이어진다.",
        "characterIds": [
            "red",
            "axl"
        ],
        "sources": [
            "x7"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "copy-chip",
        "name": "신세대 레플리로이드·카피 칩",
        "text": "X8에서 DNA 데이터를 이용해 모습을 바꿀 수 있는 세대. 엑셀은 그와 관련된 프로토타입으로 다뤄지며, 양산형 신세대와 동일하게 취급해서는 안 된다.",
        "characterIds": [
            "axl",
            "lumine"
        ],
        "sources": [
            "x8"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    },
    {
        "id": "jakob",
        "name": "야콥 계획",
        "text": "우주 개발을 위한 궤도 엘리베이터 사업. 관리자 루미네의 납치로 X8의 조사가 시작된다.",
        "characterIds": [
            "lumine",
            "vava"
        ],
        "sources": [
            "x8"
        ],
        "sourceScope": "X 시리즈의 사건을 읽기 위한 용어 설명.",
        "reviewedAt": "2026-10-24"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { relationshipsData, glossaryData };
} else {
    window.relationshipsData = relationshipsData;
    window.glossaryData = glossaryData;
}
