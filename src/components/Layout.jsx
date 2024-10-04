import Navbar from "./Navbar"
import MobileNavBar from "./MobileNavBar"
import Footer from "./Footer"

export default function Layout({ children, path }) {
  return (
    <div className="site">
      <MobileNavBar />
      <Navbar path={path} />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  )
}
