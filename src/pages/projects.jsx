import { useState } from "react";
import styled from "styled-components";
import AProject from "../components/AProject";
import Modal from "../components/Modal";
import { SEO } from "../components/SEO";
import projectDataArray from "../../public/projectData.json";

export default function Projects() {
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
      <SEO title="Projects" description="Projects of Jared Rothenberg" />
      <Modal
        modalDetails={modalDetails}
        closeModal={closeModal}
        showModal={showModal}
      />
      <ProjectsSection>
        <div className="u-center-text">
          <h2 className="heading" id="applications">
            Projects
          </h2>
        </div>
        {projectDataArray.map((aProject) => (
          <AProject
            aProject={aProject}
            key={aProject.name}
            modalOnClick={modalOnClick}
            showModal={showModal}
          />
        ))}
      </ProjectsSection>
    </>
  );
}

export const Head = () => <SEO title="Jared Rothenberg | Projects" />

const ProjectsSection = styled.section`
  padding: 10rem 0;

  @media (max-width: 56.25em) {
    padding: 10rem 0 5rem 0;
  }

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
