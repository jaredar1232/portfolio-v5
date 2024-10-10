import { useState } from "react";
import AiChat from "../components/AiChat";
import { SEO } from "../components/SEO";

export default function Home() {
  const [isChatFocused, setIsChatFocused] = useState(false);

  const handleChatFocus = () => {
    setIsChatFocused(true);
  };

  return (
    <section
      className={`relative h-screen bg-cover bg-right flex items-center justify-center ${isChatFocused ? "chat-focused" : ""
        }`}
      style={{
        backgroundImage: `linear-gradient(to right bottom, rgba(14,17,25,0.899), rgba(21,26,40,0.194)), url("/LandingImageBlueMedium.webp")`,
        backgroundColor: "#5A6E7A",
      }}
    >
      <div
        className={`text-center transition-all duration-500 min-h-[40vh] ${isChatFocused ? 'mt-[-10rem] lg:mt-[-20rem]' : ''
          }`}
      >
        <div
          className={`text-white uppercase transition-opacity duration-500 ease-in-out ${isChatFocused ? "opacity-0" : "opacity-100"
            }`}
        >
          <h1 className="block mt-20 font-light whitespace-pre-line animate-fadeUpToDown min-h-[6rem] text-3xl tracking-[0.6rem] md:text-6xl md:tracking-[1rem] lg:mt-40 lg:text-7xl lg:tracking-[2rem]">
            <span className="block mb-6 lg:mb-8">Jared</span>
            <span className="block">Rothenberg</span>
          </h1>
          <h2 className="block mt-10 font-light text-[0.8rem] tracking-[0.4rem] animate-fadeDownToUp min-h-[3rem] lg:mt-20 md:mb-[10rem] md:text-2xl md:tracking-[1.5rem]">
            Software Engineer
          </h2>
        </div>
        <AiChat className="min-h-[300px]" onFocus={handleChatFocus} />
      </div>
    </section>
  );
}

export const Head = () => <SEO title="Home" description="Jared Rothenbergs portfolio home" />