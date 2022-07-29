import React, { Fragment, useState } from 'react'
import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import '../styles/global.css'
import { Normalize } from 'styled-normalize'

export default function Layout({ children, path }) {
  let [theme, setTheme] = useState({
    "primary": "#777;",
    "secondary": "rgb(230, 232, 234, 0.5)",
    "tertiary": "white"
  })

  const colorObjectWhite = {
    "primary": "#777;",
    "secondary": "rgb(230, 232, 234, 0.5)",
    "tertiary": "white"
  }

  const colorObjectBlack = {
    "primary": "black",
    "secondary": "darkgrey",
    "tertiary": "lightgrey"
  }

  let themeHandler = () => {
    console.log("changing theme")
    theme["tertiary"] === "white" ? setTheme(colorObjectBlack) : setTheme(colorObjectWhite)
  }

  return (
    <Fragment>

      <Normalize />

      <div className="site">
        <MobileNavBar />
        <Navbar path={path} theme={theme} />
        <main className='site-content' theme={theme}>
          {children}
        </main>
        <Footer themeHandler={themeHandler} />
      </div>

    </Fragment>
  )
}
