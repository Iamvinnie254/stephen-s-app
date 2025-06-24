import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Photo from "../../assets/photo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white border-b border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={Photo}
              className="h-9 w-9 rounded-full object-cover"
              alt="Stephen Vincent"
            />
            <span className="text-sm sm:text-xl font-semibold dark:text-white">
              Stephen Vincent
            </span>
          </NavLink>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex space-x-6 text-gray-800 dark:text-gray-200 font-medium">
            {[
              "/",
              "/portfolio",
              "/services",
              "/blog",
              "/resume",
              "/contact",
            ].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "text-indigo-800" : "hover:text-indigo-800"
                  }
                >
                  {
                    [
                      "Home",
                      "Portfolio",
                      "Services",
                      "Blogs",
                      "Resume",
                      "Talk To Me",
                    ][i]
                  }
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Nav Panel */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg lg:hidden`}
        >
          {/* Close 'X' Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Nav Links */}
          <ul className="flex flex-col space-y-6 px-6 text-gray-800 dark:text-gray-100 font-semibold">
            {[
              { path: "/", label: "Home" },
              { path: "/portfolio", label: "Portfolio" },
              { path: "/services", label: "Services" },
              { path: "/blog", label: "Blogs" },
              { path: "/resume", label: "Resume" },
              { path: "/contact", label: "Talk To Me" },
            ].map(({ path, label }) => (
              <li key={path}>
                <NavLink
                  to={path}
                  onClick={handleNavClick}
                  className={({ isActive }) =>
                    isActive ? "text-indigo-600" : "hover:text-indigo-600"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-30 lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
