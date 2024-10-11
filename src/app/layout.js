import Navbar from "./components/Navbar"
import MobileNavBar from "./components/MobileNavBar"
import Footer from "./components/Footer"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "../styles/globals.css"

export const metadata = {
  title: "Jared Rothenberg | Portfolio",
  description:
    "Jared Rothenbergs portfolio of previous projects and experience",
}

export const viewport = {
  width: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>{/* Metadata will be injected automatically */}</head>
      <body>
        <MobileNavBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  )
}
