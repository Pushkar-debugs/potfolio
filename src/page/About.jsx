import React from "react";

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gray-100 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Shubham Sawant"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-blue-500"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h4 className="text-blue-600 font-semibold text-lg mb-2">
            ABOUT ME
          </h4>

          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            I'm Shubham Sawant
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            I am a passionate 3rd-year Computer Engineering student with a
            strong interest in Web Development, Artificial Intelligence, and
            Machine Learning. I enjoy building innovative solutions that solve
            real-world problems and improve user experiences.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            My journey includes developing AI-powered applications, React-based
            web platforms, and participating in national-level hackathons. I
            continuously explore new technologies and strive to enhance my
            technical and problem-solving skills.
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Apart from coding, I enjoy learning emerging technologies,
            collaborating with teams, participating in startup challenges, and
            contributing to impactful projects.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">3+</h3>
              <p className="text-gray-600">Hackathons Attended</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">8.6</h3>
              <p className="text-gray-600">Current CGPA</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-blue-600">AI & Web</h3>
              <p className="text-gray-600">Specialization</p>
            </div>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;