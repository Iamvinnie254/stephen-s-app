import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Globe,
  Smartphone,
  Database,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Quote,
  Calendar,
  MessageSquare,
} from "lucide-react";

const Services = () => {
  const [activeStep, setActiveStep] = useState(0);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Full-Stack Web Development",
      description:
        "Complete web solutions from concept to deployment using modern technologies like React, Vue.js, Laravel, and Django.",
      features: [
        "Custom Web Applications",
        "E-commerce Platforms",
        "Content Management Systems",
        "API Development & Integration",
        "Database Design & Optimization",
      ],
      technologies: ["React", "Vue.js", "Laravel", "Django", "MySQL"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Frontend Development",
      description:
        "Beautiful, responsive user interfaces that provide exceptional user experiences across all devices and platforms.",
      features: [
        "Responsive Web Design",
        "Interactive User Interfaces",
        "Performance Optimization",
        "Cross-Browser Compatibility",
        "Progressive Web Apps",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "React"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Development",
      description:
        "Robust server-side solutions with secure APIs, efficient databases, and scalable architecture for your applications.",
      features: [
        "RESTful API Development",
        "Database Architecture",
        "Server Configuration",
        "Security Implementation",
        "Performance Monitoring",
      ],
      technologies: ["PHP", "Python", "Laravel", "Django", "MySQL"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <Code className="w-12 h-12" />,
      title: "Technical Consulting",
      description:
        "Expert guidance on technology decisions, code reviews, and strategic planning to ensure your project's success.",
      features: [
        "Technology Stack Planning",
        "Code Review & Optimization",
        "Architecture Consulting",
        "Performance Auditing",
        "Team Training & Mentoring",
      ],
      technologies: [
        "Strategy",
        "Best Practices",
        "Code Review",
        "Optimization",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const workProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description:
        "Understanding your requirements, goals, and target audience to create a comprehensive project roadmap.",
      icon: <Lightbulb className="w-8 h-8" />,
      tasks: [
        "Requirements Analysis",
        "Market Research",
        "Technical Planning",
        "Timeline Creation",
      ],
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description:
        "Creating wireframes, mockups, and prototypes to visualize the final product before development begins.",
      icon: <Target className="w-8 h-8" />,
      tasks: ["UI/UX Design", "Wireframing", "Prototyping", "Client Approval"],
    },
    {
      step: 3,
      title: "Development & Testing",
      description:
        "Building your application with clean, efficient code and thorough testing to ensure quality and reliability.",
      icon: <Settings className="w-8 h-8" />,
      tasks: [
        "Frontend Development",
        "Backend Development",
        "Quality Testing",
        "Bug Fixes",
      ],
    },
    {
      step: 4,
      title: "Launch & Support",
      description:
        "Deploying your application and providing ongoing support to ensure optimal performance and user satisfaction.",
      icon: <Rocket className="w-8 h-8" />,
      tasks: [
        "Deployment",
        "Performance Monitoring",
        "User Training",
        "Ongoing Support",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Ksh.20,000",
      period: "per project",
      description:
        "Perfect for small businesses and startups looking for a professional web presence.",
      features: [
        "5-Page Custom Website",
        "Responsive Design",
        "Basic SEO Optimization",
        "Contact Form Integration",
        "2 Rounds of Revisions",
        "30 Days Support",
      ],
      popular: false,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Professional",
      price: "Ksh.30,000+",
      period: "per project",
      description:
        "Ideal for growing businesses that need advanced functionality and custom features.",
      features: [
        "Custom Web Application",
        "Database Integration",
        "User Authentication",
        "Admin Dashboard",
        "API Development",
        "3 Months Support",
        "Performance Optimization",
        "Security Implementation",
      ],
      popular: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Enterprise",
      price: "Ksh.50,000+",
      period: "per project",
      description:
        "Comprehensive solutions for large-scale applications with complex requirements.",
      features: [
        "Full-Stack Development",
        "Microservices Architecture",
        "Advanced Security",
        "Performance Monitoring",
        "Team Training",
        "6 Months Support",
        "Scalable Infrastructure",
        "24/7 Monitoring",
      ],
      popular: false,
      gradient: "from-green-500 to-teal-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Kimotho",
      position: "CEO, Dreamways Tours",
      company: "Tourism",
      image: "",
      rating: 5,
      text: "Outstanding work! The full-stack application delivered exceeded our expectations. The code quality is exceptional, and the user experience is seamless. Highly recommended for any serious web development project.",
    },
    {
      name: "Michael Omondi",
      position: "CTO, Primeplots Ltd.",
      company: "Land & Housing Solutions",
      image: "",
      rating: 5,
      text: "Incredible attention to detail and technical expertise. The Laravel backend and React frontend integration was flawless. Communication throughout the project was excellent, and deadlines were consistently met.",
    },
    {
      name: "Emily Njoki",
      position: "Founder, Dishi Kikwetu Restaurant",
      company: "Food and Beverages",
      image: "",
      rating: 5,
      text: "The e-commerce platform built for us has transformed our business. The Django backend handles our inventory perfectly, and the Vue.js frontend provides an amazing shopping experience. Sales increased by 300%!",
    },
    {
      name: "David Thompson",
      position: "Product Manager, StartupHub",
      company: "StartupHub",
      image: "",
      rating: 5,
      text: "Professional, reliable, and incredibly skilled. The full-stack solution delivered was exactly what we needed. The MySQL database optimization improved our app performance by 400%. Definitely our go-to developer!",
    },
  ];

  const ServiceCard = ({ service, index }) => (
    <div
      className={`group bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-cyan-400/50 p-8 transition-all duration-500 transform hover:-translate-y-4}
         style={{ animationDelay: ${index * 150}ms }`}
    >
      <div
        className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
      >
        <div className="text-white">{service.icon}</div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
        {service.title}
      </h3>

      <p className="text-gray-300 mb-6 leading-relaxed">
        {service.description}
      </p>

      <div className="mb-6">
        <h4 className="text-white font-semibold mb-3">Key Features:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-300">
              <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {service.technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white/10 text-cyan-300 rounded-full text-sm border border-white/20"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  const ProcessStep = ({ step, index, isActive }) => (
    <div
      className={`cursor-pointer transition-all duration-300 ${
        isActive ? "scale-100" : "hover:scale-105"
      }`}
      onClick={() => setActiveStep(index)}
    >
      <div
        className={`bg-white/5 backdrop-blur-lg rounded-2xl border p-6 transition-all duration-300 ${
          isActive
            ? "border-cyan-400/50 bg-white/10"
            : "border-white/10 hover:border-purple-400/50"
        }`}
      >
        <div className="flex items-start space-x-4">
          <div
            className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
              isActive
                ? "bg-gradient-to-br from-cyan-500 to-purple-500"
                : "bg-white/10"
            }`}
          >
            <span className="text-white font-bold">{step.step}</span>
          </div>

          <div className="flex-1">
            <h3
              className={`text-xl font-bold mb-2 transition-colors ${
                isActive
                  ? "text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text"
                  : "text-white"
              }`}
            >
              {step.title}
            </h3>
            <p className="text-gray-300 mb-4">{step.description}</p>
            {/* Tasks  */}

            <div className="space-y-2">
              {step.tasks.map((task, idx) => (
                <div key={idx} className="flex items-center text-sm">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-gray-300">{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`text-cyan-400 transition-colors ${
              isActive ? "text-purple-400" : ""
            }`}
          >
            {step.icon}
          </div>
        </div>
      </div>
    </div>
  );

  const PricingCard = ({ plan }) => (
    <div
      className={`relative bg-white/5 backdrop-blur-lg rounded-2xl border p-8 transition-all duration-300 transform hover:-translate-y-2 ${
        plan.popular
          ? "border-purple-500/50 ring-2 ring-purple-500/30"
          : "border-white/10 hover:border-cyan-400/50"
      }`}
      data-aos="zoom-up"
    >
      {plan.popular && (
        <div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
          data-aos="zoom-up"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <div className="mb-4">
          <span
            className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}
          >
            {plan.price}
          </span>
          <span className="text-gray-400 ml-2">{plan.period}</span>
        </div>
        <p className="text-gray-300">{plan.description}</p>
      </div>
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
            <span className="text-gray-300">{feature}</span>
          </div>
        ))}
      </div>
      <Link to={"/contact"}>
        <button
          className={`w-full py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
            plan.popular
              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-purple-500/25"
              : `bg-gradient-to-r ${plan.gradient} text-white shadow-lg`
          }`}
        >
          Get Started
        </button>
      </Link>
    </div>
  );

  const TestimonialCard = ({ testimonial, index }) => (
    <div
      className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-cyan-400/50 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full mr-4 border-2 border-cyan-400/50"
        />
        <div>
          <h4 className="text-white font-bold">{testimonial.name}</h4>
          <p className="text-gray-400">{testimonial.position}</p>
          <p className="text-cyan-400 text-sm">{testimonial.company}</p>
        </div>
      </div>

      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <div className="relative">
        <Quote className="w-8 h-8 text-cyan-400/30 absolute -top-2 -left-2" />
        <p className="text-gray-300 leading-relaxed pl-6">
          "{testimonial.text}"
        </p>
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

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            Comprehensive full-stack development solutions to bring your digital
            vision to life. From concept to deployment, I deliver exceptional
            results that drive business growth.
          </p>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-aos="fade-out"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on
              time, within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6" data-aos="fade-in">
            {workProcess.map((step, index) => (
              <ProcessStep
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transparent{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect package for your project. All plans include
              high-quality code, responsive design, and professional support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} plan={plan} />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6">
              Need a custom solution? Let's discuss your specific requirements.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <span className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                <a href="/contact" target="_blank">
                  Get a Custom Quote
                </a>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take my word for it. Here's what my clients say about
              working with me and the results we've achieved together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8" data-aos="zoom-up">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Project?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together.
            Your success is my priority.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
              <a href="/contact">
                <span className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </span>
              </a>
            </button>

            <button className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
              <a href="/contact">
                <span className="flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Get Free Quote
                </span>
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
