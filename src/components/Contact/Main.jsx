import React, { useState } from "react";
import {
  Send,
  MessageSquare,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  AlertCircle,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Main = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Whatsapp number
  const WHATSAPP_NUMBER = "254702387039";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatWhatsAppMessage = () => {
    const message = `
🌟 New Message 🌟

👤 Name: ${formData.name}
📧 Email: ${formData.email}
${formData.phone ? `📱 Phone: ${formData.phone}` : ""}
📋 Subject: ${formData.subject}

💬 Message:
${formData.message}

---
Warm regards,

    `.trim();

    return encodeURIComponent(message);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // enforce 500 char limit on message
    if (name === "message" && value.length > 500) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const whatsappMessage = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setShowSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8" data-aos="zoom-out">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" />
                  Let's Connect
                </h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  I'm always excited to work on new projects and collaborate
                  with talented individuals. Whether you have a specific project
                  in mind or just want to connect, I'd love to hear from you!
                </p>

                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-colors">
                    <MapPin className="w-5 h-5 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Location</p>
                      <p className="text-gray-300">Juja, Kiambu, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-colors">
                    <MessageSquare className="w-5 h-5 text-cyan-400 mr-4" />
                    <div>
                      <p className="text-white font-semibold">Response Time</p>
                      <p className="text-gray-300">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-gray-300 mb-4">
                    Connect with me on social media:
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Iamvinnie254"
                      target="_blank"
                      className="p-3 bg-white/10 rounded-lg hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-300 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/stephen-vincent/"
                      target="_blank"
                      className="p-3 bg-white/10 rounded-lg hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-300 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="https://x.com/Call_me_vinnie_?t=rk8Zw1RL6rU6dYPPppoS9g&s=09"
                      target="_blank"
                      className="p-3 bg-white/10 rounded-lg hover:bg-cyan-400/20 hover:text-cyan-400 text-gray-300 transition-all duration-300 transform hover:scale-110"
                    >
                      <FaXTwitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-8"
              data-aos="zoom-in"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Send className="w-6 h-6 mr-3 text-cyan-400" />
                Send Message
              </h2>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <div>
                    <p className="text-green-400 font-semibold">
                      Message Sent Successfully!
                    </p>
                    <p className="text-green-300 text-sm">
                      WhatsApp should open shortly with your message.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Name Field */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                      errors.name
                        ? "border-red-500"
                        : "border-white/20 hover:border-cyan-400/50"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email and Phone Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                        errors.email
                          ? "border-red-500"
                          : "border-white/20 hover:border-cyan-400/50"
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-red-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-white font-semibold mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 hover:border-cyan-400/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300"
                      placeholder="+254 700 000 000"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 ${
                      errors.subject
                        ? "border-red-500"
                        : "border-white/20 hover:border-cyan-400/50"
                    }`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-2 text-red-400 text-sm flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-white/10 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-white/20 hover:border-cyan-400/50"
                    }`}
                    placeholder="Tell me about your project or how I can help you..."
                  />
                  <div className="flex justify-between items-center mt-2">
                    {errors.message && (
                      <p className="text-red-400 text-sm flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                    <p className="text-gray-400 text-sm ml-auto">
                      {formData.message.length}/500
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg hover:shadow-cyan-500/25"
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Send to WhatsApp
                    </span>
                  )}
                </button>

                <p className="text-center text-gray-400 text-sm">
                  * Required fields. Your message will open in WhatsApp for
                  final sending.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
