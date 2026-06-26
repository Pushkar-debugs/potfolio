import React from "react";
import PortfolioImg from "../assets/potfolioimg.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-gray-950 text-white flex items-center overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-blue-200 w-max animate-slide-in-left">
              <span className="h-3 w-3 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-medium">Featured Frontend Developer</span>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-blue-300 animate-text-focus-in">dynamic interfaces · ai experiences · modern products</p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight max-w-3xl animate-fade-in-up">
                I build beautiful web experiences with <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">pixel-perfect motion</span> and powerful backend logic.
              </h1>
              <p className="text-gray-400 max-w-xl leading-relaxed text-lg animate-fade-in-up">
                I’m Pushkar, a Computer Engineering student turning great ideas into elegant React applications, AI prototypes, and responsive product experiences.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-slide-in-up">
              <a href="/projects" className="btn-primary">
                View Projects
                <FaArrowRight />
              </a>
              <a href="/resume.pdf" download className="btn-secondary">
                Download Resume
              </a>
              <a href="/contact" className="border border-white/10 text-white px-6 py-3 rounded-lg transition hover:border-blue-400 hover:text-blue-300">
                Let’s Talk
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="hero-card animate-fade-in-left">
                <div className="hero-card-icon">
                  <FaBriefcase />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-300">Experience</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">2+ Years</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">Creating responsive web applications for modern startups and product teams.</p>
                </div>
              </div>

              <div className="hero-card animate-fade-in-right">
                <div className="hero-card-icon">
                  <FaGraduationCap />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-300">Education</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">B.Tech Computer Engineering</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">Focused on AI, full stack web development, and cloud-native applications.</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 items-center animate-slide-in-up">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-3xl text-gray-300 hover:text-blue-400 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="text-3xl text-gray-300 hover:text-blue-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="text-3xl text-gray-300 hover:text-pink-400 transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="hero-blob hero-blob-top"></div>
            <div className="hero-blob hero-blob-bottom"></div>
            <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px]">
              <img
                src={PortfolioImg}
                alt="Pushkar Sawant"
                className="relative w-full h-full object-cover rounded-full border-4 border-blue-500 shadow-2xl animate-float"
              />

              <div className="hero-card absolute -top-8 -right-10 sm:right-0 w-44 sm:w-52">
                <div className="hero-card-icon bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
                  <FaLaptopCode />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-blue-200">Tools</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">React · Tailwind · Vite</h3>
                </div>
              </div>

              <div className="hero-card absolute -bottom-8 -left-10 sm:left-0 w-48 sm:w-56">
                <p className="text-xs uppercase tracking-[0.35em] text-blue-200">Focus</p>
                <h3 className="mt-2 text-xl font-semibold text-white">UX-led motion design</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;