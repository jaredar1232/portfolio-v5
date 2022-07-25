import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Navbar({ path }) {
  let [navColor, setNavColor] = useState("white")

  useEffect(() => {
    switch (path) {
      case "/about/":
        setNavColor("white")
        break;
      case "/experience/":
        setNavColor("black")
        break;
      case "/":
        setNavColor("white")
        break;
      case "/projects/":
        setNavColor("black")
        break;
      case "/contact/":
        setNavColor("white")
        break;
      default:
        console.error("there is an issue with the navigation color setter")
    }

  }, [path])

  return (
    <NavWrapper navColor={navColor}>
      <Link to="/about" className={`nav__link ${navColor}`} activeClassName="active" >About</Link>
      <Link to="/experience" className={`nav__link ${navColor}`} activeClassName="active" >Experience</Link>
      <Link to="/">
        <img className='home__logo' src={`./logo-${navColor}.webp`} alt="logo" />
      </Link>
      <Link to="/projects" className={`nav__link ${navColor}`} activeClassName="active" >Projects</Link>
      <Link to="/contact" className={`nav__link ${navColor}`} activeClassName="active" >Contact</Link>
    </NavWrapper>
  )
}


const NavWrapper = styled.nav`
  @media (max-width: 56.25em) {
    display: none;
  }

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: fixed;
  top: 1rem;
  left: 5%;
  width: 90%;
  border-radius: 1rem;

  font-size: 2rem;
  text-align: center;

  // lets it go over the projects/jobs
  z-index: 1;

  // glass effect
  background-color: rgba(209, 218, 227, 0.198);
  backdrop-filter: blur(5px);

  // conditional box shadow for white or black background & background colors incase text color and background color match
  ${({ navColor }) =>
    navColor === "black"
      ? `
    box-shadow: 0px 5px 10px rgba(201, 206, 211, 0.568);
    background-color: rgba(209, 218, 227, 0.198);`
      : `box-shadow: 0px 5px 10px rgba(3, 3, 3, 0.568);
    background-color: rgba(169, 180, 190, 0.291);`}

  // nav bar animation
  animation: moveInNavBar 1s;
  animation-fill-mode: backwards;
  animation-delay: 2.5s;

  .nav__link {
    text-decoration: none;
    padding: 0.5rem 0;

    &:visited {
      text-decoration: none;
    }

    &:hover {
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      color: transparent;
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
    color: transparent;
  }

  .home__logo {
    position: absolute;
    transform: translate(-50%);

    &:hover {
      transform: scale(1.2) translate(-40%, -4%);
    }
  }

  @keyframes moveInNavBar {
    0% {
      background-color: transparent;
      transform: scale(0.2);
      opacity: 0;
    }

    100% {
      background-color: rgba(209, 218, 227, 0.198);
      transform: scale(1);
      opacity: 0.5;
    }
  }
`