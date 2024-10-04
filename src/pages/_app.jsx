import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Layout from "../components/Layout"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Script
        rel="preconnect"
        src="https://kit.fontawesome.com/894b2bd601.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
