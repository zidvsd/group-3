import React from "react";
import Cards from "../components/Cards";
import { motion } from "framer-motion";
const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="custom-container my-12 space-y-6 text-center">
        <h1 className="text-primary text-4xl lg:text-5xl">Blog</h1>
        <p className="font-light text-neutral-400">
          Our blog features eight carefully written articles, each carrying a
          <span className="text-green-base font-semibold"> unique </span> and
          <span className="text-green-base font-semibold">
            {" "}
            impactful{" "}
          </span>{" "}
          message. From
          <span className="text-green-base font-semibold">
            {" "}
            personal narratives{" "}
          </span>{" "}
          to social commentaries, every entry is crafted to
          <span className="text-green-base font-semibold"> inspire</span>,
          <span className="text-green-base font-semibold"> inform</span>, or
          <span className="text-green-base font-semibold"> challenge </span> the
          way we see the world. We hope our words resonate with you as much as
          they did with us while writing them.
        </p>
        <div className="my-8 w-full border-t border-neutral-400"></div>{" "}
        <Cards showPagination={false} />
      </div>
    </motion.div>
  );
};

export default BlogPage;
