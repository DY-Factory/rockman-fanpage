// 확인 범위와 불확실성을 함께 보존하는 자료.
const bossesData = [
    {
        "id": "chill_penguin",
        "name": "아이시 펭기고",
        "english_name": "Chill Penguin",
        "title": "펭귄형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "파이어 웨이브",
        "weapon": "샷건 아이스",
        "profile": "추운 지역에서 활동하는 펭귄형 전직 헌터. 설산 기지에서 얼음과 슬라이딩 공격으로 엑스를 상대한다.",
        "image_placeholder": "chill_penguin.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "설산 기지",
            "playableCharacter": "엑스",
            "weaknessWeapon": "파이어 웨이브",
            "rewardWeapon": "샷건 아이스",
            "patterns": [
                {
                    "name": "얼음탄·슬라이딩",
                    "response": "낮게 날아오는 얼음탄과 지상 돌진은 벽 타기나 점프로 넘긴다. 돌진이 끝난 뒤 공격한다."
                },
                {
                    "name": "얼음 조각상·눈보라",
                    "response": "중앙 손잡이에 매달리면 바람에 밀리는 위치를 확인한다. 조각상과 접촉하지 않도록 높은 위치로 피한다."
                }
            ],
            "tactic": "첫 보스로 선택했다면 차지 버스터로 빈틈을 노린다. 파이어 웨이브가 있다면 가까운 거리에서 약점을 공략하되 슬라이딩에 주의한다.",
            "items": [
                "풋 파츠: 진행 경로의 캡슐에서 대시 능력을 얻는다.",
                "라이프 업: 바깥 구역의 구조물 위 이글루를 파이어 웨이브로 파괴한다."
            ],
            "stageEffect": "격파하면 버닝 나우만더 스테이지의 용암이 얼어 이동이 쉬워진다.",
            "sources": [
                "chill_penguin",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "chill_penguin",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "추운 지역에서 활동하는 펭귄형 전직 헌터. 설산 기지에서 얼음과 슬라이딩 공격으로 엑스를 상대한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.29",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제13극지부대 출신. 남극 임무에 불만을 품고 시그마의 반란에 합류한다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.29"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "spark_mandrill",
        "name": "스파크 맨드릴러",
        "english_name": "Spark Mandrill",
        "title": "맨드릴형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "샷건 아이스",
        "weapon": "일렉트릭 스파크",
        "profile": "시그마의 반란에 가담한 맨드릴형 전직 헌터. 발전소를 점거하고 전기와 돌진 공격을 사용한다.",
        "image_placeholder": "spark_mandrill.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "발전소",
            "playableCharacter": "엑스",
            "weaknessWeapon": "샷건 아이스",
            "rewardWeapon": "일렉트릭 스파크",
            "patterns": [
                {
                    "name": "대시 펀치",
                    "response": "빠르게 돌진하며 벽을 흔든다. 벽에만 매달리지 말고 충돌 전에 점프로 피한다."
                },
                {
                    "name": "전기탄·천장 이동",
                    "response": "바닥과 벽을 타는 전기탄을 넘고, 천장에서 떨어지는 위치에서 벗어난다."
                }
            ],
            "tactic": "샷건 아이스로 얼린 뒤 해동 동작이 끝나는 시점에 다시 맞힌다. 너무 일찍 연사하면 무기 에너지만 낭비한다.",
            "items": [
                "라이프 업: 스테이지 안쪽의 높은 발판에 있다.",
                "서브 탱크: 초반 하단 통로의 벽 너머에서 부메랑 커터로 회수한다."
            ],
            "stageEffect": "스톰 이글리드를 먼저 격파하면 발전소 초반의 전기 장애물이 줄어든다.",
            "sources": [
                "spark_mandrill",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "spark_mandrill",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "시그마의 반란에 가담한 맨드릴형 전직 헌터. 발전소를 점거하고 전기와 돌진 공격을 사용한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.34",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제17부대 출신. 상관 시그마를 따라 반란에 가담하고 발전소를 점거한다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.34"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "armored_armadillo",
        "name": "아머 알마지",
        "english_name": "Armored Armadillo",
        "title": "아르마딜로형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "일렉트릭 스파크",
        "weapon": "롤링 실드",
        "profile": "단단한 장갑을 두른 아르마딜로형 전직 헌터. 몸을 말아 튕기며 이동하고 정면 공격을 방어한다.",
        "image_placeholder": "armored_armadillo.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "지하 광산",
            "playableCharacter": "엑스",
            "weaknessWeapon": "일렉트릭 스파크",
            "rewardWeapon": "롤링 실드",
            "patterns": [
                {
                    "name": "구르기",
                    "response": "벽과 바닥을 튕겨 다니는 경로를 관찰하고 틈으로 이동한다. 장갑이 남아 있으면 구르는 동안 공격이 통하지 않는다."
                },
                {
                    "name": "방어·반격탄",
                    "response": "방어 중 차지탄을 쏘면 반격을 유발한다. 몸을 펴는 순간이나 사격 동작의 빈틈을 노린다."
                }
            ],
            "tactic": "일렉트릭 스파크로 장갑을 벗기는 것이 우선이다. 장갑이 사라진 뒤에는 버스터로도 안정적으로 공격할 수 있다.",
            "items": [
                "서브 탱크: 첫 번째 굴착기가 지나간 뒤 뒤쪽 공간을 확인한다.",
                "라이프 업: 두 번째 굴착기보다 앞서거나 먼저 파괴해 위쪽 발판을 확보한다."
            ],
            "stageEffect": "이 스테이지에는 별도 조건으로 등장하는 파동권 캡슐도 있다. 일반 아머 파츠와는 다른 숨겨진 요소다.",
            "sources": [
                "armored_armadillo",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "armored_armadillo",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "단단한 장갑을 두른 아르마딜로형 전직 헌터. 몸을 말아 튕기며 이동하고 정면 공격을 방어한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.31",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제8기갑부대 대장. 명령에 대한 복종과 탄약 확보를 위한 광산 점거가 설명된다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.31"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "launch_octopus",
        "name": "런처 오크토펄드",
        "english_name": "Launch Octopus",
        "title": "문어형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "롤링 실드",
        "weapon": "호밍 토피도",
        "profile": "어뢰와 촉수를 사용하는 문어형 전직 헌터. 수중 전투에서 추적탄과 소용돌이로 상대를 압박한다.",
        "image_placeholder": "launch_octopus.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "해양 기지",
            "playableCharacter": "엑스",
            "weaknessWeapon": "롤링 실드",
            "rewardWeapon": "호밍 토피도",
            "patterns": [
                {
                    "name": "어뢰·추적탄",
                    "response": "날아오는 탄을 버스터로 제거하며 이동 공간을 만든다. 보스와 겹치지 않도록 거리를 유지한다."
                },
                {
                    "name": "소용돌이·흡수",
                    "response": "회전하며 끌어당기면 반대 방향으로 벗어난다. 붙잡히면 자신의 체력을 빼앗기고 보스가 회복한다."
                }
            ],
            "tactic": "지상에 내려왔을 때 롤링 실드를 맞힌다. 부메랑 커터를 여러 번 맞혀 촉수를 끊으면 일부 공격을 봉쇄할 수 있다.",
            "items": [
                "라이프 업: 해상 함선을 가라앉혀 열린 해저 통로로 들어가 내부의 적을 처치한 뒤 찾는다."
            ],
            "stageEffect": "격파하면 스팅 카멜레오 스테이지의 구덩이에 물이 차서 라이프 업 접근이 쉬워진다.",
            "sources": [
                "launch_octopus",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "launch_octopus",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "어뢰와 촉수를 사용하는 문어형 전직 헌터. 수중 전투에서 추적탄과 소용돌이로 상대를 압박한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.36",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제6함대 출신. 전략과 전투의 우아함을 중시하며 해상 교통을 차단하려 한다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.36"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "boomer_kuwanger",
        "name": "부메랑 쿠왕거",
        "english_name": "Boomer Kuwanger",
        "title": "사슴벌레형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "호밍 토피도",
        "weapon": "부메랑 커터",
        "profile": "고속 이동과 투척 무기를 사용하는 사슴벌레형 전직 헌터. 높은 탑의 정상에서 엑스와 싸운다.",
        "image_placeholder": "boomer_kuwanger.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "타워",
            "playableCharacter": "엑스",
            "weaknessWeapon": "호밍 토피도",
            "rewardWeapon": "부메랑 커터",
            "patterns": [
                {
                    "name": "고속 이동·잡기",
                    "response": "근접하면 붙잡혀 천장으로 던져진다. 출현 위치를 확인하면서 벽 타기로 거리를 벌린다."
                },
                {
                    "name": "부메랑 커터",
                    "response": "던진 칼날은 되돌아온다. 처음 지나간 뒤에도 복귀 경로를 확인한다."
                }
            ],
            "tactic": "호밍 토피도로 빠른 이동을 추적한다. 피격 직후 무적 시간이 끝나고 다시 움직일 때 다음 탄을 발사한다.",
            "items": [
                "라이프 업: 탑 외벽의 높은 발판에 있다. 획득 후 재방문해 부메랑 커터로 가져오는 방법이 편하다."
            ],
            "stageEffect": "부메랑 커터는 적 공격 외에 일부 아이템을 끌어오는 데도 쓸 수 있다.",
            "sources": [
                "boomer_kuwanger",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "boomer_kuwanger",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "고속 이동과 투척 무기를 사용하는 사슴벌레형 전직 헌터. 높은 탑의 정상에서 엑스와 싸운다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.35",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제17부대 출신. 선악보다 분석과 계산에 따라 반란 참여를 결정한다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.35"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "sting_chameleon",
        "name": "스팅 카멜레오",
        "english_name": "Sting Chameleon",
        "title": "카멜레온형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "부메랑 커터",
        "weapon": "카멜레온 스팅",
        "profile": "주변과 동화하는 위장 능력을 지닌 카멜레온형 전직 헌터. 혀와 가시로 여러 방향에서 공격한다.",
        "image_placeholder": "sting_chameleon.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "삼림 기지",
            "playableCharacter": "엑스",
            "weaknessWeapon": "부메랑 커터",
            "rewardWeapon": "카멜레온 스팅",
            "patterns": [
                {
                    "name": "투명화·혀 공격",
                    "response": "투명한 동안에는 공격이 통하지 않는다. 모습을 드러낼 위치를 보고 혀가 뻗는 방향에서 벗어난다."
                },
                {
                    "name": "가시탄·낙하 가시",
                    "response": "부채꼴 탄의 틈으로 이동한다. 천장에 매달리면 떨어지는 가시 사이의 안전한 공간을 찾는다."
                }
            ],
            "tactic": "부메랑 커터를 맞히면 벽에서 떨어진다. 재등장한 뒤 다시 맞히는 흐름을 유지하되 무적 중 연사는 피한다.",
            "items": [
                "보디 파츠: 동굴 입구 위쪽의 길로 올라가 중간 보스를 쓰러뜨린다.",
                "라이프 업: 동굴 입구 아래 구덩이에서 찾는다. 런처 오크토펄드 격파 후 수중 점프를 활용하면 편하다."
            ],
            "stageEffect": "보디 파츠는 받는 피해를 줄인다. 생존이 어렵다면 일찍 확보할 만한 강화다.",
            "sources": [
                "sting_chameleon",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "sting_chameleon",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "주변과 동화하는 위장 능력을 지닌 카멜레온형 전직 헌터. 혀와 가시로 여러 방향에서 공격한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.32",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제9특수부대 레인저. 위장·기습을 구사하며 숲 기지 방어를 맡는다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.32"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "storm_eagle",
        "name": "스톰 이글리드",
        "english_name": "Storm Eagle",
        "title": "독수리형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "카멜레온 스팅",
        "weapon": "스톰 토네이도",
        "profile": "제7공수부대를 이끌던 독수리형 헌터. 비행과 강풍을 이용해 공중 전함 위에서 싸운다.",
        "image_placeholder": "storm_eagle.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "공항·공중 전함",
            "playableCharacter": "엑스",
            "weaknessWeapon": "카멜레온 스팅",
            "rewardWeapon": "스톰 토네이도",
            "patterns": [
                {
                    "name": "강풍·토네이도",
                    "response": "바람 자체보다 발판 밖으로 밀려나는 것이 위험하다. 중앙을 유지하며 바람을 거슬러 대시한다."
                },
                {
                    "name": "급강하·알",
                    "response": "화면 밖에서 비스듬히 내려오면 경로에서 벗어난다. 알은 부화 전에 부수거나 나온 작은 적을 제거한다."
                }
            ],
            "tactic": "카멜레온 스팅이 약점이다. 아직 없다면 바람을 버티면서 착지와 비행 사이에 차지 버스터를 맞힌다.",
            "items": [
                "헤드 파츠: 중반 탑 오른쪽으로 내려가 연료통 뒤 숨은 통로를 찾는다.",
                "서브 탱크: 초반 승강 포대를 타고 관제탑 창문 안으로 들어간다.",
                "라이프 업: 시작 지점 승강 플랫폼의 높은 곳에서 왼쪽 건물로 이동한다."
            ],
            "stageEffect": "격파 후 전함이 발전소에 추락하여 스파크 맨드릴러 스테이지의 일부 위험 요소가 줄어든다.",
            "sources": [
                "storm_eagle",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "storm_eagle",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "제7공수부대를 이끌던 독수리형 헌터. 비행과 강풍을 이용해 공중 전함 위에서 싸운다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.33",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제7항공부대 대장. 시그마에 저항했지만 패배한 뒤 그를 따른다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.33"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "flame_mammoth",
        "name": "버닝 나우만더",
        "english_name": "Flame Mammoth",
        "title": "나우만코끼리형 보스",
        "series": "X1",
        "appearances": [
            "X1"
        ],
        "affiliation": "원작 활동 지역·경력은 개별 자료 참고 / 리메이크 소속은 아래 보충",
        "weakness": "스톰 토네이도",
        "weapon": "파이어 웨이브",
        "profile": "거대한 몸과 화염을 사용하는 매머드형 전직 헌터. 컨베이어 벨트 위에서 기름과 불꽃을 함께 사용한다.",
        "image_placeholder": "flame_mammoth.png",
        "guide": {
            "version": "록맨 X · SFC/SNES 원작 기준",
            "stage": "공장",
            "playableCharacter": "엑스",
            "weaknessWeapon": "스톰 토네이도",
            "rewardWeapon": "파이어 웨이브",
            "patterns": [
                {
                    "name": "점프 착지",
                    "response": "착지 때 바닥에 있으면 경직된다. 내려오는 순간 점프하거나 벽에 붙는다."
                },
                {
                    "name": "기름·불꽃·벨트 전환",
                    "response": "기름 위로 불이 붙는 구역을 피한다. 울음과 함께 벨트 방향이 바뀌므로 이동 방향을 다시 확인한다."
                }
            ],
            "tactic": "스톰 토네이도로 거리를 두고 공격한다. 부메랑 커터로 코를 끊으면 기름 발사와 벨트 조작을 막을 수 있다.",
            "items": [
                "암 파츠: 초반 높은 천장 통로의 블록을 헤드 파츠로 부수고 올라간다. 풋 파츠도 준비한다.",
                "서브 탱크: 상단 구역의 블록 뒤에 있다.",
                "라이프 업: 아래쪽 용암 구역에 있다. 아이시 펭기고 격파 후 얼어붙은 바닥으로 접근하면 안전하다."
            ],
            "stageEffect": "아이시 펭기고를 먼저 격파하면 공장 바닥이 얼어 탐색이 쉬워진다.",
            "sources": [
                "flame_mammoth",
                "x1guide",
                "x1route"
            ],
            "reviewedAt": "2026-10-24"
        },
        "sources": [
            "flame_mammoth",
            "boss_motif_index",
            "review_mhx_manual"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "거대한 몸과 화염을 사용하는 매머드형 전직 헌터. 컨베이어 벨트 위에서 기름과 불꽃을 함께 사용한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "원작: 기존 개별 인물 자료 / 리메이크: 영문 설명서 p.30",
            "edition": "X1 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": {
                "kind": "official-remake",
                "text": "제4육상부대 대장. 약자를 괴롭혀 부하들의 지지를 받지 못한다.",
                "source": "review_mhx_manual",
                "locator": "PSP 영문 설명서 인쇄 p.30"
            },
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다."
    },
    {
        "id": "wire_sponge",
        "name": "와이어 헤치말",
        "english_name": "Wire Sponge",
        "title": "수세미 식물형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "기상 제어 센터",
        "weakness": "소닉 슬라이서",
        "weapon": "스트라이크 체인",
        "profile": "수세미 식물을 모티프로 한 레플리로이드. 와이어를 벽이나 천장에 걸어 이동하고, 씨앗에서 자라나는 가시 덩굴로 전장을 압박한다.",
        "image_placeholder": "wire_sponge.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_wire"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "수세미 식물을 모티프로 한 레플리로이드. 와이어를 벽이나 천장에 걸어 이동하고, 씨앗에서 자라나는 가시 덩굴로 전장을 압박한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "Strategy의 Strike Chain·Hanging, Trivia의 hechima 설명",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "wheel_gator",
        "name": "휠 엘리게이츠",
        "english_name": "Wheel Gator",
        "title": "악어형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "X2 스테이지 보스",
        "weakness": "스트라이크 체인",
        "weapon": "스핀 휠",
        "profile": "악어형 보스로 등장한다. 기존 소개의 부함장 계급과 살육만을 목적으로 한다는 설명은 근거가 부족해 보류했다.",
        "image_placeholder": "wheel_gator.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "악어형 보스로 등장한다. 기존 소개의 부함장 계급과 살육만을 목적으로 한다는 설명은 근거가 부족해 보류했다.",
            "pending": "부함장이라는 계급, 동료를 공격한 사건의 원전과 시점, 가담 동기는 별도 확인이 필요하다.",
            "correction": "부함장이라는 계급, 동료를 공격한 사건의 원전과 시점, 가담 동기는 별도 확인이 필요하다.",
            "locator": "형태·등장 작품만 대조; 과거·성격은 보류",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "형태·등장 작품만 대조; 과거·성격은 보류. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "bubble_crab",
        "name": "버블 크랩로스",
        "english_name": "Bubble Crab",
        "title": "게형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "X2 스테이지 보스",
        "weakness": "스핀 휠",
        "weapon": "버블 스플래시",
        "profile": "게형 보스. 이전 소개에 있던 무기 거래 경력과 금전 목적의 상세 행동은 확인 범위를 벗어나 본문에서 제외했다.",
        "image_placeholder": "bubble_crab.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "게형 보스. 이전 소개에 있던 무기 거래 경력과 금전 목적의 상세 행동은 확인 범위를 벗어나 본문에서 제외했다.",
            "pending": "제6부대 경력·금전에 집착한다는 설명의 원전을 확보해야 한다.",
            "correction": "제6부대 경력·금전에 집착한다는 설명의 원전을 확보해야 한다.",
            "locator": "형태·등장 작품만 대조; 과거·성격은 보류",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "형태·등장 작품만 대조; 과거·성격은 보류. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "flame_stag",
        "name": "플레임 스태거",
        "english_name": "Flame Stag",
        "title": "사슴형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "X2 스테이지 보스",
        "weakness": "버블 스플래시",
        "weapon": "스피드 버너",
        "profile": "사슴형 보스. 이름과 외형 모티프를 참고할 수 있지만, 기존 소개의 부대장 계급·화산 관리자라는 직책은 검증하지 못했다.",
        "image_placeholder": "flame_stag.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_motif_index"
        ],
        "sourceScope": "형태·등장 작품만 대조; 과거·성격은 보류. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "사슴형 보스. 이름과 외형 모티프를 참고할 수 있지만, 기존 소개의 부대장 계급·화산 관리자라는 직책은 검증하지 못했다.",
            "pending": "제17부대 소속과 정확한 직위, 다혈질이라는 평가의 원전 확인이 필요하다.",
            "correction": "제17부대 소속과 정확한 직위, 다혈질이라는 평가의 원전 확인이 필요하다.",
            "locator": "형태·등장 작품만 대조; 과거·성격은 보류",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "morph_moth",
        "name": "메타모르 모스미노스",
        "english_name": "Morph Moth",
        "title": "나방형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "폐기물 공장",
        "weakness": "스피드 버너",
        "weapon": "실크 샷",
        "profile": "로봇 폐기장에서 고철을 흡수하는 레플리로이드. 번데기 형태로 나타나 전투 중 나방 형태로 변한다.",
        "image_placeholder": "morph_moth.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_moth"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "로봇 폐기장에서 고철을 흡수하는 레플리로이드. 번데기 형태로 나타나 전투 중 나방 형태로 변한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "History의 Robot Junkyard·고철 흡수·번데기에서 나방으로 변하는 설명",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "magna_centipede",
        "name": "마그네 햐쿠레거",
        "english_name": "Magna Centipede",
        "title": "지네형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "전 이레귤러 헌터 · 중앙 컴퓨터",
        "weakness": "실크 샷",
        "weapon": "마그넷 마인",
        "profile": "팬 위키는 포획 뒤 시그마 측에 재프로그래밍된 전직 헌터로 설명한다. 세뇌 이전 성격은 확인되지 않는다.",
        "image_placeholder": "magna_centipede.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_magna_centipede"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "팬 위키는 포획 뒤 시그마 측에 재프로그래밍된 전직 헌터로 설명한다. 세뇌 이전 성격은 확인되지 않는다.",
            "pending": "X1 반란 이전부터 세뇌됐다는 시점은 삭제. 제0부대 경력과 세부 경위는 설정집 원문 대조가 필요하다.",
            "correction": "X1 반란 이전부터 세뇌됐다는 시점은 삭제. 제0부대 경력과 세부 경위는 설정집 원문 대조가 필요하다.",
            "locator": "History·Characteristics; 설정집 재인용",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History·Characteristics; 설정집 재인용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "crystal_snail",
        "name": "크리스탈 마이마인",
        "english_name": "Crystal Snail",
        "title": "달팽이형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "X2 스테이지 보스",
        "weakness": "마그넷 마인",
        "weapon": "크리스탈 헌터",
        "profile": "달팽이형 보스. 껍질에 들어가는 형태를 내향성이나 사회적 고립이라는 성격으로 단정하지 않는다.",
        "image_placeholder": "crystal_snail.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "달팽이형 보스. 껍질에 들어가는 형태를 내향성이나 사회적 고립이라는 성격으로 단정하지 않는다.",
            "pending": "과거 직업·범죄 경력·소속·평소 성격의 근거를 확보하지 못했다.",
            "correction": "과거 직업·범죄 경력·소속·평소 성격의 근거를 확보하지 못했다.",
            "locator": "형태·등장 작품만 대조; 과거·성격은 보류",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "형태·등장 작품만 대조; 과거·성격은 보류. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "overdrive_ostrich",
        "name": "소닉 오스트리그",
        "english_name": "Overdrive Ostrich",
        "title": "타조형 보스",
        "series": "X2",
        "appearances": [
            "X2"
        ],
        "affiliation": "X2 스테이지 보스",
        "weakness": "크리스탈 헌터",
        "weapon": "소닉 슬라이서",
        "profile": "타조형 보스. 빠른 지상 이동을 떠올리게 하는 형태는 창작 참고가 되지만, 신체 능력에서 성격을 역산하지 않는다.",
        "image_placeholder": "overdrive_ostrich.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "타조형 보스. 빠른 지상 이동을 떠올리게 하는 형태는 창작 참고가 되지만, 신체 능력에서 성격을 역산하지 않는다.",
            "pending": "제7부대 은퇴와 비행 사고 설명은 일본어 설정 자료와 대조하기 전 보류한다.",
            "correction": "제7부대 은퇴와 비행 사고 설명은 일본어 설정 자료와 대조하기 전 보류한다.",
            "locator": "형태·등장 작품만 대조; 과거·성격은 보류",
            "edition": "X2 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "형태·등장 작품만 대조; 과거·성격은 보류. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "blizzard_buffalo",
        "name": "프로즌 버팔리오",
        "english_name": "Blizzard Buffalo",
        "title": "들소형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "전 스키장 경비 · 프로즌 타운",
        "weakness": "파라시틱 봄",
        "weapon": "프로스트 실드",
        "profile": "스키장 경비용으로 만들어졌으며, 도플러 타운에서 감염된 뒤 주거 지역을 얼린 것으로 정리되어 있다.",
        "image_placeholder": "blizzard_buffalo.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_blizzard_buffalo"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "스키장 경비용으로 만들어졌으며, 도플러 타운에서 감염된 뒤 주거 지역을 얼린 것으로 정리되어 있다.",
            "pending": "얼음 조각은 취미와 직업을 구분해야 한다. 만화판의 소년과의 교류·후속 행적을 게임 생애에 합치지 않는다.",
            "correction": "얼음 조각은 취미와 직업을 구분해야 한다. 만화판의 소년과의 교류·후속 행적을 게임 생애에 합치지 않는다.",
            "locator": "History; 게임 행적과 Other media 분리",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History; 게임 행적과 Other media 분리. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "toxic_seahorse",
        "name": "애시드 시포스",
        "english_name": "Toxic Seahorse",
        "title": "해마형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "자이언트 댐",
        "weakness": "프로스트 실드",
        "weapon": "애시드 러시",
        "profile": "해마형 보스로 댐 지역에 등장하며 액체 상태로 변해 이동한다.",
        "image_placeholder": "toxic_seahorse.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x3_play",
            "review_locations"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "해마형 보스로 댐 지역에 등장하며 액체 상태로 변해 이동한다.",
            "pending": "암살자라는 직업, 헌터 본부 식수를 오염시켜 사람을 죽였다는 사건은 확인되지 않아 삭제했다.",
            "correction": "암살자라는 직업, 헌터 본부 식수를 오염시켜 사람을 죽였다는 사건은 확인되지 않아 삭제했다.",
            "locator": "Toxic Seahorse 이동 설명; 지역은 장소 목록",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Toxic Seahorse 이동 설명; 지역은 장소 목록. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "tunnel_rhino",
        "name": "스크류 마사이더",
        "english_name": "Tunnel Rhino",
        "title": "코뿔소형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "에너겐 크리스털 광산 출신",
        "weakness": "애시드 러시",
        "weapon": "토네이도 팡",
        "profile": "에너겐 크리스털 광산에서 일하던 코뿔소형 레플리로이드. 뿔과 팔·어깨의 드릴을 사용하며, 도플러 타운을 방문한 뒤 시그마 바이러스에 감염된 것으로 설명된다.",
        "image_placeholder": "tunnel_rhino.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_rhino"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "에너겐 크리스털 광산에서 일하던 코뿔소형 레플리로이드. 뿔과 팔·어깨의 드릴을 사용하며, 도플러 타운을 방문한 뒤 시그마 바이러스에 감염된 것으로 설명된다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "Characteristics의 드릴 배치, History의 광산 근무 설명",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "volt_catfish",
        "name": "일렉트로 나마즈로스",
        "english_name": "Volt Catfish",
        "title": "메기형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "비상 전력 공급용 · 파워 컨트롤 센터",
        "weakness": "토네이도 팡",
        "weapon": "트라이어드 썬더",
        "profile": "비상시에 전력을 공급하던 레플리로이드. 감염 뒤 발전소의 전력을 도플러의 시설로 보낸다.",
        "image_placeholder": "volt_catfish.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_volt_catfish"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "비상시에 전력을 공급하던 레플리로이드. 감염 뒤 발전소의 전력을 도플러의 시설로 보낸다.",
            "pending": "자상한 공장장이라는 직위는 삭제. 만화판의 엑스와의 우정·희생 장면은 별도 매체다.",
            "correction": "자상한 공장장이라는 직위는 삭제. 만화판의 엑스와의 우정·희생 장면은 별도 매체다.",
            "locator": "History; 만화판과 구분",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History; 만화판과 구분. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "crush_crawfish",
        "name": "시저스 쉬림퍼",
        "english_name": "Crush Crawfish",
        "title": "가재형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "군사용 개발 · 조선소",
        "weakness": "트라이어드 썬더",
        "weapon": "스피닝 블레이드",
        "profile": "군사용으로 개발됐지만 피아 식별 결함 때문에 보관되었던 가재형 레플리로이드. 도플러가 재가동한다.",
        "image_placeholder": "crush_crawfish.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_crush_crawfish"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "군사용으로 개발됐지만 피아 식별 결함 때문에 보관되었던 가재형 레플리로이드. 도플러가 재가동한다.",
            "pending": "행동 결함을 본래의 잔혹한 성격이라고 단정하지 않는다. 개발 조직과 세부 경력은 미확인.",
            "correction": "행동 결함을 본래의 잔혹한 성격이라고 단정하지 않는다. 개발 조직과 세부 경력은 미확인.",
            "locator": "History의 개발·보관·재가동",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History의 개발·보관·재가동. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "neon_tiger",
        "name": "네온 타이거",
        "english_name": "Neon Tiger",
        "title": "호랑이형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "사파리 파크",
        "weakness": "스피닝 블레이드",
        "weapon": "레이 스플래셔",
        "profile": "사파리 파크에 등장하는 호랑이형 보스.",
        "image_placeholder": "neon_tiger.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "사파리 파크에 등장하는 호랑이형 보스.",
            "pending": "밀렵꾼 감시 경력과 감염 이후 성격 변화의 설정집 원문은 미확인. 사냥 본능 때문에 정상을 잃었다는 단정 삭제.",
            "correction": "밀렵꾼 감시 경력과 감염 이후 성격 변화의 설정집 원문은 미확인. 사냥 본능 때문에 정상을 잃었다는 단정 삭제.",
            "locator": "X3 장소 목록; 모티프 목록 병용",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "X3 장소 목록; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "gravity_beetle",
        "name": "그래비티 비트부드",
        "english_name": "Gravity Beetle",
        "title": "장수풍뎅이형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "공중 항공모함",
        "weakness": "레이 스플래셔",
        "weapon": "그래비티 웰",
        "profile": "항공모함 스테이지에 등장하는 장수풍뎅이형 보스. 기존 자료의 부메랑 쿠왕거와의 형제 관계는 보충 설정으로 원전 확인이 필요하다.",
        "image_placeholder": "gravity_beetle.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "항공모함 스테이지에 등장하는 장수풍뎅이형 보스. 기존 자료의 부메랑 쿠왕거와의 형제 관계는 보충 설정으로 원전 확인이 필요하다.",
            "pending": "형제 관계·복수 동기의 정확한 원전과 번역을 대조해야 한다.",
            "correction": "형제 관계·복수 동기의 정확한 원전과 번역을 대조해야 한다.",
            "locator": "X3 장소 목록; 가족 관계까지 확인한 자료는 아님",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "X3 장소 목록; 가족 관계까지 확인한 자료는 아님. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "blast_hornet",
        "name": "익스플로즈 호넥",
        "english_name": "Blast Hornet",
        "title": "말벌형 보스",
        "series": "X3",
        "appearances": [
            "X3"
        ],
        "affiliation": "웨폰즈 팩토리",
        "weakness": "그래비티 웰",
        "weapon": "파라시틱 봄",
        "profile": "병기 공장에 등장하는 말벌형 보스.",
        "image_placeholder": "blast_hornet.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "병기 공장에 등장하는 말벌형 보스.",
            "pending": "제0특수부대 부대장이라는 경력은 원전 미대조. 제로와 동등한 실력이라는 단정 및 도플러의 신형 헌터라는 분류는 삭제.",
            "correction": "제0특수부대 부대장이라는 경력은 원전 미대조. 제로와 동등한 실력이라는 단정 및 도플러의 신형 헌터라는 분류는 삭제.",
            "locator": "X3 장소 목록; 모티프 목록 병용",
            "edition": "X3 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "X3 장소 목록; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "web_spider",
        "name": "웹 스파이더스",
        "english_name": "Web Spider",
        "title": "거미형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "레플리포스 게릴라 부대 · 정글",
        "weakness": "트윈 슬래셔 / 질풍아",
        "weapon": "라이트닝 웹 / 뇌신격",
        "profile": "레플리포스의 게릴라 부대를 이끄는 거미형 레플리로이드로 소개된다. 정글 기지에서 헌터와 대립한다.",
        "image_placeholder": "web_spider.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_web_spider",
            "review_locations"
        ],
        "sourceScope": "검색 제공 보존 문서 도입의 소속·역할 / X4 장소 목록의 범위를 참고. 원책·게임 화면 직접 대조와 구별하며, 확인하지 못한 직위·동기는 아래에 보류한다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "레플리포스의 게릴라 부대를 이끄는 거미형 레플리로이드로 소개된다. 정글 기지에서 헌터와 대립한다.",
            "pending": "레플리포스 소속·게릴라 지휘는 2차 자료에서 확인. 이전 제0부대 경력과 군인의 긍지에 관한 해석은 원전 대조가 남아 있다.",
            "correction": "레플리포스 소속·게릴라 지휘는 2차 자료에서 확인. 이전 제0부대 경력과 군인의 긍지에 관한 해석은 원전 대조가 남아 있다.",
            "locator": "보존 문서 도입의 소속·역할 / X4 장소 목록",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "split_mushroom",
        "name": "스플릿 머쉬룸",
        "english_name": "Split Mushroom",
        "title": "버섯형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "바이오 연구소",
        "weakness": "라이트닝 웹 / 뇌신격",
        "weapon": "소울 바디 / 공원무·공원참",
        "profile": "바이오 연구소에 등장하는 버섯형 보스.",
        "image_placeholder": "split_mushroom.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "sourceScope": "X4 장소 목록; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "바이오 연구소에 등장하는 버섯형 보스.",
            "pending": "제작 목적·연구소 폐쇄와 재가동 경위·시그마 지시 및 성격의 원전 대조 필요.",
            "correction": "제작 목적·연구소 폐쇄와 재가동 경위·시그마 지시 및 성격의 원전 대조 필요.",
            "locator": "X4 장소 목록; 모티프 목록 병용",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "cyber_peacock",
        "name": "사이버 쿠자커",
        "english_name": "Cyber Peacock",
        "title": "공작형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "사이버 스페이스 · 보안 프로그램",
        "weakness": "소울 바디 / 용염인",
        "weapon": "에이밍 레이저 / 낙봉파",
        "profile": "공작 형태의 디지털 보안 프로그램. 엑스의 능력을 평가하는 대화가 있다.",
        "image_placeholder": "cyber_peacock.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_cyber_peacock"
        ],
        "sourceScope": "도입·Quotes. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "공작 형태의 디지털 보안 프로그램. 엑스의 능력을 평가하는 대화가 있다.",
            "pending": "보통의 육체를 가진 암살자 로봇이라는 기존 설명은 수정. 제작자와 초기 임무는 별도 확인이 필요하다.",
            "correction": "보통의 육체를 가진 암살자 로봇이라는 기존 설명은 수정. 제작자와 초기 임무는 별도 확인이 필요하다.",
            "locator": "도입·Quotes",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "storm_owl",
        "name": "스톰 푸쿠로울",
        "english_name": "Storm Owl",
        "title": "올빼미형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "레플리포스 항공 전력 · 에어 포스",
        "weakness": "에이밍 레이저 / 낙봉파",
        "weapon": "더블 사이클론 / 천공패",
        "profile": "레플리포스의 항공 전력을 움직여 도시를 공격하는 올빼미형 인물로 정리되어 있다. 부대 전체가 이레귤러로 규정되는 데 반발한다.",
        "image_placeholder": "storm_owl.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_storm_owl",
            "review_locations"
        ],
        "sourceScope": "검색 제공 History의 레플리포스 가담·항공 전력 운용의 범위를 참고. 원책·게임 화면 직접 대조와 구별하며, 확인하지 못한 직위·동기는 아래에 보류한다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "레플리포스의 항공 전력을 움직여 도시를 공격하는 올빼미형 인물로 정리되어 있다. 부대 전체가 이레귤러로 규정되는 데 반발한다.",
            "pending": "참모총장이라는 정확한 계급은 보류. 스톰 이글리드와의 친분·엑스에 대한 원한은 설정집 원문 대조 전 본편 소개에 합치지 않는다.",
            "correction": "참모총장이라는 정확한 계급은 보류. 스톰 이글리드와의 친분·엑스에 대한 원한은 설정집 원문 대조 전 본편 소개에 합치지 않는다.",
            "locator": "History의 레플리포스 가담·항공 전력 운용",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "magma_dragoon",
        "name": "마그마드 드라군",
        "english_name": "Magma Dragoon",
        "title": "용형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "이레귤러 헌터 제14부대 출신",
        "weakness": "더블 사이클론 / 뇌신격",
        "weapon": "라이징 파이어 / 용염인",
        "profile": "제14부대 출신 헌터이자 무도가. 강자와 싸우려는 욕망 때문에 시그마의 제안을 받아들인 것으로 설명된다.",
        "image_placeholder": "magma_dragoon.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "story_arc": {
            "X4": "시그마가 제안한 결투의 기회를 받아들이고 스카이 라군의 동력로를 파괴한다. 추락 사건으로 레플리포스가 의심받게 되고, 자신은 화산에서 엑스 또는 제로를 기다린다."
        },
        "sources": [
            "magma_dragoon"
        ],
        "sourceScope": "History·엑스/제로 대화 차이. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "제14부대 출신 헌터이자 무도가. 강자와 싸우려는 욕망 때문에 시그마의 제안을 받아들인 것으로 설명된다.",
            "pending": "14격투부대라는 명칭은 수정. 엑스·제로 상대 대사의 차이를 하나의 똑같은 심리로 합치지 않는다.",
            "correction": "14격투부대라는 명칭은 수정. 엑스·제로 상대 대사의 차이를 하나의 똑같은 심리로 합치지 않는다.",
            "locator": "History·엑스/제로 대화 차이",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "frost_walrus",
        "name": "프로스트 키바토도스",
        "english_name": "Frost Walrus",
        "title": "바다코끼리형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "스노 베이스",
        "weakness": "라이징 파이어 / 용염인",
        "weapon": "프로스트 타워 / 빙열참",
        "profile": "스노 베이스에 등장하는 바다코끼리형 보스.",
        "image_placeholder": "frost_walrus.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "스노 베이스에 등장하는 바다코끼리형 보스.",
            "pending": "폭력배 참모라는 직위 및 군 내부의 평판은 원전 미확인으로 삭제.",
            "correction": "폭력배 참모라는 직위 및 군 내부의 평판은 원전 미확인으로 삭제.",
            "locator": "X4 장소 목록; 모티프 목록 병용",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "X4 장소 목록; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "jet_stingray",
        "name": "제트 스팅렌",
        "english_name": "Jet Stingray",
        "title": "가오리형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "마린 베이스",
        "weakness": "프로스트 타워 / 빙열참",
        "weapon": "그라운드 헌터 / 비연각",
        "profile": "마린 베이스에 등장하는 가오리형 보스.",
        "image_placeholder": "jet_stingray.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_locations",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "마린 베이스에 등장하는 가오리형 보스.",
            "pending": "해군 내 직위와 속도에 대한 자부심의 근거가 필요하다. 지역 이름만으로 전체 경력을 확정하지 않는다.",
            "correction": "해군 내 직위와 속도에 대한 자부심의 근거가 필요하다. 지역 이름만으로 전체 경력을 확정하지 않는다.",
            "locator": "X4 장소 목록; 모티프 목록 병용",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "X4 장소 목록; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "slash_beast",
        "name": "슬래쉬 비스트레오",
        "english_name": "Slash Beast",
        "title": "사자형 보스",
        "series": "X4",
        "appearances": [
            "X4"
        ],
        "affiliation": "레플리포스 · 군용 보급 열차",
        "weakness": "엑스: 그라운드 헌터 / 제로: 뇌신격 유효 (경직 없음)",
        "weapon": "트윈 슬래셔 / 질풍아",
        "profile": "레플리포스의 무기·탄약 수송 열차를 지킨다. 강한 적에게도 물러서지 않는 인물로 설명되어 있다.",
        "image_placeholder": "slash_beast.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_slash_beast",
            "review_locations"
        ],
        "sourceScope": "검색 제공 History의 군용 보급 열차 경비의 범위를 참고. 원책·게임 화면 직접 대조와 구별하며, 확인하지 못한 직위·동기는 아래에 보류한다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "레플리포스의 무기·탄약 수송 열차를 지킨다. 강한 적에게도 물러서지 않는 인물로 설명되어 있다.",
            "pending": "군의 긍지만이 동기라는 기존 해석은 제외. 입대 동기·정확한 지휘 계급은 설정집 원문 대조가 필요하다.",
            "correction": "군의 긍지만이 동기라는 기존 해석은 제외. 입대 동기·정확한 지휘 계급은 설정집 원문 대조가 필요하다.",
            "locator": "History의 군용 보급 열차 경비",
            "edition": "X4 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "crescent_grizzly",
        "name": "크레센트 그리즐리",
        "english_name": "Grizzly Slash",
        "title": "회색곰형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "무기 거래",
        "weakness": "스파이크 로프 / 쌍환몽",
        "weapon": "크레센트 샷 / 크레센트 소드",
        "profile": "강적과의 싸움을 즐기며, 싸움에서 얻은 무기를 거래한다고 설명서 전사본은 소개한다.",
        "image_placeholder": "crescent_grizzly.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "강적과의 싸움을 즐기며, 싸움에서 얻은 무기를 거래한다고 설명서 전사본은 소개한다.",
            "pending": "제로에게 잃은 명예에 집착한다는 기존 동기는 삭제. 부품 요청 때 대화는 진행 조건별 추가 확인 필요.",
            "correction": "제로에게 잃은 명예에 집착한다는 기존 동기는 삭제. 부품 요청 때 대화는 진행 조건별 추가 확인 필요.",
            "locator": "영문 설명서 전사 p.18",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.18. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "volt_kraken",
        "name": "볼트 크라켄",
        "english_name": "Squid Adler",
        "title": "크라켄·오징어형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "전 헌터 · 연구자",
        "weakness": "젤 셰이버 / 비수상",
        "weapon": "트라이 썬더 / 전광",
        "profile": "헌터 업무에 의문을 품고 그만둔 뒤 연구자로 지냈다는 설명이다.",
        "image_placeholder": "volt_kraken.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "헌터 업무에 의문을 품고 그만둔 뒤 연구자로 지냈다는 설명이다.",
            "pending": "가혹한 직무 스트레스 때문에 낙향했다는 구체적 원인은 삭제.",
            "correction": "가혹한 직무 스트레스 때문에 낙향했다는 구체적 원인은 삭제.",
            "locator": "영문 설명서 전사 p.18",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.18. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "shining_firefly",
        "name": "샤이닝 호타루니쿠스",
        "english_name": "Izzy Glow",
        "title": "반딧불이형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "레이저 공학 연구자",
        "weakness": "트라이 썬더 / 전광",
        "weapon": "파이어플라이 레이저 / 멸섬광",
        "profile": "연구 성과의 무기화를 우려해 공개를 꺼리는 레이저 공학 전문가로 소개된다.",
        "image_placeholder": "shining_firefly.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "연구 성과의 무기화를 우려해 공개를 꺼리는 레이저 공학 전문가로 소개된다.",
            "pending": "학원장이라는 직책·연령·항상 헌터를 애송이로 보는 성격은 미확인.",
            "correction": "학원장이라는 직책·연령·항상 헌터를 애송이로 보는 성격은 미확인.",
            "locator": "영문 설명서 전사 p.19",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.19. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "tidal_whale",
        "name": "타이달 맥코엔",
        "english_name": "Duff McWhalen",
        "title": "향유고래형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "해상 경비대 / 해양박물관",
        "weakness": "크레센트 샷 / 크레센트 소드",
        "weapon": "젤 셰이버 / 비수상",
        "profile": "해양박물관장이자 해상 경비대의 지휘관이었던 향유고래형 레플리로이드. X5에서 이미 시그마 바이러스에 감염된 상태로, 헌터들에게 바다에서 마지막 싸움을 할 것을 청한다.",
        "image_placeholder": "tidal_whale.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_whale"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "해양박물관장이자 해상 경비대의 지휘관이었던 향유고래형 레플리로이드. X5에서 이미 시그마 바이러스에 감염된 상태로, 헌터들에게 바다에서 마지막 싸움을 할 것을 청한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "History의 감염과 마지막 부탁, Strategy의 Ice Block 설명",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "spiral_pegasus",
        "name": "스파이럴 페가시온",
        "english_name": "The Skiver",
        "title": "페가수스형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "레플리 에어포스",
        "weakness": "다크 홀드드 / 다크 홀드드",
        "weapon": "윙 스파이럴 / 질풍",
        "profile": "젊은 지휘관으로, 전사한 상관 커넬을 존경한다고 설명서 전사본은 소개한다.",
        "image_placeholder": "spiral_pegasus.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "젊은 지휘관으로, 전사한 상관 커넬을 존경한다고 설명서 전사본은 소개한다.",
            "pending": "아이리스·스톰 이글리드 숭배 및 우상의 환영을 보며 죽었다는 기존 설명은 삭제.",
            "correction": "아이리스·스톰 이글리드 숭배 및 우상의 환영을 보며 죽었다는 기존 설명은 삭제.",
            "locator": "영문 설명서 전사 p.20; Carnel 표기는 커넬로 정리",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.20; Carnel 표기는 커넬로 정리. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "spike_rosered",
        "name": "스파이크 로즈레드",
        "english_name": "Axle the Red",
        "title": "장미형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "정글 자연 제어 장치와 관련된 변이체",
        "weakness": "그라운드 파이어 / 단지염",
        "weapon": "스파이크 로프 / 쌍환몽",
        "profile": "정글의 제어 장치·레플리로이드·바이러스가 관련된 특이한 변이로 설명된다.",
        "image_placeholder": "spike_rosered.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "정글의 제어 장치·레플리로이드·바이러스가 관련된 특이한 변이로 설명된다.",
            "pending": "정확한 변이 메커니즘은 미해명. 엑스의 정글·괴도 경력이라는 기존 표현 삭제.",
            "correction": "정확한 변이 메커니즘은 미해명. 엑스의 정글·괴도 경력이라는 기존 표현 삭제.",
            "locator": "영문 설명서 전사 p.20; 어색한 문구를 메커니즘으로 확정하지 않음",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.20; 어색한 문구를 메커니즘으로 확정하지 않음. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "dark_necrobat",
        "name": "다크 네크로뱃",
        "english_name": "Dark Dizzy",
        "title": "박쥐형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "시그마가 만든 뒤 이탈한 개체",
        "weakness": "파이어플라이 레이저 / 멸섬광",
        "weapon": "다크 홀드드 / 다크 홀드드",
        "profile": "시그마의 통제에서 벗어나 숨어 지냈던 박쥐형 레플리로이드.",
        "image_placeholder": "dark_necrobat.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "sourceScope": "영문 설명서 전사 p.21. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "시그마의 통제에서 벗어나 숨어 지냈던 박쥐형 레플리로이드.",
            "pending": "우주로 도주했다는 장소는 확인되지 않아 삭제. 제작 연도는 판본 대조 전 연표에 고정하지 않는다.",
            "correction": "우주로 도주했다는 장소는 확인되지 않아 삭제. 제작 연도는 판본 대조 전 연표에 고정하지 않는다.",
            "locator": "영문 설명서 전사 p.21",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25"
    },
    {
        "id": "burn_dinorex",
        "name": "번 디노렉스",
        "english_name": "Mattrex",
        "title": "티라노사우루스형 보스",
        "series": "X5",
        "appearances": [
            "X5"
        ],
        "affiliation": "전 재해 대책 담당",
        "weakness": "윙 스파이럴 / 질풍",
        "weapon": "그라운드 파이어 / 단지염",
        "profile": "재해 대책 업무를 맡았으며 마그마 에너지로 만든 무기를 비밀리에 보관했다고 소개된다.",
        "image_placeholder": "burn_dinorex.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x5_manual"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "재해 대책 업무를 맡았으며 마그마 에너지로 만든 무기를 비밀리에 보관했다고 소개된다.",
            "pending": "독재자·불법 부스터 밀수단이라는 기존 설정은 삭제. 레플리포스 경력은 별도 인물 자료로 보충 가능.",
            "correction": "독재자·불법 부스터 밀수단이라는 기존 설정은 삭제. 레플리포스 경력은 별도 인물 자료로 보충 가능.",
            "locator": "영문 설명서 전사 p.21",
            "edition": "X5 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "영문 설명서 전사 p.21. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "commander_yammark",
        "name": "커맨더 얀마크",
        "english_name": "Commander Yammark",
        "title": "잠자리형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 아마존 에어리어",
        "weakness": "레이 애로우 / 락쇄산",
        "weapon": "얀마크 옵션 / 양마섬",
        "profile": "잠자리형 조사단원. 2차 자료는 과거 비행 장치가 파괴되어 추락한 경위를 설명한다.",
        "image_placeholder": "commander_yammark.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_alia",
            "review_x6_roster"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "잠자리형 조사단원. 2차 자료는 과거 비행 장치가 파괴되어 추락한 경위를 설명한다.",
            "pending": "무고한 처형이라는 한 문장으로 요약하지 않는다. 가해자 특정·자연 조사팀의 정확한 직위는 미대조.",
            "correction": "무고한 처형이라는 한 문장으로 요약하지 않는다. 가해자 특정·자연 조사팀의 정확한 직위는 미대조.",
            "locator": "에이리아 X6 과거 행적 정리; 보스 위치는 X6 목록",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "에이리아 X6 과거 행적 정리; 보스 위치는 X6 목록. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "ground_scaravich",
        "name": "그라운드 스카라비치",
        "english_name": "Ground Scaravich",
        "title": "쇠똥구리형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단",
        "weakness": "얀마크 옵션 / 양마섬",
        "weapon": "그라운드 대시 / 선추참",
        "profile": "유적의 데이터와 보물을 찾던 쇠똥구리형 레플리로이드. 금지 구역에 들어갔다가 에이리아에게 처분되었으며, X6에서 게이트가 되살린 나이트메어 조사단원으로 등장한다.",
        "image_placeholder": "ground_scaravich.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_scaravich",
            "boss_design_scaravich_action",
            "review_x6_roster"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "유적의 데이터와 보물을 찾던 쇠똥구리형 레플리로이드. 금지 구역에 들어갔다가 에이리아에게 처분되었으며, X6에서 게이트가 되살린 나이트메어 조사단원으로 등장한다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "MMKB의 Characteristics·History, Mega Man XZ의 Ground Scaravich 행동 설명",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "blaze_heatnix",
        "name": "블레이즈 히트닉스",
        "english_name": "Blaze Heatnix",
        "title": "불사조형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 고온 지하 조사 출신",
        "weakness": "그라운드 대시 / 선추참",
        "weapon": "마그마 블레이드 / 상염참",
        "profile": "고온의 지하 환경을 탐사하도록 만들어진 불사조형 레플리로이드.",
        "image_placeholder": "blaze_heatnix.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_blaze_heatnix",
            "review_x6_roster"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "고온의 지하 환경을 탐사하도록 만들어진 불사조형 레플리로이드.",
            "pending": "폐기 경위와 타인 피해는 에이리아의 보고·일본어 원문을 더 대조해야 한다. 오만하다는 성격만으로 처분을 정당화하지 않는다.",
            "correction": "폐기 경위와 타인 피해는 에이리아의 보고·일본어 원문을 더 대조해야 한다. 오만하다는 성격만으로 처분을 정당화하지 않는다.",
            "locator": "History의 제작 목적",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History의 제작 목적. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "blizzard_wolfang",
        "name": "블리자드 볼팡",
        "english_name": "Blizzard Wolfang",
        "title": "늑대형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단",
        "weakness": "마그마 블레이드 / 상염참",
        "weapon": "아이스 버스트 / 빙랑아",
        "profile": "극지 개발팀을 이끌었던 레플리로이드. 부하들의 신뢰를 받았던 과거가 있으며, X6에서 나이트메어 조사단원으로 나타난다.",
        "image_placeholder": "blizzard_wolfang.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "story_arc": {
            "X6": "부하들을 잃은 사건 뒤 게이트를 적대하던 연구자들의 계략으로 처분된다. 에이리아는 그를 바다에 던진 책임을 고백한다. 게이트가 되살린 뒤 조사단으로 활동한다."
        },
        "sources": [
            "blizzard_wolfang",
            "alia",
            "boss_motif_index",
            "review_x6_roster"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "극지 개발팀을 이끌었던 레플리로이드. 부하들의 신뢰를 받았던 과거가 있으며, X6에서 나이트메어 조사단원으로 나타난다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "rainy_turtloid",
        "name": "레이니 터틀로이드",
        "english_name": "Rainy Turtloid",
        "title": "거북형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 전 수질 정화팀",
        "weakness": "아이스 버스트 / 빙랑아",
        "weapon": "메테오 레인 / 원수참",
        "profile": "산성비를 견디는 방어 성능을 가진 수질 정화용 레플리로이드. 자신 때문에 처벌받은 게이트에게 빚졌다고 여긴다.",
        "image_placeholder": "rainy_turtloid.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_rainy_turtloid",
            "review_x6_roster"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "산성비를 견디는 방어 성능을 가진 수질 정화용 레플리로이드. 자신 때문에 처벌받은 게이트에게 빚졌다고 여긴다.",
            "pending": "이나리 신사는 이나미 템플로 수정. 결함 때문에 스스로 산성비를 내린다는 설명 삭제. 과거의 죽음과 부활은 2차 자료에 의존한다.",
            "correction": "이나리 신사는 이나미 템플로 수정. 결함 때문에 스스로 산성비를 내린다는 설명 삭제. 과거의 죽음과 부활은 2차 자료에 의존한다.",
            "locator": "History·Quotes; Inami Temple",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "History·Quotes; Inami Temple. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "metal_shark_player",
        "name": "메탈샤크 플레이어",
        "english_name": "Metal Shark Player",
        "title": "귀상어형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 전 재활용 연구팀",
        "weakness": "메테오 레인 / 원수참",
        "weapon": "메탈 앵커 / 낙강진",
        "profile": "폐기된 개체의 부품·DNA를 연구했다. 에이리아는 금지된 DNA 부활 연구 때문에 처분되었다고 설명한다.",
        "image_placeholder": "metal_shark_player.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x6_x",
            "review_x6_roster"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "폐기된 개체의 부품·DNA를 연구했다. 에이리아는 금지된 DNA 부활 연구 때문에 처분되었다고 설명한다.",
            "pending": "봉인이라는 기존 표현 수정. 법의 존재를 모든 처분의 정당성으로 확대하지 않는다.",
            "correction": "봉인이라는 기존 표현 수정. 법의 존재를 모든 처분의 정당성으로 확대하지 않는다.",
            "locator": "Scene 13 격파 후 에이리아 보고",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Scene 13 격파 후 에이리아 보고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "shield_sheldon",
        "name": "실드 셀던",
        "english_name": "Shield Sheldon",
        "title": "조개형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 전 경호 담당",
        "weakness": "메탈 앵커 / 낙강진",
        "weapon": "가드 셸",
        "profile": "경호 임무 중 이레귤러로 오인된 과거가 있다. 제로와의 대화에서 자신을 다시 필요로 한 이에게 충성을 표한다.",
        "image_placeholder": "shield_sheldon.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x6_zero",
            "review_x6_roster",
            "review_shield_sheldon"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "경호 임무 중 이레귤러로 오인된 과거가 있다. 제로와의 대화에서 자신을 다시 필요로 한 이에게 충성을 표한다.",
            "pending": "단순 파면이 아니라 오인 판정과 죽음이 관련된 사건이다. 짐 박사 사건의 세부 순서는 번역 대조 필요.",
            "correction": "단순 파면이 아니라 오인 판정과 죽음이 관련된 사건이다. 짐 박사 사건의 세부 순서는 번역 대조 필요.",
            "locator": "Shield Sheldon 전후 대화; 개별 문서 History 병용",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Shield Sheldon 전후 대화; 개별 문서 History 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "infinity_mijinion",
        "name": "인피니티 미지니온",
        "english_name": "Infinity Mijinion",
        "title": "물벼룩형 보스",
        "series": "X6",
        "appearances": [
            "X6"
        ],
        "affiliation": "나이트메어 조사단 · 전 대형 병기 시험 조종사",
        "weakness": "가드 셸 / 찰광류",
        "weapon": "레이 애로우 / 락쇄산",
        "profile": "대형 병기의 시험 조종을 담당했다. 에이리아는 우수한 성과와 안전 절차 무시, 위장된 사고를 함께 보고한다.",
        "image_placeholder": "infinity_mijinion.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x6_zero",
            "review_x6_roster"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "대형 병기의 시험 조종을 담당했다. 에이리아는 우수한 성과와 안전 절차 무시, 위장된 사고를 함께 보고한다.",
            "pending": "미친 과학자라는 기존 직업·인격 단정 삭제. 능력과 위험 행동, 부당한 처분을 따로 읽는다.",
            "correction": "미친 과학자라는 기존 직업·인격 단정 삭제. 능력과 위험 행동, 부당한 처분을 따로 읽는다.",
            "locator": "Infinity Mijinion 격파 후 에이리아 보고",
            "edition": "X6 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Infinity Mijinion 격파 후 에이리아 보고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "soldier_stonekong",
        "name": "솔저 스톤콩",
        "english_name": "Soldier Stonekong",
        "title": "고릴라형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 딥 포레스트",
        "weakness": "익스플로전 / 파단파",
        "weapon": "가이아 실드 / 옥문검",
        "profile": "딥 포레스트에서 만나는 고릴라형 레드 얼럿 멤버.",
        "image_placeholder": "soldier_stonekong.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_roster",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "딥 포레스트에서 만나는 고릴라형 레드 얼럿 멤버.",
            "pending": "무사도라는 가치관과 모든 공격을 반사한다는 표현은 원전 미대조로 제외.",
            "correction": "무사도라는 가치관과 모든 공격을 반사한다는 표현은 원전 미대조로 제외.",
            "locator": "Bosses 표; 모티프 목록 병용",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Bosses 표; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "tornado_tonion",
        "name": "토네이도 데보니온",
        "english_name": "Tornado Tonion",
        "title": "양파형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 라디오 타워",
        "weakness": "가이아 실드 / 옥문검",
        "weapon": "볼트 토네이도 / 뇌신고",
        "profile": "엑스에게 자신들을 멈춰 달라고 요청하며, 교수의 개조 뒤 통제력을 잃어 간다고 말한다.",
        "image_placeholder": "tornado_tonion.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_x"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "엑스에게 자신들을 멈춰 달라고 요청하며, 교수의 개조 뒤 통제력을 잃어 간다고 말한다.",
            "pending": "방송 코미디언이라는 과거 직업은 삭제. 춤추는 행동과 실제 경력을 구분한다.",
            "correction": "방송 코미디언이라는 과거 직업은 삭제. 춤추는 행동과 실제 경력을 구분한다.",
            "locator": "Radio Tower의 전투 전 대화",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Radio Tower의 전투 전 대화. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "splash_warfly",
        "name": "스플래시 워플라이",
        "english_name": "Splash Warfly",
        "title": "날치형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 배틀십",
        "weakness": "볼트 토네이도 / 뇌신고",
        "weapon": "스플래시 레이저 / 수열섬",
        "profile": "함선에서 헌터를 도발하는 날치형 레드 얼럿 멤버.",
        "image_placeholder": "splash_warfly.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_x"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "함선에서 헌터를 도발하는 날치형 레드 얼럿 멤버.",
            "pending": "기동 함대의 사령관·치밀한 미사일 전략가라는 직책과 평가는 삭제.",
            "correction": "기동 함대의 사령관·치밀한 미사일 전략가라는 직책과 평가는 삭제.",
            "locator": "Scene 14 The Battleship",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Scene 14 The Battleship. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "flame_hyenard",
        "name": "플레임 하이에나드",
        "english_name": "Flame Hyenard",
        "title": "하이에나형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 라바 팩토리",
        "weakness": "스플래시 레이저 / 수열섬",
        "weapon": "서클 블레이즈 / 폭염진",
        "profile": "고통을 호소하다 헌터를 그 원인으로 지목한다. 분신과 거대 메카니로이드를 이용해 싸운다.",
        "image_placeholder": "flame_hyenard.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_flame_hyenard"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "고통을 호소하다 헌터를 그 원인으로 지목한다. 분신과 거대 메카니로이드를 이용해 싸운다.",
            "pending": "엑셀의 이탈에 대한 분노나 특정 정신 질환으로 단정하지 않는다. 감염 원인은 암시이며 평상시 성격은 불명.",
            "correction": "엑셀의 이탈에 대한 분노나 특정 정신 질환으로 단정하지 않는다. 감염 원인은 암시이며 평상시 성격은 불명.",
            "locator": "Characteristics·Strategy",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Characteristics·Strategy. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "ride_boarski",
        "name": "헬라이드 이노부스키",
        "english_name": "Ride Boarski",
        "title": "멧돼지형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿",
        "weakness": "서클 블레이즈 / 폭염진",
        "weapon": "무빙 휠 / 참광륜",
        "profile": "바퀴·배기구·핸들이 몸에 결합된 멧돼지형 레드 얼럿 멤버. 오토바이 형태로 바뀌어 돌진하며, 레드에게 강한 충성심을 보인다.",
        "image_placeholder": "ride_boarski.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_boarski"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "바퀴·배기구·핸들이 몸에 결합된 멧돼지형 레드 얼럿 멤버. 오토바이 형태로 바뀌어 돌진하며, 레드에게 강한 충성심을 보인다.",
            "pending": "세부 계급·연표·성격을 설정집 일본어 원문과 대조해야 한다. 현재 소개를 넘어선 경력은 확정하지 않는다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "Characteristics의 차량 부품, Strategy의 Lightning Fang",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ]
    },
    {
        "id": "snipe_anteator",
        "name": "스나이프 아리퀵",
        "english_name": "Snipe Anteator",
        "title": "개미핥기형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 사이버 필드",
        "weakness": "무빙 휠 / 참광륜",
        "weapon": "스나이퍼 미사일 / 비영진",
        "profile": "사이버 필드에서 만나는 개미핥기형 레드 얼럿 멤버.",
        "image_placeholder": "snipe_anteator.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_roster",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "사이버 필드에서 만나는 개미핥기형 레드 얼럿 멤버.",
            "pending": "헌터 본부 네트워크를 마비시켰다는 사건·실제 나이·조직의 두뇌라는 직책은 미확인으로 삭제.",
            "correction": "헌터 본부 네트워크를 마비시켰다는 사건·실제 나이·조직의 두뇌라는 직책은 미확인으로 삭제.",
            "locator": "Bosses 표; 모티프 목록 병용",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Bosses 표; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "wind_crowrang",
        "name": "윈드 카라스팅",
        "english_name": "Wind Crowrang",
        "title": "까마귀형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 에어 포스",
        "weakness": "스나이퍼 미사일 / 비영진",
        "weapon": "윈드 커터 / 쌍연무",
        "profile": "공중 편대 스테이지에서 만나는 까마귀형 레드 얼럿 멤버.",
        "image_placeholder": "wind_crowrang.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_roster",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "기본 정보만 확인",
            "known": "공중 편대 스테이지에서 만나는 까마귀형 레드 얼럿 멤버.",
            "pending": "무사라는 신념과 쿠나이라는 정확한 도구 명칭은 원전 대조 필요.",
            "correction": "무사라는 신념과 쿠나이라는 정확한 도구 명칭은 원전 대조 필요.",
            "locator": "Bosses 표; 모티프 목록 병용",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Bosses 표; 모티프 목록 병용. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "vanishing_gungaroo",
        "name": "배니싱 간가룬",
        "english_name": "Vanishing Gungaroo",
        "title": "캥거루형 보스",
        "series": "X7",
        "appearances": [
            "X7"
        ],
        "affiliation": "레드 얼럿 · 터널 베이스",
        "weakness": "윈드 커터 / 쌍연무",
        "weapon": "익스플로전 / 파단파",
        "profile": "터널 베이스에 등장하는 캥거루형 멤버. 엑셀 앞에서 더 강해졌다고 과시한다.",
        "image_placeholder": "vanishing_gungaroo.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "review_x7_axl"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "터널 베이스에 등장하는 캥거루형 멤버. 엑셀 앞에서 더 강해졌다고 과시한다.",
            "pending": "격투 콜로세움이라는 지역명 삭제. 어린아이 같은 대사와 실제 제작 연령을 혼동하지 않는다.",
            "correction": "격투 콜로세움이라는 지역명 삭제. 어린아이 같은 대사와 실제 제작 연령을 혼동하지 않는다.",
            "locator": "Scene 7 Tunnel Base",
            "edition": "X7 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "Scene 7 Tunnel Base. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다."
    },
    {
        "id": "optic_sunflower",
        "name": "옵틱 선플라워드",
        "english_name": "Optic Sunflower",
        "title": "해바라기형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "트로이아 베이스",
        "weakness": "그린 스피너 / 엽단돌",
        "weapon": "샤이닝 레이 / 천조",
        "profile": "해바라기형 신세대 레플리로이드. 가상 헌터 훈련 시설인 트로이아 베이스를 관리했으며, 반란 때 훈련 프로그램 헬리오스를 폭주시킨다.",
        "image_placeholder": "optic_sunflower.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "x8bosses",
            "x8",
            "x8_profile_optic_sunflower",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "해바라기형 신세대 레플리로이드. 가상 헌터 훈련 시설인 트로이아 베이스를 관리했으며, 반란 때 훈련 프로그램 헬리오스를 폭주시킨다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "gravity_antonion",
        "name": "그래비티 안토니온",
        "english_name": "Gravity Antonion",
        "title": "개미형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "프림로즈 반중력 연구 시설",
        "weakness": "섀도우 러너 / 나찰선",
        "weapon": "스퀴즈 봄 / 중파참",
        "profile": "반중력 연구소의 수석 연구원이었던 개미형 신세대 레플리로이드. 중력 방향을 바꾸는 능력을 사용하며, 헌터가 자신을 평가하고 이레귤러로 규정하는 태도에 반발한다.",
        "image_placeholder": "gravity_antonion.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "sources": [
            "x8_profile_gravity_antonion",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "반중력 연구소의 수석 연구원이었던 개미형 신세대 레플리로이드. 중력 방향을 바꾸는 능력을 사용하며, 헌터가 자신을 평가하고 이레귤러로 규정하는 태도에 반발한다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "earthrock_trilobyte",
        "name": "어스로크 트리로비치",
        "english_name": "Earthrock Trilobyte",
        "title": "삼엽충형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "메탈 밸리 레어 메탈 광산",
        "weakness": "스퀴즈 봄 / 중파참",
        "weapon": "엑스: 크리스털 월 / 제로: 열경단 / 엑셀: 바운드 블래스터",
        "profile": "우주 개발에 쓰이는 레어 메탈 광산을 관리하던 삼엽충형 신세대 레플리로이드. 반란 뒤 채굴 자원을 시그마에게 제공한다. 신세대의 우월함을 주장하며 헌터들을 구형이라고 깎아내린다.",
        "image_placeholder": "earthrock_trilobyte.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "earthrock_trilobyte",
            "x8_profile_earthrock_trilobyte",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "우주 개발에 쓰이는 레어 메탈 광산을 관리하던 삼엽충형 신세대 레플리로이드. 반란 뒤 채굴 자원을 시그마에게 제공한다. 신세대의 우월함을 주장하며 헌터들을 구형이라고 깎아내린다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "gigabolt_manowar",
        "name": "기가볼트 도쿠라겐",
        "english_name": "Gigabolt Man-O-War",
        "title": "해파리·고깔해파리형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "다이너스티 도시 지역",
        "weakness": "엑스: 크리스털 월 / 제로: 열경단 / 엑셀: 바운드 블래스터",
        "weapon": "플라즈마 뱅 / 뇌광섬",
        "profile": "도시 전력 공급·유지에 종사하던 고깔해파리형 신세대 레플리로이드. 도시의 에너지를 시그마에게 보내며 소란을 일으킨다. 헌터와의 대화에서는 자기 의지로 행동한다고 주장한다.",
        "image_placeholder": "gigabolt_manowar.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "sources": [
            "gigabolt_manowar",
            "x8_profile_gigabolt_manowar",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "evidence": {
            "status": "범위 한정 대조",
            "known": "도시 전력 공급·유지에 종사하던 고깔해파리형 신세대 레플리로이드. 도시의 에너지를 시그마에게 보내며 소란을 일으킨다. 헌터와의 대화에서는 자기 의지로 행동한다고 주장한다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "avalanche_yeti",
        "name": "아발란체 예티",
        "english_name": "Avalanche Yeti",
        "title": "예티형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "센트럴 화이트 환경 연구 시설",
        "weakness": "플라즈마 뱅 / 뇌광섬",
        "weapon": "드리프트 다이아몬드 / 빙룡승",
        "profile": "환경 연구 시설을 맡았던 신세대 레플리로이드. 환경 악화를 지켜보며 비관적으로 변했고 시그마가 약속하는 새 세계를 따른다. 센트럴 화이트에서 헌터들과 대립한다.",
        "image_placeholder": "avalanche_yeti.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "sources": [
            "x8_profile_avalanche_yeti",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "환경 연구 시설을 맡았던 신세대 레플리로이드. 환경 악화를 지켜보며 비관적으로 변했고 시그마가 약속하는 새 세계를 따른다. 센트럴 화이트에서 헌터들과 대립한다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "burn_rooster",
        "name": "번 코케코커",
        "english_name": "Burn Rooster",
        "title": "수탉형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "인페르노 폐기물 처리 시설",
        "weakness": "드리프트 다이아몬드 / 빙룡승",
        "weapon": "멜트 크리퍼 / 염강진",
        "profile": "화산의 열로 폐기물을 처리하는 시설에서 일하던 수탉형 신세대 레플리로이드. 헌터가 이레귤러로 규정해 폐기한 동료들의 복수를 주장하며 반란을 일으킨다. 그의 주장은 모든 폐기 처분이 부당했다는 객관적 증명과 구분한다.",
        "image_placeholder": "burn_rooster.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "sources": [
            "x8_profile_burn_rooster",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "화산의 열로 폐기물을 처리하는 시설에서 일하던 수탉형 신세대 레플리로이드. 헌터가 이레귤러로 규정해 폐기한 동료들의 복수를 주장하며 반란을 일으킨다. 그의 주장은 모든 폐기 처분이 부당했다는 객관적 증명과 구분한다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "bamboo_pandamonium",
        "name": "뱀부 판데모니움",
        "english_name": "Bamboo Pandamonium",
        "title": "판다형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "부스터 포레스트 로켓 센터",
        "weakness": "멜트 크리퍼 / 염강진",
        "weapon": "그린 스피너 / 엽단돌",
        "profile": "부스터 포레스트의 로켓 센터에서 등장하는 판다형 신세대 레플리로이드. 대나무를 닮은 관과 미사일로 무장했다. 파괴를 반복해 온 세계의 역사를 들어 시그마의 계획을 받아들인다.",
        "image_placeholder": "bamboo_pandamonium.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "sources": [
            "boss_design_panda",
            "ending_x8_script"
        ],
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "reviewedAt": "2026-10-25",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "부스터 포레스트의 로켓 센터에서 등장하는 판다형 신세대 레플리로이드. 대나무를 닮은 관과 미사일로 무장했다. 파괴를 반복해 온 세계의 역사를 들어 시그마의 계획을 받아들인다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "Characteristics·Strategy·Quotes의 외형, 병기, X와의 대화",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    },
    {
        "id": "dark_mantis",
        "name": "다크 네이드",
        "english_name": "Dark Mantis",
        "title": "사마귀형 보스",
        "series": "X8",
        "appearances": [
            "X8"
        ],
        "affiliation": "피치 블랙 지하 시설",
        "weakness": "샤이닝 레이 / 천조",
        "weapon": "섀도우 러너 / 나찰선",
        "profile": "지하 시설의 경비를 맡았던 사마귀형 레플리로이드. X8의 피치 블랙에서 등장하며 시그마 측에 가담한다. 빛을 증오하거나 어둠을 신봉한다는 별도의 신념은 확인한 자료로 단정하지 않는다.",
        "image_placeholder": "dark_mantis.png",
        "reviewNote": "소개·소속·별칭의 근거를 검토했습니다. 검토 완료와 사실 확정은 다릅니다. 아래 확인 범위와 보류 항목을 함께 읽어 주세요. 무기·약점 전면 검수는 별도 과제입니다.",
        "reviewedFields": [
            "profile",
            "affiliation",
            "title"
        ],
        "reviewedAt": "2026-10-25",
        "sourceScope": "기존 개별 인물 자료의 소개·활동지역을 한정해 참고. 직접 확인한 공식 원문은 별도 표시한 PSP 설명서뿐이며, 그 밖의 전사본·팬 위키·설정집 재인용은 원 게임·원책 대조와 구별합니다.",
        "sources": [
            "x8_profile_dark_mantis",
            "ending_x8_script",
            "boss_motif_index"
        ],
        "evidence": {
            "status": "범위 한정 대조",
            "known": "지하 시설의 경비를 맡았던 사마귀형 레플리로이드. X8의 피치 블랙에서 등장하며 시그마 측에 가담한다. 빛을 증오하거나 어둠을 신봉한다는 별도의 신념은 확인한 자료로 단정하지 않는다.",
            "pending": "소개·활동지역은 2차 자료와 대조했다. 성격의 단정, 일본어 대사와 설정집의 개별 표현은 추가 대조가 필요하다.",
            "correction": "기존 소개의 확인 범위를 표시했다. 별칭은 원어·출처 미대조여서 화면용 형태 설명으로 교체했다.",
            "locator": "개별 인물 소개·활동지역 자료",
            "edition": "X8 본편 참고. 리메이크·만화·팬 창작은 별도 구획.",
            "supplement": null,
            "titleNote": "기존 별칭의 공식 여부·한국어 번역을 확인하지 못해 형태 설명으로 교체. 이 제목은 편집 문구다."
        },
        "titleKind": "editorial"
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { bossesData };
} else {
    window.bossesData = bossesData;
}
