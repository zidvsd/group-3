import React from "react";
import FeaturesSection from "../components/FeaturesSection";
const AboutPage = () => {
  return (
    <div>
      <img
        src="/assets/hau-cover.jpg"
        className="w-full h-72 lg:h-96 object-cover object-center"
        alt=""
      />
      <div className="custom-container text-center space-y-4 mt-8 ">
        <h1 className="text-3xl lg:text-5xl text-primary ">About Us</h1>
        <p className="text-neutral-400 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          vitae nibh aliquet, scelerisque nisl a, tincidunt nisi.
        </p>
        <div className="my-8 border-t border-neutral-400 w-full">
          <FeaturesSection />
        </div>{" "}
      </div>
    </div>
  );
};

export default AboutPage;
