import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import PROJECTS, { TECH_FILTER_OPTIONS } from "../data/projects";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) =>
          p.tags.some((t) => t.includes(filter) || filter.includes(t)),
        );

  return (
    <section id="projects" className="bg-[#0a0a0f] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Portfolio</SectionLabel>
            <SectionTitle>
              Featured <GradientText>Projects</GradientText>
            </SectionTitle>
            <p className="text-zinc-500 max-w-xl mx-auto">
              A selection of systems, apps, and tools I've built — spanning
              APIs, dashboards, and developer tooling.
            </p>
          </div>
        </FadeIn>

        {/* Filter */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TECH_FILTER_OPTIONS.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  filter === opt
                    ? "bg-indigo-600 text-white"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/8"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj, i) => (
            <FadeIn key={proj.title} delay={i * 0.08}>
              <div className="group relative bg-white/3 border border-white/8 rounded-2xl overflow-hidden hover:border-white/15 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/40">
                {/* Gradient top */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${proj.gradient}`}
                />

                <div className="">
                  <div className="flex items-center mb-4">
                    <img
                      src={proj.icon}
                      alt={proj.title}
                      className="max-w-full"
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <h1 className="text-xl font-bold text-white mb-2">
                      {proj.title}
                    </h1>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                      {proj.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/8 text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={proj.github}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-medium"
                        target="_blank"
                      >
                        <span>⬡</span> GitHub
                      </a>
                      <a
                        href={proj.demo}
                        className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors font-medium"
                        target="_blank"
                      >
                        <span>↗</span> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
