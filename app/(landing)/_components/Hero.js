import React from "react";
import { getAssetPath } from "../../../lib/utils";

const Hero = () => {
  const heroImagePath = getAssetPath('/hero.png');
  
  return (
    <div className="h-dvh">
      <div 
        className="bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"
        style={{ backgroundImage: `url(${heroImagePath})` }}
      ></div>
    </div>
  );
};

export default Hero;
