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
            className="bg-primary flex min-h-[400px] flex-col space-y-2 overflow-hidden rounded-md shadow-lg transition-colors duration-300 hover:bg-[#2a2d3d]"
          >
            {/* Image */}
            {article.img && (
              <img
                src={article.img}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            )}

            {/* Text content */}
            <div className="flex flex-grow flex-col px-6 py-4">
              <h3 className="mb-1 text-lg font-semibold text-gray-300">
                {article.title?.trim() || "Untitled"}
              </h3>
              <p className="mb-2 text-sm text-gray-400">
                by {article.author?.trim() || "Unknown author"}
              </p>

              <p className="mb-auto text-sm text-gray-500">
                {truncateArticle(
                  Array.isArray(article.article)
                    ? article.article.join(" ")
                    : article.article || "",
                )}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
