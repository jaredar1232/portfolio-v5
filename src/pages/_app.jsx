import React from "react"
import '../styles/globals.css';
import Layout from "../components/Layout"
import { SpeedInsights } from "@vercel/speed-insights/next";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <SpeedInsights />
    </>
  )
}

export default MyApp
