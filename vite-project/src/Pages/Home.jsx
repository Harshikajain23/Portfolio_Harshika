import React from "react";
import { useState, useEffect } from "react";
import BubbleBurst from "../Components/BubbleBurst";
import { Typewriter } from "react-simple-typewriter";
import AnimatedImage from "../Components/AnimatedImage";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
import ProjectDisplay from "./ProjectDisplay";

  const words = [
  "Software Developer",
  "MERN Stack Developer",
  "Full Stack Developer",
];

const colors = [
"#c084fc", // Bright Purple
  "#06d6a0", // Bright Teal Green
  "#22c55e", // Vivid Emerald Green
  "#fb7185", // Hot Pink / Soft Rose
  "#2dd4bf", // Neon Mint
  "#e11d48", // Strong Red Pink
  "#d946ef", // Neon Purple
  "#38bdf8", // Electric Blue
  
];

const Home = () => {

  
  
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

    const [openResume, setOpenResume] = useState(false);

    const [color, setColor] = useState(colors[0]);

    const [bubbles, setBubbles] = useState([]);

    const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };


     const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBubbles([
      ...bubbles,
      {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    ]);
  };

  return (
   <motion.div
          className="inset-0 bg-neutral-950 text-white z-50 overflow-y-auto md:mt-0"
          variants={isMobile ? mobileVariants : {} }
          initial="initial"
          animate="animate"
          transition={{
            duration: isMobile ? 1.1 : {},
            ease: [0.77, 0, 0.175, 1],
      }} >

        
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
       

    
    <div  onClick={handleClick} className=" min-h-screen overflow-x-hidden  p-6 text-white text-center z-2 0">

     
     <div className="  grid
  grid-cols-1
  gap-4
  lg:auto-cols-[25px]
  lg:auto-rows-[25px]">

       
        {/* Hero */}

        <div className="grid grid-cols-1 col-span-1 mt-5 md:mt-0
  lg:col-span-30
  lg:row-span-12
  lg:col-start-1
  lg:row-start-1 text-3xl sm:text-3xl lg:text-[4rem] pt-15 lg:pt-6 bg-neutral-900 p-6 shadow-2xl shadow-black ">
        <div className="lg:col-span-25 lg:row-span-12 lg:col-start-1 mt-0 md:mt-5 lg:row-start-1 whitespace-nowrap" >
          Hi! I'm Harshika Jain - a <br/>  <p
      className="text-3xl sm:text-3xl lg:text-[4rem]  font-semibold transition-colors duration-500 whitespace-nowrap"
     style={{
   color: isMobile ? "white" : "white",
    textShadow: isMobile ? "none" : `
      1px 1px 0 #ccc,
      2px 2px 0 #bbb,
      3px 3px 0 #aaa,
      4px 4px 0 #999,
      5px 5px 10px rgba(0,0,0,0.4)
    `
  }}
    >
      <Typewriter
        words={words}
        loop
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1200}
        onType={() => setColor(getRandomColor())}
      />
    </p>
    <br/>
    <div/>

    <div className="lg:col-span-25 lg:row-span-12 lg:col-start-1 lg:row-start-1 " >
    Welcome to my <span className="block lg:inline">portfolio.</span>
    </div>

     {bubbles.map((r, i) => (
          <BubbleBurst key={i} x={r.x} y={r.y} />
        ))}
        </div>
       

        <div className="col-span-1 lg:col-span-5 lg:row-span-12 lg:col-start-25 lg:row-start-1 lg:block flex justify-center items-center mt-6

 
">
            <AnimatedImage className='z-30'/>
        </div>

        </div>
        
        
        
        {/* About */}
        <div onClick={() => navigate("/projects")} className=" col-span-1 order-1 md:order-1 lg:col-span-2 hidden md:flex 
    lg:row-span-5
    lg:col-start-31
    lg:row-start-8 rounded-md bg-neutral-900 p-6 items-center justify-center cursor-pointer hover:bg-[#73086ef7] shadow-2xl shadow-black ">
          <span className="font-semibold  font-inter uppercase tracking-[0.3em] inline-block lg:-rotate-90 text-xl text-center my-auto hover:font-extrabold z-40">
            Projects
        </span>
        </div>

        

        {/* Resume */}
        <div onClick={() => navigate("/resume")} className=" col-span-1
  rounded-md bg-neutral-900 

  lg:col-span-2
  lg:row-span-5
  lg:col-start-31
  lg:row-start-3 p-6 hidden md:flex justify-center items-center cursor-pointer hover:bg-[#096670f7] shadow-2xl shadow-black order-2 md:order-2">
             <span className="font-semibold  font-inter uppercase tracking-[0.3em] inline-block lg:-rotate-90 text-xl text-center my-auto hover:font-extrabold z-40">
             Resume
        </span>
        
        </div>

         <div onClick={() =>
    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
    })
  } className="order-5 md:order-3 col-span-1 lg:row-span-2 lg:col-span-5 lg:col-start-23 lg:row-start-13  bg-neutral-900 p-6 z-40 rounded-md cursor-pointer  hover:bg-[#ce4f0f] shadow-2xl shadow-black hidden md:flex items-center justify-center ">
          <span className="font-semibold hover:font-extrabold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto">
             Skills
        </span>
        </div>

             {/* Contact */}
        <div onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  } className="font-inter order-3 md:order-4 lg:col-span-5 lg:row-span-2 lg:col-start-28 lg:row-start-13  rounded-md bg-neutral-900 p-6 cursor-pointer hover:bg-[#11a00e] shadow-2xl shadow-black hidden md:flex items-center justify-center ">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block  text-xl text-center my-auto hover:font-extrabold z-40">
             Contact
        </span>
        </div>

        {/* About */}
        <div  onClick={() =>
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    })
  } className="col-span-1 order-4 md:order-5 lg:row-span-2 lg:col-span-5 lg:col-start-18 lg:row-start-13  bg-neutral-900 p-6 rounded-md cursor-pointer hover:bg-[#b4063af7] shadow-2xl shadow-black hidden md:flex justify-center ">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto hover:font-extrabold z-40">
             About

        </span>
        </div>

    

      </div>
    </div>
      <section className="my-24" id="about">

     
    <About/>

     </section>

      <section className="my-24 md:my-0" id="skills">

     
    <Skills/>

     </section>

     <section className="my-24">

      <ProjectDisplay/>
     </section>

    <section id="contact">

    

     
    <Contact/>

     </section>

      
    </motion.div>
  );
};

export default Home;
