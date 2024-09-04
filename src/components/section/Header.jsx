//컴포넌트는 앞글자에 대문자를 쓴다.
import React from 'react'

const Header = () => {
  return (
    
    //여기서 role은 웹 표준을 지켜주기 위해서 이 사이트 영역의 역할 의미를 설정해준 것.
    <header id="header" role="banner">
      header
    </header>
  )
}

export default Header