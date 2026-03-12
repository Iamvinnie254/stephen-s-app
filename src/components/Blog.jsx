import React, { useState } from "react";
import FadeIn from "../ui/FadeIn";
import GradientText from "../ui/GradientText";
import SectionLabel from "../ui/SectionLabel";
import SectionTitle from "../ui/SectionTitle";
import BLOG_POSTS from "../data/blog";

const Blog = () => {
  const [search, setSearch] = useState("");

  const filtered = BLOG_POSTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())),
  );

  return (
    <section id="blog" className="bg-[#0a0a0f] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <SectionLabel>Writing</SectionLabel>
            <SectionTitle>
              The <GradientText>Blog</GradientText>
            </SectionTitle>
            <p className="text-zinc-500 max-w-xl mx-auto">
              Deep dives on backend architecture, frontend performance, and the
              craft of software engineering.
            </p>
          </div>
        </FadeIn>

        {/* Search */}
        <FadeIn delay={0.1}>
          <div className="max-w-md mx-auto mb-12 relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 pl-10 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
            />
            <svg
              className="absolute left-3 top-3.5 w-4 h-4 text-zinc-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.08}>
              <article className="group bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-all cursor-pointer hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full border font-medium"
                        style={{
                          borderColor: post.color + "40",
                          color: post.color,
                          background: post.color + "10",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-zinc-600">
                    {post.readTime} read
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>{post.date}</span>
                  <span className="text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                    Read more →
                  </span>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-zinc-600">
            No articles match your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
