import React from "react";
import PROFILE from "../data/profile";

const Footer = () => {
  return (
    <footer className="bg-[#070709] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-black text-white">
          SV<span className="text-indigo-400">.</span>
        </div>
        <p className="text-sm text-zinc-600 text-center">
          © 2026 Stephen Vincent · Full Stack Software Engineer
        </p>
        <div className="flex gap-4">
          {[PROFILE.github, PROFILE.linkedin, PROFILE.twitter].map(
            (href, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-zinc-500 hover:text-white hover:bg-white/10 transition-all text-xs"
              >
                {["⬡", "in", "𝕏"][i]}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
