import React from "react";
import { FaDownload, FaFileAlt } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">
        
        <div className="flex justify-center mb-6">
          <div className="bg-blue-100 p-5 rounded-full">
            <FaFileAlt className="text-5xl text-blue-600" />
          </div>
        </div>

        <h4 className="text-blue-600 font-semibold text-lg">
          MY RESUME
        </h4>

        <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
          Resume & Qualifications
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Download my resume to learn more about my education,
          technical skills, projects, achievements, certifications,
          and experience in Web Development and Artificial Intelligence.
        </p>

        {/* Quick Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">
              8.6
            </h3>
            <p className="text-gray-600">CGPA</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">
              10+
            </h3>
            <p className="text-gray-600">Projects</p>
          </div>

          <div className="bg-gray-50 p-5 rounded-xl">
            <h3 className="text-2xl font-bold text-blue-600">
              3+
            </h3>
            <p className="text-gray-600">Hackathons</p>
          </div>
        </div>

        {/* Download Button */}
        <a
          href="/Shubham_Sawant_Resume.pdf"
          download
          className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition"
        >
          <FaDownload />
          Download Resume
        </a>

        {/* View Resume */}
        <div className="mt-8">
          <a
            href="/Shubham_Sawant_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 font-medium hover:underline"
          >
            View Resume Online →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;

