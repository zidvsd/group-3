import { useParams } from "react-router-dom";
import useArticlesData from "../hook/useArticlesData";
import { slugify } from "../utils/utils";
import ScrollTopButton from "../components/ScrollTopButton";
import RelatedBlogs from "../components/RelatedBlogs";
const BlogPostPage = () => {
  const { slug } = useParams();
  const data = useArticlesData();

  const article = data.find((item) => slugify(item.title) === slug);
  const currentArticle = data.find(
    (article) => slugify(article.title) === slug,
  );

  if (!currentArticle) return <p>Post not found.</p>;
  if (!article) return <div className="p-6">Article not found.</div>;

  return (
    <div className="w-full">
      <div className="relative w-full">
        <img
          src={article.img}
          alt={article.title}
          className="h-72 w-full object-cover lg:h-96"
        />
        <span className="absolute bottom-0 left-2 bg-white p-2 text-neutral-500">
          Photo Courtesy of {article.credits}
        </span>
      </div>

      <div className="custom-container p-6">
        <div
          id="blog-post"
          className="flex flex-col items-start justify-between lg:flex-row lg:items-center"
        >
          <div className="flex flex-col space-y-8">
            <h1 className="max-w-md text-4xl font-bold">{article.title}</h1>
            <div className="w-1/4 border-2 border-t border-black"></div>
            <p className="mb-2 text-xl font-semibold text-green-600">
              {article.author}
            </p>
          </div>
          <h1 className="max-w-md items-end leading-8 text-neutral-500">
            {article.lead}
          </h1>
        </div>

        <div className="my-8 w-full border-t border-gray-300"></div>
        <p className="text-lg text-gray-700">{article["article-lead"]}</p>
      </div>

      {/* Article content */}
      <div className="space-y-4 pb-8">
        <article className="custom-container space-y-6 text-lg text-gray-800">
          {article.article.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </article>
        <div className="mx-auto w-full max-w-[1440px] border-t border-neutral-500"></div>
        {/* reference */}
        <article className="custom-container space-y-6 text-lg text-gray-500">
          <h1 className="text-primary text-2xl font-semibold"> References</h1>
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

      <RelatedBlogs articles={data} currentTitle={currentArticle.title} />
    </div>
  );
};

export default BlogPostPage;
