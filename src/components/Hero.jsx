import React, { useState, useEffect } from "react";
import GradientText from "../ui/GradientText";
import PROFILE from "../data/profile";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 100);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Available for new opportunities
          </div>

          {/* Name */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "all 0.7s ease 0.25s",
            }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-4 text-white">
              Stephen
              <br />
              <GradientText>Vincent</GradientText>
            </h1>
          </div>

          {/* Title */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "all 0.7s ease 0.4s",
            }}
          >
            <p className="text-xl md:text-2xl font-light text-zinc-400 mb-3">
              Full Stack Software Engineer
            </p>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              {PROFILE.tagline} — specializing in Django backends, React
              frontends, and systems designed to last.
            </p>
          </div>

          {/* CTAs */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "all 0.7s ease 0.55s",
            }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <button
              onClick={() => scrollTo("projects")}
              className="group px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5 cursor-pointer"
            >
              View Projects
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <a
              href="../public/STEPHEN_VINCENT_WAINAINA.pdf"
              download
              className="px-7 py-3.5 rounded-full border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
            >
              Download CV
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 rounded-full border border-indigo-500/30 text-indigo-300 hover:border-indigo-500/60 font-semibold text-sm transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Contact Me
            </button>
          </div>

          {/* Social */}
          <div
            style={{
              opacity: mounted ? 1 : 0,
              transition: "all 0.7s ease 0.7s",
            }}
            className="flex items-center gap-6"
          >
            {[
              { label: "GitHub", href: PROFILE.github, icon: "⬡" },
              { label: "LinkedIn", href: PROFILE.linkedin, icon: "in" },
              { label: "Twitter", href: PROFILE.twitter, icon: "𝕏" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-medium"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 text-xs transition-all">
                  {s.icon}
                </span>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(24px)",
            transition: "all 0.7s ease 0.85s",
          }}
          className="absolute bottom-16 right-6 md:right-16 flex gap-6 md:gap-10"
        >
          {[
            { value: "2+", label: "Years" },
            { value: "15+", label: "Projects" },
            { value: "2", label: "Companies" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-white">
                {s.value}
              </div>
              <div className="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
