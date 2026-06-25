import React from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "AI Fake News & Deepfake Detection",
    image: "/projects/fakenews.jpg",
    description:
      "AI-powered platform that detects fake news, deepfake images, and videos using NLP models, computer vision, and fact-checking APIs.",
    tech: [
      "React",
      "Django",
      "TensorFlow",
      "OpenCV",
      "Gemini AI",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "CropFix AI",
    image: "/projects/cropfix.jpg",
    description:
      "Smart agriculture platform that identifies crop diseases and provides AI-generated recommendations to farmers.",
    tech: [
      "Flask",
      "Python",
      "Machine Learning",
      "OpenCV",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    image: "/projects/ecommerce.jpg",
    description:
      "Modern online shopping platform with authentication, product management, shopping cart, and responsive UI.",
    tech: [
      "React",
      "Supabase",
      "Tailwind CSS",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 4,
    title: "Expense Tracker",
    image: "/projects/expense.jpg",
    description:
      "Personal finance application to manage income, expenses, and spending analysis with clean visual reports.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
    ],
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-950 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-blue-500 font-semibold text-lg">
            MY WORK
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in
            Web Development, Artificial Intelligence,
            Machine Learning, and Problem Solving.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">10+</h3>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">3+</h3>
            <p className="text-gray-400 mt-2">Hackathons</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">5+</h3>
            <p className="text-gray-400 mt-2">Technologies</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl text-center">
            <h3 className="text-4xl font-bold text-blue-500">100%</h3>
            <p className="text-gray-400 mt-2">Dedication</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

