import React, { Component } from "react"
import styled from "styled-components"

export default class AJob extends Component {
  render() {
    const aJob = this.props.aJob
    const jobWidth = aJob.width

    return (
      <AJobSection jobWidth={jobWidth}>
        <h3 className="heading-secondary">{aJob.name}</h3>
        <div className="image-container">
          <video
            playsInline
            muted
            loop
            paused={`${!this.props.showModal}`}
            autoPlay
            className="project"
          >
            <source src={aJob.video} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="btn-container">
          <div className="btn-position">
            <a
              href={aJob.website}
              className="button--visit"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="24"
                height="24">
                <path data-name="layer1"
                  fill="none" stroke="#202020" strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="5" d="M2 20v36h60V20M2 8h60v12H2z"></path>
                <path data-name="layer2" fill="none" stroke="#202020" strokeLinecap="round"
                  strokeLinejoin="round" strokeWidth="5" d="M44 30l7 8-7 8M20 30l-7 8 7 8m16-18l-8 20"></path>
                <circle data-name="layer1" cx="8" cy="14" r="1" fill="none" stroke="#202020"
                  strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></circle>
                <circle data-name="layer1" cx="15" cy="14" r="1" fill="none"
                  stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></circle>
                <circle data-name="layer1" cx="22" cy="14" r="1" fill="none"
                  stroke="#202020" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></circle>
              </svg>
              &nbsp; Visit
            </a>
          </div>
          <div className="btn-position">
            <button
              className="button--details"
              onClick={() => this.props.modalOnClick(aJob.details)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z" />
              </svg>
              &nbsp; Details
            </button>
          </div>
        </div>
      </AJobSection>
    )
  }
}

const AJobSection = styled.section`
    width: 65%;
    height: auto;
    background: white;
    border-radius: 20px;
    margin: 0 auto 5rem auto;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
    padding: 2rem 1rem;
    max-width: 125rem;
    animation: liftOff 2s ease-out;
    animation-delay: .2s;
    animation-fill-mode: backwards;

    @media (max-width: 56.25em) {
      width: 95%;
    }

    @keyframes liftOff {
    0% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      border: 1px lightgray solid;
    }

    50% {
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.3);
    }

    100% {
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.25);
      border: 1px white solid;
    }
  }


  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    text-align: center;
    color: black;
    font-weight: 300;

    @media (max-width: 56.25em) {
      font-size: 1.8rem;
    }
  }

  .image-container {
    height: auto;
    width: ${props => props.jobWidth}%;
    margin: 0 auto 0 auto;
    position: relative;
  }

  .project {
    border-radius: 10px;
    border: solid 1px lightgrey;
    height: auto;
    width: 100%;
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 5rem 0 5rem;
  }

  .btn-position {
    justify-self: center;
    align-items: center;
    justify-content: center;
  }

  .button--visit {
    &:link,
    &:visited {
      font-size: 2rem;
      background-image: linear-gradient(
        to right bottom,
        rgb(102, 201, 255),
        rgb(120, 139, 249)
      );
      -webkit-background-clip: text;
      color: transparent;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid rgb(120, 139, 249);
      padding: 0.5rem 1rem;
      transition: all 0.2s;
    }
  }

  @media (hover: hover) {
    .button--visit:hover {
      -webkit-background-clip: unset;
      color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;
    }
  }

  .button--visit:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }

  .button--details {
    font-size: 2rem;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    cursor: pointer;
    line-height: 1.7;
  }

  @media (hover: hover) {
    .button--details:hover,
    .button--details:focus {
      -webkit-background-clip: unset;
      color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;
    }
  }

  .button--details:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`