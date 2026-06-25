import React from "react";

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

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-blue-500 font-semibold text-lg">
            MY SKILLS
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I use to build modern web applications,
            AI solutions, and software projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold">{skill.name}</h3>
                <span className="text-blue-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-blue-500 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              Frontend
            </h3>
            <p className="text-gray-400">
              HTML, CSS, JavaScript, React, Tailwind CSS
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              Backend
            </h3>
            <p className="text-gray-400">
              Django, Flask, Node.js, REST APIs
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              Database
            </h3>
            <p className="text-gray-400">
              MySQL, Supabase, Firebase
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h3 className="text-xl font-bold text-blue-500 mb-2">
              AI / ML
            </h3>
            <p className="text-gray-400">
              TensorFlow, OpenCV, NLP, Machine Learning
            </p>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-500">12+</h2>
            <p className="text-gray-400">Technologies</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-500">10+</h2>
            <p className="text-gray-400">Projects</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-500">3+</h2>
            <p className="text-gray-400">Hackathons</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl text-center">
            <h2 className="text-4xl font-bold text-blue-500">8.6</h2>
            <p className="text-gray-400">CGPA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
