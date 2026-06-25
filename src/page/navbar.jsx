import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Achievements", to: "/achievements" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-gray-950/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-3xl font-bold text-white">
            Shubham
            <span className="text-blue-500">.dev</span>
          </Link>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-gray-300 hover:text-blue-500 transition duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href="/Shubham_Sawant_Resume.pdf"
            download
            className="hidden md:block bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white font-medium transition"
          >
            Resume
          </a>

          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden text-white text-2xl"
          >
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-gray-900">
          <ul className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMenu(false)}
                  className="text-gray-300 hover:text-blue-500 text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <a
              href="/Shubham_Sawant_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white font-medium"
            >
              Download Resume
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

