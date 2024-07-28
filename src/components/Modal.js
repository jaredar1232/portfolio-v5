import styled from "styled-components"
import Icons from "./Icons"

export default function Modal({ modalDetails, showModal, closeModal }) {
  const handleClose = () => {
    const element = document.getElementById("modal")
    element.scrollTo(0, 0)
    closeModal()
  }

  return (
    <ModalWrapper>
      <div className={showModal ? "overlay" : "hide-modal"}>
        <div
          className={
            showModal
              ? "modal-functionality-shown"
              : "modal-functionality-hidden"
          }
          onClick={handleClose}
        ></div>

        <div className="overlay__content" id="modal">
          <div className="exit" onClick={handleClose}>
            <span className="exit__icon">&nbsp;</span>
          </div>
          <h3 className="heading">{modalDetails.name}</h3>

          <div className="icons">
            {modalDetails.icons
              ? modalDetails.icons.map(anIcon => (
                  <Icons anIcon={anIcon} key={anIcon} />
                ))
              : null}
          </div>

          <div className="description">
            <b>Overview:&ensp;</b>
            {modalDetails.description}
          </div>

          <ul className="keypoints">
            {modalDetails.keyPoints
              ? modalDetails.keyPoints.map(keyPoint => (
                  <li key={keyPoint.split()[0]}>&bull;&ensp;{keyPoint}</li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
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
    animation: fadeIn 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &__content {
      max-width: 130rem;
      width: 60%;
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
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0 auto;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0.3rem 0.3rem 0.8rem rgba(0, 0, 0, 0.5);

    position: sticky;
    top: 1rem;
    right: 1rem;
    float: right;

    // used to resolve mobile stutter animation (only shows on real phone)
    @media (max-width: 56.25em) {
      animation: fadeIn 0.2s;
      animation-fill-mode: backwards;
      animation-delay: 0.8s;
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

  .heading {
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: center;
    color: black;
    background-color: transparent;
    padding-top: 3rem;
    font-weight: 300;

    @media (max-width: 56.25em) {
      padding-top: 4rem;
      font-size: 2.2rem;
      font-weight: 400;
    }
  }

  .description {
    font-size: 2rem;
    color: black;
    padding: 3rem 4rem 5rem 4rem;

    @media (max-width: 56.25em) {
      padding: 2rem;
    }
  }

  .keypoints {
    font-size: 1.8rem;
    color: black;
    list-style-type: none;
    padding: 0 4rem 5rem 4rem;

    @media (max-width: 56.25em) {
      font-size: 1.5rem;
      padding-bottom: 2rem;
    }

    li {
      padding-top: 1rem;
    }
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 0 1rem;
  }

  @keyframes fadeIn {
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
`
