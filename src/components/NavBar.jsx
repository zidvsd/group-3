import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { navLinks } from "../utils/navLinks";
import HamburgerMenu from "./HamburgerMenu";
import ModalSearch from "./ModalSearch";
import { logo } from "../utils/navLinks";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);

  // Toggle modal on Ctrl + K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setShowModal((prev) => !prev);
      }

      // ESC to close
      if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section className="bg-primary">
      <section className="custom-container py-4 flex flex-row justify-between items-center">
        <Link to={"/"} className="flex flex-row gap-x-2 items-center">
          <img
            className="text-white size-12 fill-white stroke-white accent-white"
            src={logo}
            alt="logo"
          />
          <h1 className="text-white text-3xl">VarietyBlog</h1>
        </Link>

        <div className="lg:hidden flex flex-row items-center gap-x-4">
          <Search
            onClick={() => setShowModal(true)}
            className="text-white cursor-pointer size-6 block lg:hidden"
          />
          <HamburgerMenu />
        </div>

        <ul className="lg:flex text-white flex-row gap-x-8 items-center hidden">
          <button
            onClick={() => setShowModal(true)}
            className="hidden lg:flex flex-row items-center bg-accent rounded-full p-2 gap-x-1"
          >
            <Search className="cursor-pointer text-white size-6" />
            <span className="text-white">Ctrl K</span>
          </button>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link className="hover:underline  text-xl" to={nav.path}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        <ModalSearch isOpen={showModal} onClose={() => setShowModal(false)} />
      </section>
    </section>
  );
};

export default NavBar;
