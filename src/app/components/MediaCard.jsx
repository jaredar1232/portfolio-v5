// components/MediaCard.jsx

import { useRef, useEffect } from "react";

export default function MediaCard({ item, showModal, modalOnClick, type }) {
    const mediaWidth = item.width;
    const videoRef = useRef(null);

    useEffect(() => {
        const videoElement = videoRef.current;
        let observer;

        if (videoElement) {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !showModal) {
                        videoElement.play();
                    } else {
                        videoElement.pause();
                    }
                },
                {
                    threshold: 1,
                }
            );

            observer.observe(videoElement);
        }

        return () => {
            if (observer && videoElement) {
                observer.unobserve(videoElement);
            }
        };
    }, [showModal]);

    // Determine button properties based on the type
    const buttonProps = {
        label: type === "job" ? "Visit" : "GitHub",
        href: type === "job" ? item.website : item.github,
        icon: type === "job" ? (
            // Visit Icon SVG
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6 fill-current text-customBlueDark transition-colors duration-0 group-hover:text-white"
                viewBox="0 0 24 24"
            >
                <path d="M15 2v5h5v15H4V2h11zm1-2H3v24h18V7l-5-5z" />
            </svg>
        ) : (
            // GitHub Icon SVG
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 md:w-6 md:h-6 fill-current text-customBlueDark transition-colors duration-0 group-hover:text-white"
                viewBox="0 0 24 24"
            >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0
          5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234
          c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756
          -1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084
          1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304
          3.492.997.107-.775.418-1.305.762-1.604-2.665-.305
          -5.467-1.334-5.467-5.931 0-1.311.469-2.381
          1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0
          1.008-.322 3.301 1.23.957-.266 1.983-.399
          3.003-.404 1.02.005 2.047.138 3.006.404
          2.291-1.552 3.297-1.23 3.297-1.23.653 1.653
          .242 2.874.118 3.176.77.84 1.235 1.911
          1.235 3.221 0 4.609-2.807 5.624-5.479 5.921
          .43.372.823 1.102.823 2.222v3.293c0
          .319.192.694.801.576 4.765-1.589 8.199-6.086
          8.199-11.386 0-6.627-5.373-12-12-12z"
                />
            </svg>
        ),
    };

    return (
        <section
            className="w-[95%] md:w-[80%] lg:w-[65%] max-w-screen-lg mx-auto mb-20 p-4 md:p-8 rounded-3xl shadow-custom animate-liftOff"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
        >
            <h3 className="text-base md:text-2xl lg:text-3xl pb-1 uppercase text-center text-black font-light">
                {item.name}
            </h3>
            <div
                className="relative mx-auto my-0"
                style={{ width: `${mediaWidth}%` }}
            >
                <video
                    playsInline
                    muted
                    loop
                    ref={videoRef}
                    className="rounded-lg border border-gray-300 w-full"
                    preload="metadata"
                    src={item.video}
                >
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="grid grid-cols-2 mt-4 mx-5 md:mx-20 gap-2 md:gap-4">
                <div className="justify-self-center">
                    <a
                        href={buttonProps.href}
                        className="group text-sm md:text-lg lg:text-xl no-underline border-b border-b-customBlueDark py-1
                md:py-2 px-2 md:px-4 transition-all duration-200 flex items-center
                justify-center text-transparent bg-clip-text bg-gradient-to-r
                from-customBlue to-customBlueDark
                hover:text-white hover:bg-clip-unset hover:text-fill-white
                 hover:-translate-y-0.5 rounded-md hover:shadow-custom-hover
                active:shadow-custom-active"
                        target="_blank"
                        rel="noreferrer"
                    >
                        {buttonProps.icon}
                        &nbsp; {buttonProps.label}
                    </a>
                </div>
                <div className="justify-self-center">
                    <button
                        className="group text-sm md:text-lg lg:text-xl no-underline border-b border-b-customBlueDark py-1
                md:py-2 px-2 md:px-4 transition-all duration-200 flex items-center
                justify-center text-transparent bg-clip-text bg-gradient-to-r
                from-customBlue to-customBlueDark
                hover:text-white hover:bg-clip-unset hover:text-fill-white
                hover:shadow-custom-hover hover:-translate-y-0.5 rounded-md
                active:shadow-custom-active"
                        onClick={() => modalOnClick(item.details)}
                    >
                        {/* Details Icon SVG */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 md:w-6 md:h-6 fill-current text-customBlueDark transition-colors duration-0 group-hover:text-white"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10
                10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12
                5.373-12 12s5.373 12 12 12 12-5.373
                12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56
                1.251 1.25s-.561 1.25-1.251
                1.25-1.249-.56-1.249-1.25.559-1.25
                1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201
                1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0
                .535.517.558 1 .735v.999z" />
                        </svg>
                        &nbsp; Details
                    </button>
                </div>
            </div>
        </section>
    );
}