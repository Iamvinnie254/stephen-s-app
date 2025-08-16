import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Code,
  Database,
  Globe,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Zap,
  Layers,
  Server,
  Monitor,
  Smartphone,
  Coffee,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import HeroImage from "../../../assets/Hero/Hero.png";

const Main = () => {
  const [typedText, setTypedText] = useState("");
  const [currentRole, setCurrentRole] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    "Fullstack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "Problem Solver",
  ];

  const skills = [
    { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-yellow-600" },
    { name: "React.js", icon: "⚛", color: "from-blue-400 to-blue-600" },
    { name: "Vue.js", icon: "💚", color: "from-green-400 to-green-600" },
    { name: "PHP", icon: "🐘", color: "from-purple-400 to-purple-600" },
    { name: "Laravel", icon: "🏗", color: "from-red-400 to-red-600" },
    { name: "Python", icon: "🐍", color: "from-blue-500 to-green-500" },
    { name: "Django", icon: "🎯", color: "from-green-500 to-teal-500" },
    { name: "MySQL", icon: "🗄", color: "from-orange-400 to-orange-600" },
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-cyan-600" },
    { name: "HTML5", icon: "📄", color: "from-orange-500 to-red-500" },
  ];

  const features = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Excellence",
      description:
        "Crafting beautiful, responsive user interfaces with React, Vue.js, and modern CSS frameworks",
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Mastery",
      description:
        "Building robust APIs and server-side solutions with PHP, Laravel, Python, and Django",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Design",
      description:
        "Designing efficient database schemas and optimizing queries for peak performance",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Creating seamless experiences across all devices with mobile-first approach",
    },
  ];

  useEffect(() => {
    const currentText = roles[currentRole];
    let timeout;

    if (isTyping) {
      if (typedText.length < currentText.length) {
        timeout = setTimeout(() => {
          setTypedText(currentText.slice(0, typedText.length + 1));
        }, 100);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, currentRole, isTyping]);

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };
  /* CV Download */

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/STEPHEN_VINCENT_WAINAINA.pdf";
    link.download = "STEPHEN_VINCENT_WAINAINA.pdf";
    link.click();
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      {/*  <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              DevPortfolio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="text-white hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="text-white hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center max-w-screen-xl mx-auto px-4 py-3 h-auto">
          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="mb-8">
              <h1
                className="text-3xl md:text-7xl font-bold text-white mb-6 leading-tight"
                data-aos="fade-out"
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Stephen
                </span>
              </h1>
              <div
                className="text-2xl md:text-4xl text-gray-300 mb-10 h-12 flex items-center justify-center"
                data-aos="fade-in"
              >
                <span className="mr-4">A</span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold min-w-[300px] text-left">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p
              className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              data-aos="flip-up"
            >
              Passionate about creating exceptional digital experiences with
              cutting-edge technologies. From pixel-perfect frontends to robust
              backend architectures, I bring ideas to life with code.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              data-aos="zoom-in"
            >
              <Link>
                <button
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl  cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "mailto:vincentstephen489@gmail.com")
                  }
                >
                  <span className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </span>
                </button>
              </Link>

              <button
                className="group px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all duration-300  cursor-pointer"
                onClick={handleDownload}
              >
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </span>
              </button>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Iamvinnie254"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 transition-all duration-300 cursor-pointer"
              >
                <FaGithub className="w-8 h-8" />
              </a>
              <a
                href="https://linkedin.com/in/stephen-vincent/"
                target="_blank"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 transition-all duration-300  cursor-pointer"
              >
                <FaLinkedin className="w-8 h-8" />
              </a>
              <a
                href="https://wa.me/254702387039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transform hover:scale-125 transition-all duration-300  cursor-pointer"
              >
                <FaWhatsapp className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="" data-aos="flip-down" />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNext}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-b from-slate-900 to-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate fullstack developer with a love for creating
              innovative solutions. With expertise across the entire development
              stack, I turn complex problems into elegant, user-friendly
              applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 bg-gradient-to-b from-gray-900 to-slate-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable web
              applications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-center">
                  <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${skill.color} rounded-2xl transition-opacity duration-300`}
                ></div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="flex items-center justify-center space-x-4 text-gray-300">
              <Coffee className="w-6 h-6 text-yellow-500" />
              <span className="text-lg">
                Fueled by coffee, driven by code, inspired by innovation
              </span>
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Something{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate and turn your ideas into reality. I'm always
            excited to work on new challenges and innovative projects.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl"
              onClick={() =>
                (window.location.href = "mailto:vincentstephen489@gmail.com")
              }
            >
              <span className="flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </span>
            </button>

            <button className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all duration-300">
              <span className="flex items-center justify-center">
                <FaGithub className="w-5 h-5 mr-2" />
                View My Work
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
