import React from 'react'

import Logo from '../header/Logo';
import Menu from '../header/Menu';
import Sns from '../header/Sns'

//강의 8강 : react는 컴포넌트의 반복을 싫어한다.
const Header = () => {
    return (
        //여기서 role은 웹 표준을 지켜주기 위해서 이 사이트 영역의 역할 의미를 설정해준 것.
        <header id='header' role="banner">
            <Logo/>
            <Menu/>
            <Sns/>
        </header>
    )
}

export default Header