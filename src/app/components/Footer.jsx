"use client";

import { useEffect, useState } from "react";
import Resume from "./Resume";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Ensure client-side rendering happens consistently
  }, []);

  const iconClasses =
    "justify-self-center w-12 h-12 border-2 border-white rounded-md text-center text-white transition-all duration-300 cursor-pointer md:m-0 m-4 hover:border-customBlue hover:text-customBlue hover:shadow-[0_4px_8px_rgba(255,255,255,0.4)] hover:-translate-y-[2px] active:shadow-[0_2px_4px_rgba(255,255,255,0.2)]";

  return (
    <footer className="bg-[rgb(24,30,46)] text-white pt-6 pb-4 md:pt-8 md:pb-8">
      <Resume />
      <div className="grid grid-cols-3 w-full md:w-[40%] h-auto mx-auto">
        {isMounted && (
          <>
            <a
              href="https://www.linkedin.com/in/jared-rothenberg"
              className={iconClasses}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon
                className="text-[1.8rem] pt-[0.5rem]"
                icon={faLinkedinIn}
              />
            </a>

            <a
              href="https://github.com/jaredar1232"
              className={iconClasses}
              target="_blank"
              rel="noreferrer"
              aria-label="Github"
            >
              <FontAwesomeIcon
                className="text-[1.8rem] pt-[0.5rem]"
                icon={faGithub}
              />
            </a>
            <a
              href="mailto:jaredar@gmail.com"
              className={iconClasses}
              aria-label="Email-Me"
            >
              <FontAwesomeIcon
                className="text-[1.8rem] pt-[0.5rem]"
                icon={faEnvelope}
              />
            </a>
          </>
        )}
      </div>

      <div className="mt-8 text-center text-[0.8rem] lg:text-[1.2rem]">
        Copyright © 2020, &nbsp; Jared Rothenberg. &nbsp; All Rights
        Reserved
      </div>
    </footer>
  );
}