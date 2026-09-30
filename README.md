# PEELGUL2

제주 표선 감귤과 `Peel Bowl`을 소개하는 PEELGUL의 한국어 온라인 판매 랜딩페이지입니다. 감귤을 까고 향을 느끼고 맛보는 짧은 행동을 **“하루에 더하는 산뜻한 쉼표”**라는 브랜드 경험으로 전달합니다.

## 페이지 구성

1. **Hook** — 제품과 핵심 메시지를 동시에 보여주는 첫 화면
2. **Problem** — 바쁜 오후에 잠시 멈추기 어려운 상황에 대한 공감
3. **Solution** — `PEEL → SCENT → TASTE`로 이어지는 Fresh Break 제안
4. **Value** — 감귤 껍질을 자연스럽게 모으는 Peel Bowl 경험
5. **Proof** — 제주 표선 농장과 2대째 이어온 재배·선별 이야기
6. **Product** — 실제 제공 정보에 기반한 선물 세트 구성 및 가격
7. **CTA** — 선물하는 순간까지 이어지는 구매 유도 엔딩

## 제품 정보

- 제품명: PEELGUL Fresh Break Gift Set
- 구성: 제주 표선 감귤 10개, Peel Bowl 1개, Gift Package
- 가격: 36,800원
- 배송비: 포함
- 수확 시기: 11월–1월

근거가 없는 별점, 판매량, 후기, 인증, 효능 표현은 사용하지 않았습니다.

## 디자인 원칙

- 모바일 스크롤 환경에서 바로 읽히는 대형 타이포그래피
- 한글 전체에 `Noto Serif KR` 적용
- 웜 아이보리, 감귤 오렌지, 딥 코코아 브라운 중심의 컬러 시스템
- 초록색 대형 컬러 면과 순수 검정 배경을 배제한 따뜻한 브랜드 무드
- 제품 사진, 컬러 면, 정보 블록이 함께 구성되는 온라인 커머스형 편집 디자인
- `prefers-reduced-motion`을 존중하는 스크롤 등장 효과

## 파일 구조

```text
PEELGUL2/
├── index.html          # 한국어 페이지 구조와 메타 태그
├── styles.css          # 반응형 레이아웃과 브랜드 스타일
├── script.js           # 메뉴, 스크롤 진행률, 등장 효과
├── assets/             # 고해상도 제품 사진, 로고, 메타 이미지, 파비콘
├── dist/               # 배포용 정적 파일
└── README.md           # 프로젝트 설명
```

## 이미지 자산

- `01_hero_peel.png` — 감귤을 까는 순간
- `02_fresh_break_lifestyle.png` — 일상 속 Fresh Break
- `03_gift_set.png` — 선물 세트 전체 구성
- `04_peel_bowl.png` — Peel Bowl 디테일
- `05_farm_story.png` — 제주 표선 농장 이야기
- `06_gift_moment.png` — 선물하는 순간
- `peelgul-og.png` — 소셜 공유용 전용 메타 이미지
- `favicon.png`, `favicon-32.png`, `apple-touch-icon.png` — 귤 심벌 파비콘

제품·라이프스타일 사진은 모두 원본 고해상도 파일을 사용하며 HTML에 실제 이미지 비율을 지정해 레이아웃 흔들림을 줄였습니다.

## 실행 방법

별도의 빌드나 설치가 필요하지 않습니다. `index.html`을 브라우저에서 열거나 정적 웹 서버로 폴더를 실행하면 됩니다.

```bash
python3 -m http.server 4175
```

브라우저에서 `http://localhost:4175`에 접속합니다.

## 기술 구성

- Semantic HTML5
- CSS3 / 반응형 미디어 쿼리
- Vanilla JavaScript
- Open Graph / Twitter Card
- 접근성을 고려한 키보드 탐색, 대체 텍스트, 스킵 링크

## 메타 이미지 및 파비콘 제작

두 이미지는 PEELGUL의 크림·오렌지·브라운 색상과 실제 선물 세트 비주얼에 맞춰 AI 이미지 생성으로 별도 제작했습니다.

- 메타 이미지: 실제 선물 세트를 오른쪽에 크게 배치하고 왼쪽에 `PEELGUL`과 슬로건을 배치한 가로형 비주얼
- 파비콘: 작은 크기에서도 식별되는 귤과 잎의 단일 심벌
