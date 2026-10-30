// 확인 범위와 불확실성을 함께 보존하는 자료.
const sourcesData = {
    "review_zero_future": {
        "title": "캡콤 · Zero/ZX Legacy Collection 출시 소개 (2020-02-25)",
        "kind": "개발사 공식 소개 · 웹 원문",
        "url": "https://news.capcomusa.com/lets/browse/mission-start-mega-man-zero-zx-legacy-collection-is-out-now",
        "accessNote": "A Hero Reborn에서 X 시리즈 이후 먼 미래라는 설명 확인. X8부터 제로까지의 사건별 연도·봉인 횟수·연구자를 확정하는 자료는 아님."
    },
    "x8_profile_optic_sunflower": {
        "title": "MMKB · Optic Sunflower 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Optic_Sunflower",
        "accessNote": "검색 제공 본문에서 도입부의 형태·트로이아 베이스 관리·헬리오스 설명 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_gravity_antonion": {
        "title": "MMKB · Gravity Antonion 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Gravity_Antonion",
        "accessNote": "검색 제공 본문에서 Characteristics·History·Navigator Descriptions·Quotes의 연구·중력 조작·헌터와의 대화 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_earthrock_trilobyte": {
        "title": "MMKB · Earthrock Trilobyte 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Earthrock_Trilobyte",
        "accessNote": "검색 제공 본문에서 도입부·Characteristics의 광산 역할·자원 제공·구형 레플리로이드에 대한 태도 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_gigabolt_manowar": {
        "title": "MMKB · Gigabolt Man-O-War 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Gigabolt_Man-O-War",
        "accessNote": "검색 제공 본문에서 Characteristics·History의 전력 유지 업무·에너지 공급·자기 행동에 관한 주장 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_avalanche_yeti": {
        "title": "MMKB · Avalanche Yeti 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Avalanche_Yeti",
        "accessNote": "검색 제공 본문에서 Characteristics·History의 환경 연구·비관적 태도·센트럴 화이트 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_burn_rooster": {
        "title": "MMKB · Burn Rooster 소개·활동지역",
        "kind": "팬 위키 · 인물 소개·대사 요약",
        "url": "https://megaman.fandom.com/wiki/Burn_Rooster",
        "accessNote": "검색 제공 본문에서 도입부·Characteristics·Quotes의 폐기 업무와 복수 주장 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "x8_profile_dark_mantis": {
        "title": "Wikipedia · X8 Dark Mantis 역할 설명",
        "kind": "2차 자료 · 인물 목록",
        "url": "https://en.wikipedia.org/wiki/List_of_Mega_Man_characters#Mega_Man_X8",
        "accessNote": "검색 제공 본문에서 인물 목록의 X8 Dark Mantis 행 / X8 전사본 목차의 Pitch Black 확인. 원 게임 전체·일본어 원문·설정집 원문은 미대조."
    },
    "boss_design_inafune_2014": {
        "title": "Game Developer · 이나후네의 보스 설계 인터뷰 (2014-02-06)",
        "kind": "제작자 직접 인터뷰 · Mighty No. 9 개발 당시",
        "url": "https://www.gamedeveloper.com/design/jumping-shooting-and-boss-design-with-keiji-inafune",
        "accessNote": "The mechanics of Inafune’s design 문단의 직접 발언을 확인했습니다. X 시리즈 개별 보스의 제작 경위를 설명하는 인터뷰는 아닙니다."
    },
    "boss_motif_index": {
        "title": "Wikipedia · Mega Man X 보스별 형태 모티프 목록",
        "kind": "2차 자료 · 모티프 대조 목록",
        "url": "https://en.wikipedia.org/wiki/List_of_Mega_Man_characters#Maverick_Bosses",
        "accessNote": "X1~X8 표의 Basis 항목을 대조했습니다. 모티프 이름 참고용이며 개별 제작 의도나 문서의 전체 전기 내용을 검증한 자료가 아닙니다."
    },
    "boss_design_wire": {
        "title": "MMKB · Wire Sponge 형태와 행동",
        "kind": "팬 위키 · 모티프·행동 설명",
        "url": "https://megaman.fandom.com/wiki/Wire_Sponge",
        "accessNote": "검색 제공 본문의 Strike Chain·Hanging·hechima 설명 확인. 설정집 원문과 실기 전체는 미대조."
    },
    "boss_design_moth": {
        "title": "MMKB · Morph Moth 고철 흡수와 변태",
        "kind": "팬 위키 · 형태·행동 설명",
        "url": "https://megaman.fandom.com/wiki/Morph_Moth",
        "accessNote": "검색 제공 History의 X2 폐기장·변태 설명 확인. 원 게임 전체는 미대조."
    },
    "boss_design_rhino": {
        "title": "MMKB · Tunnel Rhino 드릴과 광산 근무",
        "kind": "팬 위키 · 외형·인물 소개",
        "url": "https://megaman.fandom.com/wiki/Tunnel_Rhino",
        "accessNote": "검색 제공 Characteristics·History의 드릴·광산 근무 설명 확인. 설정집 원문은 미대조."
    },
    "boss_design_whale": {
        "title": "MMKB · Tidal Whale 마지막 부탁과 얼음 블록",
        "kind": "팬 위키 · 사건·행동 설명",
        "url": "https://megaman.fandom.com/wiki/Tidal_Whale",
        "accessNote": "검색 제공 History·Strategy의 감염·결투 요청·얼음 블록 설명 확인. 언어별 대사 원본 전체는 미대조."
    },
    "boss_design_scaravich": {
        "title": "MMKB · Ground Scaravich 모티프와 유적 탐색",
        "kind": "팬 위키 · 모티프·인물 소개",
        "url": "https://megaman.fandom.com/wiki/Ground_Scaravich",
        "accessNote": "검색 제공 Characteristics·History의 외형과 유적 탐색 설명 확인. 설정집 원문은 미대조."
    },
    "boss_design_scaravich_action": {
        "title": "Mega Man XZ · X6 Ground Scaravich 행동 설명",
        "kind": "팬 가이드 · 게임 내 행동 설명",
        "url": "https://megaman.retropixel.net/mmx/6/xbosses.php",
        "accessNote": "검색 제공 Ground Scaravich 항목에서 돌을 밀고 크기가 변하는 설명 확인. 공략 전체와 실기 영상 전체는 미대조."
    },
    "boss_design_boarski": {
        "title": "MMKB · Ride Boarski 차량 부품과 변형",
        "kind": "팬 위키 · 외형·행동 설명",
        "url": "https://megaman.fandom.com/wiki/Ride_Boarski",
        "accessNote": "검색 제공 Characteristics·Strategy의 외형·차량 변형 설명 확인. Trivia의 원안 추측을 제작 의도로 채택하지 않았습니다."
    },
    "boss_design_panda": {
        "title": "MMKB · Bamboo Pandamonium 병기와 대사",
        "kind": "팬 위키 · 외형·행동·대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Bamboo_Pandamonium",
        "accessNote": "검색 제공 Characteristics·History·Strategy·Quotes의 관련 부분 확인. 대사 번역판 차이 및 실기 전체는 미대조."
    },
    "ending_x1_script": {
        "title": "MMKB · X1 엔딩·시그마 메시지 전사본",
        "kind": "팬 위키 수록 · 게임 대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X_%28video_game%29/Script",
        "accessNote": "검색 도구가 제공한 Epilogue 및 Sigma’s message의 일본어·영어 본문을 확인했습니다. 실기 영상 전체와 대조하지 않았습니다."
    },
    "ending_x2_guide": {
        "title": "GameFAQs · X2 후일담 설명 (NeoChozo)",
        "kind": "팬 가이드 · 엔딩 설명",
        "url": "https://gamefaqs.gamespot.com/snes/588480-mega-man-x2/faqs/82617",
        "accessNote": "검색 제공 본문의 Ending Guide에서 재회와 평화의 대가에 관한 설명을 확인했습니다. 일본어 엔딩 원문 및 공략 전체를 확인한 자료는 아닙니다."
    },
    "ending_x3_script": {
        "title": "MMKB · X3 일본어·영어 에필로그 전사본",
        "kind": "팬 위키 수록 · 게임 대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X3_Script",
        "accessNote": "검색 제공 본문 Scene 15: Epilogue의 일본어·영어 표현을 비교했습니다. 원 게임 화면과의 직접 대조는 미완료입니다."
    },
    "ending_x4_x": {
        "title": "MMKB · X4 엑스 루트 엔딩 전사본",
        "kind": "팬 위키 수록 · 게임 대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X4_Script_%28X%27s_story%29",
        "accessNote": "검색 제공 본문의 귀환 통신과 Scene 26: Destiny를 확인했습니다. 전사본은 The Mega Man Network를 출처로 명시합니다. 추가로 Scene 3·4의 스카이 라군·커넬 대화 확인."
    },
    "ending_x4_zero": {
        "title": "MMKB · X4 제로 루트 엔딩 전사본",
        "kind": "팬 위키 수록 · 게임 대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X4_Script_%28Zero%27s_story%29",
        "accessNote": "검색 제공 본문의 Scene 26: Memories와 Scene 27: Aftermath를 확인했습니다. 팬 재녹음·각색 영상은 근거로 사용하지 않았습니다. 추가로 Scene 6·21·22의 아이리스·제너럴 대화 확인."
    },
    "ending_x5_summary": {
        "title": "MMKB · X5의 세 결말 정리",
        "kind": "팬 위키 · 엔딩 사건 정리",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X5",
        "accessNote": "검색 제공 본문의 Story에서 제로 회상, 엑스의 기억·세이버·이상향 및 3년 뒤 표기를 확인했습니다. 게임 대사 전체와의 대조는 미완료입니다."
    },
    "ending_x6_context": {
        "title": "MMKB · X6 결말·시간 표기 설명",
        "kind": "팬 위키 · 결말·연속성 비교",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X6",
        "accessNote": "검색 제공 본문의 Story와 시간 표기 비교를 확인했습니다. 글이 인용한 설정집 원본은 직접 대조하지 않았으며 팬의 연표 해결 가설은 채택하지 않았습니다."
    },
    "ending_x7_script": {
        "title": "GameFAQs · X7 영어 게임 전사본 (Owvin)",
        "kind": "팬 작성 · 게임 대사 전사본",
        "url": "https://gamefaqs.gamespot.com/ps2/561699-mega-man-x7/faqs/26610",
        "accessNote": "검색 제공 본문의 공통 Ending 및 Axl’s subending을 확인했습니다. 전체 페이지와 일본어 대사를 직접 대조하지 않았습니다."
    },
    "ending_x8_script": {
        "title": "GameFAQs · X8 영어 엔딩 전사본 (wackypanda)",
        "kind": "팬 작성 · 게임 대사 전사본",
        "url": "https://gamefaqs.gamespot.com/ps2/920754-mega-man-x8/faqs/72837",
        "accessNote": "검색 제공 본문의 25.1~25.7 엔딩·후일담을 확인했습니다. 일본어 원문·전체 실기 영상·세부 해금 조건은 직접 대조하지 않았습니다."
    },
    "design_inafune_2007": {
        "title": "GameSpot · 2007년 이나후네 무대 발언 보존본",
        "kind": "행사 취재 기사 · 전사 보존본",
        "url": "https://themmnetwork.com/interviews/keiji-inafune-interview-gamespot-92307/",
        "accessNote": "Hirohiko Niizumi의 2007년 9월 23일 GameSpot 기사를 The Mega Man Network가 보존한 페이지입니다. 기사 속 직접 발언을 확인했으며 행사 전체 영상은 확인하지 않았습니다."
    },
    "design_inafune_2013": {
        "title": "The Mega Man Network · 2013년 이나후네 직접 인터뷰",
        "kind": "직접 인터뷰 · 통역 전사본",
        "url": "https://themmnetwork.com/2013/09/01/the-mega-man-networks-interview-with-keiji-inafune/",
        "accessNote": "2013년 9월 1일 공개된 PAX Prime 인터뷰입니다. Ben Judd의 통역을 거친 전사본에서 좋아하는 캐릭터와 제로 디자인 관련 문답을 확인했습니다."
    },
    "design_nakayama_2019": {
        "title": "록맨 유니티 · 나카야마 토오루 인터뷰 영어 번역",
        "kind": "공식 인터뷰 · 비공식 번역",
        "url": "https://www.rockman-corner.com/2019/10/mega-man-zerozx-legacy-collection.html",
        "accessNote": "공식 록맨 유니티의 Ucchy 인터뷰를 Sidier가 영어로 옮겨 2019년 10월 19일 Rockman Corner에 게시한 자료입니다. 영어 번역을 확인했으며 일본어 원문 및 설정집 전체와 대조하지 않았습니다."
    },
    "bit": {
        "title": "MMKB · 바이트",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Bit"
    },
    "byte": {
        "title": "MMKB · 만다레라 BB",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Byte"
    },
    "flame_stag": {
        "title": "MMKB · 플레임 스태거",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Flame_Stag"
    },
    "earthrock_trilobyte": {
        "title": "MMKB · 어스로크 트리로비치",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Earthrock_Trilobyte"
    },
    "gigabolt_manowar": {
        "title": "MMKB · 기가볼트 도쿠라겐",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Gigabolt_Man-O-War"
    },
    "x1": {
        "title": "Wikipedia · Mega Man X 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X_(video_game)#Plot"
    },
    "x2": {
        "title": "Wikipedia · Mega Man X2 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X2#Plot"
    },
    "x3": {
        "title": "Wikipedia · Mega Man X3 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X3#Plot"
    },
    "x4": {
        "title": "Wikipedia · Mega Man X4 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X4#Plot"
    },
    "x5": {
        "title": "Wikipedia · Mega Man X5 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X5#Plot"
    },
    "x6": {
        "title": "Wikipedia · Mega Man X6 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X6#Plot"
    },
    "x7": {
        "title": "Wikipedia · Mega Man X7 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X7#Plot"
    },
    "x8": {
        "title": "Wikipedia · Mega Man X8 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_X8#Plot"
    },
    "cast": {
        "title": "Wikipedia · 등장인물",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/List_of_Mega_Man_characters"
    },
    "alia": {
        "title": "MMKB · 에이리아",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Alia"
    },
    "iris": {
        "title": "MMKB · 아이리스",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Iris"
    },
    "lumine": {
        "title": "MMKB · 루미네",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Lumine"
    },
    "x": {
        "title": "MMKB · 엑스",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/X"
    },
    "zero": {
        "title": "MMKB · 제로",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Zero"
    },
    "zero2": {
        "title": "Wikipedia · Mega Man Zero 2 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_Zero_2#Plot"
    },
    "zero3": {
        "title": "Wikipedia · Mega Man Zero 3 줄거리",
        "kind": "백과사전",
        "url": "https://en.wikipedia.org/wiki/Mega_Man_Zero_3#Plot"
    },
    "x1route": {
        "title": "GameFAQs · Reeve의 X1 공략",
        "kind": "팬 공략",
        "url": "https://gamefaqs.gamespot.com/snes/588479-mega-man-x/faqs/12768"
    },
    "x1guide": {
        "title": "RetroMaggedon · SNES판 X1 보스 공략",
        "kind": "팬 공략",
        "url": "https://retromaggedon.com/index.php/mega-man-x-snes-boss-guide/"
    },
    "chill_penguin": {
        "title": "MMKB · Chill Penguin",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Chill_Penguin"
    },
    "spark_mandrill": {
        "title": "MMKB · Spark Mandrill",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Spark_Mandrill"
    },
    "armored_armadillo": {
        "title": "MMKB · Armored Armadillo",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Armored_Armadillo"
    },
    "launch_octopus": {
        "title": "MMKB · Launch Octopus",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Launch_Octopus"
    },
    "boomer_kuwanger": {
        "title": "MMKB · Boomer Kuwanger",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Boomer_Kuwanger"
    },
    "sting_chameleon": {
        "title": "MMKB · Sting Chameleon",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Sting_Chameleon"
    },
    "storm_eagle": {
        "title": "MMKB · Storm Eagle",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Storm_Eagle"
    },
    "flame_mammoth": {
        "title": "MMKB · Flame Mammoth",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Flame_Mammoth"
    },
    "dark_necrobat": {
        "title": "MMKB · Dark Necrobat 약점",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Dark_Necrobat"
    },
    "x4bosses": {
        "title": "MMKB · X4 보스·무기 표",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X4#Bosses"
    },
    "x8bosses": {
        "title": "MMKB · X8 보스·무기 표",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X8#Bosses"
    },
    "light": {
        "title": "MMKB · 라이트 박사",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Doctor_Thomas_Light"
    },
    "wily": {
        "title": "MMKB · 와일리 박사",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Doctor_Albert_W._Wily"
    },
    "cain": {
        "title": "MMKB · 케인 박사",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Dr._Cain"
    },
    "magma_dragoon": {
        "title": "MMKB · 마그마드 드라군",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Magma_Dragoon"
    },
    "blizzard_wolfang": {
        "title": "MMKB · 블리자드 볼팡",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Blizzard_Wolfang"
    },
    "maverick": {
        "title": "MMKB · 이레귤러",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Maverick"
    },
    "reploid": {
        "title": "MMKB · 레플리로이드",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Reploid"
    },
    "virus": {
        "title": "MMKB · 이레귤러 바이러스",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Maverick_Virus"
    },
    "isoc": {
        "title": "MMKB · 아이조크",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Isoc"
    },
    "creator_qa_2008": {
        "title": "캡콤 공식 Q&A · 2008년 이나후네 인터뷰 보존본",
        "kind": "공식 Q&A · 외부 보존본",
        "url": "https://themmnetwork.com/interviews/interviews-inafune-san-answers-your-questions-9508/",
        "accessNote": "The Mega Man Network가 캡콤 Unity의 원문을 변경 없이 보존했다고 밝힌 페이지입니다."
    },
    "creator_x4_1997": {
        "title": "세가 새턴 매거진 · X4 개발진 인터뷰 영어 번역",
        "kind": "잡지 인터뷰 · 비공식 번역",
        "url": "https://shmuplations.com/megamanx4/",
        "accessNote": "shmuplations의 영어 번역을 확인했습니다. 일본어 잡지 원본과 대조한 완역은 아닙니다."
    },
    "creator_play_2004": {
        "title": "Play 2004년 4월호 · 이나후네 인터뷰 보존본",
        "kind": "잡지 인터뷰 · 전사 보존본",
        "url": "https://themmnetwork.com/interviews/interviews-the-best-damn-mega-man-feature-period-play-magazine-042604/",
        "accessNote": "The Mega Man Network가 보존한 Chris Hoffman의 Play 기사 전사본입니다."
    },
    "creator_aizu_2015": {
        "title": "아이즈 타쿠야의 USGamer 인터뷰 · 인용 보도",
        "kind": "인터뷰 인용 보도 · 2차 자료",
        "url": "https://nintendoeverything.com/inti-creates-wasnt-originally-planning-on-making-any-mega-man-zero-sequels/",
        "accessNote": "Nintendo Everything이 2015년 4월 21일 보도한 인터뷰 인용문을 확인했습니다. USGamer 원문 전체를 확인한 항목은 아닙니다."
    },
    "creator_zero_soundtrack": {
        "title": "인티 크리에이츠 · 록맨 제로 사운드트랙 공식 설정 소개",
        "kind": "개발사 공식 웹 자료",
        "url": "https://www.inti.co.jp/cd/zero1/news.htm",
        "accessNote": "공식 웹페이지에 공개된 인물·설정 설명을 확인했습니다. CD 부속 책자의 전체 내용은 확인하지 않았습니다. 페이지 최종 갱신 표시는 2014년 9월 26일이며 최초 발표 연도는 명시되어 있지 않습니다."
    },
    "creator_x1_design": {
        "title": "Rockman Corner · 행사에서 공개된 X1 인물 관계 기획서 소개",
        "kind": "개발 문서 소개 · 보도·번역 경로",
        "url": "https://www.rockman-corner.com/2018/02/mega-man-x1-internal-design-document.html",
        "accessNote": "2018년 행사 공개 문서에 대한 소개 기사와 번역 설명을 확인했습니다. 1993년 작성이라는 설명은 기사가 인용한 증언에 근거한 추정입니다."
    },
    "motif_x_name": {
        "title": "캡콤 · More words on the art and science of localization",
        "kind": "공식 블로그 해설 · 2014-08-29",
        "url": "https://news.capcomusa.com/lets/browse/more-words-on-the-art-and-science-of-localization",
        "accessNote": "GregaMan의 현지화 관련 글. 이름 X와 가능성을 연결하는 설명이며 작명자 인터뷰는 아닙니다."
    },
    "motif_jacob_text": {
        "title": "창세기 28:12 · 야곱의 꿈",
        "kind": "성경 본문 · NIV 영어 번역",
        "url": "https://www.biblegateway.com/passage/?search=Genesis%2028%3A12&version=NIV"
    },
    "motif_sodom_text": {
        "title": "창세기 19:24 · 소돔과 고모라",
        "kind": "성경 본문 · NIV 영어 번역",
        "url": "https://www.biblegateway.com/passage/?search=Genesis%2019%3A24&version=NIV"
    },
    "motif_leviathan_text": {
        "title": "이사야 27:1 · 레비아탄",
        "kind": "성경 본문 · NIV 영어 번역",
        "url": "https://www.biblegateway.com/passage/?search=Isaiah%2027%3A1&version=NIV"
    },
    "motif_milton_text": {
        "title": "존 밀턴 · 실낙원 제2권 (1674년판)",
        "kind": "문학 원문 · Poetry Foundation 수록",
        "url": "https://www.poetryfoundation.org/poems/45738/paradise-lost-book-2-1674-version"
    },
    "motif_harpies": {
        "title": "Theoi · Harpyiai",
        "kind": "신화 해설·고전 문헌 번역 인용 모음",
        "url": "https://www.theoi.com/Pontios/Harpyiai.html"
    },
    "motif_fafnir_origin": {
        "title": "Wikipedia · Fáfnir",
        "kind": "신화 해설 · 2차 자료",
        "url": "https://en.wikipedia.org/wiki/F%C3%A1fnir"
    },
    "motif_fefnir": {
        "title": "MMKB · Fighting Fefnir",
        "kind": "팬 위키 · 디자인·명칭 정리",
        "url": "https://megaman.fandom.com/wiki/Fighting_Fefnir"
    },
    "motif_yggdrasil_origin": {
        "title": "Wikipedia · Yggdrasil",
        "kind": "신화 해설 · 2차 자료",
        "url": "https://en.wikipedia.org/wiki/Yggdrasil"
    },
    "motif_yggdrasil": {
        "title": "MMKB · Yggdrasil",
        "kind": "팬 위키 · 제로 2 장소·사건 정리",
        "url": "https://megaman.fandom.com/wiki/Yggdrasil"
    },
    "motif_ragnarok_origin": {
        "title": "Wikipedia · Ragnarök",
        "kind": "신화 해설 · 2차 자료",
        "url": "https://en.wikipedia.org/wiki/Ragnar%C3%B6k"
    },
    "motif_ragnarok": {
        "title": "MMKB · Ragnarok",
        "kind": "팬 위키 · 제로 4 병기·사건 정리",
        "url": "https://megaman.fandom.com/wiki/Ragnarok"
    },
    "mystery_wily_connection": {
        "title": "Rockman Corner · Serges and Isoc — The Wily Connection Explained",
        "kind": "팬 연구 기사 · 대사·설정 자료 인용",
        "url": "https://www.rockman-corner.com/2020/05/serges-and-isoc-wily-connection_31.html",
        "accessNote": "2020년 Zan Sidera의 기고문과 인용 자료 목록을 확인했습니다. 기사의 추론을 개발사의 공식 결론으로 취급하지 않습니다."
    },
    "mystery_axl": {
        "title": "MMKB · Axl",
        "kind": "팬 위키 · 작품별 사건 정리",
        "url": "https://megaman.fandom.com/wiki/Axl"
    },
    "mystery_light": {
        "title": "MMKB · Doctor Thomas Light",
        "kind": "팬 위키 · 작품별 사건·행동 정리",
        "url": "https://megaman.fandom.com/wiki/Doctor_Thomas_Light"
    },
    "mystery_x7_script": {
        "title": "MMKB · X7 제로 스토리 대사",
        "kind": "팬 위키 수록 · 게임 대사 전사본",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X7_Script_%28Zero%27s_story%29"
    },
    "world_continuity": {
        "title": "The Mega Man Network · Canon, Continuity, and the Mega Man Franchise",
        "kind": "팬 연구 기사 · 연속성 정리",
        "url": "https://themmnetwork.com/2010/06/20/canon-continuity-and-the-mega-man-franchise/",
        "accessNote": "2010년 팬 사이트의 연속성 연구 글입니다. 글이 인용하는 설정집 원본 전체를 직접 대조하지 않았습니다."
    },
    "world_zero_zx": {
        "title": "캡콤 · Mega Man Zero/ZX Legacy Collection 소개",
        "kind": "개발사 공식 소개 · 2019-08-27",
        "url": "https://news.capcomusa.com/capkel/blog/2019/08/27/mission-start-mega-man-zerozx-legacy-collection-busts-out-january-21st"
    },
    "world_exe_interview": {
        "title": "코로코로 온라인 · 에구치 마사카즈 개발자 인터뷰 후편",
        "kind": "개발자 인터뷰 · 일본어",
        "url": "https://corocoro-news.jp/news/120347/",
        "accessNote": "에그제의 세계를 기존 로봇 록맨과 평행한 세계로 설명한 문답을 참고했습니다."
    },
    "world_robot_timeline": {
        "title": "MMKB · Original Mega Man universe",
        "kind": "팬 위키 · 로봇 계열 연표",
        "url": "https://megaman.fandom.com/wiki/Original_Mega_Man_universe"
    },
    "world_network_timeline": {
        "title": "MMKB · Mega Man Battle Network universe",
        "kind": "팬 위키 · 네트워크 계열 연표",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_Battle_Network_universe"
    },
    "world_starforce": {
        "title": "MMKB · Mega Man Star Force 시리즈",
        "kind": "팬 위키 · 시리즈 배경 설명",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_Star_Force_%28series%29"
    },
    "serges": {
        "title": "MMKB · 사게스",
        "kind": "팬 위키",
        "url": "https://megaman.fandom.com/wiki/Serges"
    },
    "review_mhx_manual": {
        "title": "캡콤 · Maverick Hunter X PSP 영문 설명서",
        "kind": "공식 설명서 · 리메이크 별도 판본",
        "url": "https://static.capcom.com/megaman/manuals/PSP_MMMHX_Manual.pdf",
        "accessNote": "공식 서버의 PDF를 내려받아 인쇄 쪽수 29~36의 8보스 소개를 직접 확인. PSP 리메이크의 설명이며 SFC 원작의 모든 표현과 동일하다고 간주하지 않음."
    },
    "review_x5_manual": {
        "title": "VGMuseum · X5 영문 설명서 전사본",
        "kind": "공식 설명서의 팬 전사 · 원본 대조 미완료",
        "url": "https://www.vgmuseum.com/mrp/manual-mmx5.htm",
        "accessNote": "Boss Characters, 인쇄 쪽수 18~21에 해당하는 전사문 확인. 명칭·번역 오류 가능성이 있어 일본어 설명서와 원 게임은 별도 대조 필요."
    },
    "review_locations": {
        "title": "MMKB · X 시리즈 장소",
        "kind": "팬 위키 · 스테이지 목록",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X_series_locations",
        "accessNote": "검색 제공 본문의 X3·X4 스테이지와 보스 대응만 확인. 장소가 직업·소속을 증명하지는 않음."
    },
    "review_x3_play": {
        "title": "MMKB · X3 플레이 기록",
        "kind": "팬 가이드 · 행동 설명",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X3_Walkthrough",
        "accessNote": "검색 제공 Toxic Seahorse의 액체화와 이동 설명 확인. 과거 경력이나 살인 사건의 근거가 아님."
    },
    "review_x6_x": {
        "title": "MMKB · X6 엑스 루트 전사본",
        "kind": "게임 본편의 팬 전사 · 영어판",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X6_Script_%28X%27s_story%29",
        "accessNote": "검색 제공 Scene 13 Recycle Lab의 메탈샤크 대화·에이리아 보고 확인. 일본어 실기와는 미대조."
    },
    "review_x6_zero": {
        "title": "MMKB · X6 제로 루트 전사본",
        "kind": "게임 본편의 팬 전사 · 영어판",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X6_Script_%28Zero%27s_story%29",
        "accessNote": "검색 제공 Shield Sheldon 전투 전후 대화와 Infinity Mijinion 격파 뒤 보고 확인. 어색한 영어 대사를 전지적 설정으로 확대하지 않음."
    },
    "review_x7_x": {
        "title": "MMKB · X7 엑스 루트 전사본",
        "kind": "게임 본편의 팬 전사 · 영어판",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X7_Script_%28X%27s_story%29",
        "accessNote": "검색 제공 토네이도 토니온·스플래시 워플라이 대화, DNA 제공 회상 확인. 실기·일본어 원문 대조는 남음."
    },
    "review_x7_axl": {
        "title": "MMKB · X7 엑셀 루트 전사본",
        "kind": "게임 본편의 팬 전사 · 영어판",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X7_Script_%28Axl%27s_story%29",
        "accessNote": "검색 제공 Scene 6·7·21~24·27 확인. 장면 번호는 이 전사본 기준. 실기 전체·일본어 원문 미대조."
    },
    "review_x7_roster": {
        "title": "MMKB · X7 보스와 스테이지",
        "kind": "팬 위키 · 게임 구성 목록",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X7",
        "accessNote": "검색 제공 Bosses 표에서 8보스와 스테이지 대응 확인. 과거 직업·소속 계급의 근거가 아님."
    },
    "review_x6_roster": {
        "title": "MMKB · X6 보스와 스테이지",
        "kind": "팬 위키 · 게임 구성 목록",
        "url": "https://megaman.fandom.com/wiki/Mega_Man_X6",
        "accessNote": "검색 제공 Bosses 표에서 8보스와 스테이지 대응 확인. 죽음의 경위나 조사단 이전 경력의 근거가 아님."
    },
    "review_magna_centipede": {
        "title": "MMKB · Magna Centipede",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Magna_Centipede",
        "accessNote": "검색 제공 본문 확인: 도입·Characteristics·History·Strategy. 설정집 인용은 재인용이며 원책 미확인. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_blizzard_buffalo": {
        "title": "MMKB · Blizzard Buffalo",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Blizzard_Buffalo",
        "accessNote": "검색 제공 본문 확인: History의 스키장 경비·감염, Strategy의 돌진·얼음, Other media의 만화판 구분. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_volt_catfish": {
        "title": "MMKB · Volt Catfish",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Volt_Catfish",
        "accessNote": "검색 제공 본문 확인: History의 비상 발전·도플러 시설 전력 공급. 만화의 엑스와의 우정은 게임 경력으로 합치지 않음. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_crush_crawfish": {
        "title": "MMKB · Crush Crawfish",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Crush_Crawfish",
        "accessNote": "검색 제공 본문 확인: History의 군사용 개발·피아 식별 결함·창고 보관·재가동. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_cyber_peacock": {
        "title": "MMKB · Cyber Peacock",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Cyber_Peacock",
        "accessNote": "검색 제공 본문 확인: 도입의 보안 프로그램과 Quotes의 엑스 능력 평가. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_rainy_turtloid": {
        "title": "MMKB · Rainy Turtloid",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Rainy_Turtloid",
        "accessNote": "검색 제공 본문 확인: History의 수질 정화·방어 성능·게이트와의 관계, Quotes의 충성, Strategy의 껍질 공격. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_shield_sheldon": {
        "title": "MMKB · Shield Sheldon",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Shield_Sheldon",
        "accessNote": "검색 제공 본문 확인: History의 경호·짐 박사·오인 판정. 대사는 X6 제로 루트와 함께 읽음. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_infinity_mijinion": {
        "title": "MMKB · Infinity Mijinion",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Infinity_Mijinion",
        "accessNote": "검색 제공 본문 확인: 도입·History의 대형 병기 시험 조종과 위험한 실험, Quotes의 일루미나 반응. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_flame_hyenard": {
        "title": "MMKB · Flame Hyenard",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Flame_Hyenard",
        "accessNote": "검색 제공 본문 확인: Characteristics의 고통 호소·헌터 비난, Strategy의 분신과 거대 메카니로이드. 감염 원인은 추정으로 기술됨. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_blaze_heatnix": {
        "title": "MMKB · Blaze Heatnix",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Blaze_Heatnix",
        "accessNote": "검색 제공 본문 확인: History의 고온 지하 조사와 Characteristics의 강자 우월 태도. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_alia": {
        "title": "MMKB · Alia",
        "kind": "팬 위키 · 본편·설정 자료 정리",
        "url": "https://megaman.fandom.com/wiki/Alia",
        "accessNote": "검색 제공 본문 확인: X6 과거 연구팀, 얌마크 비행 장치 파괴·스카라비치와 볼팡 처분 설명. 원 설정집 미대조. 게임 영상·설정집 원문 전체는 미대조."
    },
    "review_web_spider": {
        "title": "MMKB · Web Spider",
        "kind": "팬 위키 · 인물·소속 정리",
        "url": "https://megaman.miraheze.org/wiki/Web_Spider",
        "accessNote": "검색 제공 본문에서 보존 문서 도입의 소속·역할 / X4 장소 목록 확인. 설정집 원문·게임 화면 전체는 미대조."
    },
    "review_storm_owl": {
        "title": "MMKB · Storm Owl",
        "kind": "팬 위키 · 인물·소속 정리",
        "url": "https://megaman.fandom.com/wiki/Storm_Owl",
        "accessNote": "검색 제공 본문에서 History의 레플리포스 가담·항공 전력 운용 확인. 설정집 원문·게임 화면 전체는 미대조."
    },
    "review_slash_beast": {
        "title": "MMKB · Slash Beast",
        "kind": "팬 위키 · 인물·소속 정리",
        "url": "https://megaman.fandom.com/wiki/Slash_Beast",
        "accessNote": "검색 제공 본문에서 History의 군용 보급 열차 경비 확인. 설정집 원문·게임 화면 전체는 미대조."
    }
};

Object.assign(sourcesData, {
    atlas_x1_map:{title:'GCGX · X1 스테이지 선택 화면 설명',kind:'팬 작성 · 화면 기능 해설',url:'https://gcgx.games/rockmanx/info.html',accessNote:'ステージセレクト의 MAP 설명 확인. 공식 설명서 전사본으로 취급하지 않음.'},
    atlas_captown:{title:'CAPCOM Town · Mega Man X',kind:'공식 · 게임 및 설명서 제공 페이지',url:'https://captown.capcom.com/en/classic_games/29',accessNote:'공식 게임 페이지와 Original Game Manual 링크 확인. 통합 세계지도 제공을 뜻하지 않음.'},
    atlas_x5_capture:{title:'MobyGames · X5 Windows판 스테이지 선택 캡처',kind:'게임 화면 · 외부 보관처',url:'https://www.mobygames.com/game/3790/mega-man-x5/screenshots/windows/292421/',accessNote:'원본 이미지(640×480)를 직접 확인. 게임 그래픽과 캡처 보관처를 구분하며, 좌표·국가 해석의 근거로 쓰지 않음.'},
    atlas_map_limits:{title:'MMKB · 스테이지 선택 화면과 X6 포인터 불일치',kind:'팬 위키 · 화면 비교',url:'https://megaman.fandom.com/wiki/Stage_Select_Screen',accessNote:'검색 제공 본문에서 North Pole·Amazon 포인터 불일치 설명 확인. 모든 공식 지도·설정집을 조사했다는 뜻은 아님.'},
    atlas_weather:{title:'MMKB · Weather Control Stage',kind:'팬 위키 · 장소 정리',url:'https://megaman.fandom.com/wiki/Weather_Control_Stage',accessNote:'검색 제공 본문의 X2 시설 기능·와이어 헤티말 점거 확인. Xtreme 2 위치는 합치지 않음.'},
    atlas_doppler:{title:'MMKB · Dr. Doppler와 도플 타운',kind:'팬 위키 · 게임·별도 매체 구분',url:'https://megaman.fandom.com/wiki/Dr._Doppler',accessNote:'검색 제공 본문의 History / Background / Mega Man X3 확인. 만화판 항목 제외. 원 게임 도입부와 직접 대조는 미완료.'},
    atlas_laser:{title:'MMKB · Laser Institute (X6)',kind:'팬 위키 · 장소 정리',url:'https://megaman.fandom.com/wiki/Laser_Institute',accessNote:'검색 제공 본문의 도입부·Description·Trivia 확인. 현실 국가 좌표 추정은 채택하지 않음.'},
    atlas_circuit:{title:'MMKB · Central Circuit',kind:'팬 위키 · 임무 문구·장소 해설',url:'https://megaman.fandom.com/wiki/Central_Circuit',accessNote:'검색 제공 본문의 임무 문구와 도시 주행 코스 설명 확인. 캐나다 위치 추정은 제외.'},
    atlas_jakob:{title:'MMKB · Jakob Orbital Elevator',kind:'팬 위키 · 장소·사건 정리',url:'https://megaman.fandom.com/wiki/Jakob_Orbital_Elevator',accessNote:'검색 제공 본문의 시설·귀환 설명 확인. 정확한 지상 위치의 원전 대조는 보류.'},
    atlas_troia:{title:'Mega Man XZ · Troia Base',kind:'팬 작성 · 스테이지 해설',url:'https://www.megaman.retropixel.net/mmx/8/stages03.php',accessNote:'검색 제공 도입부의 전투 훈련 시설 설명 확인. 운영 기관·소속 전체를 추론하지 않음.'},
    atlas_x8_stages:{title:'Mega Man XZ · X8 스테이지 목록',kind:'팬 작성 · 스테이지 목록',url:'https://megaman.retropixel.net/mmx/8/stages.php',accessNote:'12개 지역의 이름과 목록을 확인. 지도 좌표의 근거는 아님.'}
});
Object.assign(sourcesData, {
    society_earth:{title:'소스넥스트 · 록맨 X8 공식 출시 보도자료 (2006-04-19)',kind:'판매사 공식 · 제품 소개',url:'https://www.sourcenext.info/sp/press/files/060419_rockman-x8/060419w_rockman-x8.pdf',accessNote:'PDF 1쪽 스토리에서 21XX년·지구 황폐화·인류의 우주 진출 확인. 현실 국가·국경이나 인구 통계는 제시하지 않음.'},
    society_x1_manual:{title:'닌텐도 보관 · Mega Man X 영문 설명서',kind:'공식 설명서 · 공식 보관처',url:'https://www.nintendo.co.jp/clvs/manuals/common/pdf/CLV-P-SABCE.pdf',accessNote:'공식 PDF의 제공과 검색 본문 확인. 케인 일지 세부 문장은 아래 VGMuseum 전사본으로 읽었으며 모든 페이지를 시각 대조하지 않음. 영문판의 표현·날짜를 일본어판과 자동 통합하지 않음.'},
    society_cain_journal:{title:'VGMuseum · X1 영문 설명서 케인 일지 전사본',kind:'공식 설명서의 팬 전사 · 영문판',url:'https://www.vgmuseum.com/mrp/manual-mmx.htm',accessNote:'6~10쪽에 해당하는 본문을 직접 읽음. 엑스 발견, 공동 개발·노동, 생산 중단 논의, council의 헌터 창설, 시민 피난을 확인. council의 인적 구성·관할 범위는 이 자료만으로 확정하지 않음.'},
    society_cain_official:{title:'CAPCOM · Marvel vs. Capcom: Infinite 엑스 소개',kind:'개발사 공식 · 크로스오버 인물 소개',url:'https://www.marvelvscapcominfinite.com/characters/x/index.html',accessNote:'케인의 발견·역설계·완전 해석 불가·레플리로이드 개발 설명을 직접 확인. 울트론 시그마 등 크로스오버 사건은 X 본편에 합치지 않음.'},
    society_x6_manual:{title:'Mega Man X Collection 영문 설명서 · 외부 보관본',kind:'공식 설명서 · 외부 보관처',url:'https://db.hfsplay.fr/files/2023/08/26/Mega_Man_X_Collection_USA_e9dAnuS.pdf',accessNote:'검색 제공 X6 소개에서 지표의 유독 오염과 인간의 지하 피난 문구 확인. 원본 전체 페이지·피난 인원은 직접 대조하지 않음.'},
    society_x6_dialogue:{title:'MMKB · X6 엑스 루트 사회·피난 관련 대사',kind:'팬 위키 수록 · 게임 대사 전사본',url:'https://megaman.fandom.com/wiki/Mega_Man_X6_Script_%28X%27s_story%29',accessNote:'검색 제공 Scene 4·21 및 Shield Sheldon 대화 확인. 아이조크의 선전, 게이트의 인간 비난, 시그너스의 상호 협력 주장을 화자별로 구분. 일본어 원문·실기 전체 미대조.'},
    society_x4_speech:{title:'MMKB · X4 제너럴의 독립 선언 전사본',kind:'팬 위키 수록 · 게임 대사 전사본',url:'https://megaman.fandom.com/wiki/Mega_Man_X4_Script_%28X%27s_story%29',accessNote:'검색 제공 독립 선언과 도입부 시그마의 헌터 비난 확인. 인물의 주장이지 정부 구조·법률 전체의 객관적 설명은 아님. 만화판 시민 시위 장면을 본편 근거로 합치지 않음.'},
    society_zero_manual:{title:'닌텐도 보관 · Mega Man Zero 영문 설명서',kind:'공식 설명서 · 공식 보관처',url:'https://www.nintendo.com/eu/media/downloads/games_8/emanuals/game_boy_advance_8/Manual_GameBoyAdvance_MegaManZero_EN_DE_FR.pdf',accessNote:'검색 제공 REPLOID REBELLION! 본문에서 정부의 부당한 레플리로이드 체포와 인간 연구자 시엘의 동행 확인. PDF 제공은 확인했으며 원본 전 페이지의 시각 대조는 미완료.'},
    society_elf_war:{title:'MMKB · Zero 3 시엘의 요정 전쟁 기록 전사본',kind:'팬 위키 수록 · 게임 대사 전사본',url:'https://megaman.fandom.com/wiki/Mega_Man_Zero_3/Script',accessNote:'검색 제공 Scene 32 / File #945388에서 약 90%의 레플리로이드·60%의 인간 피해 문구 확인. 서로 다른 집단의 전쟁 피해율이며 인구 구성비가 아님. 실기·일본어판 미대조.'},
    society_zero4_people:{title:'Neoseeker · Zero 4 영어 게임 전사본',kind:'팬 작성 · 게임 대사 전사본',url:'https://www.neoseeker.com/megaman-zero-4/faqs/112506-mega-man-zero-4-script.html',accessNote:'검색 제공 네쥬의 자기소개(인간·기자)와 인간 피난민 관련 문답 확인. 전체 페이지 접근은 제한됨. 이후 인물 행적은 본문 확인 범위와 분리.'},
    society_zero4_weil:{title:'Wikipedia · Zero 4 줄거리 및 바일 대사 인용',kind:'2차 자료 · 게임 대사 인용 포함',url:'https://en.wikipedia.org/wiki/Mega_Man_Zero_4',accessNote:'검색 제공 줄거리의 인간 피난·바일 통치 및 자신이 인간임을 밝히는 대사 인용 확인. 게임 영상·설정집 전체 미대조.'},
    society_zxa_manual:{title:'CAPCOM · Mega Man ZX Advent 영문 설명서',kind:'공식 설명서 · 개발사 서버',url:'https://static.capcom.com/megaman/manuals/DS_MMAD_Manual.pdf',accessNote:'검색 제공 PROLOGUE에서 레기온, 인간의 기계화와 레플리로이드의 인공 수명 제도 확인. 직접 열기는 타임아웃으로 전체 파일 대조 미완료. X 시대에 소급하지 않음.'},
    society_legends_script:{title:'GameFAQs · Legends 2 영어 게임 전사본 (Estil)',kind:'팬 작성 · 게임 대사 전사본',url:'https://gamefaqs.gamespot.com/ps/197897-mega-man-legends-2/faqs/18535',accessNote:'검색 제공 마스터의 회상, 유나의 재초기화 설명, 배럴의 문명 기원 발언 확인. 현재 주민과 과거 인간의 구분에 한해 사용. ZX에서 대시까지의 변화 과정을 확정하지 않음.'},
    society_day_sigma:{title:'MMKB · The Day of Σ 줄거리·판본 차이',kind:'팬 위키 · 리메이크 부속 영상 해설',url:'https://megaman.fandom.com/wiki/The_Day_of_%CE%A3',accessNote:'검색 제공 아벨 시티 미사일 공격·케인 연구소 피격과 원작 X2·X3의 차이 확인. 케인의 최후를 X1~X8 전체에 확정하지 않음.'},
    society_command_mission:{title:'MMKB · Command Mission 줄거리',kind:'팬 위키 · 외전 게임 정리',url:'https://megaman.fandom.com/wiki/Mega_Man_X%3A_Command_Mission',accessNote:'검색 제공 기가 시티 사건·Federation의 군사 개입 설명 확인. 외전의 기관명을 X1~X8 통치 구조의 확정 근거로 사용하지 않음.'}
});
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sourcesData };
} else {
    window.sourcesData = sourcesData;
}
