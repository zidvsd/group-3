import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useArticlesData from "../hook/useArticlesData";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";
import { truncateArticle } from "../utils/utils";
const CarouselSection = () => {
  const articles = useArticlesData();

  return (
    <div className="custom-container py-12">
      <h2 className="text-primary mb-4 text-3xl font-bold">More Articles</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        navigation
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <Link to={`/blogs/${slugify(article.title)}`}>
              <div className="md: overflow-hidden rounded-lg border-[0.5px] border-neutral-200 bg-white pb-12 shadow-md transition-shadow duration-300 select-none hover:shadow-xl">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full object-cover"
                />
                <div className="space-y-2 p-4">
                  <p className="text-green-base text-sm font-medium">
                    {article.author}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {article.title}
                  </h3>
                  <p className="line-clamp-3 text-sm text-gray-500">
                    {truncateArticle(
                      Array.isArray(article.article)
                        ? article.article.join(" ")
                        : article.article || "",
                    )}
                  </p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSection;
