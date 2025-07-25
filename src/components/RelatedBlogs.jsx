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
      <h2 className="text-3xl font-bold mb-8 text-primary">Related Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {related.map((article, index) => (
          <Link
            key={index}
            to={`/blogs/${slugify(article.title)}`}
            className="rounded-md bg-[#1f2233] hover:bg-[#2a2d3d] transition-colors duration-300 overflow-hidden shadow-lg"
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
              <h3 className="text-lg font-semibold text-blue-400 mb-1">
                {article.title?.trim() || "Untitled"}
              </h3>
              <p className="text-sm text-gray-400 mb-2">
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
