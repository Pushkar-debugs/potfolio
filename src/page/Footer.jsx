import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-500">
              Shubham.dev
            </h2>
            <p className="text-gray-400 mt-2 max-w-md">
              Passionate Computer Engineering Student specializing in
              Web Development, AI, and innovative technology solutions.
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-6 text-gray-300">
              <li>
                <Link to="/" className="hover:text-blue-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-blue-500 transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/skills" className="hover:text-blue-500 transition">
                  Skills
                </Link>
              </li>

              <li>
                <Link to="/projects" className="hover:text-blue-500 transition">
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/achievements"
                  className="hover:text-blue-500 transition"
                >
                  Achievements
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-500 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} Shubham Sawant. All Rights Reserved.
          </p>

          <Link
            to="/"
            className="bg-blue-500 p-3 rounded-full hover:bg-blue-600 transition"
          >
            <FaArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

