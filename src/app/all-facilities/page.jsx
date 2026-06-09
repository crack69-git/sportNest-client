import AllFacilityCard from "@/Components/Shared/AllFacilityCard";
import FacilityFilters from "@/Components/Shared/FIlterSection";

import {
  Label,
  SearchField,
  ListBox,
  Select,
  Button,
  Avatar,
  Card,
  Separator,
} from "@heroui/react";
import { CheckLine, Group, MapPin, Users } from "lucide-react";

import React from "react";
export const metadata = {
  title: "All Facilities - SportNest",
  description:
    "Explore our extensive directory of sports facilities at SportNest. From state-of-the-art gyms to outdoor fields, find the perfect venue for your next game or practice session. Our comprehensive listings include detailed information, user reviews, and easy booking options. Whether you're looking for a local court or a professional stadium, SportNest has you covered. Start your search today and elevate your sports experience with us!",
};
const AllFacilities = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const facilityType = params?.facilityType || "";

  const query = new URLSearchParams();
  if (search.trim()) query.append("search", search.trim());
  if (facilityType.trim()) query.append("facilityType", facilityType.trim());

  const facilities = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/product?${query.toString()}`,
  );
  const data = await facilities.json();
  console.log(data);

  return (
    <div className="bg-gray-10 pt-10 min-h-[calc(100vh-8rem)]">
      <div className="w-11/12 mx-auto">
        <h3 className="text-3xl font-bold">All Sports Facilities</h3>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-5">
          Discover and book high-performance venues for your next match.
        </p>
        <FacilityFilters search={search} facilityType={facilityType} />
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-6 py-6">
          {data && data.length > 0 ? (
            data.map((facility) => (
              <AllFacilityCard key={facility._id} facility={facility} />
            ))
          ) : (
            <p className="col-span-4 text-center py-12 text-gray-500 font-medium">
              No matches found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllFacilities;
