import React from 'react'
import { Link } from 'gatsby'
import { SEO } from "../components/seo"
import styled from "styled-components"

export default function NotFound() {
  return (
    <NotFoundSection>
      <div className='not-found-container'>
        <h1>404 PAGE NOT FOUND</h1>
        <span >You look a little lost friend, let me take you&nbsp;</span>
        <Link to="/" className="link-home">home</Link>
      </div>
    </NotFoundSection>
  )
}

export const Head = () => (
  <SEO />
)

const NotFoundSection = styled.section`
  .not-found-container {
    text-align: center;
    font-size: 2rem;
    color: grey;
  }

  h1 {
    padding: 15rem 0;
    font-size: 4rem;
  }


  .link-home {
    text-decoration: none;
    color: lightseagreen;
  }
`
