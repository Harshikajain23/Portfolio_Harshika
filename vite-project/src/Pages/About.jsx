import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BubbleBurst from "../Components/BubbleBurst";
import "../styles/dots.css";
import { useState } from "react";

const curtainVariants = {
  initial: { x: "100%" },
  animate: { x: "0%" }
};

const About = () => {
  const navigate = useNavigate();
  const [bubbles, setBubbles] = useState([]);

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
    <motion.div
      className="inset-0 bg-neutral-950 text-white z-50 overflow-y-auto"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >

      <div className=" stars stars-2"></div>
      {/* Clickable Bubble Background */}
      <div
        className="absolute inset-0 z-20"
        onClick={handleClick}
      />

      {/* Bubbles */}
      {bubbles.map((bubble, index) => (
        <BubbleBurst key={index} x={bubble.x} y={bubble.y} />
      ))}

      {/* Close Button */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 right-6 z-50 cursor-pointer text-neutral-400 hover:text-white transition"
      >
        <X size={28} />
      </button>

      {/* Content */}
      <div className="relative z-10 h-full px-6">
        <div className="mt-2 md:mt-10 mb-10 ml-2 sm:ml-2 mr-2 sm:mr-2 lg:ml-15 lg:mr-15 w-70vw h-70vh border border-2 border-white sm:flex flex-col justify-center items-center">
        <h1 className="uppercase text-4xl sm:text-2xl lg:text-4xl mx-auto text-center font-semibold mt-6 mb-10">About Me</h1>

        <p className=" text-2xl sm:text-xl lg:text-2xl text-white text-justify ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto">
          Hi, I’m Harshika Jain. I completed my Integrated Master’s degree in Computer Science from the Central University of Rajasthan. During my bachelor’s studies, I built a strong foundation in core computer science subjects, and in my master’s, I specialized in Artificial Intelligence.
        </p>

        <p className=" mt-5 text-2xl sm:text-xl lg:text-2xl text-white ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto text-justify">
       In my final year, I developed a deep learning project on Image Captioning using CNN and LSTM architectures, which strengthened my understanding of neural networks and model implementation.
        </p>

        <p className=" mt-5 text-2xl sm:text-xl lg:text-2xl text-white ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto text-justify">
          After completing my degree, I focused on enhancing my problem-solving skills through Striver’s DSA sheet and worked extensively on MERN stack development. I have built multiple projects and cloned real-world applications to sharpen my full-stack development skills.
        </p>

        <p className="mt-5 text-2xl sm:text-xl lg:text-2xl text-white ml-5 mr-5 lg:ml-15 lg:mr-15 leading-relaxed break-word hyphens-auto text-justify ">
         Beyond academics and coding, I genuinely enjoy solving logical problems, playing chess, reading novels, and watching anime. Chess and problem-solving help sharpen my analytical thinking, while reading and anime inspire creativity and imagination.
        </p>

        <p className="mt-5 mb-6 text-2xl sm:text-xl lg:text-2xl text-white ml-5 mr-5 sm:ml-5 sm:mr-5 lg:ml-15 lg:mr-15 leading-relaxed hyphens-auto text-justify">
          I am highly motivated, adaptable, and eager to contribute to a team where I can continue learning and make meaningful contributions.
        </p>


        </div>
        
      </div>
    </motion.div>
  );
};

export default About;
