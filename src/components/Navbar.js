import Link from "next/link"
import { useEffect, useState } from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useRouter } from "next/router"

export default function Navbar() {
  const router = useRouter()
  const [navTextColor, setNavTextColor] = useState("black")
  const [logoSrc, setLogoSrc] = useState("/logo-white.webp")

  useEffect(() => {
    switch (router.pathname) {
      case "/about":
      case "/experience":
      case "/projects":
      case "/contact":
        setNavTextColor("black")
        setLogoSrc("/logo-black.webp")
        break
      case "/":
        setNavTextColor("white")
        setLogoSrc("/logo-white.webp")
        break
      default:
        console.error("There is an issue with the navigation color setter")
    }
  }, [router.pathname])

  return (
    <>
      <GlobalStyles />
      <NavWrapper navTextColor={navTextColor}>
        <Link
          href="/about"
          className={`nav__link ${
            router.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </Link>
        <Link
          href="/experience"
          className={`nav__link ${
            router.pathname === "/experience" ? "active" : ""
          }`}
        >
          Experience
        </Link>
        <Link href="/">
          <Logo src={logoSrc} alt="logo" />
        </Link>
        <Link
          href="/projects"
          className={`nav__link ${
            router.pathname === "/projects" ? "active" : ""
          }`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className={`nav__link ${
            router.pathname === "/contact" ? "active" : ""
          }`}
        >
          Contact
        </Link>
      </NavWrapper>
    </>
  )
}

const NavWrapper = styled.nav`
  --nav-text-color: ${({ navTextColor }) => navTextColor};

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

  font-size: 1.5rem;
  text-align: center;

  z-index: 1;
  backdrop-filter: blur(5px);

  ${({ navTextColor }) =>
    navTextColor === "black"
      ? `
    box-shadow: 0px 5px 10px rgba(201, 206, 211, 0.568);
    background-color: rgba(230, 232, 234, 0.5);`
      : `
    box-shadow: 0px 5px 10px rgba(3, 3, 3, 0.568);
    background-color: rgba(227, 227, 227, 0.3);`}
`

const Logo = styled.img`
  position: absolute;
  transform: translate(-50%);
  width: 3rem;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.3) translate(-40%, -4%);
  }
`

const GlobalStyles = createGlobalStyle`
  .nav__link {
    text-decoration: none;
    transition: all 0.2s;
    color: var(--nav-text-color);

    &:visited {
      color: var(--nav-text-color);
    }

    &:hover {
      color: black;
      background: -webkit-linear-gradient(
        left,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      text-decoration: underline;
      transform: translateY(-2px);
    }
  }

  .nav__link.active {
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`
