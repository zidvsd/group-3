import React from "react";
import Cards from "./Cards";
const HeroSection = () => {
  return (
    <div className="custom-container mt-12 space-y-6 text-center">
      <h1 className="text-primary text-3xl lg:text-5xl">
        Welcome to our Blog.
      </h1>
      <p className="font-light text-neutral-400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        nibh aliquet, scelerisque nisl a, tincidunt nisi.
      </p>
      <div className="my-8 w-full border-t border-neutral-400"></div>{" "}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Cards />
      </div>
    </div>
  );
};

export default HeroSection;
