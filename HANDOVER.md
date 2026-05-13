# WHINISH 프로젝트 핸드오버 문서
> **최종 업데이트**: 2026-05-12 03:20 KST
> **GitHub**: gmaniakg/whinish
> **Live URL**: https://whinish.vercel.app
> **로컬 경로**: c:\Users\lionk\Documents\antigravity\whinish\

---

## 1. 프로젝트 개요

### 브랜드 콘셉트 (매우 중요!)
- **화이트스타일치과** = 30년 전통의 정통 치과 (메인 브랜드, 이름 변경 절대 불가)
- **휘니쉬(WHINISH)** = 화이트스타일의 **프리미엄 서브 브랜드** (기술의 정점)
- 두 브랜드는 **상호보완 관계**이며, 휘니쉬가 화이트스타일의 프리미엄 라인임
- 로고: WHITESTYLE + 작은 글씨 WHINISH PREMIUM
- **모든 영문 텍스트는 대문자(UPPERCASE)로 통일** (CSS text-transform: uppercase 적용됨)

### 핵심 인물
| 이름 | 직함 | 사진 파일 | 포지셔닝 |
|------|------|-----------|----------|
| 김준헌 | 병원장 | assets/img/dr-kim.jpg (실제 사진) | 서울대 출신, 30년 신뢰, 임플란트,교정 전문 |
| 이봉진 | 대표원장 | assets/img/dr-lee.jpg (실제 사진) | 초정밀 심미보철 외과수술전문, 휘니쉬 디렉터 |

---

## 2. 기술 스택

| 항목 | 기술 |
|------|------|
| 프레임워크 | Vanilla HTML5, CSS3, JavaScript (모듈형 로더) |
| 폰트 | Pretendard (CDN) |
| 배포 | Vercel (GitHub 연동 자동 배포) |
| API | Vercel Serverless Function (/api/reviews.js) |
| 버전관리 | Git -> GitHub (gmaniakg/whinish, master 브랜치) |

### 배포 흐름
git add . -> git commit -> git push origin master -> Vercel 자동 빌드 (약 15~20초)

---

## 3. 프로젝트 구조

whinish/
├── index.html                    # 메인 (히어로+유오성+뉴스+글로벌리뷰+브랜드+숏폼)
├── api/reviews.js                # 네이버 리뷰 Serverless API (6시간 캐싱)
├── assets/css/index.css          # 글로벌 CSS (디자인 시스템)
├── assets/js/main.js             # 헤더/푸터 로더 + 스크롤 애니메이션
├── assets/img/                   # 이미지 (dr-kim.jpg, dr-lee.jpg 등)
├── components/header.html        # 공통 GNB (UTF-8 인코딩 주의!)
├── components/footer.html        # 공통 푸터 (대표번호, SNS 링크)
├── hospital/principle.html       # 철학/비전 (듀얼 브랜드 설명)
├── hospital/history.html         # 연혁 (1990~2021 타임라인)
├── hospital/doctors.html         # 의료진 (김준헌+이봉진 실제 사진)
├── hospital/floor.html           # 층별안내
├── hospital/map.html             # 오시는길
├── minish/about.html             # WHINISH란?
├── minish/ultraprecision.html    # 초정밀 솔루션
├── minish/fit.html               # WHINISH FOR ME
├── minish/cases.html             # 전후사례
├── system/oneday.html            # 원데이 시스템
├── system/clean.html             # 멸균 시스템
├── system/global.html            # 글로벌 메디컬
├── center/implant.html           # 임플란트
├── center/ortho.html             # 치아교정
├── center/whitening.html         # 치아미백
├── consult/reservation.html      # 예약하기 (네이버/카카오/전화)
├── consult/online.html           # 온라인상담
├── consult/review.html           # 네이버 리뷰 (동적 로딩)
├── consult/global-reviews.html   # 코네스트 일본 환자 후기 (한국어 번역)
├── consult/handwritten-reviews.html # 자필후기 (whitestyle.com 이관)
├── media/video.html              # 영상 갤러리 (YouTube+TikTok)
├── media/news.html               # 언론보도 (39건+ 네이버 뉴스 스크랩)
└── media/instagram.html          # 인스타그램 (한국/일본 계정 탭 전환)

---

## 4. 주요 외부 링크 정리

| 채널 | URL |
|------|-----|
| 네이버 예약 | booking.naver.com/booking/13/bizes/265482 |
| 카카오톡 | pf.kakao.com/_Vtxdwl |
| 네이버 톡톡 | talk.naver.com/ct/w4bkos |
| 인스타(한국) | instagram.com/whitestyledentalclinic |
| 인스타(일본) | instagram.com/whitestylejp |
| 유튜브 | youtube.com/@whitestyle |
| 공식 홈페이지 | whitestyle.com |
| 대표전화 | 1577-7287 |
| 이벤트 | whitestyle.com/bbs/board.php?bo_table=notice&wr_id=26923 |

### 임베드된 YouTube 영상
| 영상 ID | 위치 | 설명 |
|---------|------|------|
| gsJ7fYfQueA | index.html (Trust 섹션) | 유오성 23년 단골 인터뷰 |
| D_lImhZ_8zQ | index.html (Shorts 섹션) | 원데이 시스템 숏폼 |
| iAaFdYV3bAQ | media/video.html | 환자 사례 영상 |
| M_TNjsoS6a4 | media/video.html | 디지털 진단 시스템 영상 |

---

## 5. 이번 세션 완료 작업 (2026-05-11~05-12)

1. YouTube Shorts 메인 페이지 임베드 (D_lImhZ_8zQ)
2. 인스타그램 한국/일본 계정 탭 전환 UI
3. 듀얼 브랜드 콘셉트 적용 (화이트스타일=본체, 휘니쉬=프리미엄)
4. 유오성 인터뷰 영상 Trust Zone 배치 (ROI 극대화)
5. 전체 영문 대문자 통일 (text-transform: uppercase)
6. 병원장 약력 데이터 연혁 페이지에 배치 (1990~2021)
7. 예약 시스템 구축 (네이버/카카오/전화 3채널)
8. 푸터 정보 최적화 (대표번호, SNS, 이벤트 링크)
9. 의료진 실제 사진 적용 (김준헌+이봉진)
10. 네이버 뉴스 39건+ 스크랩 -> 언론보도 페이지
11. 메인 페이지에 언론 하이라이트 노출
12. 코네스트 일본 환자 후기 번역 및 글로벌 후기 페이지
13. 메인 페이지 Global Trust 섹션 추가
14. 자필후기 페이지 구축 (18건)
15. 헤더 한글 인코딩 완전 수정 (UTF-8)
16. 이벤트 배너 메인 최상단 추가

---

## 6. 알려진 이슈 및 주의사항

### 인코딩 문제
- components/header.html은 반드시 UTF-8 (BOM 없음)으로 저장해야 함
- PowerShell: [System.IO.File]::WriteAllText() + [System.Text.Encoding]::UTF8 사용 권장
- VS Code에서 직접 편집 시 하단 상태바의 인코딩이 UTF-8인지 반드시 확인

### whitestyle.com 접근 제한
- whitestyle.com은 외부 스크래핑 차단 (403 Forbidden)
- 자필후기 내용은 실제 게시판과 대조하여 수정 필요할 수 있음

### 네이버 리뷰 API
- /api/reviews.js는 네이버 차단 우회를 위해 데이터 스냅샷 방식 사용
- 실제 네이버 플레이스 직접 크롤링은 429 에러로 불가
- 6시간마다 stale-while-revalidate 캐싱 적용됨

### '준비 중' 페이지들
아래 페이지들은 기본 템플릿만 있고 실제 콘텐츠 미완성:
- center/ortho.html (치아교정)
- center/whitening.html (치아미백)
- consult/online.html (온라인상담)
- system/clean.html (멸균 시스템)
- system/global.html (글로벌 메디컬)
- minish/fit.html (WHINISH FOR ME)

---

## 7. 다음 단계 (TODO)

### 우선순위 높음
- [x] 자필후기 내용을 실제 whitestyle.com 게시판과 대조하여 정확한 내용으로 교체 (20건 반영 완료)
- [x] '준비 중' 페이지들에 실제 콘텐츠 작성 (교정, 미백, 시스템, 글로벌, 상담, WHINISH FOR ME 완료)
- [x] 모바일 반응형 최적화 (기본 미디어 쿼리 적용 완료)
- [x] 문의 폼에 Web3Forms 연동 (UI 및 기본 연동 완료, 키 설정 대기)

### 우선순위 중간
- [ ] 인스타그램 실제 비슷한 게시물을 찾아 이미지 교체 (현재 AI 생성 이미지)
- [ ] 코네스트 후기 추가 수집 (현재 5건 -> 전체로 확대)
- [ ] GA4 (Google Analytics) 트래킹 코드 삽입
- [ ] SEO 메타 태그 정교화 (각 페이지별 고유 description)

### 우선순위 낮음
- [ ] AI 챗봇 재연동 (Gemini API / Vercel Serverless)
- [ ] Before/After 슬라이더 구현
- [ ] 다국어(일본어) 페이지 별도 구축
- [ ] 성능 최적화 (이미지 WebP 변환, Lazy Loading)

---

## 8. 다른 컴퓨터에서 이어서 작업하기

# 1. 프로젝트 클론
git clone https://github.com/gmaniakg/whinish.git
cd whinish

# 2. Vercel CLI 설치 (선택)
npm i -g vercel

# 3. 로컬에서 테스트
# 간단하게 Live Server (VS Code 확장) 또는:
npx serve .

# 4. 수정 후 배포
git add .
git commit -m '설명'
git push origin master
# -> Vercel이 자동으로 빌드 및 배포 (15~20초)

---

## 9. 디자인 시스템 (CSS 변수)

--primary-color: #001f3f    /* Deep Navy (메인 컬러) */
--secondary-color: #ffffff
--accent-color: #d4af37     /* Gold (포인트 컬러) */
--text-main: #333333
--text-muted: #666666
--bg-light: #f8f9fa
--border-color: #e5e5e5
--font-main: 'Pretendard'

---

> 이 문서를 AI 에이전트에게 전달하면 프로젝트 맥락을 즉시 파악하고 이어서 작업할 수 있습니다.