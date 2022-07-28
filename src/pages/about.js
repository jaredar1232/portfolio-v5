import React from 'react'
import styled from "styled-components"
import { SEO } from "../components/seo"
import headshot from "../../static/Headshot.webp"

export default function about() {
  return (
    <AboutSection>
      <div className="u-center-text">
        <h2 className="heading" id="about-me">
          About Me
        </h2>
      </div>
      <div className="row-container">
        <div className="row">

          <div
            className="headshot-container"
          >
            <img
              src={headshot}
              alt="Headshot of Jared"
              className="headshot"
            />
          </div>

          <div className="text-container">
            <p
              className="text"
            >
              <span className='paragraph fadeInOne'>Hello and welcome to my portfolio!</span>
              <span className='paragraph fadeInTwo'>
                I am a software engineer with a background in Economics
                and Philosophy from the University of California Santa
                Barbara. My foundation in programming was instilled in
                me at HackReactor with most of what I now know being self
                taught.
              </span>
              <span className='paragraph fadeInThree'>
                I love working on cool products that cross at the intersections
                of tech, medicine, health & fitness, and finance. In addition to
                being long term interests, they're areas I feel help improve society.
              </span>
            </p>
          </div>



        </div>
      </div>
    </AboutSection>
  )
}

export const Head = () => (
  <SEO title="Jared Rothenberg | About" />
)

const AboutSection = styled.section`
    // adjust this padding if you change the writing
    padding: 10rem 0 20rem 0;

    background-color: #181e2e;
    color: white;

    @media (max-width: 56.25em) {
      padding: 10rem 0 5rem 0;
    }

  .u-center-text {
    text-align: center;
    padding-bottom: 5rem;
  }

  .heading {
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


  .row-container {
    max-width: 70%;
    margin: 0 auto;

    @media (max-width: 56.25em) {
      max-width: 100%
    }
  }

  .row {
    display: flex;

    @media (max-width: 56.25em) {
      flex-direction: column;
    }

  }

  .text-container {
    flex: 1;
      @media (max-width: 56.25em) {
        padding: 5rem 3rem 0 3rem;
        padding-top: 5rem;
      }

      margin: 0 auto;
    }

  .text {
    font-size: 2.5rem;
    @media (max-width: 56.25em) {
      font-size: 1.6rem;
    }
  }

  .paragraph {
    &:not(:first-child) {
      display: inline-block;
      margin-top: 2.5rem;
    }
  }

  .headshot-container {
    flex: 1;
    text-align: center;
  }

  .headshot {
    max-width: 70%;
    box-shadow: 0 1.5rem 4rem black;
    border-radius: 5px;
  }

  .fadeInOne {
    animation: fadeIn 1.5s;
    animation-fill-mode: backwards;
  }

  .fadeInTwo {
    animation: fadeIn 1.5s;
    animation-delay: 0.1s;
    animation-fill-mode: backwards;
  }

  .fadeInThree {
    animation: fadeIn 1.5s;
    animation-delay: 0.2s;
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
