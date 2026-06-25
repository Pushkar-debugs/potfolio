import React from "react";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

export const achievements = [
  {
    id: 1,
    icon: <FaTrophy />,
    title: "1st Place - Startup Challenge",
    organization: "Chandigarh University",
    description:
      "Won 1st place in the Startup Challenge by presenting an innovative startup idea and successfully pitching it before judges.",
  },
  {
    id: 2,
    icon: <FaMedal />,
    title: "HackOrbit 2025 Finalist",
    organization: "National Level Hackathon",
    description:
      "Led Team Mavericks to the finals of a 36-hour national hackathon by developing an AI-powered solution.",
  },
  {
    id: 3,
    icon: <FaAward />,
    title: "AI & Web Development Projects",
    organization: "Academic & Personal Projects",
    description:
      "Built multiple real-world applications including AI Fake News Detection, CropFix AI, and an E-Commerce Platform.",
  },
  {
    id: 4,
    icon: <FaCertificate />,
    title: "Technical Certifications",
    organization: "DevTown & Online Platforms",
    description:
      "Completed certifications in Python, Data Structures, Web Development, and emerging technologies.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-gray-100 py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-blue-600 font-semibold text-lg">
            MY ACHIEVEMENTS
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Achievements & Recognition
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Milestones, competitions, certifications, and accomplishments
            that have shaped my learning journey.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item) => (
            <div
              key={item.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl text-blue-600 mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h3>

              <p className="text-blue-600 font-medium mb-3">
                {item.organization}
              </p>

              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-600">10+</h3>
            <p className="text-gray-600 mt-2">Projects</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-600">3+</h3>
            <p className="text-gray-600 mt-2">Hackathons</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-600">5+</h3>
            <p className="text-gray-600 mt-2">Certificates</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-md">
            <h3 className="text-4xl font-bold text-blue-600">1st</h3>
            <p className="text-gray-600 mt-2">Startup Challenge</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

