import React, { useState } from "react"
import styled from "styled-components"
import { SEO } from "../components/seo"
import AiChat from "../components/AiChat" // Import the AiChat component

export default function Home() {
  const [isChatFocused, setIsChatFocused] = useState(false)

  const handleChatFocus = () => {
    setIsChatFocused(true)
  }

  return (
    <HomeSection className={isChatFocused ? "chat-focused" : ""}>
      <div className="header__text-box">
        <div className="heading">
          <h1 className="heading__main">Jared{"\n"}Rothenberg</h1>
          <h2 className="heading__sub">Software Engineer</h2>
        </div>
        <AiChat onFocus={handleChatFocus} />{" "}
        {/* Replace the button with the AiChat component */}
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
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  .header__text-box {
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .heading {
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 56.25em) {
      margin: 6rem 0 12rem 0;
    }
  }

  .heading__main {
    display: block;
    font-weight: 400;
    white-space: pre-line; /* Allows line break in name to apply */
    animation: fadeUpToDown 0.5s ease-out;
    animation-fill-mode: backwards;
    font-size: 3.5rem;
    letter-spacing: 1rem;

    @media (min-width: 56.25em) {
      letter-spacing: 3rem;
      font-size: 6rem;
    }
  }

  .heading__sub {
    display: block;
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.8rem;

    margin-top: 1rem;
    animation: fadeDownToUp 0.5s ease-out;
    animation-fill-mode: backwards;

    @media (min-width: 56.26em) {
      margin-bottom: 10rem;
      font-size: 2rem;
      letter-spacing: 1.75rem;
    }
  }

  &.chat-focused .heading {
    opacity: 0;
  }

  &.chat-focused .header__text-box {
    transform: translateY(-50%);
    margin-top: 200px;

    @media (min-width: 56.25em) {
      margin-top: 300px;
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
`
