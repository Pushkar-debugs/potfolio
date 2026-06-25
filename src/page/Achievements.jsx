import React, { useState, useEffect } from "react";
import {
  FaTrophy,
  FaMedal,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const achievements = [
  {
    id: 1,
    icon: <FaTrophy className="text-4xl" />,
    title: "1st Place - Startup Challenge",
    organization: "Chandigarh University",
    description:
      "Won 1st place in the Startup Challenge by presenting an innovative startup idea and successfully pitching it before judges.",
  },
  {
    id: 2,
    icon: <FaMedal className="text-4xl" />,
    title: "HackOrbit 2025 Finalist",
    organization: "National Level Hackathon",
    description:
      "Led Team Mavericks to the finals of a 36-hour national hackathon by developing an AI-powered solution.",
  },
  {
    id: 3,
    icon: <FaAward className="text-4xl" />,
    title: "AI & Web Development Projects",
    organization: "Academic & Personal Projects",
    description:
      "Built multiple real-world applications including AI Fake News Detection, CropFix AI, and an E-Commerce Platform.",
  },
  {
    id: 4,
    icon: <FaCertificate className="text-4xl" />,
    title: "Technical Certifications",
    organization: "DevTown & Online Platforms",
    description:
      "Completed certifications in Python, Data Structures, Web Development, and emerging technologies.",
  },
];

const AchievementCard = ({ item, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`card-hover glass-effect-dark p-8 rounded-2xl text-center group transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="bg-gradient-primary p-4 rounded-xl w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
        <div className="text-white">{item.icon}</div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
        {item.title}
      </h3>

      <p className="text-blue-400 font-semibold text-sm mb-3">
        {item.organization}
      </p>

      <p className="text-gray-300 leading-relaxed text-sm">
        {item.description}
      </p>
    </div>
  );
};

const Achievements = () => {
  const stats = [
    { number: "10+", label: "Projects" },
    { number: "3+", label: "Hackathons" },
    { number: "5+", label: "Certificates" },
    { number: "1st", label: "Startup Challenge" }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/10 to-gray-950 py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="section-title mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Milestones</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Achievements & Recognition</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Milestones, competitions, certifications, and accomplishments that have shaped my learning journey.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} item={item} index={index} />
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
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                {stat.number}
              </h2>
              <p className="text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

