import React from "react";
import { Link } from "react-router-dom";
import { FaArrowUp, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="footer-cta glass-effect-dark p-8 rounded-3xl flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Ready to build together?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Let’s create a polished digital experience.</h2>
          </div>
          <Link to="/contact" className="btn-primary w-full lg:w-auto justify-center">
            Message Me
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              I design modern web applications with polished motion, accessible UI, and clean performance.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About</Link>
              </li>
              <li>
                <Link to="/skills" className="text-gray-400 hover:text-white transition">Skills</Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-white transition">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <a href="mailto:shubhamsawant2205@gmail.com" className="hover:text-white transition flex items-center gap-2">
                <FaEnvelope /> shubhamsawant2205@gmail.com
              </a>
              <div className="flex gap-3 mt-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-icon text-gray-300 hover:text-white transition">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-icon text-gray-300 hover:text-white transition">
                  <FaLinkedin />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="social-icon text-gray-300 hover:text-white transition">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 my-10"></div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shubham Sawant. Built with React & Tailwind CSS.
          </p>
          <a href="#home" className="pulse-ring inline-flex items-center justify-center rounded-full bg-blue-500 p-3 text-white transition hover:bg-blue-400">
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;