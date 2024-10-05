import { useState } from "react";
import styled from "styled-components";
import AJob from "../components/AJob";
import Modal from "../components/Modal";
import { SEO } from "../components/SEO";
import experienceDataArray from "../../public/experienceData.json";

export default function Experience() {
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const modalOnClick = (modalData) => {
    setModalDetails(modalData);
    setShowModal(true);
    document.body.classList.add("no-scroll");
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove("no-scroll");
  };

  return (
    <>
      <SEO title="Experience" description="Experience of Jared Rothenberg" />
      <Modal
        modalDetails={modalDetails}
        closeModal={closeModal}
        showModal={showModal}
      />
      <ExperienceSection>
        <div className="u-center-text">
          <h2 className="heading" id="applications">
            Experience
          </h2>
        </div>
        {experienceDataArray.map((aJob) => (
          <AJob
            aJob={aJob}
            key={aJob.name}
            modalOnClick={modalOnClick}
            showModal={showModal}
          />
        ))}
      </ExperienceSection>
    </>
  );
}

export const Head = () => <SEO title="Jared Rothenberg | Experience" />

const ExperienceSection = styled.section`
  padding: 10rem 0 5rem 0;

  .u-center-text {
    text-align: center;
  }

  .heading {
    font-size: 4rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    color: black;
    background: -webkit-linear-gradient(
      left,
      rgb(102, 201, 255),
      rgb(120, 139, 249)
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 3rem;

    @media (max-width: 56.25em) {
      font-size: 4rem;
    }
  }
`
