import React, { Fragment } from 'react'
import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import { GlobalStyle } from '../styles'

export default function Layout({ children, path }) {

  return (
    <Fragment>
      <GlobalStyle />

      <div className="site">


        <MobileNavBar />
        <Navbar path={path} />

        <main className='site-content'>
          {children}
        </main>

        <Footer />
      </div>
    </Fragment>
  )
}
