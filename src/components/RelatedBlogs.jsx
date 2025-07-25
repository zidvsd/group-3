import React from "react";
import { Link } from "react-router-dom";
import { slugify, truncateArticle } from "../utils/utils";

const RelatedBlogs = ({ articles, currentTitle }) => {
  const filtered = articles.filter((article) => article.title !== currentTitle);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  const related = shuffled.slice(0, 3);

  if (related.length === 0) return null;

  return (
    <div className="custom-container my-10">
      <h2 className="text-primary mb-8 text-3xl font-bold">Related Blogs</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {related.map((article, index) => (
          <Link
            key={index}
            to={`/blogs/${slugify(article.title)}`}
            className="overflow-hidden rounded-md bg-[#1f2233] shadow-lg transition-colors duration-300 hover:bg-[#2a2d3d]"
          >
            {/* Image */}
            {article.img && (
              <img
                src={article.img}
                alt={article.title}
                className="w-full object-cover"
              />
            )}

            {/* Text content */}
            <div className="p-4">
              <h3 className="mb-1 text-lg font-semibold text-white">
                {article.title?.trim() || "Untitled"}
              </h3>
              <p className="mb-2 text-sm text-gray-400">
                by {article.author?.trim() || "Unknown author"}
              </p>

              {/* Truncated description */}
              <p className="text-sm text-gray-300">
                {truncateArticle(article["article-lead"] || "")}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
