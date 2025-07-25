import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { logo } from "../utils/navLinks";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-12 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Contact Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <div className="flex flex-col text-neutral-300">
            <a
              href="mailto:admissions@hau.edu.ph"
              className="text-sm  hover-footer"
              target="_blank"
            >
              admissions@hau.edu.ph
            </a>
            <a
              href="tel:+ (63) 045-625-5748"
              className="text-sm  hover-footer mt-1"
            >
              (63) 045-625-5748
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <Link className="hover-footer" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover-footer" to={"/blog"}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="hover-footer" to={"/about"}>
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
          <p className="text-sm opacity-70 mb-4">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex flex-wrap gap-2 max-w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-[200px] px-4 py-2 rounded-md text-sm bg-accent text-neutral-300 placeholder:text-neutral-300"
            />
            <button
              type="submit"
              className="bg-white text-primary px-4 py-2 hover-opacity cursor-pointer rounded-md text-sm font-medium hover:bg-opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow us</h3>
          <div className="flex items-center gap-4 mb-4">
            <a href="instagram.com/haucscsoc" target="_blank">
              <Instagram
                to={"instagram.com/haucscsoc"}
                className="size-5 hover-footer text-neutral-400 "
              />
            </a>
            <a href="https://www.facebook.com/haucscsoc" target="_blank">
              <Facebook className="size-5 hover-footer text-neutral-400  " />
            </a>
            <a href="https://x.com/holyangel1933?lang=en" target="_blank">
              <Twitter className="size-5 hover-footer text-neutral-400  " />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxwDJ1Mln0gskgoizO60Zxg"
              target="_blank"
            >
              <Youtube className=" size-5 hover-footer text-neutral-400 " />
            </a>
          </div>
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="size-12" alt="Logo" />
            <h1 className="text-lg font-semibold">VarietyBlog</h1>
          </Link>
        </div>
      </div>

      <div className=" border-t-2 border-neutral-400 mt-4">
        <div className="custom-container flex flex-row justify-between items-center pt-4">
          <h1 className=" text-neutral-300 hover-footer select-none">
            {" "}
            &copy; 2025 VarietyBlog | All rights reserved.{" "}
          </h1>
          <h1 className="hidden lg:block text-neutral-300 hover-footer select-none">
            Privacy Policy
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
