import { motion } from "framer-motion";
import { XIcon} from "lucide-react"
import { useNavigate } from "react-router-dom";

const curtainVariants = {
  initial: { y: "100%" },      // slide in from bottom
  animate: { y: "0%" },        // fully visible
        // slide up on exit
};

const Resume = () => {

  const navigate = useNavigate();
  return (
    <motion.div
  className="pt-5 md:pt-0 min-h-screen bg-neutral-950 text-white flex flex-col items-center"
  variants={curtainVariants}
  initial="initial"
  animate="animate"
  transition={{
    duration: 1.1,
    ease: [0.77, 0, 0.175, 1],
  }}
>
  <div className="w-full flex justify-between items-center p-6">
    <h1 className="text-4xl font-bold">My Resume</h1>

    <div className="flex gap-5 items-center">
      <a
        href="/Harshika-Jain-Resume.pdf"
        download
        className="rounded-md bg-white text-black px-6 py-3"
      >
        Download Resume
      </a>

      <span
        onClick={() => navigate("/")}
        className="cursor-pointer text-white"
      >
        <XIcon />
      </span>
    </div>
  </div>

  <iframe
    src="/Harshika-Jain-Resume.pdf"
    className="w-full h-screen"
    title="Resume PDF"
  />
</motion.div>
  );
};

export default Resume;
