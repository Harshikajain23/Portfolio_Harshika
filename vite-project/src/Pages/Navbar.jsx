import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ navItems }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <nav className="fixed top-0 left-0 bg-transparent  text-white px-6 py-4 justify-between items-center z-50 md:hidden">

        <button className="z-50 text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
    </nav>
      

      {/* Mobile Slide Menu */}
      <div
      className={`fixed left-0 w-full h-1/2 bg-black text-white transition-all duration-500 ease-in-out md:hidden z-50
${open ? "top-0" : "-top-full"}`}
      >
        <div className="flex justify-start p-6">
          <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
        </div>
            
        <div className="grid grid-cols-1 gap-2 bg-black p-2 mt-6">
  {navLinks.map((item, index) => (
    <Link
      key={index}
      to={item.path}
      onClick={() => setOpen(false)}
      className="bg-neutral-900 border-4 border-black text-center py-4 text-lg"
    >
      {item.name}
    </Link>
  ))}
</div>

        </div>
      
    </>
  );
}