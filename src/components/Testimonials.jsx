import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import TESTIMONIALS from "../data/testimonials";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="testimonials" className="bg-[#0d0d14] py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Social Proof</SectionLabel>
            <SectionTitle>
              What People <GradientText>Say</GradientText>
            </SectionTitle>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-indigo-500/20 transition-all">
                <div className="flex items-start gap-1 text-indigo-400 mb-4 text-xl">
                  "
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6 italic">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, ${t.color}88)`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      {t.name}
                    </div>
                    <div className="text-xs text-zinc-500">{t.role}</div>
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

export default Testimonials;
