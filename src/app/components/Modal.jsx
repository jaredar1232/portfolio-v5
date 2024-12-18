import { useEffect } from 'react';
import Icons from './Icons';

export default function Modal({ modalDetails, showModal, closeModal }) {
  const handleClose = () => {
    const element = document.getElementById('modal');
    if (element) {
      element.scrollTo(0, 0);
    }
    closeModal();
  };

  useEffect(() => {
    // Prevent body scroll when modal is open
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [showModal]);

  return (
    <div
      className={`${showModal
        ? 'fixed inset-0 z-50 flex items-center justify-center'
        : 'hidden'
        }`}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-80 animate-fadeInModal"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div
        className="relative bg-white md:p-5 rounded-lg shadow-2xl animate-modalEffect
                   w-[95%] h-3/4
                   md:w-4/5 md:h-3/5
                   lg:w-1/2 lg:h-3/5"
      >
        {/* Exit Button */}
        <button
          className="group absolute top-4 right-4 h-9 w-9 bg-white border border-black rounded-md shadow-md flex items-center justify-center cursor-pointer z-10 hover:bg-gradient-to-t hover:from-customBlue hover:to-customBlueDark transition-all hover:shadow-custom-hover hover:-translate-y-[1px] duration-200"
          onClick={handleClose}
        >
          {/* Exit Icon */}
          <span className="relative block w-6 h-6">
            <span className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-l from-customBlue to-customBlueDark transform -translate-y-1/2 rotate-45 group-hover:from-white group-hover:to-white  transition-all duration-0"></span>
            <span className="absolute top-1/2 left-0 w-full h-[3px] bg-gradient-to-r from-customBlue to-customBlueDark transform -translate-y-1/2 -rotate-45 group-hover:from-white group-hover:to-white transition-all duration-0"></span>
          </span>
        </button>

        {/* Scrollable Content */}
        <div id="modal" className="overflow-auto h-full pt-12">
          {/* Modal Heading */}
          <h3 className="text-2xl md:text-xl uppercase text-center text-black font-light">
            {modalDetails.name}
          </h3>

          {/* Icons */}
          <div className="flex flex-wrap justify-center items-center p-4">
            {modalDetails.icons &&
              modalDetails.icons.map((anIcon) => (
                <Icons anIcon={anIcon} key={anIcon} />
              ))}
          </div>

          {/* Description */}
          <div className="text-lg md:text-lg text-black px-8 md:px-4 py-6">
            <b>Overview:&ensp;</b>
            {modalDetails.description}
          </div>

          {/* Key Points */}
          <ul className="text-sm md:text-base text-black list-none px-8 md:px-4 pb-10">
            {modalDetails.keyPoints &&
              modalDetails.keyPoints.map((keyPoint, index) => (
                <li key={index} className="pt-2">
                  &bull;&ensp;{keyPoint}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}