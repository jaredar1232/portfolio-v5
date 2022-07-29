import React from "react"
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <Helmet >
            <script src="https://kit.fontawesome.com/894b2bd601.js" crossorigin="anonymous"></script>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            ></meta>
            <html lang="en" dir="ltr" />
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
        </Helmet>
    )
}