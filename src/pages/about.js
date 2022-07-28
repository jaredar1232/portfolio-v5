import React from 'react'
import styled from "styled-components"
import { SEO } from "../components/seo"
import headshot from "../../static/Headshot.webp"

export default function about() {
  return (
    <AboutSection>
      <div className="u-center-text">
        <h2 className="heading-secondary" id="about-me">
          About Me
        </h2>
      </div>

      <div className="row">

        <div className="col-1-of-2">
          <p
            className="paragraph"
          >
            <span className='fadeInOne'>Hello and welcome to my portfolio!</span>
            <br />
            <br />
            <span className='fadeInTwo'>
              I am a software engineer with a background in Economics
              and Philosophy from the University of California Santa
              Barbara. My foundation in programming was instilled in
              me at HackReactor with most of what I now know being self
              taught.
            </span>
            <br />
            <br />
            <span className='fadeInThree'>
              I love working on cool poducts that cross at the intersectons
              of tech, medicine, health & fitness, and finance. In addition to
              being long term interests, they're areas I feel help improve society.
            </span>
          </p>
        </div>

        <div className="col-1-of-2">
          <div
            className="composition"
          >
            <img
              src={headshot}
              alt="Headshot of Jared"
              className="composition__photo"
            />
          </div>
        </div>

      </div>
    </AboutSection>
  )
}

export const Head = () => (
  <SEO />
)

const AboutSection = styled.section`
    // adjust this padding if you change the writing
    padding: 10rem 0 83.6rem 0;

    background-color: #181e2e;
    color: white;

    @media (max-width: 56.25em) {
      padding: 10rem 0 75rem 0;
    }

  .u-center-text {
    text-align: center;
    padding-bottom: 5rem;
  }

  .heading-secondary {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 3rem;

    @media (max-width: 56.25em) {
      font-size: 4rem;
      margin-bottom: 1rem;
    }
  }

  .heading-tertiary {
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  .paragraph {
    font-size: 2.5rem;
    &:not(:first-child) {
      margin-bottom: 3rem;
    }
    @media (max-width: 56.25em) {
      font-size: 1.6rem;
      margin: 0 1rem;
    }
  }

  .row {
    max-width: 114rem;
    background-color: #eee;
    margin: 0 auto;

    &:not(:last-child) {
      margin-bottom: 8rem;
    }

    .clearfix {
      &::after {
        content: "";
        display: table;
        clear: both;
      }
    }

    .col-1-of-2 {
      width: calc((100% - 6rem) / 2);
      float: right;

      @media (max-width: 56.25em) {
        width: 100%;
        margin: 0 auto;
        padding: 0 2rem;
      }
    }
  }

  .composition {
    position: relative;
    &__photo {
      width: 70%;
      box-shadow: 0 1.5rem 4rem black;
      border-radius: 5px;
      position: absolute;
      left: 9rem;
      top: 4rem;

      @media (max-width: 56.25em) {
        margin-top: 4rem;
      }

      @media (max-width: 56.25em) {
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        top: 0rem;
        width: 25rem;
      }
    }
  }

  .fadeInOne {
    animation: fadeIn 2s ease-out;
    animation-fill-mode: backwards;
  }

  .fadeInTwo {
    animation: fadeIn 2s ease-out;
    animation-delay: 0.2s;
    animation-fill-mode: backwards;
  }

  .fadeInThree {
    animation: fadeIn 2s ease-out;
    animation-delay: 0.4s;
    animation-fill-mode: backwards;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
