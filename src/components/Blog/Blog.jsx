import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import AI from "../../assets/blog/ai.jpg";
import react from "../../assets/blog/react.jpg";
import WebAssembly from "../../assets/blog/webassembly.jpg";
import grphql from "../../assets/blog/graphql.jpg";
import nextjs from "../../assets/blog/nextjs.jpg";

const articles = [
  {
    id: 1,
    title: "AI Revolutionizes Software Development",
    markdown: `**Generative AI** tools like GitHub Copilot and Tabnine are transforming how software is built.`,
    image: AI,
    tags: ["AI", "Development"],
    link: "https://techcrunch.com/2025/06/20/generative-ai-software-dev/",
  },
  {
    id: 2,
    title: "React 19 Released With Built-in Compiler",
    markdown: `React 19 is now out, introducing features like a *React Compiler*, concurrent server rendering and more.`,
    image: react,
    tags: ["React", "JavaScript", "Frontend"],
    link: "https://reactjs.org/blog/2025/06/10/react-19.html",
  },
  {
    id: 3,
    title: "WebAssembly 2.0 Launches",
    markdown: `WebAssembly (WASM) 2.0 now supports threads, SIMD, and better integration with native APIs.`,
    image: WebAssembly,
    tags: ["WebAssembly", "Performance"],
    link: "https://developer.mozilla.org/en-US/docs/WebAssembly",
  },
  {
    id: 4,
    title: "GraphQL Overtakes REST in API Popularity",
    markdown: `In 2025, **GraphQL** is now used by 60% of backend teams. Why is it becoming the default?`,
    image: grphql,
    tags: ["GraphQL", "Backend", "APIs"],
    link: "https://graphql.org/blog/graphql-api-trends-2025/",
  },
  {
    id: 5,
    title: "Next.js 15 Brings Built-In Edge Functions",
    markdown: `Next.js 15 now supports edge-native architecture and blazing fast data streaming.`,
    image: nextjs,
    tags: ["Next.js", "Edge", "Vercel"],
    link: "https://vercel.com/blog/nextjs-15-release",
  },
];

const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));

const Blog = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    AOS.init({ duration: 1000 });
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

  return (
    <div className="bg-white py-16 px-4 md:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="font-bold text-2xl md:text-3xl text-emerald-700">
          Tech Blog
        </h2>
        <p className="font-light text-gray-600 pt-4">
          Stay updated with the latest in tech. Filter by tags, search for
          topics, or read full articles.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full md:w-1/2 p-2 border rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="w-full md:w-1/4 p-2 border rounded-md"
          value={selectedTag}
          onChange={(e) => {
            setSelectedTag(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>All</option>
          {allTags.map((tag, idx) => (
            <option key={idx}>{tag}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paginated.map((article, index) => (
          <div
            key={article.id}
            className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </h3>
              <ReactMarkdown className="text-sm text-gray-600 mb-4">
                {article.markdown}
              </ReactMarkdown>

              <div className="flex flex-wrap gap-2 mb-4 ">
                {article.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-emerald-100 text-emerald-700 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-700 font-medium hover:underline"
              >
                Read Full Article <FaExternalLinkAlt className="ml-2 text-xs" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2 ">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`w-8 h-8 rounded-full ${
              i + 1 === currentPage
                ? "bg-emerald-700 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 cursor-pointer"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
