import React from "react";

const Hero = () => {
  return (
    <div className="h-dvh">
      <div 
        className="bg-center bg-cover bg-no-repeat fixed top-0 left-0 h-full w-full -z-10"
        style={{ backgroundImage: `url(hero.png)` }}
      ></div>
    </div>
  );
};

export default Hero;
