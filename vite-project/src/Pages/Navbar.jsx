import { useState } from "react";
import { Menu, X, Home, User, Code, Folder, FileText, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ navItems }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "About", path: "/about", icon: <User size={20} /> },
    { name: "Skills", path: "/skills", icon: <Code size={20} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={20} /> },
    { name: "Resume", path: "/resume", icon: <FileText size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 bg-transparent text-white px-6 py-4 flex justify-between items-center z-50 md:hidden">
        <button className="z-50 text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed left-0 w-full h-1/2 bg-black text-white transition-all duration-500 ease-in-out md:hidden z-50 ${
          open ? "top-0" : "-top-full"
        }`}
      >
        <div className="flex justify-start p-6">
          <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>

        <div className=" stars stars-2"></div>

        <div className="grid grid-cols-1 gap-2  bg-black p-2 mt-6">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className="bg-neutral-900 border-4 border-black pl-35 flex items-center gap-3 px-4 py-4 text-lg uppercase"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}