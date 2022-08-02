import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import whiteLogo from "../../static/logo-white.webp"
import blackLogo from "../../static/logo-black.webp"

export default function Navbar({ path }) {
  let [navTextColor, setNavTextColor] = useState("white")
  let [logo, setLogo] = useState(whiteLogo)

  // changes nav text color based on what page we are on
  useEffect(() => {
    switch (path) {
      case "/about/":
        setNavTextColor("black")
        break;
      case "/experience/":
        setNavTextColor("black")
        break;
      case "/":
        setNavTextColor("white")
        break;
      case "/projects/":
        setNavTextColor("black")
        break;
      case "/contact/":
        setNavTextColor("black")
        break;
      default:
        console.error("there is an issue with the navigation color setter")
    }

  }, [path])

  // changes logo path/variable based on what the nav text color should be
  useEffect(() => {
    navTextColor === "white" ? setLogo(whiteLogo) : setLogo(blackLogo)
  }, [navTextColor])

  return (
    <NavWrapper navTextColor={navTextColor}>
      <Link to="/about" className={`nav__link ${navTextColor}`} activeClassName="active" >About</Link>
      <Link to="/experience" className={`nav__link ${navTextColor}`} activeClassName="active" >Experience</Link>
      <Link to="/">
        <img className='home__logo' src={logo} alt="logo" />
      </Link>
      <Link to="/projects" className={`nav__link ${navTextColor}`} activeClassName="active" >Projects</Link>
      <Link to="/contact" className={`nav__link ${navTextColor}`} activeClassName="active" >Contact</Link>
    </NavWrapper>
  )
}


const NavWrapper = styled.nav`
  @media (max-width: 56.25em) {
    display: none;
  }

  display: flex;
  justify-content: space-around;

  position: fixed;
  top: 2rem;
  left: 15%;
  width: 70%;
  border-radius: 1rem;
  padding: 0.3rem;

  font-size: 2.5rem;
  text-align: center;

  // lets it go over the projects/jobs
  z-index: 1;

  // glass effect
  backdrop-filter: blur(5px);

  // conditional box shadow for white or black background & background colors incase text color and background color match
  ${({ navTextColor }) =>
    navTextColor === "black"
      ? `
    box-shadow: 0px 5px 10px rgba(201, 206, 211, 0.568);
    background-color: rgb(230, 232, 234, 0.5);`
      : `box-shadow: 0px 5px 10px rgba(3, 3, 3, 0.568);
      background-color: rgba(227,227,227,0.3);`}

  // nav bar animation
  animation: fadeInNavBar 1s;
  animation-fill-mode: backwards;
  animation-delay: 1s;

  .nav__link {
    text-decoration: none;
    transition: all 0.4s;

    &:visited {
      text-decoration: none;
    }

    &:hover {
      color: black;
      background: -webkit-linear-gradient(left, rgb(102, 201, 255), rgb(120, 139, 249));
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      text-decoration: underline;
      transform: translateY(-2px);
    }
  }

  // class for page dependent text color
  .black {
    color: black;

    &:visited {
      color: black;
    }
  }
  .white {
    color: white;

    &:visited {
      color: white;
    }
  }

  // needs to remain under .black and .white for the cascade to work
  .active {
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .home__logo {
    position: absolute;
    transform: translate(-50%);
    width: 60px;
    transition: all 0.3s;

    &:hover {
      transform: scale(1.3) translate(-40%, -4%);
    }
  }

  @keyframes fadeInNavBar {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`