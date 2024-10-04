import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
