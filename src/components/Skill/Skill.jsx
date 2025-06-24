import React from "react";
import python from '../../assets/Logos/python.png';
import javascript from '../../assets/Logos/javascript.png';
import react from '../../assets/Logos/react.png';
import django from '../../assets/Logos/django.png';
import vue from '../../assets/Logos/vue.png';
import mysql from '../../assets/Logos/mysql.png';
import tailwind from '../../assets/Logos/tailwind.png';
import html from '../../assets/Logos/html.png';




const Skill = () => {
  return (
    <div>
      <div className="md:flex md:flex-row flex flex-col-reverse gap-3 justify-between items-center max-w-screen-xl  px-5 py-8 md:mx-auto mx-3 ">
        <div className="w-full pt-7">
          <h2 className="text-emerald-700 font-semibold md:text-xl">Skills</h2>
          <h1 className="text-2xl font-bold pt-2"> What I can can do</h1>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-3 justify-between items-center max-w-screen-xl  px-5 py-3 md:mx-auto mx-3  ">
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg  ">
          <img src={python} alt="Python" className="w-12 h-12" />
          <span>Python</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={javascript} alt="Javascript" className="w-12 h-12" />
          <span>Javascript</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={react} alt="React" className="w-12 h-12" />
          <span>React Js</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={django} alt="django" className="w-12 h-12" />
          <span>Django</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={vue} alt="vue" className="w-12 h-12" />
          <span>Vue Js</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={mysql} alt="mysql" className="w-12 h-12" />
          <span>MySQL</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={tailwind} alt="Tailwind" className="w-12 h-12" />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center cursor-pointer p-2 hover:shadow-2xl transition-all duration-300 rounded-lg ">
          <img src={html} alt="HTML" className="w-12 h-12" />
          <span>HTML</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;
