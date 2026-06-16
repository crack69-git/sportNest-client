"use client";

import { Button, ListBox, SearchField, Select } from "@heroui/react";
import { CheckLine } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const FacilityFilters = ({
  search: initialSearch = "",
  facilityType: initialFacilityType = "",
}) => {
  const router = useRouter();

  const [search, setSearch] = useState(initialSearch);
  const [facilityType, setFacilityType] = useState(
    initialFacilityType || "All",
  );

  useEffect(() => {
    setSearch(initialSearch);
    setFacilityType(initialFacilityType || "All");
  }, [initialSearch, initialFacilityType]);

  const facilities = [
    { key: "All", label: "All Facilities" },
    { key: "Football", label: "Football" },
    { key: "Basketball", label: "Basketball" },
    { key: "Tennis", label: "Tennis" },
    { key: "Badminton", label: "Badminton" },
    { key: "Cricket", label: "Cricket" },
    { key: "SwimmingPool", label: "Swimming Pool" },
  ];

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (facilityType && facilityType !== "All") {
      params.set("facilityType", facilityType);
    }

    console.log("Search:", search);
    console.log("Facility Type:", facilityType);
    console.log("Navigate:", `/all-facilities?${params.toString()}`);

    router.push(`/all-facilities?${params.toString()}`);
  };

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-6 gap-4 items-center bg-gray-300 dark:bg-gray-900 border p-6 rounded-3xl">
      {/* Search */}
      <SearchField
        aria-label="Search Facilities"
        className="col-span-3 border rounded-lg text-black dark:text-white"
        value={search}
        onChange={setSearch}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search facilities..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* Select */}
      <Select
        aria-label="Select Facility Type"
        placeholder="Select Facility Type"
        selectedKeys={new Set([facilityType])}
        onSelectionChange={(keys) => {
          const value = Array.from(keys)[0];
          setFacilityType(String(value));
        }}
        className="border rounded-lg text-black dark:text-white"
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox aria-label="Facility Types">
            {facilities.map((item) => (
              <ListBox.Item key={item.key} id={item.key} textValue={item.label}>
                {item.label}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* Button */}
      <Button
        onPress={handleFilter}
        className="p-6 w-full bg-[#003057] rounded-lg text-white font-semibold"
      >
        <CheckLine />
        Apply Filters
      </Button>
    </div>
  );
};

export default FacilityFilters;
