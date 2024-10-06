import React, {Suspense, lazy} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main';

// import Home from './pages/Home'                     : Home 컴포넌트를 불러오기 위해서 './pages/Home' 경로로부터 가져와서 연동

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Developer = lazy(() => import('./pages/Developer'));
const Webd = lazy(() => import('./pages/Webd'));
const Website = lazy(() => import('./pages/Website'));
const Gsap = lazy(() => import('./pages/Gsap'));
const Port = lazy(() => import('./pages/Port'));
const Youtube = lazy(() => import('./pages/Youtube'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));

// App은 익명함수의 형태로 결과값 반환.
const App = () =>{
    return (
        //<div>App</div>
        // Shift + Alt : 블럭으로 한번에 선택 가능 */}
        // BrowserRouter는 react-router-dom의 컴포넌트로 가상의 주소 쓰겠다는 의미
        // 가상의 주소를 만들어주는 이유는 싱글페이지 구현을 위함 */}
        <BrowserRouter>
            <Suspense fallback={<Main/>}>
                {/* Routes → 주소의 집합체라는 의미를 담고 있다. */}
                <Routes>
                    <Route path='/'                     element={<Home/>}/>             {/* 0. 해당 부분에 내용물들을 보여주는 것을 컴포넌트라고 한다. */}
                    <Route path='/today'                element={<Today/>}/>            {/* 1. 개별 페이지는 컴포넌트 이기 때문에 안에 들어가는 요소를 의미하는 element= 다음에 이름(Home)으로 표기 */}
                    <Route path='/developer'            element={<Developer/>}/>        {/* 2. 해당 컴포넌트를 불러올 수 있도록 element를 설정하는 것. */}
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
            </Suspense>
        </BrowserRouter>
    )
}

export default App