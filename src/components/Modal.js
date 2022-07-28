import React, { Component } from "react"
import styled from "styled-components"
import Icons from "./Icons"

export default class Modal extends Component {
  handleClose() {
    const element = document.getElementById("modal")
    element.scrollTo(0, 0)
    this.props.closeModal()
  }

  render() {
    const modalDetails = this.props.modalDetails
    const showModal = this.props.showModal

    return (
      <ModalWrapper>
        <div className={showModal ? "overlay" : "hide-modal"}>
          <div
            className={
              showModal
                ? "modal-functionality-shown"
                : "modal-functionality-hidden"
            }
            onClick={() => this.handleClose()}
          ></div>

          <div className="overlay__content" id="modal">
            <div className="exit" onClick={() => this.handleClose()}>
              <span className="exit__icon">&nbsp;</span>
            </div>
            <h3 className="heading-tertiary">{modalDetails.name}</h3>
            <div className="description">
              <b>Overview:&ensp;</b>
              {modalDetails.description}
            </div>

            <ul className="keypoints">
              {" "}
              {modalDetails.keyPoints
                ? modalDetails.keyPoints.map(keyPoint => (
                  <li key={keyPoint.split()[0]}>&bull;&ensp;{keyPoint}</li>
                ))
                : null}
            </ul>
            <div className="icons">
              {modalDetails.icons
                ? modalDetails.icons.map(anIcon => (
                  <Icons anIcon={anIcon} key={anIcon} />
                ))
                : null}
            </div>
          </div>
        </div>
      </ModalWrapper>
    )
  }
}

// .hide-modal and .overlay are used for placement of modal content
// .modal-functionality-shown and .modal-functionality-hidden are used for closing modal functionality

const ModalWrapper = styled.div`
  @keyframes overlayEffect {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes modalEffect {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  .hide-modal {
    display: none;
  }

  .overlay {
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
    animation: overlayEffect 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
        max-width: 130rem;
        width: 70%;
        height: 60%;
        background-color: white;
        box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
        position: relative;
        border-radius: 10px;
        overflow: auto;
        animation: modalEffect 0.6s;

      ::-webkit-scrollbar {
        width: 0px;
      }

      @media (max-width: 56.25em) {
        width: 95%;
        height: 75%;
      }
    }
    @media (max-width: 56.25em) {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .modal-functionality-shown {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparent;
    width: 100vw;
    height: 100vh;
  }

  .modal-functionality-hidden {
    display: none;
  }

  .exit {
    height: 3.6rem;
    width: 3.6rem;
    background-color: transparent;
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0.3rem 0.3rem 0.8rem rgba(0, 0, 0, 0.5);

    @media (max-width: 56.25em) {
      top: 1rem;
      right: 1rem;
    }

    @media (hover: hover) {
      &:hover {
        background-image: linear-gradient(
          to right bottom,
          rgb(216, 216, 216),
          rgb(216, 215, 215)
        );
        box-shadow: 0.1rem 0.1rem 0.6rem rgba(0, 0, 0, 0.5);
      }
    }
  }

  .exit__icon {
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 3rem;
      height: 3px;
      display: inline-block;
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
    }
    &::before {
      top: 1.5rem;
      left: 0.2rem;
      transform: rotate(45deg);
    }
    &::after {
      top: 1.5rem;
      right: 0.2rem;
      transform: rotate(-45deg);
    }
  }

  .heading-tertiary {
    font-size: 3.5rem;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
    color: black;
    background-color: transparent;
    padding-top: 3rem;

    @media (max-width: 56.25em) {
      font-size: 2.5rem;
    }
  }

  .description {
    font-size: 2rem;
    font-weight: 400;
    color: black;
    padding: 3rem 4rem 5rem 4rem;
  }

  .keypoints {
    font-size: 1.8rem;
    font-weight: 400;
    color: black;
    list-style-type: none;
    padding: 0 4rem 5rem 4rem;

    @media (max-width: 56.25em) {
      font-size: 1.5rem;
    }

    li {
      padding-top: 1rem;
    }
  }

  .icons {
    text-align: center;
    padding: 0 2rem;
  }
`

// ;<span>
//   <img src={`../../public/${anIcon}.png`}></img>
// </span>

// "details": {
//   "name": "Nike Mock Up",
//   "description": "nike description",
//   "keyPoints": [
//     "Built a Nike product display page following a micro-service architecture",
//     "Randomly generated 5000+ reviews to consistently correlate with 100 real nike products",
//     "Implemented CRUD operations & sort functionality by querying a Mongo database with nested subdocuments ",
//     "Rendered a single page comprised of 3 services (nav, viewer, reviews) that communicate via url and proxy server "
//   ],
//   "icons": [
//     "MongoDB",
//     "Express.js",
//     "React",
//     "Node.js",
//     "AWS",
//     "Faker.js",
//     "styled-components",
//     "http-proxy",
//     "HTML5",
//     "CSS3"
//   ]
// }
