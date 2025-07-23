import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from "../utils/navLinks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 1080 && setIsOpen(false);
    handleResize(); // On mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative lg:hidden">
      <button
        onClick={toggleMenu}
        className="relative z-50 pt-2 cursor-pointer text-white"
        aria-label="Toggle menu "
      >
        <div className="relative h-8 w-8">
          <Menu
            size={32}
            className={`cursor-pointer absolute inset-0 transition-transform duration-300 ${
              isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          <X
            size={32}
            className={`cursor-pointer absolute inset-0 text-white transition-transform duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-75 -rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>

      <div
        className={`fixed inset-0 z-40 bg-primary transition-all duration-300 ${
          isOpen
            ? "opacity-100 scale-100"
            : "pointer-events-none opacity-0 scale-95"
        }`}
      >
        <ul className="flex h-full flex-col items-center justify-center space-y-12 text-center">
          {navLinks.map(({ path, label }, i) => (
            <li key={i}>
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold text-white hover:underline"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
