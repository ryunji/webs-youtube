import React from 'react'
import Header from './Header'
import Footer from './Footer'

// props는 App.js로부터 전달받은 속성을 전달해주는 것.
const Main = (props) => {
  return (
    //셋(header, main, footer)을 묶는 부모 태그 필요 : div
    <>
      <Header/>
      <main id="main" role="main">
        {props.children}
      </main>
      <Footer/>
    </>
  )
}

export default Main