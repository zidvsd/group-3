import React from "react";
import FeaturesSection from "../components/FeaturesSection";
const AboutPage = () => {
  return (
    <div>
      <img
        src="/assets/hau-cover.jpg"
        className="h-72 w-full object-cover object-center lg:h-96"
        alt=""
      />
      <div className="custom-container mt-8 space-y-4 text-center">
        <h1 className="text-primary text-3xl lg:text-5xl">About Us</h1>
        <p className="font-light text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae nibh aliquet, scelerisque nisl a, tincidunt nisi.
        </p>
        <div className="my-8 w-full border-t border-neutral-400">
          <FeaturesSection />
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutPage;
