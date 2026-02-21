import { motion } from "framer-motion";
import profileImg from "../assets/Harshika-portfolio.jpeg";

const AnimatedImage = ({ className = "" }) => {
  return (
    <motion.img
      src={profileImg}
      alt="Harshika Jain"
      className={`w-[20rem] h-[21rem] relative z-30 lg:w-[20rem] lg:h-[22rem] lg:mr-5 mt-5 lg:mt-[-20px] rounded-2xl object-cover border border-white shadow-2xl shadow-gray-500 z-30 ${className}`}
      initial={{
        filter: "grayscale(0%)",
        scale: 1, // start normal size
      }}
      animate={{
        filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"],
        scale: [1, 1.05, 1], // grow 5% then back
      }}
      transition={{
        duration: 15,     // slow & elegant
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default AnimatedImage;