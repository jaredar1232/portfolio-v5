import React from "react"
import styled from "styled-components"
import { SEO } from "../components/seo"
import { Link } from "gatsby"

export default function Home() {
    return (
        <HomeSection>


            <div class="header">
                <div className="header__text-box">
                    <div className="heading">
                        <h1 className="heading__main">Jared Rothenberg</h1>
                        <h2 className="heading__sub">Software Engineer</h2>
                    </div>
                    <Link to="/about" className="btn btn--animated">Explore</Link>
                </div>
                <div class="inner-header flex">
                    {/* <!--Just the logo.. Don't mind this-->   */}

                </div>
                {/* <!--Waves Container-->   */}
                <div>
                    <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g class="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(0,0,0,0.7)" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(0,0,0,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(0,0,0,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(0, 0, 0)" />
                        </g>
                    </svg>
                </div>

            </div>
        </HomeSection>
    )
}

export const Head = () => (
    <SEO />
)

const HomeSection = styled.section`
  height: 100vh;
  background-color: black;

  .header__text-box {
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .heading {
    color: black;
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
      animation: fadeUpToDown .5s ease-out;
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
      animation: fadeDownToUp .5s ease-out;
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
    padding: 1.5rem 4rem;
    margin-top: 20rem;
    display: inline-block;
    border-radius: 0rem;
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
    border-radius: 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
    color: transparent;
    border: lightgrey solid 1px;
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

  @import url(//fonts.googleapis.com/css?family=Lato:300:400);  
 body {  
  margin:0;  
 }  
 h1 {  
  font-family: 'Lato', sans-serif;  
  font-weight:300;  
  letter-spacing: 2px;  
  font-size:48px;  
 }  
 .header {  
  position:relative;  
  text-align:center;  
  background: linear-gradient(60deg, rgba(252,252,252,1) 0%, rgba(252,252,252,1) 100%);  
  color:white;  
 }  
 .logo {  
  width:50px;  
  fill:red;  
  padding-right:15px;  
  display:inline-block;  
  vertical-align: middle;  
 }  
 .inner-header {  
  height:65vh;  
  width:100%;  
  margin: 0;  
  padding: 0;  
 }  
 .flex { /*Flexbox for containers*/  
  display: flex;  
  justify-content: center;  
  align-items: center;  
  text-align: center;  
 }  
 .waves {  
  position:relative;  
  width: 100%;  
  height:15vh;  
  margin-bottom:-7px; /*Fix for safari gap*/  
  min-height:100px;  
  max-height:150px;  
 }  
 .content {  
  position:relative;  
  height:20vh;  
  text-align:center;  
  background-color: white;  
 }  
 /* Animation */  
 .parallax > use {  
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)   infinite;  
 }  
 .parallax > use:nth-child(1) {  
  animation-delay: -2s;  
  animation-duration: 7s;  
 }  
 .parallax > use:nth-child(2) {  
  animation-delay: -3s;  
  animation-duration: 10s;  
 }  
 .parallax > use:nth-child(3) {  
  animation-delay: -4s;  
  animation-duration: 13s;  
 }  
 .parallax > use:nth-child(4) {  
  animation-delay: -5s;  
  animation-duration: 20s;  
 }  
 @keyframes move-forever {  
  0% {  
   transform: translate3d(-90px,0,0);  
  }  
  100% {   
   transform: translate3d(85px,0,0);  
  }  
 }  
 /*Shrinking for mobile*/  
 @media (max-width: 768px) {  
  .waves {  
   height:40px;  
   min-height:40px;  
  }  
  .content {  
   height:30vh;  
  }  
  h1 {  
   font-size:24px;  
  }  
 }  
`
