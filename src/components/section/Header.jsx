//컴포넌트는 앞글자에 대문자를 쓴다.
import React from 'react'
import { CiBaseball } from "react-icons/ci";
import { CiCoins1 } from "react-icons/ci";
import { CiBoxes } from "react-icons/ci";
import { CiBullhorn } from "react-icons/ci";
import { CiCoffeeCup } from "react-icons/ci";
import { CiDumbbell } from "react-icons/ci";
import { CiFries } from "react-icons/ci";
import { CiMoneyBill } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiOutlineCodepen } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Header = () => {
  return (
    
    //여기서 role은 웹 표준을 지켜주기 위해서 이 사이트 영역의 역할 의미를 설정해준 것.
    <header id='header' role="banner">
      <h1 className='header__logo'>
        <a href='/'>
          {/* em : emphasis, 강조를 나타내는 인라인 요소, 시각적으로는 존재하지만, 사용자가 인식하지 못하게 된다. */}
          <em aria-hidden='true'></em>
          <span>The Collectors<br />YouTube</span>
        </a>
      </h1>
      
      <nav className='header__menu'>
        <ul className='menu'>
          {/* <li>
            <a href=''>뉴렉처</a>
          </li> */}
          <li className='active'>
              <a href='/'>
                  <CiBaseball /> 웹스토리보이
              </a>
          </li>
          <li>
              <a href='/today'>
                  <CiMoneyBill /> 추천 영상
              </a>
          </li>
          <li>
              <a href='/developer'>
                  <CiCoins1 /> 추천 개발자
              </a>
          </li>
          <li>
              <a href='/webd'>
                  <CiBoxes /> 웹디자인기능사
              </a>
          </li>
          <li>
              <a href='/website'>
                  <CiBullhorn /> 웹표준 사이트
              </a>
          </li>
          <li>
              <a href='/gsap'>
                  <CiCoffeeCup /> GSAP Parallax
              </a>
          </li>
          <li>
              <a href='/port'>
                  <CiDumbbell /> 포트폴리오 사이트
              </a>
          </li>
          <li>
              <a href='/youtube'>
                  <CiFries /> 유튜브 클론 사이트
              </a>
          </li>
        </ul>

        <ul className='keyword'>
          <li>
              <a href='/search/webstoryboy'>webstoryboy</a>
          </li>
          <li>
              <a href='/search/html'>HTML</a>
          </li>
          <li>
              <a href='/search/css'>CSS</a>
          </li>
          <li>
              <a href='/search/javascript'>JavaScript</a>
          </li>
          <li>
              <a href='/search/react.js'>React.js</a>
          </li>
          <li>
              <a href='/search/vue.js'>Vue.js</a>
          </li>
          <li>
              <a href='/search/next.js'>Next.js</a>
          </li>
          <li>
              <a href='/search/node.js'>Node.js</a>
          </li>
          <li>
              <a href='/search/sql'>SQL</a>
          </li>
          <li>
              <a href='/search/React Portfolio'>portfolio</a>
          </li>
          <li>
              <a href='/search/NewJeans'>music</a>
          </li>
        </ul>
      </nav>
      
      <div className='header__sns'>
        <ul>
            <li>
                <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                    <AiFillGithub />
                </a>
            </li>
            <li>
                <a href='https://www.youtube.com/webstoryboy' rel='noopener noreferrer'>
                    <AiFillYoutube />
                </a>
            </li>
            <li>
                <a href='https://codepen.io/webstoryboy' rel='noopener noreferrer'>
                    <AiOutlineCodepen />
                </a>
            </li>
            <li>
                <a href='https://www.instagram.com/webstoryboy' rel='noopener noreferrer'>
                    <AiOutlineInstagram />
                </a>
            </li>
          </ul>
      </div>
    </header>
  )
}

export default Header