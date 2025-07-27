import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { logo } from "../utils/navLinks";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-primary px-6 pt-12 text-white">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Contact Us */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
          <div className="flex flex-col text-neutral-300">
            <a
              href="mailto:admissions@hau.edu.ph"
              className="hover-footer text-sm"
              target="_blank"
            >
              admissions@hau.edu.ph
            </a>
            <a
              href="tel:+ (63) 045-625-5748"
              className="hover-footer mt-1 text-sm"
            >
              (63) 045-625-5748
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Links</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <Link className="hover-footer" to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="hover-footer" to={"/blogs"}>
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
          <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
          <p className="mb-4 text-sm opacity-70">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <form className="flex max-w-full flex-wrap gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-accent min-w-[200px] flex-1 rounded-md px-4 py-2 text-sm text-neutral-300 placeholder:text-neutral-300"
            />
            <button
              type="submit"
              className="text-primary hover-opacity hover:bg-opacity-90 cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="mb-4 text-lg font-semibold">Follow us</h3>
          <div className="mb-4 flex items-center gap-4">
            <a href="instagram.com/haucscsoc" target="_blank">
              <Instagram
                to={"instagram.com/haucscsoc"}
                className="hover-footer size-5 text-neutral-400"
              />
            </a>
            <a href="https://www.facebook.com/haucscsoc" target="_blank">
              <Facebook className="hover-footer size-5 text-neutral-400" />
            </a>
            <a href="https://x.com/holyangel1933?lang=en" target="_blank">
              <Twitter className="hover-footer size-5 text-neutral-400" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCxwDJ1Mln0gskgoizO60Zxg"
              target="_blank"
            >
              <Youtube className="hover-footer size-5 text-neutral-400" />
            </a>
          </div>
          <Link to={"/"} className="flex items-center gap-2">
            <img src={logo} className="size-12" alt="Logo" />
            <h1 className="text-lg font-semibold">VarietyBlog</h1>
          </Link>
        </div>
      </div>

      <div className="mt-4 border-t-2 border-neutral-400">
        <div className="custom-container flex flex-row items-center justify-between pt-4">
          <h1 className="hover-footer text-neutral-300 select-none">
            {" "}
            &copy; 2025 VarietyBlog | All rights reserved.{" "}
          </h1>
          <h1 className="hover-footer hidden text-neutral-300 select-none lg:block">
            Privacy Policy
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
