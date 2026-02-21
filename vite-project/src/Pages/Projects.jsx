import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Link2Icon, GithubIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const curtainVariants = {
  initial: { y: "100%" },
  animate: { y: "0%" },
};

const Projects = () => {
  const navigate = useNavigate();

  const mainProjects = [
    {
      title: "AI Resume Builder",
      description:
        "Generated ATS-friendly, customizable resumes. Users can create a resume from scratch or upload an existing one. Integrated ImageKit API and Gemini API for AI-powered features. Users can delete, rename, download, and share their resumes. Requires login and signup to access features.",
      tech: "MERN stack (MongoDB, Express, React, Nodejs), Tailwind CSS, Gemini API, ImageKit",
      live: "https://byharshikajain.in",
      github: "https://github.com/Harshikajain23/ai-resume-builder.git",
      images: ["/images/ai-resume-builder-1.JPG", "/images/ai-resume-builder-2.JPG", "/images/ai-resume-builder-3.JPG","/images/ai-resume-builder-4.JPG", "/images/ai-resume-builder-5.JPG", "/images/ai-resume-builder-6.JPG", "/images/ai-resume-builder-7.JPG"]
    },
    {
      title: "Ask Me Chat Bot",
      description:
        "Users can chat or generate images using AI-powered features. It utilizes OpenAI API and ImageKit for intelligent responses and image generation. MongoDB database stores user chats and login information securely. Chats operate on a credit-based system. Razorpay integration enables seamless payment processing.",
      tech: "MERN stack (MongoDB, Express, React, Nodejs), Tailwind CSS, OpenAI API, ImageKit",
      live: "https://askme-chatbot-umber.vercel.app",
      github: "https://github.com/Harshikajain23/AskMe-Chatbot.git",
      images: ["/images/askmechatbot-1.JPG","/images/askmechatbot-2.JPG", "/images/askmechatbot-3.JPG", "/images/askmechatbot-4.JPG"],
    },
    {
      title: "Image Caption Generator",
      description:
        "Generates syntactically correct captions for the given image. Uses CNN for feature extraction from images. Trained on the Flickr8k dataset for diverse image descriptions. Optimized to provide accurate and contextually relevant captions.",
      tech: "Python, TensorFlow, Keras, Flask, React",
      live: "https://image-captioning-output-m72u.vercel.app/",
      github: "https://github.com/Harshikajain23/Image-captioning.git",
      images: ["/images/ic-1.JPG", "/images/ic-2.JPG", "/images/ic-3.JPG"],
    },
  ];

  const clones = [
    {
      title: "Spotify Clone",
      description:
        "Users can play tracks seamlessly. The application tracks the number of times each track is played. Users can upload music and albums through the admin panel. The interface is intuitive and responsive for a smooth user experience.",
      tech: "MERN, Tailwind CSS",
      live: "https://spotify-clone-frontend-hyn0.onrender.com",
      github: "https://github.com/Harshikajain23/Spotify-clone.git",
      images: ["/images/spotify-1.JPG", "/images/spotify-2.JPG", "/images/spotify-3.JPG", "/images/spotify-4.JPG"],
      backend: "https://spotify-clone-backend-knb2.onrender.com",
    },
    {
      title: "Razorpay UI Clone",
      description: "I tried cloning the UI of Razorpay using Tailwind CSS to hone my skills.",
      tech: " Tailwind CSS",
      live: "https://razorpay-clone-bfvr.vercel.app",
      github: "https://github.com/Harshikajain23/Razorpay-Clone.git",
      images: ["/images/razorpay-1.JPG", "/images/razorpay-2.JPG", "/images/razorpay-3.JPG", "/images/razorpay-4.JPG"],
    },
    {
      title: "Netflix UI Clone",
      description:"I cloned the UI of an earlier version of Netflix to refresh my HTML and CSS skills.",
      tech: "HTML, CSS",
      live: " https://harshikajain23.github.io/Netflix-ui/",
      github: "https://github.com/Harshikajain23/Netflix-ui.git",
      images: ["/images/Netflix-1.JPG", "/images/Netflix-2.JPG", "/images/Netflix-3.JPG"],
    },
  ];

  const miniProjects = [
    {
      title: "Anime Recommendation Website",
      description: "A static website where I share my favorite anime and provide recommendations for others to explore.",
      tech: "React, Tailwind CSS",
      live: "https://anime-recommendation-react-hr8q.vercel.app",
      github: "https://github.com/Harshikajain23/Anime_recommendation_react.git",
      images: ["/images/anime-recommendation-1.JPG", "/images/anime-recommendation-2.JPG"],
    },
    {
      title: "Password Generator",
      description: "A web app that creates strong, random passwords with customizable length and character options.",
      tech: "HTML, CSS, JavaScript",
      live: "https://harshikajain23.github.io/Javascript-mini-project-1-Password-generator/",
      github: "https://github.com/yourusername/password-generator",
      images: ["/images/password-generator.JPG"],
    },
    {
      title: "Weather App",
      description: "A responsive web app that shows real-time weather for any city using OpenWeatherMap API.",
      tech: "HTML, OpenWeatherMap API,CSS, Javascript",
      live: "https://harshikajain23.github.io/Javascript-mini-project-2-weather-app/",
      github: "https://github.com/yourusername/weather-app",
      images: ["/images/weather-app-1.JPG", "/images/weather-app-2.JPG"],
    },
    {
      title: "Tic Tac Toe",
      description: "A web game with an unbeatable AI opponent using the Minimax algorithm.",
      tech: "HTML, CSS, JavaScript, AI",
      live: "https://harshikajain23.github.io/Javascript-mini-project-3-tic-tac-toe/",
      github: "https://github.com/Harshikajain23/Javascript-mini-project-3-tic-tac-toe.git",
      images: ["/images/tic-tac-toe.JPG"],
    },
  ];

  // Combine all projects for tracking image index and description toggle
  const allProjects = [...mainProjects, ...clones, ...miniProjects];
  const [currentImageIndex, setCurrentImageIndex] = useState(
    allProjects.map(() => 0)
  );
  const [showFullDesc, setShowFullDesc] = useState(
    allProjects.map(() => false)
  );
  const colors = [
  "text-cyan-500",
  "text-purple-500",
  "text-pink-500",
  "text-orange-500"
];

const shadowColors = [
  "shadow-cyan-500/40",
  "shadow-purple-500/40",
  "shadow-pink-500/40",
  "shadow-orange-500/40",
];


  const toggleShowFull = (projectIndex) => {
    setShowFullDesc((prev) =>
      prev.map((v, i) => (i === projectIndex ? !v : v))
    );
  };

  const renderLinks = (item, index) => (
    <div className="flex gap-4 mt-2">
      {item.live && (
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-white flex items-center gap-1 hover:underline ${colors[index % colors.length]}`}
        >
          <Link2Icon size={30} /> 
        </a>
      )}
      {item.github && (
        <a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          className={` hover:text-white flex items-center gap-1 hover:underline ${colors[index % colors.length]}`}
        >
          <GithubIcon size={30} />
        </a>
      )}

      {item.backend && (
  <a
    href={item.backend}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-slate-400 hover:underline"
  >
    ⚠ Click here to wake up backend (may take a few seconds)
  </a>
)}

    </div>
  );

  const handleNextImage = (projectIndex, images) => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev.map((idx, i) =>
        i === projectIndex ? (idx + 1) % images.length : idx
      )
    );
  };

  const handlePrevImage = (projectIndex, images) => {
    if (images.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev.map((idx, i) =>
        i === projectIndex ? (idx - 1 + images.length) % images.length : idx
      )
    );
  };

  const renderProjectBlock = (project, globalIndex, sectionIndex) => {
    const isEven = sectionIndex % 2 === 1;

    // Split description into points
    const points = project.description
      ? project.description.split(". ").filter((p) => p.trim() !== "")
      : [];
    const isSinglePoint = points.length === 1;

    // Points to display based on "See More"
    const showToggle = points.length > 3;
    const displayedPoints =
      showFullDesc[globalIndex] || !showToggle
        ? points
        : points.slice(0, 3);

    return (
      <div 
        key={globalIndex}
        className={`flex flex-col md:flex-row items-center border border-neutral-700 shadow-2xl ${shadowColors[globalIndex % shadowColors.length]}  rounded-md p-5 border-radius-2xl gap-6 w-60vw  mb-10 ${
          isEven ? "md:ml-30 md:justify-end " : "md:mr-30"
        }`}
      >
        {/* Content left */}
        <div className="md:w-1/2 flex flex-col gap-2 text-left mt-2 mb-5">
          <h2 className="text-4xl font-semibold">{project.title}</h2>

         {points.length > 0 && (
  <ul className="text-neutral-300 text-xl space-y-2 mt-5">
    {displayedPoints.map((point, i) => (
      <li key={i} className="flex items-start">
        {!isSinglePoint && (
          <span className="mr-2 text-neutral-500">—</span>
        )}
        <span>{point}</span>
      </li>
    ))}
  </ul>
)}

          {showToggle && (
            <span
              onClick={() => toggleShowFull(globalIndex)}
              className="text-slate-500 cursor-pointer hover:underline block mt-1"
            >
              {showFullDesc[globalIndex] ? "See Less" : "See More"}
            </span>
          )}

          <p className={`text-xl mt-4 ${colors[globalIndex % colors.length]}`}>Tech: {project.tech}</p>

          <p className="text-l text-slate-500 mt-1">
          {project.disclaimer}
         </p>
          {renderLinks(project, globalIndex)}
        </div>

        {/* Image carousel right */}
        <div className="md:w-1/2 relative flex flex-col items-center">
          <img
            src={project.images[currentImageIndex[globalIndex]]}
            alt={project.title}
            className="w-140 h-70 rounded-lg shadow-lg border border-neutral-700"
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={() => handlePrevImage(globalIndex, project.images)}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-neutral-800 hover:bg-neutral-700 px-2 py-1 rounded text-white z-1 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={() => handleNextImage(globalIndex, project.images)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-neutral-800 hover:bg-neutral-700 px-2 py-1 rounded text-white z-1 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <motion.div
      className="min-h-screen bg-neutral-950 text-white z-1 flex flex-col items-center justify-start overflow-y-auto"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
      <div className="w-full flex justify-center items-center p-6 relative">
        <button
          onClick={() => navigate("/")}
          className="absolute top-6 right-6 z-50 cursor-pointer text-neutral-400 hover:text-white transition"
        >
          <X size={28} />
        </button>
        <h1 className="text-4xl lg:text-5xl font-bold mb-10 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent uppercase">My Projects</h1>
      </div>

      <div className="flex flex-col gap-20 w-full max-w-6xl px-6">
        {/* Main Projects */}
        {mainProjects.map((project, index) =>
          renderProjectBlock(project, index, index)
        )}
        
        {/* Clones Section */}
        <h2 className="text-4xl font-bold text-center mt-5 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent uppercase">Clones</h2>
        {clones.map((project, index) =>
          renderProjectBlock(project, mainProjects.length + index, index)
        )}

        {/* Mini Projects Section */}
        <h2 className="text-4xl font-bold text-center mt-5 mb-5 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent uppercase">Mini Projects</h2>
        {miniProjects.map((project, index) =>
          renderProjectBlock(
            project,
            mainProjects.length + clones.length + index,
            index
          )
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
