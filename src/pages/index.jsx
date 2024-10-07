import { useState } from "react";
import styled from "styled-components";
import AiChat from "../components/AiChat";
import { SEO } from "../components/SEO"

export default function Home() {
  const [isChatFocused, setIsChatFocused] = useState(false);

  const handleChatFocus = () => {
    setIsChatFocused(true);
  };

  return (
    <>
      <SEO title="Home" description="Homepage of Jared Rothenberg" />
      <HomeSection className={isChatFocused ? "chat-focused" : ""}>
        <div className="header__text-box">
          <div className="heading">
            <h1 className="heading__main">Jared{"\n"}Rothenberg</h1>
            <h2 className="heading__sub">Software Engineer</h2>
          </div>
          <AiChat className="ai-chat-container" onFocus={handleChatFocus} />
        </div>
      </HomeSection>
    </>
  );
}

const HomeSection = styled.section`
  /* Reserve space for the entire layout */
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(14, 17, 25, 0.899),
      rgba(21, 26, 40, 0.194)
    ),
    url("/LandingImageBlueMedium.webp");
  background-color: #5A6E7A;
  background-size: cover;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;

  .header__text-box {
    text-align: center;
    transition: all 0.5s ease-in-out;
    min-height: 40vh; /* Reserve space for content */
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

    /* Reserve space for the heading to avoid layout shifts */
    min-height: 6rem;
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

    /* Reserve space for the subheading */
    min-height: 3rem;
  }

    &.chat-focused .heading {
      opacity: 0;
    }

    &.chat-focused .header__text-box {
    transform: translateY(-50%) translateY(60px);

    @media (min-width: 56.25em) {
      transform: translateY(-50%) translateY(300px);
    }
  }

  .ai-chat-container {
    min-height: 300px; /* Adjust based on expected content */
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
`;