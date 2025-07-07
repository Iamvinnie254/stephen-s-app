import React from "react";
import Hero from "../components/Hero/Hero";
import HeroPhoto from "../assets/photo.jpg";
import AboutIntro from "../components/About/About";
import Skill from "../components/Skill/Skill";
import Portfolio from "../components/Portfolio/Portfolio";
const Home = () => {
  return (
    <div>
      <div className="dark:bg-gray-300">
        <AboutIntro />
        <Skill />
        <Portfolio /> 
        <div className="relative h-[400px]">
          <img
            src={HeroPhoto}
            alt="photo"
            className="absolute right-0 top-0 h-[400px] w-full object-cover z-[-1]"
          />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
