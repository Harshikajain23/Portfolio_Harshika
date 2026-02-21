import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Navbar from "./Pages/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Twinkling Stars Background */}
      {/* Twinkling Stars Background */}
      <div className="stars absolute top-0 left-0 w-screen h-screen pointer-events-none z-20"></div>
      <div className="stars2 absolute top-0 left-0 w-screen h-screen pointer-events-none z-20"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Toaster position="top-center" />
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
