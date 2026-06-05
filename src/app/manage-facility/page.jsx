import DeleteModal from "@/Components/Shared/DeleteModal";
import EditModal from "@/Components/Shared/EditModal";
import { auth } from "@/lib/auth";
import { Button, Card, CloseButton, Table } from "@heroui/react";
import { MapPin, Star } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const ManageFacility = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers
  });

  const fetchFacilities = await fetch(
    `http://localhost:5000/manageFacilities/${session.user.id}`,
  );

  const facilities = await fetchFacilities.json();
  console.log(facilities);

  return (
    <div className="bg-gray-100 min-h-[calc(90vh-25px)] py-5">
      <div className="w-11/12 mx-auto">
        <div className="grid max-sm:grid-cols-2 grid-cols-4 items-center gap-5">
          <div className="bg-white rounded-lg p-5 w-full text-center border">
            <p className="font-semibold text-gray-600">Total Facilities</p>
            <p className="text-2xl font-bold">{facilities.length}</p>
          </div>
          <div className="bg-white rounded-lg p-5   w-full text-center border">
            <p className="font-semibold text-gray-600">Active Booking</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white rounded-lg p-5   w-full text-center border">
            <p className="font-semibold text-gray-600">Revenue</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-white rounded-lg p-5   w-full text-center flex flex-col items-center gap-2 border">
            <p className="font-semibold text-gray-600">Rating</p>
            <p className="text-2xl font-bold flex items-center gap-2">
              4.5<Star></Star>
            </p>
          </div>
        </div>
        <p className="py-10 text-2xl font-bold">Manage Your Facilities</p>
        <div>
          <div className="py-5">
            {facilities.length > 0 ? (
              facilities.map((facility) => (
                <Card
                  key={facility._id}
                  className="w-full items-stretch md:flex-row"
                >
                  <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
                    <Image
                      src={facility.imageLink}
                      alt="Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3">
                    <Card.Header className="gap-1">
                      <Card.Title className="pr-8 text-xl font-semibold">
                        {facility.facilityname}
                      </Card.Title>
                      <Card.Description className="flex items-center gap-2">
                        <MapPin></MapPin>
                        Location: {facility.location}
                      </Card.Description>
                    </Card.Header>
                    <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          Maximum Capacity: {facility.capacity}
                        </span>
                        <span className="text-xm text-muted">
                          Price: ${facility.price} per hour
                        </span>
                      </div>
                      <div>
                        <EditModal
                          facility={facility}
                          id={facility._id}
                        ></EditModal>
                        <DeleteModal id={facility._id}></DeleteModal>
                      </div>
                    </Card.Footer>
                  </div>
                </Card>
              ))
            ) : (
              <p>No facilities found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFacility;
