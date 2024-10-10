import Navbar from "./Navbar";
import MobileNavBar from "./MobileNavBar";
import Footer from "./Footer";

export default function Layout({ children, path }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MobileNavBar />
      <Navbar path={path} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}