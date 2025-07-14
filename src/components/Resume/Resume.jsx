import React from "react";
import { FaDownload, FaFilePdf } from "react-icons/fa";

const Resume = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-12 lg:px-20 min-h-[70vh]">
      <div className="text-center max-w-3xl mx-auto mb-12 ">
        <h2 className="font-bold text-2xl md:text-3xl text-emerald-700 ">
          My Resume
        </h2>
        <h1 className="font-semibold text-gray-700  pt-2 text-lg md:text-xl ">
          A Glimpse Into My professional Journey
        </h1>
        <p className="font-light text-gray-600 pt-4 ">
          Below is my up-to-date resume detailing my skills, experience,
          education, and relevant accomplishments. You can preview it below or
          download a copy for your reference.
        </p>
      </div>
      {/* Resume preview */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 ">
        <a
          href="/STEPHEN_FULL_STACK_final.pdf"
          className="inline-flex items-center  gap-2 px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300"
        >
          <FaDownload className="text-lg" /> Preview Resume
        </a>

        {/* Download button */}
        <a
          href="/STEPHEN_FULL_STACK_final.pdf"
          download="Stephen_Vincent_Resume.pdf"
          className="inline-flex items-center  gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full hover:bg-emerald-800 transition duration-300"
        >
          <FaDownload className="text-lg" /> Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
