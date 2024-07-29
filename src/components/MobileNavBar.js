import { Link } from "gatsby"
import styled from "styled-components"

export default function Navbar() {
  const onClickHandler = () => {
    document.getElementById("navi-toggle").click()
  }

  return (
    <NavbarWrapper>
      <div className="navigation">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        ></input>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item" onClick={onClickHandler}>
              <Link to="/" className="navigation__link">
                Home
              </Link>
            </li>

            <li className="navigation__item" onClick={onClickHandler}>
              <Link to="/about" className="navigation__link">
                About
              </Link>
            </li>

            <li className="navigation__item" onClick={onClickHandler}>
              <Link to="/experience" className="navigation__link">
                Experience
              </Link>
            </li>

            <li className="navigation__item" onClick={onClickHandler}>
              <Link to="/projects" className="navigation__link">
                Projects
              </Link>
            </li>

            <li className="navigation__item" onClick={onClickHandler}>
              <Link to="/contact" className="navigation__link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </NavbarWrapper>
  )
}

const NavbarWrapper = styled.div`
  // only shows on mobile
  @media (min-width: 56.25em) {
    display: none;
  }

  @keyframes navButtonBackgroundAppearMobile {
    0% {
      opacity: 0;
      border-radius: 100px;
      height: 0;
      width: 0;
    }

    100% {
      opacity: 1;
      border-radius: 5rem;
      height: 5rem;
      width: 5rem;
    }
  }

  .navigation {
    &__checkbox {
      display: none;
    }

    &__button {
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );

      animation: navButtonBackgroundAppearMobile 1s;
      animation-fill-mode: backwards;
      animation-delay: 0.4s; /* this line to delay the animation by 0.2 second */
      height: 5rem; // -2
      width: 5rem; // -2
      top: 3rem;
      right: 3rem;
      border-radius: 50%;
      position: fixed;
      z-index: 200;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
      text-align: center;
      cursor: pointer;

      transition: all 0.4s;

      :hover {
        transform: scale(1.1);
      }
    }

    &__background {
      height: 4rem; // -2
      width: 4rem; // -2
      border-radius: 50%;
      position: fixed;
      top: 3.5rem;
      right: 3.5rem;
      background-image: radial-gradient(rgb(94, 183, 231), rgb(114, 132, 233));
      z-index: 100;
      transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1);

      animation-delay: 0.4s; /* this line to delay the animation by 0.2 second */
      animation: navButtonBackgroundAppearMobile 0s;
      animation-fill-mode: backwards;
      animation-delay: 1s; // open menu background fade in time
    }

    &__nav {
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -150;

      opacity: 0;
      width: 0;
      transition: all 0.4s; // NAV ITEMS FADE IN TIME
    }

    &__list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 100%;
    }

    &__item {
      margin: 1rem;
    }

    &__link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 3rem;
        padding: 1rem 2rem;
        color: white;
        text-decoration: none;
        text-transform: uppercase;
        border-radius: 4px;
      }
      &:hover,
      &:active {
        color: rgb(102, 201, 255);
      }
    }

    //NAVIGATION ICON
    &__icon {
      position: relative;
      margin-top: 2.5rem;

      &,
      &::before,
      &::after {
        width: 2.5rem;
        height: 2px;
        background-color: white;
        display: inline-block;
      }
      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all 0.2s;
      }

      &::before {
        top: -0.8rem;
      }
      &::after {
        top: 0.8rem;
      }
    }
  }

  .navigation__checkbox:checked ~ .navigation__background {
    transform: scale(140);
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    opacity: 1;
    width: 100%;
  }

  .navigation__checkbox:checked + .navigation__button .navigation__icon {
    background-color: transparent;

    &::before {
      transform: rotate(135deg);
      top: 0rem;
      background-color: rgb(102, 201, 255);
    }

    &::after {
      transform: rotate(-135deg);
      top: -0rem;
      background-color: rgb(102, 201, 255);
    }
  }

  .navigation__checkbox:checked ~ .navigation__button {
    background-image: linear-gradient(
      to right bottom,
      rgb(255, 255, 255),
      rgb(255, 255, 255)
    );
  }

  .navigation__checkbox:checked ~ .navigation__nav {
    z-index: 150;
  }
`
