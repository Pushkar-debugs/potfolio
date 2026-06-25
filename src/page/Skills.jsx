import React, { useState, useEffect } from "react";
import { FaCode, FaDatabase, FaRobot, FaServer } from "react-icons/fa";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 88 },
  { name: "React JS", level: 85 },
  { name: "Python", level: 90 },
  { name: "Django", level: 85 },
  { name: "Flask", level: 80 },
  { name: "MySQL", level: 82 },
  { name: "Supabase", level: 78 },
  { name: "TensorFlow", level: 75 },
  { name: "Machine Learning", level: 80 },
  { name: "Git & GitHub", level: 85 },
];

const categories = [
  {
    icon: <FaCode className="text-3xl" />,
    title: "Frontend",
    skills: "HTML, CSS, JavaScript, React, Tailwind CSS"
  },
  {
    icon: <FaServer className="text-3xl" />,
    title: "Backend",
    skills: "Django, Flask, Node.js, REST APIs"
  },
  {
    icon: <FaDatabase className="text-3xl" />,
    title: "Database",
    skills: "MySQL, Supabase, Firebase"
  },
  {
    icon: <FaRobot className="text-3xl" />,
    title: "AI / ML",
    skills: "TensorFlow, OpenCV, NLP, Machine Learning"
  }
];

const SkillBar = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="card-hover glass-effect-dark p-6 rounded-xl group">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
          {skill.name}
        </h3>
        <span className="text-blue-400 font-bold">{skill.level}%</span>
      </div>
      <div className="progress-bar-container">
        <div
          className="progress-bar transition-all duration-1000"
          style={{
            width: isVisible ? `${skill.level}%` : "0%"
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-slate-900/20 to-gray-950 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="section-title mb-16">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Expertise</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4">Technical Skills</h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications, AI solutions, and software projects.
          </p>
          <div className="w-20 h-1 bg-gradient-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Specializations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="card-hover glass-effect-dark p-8 rounded-xl text-center group cursor-pointer transition-all duration-300"
                onMouseEnter={() => setActiveCategory(index)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="text-blue-400 mb-4 inline-block p-4 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {category.skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { number: "12+", label: "Technologies" },
            { number: "10+", label: "Projects" },
            { number: "3+", label: "Hackathons" },
            { number: "8.6", label: "CGPA" }
          ].map((stat, index) => (
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

export default Skills;
