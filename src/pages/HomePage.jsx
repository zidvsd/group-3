import React from "react";
import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
const HomePage = () => {
  return (
    <div className="custom-container space-y-12">
      <HeroSection />
      <CarouselSection />
    </div>
  );
};

export default HomePage;
