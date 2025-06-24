import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black/60 h-full text-gray-200 ">
      <div className="justify-between items-center max-w-screen-xl px-5 md:mx-auto mx-8">
        <div className="pt-20 ">
          <h1 className="md:text-4xl text-2xl py-4">
            <span></span>Having an idea in mind?
          </h1>
          <p className="md:text-xl text-lg py-4">
            Reach out and let us bring it to life...
          </p>
          <div className="flex md:gap-5 gap-3 pt-6">
            <Link to="/contact">
              <button
                type="button"
                className="bg-emerald-800 p-2 md:p-4 md:text-lg text-gray-100 hover:bg-emerald-900 hover:text-white transition-all ease-in-out duration-300 rounded-full cursor-pointer"
              >
                Talk to me
              </button>
            </Link>
            <Link to="/portfolio">
              <button
                type="button"
                className="bg-emerald-800 p-2 md:p-4 md:text-lg text-gray-100 hover:bg-emerald-900 hover:text-white transition-all ease-in-out duration-300 rounded-full cursor-pointer "
              >
                My Portfolio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
