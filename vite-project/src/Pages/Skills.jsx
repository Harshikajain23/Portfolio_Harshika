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

const Skills = () => {

    const Section = ({ title, children }) => (
  <div className="flex flex-col md:flex-row md:items-start gap-10 border-b border-neutral-800 pb-12">
    
    {/* LEFT SIDE - TITLE */}
    <div className="md:w-1/4">
      <h2 className="text-2xl font-semibold uppercase tracking-wider text-neutral-400 lg:mt-7 text-center md:text-left">
        {title}
      </h2>
    </div>

    {/* RIGHT SIDE - SKILLS */}
    <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
      {children}
    </div>

  </div>
);

const Skill = ({ name, img }) => (
  <div className="flex flex-col items-center group transition">
    <div className="bg-neutral-900 p-4 rounded-xl shadow-lg group-hover:scale-110 transition duration-300">
      <img
        src={img}
        alt={name}
        className="w-10 h-10 object-contain"
      />
    </div>
    <p className="mt-3 text-sm text-neutral-300 group-hover:text-white transition">
      {name}
    </p>
  </div>
);
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
      className="inset-0 bg-neutral-950 text-white z-50 overflow-y-auto -mt-10 md:mt-0"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
    >
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
     <div className=" stars stars-2"></div>
      <h1 className="text-4xl uppercase lg:text-4xl sm:text-2xl mx-auto text-center font-semibold mt-2 md:mt-6 mb-18">
  Skills
</h1>

<div className="max-w-5xl mx-auto space-y-16">

  {/* FRONTEND */}
  <Section title="Frontend">
    <Skill name="HTML" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    <Skill name="CSS" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    <Skill name="React" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    <Skill 
    name="Tailwind CSS" 
    img="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" 
  />
  </Section>

  {/* BACKEND */}
  <Section title="Backend">
    <Skill name="Node.js" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
    <Skill name="MongoDB" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
    <Skill name="Express" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  </Section>

  {/* PROGRAMMING LANGUAGES */}
  <Section title="Programming Languages">
    <Skill name="Python" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
    <Skill name="C++" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
    <Skill name="JavaScript" img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
  </Section>

  {/* AI ML */}
  <Section title="AI / ML">
    <Skill name="Machine Learning" img="https://cdn-icons-png.flaticon.com/512/4712/4712109.png" />
    <Skill name="Deep Learning" img="https://cdn-icons-png.flaticon.com/512/4149/4149676.png" />
    <Skill name="NLP" img="https://cdn-icons-png.flaticon.com/512/3898/3898082.png" />
    <Skill name="Artificial Intelligence" img="https://cdn-icons-png.flaticon.com/512/2103/2103633.png" />
  </Section>

  {/* TOOLS & DEPLOYMENT */}
<Section title="Tools & Deployment">
  <Skill 
    name="Git" 
    img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
  />
  <Skill 
    name="GitHub" 
    img="https://cdn-icons-png.flaticon.com/512/733/733553.png"  
  />
  <Skill 
    name="Vercel" 
    img="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png" 
  />
  <Skill 
    name="Render" 
    img="https://cdn.simpleicons.org/render/46E3B7" 
  />
</Section>

</div>

    </motion.div>
  );
};

export default Skills;
