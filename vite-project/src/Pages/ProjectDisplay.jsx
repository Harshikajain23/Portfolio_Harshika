import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import BubbleBurst from "../Components/BubbleBurst";
import { Navigate, useNavigate } from "react-router-dom";



const projects = [
  {
    title: "AI Resume Builder",
    tagline: "AI-powered resume builder with role-based content and ATS-optimized output.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://ai-resume-builder-2-1ux9.onrender.com/",
    github: "https://github.com/Harshikajain23/ai-resume-builder",
    image: "/images/ai-resume-builder-6.JPG", // Add your image
  },
  {
    title: "Ask Me Chatbot",
    tagline: "AI chatbot using the ChatGPT API with auth, payments, and media handling.",
    tech: ["React", "MongoDB", "Razorpay", "ImageKit"],
    live: "https://askme-chatbot-umber.vercel.app/",
    github: "https://github.com/Harshikajain23",
    image: "/images/askmechatbot-2.JPG",
  },
  {
    title: "Image Caption Generator",
    tagline: "Deep learning model generating image captions using CNN + LSTM.",
    tech: ["Python", "CNN", "LSTM", "Flickr8k"],
    live: null,
    github: "https://github.com/Harshikajain23/Image-captioning",
    image: "/images/ic-1.JPG",
  },
  {
    title:"Spotify Clone",
    tagline: "Spotify-inspired music streaming platform with song uploads, play count tracking, and an intuitive user interface.",
    tech: ["React","MongoDB", "NodeJS", "Express", "Tailwind CSS"],
    live: "https://spotify-clone-frontend-hyn0.onrender.com",
    github: "https://github.com/Harshikajain23/Spotify-clone.git",
    image: "/images/spotify-1.JPG",
    backend: "https://spotify-clone-backend-knb2.onrender.com",

  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectDisplay = () => {
  const [bubbles, setBubbles] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
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

    setTimeout(() => setBubbles([]), 700);
  };

  return (
  <div
    className="relative bg-transparent text-white min-h-screen px-6 py-12"
    onClick={handleClick}
  >
    {/* Bubble Layer */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {bubbles.map((bubble, index) => (
        <BubbleBurst key={index} x={bubble.x} y={bubble.y} />
      ))}
    </div>

    {/* Content */}
    <div className="relative z-80">
      <h1
        onClick={() => navigate("/projects")}
        className="text-4xl font-bold text-center mb-12 uppercase cursor-pointer"
      >
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group bg-neutral-900 rounded-xl p-6 shadow-2xl flex flex-col md:flex-row gap-6 items-center border border-transparent hover:border-white h-[35vh] md:h-[50vh] w-[90vw] md:w-[40vw] mx-aut cursor-pointer"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-neutral-400 mb-4">
                {project.tagline}
              </p>

              <div className="mb-5 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-neutral-800 px-3 py-1 rounded-full text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-6">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white text-neutral-300"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white text-neutral-300"
                >
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </div>

            <div className="hidden md:block w-full md:w-56 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[35vh] object-cover rounded-lg border border-neutral-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
}
export default ProjectDisplay;