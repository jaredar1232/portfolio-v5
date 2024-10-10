import { useState } from "react";
import MediaCard from "../components/MediaCard";
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
      {/* Modal Component */}
      <Modal
        modalDetails={modalDetails}
        closeModal={closeModal}
        showModal={showModal}
      />

      {/* Projects Section */}
      <section className="pt-40 pb-20 md:pb-40 text-black">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-5xl uppercase font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-customBlue to-customBlueDark mb-12 sm:mb-4"
            id="applications"
          >
            Projects
          </h2>
        </div>

        {/* Projects Container */}
        <div className="mx-auto w-[95%] md:w-[90%]">
          <div className="flex flex-col gap-24">
            {projectDataArray.map((aProject) => (
              <MediaCard
                item={aProject}
                showModal={showModal}
                modalOnClick={modalOnClick}
                key={aProject.name}
                type="project"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export const Head = () => (
  <SEO title="Projects" description="Jared Rothenberg's projects" />
);