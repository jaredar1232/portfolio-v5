import React, { Fragment } from 'react'
import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
import '../styles/global.css'

export default function Layout({ children, path }) {

  return (
    <Fragment>
      <Helmet title="Jared Rothenberg" >
        <link
          href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/LogoCropped.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=0"
        ></meta>
        <html lang="en" />
      </Helmet>

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
