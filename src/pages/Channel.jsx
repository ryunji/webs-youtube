// JSX는 JavaScript XML의 약자로, 리액트에서 UI를 작성하기 위한 문법 확장이다.
// JSX를 사용하면  JavaScript 코드 내부에서 HTML과 유사한 구문으로 UI 요소를 작성할 수 있어,
// 가독성을 높이고 개발자들이 리액트 컴포넌트를 작성하기 쉬워진다.

// → 자바스크립트에서 HTML 코드를 쓸 수 있게 하기 위해 만들어진 것?

import React from 'react'
import Main from '../components/section/Main'
// JSX는 JavaScript XML의 약자로, 리액트에서 UI를 작성하기 위한 문법 확장이다.
// JSX를 사용하면  JavaScript 코드 내부에서 HTML과 유사한 구문으로 UI 요소를 작성할 수 있어,
// 가독성을 높이고 개발자들이 리액트 컴포넌트를 작성하기 쉬워진다.
// 자바스크립트에서 HTML


const Channel = () => {
  return (
    // <div>Channel</div>
    <Main title="The Collecotors 유튜브" description="The Collecotors 유튜브에 오신것을 환영합니다.">
      Channel
    </Main>
  )
}

export default Channel
