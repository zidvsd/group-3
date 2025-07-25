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
        className="relative z-50 cursor-pointer pt-2 text-white"
        aria-label="Toggle menu "
      >
        <div className="relative h-8 w-8">
          <Menu
            size={32}
            className={`absolute inset-0 cursor-pointer transition-transform duration-300 ${
              isOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 opacity-100"
            }`}
          />
          <X
            size={32}
            className={`absolute inset-0 cursor-pointer text-white transition-transform duration-300 ${
              isOpen ? "scale-100 opacity-100" : "scale-75 -rotate-90 opacity-0"
            }`}
          />
        </div>
      </button>

      <div
        className={`bg-primary fixed inset-0 z-40 transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
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
