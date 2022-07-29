/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
  ],

  siteMetadata: {
    title: `Jared Rothenberg | Portfiolio`,
    description: `Jared Rothenberg's portfolio to display previous work experience`,
    siteUrl: `https://www.jaredar.com`,
  },
}