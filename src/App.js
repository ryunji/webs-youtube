import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'                     //Home 컴포넌트를 불러오기 위해서 './pages/Home' 경로로부터 가져와서 연동
import Today from './pages/Today'
import Developer from './pages/Developer'
import Webd from './pages/Webd'
import Website from './pages/Website'
import Gsap from './pages/Gsap'
import Port from './pages/Port'
import Youtube from './pages/Youtube'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

// App은 익명함수의 형태로 결과값 반환.
const App = () =>{
    return (
        //<div>App</div>
        // Shift + Alt : 블럭으로 한번에 선택 가능 */}
        // BrowserRouter는 react-router-dom의 컴포넌트로 가상의 주소 쓰겠다는 의미
        // 가상의 주소를 만들어주는 이유는 싱글페이지 구현을 위함 */}
        <BrowserRouter>
            {/* Routes → 주소의 집합체라는 의미를 담고 있다. */}
            <Routes>
                                                                                    {/* 0. 해당 부분에 내용물들을 보여주는 것을 컴포넌트라고 한다. */}
                <Route path='/'                     element={<Home/>}/>             {/* 1. 개별 페이지는 컴포넌트 이기 때문에 안에 들어가는 요소를 의미하는 element= 다음에 이름(Home)으로 표기 */}
                <Route path='/today'                element={<Today/>}/>            {/* 2. 해당 컴포넌트를 불러올 수 있도록 element를 설정하는 것. */}
                <Route path='/developer'            element={<Developer/>}/>
                <Route path='/webd'                 element={<Webd/>}/>
                <Route path='/website'              element={<Website/>}/>
                <Route path='/gsap'                 element={<Gsap/>}/>             
                <Route path='/port'                 element={<Port/>}/>
                <Route path='/youtube'              element={<Youtube/>}/>
                <Route path='/channel/:channelID'   element={<Channel/>}/>
                <Route path='/video/:videoID'       element={<Video/>}/>            {/* 3. 컴포넌트를 만들때는 앞에를 대문자로 표기한다. */}
                <Route path='/search/:searchID'     element={<Search/>}/>           {/* 4. url에 그냥 search만 쓰면 Not.jsx 페이지를 가져옴. search 페이지를 제대로 호출하기 위해서는 뒤에 키워드(문자열)를 작성해야 한다. ex) /search/개발 */}
                <Route path='/*'                    element={<Not/>}/>              {/* 5. 여기에는 명시적으로 연동되어 있지 않지만 없는 페이지를 호출하면 Not.jsx 페이지를 호출 함. */}
            </Routes>
        </BrowserRouter>
    )
}

export default App