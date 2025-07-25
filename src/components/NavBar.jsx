import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { navLinks } from "../utils/navLinks";
import HamburgerMenu from "./HamburgerMenu";
import ModalSearch from "./ModalSearch";
import { logo } from "../utils/navLinks";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const closeOnClick = () => {
    setShowModal(false);
  };
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
      <section className="custom-container flex flex-row items-center justify-between py-4">
        <Link to={"/"} className="flex flex-row items-center gap-x-2">
          <img
            className="size-10 fill-white stroke-white text-white accent-white"
            src={logo}
            alt="logo"
          />
          <h1 className="text-2xl text-white">VarietyBlog</h1>
        </Link>

        <div className="flex flex-row items-center gap-x-4 lg:hidden">
          <Search
            onClick={() => setShowModal(true)}
            className="block size-6 cursor-pointer text-white lg:hidden"
          />
          <HamburgerMenu />
        </div>

        <ul className="hidden flex-row items-center gap-x-12 text-white lg:flex">
          <button
            onClick={() => setShowModal(true)}
            className="bg-accent hidden flex-row items-center gap-x-1 rounded-full p-2 lg:flex"
          >
            <Search className="size-6 cursor-pointer text-white" />
            <span className="text-white">Ctrl K</span>
          </button>
          {navLinks.map((nav, index) => (
            <li key={index}>
              <Link className="text-xl hover:underline" to={nav.path}>
                {nav.label}
              </Link>
            </li>
          ))}
        </ul>

        <ModalSearch
          closeWhenClick={closeOnClick}
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        />
      </section>
    </section>
  );
};

export default NavBar;
