import React from 'react'
import { headerMenus, searchKeyword} from '../../data/header'
import { Link, useLocation } from 'react-router-dom'
const Menu = () => {
    const location = useLocation();
    return (
        <nav className='header__menu'>
            <ul className='menu'>
                {/* <li>
                    <a href=''>뉴렉처</a>
                </li> */}
                {/* <li className='active'>
                    <a href='/'>
                        <CiBaseball /> 웹스토리보이
                    </a>
                </li>
                */}
                {headerMenus.map((menu, key) => (
                    <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                        {/* a 링크는 리액트에서 Link로 사용함. */}
                        {/* to는 페이지를 넘어갈 때 쓰는 url */}
                        <Link to={menu.src}>
                            {menu.icon}{menu.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className='keyword'>
                {/* <li className='active'>
                    <a href='/search/webstoryboy'>webstoryboy</a>
                </li>
                 */}
                {searchKeyword.map((keyword, key) =>(
                    <li key={key}>
                        <Link to={keyword.src}>
                            {keyword.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav> 
    )
}

export default Menu