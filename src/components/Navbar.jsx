import React, { useState } from "react";
import useScrollY from "../hooks/useScrollY";

const Navbar = ({ dark, toggleDark }) => {
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Contact"];

  const scrollTo = (id) => {
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xl font-black tracking-tight text-white cursor-pointer"
        >
          SV<span className="text-indigo-400">.</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="text-sm font-semibold px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white transition-all hover:shadow-lg hover:shadow-indigo-500/25 cursor-pointer"
          >
            Hire Me
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/5 px-6 pb-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-3 text-zinc-400 hover:text-white transition-colors border-b border-white/5"
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-4 w-full py-3 rounded-full bg-indigo-600 text-white font-semibold"
          >
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
