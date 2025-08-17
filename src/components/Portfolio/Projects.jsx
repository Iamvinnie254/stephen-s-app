import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Tag,
  Filter,
  ChevronDown,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with React and Laravel, featuring user authentication, payment processing, inventory management, and real-time order tracking.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Laravel", "MySQL", "Stripe API"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      category: "fullstack",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description:
        "A collaborative project management application with real-time updates, drag-and-drop functionality, team collaboration features, and advanced analytics.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Django", "PostgreSQL", "WebSocket"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      category: "frontend",
      featured: false,
    },
    {
      id: 3,
      title: "AI-Powered Analytics API",
      description:
        "A robust backend API service that processes large datasets using machine learning algorithms to provide intelligent business insights and predictions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "TensorFlow", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      category: "backend",
      featured: true,
    },
    {
      id: 4,
      title: "Real-Time Chat Application",
      description:
        "A modern messaging platform with end-to-end encryption, file sharing, group chats, and multimedia support built for seamless communication.",
      image:
        "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
      technologies: ["React", "PHP", "MySQL", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      category: "fullstack",
      featured: true,
    },
    {
      id: 5,
      title: "Financial Dashboard",
      description:
        "An interactive financial tracking application with data visualization, budget planning, expense categorization, and investment portfolio management.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "Chart.js", "MySQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      category: "frontend",
      featured: false,
    },
    {
      id: 6,
      title: "Microservices Architecture",
      description:
        "A scalable microservices backend system with API gateway, service discovery, load balancing, and comprehensive monitoring solutions.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["Python", "Django", "Docker", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      category: "backend",
      featured: false,
    },
  ];

  const categories = [
    { value: "all", label: "All Projects", count: projects.length },
    {
      value: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      value: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      value: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  const ProjectCard = ({ project, index }) => (
    <div
      className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-4 overflow-hidden ${
        project.featured ? "ring-2 ring-purple-500/50" : ""
      }}
         style={{ animationDelay: ${index * 100}ms }`}
      data-aos="zoom-in"
    >
      {project.featured && (
        <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          <span className="flex items-center">✨ Featured</span>
        </div>
      )}

      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-cyan-400 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-110"
          >
            <FaGithub size={16} />
          </a>
        </div>

        <div className="absolute bottom-4 left-4 flex items-center text-white/80 text-sm">
          <Calendar size={14} className="mr-1" />
          {project.date}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300 mb-3">
          {project.title}
        </h3>

        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="flex items-center px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-cyan-400/20 hover:text-cyan-300 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <Tag size={12} className="mr-1" />
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-4 rounded-xl font-semibold text-center hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
          >
            View Live
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-3 border-2 border-white/30 text-gray-300 rounded-xl font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16" data-aos="zoom-up">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              A showcase of innovative solutions and technical excellence. Each
              project represents a unique challenge solved with creativity,
              precision, and cutting-edge technology.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    filter === category.value
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-cyan-400/50 cursor-pointer"
                  }`}
                >
                  <Filter size={16} className="mr-2" />
                  {category.label}
                  <span className="ml-2 px-2 py-1 bg-black/30 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Load More Button */}
          {!showAllProjects && filteredProjects.length > 6 && (
            <div className="text-center mb-16">
              <button
                onClick={() => setShowAllProjects(true)}
                className="group px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center">
                  Load More Projects
                  <ChevronDown
                    size={20}
                    className="ml-2 group-hover:animate-bounce"
                  />
                </span>
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12 max-w-4xl mx-auto" data-aos='zoom-down'>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Something{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              These projects represent just the beginning. Let's collaborate and
              create the next innovative solution together.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                <span className="flex items-center justify-center">
                  <ExternalLink size={20} className="mr-2" />
                  Start a Project
                </span>
              </button>

              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Github size={20} className="mr-2" />
                  View All on GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
