import { Link } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify } from "../utils/utils";
import { truncateArticle } from "../utils/utils";
const Cards = () => {
  const data = useArticlesData();

  return (
    <div className="w-full">
      {data
        .filter((item) => item.title && item["lead"] && item.img)
        .map((article, i) => (
          <div
            key={i}
            className="hover-utility flex transform flex-col overflow-hidden rounded-md bg-white shadow-lg hover:scale-105"
          >
            <Link to={`/blogs/${slugify(article.title)}`}>
              <img
                src={article.img}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            </Link>
            <div className="flex flex-col items-start justify-start p-5 text-left">
              <p className="text-green-base mb-1 text-sm font-semibold">
                {article.author}
              </p>
              <h2 className="mb-2 text-xl font-bold">{article.title}</h2>
              <p className="mb-4 text-sm text-gray-600">
                {truncateArticle(article.article?.[0])}
              </p>
              <Link
                to={`/blogs/${slugify(article.title)}`}
                className="hover-utility bg-green-base hover:bg-light-base rounded-md px-4 py-2 text-white transition"
              >
                Read full article
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Cards;
