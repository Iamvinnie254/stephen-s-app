import React from "react";
import Profile from "../../assets/photo.jpg";
import { ReactTyped } from "react-typed";

const AboutIntro = () => {
  return (
    <div className="md:h-[300px] h-auto">
      <div className="md:flex md:flex-row flex flex-col-reverse gap-3 justify-between items-center max-w-screen-xl  px-5 py-8 md:mx-auto mx-3 ">
        <div className="">
          <h1 className="md:text-2xl pt-2 font-semibold">
            Hi, I'm Stephen Vincent
          </h1>
          <h2 className="md:text-lg  pt-2 font-extralight gap-3">
            <span className="pr-2 md:text-2xl sm:text-2xl text-xl">A</span>
            <ReactTyped
              className="md:text-2xl sm:text-2xl text-xl text-emerald-700 font-light "
              strings={["Software Engineer", "Web Developer", "Fullstack Developer"]}
              typeSpeed={100}
              typespeed={20}
              backDelay={2000}
              backSpeed={10}
              loop
            />
          </h2>
          <p className="pt-2  text-justify md:leading-8 leading-6">
            I don’t just build websites — I craft digital experiences that solve
            real-world problems. From dynamic e-commerce platforms and
            interactive UIs to data-driven dashboards and sleek backend systems,
            I bring ideas to life with React, Django, PostgreSQL, and a touch of
            creativity.
          </p>
          <p>
            Whether it's designing sllek websites with Vue.js & React Js,
            analyzing systems with precision, or optimizing user experiences
            with clean, responsive code — I code with intent, learn with
            passion, and deploy with purpose.
          </p>
          <p className="pt-3 ">Let’s build something impactful...!</p>
        </div>
        <div className="items-center">
          <img
            src={Profile}
            alt="Stephen Vincent"
            className="md:h-52 md:w-102 h-32 w-32 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
