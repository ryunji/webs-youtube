import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Helmet, HelmetProvider } from 'react-helmet-async'

// props는 App.js로부터 전달받은 속성을 전달해주는 것.
const Main = (props) => {
  return (
    <HelmetProvider>
      <Helmet
          titleTemplate = "%s | Webs Youtube"
          defaultTilte  = "Webs Youtube"
          defer         = {false}
        >
        {props.title && <title>{props.title}</title>}
        <meta name="description" content={props.description}/>
      </Helmet>

      <Header/>
       <main id="main" role="main">
         {props.children}
       </main>
       <Footer/>
    </HelmetProvider>
    //셋(header, main, footer)을 묶는 부모 태그 필요 : div
    // <>
    //   <Header/>
    //   <main id="main" role="main">
    //     {props.children}
    //   </main>
    //   <Footer/>
    // </>
  )
}

export default Main