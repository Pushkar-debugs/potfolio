import React, { useState } from "react";
import { FaDownload, FaFileAlt, FaArrowRight } from "react-icons/fa";

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);

  const stats = [
    { number: "8.6", label: "CGPA" },
    { number: "10+", label: "Projects" },
    { number: "3+", label: "Hackathons" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-2xl w-full">
        {/* Main Card */}
        <div className="card-hover glass-effect-dark rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="bg-gradient-primary p-6 rounded-full w-fit mx-auto mb-8 animate-float">
            <FaFileAlt className="text-5xl text-white" />
          </div>

          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Resume</span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Resume & Qualifications
          </h2>

          <p className="text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Download my resume to learn more about my education, technical skills, projects, 
            achievements, certifications, and experience in Web Development and Artificial Intelligence.
          </p>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card-hover glass-effect-dark p-6 rounded-xl group"
              >
                <h3 className="text-3xl font-bold text-blue-400 group-hover:text-blue-300">
                  {stat.number}
                </h3>
                <p className="text-gray-300 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="/Shubham_Sawant_Resume.pdf"
              download
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="btn-primary text-lg font-semibold group"
            >
              <FaDownload className={`transition-transform ${isHovered ? 'animate-bounce' : ''}`} />
              Download Resume
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>

            <a
              href="/Shubham_Sawant_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-lg font-semibold"
            >
              View Online
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-gray-400 text-sm">
            Need a different format? Contact me for a custom version.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Resume;

