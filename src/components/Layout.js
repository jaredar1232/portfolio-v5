import Navbar from "./Navbar"
import MobileNavBar from "./MobileNavBar"
import Footer from "./Footer"
import "../styles/global.css"
import { Normalize } from "styled-normalize"

export default function Layout({ children, path }) {
  return (
    <>
      <Normalize />

      <div className="site">
        <MobileNavBar />
        <Navbar path={path} />
        <main className="site-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}
