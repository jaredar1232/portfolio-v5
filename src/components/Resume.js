import React, { Component } from "react"
import styled from "styled-components"

const ResumeWrapper = styled.div`
  .section-resume {
    background-color: #181e2e;
    padding: 40rem 0 10rem 0;
    color: white;
    margin-top: -20vh;
    @media (max-width: 56.25em) {
      padding: 25rem 0 5rem 0;
    }
  }

  .resume-button-container {
    width: 27%;
    height: auto;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;

    @media (hover: hover) {
      &:hover {
        background-color: transparent;
      }
    }

    @media (max-width: 56.25em) {
      // margin-top: 10rem;
      width: 30rem;
    }
  }

  .resume-button {
    display: inline-block;
    width: 100%;
    height: 100%;
    font-size: 3rem;
    font-weight: 400;
    text-transform: uppercase;
    background-image: linear-gradient(
      to right bottom,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    color: transparent;
    text-align: center;
    padding: 2rem 1rem;
    border-radius: 10px;
    transition: all 0.3s;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        -webkit-background-clip: unset;
        color: white;
        text-decoration: none;
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.4);
        transform: translateY(-2px);
        border-radius: 10px;
      }
    }

    &:active {
      box-shadow: 0 0.25rem 0.5rem rgba(255, 255, 255, 0.2);
      transform: translateY(0);
    }

    @media (max-width: 56.25em) {
      padding: 1rem;
    }
  }
  .resume-svg {
    display: inline-block;
  }
`

export default class Resume extends Component {
  render() {
    return (
      <ResumeWrapper>
        <section className="section-resume" id="resume">
          <div
            className="resume-button-container"
            data-sal="zoom-in"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <a
              href="https://d1o11p1jeyf1dw.cloudfront.net/Resume-JaredRothenberg.pdf"
              target="_blank"
              className="resume-button"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                className="resume-svg"
              >
                <path d="M23.995 24h-1.995c0-3.104.119-3.55-1.761-3.986-2.877-.664-5.594-1.291-6.584-3.458-.361-.791-.601-2.095.31-3.814 2.042-3.857 2.554-7.165 1.403-9.076-1.341-2.229-5.413-2.241-6.766.034-1.154 1.937-.635 5.227 1.424 9.025.93 1.712.697 3.02.338 3.815-.982 2.178-3.675 2.799-6.525 3.456-1.964.454-1.839.87-1.839 4.004h-1.995l-.005-1.241c0-2.52.199-3.975 3.178-4.663 3.365-.777 6.688-1.473 5.09-4.418-4.733-8.729-1.35-13.678 3.732-13.678 4.983 0 8.451 4.766 3.732 13.678-1.551 2.928 1.65 3.624 5.09 4.418 2.979.688 3.178 2.143 3.178 4.663l-.005 1.241zm-13.478-6l.91 2h1.164l.92-2h-2.994zm2.995 6l-.704-3h-1.615l-.704 3h3.023z" />
              </svg>
              &nbsp; View Resume
            </a>
          </div>
        </section>
      </ResumeWrapper>
    )
  }
}
