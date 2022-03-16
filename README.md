## My-diary : 하루 생활을 자유롭게 기록할 수 있는 사이트

## 개발 배경 및 개발 목적
일기는 그날의 자신을 되돌아 볼 시간을 제공하며 자유롭게 자신의 생각과 감정을 표현하여 자기 성찰은 물론, 정신 건강을 개선하는 데에도 도움을을 준다는 연구결과를 바탕으로 타인의 감시가 없는 자유로운 곳에서 하루를 기록할 수 있게 하는 것이 My-diary의 개발목적이다.


## 사용기술 및 개발 환경
- React  (react-router)
- Redux ( redux-saga , redux-actions, redux-dev-tools)
- Ant Design
- CSS 
- HTML
- JavaScript

## 구현 기능 
+ Redux를 사용하여 효율적으로 전역상태와 로직 파일 관리
+ Redux와 라우팅 기능을 연동하기 위해 connected-react-router 사용 (history객체로 push ) 
+ 리덕스 미들웨어 redux-saga , redux-dev-tools 사용하여 더욱 효율적으로 Redux 관리
+ UI 프레임워크인 Ant Design을 사용해 다양한 컴포넌트 사용 ( 만족도 기능 구현 )
+ CURD 모든 기능 구현
+ axios를 사용하여 비동기식으로 서버와 통신하여 로그인, 로그아웃 기능 구현

