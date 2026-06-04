import DeleteModal from "@/Components/Shared/DeleteModal";
import EditModal from "@/Components/Shared/EditModal";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { Star } from "lucide-react";
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
        <div className="grid grid-cols-4 items-center gap-5">
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
        <div className="py-10">
          <div className="py-5">
            <Table>
              <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-full">
                  <Table.Header>
                    <Table.Column isRowHeader>Facility Name</Table.Column>
                    <Table.Column>Location</Table.Column>
                    <Table.Column>Price/Hour</Table.Column>
                    <Table.Column>Action</Table.Column>
                  </Table.Header>
                  <Table.Body>
                    {facilities.map((facility, index) => (
                      <Table.Row key={index}>
                        <Table.Cell className="flex items-center gap-5">
                          <Image
                            src={facility.imageLink}
                            alt="Image"
                            width={100}
                            height={100}
                            className="rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-semibold text-lg">
                              {facility.facilityname}
                            </p>
                            <p className="bg-gray-100 w-fit px-3 rounded-4xl">
                              {facility.facilitytype}
                            </p>
                          </div>
                        </Table.Cell>
                        <Table.Cell>{facility.location}</Table.Cell>
                        <Table.Cell>${facility.price}.00</Table.Cell>
                        <Table.Cell>
                          <EditModal facility={facility} id={facility._id} />
                          <DeleteModal id={facility._id} />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Content>
              </Table.ScrollContainer>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageFacility;
