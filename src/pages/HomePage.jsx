import React from "react";
import HeroSection from "../components/HeroSection";
import CarouselSection from "../components/CarouselSection";
import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="custom-container space-y-4">
        <HeroSection />
        <CarouselSection />
      </div>
    </motion.div>
  );
};

export default HomePage;
