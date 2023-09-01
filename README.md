<div align='center'>
  <h1>원티드 프리온보딩 프론트엔드  2주차 과제</h1>
</div>

- 본 레포지토리는 프리온보딩 프론트엔드 2주차 과제입니다.
- 특정 깃헙 레포지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트를 구축하였습니다.

  <br />

### 📎 [배포 사이트](https://wanted-pre-onboarding-12th-2.vercel.app/)
![2주차목록이미지](https://github.com/dbwlgp1yng/wanted-pre-onboarding-frontend/assets/126330595/d1c62b82-bfac-4a7c-b358-ddbd89f65cda)

<br />

### 🗓️ 프로젝트 기간
#### 2023.8.29 ~ 2023.9.1

<br />

### 📌 프로젝트 실행방법

1. Clone the repo

```javascript
$ git clone https://github.com/wanted-pre-onboarding-12th-team-5/pre-onboarding-12th-2-5.git
```

2. Install npm packages & get start

```javascript
$ npm install
$ npm start
```

<br />

### 📌 기술 스택
<div>
  <img src="https://img.shields.io/badge/react-61DAFB?style=flat&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=flat&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=flat&logo=styledcomponents&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=flat&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/react router-CA4245?style=flat&logo=react router&logoColor=white">
</div>

<br />

### 📌 기능 구현

1. 이슈 목록 화면
- github API인 Octokit을 사용하여 이슈 목록을 불러옵니다.
- 이슈 클릭시 해당 이슈번호('/issues/:id') 의 상세 페이지로 이동합니다.
- issues 배열을 순회하면서, idx % 4 === 3 조건을 사용하여 4번째 이슈 아래에 광고 배너를 표시합니다. 
- 인피니트 스크롤 기능은 팀 과제 이후 배운 내용을 토대로 구현할 예정입니다. 


2. 이슈 상세 화면
- 현재 경로의 url 파라미터에서 id 값을 추출하여 이슈 목록의 해당 id와 일치하는 이슈를 조회합니다.
- 이슈 컨텍스트로부터 이슈 목록을 가져와서 없는 경우, Error 화면을 렌더링합니다. 
- 이슈의 본문 내용에 마크다운 라이브러리를 사용하였습니다.


3. 공통 헤더
- 최상단 App 컴포넌트에서 공통 헤더를 사용하기 전에, 헤더에 표시할 정보를 정의합니다. 
- 별도의 헤더 컴포넌트를 생성하여 전달받은 owner와 repo 값을 표시하고, 클릭 이벤트를 통해 홈페이지로 이동할 수 있도록 구현하였습니다.
