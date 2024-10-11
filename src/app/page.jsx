"use client";

import { useState } from "react";
import Image from "next/image";
import AiChat from "./components/AiChat";

export default function Home() {
  const [isChatFocused, setIsChatFocused] = useState(false);

  const handleChatFocus = () => {
    setIsChatFocused(true);
  };

  return (
    <section className={`relative h-screen flex items-center justify-center ${isChatFocused ? "chat-focused" : ""}`}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/LandingImageBlueMedium.webp"
          alt="Background Image"
          layout="fill"
          objectFit="cover" // Ensures the image covers the section
          className="object-right" // Shift the image to the right
          priority // Loads the image with priority for better performance
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(14,17,25,0.899)] to-[rgba(21,26,40,0.194)] z-10" /> {/* Gradient Overlay */}
      </div>

      {/* Content Overlay */}
      <div
        className={`text-center transition-all duration-500 min-h-[40vh] ${isChatFocused ? 'mt-[-10rem] lg:mt-[-20rem]' : ''} z-20`}
      >
        <div className={`text-white uppercase transition-opacity duration-500 ease-in-out ${isChatFocused ? "opacity-0" : "opacity-100"}`}>
          <h1 className="block mt-20 font-light whitespace-pre-line animate-fadeUpToDown min-h-[6rem] text-3xl tracking-[0.6rem] md:text-6xl md:tracking-[1rem] lg:mt-40 lg:text-7xl lg:tracking-[2rem]">
            <span className="block mb-6 lg:mb-8">Jared</span>
            <span className="block">Rothenberg</span>
          </h1>
          <h2 className="block mt-10 font-light text-[0.8rem] tracking-[0.4rem] animate-fadeDownToUp min-h-[3rem] lg:mt-20 md:mb-[10rem] md:text-2xl md:tracking-[1.5rem]">
            Software Engineer
          </h2>
        </div>
        <AiChat className="min-h-[300px] z-20" onFocus={handleChatFocus} />
      </div>
    </section>
  );
}