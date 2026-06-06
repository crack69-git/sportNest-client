import AllFacilityCard from "@/Components/Shared/AllFacilityCard";
import { auth } from "@/lib/auth";
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
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
export const metadata = {
  title: "All Facilities - SportNest",
  description:
    "Explore our extensive directory of sports facilities at SportNest. From state-of-the-art gyms to outdoor fields, find the perfect venue for your next game or practice session. Our comprehensive listings include detailed information, user reviews, and easy booking options. Whether you're looking for a local court or a professional stadium, SportNest has you covered. Start your search today and elevate your sports experience with us!",
};
const AllFacilities = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const fecilities = await fetch("http://localhost:5000/product", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await fecilities.json();
  return (
    <div className="bg-gray-10 pt-10 min-h-[calc(100vh-8rem)]">
      <div className="w-11/12 mx-auto">
        <h3 className="text-3xl font-bold">All Sports Facilities</h3>
        <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-5">
          Discover and book high-performance venues for your next match. From
          professional tennis courts to FIFA-standard pitches.
        </p>
        <div className="grid max-sm:grid-cols-1 grid-cols-6 gap-4 items-center bg-gray-300 dark:bg-gray-900 border p-6 rounded-3xl ">
          <SearchField
            aria-label=""
            name="search"
            className="max-sm:col-span-1 col-span-3 border rounded-lg"
          >
            <SearchField.Group>
              <SearchField.SearchIcon />
              <SearchField.Input className="" placeholder="Search..." />
              <SearchField.ClearButton />
            </SearchField.Group>
          </SearchField>
          <div className="col-span-1">
            <Select className="border rounded-lg" placeholder="Select one">
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <div className="col-span-1">
            <Select className="border rounded-lg" placeholder="Select one">
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  <ListBox.Item id="florida" textValue="Florida">
                    Florida
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="delaware" textValue="Delaware">
                    Delaware
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="california" textValue="California">
                    California
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="texas" textValue="Texas">
                    Texas
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="new-york" textValue="New York">
                    New York
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                  <ListBox.Item id="washington" textValue="Washington">
                    Washington
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <Button className="p-6 w-full bg-[#003057] rounded-lg">
            {" "}
            <CheckLine />
            Apply filters
          </Button>
        </div>
        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 gap-6 py-6">
          {/* //cards section */}
          {data.map((facility) => (
            <AllFacilityCard key={facility._id} facility={facility} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFacilities;
