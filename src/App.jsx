import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./page/navbar";
import Footer from "./page/Footer";

const Home = lazy(() => import("./page/Home"));
const About = lazy(() => import("./page/About"));
const Skills = lazy(() => import("./page/Skills"));
const Projects = lazy(() => import("./page/Projects"));
const Achievements = lazy(() => import("./page/Achievements"));
const Resume = lazy(() => import("./page/Resume"));
const Contact = lazy(() => import("./page/Contact"));

function App() {
  return (
    <div className="bg-gray-950 min-h-screen">
      <Navbar />

      <main className="pt-24">
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center text-white">
              Loading portfolio...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}

export default App;