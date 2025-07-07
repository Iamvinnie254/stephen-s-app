import React from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../Portfolio/Projects";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="mt-10 text-center">Project not found</p>;

  return (
    <div className="min-h-[80vh] justify-center">
      <h1 className="text-2xl md:text-3xl font-semibold  text-center pt-2">
        {project.title}
      </h1>
      <img
        src={project.image}
        alt={project.title}
        className=" mx-auto m-5 rounded-lg shadow-2xl w-[350px] md:w-[500px] "
      />
      <p className="pt-5 text-center xl:mx-60 lg:mx-40 md:mx-20 mx-5">
        {project.description}
      </p>

      <div className="flex justify-center pt-10 gap-4">
        <Link to={project.link} target="_blank">
          <button className="bg-emerald-700 hover:bg-emerald-800 cursor-pointer p-2 px-5 rounded-2xl items-center">Demo</button>
        </Link>
        <Link to={project.link} target="_blank">
          <button className="bg-yellow-300 hover:bg-yellow-400 cursor-pointer p-2 rounded-2xl items-center">Live preview</button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
