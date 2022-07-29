const React = require("react")
const Layout = require("./src/components/Layout").default

// Using gatsby-browser.js instead of layout components because the Nav Bar was rerendering every page change restarting the animation. 
// this is no longer supported in gatsby v2
// https://www.gatsbyjs.com/blog/2018-06-08-life-after-layouts/
// https://www.gatsbyjs.com/plugins/gatsby-plugin-layout/

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <Layout {...props}>{element}</Layout>
}
