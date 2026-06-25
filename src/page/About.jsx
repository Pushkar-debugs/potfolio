import React, { useState, useEffect } from "react";
import { FaCode, FaRocket, FaLightbulb, FaTrophy } from "react-icons/fa";
import PortfolioImg from "../assets/potfolioimg.png";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: <FaCode />, value: "10+", label: "Projects Completed" },
    { icon: <FaRocket />, value: "3+", label: "Hackathons Attended" },
    { icon: <FaLightbulb />, value: "8.6", label: "Current CGPA" },
    { icon: <FaTrophy />, value: "AI & Web", label: "Specialization" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-title mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">About Me</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Know More About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="image-glow image-wrapper">
              <img
                src={PortfolioImg}
                alt="Pushkar Sawant"
                className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-2 border-blue-500/30 hover:border-blue-400"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              I'm <span className="text-blue-400">Pushkar Sawant</span>
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4 hover:text-gray-200 transition-colors">
              I am a passionate 3rd-year Computer Engineering student with a strong interest in Web Development, 
              Artificial Intelligence, and Machine Learning. I enjoy building innovative solutions that solve 
              real-world problems and improve user experiences.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4 hover:text-gray-200 transition-colors">
              My journey includes developing AI-powered applications, React-based web platforms, and participating 
              in national-level hackathons. I continuously explore new technologies and strive to enhance my 
              technical and problem-solving skills.
            </p>

            <p className="text-gray-300 leading-relaxed mb-8 hover:text-gray-200 transition-colors">
              Apart from coding, I enjoy learning emerging technologies, collaborating with teams, participating 
              in startup challenges, and contributing to impactful projects.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="card-hover glass-effect-dark p-6 rounded-xl text-center group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl text-blue-400 mb-3 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{stat.value}</h4>
                  <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              download
              className="btn-primary group"
            >
              Download Resume
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
