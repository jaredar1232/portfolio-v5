import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Navbar({path}) {
  let [navColor, setNavColor] = useState("white")

  useEffect(() => {
    switch(path){
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
    } 
  
  }, [path])

  return (
    <NavWrapper navColor={navColor}>
        <Link to="/about" className={`nav__link ${navColor}`} activeClassName="selected" >About</Link>
        <Link to="/experience" className={`nav__link ${navColor}`} activeClassName="selected" >Experience</Link>
        <Link to="/" className={`nav__link ${navColor}`} activeClassName="selected" >Home</Link>
        <Link to="/projects" className={`nav__link ${navColor}`} activeClassName="selected" >Projects</Link>
        <Link to="/contact" className={`nav__link ${navColor}`} activeClassName="selected" >Contact</Link>
    </NavWrapper>
  )
}


const NavWrapper = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  position: fixed;
  top: 1rem;
  left: 5%;
  width: 90%;
  border-radius: 1rem;

  font-size: 2rem;
  text-align: center;
  
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  /* padding: 1rem 0; */
  z-index: 1;

  // glass effect
  background-color: rgba(209, 218, 227, 0.198);
  backdrop-filter: blur(5px);  

  // conditional box shadow for white or black background
  ${({ navColor }) => navColor === 'black' ? `
    box-shadow: 0px 5px 10px rgba(201, 206, 211, 0.568);` : 'box-shadow: 0px 5px 10px rgba(3, 3, 3, 0.568);'
  }

  // nav bar animation
  animation: moveInNavBar 1.5s;
  animation-fill-mode: backwards;
  animation-delay: 3s;
  @keyframes moveInNavBar {
    0% {
      background-color: transparent;
      transform: scale(.2);
      opacity: 0;
    }

    100% {
      background-color: rgba(209, 218, 227, 0.198);
      transform: scale(1);
      opacity: .5;
    }
  }

  .nav__link {
    text-decoration: none;
    /* position: relative; */
    /* z-index: 2; */

    /* margin: -2rem 0; */
    padding: .5rem 0;
    /* border-left: 1px black solid; */

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
        /* box-shadow: 0 0.5rem 2rem rgba(255, 255, 255, 0.4); */
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

  /* @keyframes moveInNavText {
    0% {
      color: transparent;
      width: 0;
    }

    100% {
      color: white;
      width: 100%;
    } */
  /* } */
  /* a:link - a normal, unvisited link
a:visited - a link the user has visited
a:hover - a link when the user mouses over it
a:active */
`