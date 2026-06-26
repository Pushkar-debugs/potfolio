import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";
import useScroll from "../Hooks/useScroll";
import useTheme from "../Hooks/useTheme";

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
  const scrolled = useScroll();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-gray-950/95 border-b border-white/10 shadow-2xl" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="text-3xl font-bold text-white tracking-tight">
            Pushkar
            <span className="text-blue-500">.dev</span>
          </NavLink>

          <ul className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-sm font-medium transition ${
                      isActive ? "text-white nav-link-active" : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white transition hover:bg-white/10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
            <a
              href="/Shubham_Sawant_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600"
            >
              Resume
            </a>
          </div>

          <button
            onClick={() => setMenu(!menu)}
            className="md:hidden text-white text-2xl p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle navigation menu"
          >
            {menu ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menu && (
        <div className="md:hidden bg-gray-900 animate-slide-in-down border-t border-white/10">
          <ul className="flex flex-col items-center py-6 gap-5">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-lg font-medium transition ${
                      isActive ? "text-white" : "text-gray-300 hover:text-blue-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}

            <a
              href="/Shubham_Sawant_Resume.pdf"
              download
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full text-white font-medium transition"
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

