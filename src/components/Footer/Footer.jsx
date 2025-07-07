import React from "react";
import { FaGithub, FaLinkedin, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { FaArrowPointer, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-2 gap-5 md:p-10 md:mx-10 mx-5 ">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-purple-700">
            Let's Connect
          </h1>
          <div className="flex gap-4 pt-5">
            <Link to={"https://github.com/Iamvinnie254"}>
              <FaGithub size={25} />
            </Link>
            <Link to={"/"}>
              <FaLinkedin size={25} />
            </Link>
            <Link to={"/"}>
              <FaXTwitter size={25} />
            </Link>
            <Link to={"/"}>
              <FaWhatsapp size={25} />
            </Link>
            <Link to={"/"}>
              <FaPhoneAlt size={25} />
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-purple-700">
            Quick Links
          </h1>
          <div className="flex flex-col pt-5 gap-4">
            <Link
              to={"/"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              {" "}
              Home
            </Link>
            <Link
              to={"/"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              About Me
            </Link>
            <Link
              to={"/services"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              My Services
            </Link>
            <Link
              to={"/resume"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Download Resume
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Let's Chat
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-purple-700">
            Major Projects
          </h1>
          <div className="flex flex-col pt-5 gap-4">
            <Link
              to={"/portfolio"}
              onClick={window.scrollTo(0,0)}
              className="hover:text-gray-500 transition-all duration-300"
            >
              E-Commerce Websites
            </Link>
            <Link
              to={"/portfolio"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Personal Portfolio Websites
            </Link>
            <Link
              to={"/portfolio"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Learning Management Systems
            </Link>
            <Link
              to={"/portfolio"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Inventory Systems
            </Link>
            <Link
              to={"/portfolio"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Record Keeping Systems
            </Link>
          </div>
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-purple-700">
            Legal
          </h1>
          <div className="flex flex-col gap-4 pt-5">
            <Link
              to={"/"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to={"/"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Complaints Policy
            </Link>
            <Link
              to={"/"}
              className="hover:text-gray-500 transition-all duration-300"
            >
              Return Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
