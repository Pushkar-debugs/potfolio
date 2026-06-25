
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h4 className="text-blue-400 font-semibold text-lg">
            GET IN TOUCH
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Contact Me
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project, collaboration opportunity, or just want to say
            hello? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects,
              internship opportunities, hackathons, and innovative ideas.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-400 text-2xl" />
                <span>shubhamsawant2205@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-400 text-2xl" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-blue-400 text-2xl" />
                <span>Virar, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 mt-10">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 border-t border-gray-700 pt-6">
          <p className="text-gray-400">
            © 2026 Shubham Sawant. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

