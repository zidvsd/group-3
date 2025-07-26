import React from "react";
import Cards from "./Cards";
const HeroSection = () => {
  return (
    <div className="custom-container mt-12 space-y-6 text-center">
      <h1 className="text-primary text-4xl lg:text-5xl">
        Welcome to our Blog.
      </h1>
      <p className="font-light text-neutral-400">
        Our blog consists of
        <span className="text-green-base font-semibold"> eight articles</span>,
        all aiming to deliver
        <span className="text-green-base font-semibold"> impactful </span>
        messages. This project is in partial fulfillment of our
        <span className="text-green-base font-semibold"> 1TWRITE-ITE </span>
        course.
      </p>
      <div className="my-8 w-full border-t border-neutral-400">
        <Cards />
      </div>{" "}
    </div>
  );
};

export default HeroSection;
