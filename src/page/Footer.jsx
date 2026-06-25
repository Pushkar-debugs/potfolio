import React from "react";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Pushkar.dev
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Creating modern web applications and AI-powered
              solutions with a focus on performance,
              innovation, and user experience.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Services
            </h3>

            <ul className="space-y-3">
              <li>Web Development</li>
              <li>Frontend Design</li>
              <li>Backend Development</li>
              <li>AI/ML Solutions</li>
              <li>API Integration</li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Technologies
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "JavaScript",
                "Python",
                "Django",
                "Flask",
                "Supabase",
                "MySQL",
                "TensorFlow",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-center">
            © {new Date().getFullYear()} Shubham Sawant.
            Built with React & Tailwind CSS.
          </p>

          <a
            href="#home"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition"
          >
            <FaArrowUp className="text-white" />
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;