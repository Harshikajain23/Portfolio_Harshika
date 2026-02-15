import React from "react";
import { useState } from "react";
import BubbleBurst from "../Components/BubbleBurst";
import { Typewriter } from "react-simple-typewriter";
import AnimatedImage from "../Components/AnimatedImage";
import { useNavigate } from "react-router-dom";

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
    <div  onClick={handleClick} className="min-h-screen h-screen overflow-x-hidden bg-neutral-950 p-6 text-white text-center">
     <div className="  grid
  grid-cols-1
  gap-4
  lg:auto-cols-[25px]
  lg:auto-rows-[25px]">

       
        {/* Hero */}

        <div className="grid grid-cols-1 col-span-1
  lg:col-span-30
  lg:row-span-12
  lg:col-start-1
  lg:row-start-1 text-3xl sm:text-3xl lg:text-[4rem] bg-neutral-900 p-6 shadow-2xl shadow-black ">
        <div className="lg:col-span-25 lg:row-span-12 lg:col-start-1 lg:row-start-1 whitespace-nowrap" >
          Hi! I'm Harshika Jain - a <br/>  <p
      className="text-3xl sm:text-3xl lg:text-[4rem]  font-semibold transition-colors duration-500 whitespace-nowrap"
      style={{ color }}
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
            <AnimatedImage className=''/>
        </div>

        </div>
        
        

        
        

        

        {/* Skills */}
        <div onClick={() => navigate("/skills")} className=" col-span-1
  rounded-md bg-neutral-900 p-6

  lg:col-span-2
  lg:row-span-5
  lg:col-start-31
  lg:row-start-3 p-6 flex justify-center items-center cursor-pointer hover:bg-[#096670f7] shadow-2xl shadow-black">
             <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block lg:-rotate-90 text-xl text-center my-auto hover:font-extrabold">
             Skills
        </span>
        
        </div>

        {/* About */}
        <div onClick={() => navigate("/about")} className=" col-span-1

    lg:col-span-2
    lg:row-span-5
    lg:col-start-31
    lg:row-start-8 rounded-md bg-neutral-900 p-6 flex items-center justify-center cursor-pointer hover:bg-[#73086ef7] shadow-2xl shadow-black ">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block lg:-rotate-90 text-xl text-center my-auto hover:font-extrabold">
            About
        </span>
        </div>

        {/* Resume */}
        <div onClick={() => navigate("/resume")} className="col-span-1 lg:row-span-2 lg:col-span-5 lg:col-start-18 lg:row-start-13  bg-neutral-900 p-6 rounded-md cursor-pointer hover:bg-[#b4063af7] shadow-2xl shadow-black ">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto hover:font-extrabold">
             Resume

        </span>
        </div>

        
        <div onClick={() => navigate("/contact")} className=" col-span-1 lg:row-span-2 lg:col-span-5 lg:col-start-23 lg:row-start-13  bg-neutral-900 p-6  rounded-md cursor-pointer  hover:bg-[#ce4f0f] shadow-2xl shadow-black ">
          <span className="font-semibold hover:font-extrabold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto">
             Contact
        </span>
        </div>

        
        



         {/* Project */}
        <div onClick={() => navigate("/projects")} className="font-inter lg:col-span-5 lg:row-span-2 lg:col-start-28 lg:row-start-13  rounded-md bg-neutral-900 p-6 cursor-pointer hover:bg-[#11a00e] shadow-2xl shadow-black ">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block  text-xl text-center my-auto hover:font-extrabold">
             Projects
        </span>
        </div>

      </div>
    </div>
  );
};

export default Home;
