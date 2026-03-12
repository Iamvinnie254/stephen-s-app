import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import PROFILE from "../data/profile";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    const phonenumber = "254702387039";

    const message = `
    Hello, my name is ${form.name}.

    Email:
    ${form.email}

    Message:
    ${form.message}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phonenumber}?text=${encodedMessage}`;

    setTimeout(() => {
      window.open(whatsappURL, "_blank");
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    }, 500);
  };

  return (
    <section id="contact" className="bg-[#0a0a0f] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <SectionLabel>Get in Touch</SectionLabel>
            <SectionTitle>
              Let's <GradientText>Work Together</GradientText>
            </SectionTitle>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Have a project in mind or want to discuss a role? I'd love to hear
              from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn direction="right">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Let's build something great
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Whether it's a greenfield project, scaling challenges, or
                  consulting, I'm available for the right opportunity.
                </p>
              </div>

              {[
                {
                  icon: "✉",
                  label: "Email",
                  value: PROFILE.email,
                  href: `mailto:${PROFILE.email}`,
                },
                {
                  icon: "⬡",
                  label: "GitHub",
                  value: "github.com/Iamvinnie254",
                  href: PROFILE.github,
                },
                {
                  icon: "in",
                  label: "LinkedIn",
                  value: "linkedin.com/in/stephen-vincent-9a74b83b6/",
                  href: PROFILE.linkedin,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-lg group-hover:bg-indigo-600/20 transition-colors">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-zinc-600 uppercase tracking-widest">
                      {c.label}
                    </div>
                    <div className="text-sm text-zinc-300 group-hover:text-white transition-colors">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              className="bg-white/3 border border-white/8 rounded-2xl p-8"
            >
              <div className="space-y-4 mb-6">
                {[
                  { key: "name", placeholder: "Your Name", type: "text" },
                  { key: "email", placeholder: "Email Address", type: "email" },
                ].map((f) => (
                  <input
                    key={f.key}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [f.key]: e.target.value }))
                    }
                    className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                  />
                ))}

                <textarea
                  rows={5}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  className="w-full bg-white/5 border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/25"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                    ? "Message Sent ✓"
                    : "Send Message"}
              </button>

              {status === "error" && (
                <p className="mt-3 text-xs text-rose-400 text-center">
                  Please fill in all fields.
                </p>
              )}

              {status === "success" && (
                <p className="mt-3 text-xs text-emerald-400 text-center">
                  Thanks! I'll get back to you within 24 hours.
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
