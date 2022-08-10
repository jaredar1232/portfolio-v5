import React from "react"
import styled from "styled-components"
import { SEO } from "../components/seo"
import { Link } from "gatsby"

export default function Home() {
    return (
        <HomeSection>
            <div className="header__text-box">
                <div className="heading">
                    <h1 className="heading__main">Jared Rothenberg</h1>
                    <h2 className="heading__sub">Software Engineer</h2>
                </div>
                <Link to="/about" className="btn btn--animated">Explore</Link>
            </div>
            <div className='light x1'></div>
            <div className='light x2'></div>
            <div className='light x3'></div>
            <div className='light x4'></div>
            <div className='light x5'></div>
            <div className='light x6'></div>
            <div className='light x7'></div>
            <div className='light x8'></div>
            <div className='light x9'></div>
        </HomeSection>
    )
}

export const Head = () => (
    <SEO />
)

const HomeSection = styled.section`
  height: 100vh;

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
    color: white;
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

  /*  */

  body {
    margin: 0;
    height: 100vh;
    font-weight: 100;
    background: radial-gradient(white, white);
    -webkit-overflow-Y: hidden;
    -moz-overflow-Y: hidden;
    -o-overflow-Y: hidden;
    overflow-y: hidden;
    -webkit-animation: fadeIn 1 1s ease-out;
    -moz-animation: fadeIn 1 1s ease-out;
    -o-animation: fadeIn 1 1s ease-out;
    animation: fadeIn 1 1s ease-out;
}

.light {
    position: absolute;
    width: 0px;
    opacity: .75;
    background-color: black;
    box-shadow: black 0px 0px 20px 2px;
    opacity: 0;
    top: 100vh;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin: auto;
}

.x1{
  -webkit-animation: floatUp 4s infinite linear;
  -moz-animation: floatUp 4s infinite linear;
  -o-animation: floatUp 4s infinite linear;
  animation: floatUp 4s infinite linear;
   -webkit-transform: scale(1.0);
   -moz-transform: scale(1.0);
   -o-transform: scale(1.0);
  transform: scale(1.0);
  animation-delay: 2s;
  animation-duration: 10s;
}

.x2{
  -webkit-animation: floatUp 7s infinite linear;
  -moz-animation: floatUp 7s infinite linear;
  -o-animation: floatUp 7s infinite linear;
  animation: floatUp 7s infinite linear;
  -webkit-transform: scale(1.6);
  -moz-transform: scale(1.6);
  -o-transform: scale(1.6);
  transform: scale(1.6);
  left: 15%;
  animation-delay: 8s;
  animation-duration: 10s;
}

.x3{
  -webkit-animation: floatUp 2.5s infinite linear;
  -moz-animation: floatUp 2.5s infinite linear;
  -o-animation: floatUp 2.5s infinite linear;
  animation: floatUp 2.5s infinite linear;
  -webkit-transform: scale(.5);
  -moz-transform: scale(.5);
  -o-transform: scale(.5);
  transform: scale(.5);
  left: -15%;
  animation-delay: 6s;
  animation-duration: 10s;
}

.x4{
  -webkit-animation: floatUp 4.5s infinite linear;
  -moz-animation: floatUp 4.5s infinite linear;
  -o-animation: floatUp 4.5s infinite linear;
  animation: floatUp 4.5s infinite linear;
  -webkit-transform: scale(1.2);
  -moz-transform: scale(1.2);
  -o-transform: scale(1.2);
  transform: scale(1.2);
  left: -34%;
  animation-delay: 7s;
  animation-duration: 10s;
}

.x5{
  -webkit-animation: floatUp 8s infinite linear;
  -moz-animation: floatUp 8s infinite linear;
  -o-animation: floatUp 8s infinite linear;
  animation: floatUp 8s infinite linear;
  -webkit-transform: scale(2.2);
  -moz-transform: scale(2.2);
  -o-transform: scale(2.2);
  transform: scale(2.2);
  left: -57%;
  animation-delay: 5s;
  animation-duration: 10s;
}

.x6{
  -webkit-animation: floatUp 3s infinite linear;
  -moz-animation: floatUp 3s infinite linear;
  -o-animation: floatUp 3s infinite linear;
  animation: floatUp 3s infinite linear;
  -webkit-transform: scale(.8);
  -moz-transform: scale(.8);
  -o-transform: scale(.8);
  transform: scale(.8);
  left: -81%;
  animation-delay: 7s;
  animation-duration: 10s;
}

.x7{
  -webkit-animation: floatUp 5.3s infinite linear;
  -moz-animation: floatUp 5.3s infinite linear;
  -o-animation: floatUp 5.3s infinite linear;
  animation: floatUp 5.3s infinite linear;
  -webkit-transform: scale(3.2);
  -moz-transform: scale(3.2);
  -o-transform: scale(3.2);
  transform: scale(3.2);
  left: 37%;
  animation-delay: 4s;
  animation-duration: 10s;
}

.x8{
  -webkit-animation: floatUp 4.7s infinite linear;
  -moz-animation: floatUp 4.7s infinite linear;
  -o-animation: floatUp 4.7s infinite linear;
  animation: floatUp 4.7s infinite linear;
  -webkit-transform: scale(1.7);
  -moz-transform: scale(1.7);
  -o-transform: scale(1.7);
  transform: scale(1.7);
  left: 62%;
  animation-delay: 8s;
  animation-duration: 10s;
}

.x9{
  -webkit-animation: floatUp 4.1s infinite linear;
  -moz-animation: floatUp 4.1s infinite linear;
  -o-animation: floatUp 4.1s infinite linear;
  animation: floatUp 4.1s infinite linear;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -o-transform: scale(0.9);
  transform: scale(0.9);
  left: 85%;
  animation-delay: 3s;
  animation-duration: 10s;
}

@-webkit-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-moz-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@-o-keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}
@keyframes floatUp{
  0%{top: 100vh; opacity: 0;}
  25%{opacity: 1;}
  50%{top: 0vh; opacity: .8;}
  75%{opacity: 1;}
  100%{top: -100vh; opacity: 0;}
}

.header{
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  color: black;
  font-size: 2.5em;
}

.header__secondary {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  color: black;
  font-size: 1.5em;
}


#head5{
  -webkit-animation: fadeIn 0.5s ease-in;
  -moz-animation: fadeIn 0.5s ease-in;
  -o-animation: fadeIn 0.5s ease-in;
  animation: fadeIn 0.5s ease-in;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@-webkit-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-moz-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@-o-keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}

@keyframes fadeIn{
  from{opacity: 0;}
  to{opacity: 1;}
}
`
