import React from "react";
import { handleScroll } from "../utils/utils";
import { ChevronUp } from "lucide-react";
const ScrollTopButton = ({ linkId = "" }) => {
  return (
    <>
      <ChevronUp
        className="text-white bg-primary rounded-full animate-bounce size-8 hover-opacity cursor-pointer"
        onClick={() => handleScroll(linkId)}
      />
    </>
  );
};

export default ScrollTopButton;
