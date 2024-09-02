# 나만의 유튜브 사이트 만들기

 해당 프로젝트는 유튜버 webstoryboy 선생님의 리액트(React.js)로 나만의 유튜브 사이트 만들기 프로젝트 영상을 보며 따라 만든 클론코딩 프로젝트 입니다.  
(유튜브 영상 : https://youtu.be/Yoqm5ah7qw4?si=c_U4kery0RENAzDd)

 위 영상은 React 프레임워크와 YouTube API를 이용, 자신만의 영상 사이트를 만들 수 있는 가이드를 제공합니다.  
React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, 
API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해할 수 있도록 도움을 주는 강의 입니다.

## 프로젝트 목표
- React의 기본 개념 이해
- 컴포넌트 구조화 및 상태 관리 방법 학습
- YouTube Data API를 활용하여 외부 데이터를 가져오는 방법 학습
- API 응답을 처리

## 프로젝트 기간
시작 : 2024년 09월 02일 월요일  
종료 : 

## 완성작 보기
미리보기 : 

## 사용스택
- node.js를 설치하고 사용합니다. 
- react를 사용하여 사이트를 완성합니다. 
- youTube Api를 이용하여 데이터를 가져옵니다.
- rapidapi를 이용하여 데이터를 가져옵니다.
- netlify를 통해 사이트를 배포합니다.
- firebase를 통해 사이트를 배포합니다.
- vercel를 통해 사이트를 배포합니다.
- git을 사용하여 파일을 관리합니다.

## 프로젝트 실행
- **프로젝트 설치**
- 1.react를 설치합니다.               
  - `npx create-react-app 타이틀`
- **라이브러리 설치**
- 2.react-router-dom을 설치합니다.  
  - `npm install react-router-dom`  
    (리엑트는 싱글페이로, 한개의 페이지로 이루어져 있기 때문에 여러 페이지를 만들려면 스크립트 처리가 필요하다)
- 3.axios를 설치합니다.
  - `npm install axios`
- 4.react-icons을 설치합니다. 
  - `npm install react-icons`
- 5.react-player를 설치합니다.        
  - `npm install react-player`  
    (영상 관련 작업을 편리하게 할 수 있도록 도와준다)
- 6.sass를 설치합니다.                
  - `npm install sass`
- 7.react-helmet-async를 설치합니다.  
  - `npm install react-helmet-async`  
    (페이지마다 메타 데이터를 웹 표준을 준수하거나 검색에 노출이 잘 될 수 있도록 처리해 준다)
- 8.swiper를 설치합니다.              
  - `npm install swiper`  
    (이미지 슬라이드 관련 작업을 도와준다)

## 기타
- 참고 사이트 : https://webstoryboy.co.kr/1964
- 마크다운 개행은 Space 2번 + Enter
- package.json과 package_lock.json 파일의 차이  
  : package.json은 프로젝트에 대한 기본 정보인 메타 데이터와 의존성의 범위를 정의하는 파일인 반면
    package-lock.json 파일은 그 중에서도 의존성의 정확한 버전과 구조를 기록하여 설치 일관성을 보장하는 파일이다.