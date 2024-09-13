import React from 'react'
import {snsLink} from '../../data/header'
const Sns = () => {
  return (
    <div className='header__sns'>
      <ul>
          {/* <li>
              <a href='https://github.com/webstoryboy' rel='noopener noreferrer'>
                  <AiFillGithub />
              </a>
          </li>
          */}
          {snsLink.map((sns, key) => (
              <li key={key}>
                  {/* 1. 여기는 사이트에 있는 페이지로 이동하는게 아니라, 다른 외부 사이트로 가는거여서 a 링크를 써준다. */}
                  {/* 2. 보안설정 부분 : rel */}
                  {/*aria-label*/}
                  <a href={sns.url} target='_blank' rel='noopener noreferrer' aria-label={sns.title}>
                      <span>{sns.icon}</span>
                  </a>
              </li>
          ))}
      </ul>
    </div>
  )
}

export default Sns