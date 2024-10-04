import Head from "next/head"
import { useRouter } from "next/router"
import { siteMetadata } from "../config/siteMetadataConfig"

export const SEO = ({ title, description }) => {
  const router = useRouter()
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = siteMetadata

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${router.asPath || ""}`,
  }

  return (
    <Head>
      {/* Page Title */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      {/* Additional Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
