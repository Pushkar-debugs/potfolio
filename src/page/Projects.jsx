import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlus } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AI Fake News & Deepfake Detection",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcuLSciQ9KKaMk_wktrDtNtm51I2fBe-FOYoq_JmaA2A&s=10",
    description:
      "AI-powered platform that detects fake news, deepfake images, and videos using NLP models, computer vision, and fact-checking APIs.",
    tech: ["React", "Django", "TensorFlow", "OpenCV", "Gemini AI"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "CropFix AI",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_Df39Ilivgfiqw15Wbi-2EEut-dkVmpLkDANZRwqkw&s=10",
    description:
      "Smart agriculture platform that identifies crop diseases and provides AI-generated recommendations to farmers.",
    tech: ["Flask", "Python", "Machine Learning", "OpenCV"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiLmdhcCRKrJ_ekhHy1KVxpTIIh29fwazVUWa72ckW0w&s=10",
    description:
      "Modern online shopping platform with authentication, product management, shopping cart, and responsive UI.",
    tech: ["React", "Supabase", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Expense Tracker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlA-2R2yV8q6AqyHuGFjX37cwo3g7f64OlSkz3wTY9ww&s=10",
    description:
      "Personal finance application to manage income, expenses, and spending analysis with clean visual reports.",
    tech: ["React", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="card-hover glass-effect-dark rounded-2xl overflow-hidden group"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Overlay with Buttons */}
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary gap-2"
          >
            <FaGithub /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary gap-2"
          >
            <FaExternalLinkAlt /> Demo
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, idx) => (
            <span
              key={idx}
              className="badge text-xs hover:bg-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm gap-2 flex-1 justify-center"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary text-sm gap-2 flex-1 justify-center"
          >
            <FaExternalLinkAlt /> Live
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const stats = [
    { number: "10+", label: "Projects" },
    { number: "3+", label: "Hackathons" },
    { number: "5+", label: "Technologies" },
    { number: "100%", label: "Dedication" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/10 to-gray-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-title mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Featured Projects</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in Web Development, Artificial Intelligence, Machine Learning, and Problem Solving.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-hover glass-effect-dark p-6 rounded-xl text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.number}
              </h3>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

