"use client";

import { useState } from "react";
import MediaCard from "../components/MediaCard";
import Modal from "../components/Modal";
import experienceDataArray from "../../../public/experienceData.json";

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
      {/* Modal Component */}
      <Modal
        modalDetails={modalDetails}
        closeModal={closeModal}
        showModal={showModal}
      />

      {/* Experience Section */}
      <section className="pt-40 pb-20 md:pb-40 text-black">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2
            className="text-5xl uppercase font-bold inline-block text-transparent bg-clip-text bg-gradient-to-t from-customBlue to-customBlueDark mb-12 sm:mb-4"
            id="applications"
          >
            Experience
          </h2>
        </div>

        {/* Experience Container */}
        <div className="mx-auto w-[95%] md:w-[90%]">
          <div className="flex flex-col gap-24">
            {experienceDataArray.map((aJob) => (
              <MediaCard
                item={aJob}
                showModal={showModal}
                modalOnClick={modalOnClick}
                key={aJob.name}
                type="job"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}