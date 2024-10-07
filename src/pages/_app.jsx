import React from "react"
import { GlobalStyle } from "../styles/GlobalStyle"
import Layout from "../components/Layout"
import { SpeedInsights } from "@vercel/speed-insights/next";

import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}

export default MyApp
