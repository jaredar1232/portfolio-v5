// components/SEO.jsx
import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "../config/siteMetadataConfig";

export const SEO = ({
  title = "Jared Rothenberg | Portfolio",
  description = "Welcome to my portfolio.",
}) => {
  const router = useRouter();
  const { title: defaultTitle, description: defaultDescription, siteUrl } = siteMetadata;

  const seo = {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${router.asPath || ""}`,
  };

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

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      {/* Additional Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Head>
  );
};