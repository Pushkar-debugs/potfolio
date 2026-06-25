
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "shubhamsawant2205@gmail.com",
      href: "mailto:shubhamsawant2205@gmail.com"
    },
    {
      icon: <FaPhone className="text-2xl" />,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+91"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      label: "Location",
      value: "Virar, Maharashtra, India",
      href: "#"
    }
  ];

  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      href: "https://github.com/",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaInstagram />,
      label: "Instagram",
      href: "https://instagram.com/",
      color: "hover:text-pink-400"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900/20 to-gray-950 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-title mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Contact Me</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project, collaboration opportunity, or just want to say hello? Feel free to reach out.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-white mb-8">Let's Connect</h3>

            <p className="text-gray-300 mb-10">
              I'm always open to discussing new projects, internship opportunities, hackathons, and innovative ideas.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="card-hover glass-effect-dark p-6 rounded-xl flex items-start gap-4 group"
                >
                  <div className="text-blue-400 group-hover:text-blue-300 transition-colors mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`text-3xl text-gray-300 transition-all duration-300 transform hover:scale-125 ${social.color}`}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="card-hover glass-effect-dark p-8 rounded-2xl animate-slide-in-right">
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="input-field w-full"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="input-field w-full"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-gray-300 font-semibold mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Write your message..."
                  className="input-field w-full resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full text-lg font-semibold group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className={`transition-transform ${isSubmitting ? 'animate-bounce' : ''}`} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <span className="group-hover:translate-x-2 transition-transform">
                  →
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

