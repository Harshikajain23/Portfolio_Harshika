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

  // // Hide stars only on Home and Resume
  //   const hideStars =
  //     location.pathname === "/" ||
  //     location.pathname === "/home" ||
  //     location.pathname.startsWith("/resume");

  return (
    <div className="relative min-h-screen bg-black">
      
      
      {/* {!hideStars && ( */}
        <>
        <div className="stars-wrapper">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>
        </>
      {/* )} */}

      {/* Main Content */}
      <div className="relative z-20">
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