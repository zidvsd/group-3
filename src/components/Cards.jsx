import { Link } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify } from "../utils/utils";
import { truncateArticle } from "../utils/utils";

const Cards = () => {
  const data = useArticlesData();
  console.log("Articles fetched:", data);

  return (
    <>
      {data
        .filter((item) => item.title && item["lead"] && item.img)
        .map((article, i) => (
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
    </>
  );
};

export default Cards;
