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
    <div  onClick={handleClick} className="min-h-screen h-screen overflow-hidden bg-neutral-950 p-6 text-white text-center">
     <div className="grid
  auto-cols-[20px] sm:auto-cols-[24px] lg:auto-cols-[25px]
  auto-rows-[20px] sm:auto-rows-[24px] lg:auto-rows-[25px]
  gap-3 sm:gap-4">

       
        {/* Hero */}

        <div className="grid col-span-30 row-span-12 col-start-1 row-start-1 text-[4rem] bg-neutral-900 p-6">
        <div className="col-span-25 row-span-12 col-start-1 row-start-1">
          Hi! I'm Harshika Jain - a <br/>  <p
      className="text-[4rem] font-semibold transition-colors duration-500"
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
    Welcome to my portfolio.

     {bubbles.map((r, i) => (
          <BubbleBurst key={i} x={r.x} y={r.y} />
        ))}
        </div>
       

        <div className="col-span-5 row-span-12 col-start-25 row-start-1">
            <AnimatedImage className=''/>
        </div>

        </div>
        
        

        
        

        

        {/* Skills */}
        <div className="col-span-2 row-span-5 col-start-31 row-start-3 rounded-md bg-neutral-900 p-6 flex justify-center items-center cursor-pointer hover:bg-[#096670f7]  bg-[#dd0cdd8f]">
             <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block -rotate-90 text-xl text-center my-auto hover:font-extrabold">
             Skills
        </span>
        
        </div>

        {/* About */}
        <div className="col-span-2 row-span-5 col-start-31 row-start-8 rounded-md bg-neutral-900 p-6 flex items-center justify-center cursor-pointer hover:bg-[#73086ef7]">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block -rotate-90 text-xl text-center my-auto hover:font-extrabold">
            About
        </span>
        </div>

        {/* Resume */}
        <div onClick={() => navigate("/resume")} className=" row-span-2 col-span-5 col-start-18 row-start-13  bg-neutral-900 p-6 rounded-md cursor-pointer hover:bg-[#b4063af7]">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto hover:font-extrabold">
             Resume

        </span>
        </div>

        
        <div className="  row-span-2 col-span-5 col-start-23 row-start-13  bg-neutral-900 p-6  rounded-md cursor-pointer  hover:bg-[#ce4f0f]">
          <span className="font-semibold hover:font-extrabold font-inter uppercase tracking-[0.3em] inline-block text-xl text-center my-auto">
             Contact
        </span>
        </div>

        
        



         {/* Project */}
        <div className="font-inter col-span-5 row-span-2 col-start-28 row-start-13  rounded-md bg-neutral-900 p-6 cursor-pointer hover:bg-[#11a00e]">
          <span className="font-semibold font-inter uppercase tracking-[0.3em] inline-block  text-xl text-center my-auto hover:font-extrabold">
             Projects
        </span>
        </div>

      </div>
    </div>
  );
};

export default Home;
