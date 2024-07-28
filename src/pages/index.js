import React from "react"
import styled from "styled-components"
import { SEO } from "../components/seo"
import AiChat from "../components/AiChat" // Import the AiChat component

export default function Home() {
  return (
    <HomeSection>
      <div className="header__text-box">
        <div className="heading">
          <h1 className="heading__main">Jared Rothenberg</h1>
          <h2 className="heading__sub">Software Engineer</h2>
        </div>
        <AiChat /> {/* Replace the button with the AiChat component */}
      </div>
    </HomeSection>
  )
}

export const Head = () => <SEO />

const HomeSection = styled.section`
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(14, 17, 25, 0.899),
      rgba(21, 26, 40, 0.194)
    ),
    url("/LandingImageBlueMedium.webp");
  background-size: cover;
  background-position: right;

  .header__text-box {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;

    @media (max-width: 56.25em) {
      margin: 6rem 0 12rem 0;
    }
  }

  .heading__main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3rem;

    @media (min-width: 56.26em) {
      animation: fadeUpToDown 0.5s ease-out;
      animation-fill-mode: backwards;
    }

    @media (max-width: 56.25em) {
      font-size: 2.8rem;
      letter-spacing: 1rem;
    }
  }

  .heading__sub {
    display: block;
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 1.75rem;
    margin-top: 1rem;

    @media (min-width: 56.26em) {
      margin-bottom: 10rem;
      animation: fadeDownToUp 0.5s ease-out;
      animation-fill-mode: backwards;
    }

    @media (max-width: 56.25em) {
      font-size: 1.3rem;
      letter-spacing: 0.8rem;
    }
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 3rem;
    margin-top: 20rem;
    display: inline-block;
    border-radius: 6px;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    font-weight: 400;
    background-color: rgba(0, 0, 0, 0.3);
    color: lightgrey;
    border: darkgrey solid 1px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    @media (max-width: 56.25em) {
      padding: 1rem 3.5rem;
    }
  }

  @media (hover: hover) {
    .btn:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
      background-color: rgba(0, 0, 0, 0.8);
      border: rgb(102, 201, 255) solid 1px;
      color: rgb(102, 201, 255);
    }
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.2);
    background-color: rgba(0, 0, 0, 0.4);
    color: lightgrey;
    border: darkgrey solid 1px;
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    color: transparent;
    border: lightgrey solid 0.5px;
  }

  @media (hover: hover) {
    .btn:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  .btn--animated {
    @media (min-width: 56.26em) {
      animation: moveInButton 1s;
      animation-fill-mode: backwards;
      animation-delay: 1s;
    }
  }

  @keyframes fadeUpToDown {
    0% {
      opacity: 0;
      transform: translateY(-5rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeDownToUp {
    0% {
      transform: translateY(5rem);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes moveInButton {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`
