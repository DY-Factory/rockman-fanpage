# Rockman X Fanpage - Claude 가이드

## 프로젝트 개요
록맨 X 시리즈(X1~X8)의 캐릭터/보스/스토리/세계관을 정적 HTML 대시보드로 제공하는 팬페이지. 빌드 시스템 없이 `python3 -m http.server 8000`으로 서빙.

## 디렉터리
- `data/` — 캐릭터, 보스, 스토리, 소속 분류 룰 (모두 `window.*`로 노출되는 글로벌 JS)
- `dashboard/` — `index.html` + `style.css` + `script.js` 단일 페이지
- `GEMINI.md` — 보고서 스킬 및 데이터 작성 가이드 (Gemini 전용)
- `UI_GUIDE.md` — 사이버 네온 디자인 철학
- `USER_GUIDE.md` — 로컬 서빙 명령

## 작업 원칙
1. **빌드 도구 추가 금지**: 정적 서빙 단순성을 유지한다. ES Module도 도입하지 않음 (브라우저에서 file:// 호환 위해 `<script>` 직접 로드).
2. **인라인 스타일 금지**: 신규 스타일은 `style.css`에 클래스로 추가하고 `class` 속성으로 적용.
3. **데이터 우선**: 분류/매핑 룰은 코드에 박지 말고 `data/`의 JSON 친화 모듈로 외부화.
4. **이벤트 위임**: 동적으로 생성된 카드/항목은 부모에 단일 리스너를 두고 `data-*`로 식별.
5. **innerHTML XSS**: 데이터 JS는 신뢰할 수 있지만, 향후 외부 입력 가능성을 고려해 ID/이름 같은 식별자는 가급적 DOM API(`textContent`, `dataset`)로 주입.

## 데이터 스키마
- `charactersData[].type`: `'HUNTER' | 'IRREGULAR' | 'REPLOID'`
- `bossesData[].type`: 항상 `'IRREGULAR'`
- `affiliation_group`(선택): 룰 매칭을 우회하는 명시적 그룹 지정.

## 흔히 묻는 질문
- **새 캐릭터 추가**: `data/characters.js` 배열에 객체 추가만으로 자동 렌더링.
- **새 부대 그룹 분류**: `data/affiliation-rules.js`에 `{ keywords, group }` 객체 추가.
- **탭 추가**: `index.html`에 `<button class="tab-btn" data-target="..."> + <section id="..."></section>` 한 쌍과, `script.js`의 렌더링 함수 등록.
