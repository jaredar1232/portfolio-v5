import Link from "next/link"
import { SEO } from "../components/SEO"
import styled from "styled-components"

export default function NotFound() {
  return (
    <>
      <SEO title="404" description="404 page" />
      <NotFoundSection>
        <div className="not-found-container">
          <h1>404 PAGE NOT FOUND</h1>
          <span>You look a little lost friend, let me take you&nbsp;</span>
          <Link href="/" className="link-home">
            home
          </Link>
        </div>
      </NotFoundSection>
    </>
  )
}

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
