// 원문을 길게 인용하지 않고 요약합니다. 제작 의도·초기 구상을 본편의 확정 사건과 분리합니다.
const creatorNoteKinds = {
    supplement: '공식 설정 보충',
    intent: '제작 의도',
    concept: '초기·변경된 구상',
    recollection: '제작진 회고'
};

const creatorNotesData = [
    {
        id: 'boss-attack-before-appearance', category: 'design', kind: 'intent', title: '보스는 플레이어에게 넘어갈 무기이기도 하다',
        subject: '보스의 공격·획득 무기·상호 관계', work: 'Mighty No. 9 개발 당시 설명한 보스 설계 방식',
        speaker: '이나후네 케이지', role: '당시 comcept 대표 · 과거 록맨 시리즈 제작 참여',
        publishedAt: '2014년 2월 6일', publication: 'Game Developer · Brandon Sheffield 인터뷰', locator: 'The mechanics of Inafune’s design의 보스 설계 문답',
        summary: '공격 방식과 플레이어와의 상호작용, 특별한 요소를 외형에 앞서 고려한다고 설명했다. 보스 자체가 획득할 무기이기도 하므로, 전체 보스를 나란히 놓고 서로의 무기가 어떻게 작용할지도 생각한다고 말했다.',
        context: 'Mighty No. 9를 개발하던 시점에 밝힌 자신의 설계 방식이다. X1~X8의 모든 보스가 이나후네 개인의 구상으로, 반드시 이 순서대로 제작되었다는 증언은 아니다.',
        characterIds: [], seriesIds: [], sources: ['boss_design_inafune_2014'],
        sourceScope: '보스 설계에 관한 직접 발언을 한국어로 요약. 개별 X 보스의 미공개 제작 경위는 확인하지 않았다.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-world-palette', category: 'design', kind: 'intent', title: '낡은 세계를 표현하는 낮은 채도의 색',
        subject: '제로 시리즈의 인물과 세계', work: '록맨 제로 · 색채 방향',
        speaker: '나카야마 토오루', role: '록맨 제로 시리즈 캐릭터 디자이너 · 인터뷰 당시 프리랜서',
        publishedAt: '2019년 · 번역본 10월 19일', publication: '공식 록맨 유니티 인터뷰 · Rockman Corner 영어 번역', locator: '형태에 이어 색채 방향을 설명하는 문답',
        summary: '빛나고 다채로운 인상보다 닳고 낡은 세계를 떠올리며 채도를 낮추고 다소 탁한 단색을 사용했다고 설명했다. 같은 GBA의 에그제와 구별되는 형태와 색채도 의식했다고 말했다.',
        context: '화면의 색을 통해 세계의 인상을 만드는 제작 의도다. 낮은 채도를 특정 전쟁이나 물질의 영향이라는 세계관 설정으로 바꾸지 않는다.',
        characterIds: ['zero'], seriesIds: [], sources: ['design_nakayama_2019'],
        sourceScope: '영어 번역의 색채·에그제와의 구분 관련 답변을 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'guardians-weapon-concept', category: 'design', kind: 'concept', title: '사천왕의 공통 구조에 남은 무기 획득 구상',
        subject: '사천왕 · 제로', work: '록맨 제로 · 초기 무기 시스템 구상',
        speaker: '나카야마 토오루', role: '록맨 제로 시리즈 캐릭터 디자이너 · 인터뷰 당시 프리랜서',
        publishedAt: '2019년 · 번역본 10월 19일', publication: '공식 록맨 유니티 인터뷰 · Rockman Corner 영어 번역', locator: '클래식 시리즈의 영향과 사천왕 공통 부위에 관한 문답',
        summary: '사천왕의 하반신을 공통으로 설계하고 제로와 무기를 호환하도록 생각한 데에는, 클래식처럼 무기를 획득하는 시스템을 검토한 흔적이 있다고 설명했다. 최종 게임에는 그 구상이 구현되지 않았다.',
        context: '실현되지 않은 시스템을 고려한 외형 설계다. 제로가 본편에서 사천왕의 무기를 모두 얻었다는 사건이나 혈연·제작 기원을 증명하지 않는다.',
        characterIds: ['zero'], seriesIds: [], sources: ['design_nakayama_2019'],
        sourceScope: '영어 번역의 사천왕·무기 획득 구상 문답을 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-enemy-silhouettes', category: 'design', kind: 'intent', title: '동물 보스는 실루엣부터 구별되도록',
        subject: '제로 시리즈의 적 캐릭터', work: '록맨 제로 · 적의 형태 설계',
        speaker: '나카야마 토오루', role: '록맨 제로 시리즈 캐릭터 디자이너 · 인터뷰 당시 프리랜서',
        publishedAt: '2019년 · 번역본 10월 19일', publication: '공식 록맨 유니티 인터뷰 · Rockman Corner 영어 번역', locator: '동물 모티프와 실루엣, 전체 균형에 관한 문답',
        summary: '모티프 동물의 특징적인 부위는 강조하고 다른 부분은 단순화했다고 설명했다. 각자의 실루엣과 여러 적을 함께 놓았을 때의 균형도 고려했다.',
        context: '제로 시리즈를 설명한 발언이다. X 시리즈의 모든 보스를 같은 디자이너가 같은 원칙으로 만들었다는 근거로 넓히지 않는다.',
        characterIds: [], seriesIds: [], sources: ['design_nakayama_2019'],
        sourceScope: '영어 번역의 적 캐릭터 형태 관련 문답을 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'x-mega-armor-toys', category: 'design', kind: 'recollection', title: '그림으로 그린 아머를 실제 완구로 옮기는 일',
        subject: '엑스 · 제로의 완구용 아머', work: 'X4 개발 시기 · 카드다스·메가 아머 연계 상품',
        speaker: '오코하라 코지 · 타자키 잇키', role: '당시 캡콤 · X4 기획 및 그래픽 제작 참여',
        publishedAt: '1997년', publication: '세가 새턴 매거진 · X4 개발진 인터뷰', locator: '반다이 카드다스와 메가 아머 연계 상품에 관한 문답',
        summary: '오코하라는 완구 경험이 부족한 상태에서 파츠가 실제로 어떻게 결합할지 충분히 이해하지 못한 채 디자인을 그렸다고 회고했다. 타자키는 그 그림을 재현한 반다이의 조형 능력에 감탄했다고 말했다.',
        context: '상품 제작의 비화다. 카드·완구의 독자 아머를 X4 본편에서 실제로 장착한 모습으로 취급하지 않는다.',
        characterIds: ['x', 'zero'], seriesIds: ['X4'], sources: ['creator_x4_1997'],
        sourceScope: 'shmuplations 영어 번역의 반다이 연계 상품 문답을 요약. 일본어 잡지 원본 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-new-megaman-design', category: 'design', kind: 'recollection', title: '새로운 록맨의 디자인에서 출발한 제로',
        subject: '제로 · 엑스', work: '록맨 X · 주인공 디자인의 출발',
        speaker: '이나후네 케이지', role: '당시 캡콤 프로듀서 · 제로 원안 디자이너',
        publishedAt: '2007년 9월 23일 보도', publication: '도쿄 게임쇼 캡콤 무대 · GameSpot 보도', locator: '슈퍼패미컴용 록맨 재디자인과 제로에 관한 발언',
        summary: '새로운 록맨을 디자인하면서 제로를 만들었지만, 기존 록맨으로 받아들여지기 어렵겠다고 판단했다고 회고했다. 다른 디자이너에게 새 록맨을 맡기고 제로는 인상적인 장면을 가져가는 또 다른 주역으로 다듬었다고 설명했다.',
        context: '디자이너가 나중에 설명한 개발 경위다. 제로가 세계관 안에서 엑스의 원형이라는 뜻은 아니며, 이 발언만으로 상사의 강제 반려 과정을 단정하지 않는다.',
        characterIds: ['zero', 'x'], seriesIds: ['X1'], sources: ['design_inafune_2007'],
        sourceScope: 'GameSpot 기사 보존본에 수록된 이나후네의 직접 발언을 한국어로 요약. 무대 발언 전체 영상은 미확인.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-design-attachment', category: 'design', kind: 'recollection', title: '제로의 디자인에 대한 이나후네의 애착',
        subject: '제로', work: '록맨 X → 록맨 제로 · 디자인 인계에 관한 회고',
        speaker: '이나후네 케이지', role: '캡콤 퇴사 후 comcept 대표 · 제로 원안 디자이너',
        publishedAt: '2013년 9월 1일', publication: 'The Mega Man Network · PAX Prime 인터뷰', locator: '가장 좋아하는 캐릭터를 묻는 문답',
        summary: '가장 좋아하는 캐릭터로 제로를 꼽으며, 인티 크리에이츠에 제로 게임을 맡기기 전에는 제로의 디자인 변경을 자신이 직접 관리할 만큼 애착이 컸다고 회고했다.',
        context: '본인이 설명한 애착과 작업 방식이다. 시리즈의 모든 삽화를 혼자 그렸다는 뜻이나 다른 아티스트의 기여를 부정하는 근거로 사용하지 않는다.',
        characterIds: ['zero'], seriesIds: [], sources: ['design_inafune_2013'],
        sourceScope: '인터뷰 전사본의 제로 디자인 관련 답변을 한국어로 요약. 인터뷰는 Ben Judd의 통역을 거쳤다.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-light-sword-design', category: 'design', kind: 'intent', title: '가벼운 체형과 어깨 장식의 변화',
        subject: '제로', work: '록맨 제로 · X 시리즈와 다른 외형',
        speaker: '나카야마 토오루', role: '록맨 제로 시리즈 캐릭터 디자이너 · 인터뷰 당시 프리랜서',
        publishedAt: '2019년 · 번역본 10월 19일', publication: '공식 록맨 유니티 인터뷰 · Rockman Corner 영어 번역', locator: '형태와 움직임, 제로의 발·체형·어깨에 관한 문답',
        summary: '접근해서 피하고 베는 액션의 속도감을 위해 가느다란 발과 가벼운 체형을 지향했다고 설명했다. 어깨 장식은 검을 위로 휘두르는 동작과 도트 표현에 방해가 될 수 있어 피했다고 밝혔다.',
        context: '제로 시리즈의 외형을 결정한 디자인 의도다. 세계관 속 신체 교체의 원인이나 방어력 수치를 설명하는 설정은 아니다. 위 갤러리의 X 시리즈 삽화와 대상 작품이 다르다.',
        characterIds: ['zero'], seriesIds: [], sources: ['design_nakayama_2019'],
        sourceScope: 'Sidier의 영어 번역 중 제로의 형태와 움직임에 관한 문답을 한국어로 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'ciel-wizard-concept', category: 'design', kind: 'concept', title: '마법사형 플레이어로 생각했던 시엘',
        subject: '시엘', work: '록맨 제로 · 초기 플레이어 캐릭터 구상',
        speaker: '나카야마 토오루', role: '록맨 제로 시리즈 캐릭터 디자이너 · 인터뷰 당시 프리랜서',
        publishedAt: '2019년 · 번역본 10월 19일', publication: '공식 록맨 유니티 인터뷰 · Rockman Corner 영어 번역', locator: '사이버 엘프와 채택되지 않은 아이디어에 관한 문답',
        summary: '개발 초기에는 제로만 조작할지 정해지지 않았다. 시엘은 검사인 제로와 대비되는 마법사형 플레이어로 디자인했고, 사이버 엘프는 소환 프로그램 마법 같은 이미지로 생각했다고 설명했다.',
        context: '최종 게임에 채택되지 않은 구상이다. 본편에서 시엘이 조작 가능하거나 실제 마법사라는 설정으로 읽지 않는다.',
        characterIds: [], seriesIds: [], sources: ['design_nakayama_2019'],
        sourceScope: 'Sidier의 영어 번역 중 시엘과 사이버 엘프의 초기 구상 문답을 한국어로 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-25'
    },
    {
        id: 'elecman-american-comics', category: 'design', kind: 'intent', title: '미국 코믹스풍을 의식한 일렉맨',
        subject: '일렉맨', work: '록맨 클래식 · 록맨 1',
        speaker: '이나후네 케이지', role: '당시 캡콤 프로듀서 · 일렉맨 디자이너',
        publishedAt: '2007년 9월 23일 보도', publication: '도쿄 게임쇼 캡콤 무대 · GameSpot 보도', locator: '좋아하는 자작 캐릭터와 일렉맨에 관한 발언',
        summary: '일렉맨을 만들 때 스파이더맨이나 엑스맨에 나올 법한 미국 코믹스 캐릭터의 인상을 지향했다고 밝혔다.',
        context: '장르의 시각적 인상에 관한 디자인 의도다. 특정 히어로 한 명을 직접 모델로 삼았다고 단정하지 않으며, 에그제의 일렉맨.EXE 디자인에 그대로 적용하지 않는다.',
        characterIds: [], seriesIds: [], sources: ['design_inafune_2007'],
        sourceScope: 'GameSpot 기사 보존본에 수록된 일렉맨 디자인 발언을 한국어로 요약. 무대 발언 전체 영상은 미확인.', reviewedAt: '2026-10-25'
    },
    {
        id: 'zero-classic-theory', kind: 'supplement', title: '클래식 시리즈와 제로를 잇는 가설에 대한 답변',
        speaker: '이나후네 케이지', role: '당시 캡콤 개발자 · 록맨 시리즈 제작 참여',
        publishedAt: '2008년 9월 5일', publication: '캡콤 Unity 공식 Q&A', locator: '질문 1 · 클래식 시리즈 인물들의 최후',
        summary: '제로가 클래식 시리즈의 주역들을 죽였느냐는 질문에 부정하며, 자신이 만든 제로는 그런 인물이 아니라고 답했다.',
        context: '제작자의 가설 부정 발언이다. 이것만으로 클래식 시리즈 인물들의 실제 최후나 두 시대 사이의 사건이 모두 밝혀진 것은 아니다.',
        characterIds: ['zero', 'light', 'wily'], seriesIds: [], sources: ['creator_qa_2008'],
        sourceScope: '공식 Q&A의 질문 1과 답변을 한국어로 요약. 보존본을 통해 확인.', reviewedAt: '2026-10-24'
    },
    {
        id: 'sigma-zero-theme', kind: 'intent', title: '시그마와 제로에 담은 변화의 주제',
        speaker: '이나후네 케이지', role: '당시 캡콤 개발자 · 록맨 시리즈 제작 참여',
        publishedAt: '2008년 9월 5일', publication: '캡콤 Unity 공식 Q&A', locator: '질문 4 · 시그마의 발상',
        summary: '헌터의 지도자였던 시그마가 제로로부터 바이러스를 전달받고 입장을 바꾼 일을 들며, 두 인물은 상황에 따라 무엇이든 달라질 수 있다는 생각을 나타낸다고 설명했다.',
        context: '두 인물에 담은 주제에 관한 설명이다. 모든 이레귤러의 행동 동기를 바이러스 하나로 설명하는 근거로 넓히지 않는다.',
        characterIds: ['sigma', 'zero'], seriesIds: ['X4'], sources: ['creator_qa_2008'],
        sourceScope: '공식 Q&A의 질문 4와 답변을 한국어로 요약. 보존본을 통해 확인.', reviewedAt: '2026-10-24'
    },
    {
        id: 'wily-weil-distinction', kind: 'supplement', title: '와일리의 이후와 바일의 구분',
        speaker: '이나후네 케이지', role: '당시 캡콤 개발자 · 록맨 시리즈 제작 참여',
        publishedAt: '2008년 9월 5일', publication: '캡콤 Unity 공식 Q&A', locator: '질문 6 · 와일리와 바일',
        summary: '와일리는 클래식과 X 시리즈 사이에 사망했으나 바이러스에 의해 돌아왔다고 설명하며, 제로 시리즈의 바일과는 다른 인물이라고 답했다.',
        context: '이 답변은 사게스나 아이조크를 와일리라고 직접 지목하지 않는다. 귀환의 구체적인 방식이나 두 인물의 정체까지 확정하지 않는다.',
        characterIds: ['wily', 'sagesse', 'isoc'], seriesIds: [], sources: ['creator_qa_2008'],
        sourceScope: '공식 Q&A 질문 6 중 와일리의 이후와 바일과의 구분을 요약.', reviewedAt: '2026-10-24'
    },
    {
        id: 'x-fighting-armor', kind: 'intent', title: '전투를 고민하는 엑스와 아머에 대한 해석',
        speaker: '오코하라 코지', role: '당시 캡콤 · X4 기획자',
        publishedAt: '1997년', publication: '세가 새턴 매거진 · X4 개발진 인터뷰', locator: 'X 시리즈의 공통 요소와 아머에 관한 문답',
        summary: '엑스가 싸움 자체에 고민을 갖고 있어 필요가 없어지면 강화 장비를 버린다는 자신의 해석을 제시했다.',
        context: '발언자도 개인적인 해석으로 설명했다. 모든 작품에서 아머가 사라지는 이유를 확정한 공통 설정으로 사용하지 않는다.',
        characterIds: ['x'], seriesIds: ['X4'], sources: ['creator_x4_1997'],
        sourceScope: '인터뷰 영어 번역의 해당 문답을 한국어로 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-24'
    },
    {
        id: 'iris-story-purpose', kind: 'intent', title: '아이리스로 넓힌 제로의 이야기',
        speaker: '오코하라 코지', role: '당시 캡콤 · X4 기획자',
        publishedAt: '1997년', publication: '세가 새턴 매거진 · X4 개발진 인터뷰', locator: '새로운 여성 인물 아이리스에 관한 문답',
        summary: '엑스와 제로의 이야기에 각각 개성을 주기 위해 루트별 인물을 배치했고, 제로의 이야기에는 폭을 더할 여성 인물을 넣었다고 설명했다.',
        context: '아이리스의 서사적 역할에 관한 제작 의도다. 이 설명만으로 게임에 나오지 않은 과거나 대사를 보충하지 않는다.',
        characterIds: ['iris', 'zero', 'double'], seriesIds: ['X4'], sources: ['creator_x4_1997'],
        sourceScope: '인터뷰 영어 번역의 아이리스 관련 답변을 한국어로 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-24'
    },
    {
        id: 'x4-robots-future', kind: 'intent', title: 'X4의 화면을 로봇 중심으로 구성한 이유',
        speaker: '오코하라 코지', role: '당시 캡콤 · X4 기획자',
        publishedAt: '1997년', publication: '세가 새턴 매거진 · X4 개발진 인터뷰', locator: '로봇과 미래라는 주제에 관한 설명',
        summary: '로봇과 미래라는 주제를 강화하기 위해 이번 작품에는 인간을 넣지 않았고, 도시 장면도 레플리로이드로 구성했다고 설명했다.',
        context: '작품에서 무엇을 보여줄지에 관한 연출 방침이다. X4의 세계에 인간이 존재하지 않는다는 뜻은 아니다.',
        characterIds: [], seriesIds: ['X4'], sources: ['creator_x4_1997'],
        sourceScope: '인터뷰 영어 번역의 인간 등장 여부 설명을 한국어로 요약. 일본어 원문 미대조.', reviewedAt: '2026-10-24'
    },
    {
        id: 'x5-zero-transition', kind: 'concept', title: 'X 시리즈의 마무리와 제로 시리즈로의 연결 구상',
        speaker: '이나후네 케이지', role: '당시 캡콤 제2개발부문 책임자 · 록맨 시리즈 제작 참여',
        publishedAt: '2004년 4월호', publication: 'Play · 제3권 제4호, Chris Hoffman 기사', locator: 'X5 이후의 시리즈 전개에 관한 회고',
        summary: 'X4~X5 즈음에 X 시리즈를 끝내고 제로 시리즈에서 제로를 부활시킬 생각이었다고 회고했다. X6에서 먼저 제로가 복귀하면서 그 구상과 달라졌다고 말했다.',
        context: '제작자가 회고한 당시 계획이다. X6 이후를 비공식으로 분류하거나, 출시작의 모든 분기를 하나의 확정 연표로 합치는 근거로 사용하지 않는다.',
        characterIds: ['x', 'zero'], seriesIds: ['X5', 'X6'], sources: ['creator_play_2004'],
        sourceScope: '잡지 기사 전사본의 이나후네 발언을 한국어로 요약.', reviewedAt: '2026-10-24'
    },
    {
        id: 'zero-opponent-revision', kind: 'concept', title: '제로 시리즈의 대립 구상이 바뀐 과정',
        speaker: '아이즈 타쿠야', role: '당시 인티 크리에이츠 대표 · 록맨 제로 개발 참여',
        publishedAt: '2015년 · 인용 보도 4월 21일', publication: 'USGamer 인터뷰를 인용한 Nintendo Everything 기사', locator: '초기 최종 상대와 카피 엑스에 관한 인용문',
        summary: '처음에는 제로가 진짜 엑스를 쓰러뜨리는 이야기를 구상했지만, 캡콤과의 조율을 거쳐 상대가 카피 엑스로 바뀌었다고 회고했다.',
        context: '최종 게임에 채택되지 않은 구상이다. 본편의 엑스가 실제로 타락했다거나 카피 엑스와 같은 인물이었다는 설정으로 합치지 않는다.',
        characterIds: ['x', 'zero'], seriesIds: [], sources: ['creator_aizu_2015'],
        sourceScope: '2차 보도에 수록된 아이즈의 직접 발언 인용문을 한국어로 요약. 원 인터뷰 전체는 미확인.', reviewedAt: '2026-10-24'
    },
    {
        id: 'zero-world-functions', kind: 'supplement', title: '제로 시리즈의 사회와 사천왕의 역할',
        speaker: '인티 크리에이츠 공식 설정 소개', role: '록맨 제로 개발사 · 웹페이지 설명의 개별 집필자는 미표기',
        publishedAt: '최초 발표 연도 미표기 · 페이지 갱신 2014년 9월 26일', publication: '록맨 제로 사운드트랙 공식 페이지', locator: '하르퓨이아·레비아탄 및 사천왕 설정 소개',
        summary: '하르퓨이아와 레비아탄은 기상·수류·수온을 조절해 인간의 생존 영역을 복구하는 역할로 소개된다. 사천왕은 엑스의 DNA에서 만들어진 존재로 설명된다.',
        context: '제로 시리즈의 사회와 인물을 보충하는 공식 웹 설명이다. 이 역할을 X 시리즈의 조직에 그대로 적용하거나 X8 이후의 사건 순서를 확정하지 않는다.',
        characterIds: ['x'], seriesIds: [], sources: ['creator_zero_soundtrack'],
        sourceScope: '공식 웹페이지의 공개 설정 설명만 요약. CD 부속 책자와 수록 인터뷰 전체는 미확인.', reviewedAt: '2026-10-24'
    },
    {
        id: 'x1-design-origin', kind: 'concept', title: '초기 관계 기획서에 담긴 제로의 기원',
        speaker: '캡콤 내부 기획서 · 작성자 미표기', role: 'X1 개발 자료 · 공개 기사에서 소개된 문서',
        publishedAt: '1993년 작성 추정 · 공개 소개 기사 2018년 2월 11일', publication: '록맨 30주년 행사 공개 문서에 대한 Rockman Corner 보도', locator: '인물 관계 기획서와 와일리·제로 연결 설명',
        summary: '행사에서 공개된 초기 관계 기획서에 와일리와 제로의 연결이 들어 있다는 보도다. 작성 시기가 맞다면 그 관계가 X1 개발 당시부터 구상됐음을 보여준다.',
        context: '기획 단계의 문서와 그 소개 기사다. 작성 시기는 기사가 인용한 증언에 따른 추정이며, 문서의 모든 내용을 출시작의 확정 설정으로 취급하지 않는다.',
        characterIds: ['wily', 'zero'], seriesIds: ['X1'], sources: ['creator_x1_design'],
        sourceScope: '공개 문서 소개 기사의 설명을 요약. 내부 문서 원본 전체와 일본어 문구는 미대조.', reviewedAt: '2026-10-24'
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { creatorNotesData, creatorNoteKinds };
} else {
    window.creatorNotesData = creatorNotesData;
    window.creatorNoteKinds = creatorNoteKinds;
}
