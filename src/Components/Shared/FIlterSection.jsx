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
  const [facilityType, setFacilityType] = useState(initialFacilityType);

  useEffect(() => {
    setSearch(initialSearch);
    setFacilityType(initialFacilityType);
  }, [initialSearch, initialFacilityType]);

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (search && search.trim() !== "") {
      params.set("search", search.trim());
    }

    // Only append to query if a real filter choice is picked (and it's not "All")
    if (facilityType && facilityType !== "All" && facilityType.trim() !== "") {
      params.set("facilityType", facilityType.trim());
    }

    console.log("NAVIGATING TO:", `/all-facilities?${params.toString()}`);
    router.push(`/all-facilities?${params.toString()}`);
  };

  // Added "All" with an empty string key to drop the backend database filter
  const facilities = [
    { key: "All", label: "All Facilities" },
    { key: "Basketball", label: "Basketball" },
    { key: "Tennis", label: "Tennis" },
    { key: "Badminton", label: "Badminton" },
    { key: "Cricket", label: "Cricket" },
    { key: "SwimmingPool", label: "Swimming Pool" },
  ];

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-6 gap-4 items-center bg-gray-300 dark:bg-gray-900 border p-6 rounded-3xl">
      {/* SEARCH */}
      <SearchField
        aria-label="Search Facilities"
        className="col-span-3 border rounded-lg text-black dark:text-white"
        value={search}
        onChange={setSearch}
      >
        <SearchField.Group>
          <SearchField.SearchIcon />
          <SearchField.Input placeholder="Search..." />
          <SearchField.ClearButton />
        </SearchField.Group>
      </SearchField>

      {/* SELECT DROP-DOWN */}
      <Select
        aria-label="Select Facility Type"
        placeholder="Select Facility Type"
        className="border rounded-lg text-black dark:text-white"
        // Bind selection cleanly using an array structure
        selectedKeys={facilityType ? [facilityType] : ["All"]}
        onSelectionChange={(keys) => {
          // Pull key out directly from the collection array list instance safely
          const selectedValue = Array.from(keys)[0];
          console.log("DROPDOWN CHOSE:", selectedValue);
          setFacilityType(selectedValue ? String(selectedValue) : "All");
        }}
      >
        <Select.Trigger>
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>

        <Select.Popover>
          <ListBox aria-label="Facility Filter Selections">
            {facilities.map((item) => (
              <ListBox.Item key={item.key} id={item.key} textValue={item.label}>
                {item.label}
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* BUTTON */}
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
