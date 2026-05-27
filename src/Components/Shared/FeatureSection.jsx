import React from "react";
import FeatureCardSection from "./FeatureCardSection";

const FeatureSection = () => {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <h2 className="text-3xl font-bold">Featured Facilities</h2>
      <div className="flex justify-between mb-10">
        <p className="text-gray-500 text-lg">
          Discover our top-rated facilities designed to meet all your sports and
          fitness needs.
        </p>
        <p className="underline font-bold">View All</p>
      </div>
      <div>
        <FeatureCardSection />
      </div>
    </div>
  );
};

export default FeatureSection;
