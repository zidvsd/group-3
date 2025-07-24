import { Link } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify } from "../utils/utils";

const Cards = () => {
  const data = useArticlesData();

  return (
    <div className="w-full">
      {data
        .filter((item) => item.title && item["lead"] && item.img)
        .map((article, i) => (
          <div
            key={i}
            className="bg-white rounded-md shadow-lg overflow-hidden flex flex-col transform hover:scale-105 hover-utility"
          >
            <Link to={`/blogs/${slugify(article.title)}`}>
              <img
                src={article.img}
                alt={article.title}
                className="h-48 w-full object-cover"
              />
            </Link>
            <div className="p-5 flex flex-col items-start justify-start text-left">
              <p className="text-sm text-green-600 font-semibold mb-1">
                {article.author}
              </p>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {article["article-lead"]}
              </p>
              <Link
                to={`/blogs/${slugify(article.title)}`}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 hover-utility transition"
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
