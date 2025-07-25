import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import useArticlesData from "../hook/useArticlesData";
import { Link } from "react-router-dom";
import { slugify } from "../utils/utils";

const CarouselSection = () => {
  const articles = useArticlesData();

  return (
    <div className=" custom-container py-12">
      <h2 className="text-3xl font-bold mb-8 text-primary">More Articles</h2>
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
              <div className="select-none bg-white rounded-lg shadow-md border-neutral-200 border-[0.5px] md: overflow-hidden hover:shadow-xl transition-shadow duration-300 pb-12">
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-full object-cover"
                />
                <div className="p-4 space-y-2">
                  <p className="text-sm text-green-600 font-medium">
                    {article.author}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.lead}
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
