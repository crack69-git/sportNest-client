import React from "react";
import AllFacilityCard from "./AllFacilityCard";

const FeatureCardSection = async () => {
  const fetchData = await fetch("http://localhost:5000/product");
  const data = await fetchData.json();
  return (
    <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10">
      {data.slice(0, 3).map((facility) => (
        <AllFacilityCard key={facility._id} facility={facility} />
      ))}
    </div>
  );
};

export default FeatureCardSection;
