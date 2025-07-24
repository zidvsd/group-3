import { useParams } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify } from "../utils/utils";
import ScrollTopButton from "../components/ScrollTopButton";
import RelatedBlogs from "../components/RelatedBlogs";
const BlogPostPage = () => {
  const { slug } = useParams();
  const data = useArticlesData();

  const article = data.find((item) => slugify(item.title) === slug);

  if (!article) return <div className="p-6">Article not found.</div>;

  return (
    <div className="w-full">
      <div className="w-full relative ">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-72 lg:h-96 object-cover"
        />
        <span className="absolute bottom-0 left-2 bg-white p-2 text-neutral-500">
          Photo Courtesy of {article.credits}
        </span>
      </div>

      <div className="p-6 custom-container">
        <div
          id="blog-post"
          className="flex flex-col lg:flex-row justify-between items-start lg:items-center"
        >
          <div className="flex flex-col space-y-8">
            <h1 className="text-4xl font-bold max-w-md">{article.title}</h1>
            <div className="border-t border-2 border-black w-1/4"></div>
            <p className="text-green-600 font-semibold mb-2 text-xl">
              {article.author}
            </p>
          </div>
          <h1 className="items-end max-w-md leading-8 text-neutral-500">
            {article.lead}
          </h1>
        </div>

        <div className="my-8 border-t border-gray-300 w-full"></div>
        <p className="text-gray-700 text-lg">{article["article-lead"]}</p>
      </div>

      {/* Article content */}
      <div className="space-y-4 pb-8">
        <article className="custom-container space-y-6 text-lg text-gray-800">
          {article.article.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
        <div className="border-t  border-neutral-500 w-full max-w-[1440px] mx-auto"></div>
        {/* reference */}
        <article className="custom-container space-y-6 text-lg text-gray-500">
          <h1 className="font-semibold text-2xl text-primary "> References</h1>
          {article.references.map((reference, index) => (
            <p className="text-wrap break-words" key={index}>
              {reference}
            </p>
          ))}
        </article>
        <div className="flex items-center justify-center">
          <ScrollTopButton linkId="blog-post" />
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
