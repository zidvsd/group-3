import React from "react";
import { handleScroll } from "../utils/utils";
import { ChevronUp } from "lucide-react";
const ScrollTopButton = ({ linkId = "" }) => {
  return (
    <>
      <ChevronUp
        className="bg-primary hover-opacity size-8 animate-bounce cursor-pointer rounded-full text-white"
        onClick={() => handleScroll(linkId)}
      />
    </>
  );
};

export default ScrollTopButton;
