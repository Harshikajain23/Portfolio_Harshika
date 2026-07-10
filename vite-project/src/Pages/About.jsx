import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BubbleBurst from "../Components/BubbleBurst";
import "../styles/dots.css";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setBubbles((prev) => [
      ...prev,
      {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);

    // Auto clear bubbles after 700ms
    setTimeout(() => {
      setBubbles([]);
    }, 700);
  };

  return (
    <motion.div className="inset-0 bg-neutral-950 text-white z-50 overflow-y-auto -mt-10 md:mt-0">
      {/* Clickable Bubble Background */}
      <div className="absolute inset-0 z-20" onClick={handleClick} />

      {/* Bubbles */}
      {bubbles.map((bubble, index) => (
        <BubbleBurst key={index} x={bubble.x} y={bubble.y} />
      ))}

      {/* Content */}
      <div className="relative z-10 h-full px-6">
        <div className="mt-2 md:mt-10 mb-10 ml-2 sm:ml-2 mr-2 sm:mr-2 lg:ml-15 lg:mr-15 w-70vw h-70vh border border-2 border-white sm:flex flex-col justify-center items-center">
          <h1 className="uppercase text-4xl sm:text-2xl lg:text-4xl mx-auto text-center font-semibold mt-6 mb-10">
            About Me
          </h1>

          {isMobile ? (
            <p className="text-xl text-white text-justify ml-5 mr-5 mb-10 leading-relaxed break-word hyphens-auto">
              Full Stack Developer with an AI-focused Master's in Computer
              Science, specializing in MERN stack development and machine
              learning (Image Captioning using CNN/LSTM). I enjoy chess,
              reading, and solving logical problems, and I'm always eager to
              grow within a collaborative team.
            </p>
          ) : (
            <>
              <p className="text-2xl lg:text-2xl text-white text-justify ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto">
                I'm Harshika Jain, a Full Stack Developer with an Integrated
                Master's in Computer Science from Central University of
                Rajasthan, specializing in Artificial Intelligence. My
                final-year project on Image Captioning using CNN and LSTM
                architectures deepened my understanding of neural networks
                and applied machine learning.
              </p>

              <p className="mt-5 text-2xl lg:text-2xl text-white ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto text-justify">
                Since then, I've focused on strengthening my problem-solving
                skills and MERN stack development, building multiple
                full-stack projects that reflect my growth as an engineer.
              </p>

              <p className="mt-5 mb-6 text-2xl lg:text-2xl text-white ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed hyphens-auto text-justify">
                Beyond code, I enjoy chess, reading, and solving logical
                problems — interests that keep my analytical thinking sharp.
                I'm motivated, adaptable, and always looking to grow within a
                collaborative team.
              </p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default About;