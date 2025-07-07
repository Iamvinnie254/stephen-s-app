import React from "react";
import { Link } from "react-router-dom";
import projects from "../Portfolio/Projects";

const Portfolio = () => {
  return (
    <div className="justify-between items-center max-w-screen-xl px-5 py-8 md:mx-auto mx-3">
      <div>
        <h2
          className="text-emerald-700 font-semibold md:text-xl"
          data-aos="fade-out"
        >
          Projects
        </h2>
        <h1
          className="md:text-3xl text-2xl font-semibold pt-2"
          data-aos="fade-out"
        >
          Some of my recent projects
        </h1>
        <p className="pt-2 font-light" data-aos="fade-out">
          These are some of my best projects. Here I have mostly used React
          Js/Vue Js for frontend and Django-Python/Laravel-PHP for backend and
          Tailwind CSS for styling.
        </p>

        <div
          className="p-5 flex flex-col md:flex-row gap-2 items-center"
          data-aos="slide-up"
        >
          <button className="bg-purple-600 text-gray-800 shadow-2xl hover:bg-purple-700 p-2 mt-3 rounded-full">
            *All Projects*
          </button>
          <button className="p-2 mt-3 rounded-full bg-white shadow-2xl">
            *Vue / Laravel projects*
          </button>
          <button className="p-2 mt-3 rounded-full bg-white shadow-2xl">
            *React / Django projects*
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((item) => (
            <Link
              key={item.id}
              {...item}
              to={`/projects/${item.id}`}
              className="shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
              data-aos="fade-out"
            >
              <img
                src={item.image}
                alt={`Project ${item.id}`}
                className="rounded-lg shadow-lg hover:opacity-80 transition-all duration-300 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center pt-10 mt-5 ">
        <Link to={"https://github.com/Iamvinnie254"} className="" target="_blank">
          <button className="bg-purple-600 hover:bg-purple-700 text-gray-100 hover:text-gray-200 cursor-pointer p-2 rounded-xl">
            View All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
