import React, { useState } from "react";
import { Link } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify, truncateArticle } from "../utils/utils";

const Cards = () => {
  const data = useArticlesData();
  const articles = data.filter(
    (item) => item.title && item["lead"] && item.img,
  );

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = articles.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      {/* Grid of cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {paginatedArticles.map((article, i) => (
          <div
            key={i}
            className="hover-utility flex h-full transform flex-col overflow-hidden rounded-md bg-white shadow-lg hover:scale-105"
          >
            <Link to={`/blogs/${slugify(article.title)}`}>
              <img
                src={article.img}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            </Link>
            <div className="flex h-full flex-col justify-between p-5 text-left">
              <div>
                <p className="text-green-base mb-1 text-sm font-semibold">
                  {article.author}
                </p>
                <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
                <p className="mb-4 line-clamp-3 min-h-[60px] text-sm text-gray-600">
                  {truncateArticle(article.article?.[0])}
                </p>
              </div>
              <Link
                to={`/blogs/${slugify(article.title)}`}
                className="hover-utility bg-green-base hover:bg-light-base w-fit rounded-md px-4 py-3 text-white transition"
              >
                Read full article
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`cursor-pointer rounded-md px-4 py-2 text-sm font-medium ${
              currentPage === page
                ? "bg-green-base text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default Cards;
