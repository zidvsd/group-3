import React from "react";
import Cards from "./Cards";
const HeroSection = () => {
  return (
    <div className="text-center custom-container space-y-6 mt-12 ">
      <h1 className="text-3xl lg:text-5xl text-primary ">
        Welcome to our Blog.
      </h1>
      <p className="text-neutral-400 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae
        nibh aliquet, scelerisque nisl a, tincidunt nisi.
      </p>
      <div className="my-8 border-t border-neutral-400 w-full"></div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Cards />
      </div>
    </div>
  );
};

export default HeroSection;
