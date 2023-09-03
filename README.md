<div align='center'>
  <h1>원티드 프리온보딩 프론트엔드  2주차 과제</h1>
</div>

- 본 레포지토리는 프리온보딩 프론트엔드 2주차 과제입니다.
- 특정 깃헙 레포지토리의 이슈 목록과 상세 내용을 확인하는 웹 사이트를 구축하였습니다.

  <br />

### 📎 [배포 사이트](https://wanted-pre-onboarding-12th-2.vercel.app/)
<image width="600" alt="main_image" src="https://github.com/dbwlgp1yng/wanted-pre-onboarding-frontend/assets/126330595/d1c62b82-bfac-4a7c-b358-ddbd89f65cda" />

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

#### 1. 이슈 목록 
- github API인 Octokit을 사용하여 facebook/react의 이슈 목록을 불러옵니다.
- 이슈 클릭시 해당 이슈번호('/issues/:id') 의 상세 페이지로 이동합니다.
- issues 배열을 순회하면서, idx % 4 === 3 조건을 사용하여 4번째 이슈 아래에 광고 배너를 표시합니다. 

 
#### 2. 인피니트 스크롤
- IntersectionObserver API를 이용하여 무한 스크롤 기능을 구현하였습니다.
- 화면 스크롤을 통해 추가 데이터를 로드할 수 있습니다.
![scroll_row](https://github.com/dbwlgp1yng/wanted-pre-onboarding-12th-2/assets/126330595/c03721ab-a8aa-4270-8619-6ebe281cf474)



```ts
useEffect(() => {
    if (loading && target.current) {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            getMorePages();
          }
        },
        { threshold: 1 }
      );
      observer.observe(target.current);
    }
  }, [loading]);
```
화면에서 ```target.current``` 가 존재하면 새로운 IntersectionObserver를 생성합니다. <br />
IntersectionObserver는 화면에서 target.current 요소가 보이는지 감시하며, <br />
화면에 요소가 보인다면 ```getMorePages``` 함수를 호출하여 새 데이터 페이지를 가져옵니다.


<br />

#### 3. 이슈 상세 화면
- 이슈 컨텍스트로부터 이슈 목록을 가져와서 없는 경우, Error 화면을 렌더링합니다. 
- 이슈의 본문 내용에 react-markdown 라이브러리를 사용하였습니다.
- 이슈의 제목, 작성자, 작성일, 코멘트, 내용 등을 볼 수 있습니다.
<img width="600" alt="detail_image" src="https://github.com/dbwlgp1yng/wanted-pre-onboarding-12th-2/assets/126330595/8ca24068-d068-4b6e-b368-bb581540aed6" />

