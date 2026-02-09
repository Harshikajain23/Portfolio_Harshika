import { motion } from "framer-motion";
import profileImg from "../assets/Harshika-portfolio.jpeg";

const AnimatedImage = ({ className = "" }) => {
  return (
    <motion.img
      src={profileImg}
      alt="Harshika Jain"
      className="ml-[53px] w-[75%] w-[300px] h-[350px] mt-3 rounded-2xl object-cover border border-white shadow-2xl shadow-gray-500"
      initial={{
        filter: "grayscale(100%)",
      }}
      animate={{
        filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"],
      }}
      transition={{
        duration: 2000,     // very slow & elegant
        ease: "easeInOut",
        repeat: Infinity,
      }}
    />
  );
};

export default AnimatedImage;
