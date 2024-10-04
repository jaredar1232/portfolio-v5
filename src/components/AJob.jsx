import styled from "styled-components"

const AJob = ({ aJob, showModal, modalOnClick }) => {
  const jobWidth = aJob.width

  return (
    <AJobSection jobWidth={jobWidth}>
      <h3 className="heading-secondary">{aJob.name}</h3>
      <div className="image-container">
        <video
          playsInline
          muted
          loop
          paused={`${!showModal}`}
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
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M15 2v5h5v15h-16v-20h11zm1-2h-14v24h20v-18l-6-6z"></path>
            </svg>
            &nbsp; Visit
          </a>
        </div>
        <div className="btn-position">
          <button
            className="button--details"
            onClick={() => modalOnClick(aJob.details)}
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

export default AJob

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
  animation-delay: 0.2s;
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
    font-size: 2.5rem;
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
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 0.5rem 1rem;
    transition: all 0.2s;

    color: black;
    background: -webkit-linear-gradient(
      left,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    display: flex;
    align-items: center;

    svg {
      width: 2.3rem;
      fill: rgb(120, 139, 249);
    }
  }

  @media (hover: hover) {
    .button--visit:hover {
      -webkit-background-clip: unset;
      background-clip: white;
      -webkit-text-fill-color: white;
      color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;

      svg {
        fill: white;
      }
    }
  }

  .button--visit:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }

  .button--details {
    font-size: 2rem;
    display: inline-block;
    text-decoration: none;
    border-bottom: 1px solid rgb(120, 139, 249);
    padding: 0.5rem 1rem;
    transition: all 0.2s;
    cursor: pointer;
    line-height: 1.7;

    display: flex;
    align-items: center;

    color: black;
    background: -webkit-linear-gradient(
      left,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;

    svg {
      fill: rgb(120, 139, 249);
    }
  }

  @media (hover: hover) {
    .button--details:hover,
    .button--details:focus {
      -webkit-background-clip: unset;
      background-clip: unset;
      -webkit-text-fill-color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
      border-radius: 4px;
      svg {
        fill: white;
      }
    }
  }

  .button--details:active {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transform: translateY(0);
  }
`
