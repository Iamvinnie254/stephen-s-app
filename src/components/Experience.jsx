import React from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import EXPERIENCE from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0d0d14] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Career</SectionLabel>
            <SectionTitle>
              Work <GradientText>Experience</GradientText>
            </SectionTitle>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCE.map((exp, i) => (
              <FadeIn
                key={exp.company}
                delay={i * 0.15}
                direction={i % 2 === 0 ? "right" : "left"}
              >
                <div
                  className={`relative flex items-start gap-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Dot */}
                  <div
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-indigo-500 bg-[#0d0d14] z-10"
                    style={{ top: "1.5rem" }}
                  />

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />

                  {/* Card */}
                  <div className="ml-12 md:ml-0 flex-1 bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-indigo-500/20 transition-all">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {exp.role}
                        </h3>
                        <p
                          className="text-sm font-medium"
                          style={{ color: exp.color }}
                        >
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-zinc-500 font-medium">
                          {exp.duration}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            exp.type === "Backend"
                              ? "bg-indigo-500/15 text-indigo-400"
                              : "bg-cyan-500/15 text-cyan-400"
                          }`}
                        >
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((r, ri) => (
                        <li
                          key={ri}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="text-indigo-500 mt-1 shrink-0">
                            ▸
                          </span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
