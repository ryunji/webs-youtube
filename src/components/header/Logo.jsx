import React from 'react'

const Logo = () => {
  return (
    <h1 className='header__logo'>
        <a href='/'>
        {/* em : emphasis, 강조를 나타내는 인라인 요소, 시각적으로는 존재하지만, 사용자가 인식하지 못하게 된다. */}
        <em aria-hidden='true'></em>
        <span>The Collectors<br />YouTube</span>
        </a>
    </h1>
  )
}

export default Logo