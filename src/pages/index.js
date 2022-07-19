import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export default function Home() {
  return (
      <TopFoldWrapper>
          <header className="header">
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Jared Rothenberg</span>
                <span className="heading-primary--sub">Software Engineer</span>
              </h1>
              <Link to="/about" className="btn btn--white btn--animated">Explore</Link>
            </div>
          </header>
      </TopFoldWrapper>
  )
}

const TopFoldWrapper = styled.div`
  .header {
    height: 100vh;
    background-image: linear-gradient(
        to right bottom,
        rgba(14, 17, 25, 0.899),
        rgba(21, 26, 40, 0.194)
      ),
      url(https://d1o11p1jeyf1dw.cloudfront.net/LandingImageBlueMedium.jpg);
    background-size: cover;
    background-position: right;
  }

  .header__text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading-primary {
    color: #fff;
    text-transform: uppercase;
    margin-bottom: 6rem;
    backface-visibility: hidden;

    @media (max-width: 56.25em) {
      margin: 6rem 0 12rem 0;
    }
  }

  .heading-primary--main {
    display: block;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3rem;

    @media (min-width: 56.26em) {
      animation: moveInTop 1.5s ease-out;
      animation-delay: 0.5s;
      animation-fill-mode: backwards;
    }

    @media (max-width: 56.25em) {
      font-size: 2.8rem;
      letter-spacing: 1rem;
    }
  }

  .heading-primary--sub {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1.75rem;
    margin-top: 1rem;

    @media (min-width: 56.26em) {
      animation: fadeIn 2.5s;
      animation-delay: 2s;
      animation-fill-mode: backwards;
    }

    @media (max-width: 56.25em) {
      font-size: 1.3rem;
      letter-spacing: 0.8rem;
    }
  }

  @keyframes moveInTop {
    0% {
      opacity: 0;
      transform: translateY(-20rem);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes moveInButton {
    0% {
      opacity: 1;
      font-size: 0px;
      border-radius: 100px;
      background-color: transparent;
      color: black;
      border-color: transparent;
    }

    100% {
      opacity: 1;

      font-size: 1.6rem;
      border-radius: 0;
      color: lightgrey;
      background-color: rgba(0, 0, 0, 0.3);
      border-color: darkgrey;
    }
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 0rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.6rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: lightgrey;
    border: darkgrey solid 1px;
    -webkit-backface-visibility: hidden;

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

  .btn--white {
    background-color: rgba(0, 0, 0, 0.2);
    color: rgba(0, 0, 0, 0.468);
  }

  .btn::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 0rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    background-color: rgba(0, 0, 0, 0.5);
    color: transparent;
    border: lightgrey solid 1px;
  }

  .btn--white::after {
    background-color: rgba(0, 0, 0, 0.2);

    @media (min-width: 56.26em) {
      animation: moveInButton 1s;
      animation-fill-mode: backwards;
      animation-delay: 3.5s;
    }
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
      animation-delay: 3.5s;
    }
  }
`
