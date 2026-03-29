import { motion } from "framer-motion";
import { XIcon} from "lucide-react"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";



const Resume = () => {

  const desktopVariants = {
      initial: { y: "100%" },
      animate: { y: "0%" }
    };
    
    const mobileVariants = {
      initial: { opacity: 0 },
      animate: { opacity: 1 }
    };
    
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
    
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

  const navigate = useNavigate();
  return (
    <motion.div
  className="pt-5 md:pt-0 min-h-screen  text-white flex flex-col items-center -mt-10 md:mt-0"
   variants={isMobile ? mobileVariants : desktopVariants}
      initial="initial"
      animate="animate"
      transition={{
            duration: isMobile ? 1.1 : 1.1,
            ease: [0.77, 0, 0.175, 1],
      }}
>
  
  <div className="w-full flex justify-between items-center p-6">
    <h1 className="text-4xl -mt-5 md:mt-0 font-bold">My Resume</h1>

    <div className="flex gap-5 items-center">
      <a
        href="/HarshikaJain-Resume.pdf"
        download
        className="rounded-md bg-white text-black px-6 py-3"
      >
        Download Resume
      </a>

      <span
        onClick={() => navigate("/")}
        className=" cursor-pointer text-white"
      >
        <XIcon />
      </span>
    </div>
  </div>

  <iframe
    src="/HarshikaJain-Resume.pdf"
    className="w-full h-screen"
    title="Resume PDF"
  />
</motion.div>
  );
};

export default Resume;
