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
      className="fixed inset-0 bg-neutral-950 text-white z-50 flex flex-col items-center justify-start"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      {/* Header with download */}
      <div className="w-full flex justify-between items-center p-6">
        <h1 className="text-4xl font-bold">My Resume</h1>

        <div className="flex flex-row items-center justify-center gap-5">

        
        <a
          href="/Harshika-Jain-Resume.pdf"
          download
          className="rounded-md bg-white text-black px-6 py-3 hover:bg-gray-300"
        >
          Download Resume
        </a>

        <span onClick={() => navigate("/")} className="cursor-pointer text-white hover:text-gray-300 text-4xl size-6.5"> <XIcon/></span>

        </div>
      </div>

      {/* Fullscreen PDF preview */}
      <embed
        src="/Harshika-Jain-Resume.pdf"
        type="application/pdf"
        className="w-full h-[calc(100vh-100px)]" // full height minus header
      />
    </motion.div>
  );
};

export default Resume;
