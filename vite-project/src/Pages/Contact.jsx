import { motion } from "framer-motion";
import { Github, Linkedin, Mail, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BubbleBurst from "../Components/BubbleBurst";
import "../styles/dots.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Navbar from "./Navbar";

const curtainVariants = {
  initial: { y: "100%" },
  animate: { y: "0%" }
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    const message = form.message.value.trim();
    const name = form.from_name.value.trim();
    const email = form.from_email.value.trim();

    // Validation FIRST
    if (!message) {
      toast.error("Message field is empty");
      return;
    }

    if (!name) {
      toast.error("Name field is required");
      return;
    }

    if (!email) {
      toast.error("Email field required");
      return;
    }

    if (loading) return;
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        toast.success("Message sent successfully");
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("Failed to send message");
      })
      .finally(() => setLoading(false));
  };

  const navigate = useNavigate();

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const [bubbles, setBubbles] = useState([]);

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
    <>

    <motion.div
      className="min-h-screen bg-neutral-950 text-white z-50 flex flex-col"
      variants={curtainVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 1.1,
        ease: [0.77, 0, 0.175, 1],
      }}
      onClick={handleClick}
    >
      {bubbles.map((r, i) => (
        <BubbleBurst key={i} x={r.x} y={r.y} />
      ))}
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate("/");
        }}
        className="absolute top-6 right-6 text-neutral-400 hover:text-white transition cursor-pointer"
      >
        <X size={28} />
      </button>

      <div className=" stars stars-2"></div>

      {/* Heading */}
      <div className="mt-2 text-center">
        <h1 className="text-[3rem] font-semibold">Contact Me</h1>
        <p className="text-neutral-400 mt-2  text-4xl sm:text-2xl text-center">
          Want to connect or just say hello? Drop a message
          <span className="dots ml-1"></span>
        </p>
      </div>

      {/* Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md mx-auto mt-12 px-6 space-y-5"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition text-[18px]"
        />

        <input
          type="email"
          placeholder="Email"
          name="from_email"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition text-[18px]"
        />

        <textarea
          rows="4"
          name="message"
          placeholder="Message"
          className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:border-white transition resize-none text-[18px]"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-neutral-200 transition text-xl cursor-pointer disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* Social Links */}
      <div className="mt-7 flex justify-center gap-6">
        <a
          href="https://github.com/Harshikajain23"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-white transition"
        >
          <Github size={24} />
        </a>

        <a
          href="https://www.linkedin.com/in/harshika-jain-23june"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-white transition"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jainharshika2002@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="text-neutral-400 hover:text-white transition"
        >
          <Mail size={24} />
        </a>
      </div>
    </motion.div>
    </>
  );
};

export default Contact;
