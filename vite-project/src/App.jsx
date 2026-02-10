import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  const location = useLocation();

  return (
     <>
      <Toaster position="top-center" />
    <AnimatePresence mode="wait">
     
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </AnimatePresence>
    </>
  );
}

export default App;

