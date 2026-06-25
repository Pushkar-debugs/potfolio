import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-950 text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div>
            <p className="text-blue-500 font-semibold text-lg mb-3">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Pushkar
              <span className="text-blue-500"> Sawant</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Computer Engineering Student &
              <span className="text-blue-500">
                {" "}Full Stack Developer
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed max-w-xl mb-8">
              Passionate about Web Development, Artificial Intelligence,
              Machine Learning, and building innovative digital solutions.
              I love turning ideas into real-world applications through
              modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/projects"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/resume.pdf"
                download
                className="border border-blue-500 hover:bg-blue-500 px-6 py-3 rounded-lg font-semibold transition"
              >
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>

              <img
                src="/profile.png"
                alt="Shubham Sawant"
                className="relative w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-full border-4 border-blue-500 shadow-2xl"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;