- 등장요소에 대한 정보를 분석하여 보고서를 생성할 때는 **스킬**을 사용한다

### 사용 가능한 스킬
- report-boss: 록맨 X 시리즈의 이레귤러 보스들의 상세 정보(약점, 패턴, 설정 등)를 바탕으로 데이터 보고서를 생성합니다.
- report-character: 주요 인물(엑스, 제로, 등) 및 기타 스토리 인물들의 배경, 시리즈별 행적 정보 등을 분석하여 보고서를 생성합니다.
- report-story: 록맨 X 시리즈(X1~X8)의 세계관 및 줄거리 정보를 요약하여 보고서를 생성합니다.

### 보고서 위치
- 수집된 데이터는 컨텐츠 렌더링을 위해 `data/` 디렉토리 내에 JS 또는 JSON 형태로 저장됩니다.

### UI 구현 가이드
- UI_GUIDE.md를 참고하여 록맨 X의 사이버&메카닉 분위기(네온톤 디자인)로 구현한다.
- <header class="cyber-header"> 제외하고는 한국어로 사용

### 로컬라이징 가이드
- 사용자 노출 텍스트는 모두 한국어로 작성한다. 단 `<header class="cyber-header">` 내부의 영문 타이포그래피("HUNTER BASE DATABASE" 등)는 의도적으로 영문 유지.
- 캐릭터/보스 한국어 명칭은 정발판/공식 한글 표기를 우선 사용 (예: "엑스" / "제로" / "시그마").
- `english_name` 필드는 원작 영문 표기 그대로 유지하여 검색·식별 용도로 활용한다.
- UI 라벨은 한국어, 데이터 필드 키는 영문 snake_case 또는 camelCase로 작성.
- 새 데이터 추가 시 `affiliation_group`이 명확하면 명시하고, 그렇지 않으면 `data/affiliation-rules.js`의 키워드 룰에 의존한다.

### 데이터 스키마
- 캐릭터(`data/characters.js`): `{ id, name, english_name, type, affiliation, rank, debut, appearances, profile, story_arc?, affiliation_group? }`
- 보스(`data/bosses.js`): `{ id, type, name, english_name, title, series, appearances, affiliation, weakness, weapon, profile, affiliation_group? }`
- 스토리(`data/story.js`): `storyData`, `timelineData`, `x9Data` 세 종류 export.
