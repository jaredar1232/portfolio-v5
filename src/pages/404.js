import React from 'react'
import { Link } from 'gatsby'
import { SEO } from "../components/seo"

export default function NotFound() {
  return (
    <div>
      <h1>404 PAGE NOT FOUND</h1>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export const Head = () => (
  <SEO />
)