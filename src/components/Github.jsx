import React from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import GITHUB_REPOS from "../data/github";
import PROFILE from "../data/profile";

const Github = () => {
  return (
    <section id="github" className="bg-[#0d0d14] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <SectionLabel>Open Source</SectionLabel>
              <h2 className="text-3xl font-black text-white">
                GitHub <GradientText>Activity</GradientText>
              </h2>
            </div>
            <a
              href={PROFILE.github}
              className="text-sm text-indigo-400 hover:text-indigo-300 font-medium"
            >
              View all repos →
            </a>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GITHUB_REPOS.map((repo, i) => (
            <FadeIn key={repo.name} delay={i * 0.07}>
              <div className="group bg-white/3 border border-white/8 rounded-xl p-5 hover:border-white/15 transition-all hover:-translate-y-0.5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-zinc-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="font-semibold text-sm text-white truncate">
                      {repo.name}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mb-4 leading-relaxed line-clamp-2">
                  {repo.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500">
                  <span className="flex items-center gap-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full inline-block"
                      style={{ background: repo.color }}
                    />
                    {repo.lang}
                  </span>
                  <span>⭐ {repo.stars}</span>
                  <span>🍴 {repo.forks}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Github;
