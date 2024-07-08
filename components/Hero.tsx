import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="p-0 relative h-[100vh] w-full">
      <video loop muted autoPlay className="absolute inset-0 w-full h-full object-cover z-0">
        <source src="/desktop-mk1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[-60vw] flex flex-col items-center justify-center">
          {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dinamic Web with Next.js
          </h2> */}

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="J C A M"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-shadow fade-up">
            Front-end developer &amp; Designer
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
