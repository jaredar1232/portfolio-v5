import React from "react"
import { Helmet } from 'react-helmet'
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const Seo = ({ title, description, pathname }) => {
    const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || ``}`,
    }

    return (
        <Helmet >
            <link
                href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900"
                rel="stylesheet"
            />
            <link rel="shortcut icon" href="/LogoCropped.png" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
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