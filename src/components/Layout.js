import React, { Fragment, useState } from 'react'
import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import '../styles/global.css'
import { Normalize } from 'styled-normalize'

export default function Layout({ children, path }) {
  let [colorMode, setColorMode] = useState("dark")

  return (
    <Fragment>

      <Normalize />

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
