import React from 'react'
import Navbar from './Navbar'
import MobileNavBar from './MobileNavBar'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children, path }) {

  return (
    <div className="site">
      <MobileNavBar />
      <Navbar path={path} />
      <main className='site-content'>
        {children}
      </main>
      <Footer />
    </div>
  )
}
