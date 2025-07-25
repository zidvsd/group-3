import React from "react";
import { blogFeatures } from "../../public/data/features";

const FeaturesSection = () => {
  return (
    <section className=" py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
        {blogFeatures.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left lg:justify-center lg:text-center lg:min-h-[300px] lg:items-center h-full rounded-xl bg-gray-900 p-6 text-white "
          >
            <feature.icon className="mb-4 size-12 text-blue-400" />
            <h3 className="mb-2 text-lg font-semibold ">{feature.title}</h3>
            <p className="text-sm text-gray-300 ">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
