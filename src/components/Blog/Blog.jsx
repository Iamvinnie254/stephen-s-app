import React, { useEffect, useState } from "react";
import AI from "../../assets/blog/ai.jpg";
import react from "../../assets/blog/react.jpg";
import WebAssembly from "../../assets/blog/webassembly.jpg";
import grphql from "../../assets/blog/graphql.jpg";
import nextjs from "../../assets/blog/nextjs.jpg";
import {
  ExternalLink,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const articles = [
  {
    id: 1,
    title: "AI Revolutionizes Software Development",
    markdown:
      "**Generative AI** tools like GitHub Copilot and Tabnine are transforming how software is built.",
    image: AI,
    tags: ["AI", "Development"],
    link: "https://techcrunch.com/2025/06/20/generative-ai-software-dev/",
    readTime: "5 min read",
    date: "Aug 15, 2025",
  },
  {
    id: 2,
    title: "React 19 Released With Built-in Compiler",
    markdown:
      "React 19 is now out, introducing features like a *React Compiler*, concurrent server rendering and more.",
    image: react,
    tags: ["React", "JavaScript", "Frontend"],
    link: "https://reactjs.org/blog/2025/06/10/react-19.html",
    readTime: "8 min read",
    date: "Aug 12, 2025",
  },
  {
    id: 3,
    title: "WebAssembly 2.0 Launches",
    markdown:
      "WebAssembly (WASM) 2.0 now supports threads, SIMD, and better integration with native APIs.",
    image: WebAssembly,
    tags: ["WebAssembly", "Performance"],
    link: "https://developer.mozilla.org/en-US/docs/WebAssembly",
    readTime: "6 min read",
    date: "Aug 10, 2025",
  },
  {
    id: 4,
    title: "GraphQL Overtakes REST in API Popularity",
    markdown:
      "In 2025, **GraphQL** is now used by 60% of backend teams. Why is it becoming the default?",
    image: grphql,
    tags: ["GraphQL", "Backend", "APIs"],
    link: "https://graphql.org/blog/graphql-api-trends-2025/",
    readTime: "7 min read",
    date: "Aug 8, 2025",
  },
  {
    id: 5,
    title: "Next.js 15 Brings Built-In Edge Functions",
    markdown:
      "Next.js 15 now supports edge-native architecture and blazing fast data streaming.",
    image: nextjs,
    tags: ["Next.js", "Edge", "Vercel"],
    link: "https://vercel.com/blog/nextjs-15-release",
    readTime: "9 min read",
    date: "Aug 5, 2025",
  },
];

const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const perPage = 3;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const filtered = articles.filter((a) => {
    const matchTag = selectedTag === "All" || a.tags.includes(selectedTag);
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase());
    return matchTag && matchSearch;
  });

  const paginated = filtered.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );
  const totalPages = Math.ceil(filtered.length / perPage);

  // Simple markdown formatter for bold + italic
  const formatMarkdown = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') // bold
      .replace(/\*(.*?)\*/g, '<em class="text-blue-300">$1</em>'); // italic
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-20 px-4 md:px-12 lg:px-20">
        {/* Hero Section */}
        <div
          className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6">
            <span className="text-cyan-400 text-sm font-medium">
              Latest Tech Insights
            </span>
          </div>
          <h1 className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-white via-blue-100 to-cyan-400 bg-clip-text text-transparent mb-6">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Discover the latest trends, insights, and breakthroughs shaping the
            future of technology
          </p>
        </div>

        {/* Search + Filter */}
        <div
          className={`max-w-4xl mx-auto mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="relative md:w-48">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50  border border-white/20 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                value={selectedTag}
                onChange={(e) => {
                  setSelectedTag(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="All">All Topics</option>
                {allTags.map((tag, idx) => (
                  <option key={idx} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {paginated.map((article, index) => (
              <div
                key={article.id}
                className={`group relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/25 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/50 rounded-full text-xs text-white backdrop-blur-sm">
                    {article.readTime}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>
                  <div
                    className="text-gray-300 mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{
                      __html: formatMarkdown(article.markdown),
                    }}
                  />

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {article.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full border border-cyan-500/30 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More */}
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    Read Article
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className={`flex justify-center items-center gap-4 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`w-12 h-12 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                      i + 1 === currentPage
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-400/25"
                        : "bg-white/10 border border-white/20 text-gray-300 hover:bg-white/20 hover:text-white cursor-pointer"
                    }`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
