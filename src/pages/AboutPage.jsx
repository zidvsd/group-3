import React from "react";
import FeaturesSection from "../components/FeaturesSection";
import { motion } from "framer-motion";
const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <img
          src="/assets/hau-cover.jpg"
          className="hidden h-72 w-full object-cover object-center lg:block lg:h-96"
          alt=""
        />
        <div className="custom-container mt-12 space-y-4 text-center">
          <h1 className="text-primary text-4xl lg:text-5xl">About</h1>
          <p className="font-light text-neutral-400">
            We are a group of students passionate about{" "}
            <span className="text-green-base font-semibold">storytelling</span>{" "}
            and{" "}
            <span className="text-green-base font-semibold">
              meaningful writing
            </span>
            . This blog is a{" "}
            <span className="text-green-base font-semibold">
              collaborative project
            </span>{" "}
            created as part of our{" "}
            <span className="text-green-base font-semibold">1TWRITE-ITE</span>{" "}
            course, where we aim to use our voices to{" "}
            <span className="text-green-base font-semibold">spark thought</span>
            , <span className="text-green-base font-semibold">reflect</span> on
            real-life experiences, and express{" "}
            <span className="text-green-base font-semibold">
              perspectives that matter
            </span>
            .
          </p>
          <div className="my-8 w-full border-t border-neutral-400">
            <FeaturesSection />
          </div>{" "}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
