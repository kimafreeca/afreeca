# 방송 시청자 관리 홈페이지

GitHub Pages에서 서비스하는 정적 홈페이지입니다. 별도 빌드나 패키지 설치가 필요하지 않습니다.

## 파일

- `index.html`: 페이지 내용, 검색 메타 정보, 기존 Google Analytics 설정
- `css/style.css`: PC / 태블릿 / 모바일 반응형 스타일
- `js/main.js`: 플랫폼별 문의 대화상자
- `assets/platforms/`: 실제 플랫폼 로고와 출처 목록(`sources.json`)
- `google4a8c5aaaecbe95fd.html`, `robots.txt`, `sitemap.xml`: 기존 검색 등록 파일

## 미리보기

프로젝트 폴더에서 `python -m http.server 8765`를 실행한 후 `http://localhost:8765`를 엽니다. `index.html` 파일을 브라우저로 직접 열어도 주요 기능을 확인할 수 있습니다.

## 문의 채널

- 카카오톡: https://open.kakao.com/o/s6ecK27h
- 텔레그램: https://t.me/afreeca101

플랫폼 로고는 식별을 위해 사용하며 제휴나 공식 운영을 의미하지 않습니다. SOOP와 구 아프리카TV는 한 항목으로 표시합니다. 틱톡 마크는 Simple Icons 배포본을 사용하고, 나머지 로고는 각 플랫폼 공식 사이트의 이미지 파일을 사용합니다. 로고는 로컬에 보관해 외부 이미지 주소 변경의 영향을 줄였습니다.

## 배포

기존 GitHub Pages 설정을 유지한 채 위 파일들을 저장소 루트에 반영합니다. 새로운 호스팅 서비스나 프레임워크로 이전하지 않습니다.
