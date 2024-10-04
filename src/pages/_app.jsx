import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Layout from "../components/Layout"
import { SpeedInsights } from "@vercel/speed-insights/next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}

export default MyApp
