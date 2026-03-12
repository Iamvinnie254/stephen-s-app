import React from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import PROFILE from "../data/profile";
import profile_photo from "../images/profile.png";

const About = () => {
  return (
    <section id="about" className="bg-[#0d0d14] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <div className="relative">
              {/* Abstract avatar */}
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-cyan-600/20 border border-white/10 flex items-center justify-center text-8xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
                <div className="relative text-center">
                  <img
                    src={profile_photo}
                    alt="Profile"
                    className=""
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-indigo-600 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg">
                2+ Years
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#1a1a2e] border border-white/10 text-zinc-300 text-xs font-medium px-3 py-2 rounded-xl shadow-lg">
                Open to work ✓
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <SectionLabel>About Me</SectionLabel>
            <SectionTitle>
              Building software
              <br />
              <GradientText>people depend on</GradientText>
            </SectionTitle>
            <p className="text-zinc-400 leading-relaxed mb-6">{PROFILE.bio}</p>
            <p className="text-zinc-500 leading-relaxed mb-8 text-sm italic border-l-2 border-indigo-500/40 pl-4">
              {PROFILE.philosophy}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Projects Shipped", value: "15+" },
                { label: "Engineers Mentored", value: "2" },
                { label: "Stack Depth", value: "Full" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/3 border border-white/8 rounded-xl p-4"
                >
                  <div className="text-2xl font-black text-white">
                    {s.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
