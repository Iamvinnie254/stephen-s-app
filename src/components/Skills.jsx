import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import SKILLS from "../data/skills";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="bg-[#0a0a0f] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Tech Stack</SectionLabel>
            <SectionTitle>
              Skills &amp; <GradientText>Technologies</GradientText>
            </SectionTitle>
            <p className="text-zinc-500 max-w-xl mx-auto">
              End-to-end capabilities across the modern web stack — from
              database design to pixel-perfect frontends.
            </p>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {Object.keys(SKILLS).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeTab === cat
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                    : "bg-white/5 text-zinc-400 hover:text-white border border-white/8"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS[activeTab].map((skill, i) => (
            <FadeIn key={skill.name} delay={i * 0.06}>
              <div className="group bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-white text-sm">
                    {skill.name}
                  </span>
                  <span className="text-xs font-bold text-indigo-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* All skills tags */}
        <FadeIn delay={0.3}>
          <div className="mt-16 p-8 bg-white/2 border border-white/6 rounded-3xl">
            <p className="text-xs text-zinc-600 uppercase tracking-widest mb-4 text-center">
              Full Technology Repertoire
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "React.js",
                "Vue.js",
                "Django",
                "DRF",
                "Laravel",
                "GraphQL",
                "Apollo",
                "PostgreSQL",
                "MySQL",
                "Python",
                "PHP",
                "JavaScript",
                "Tailwind",
                "Docker",
                "Redis",
                "Git",
                "CI/CD",
                "REST APIs",
                "Linux",
                "Axios",
              ].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/8 text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
