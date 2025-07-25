import React from "react";
import { blogFeatures } from "../../public/data/features";

const FeaturesSection = () => {
  return (
    <section className="py-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {blogFeatures.map((feature, index) => (
          <div
            key={index}
            className="hover:bg-primary hover-utility flex h-full flex-col items-start rounded-xl bg-gray-900 p-6 text-left text-white lg:min-h-[300px] lg:items-center lg:justify-center lg:text-center"
          >
            <feature.icon className="mb-4 size-12 text-blue-400" />
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
