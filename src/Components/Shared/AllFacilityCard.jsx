import { Button, Card, Separator } from "@heroui/react";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AllFacilityCard = ({ facility }) => {
  const {
    _id,
    facilitytype,
    facilityname,
    imageLink,
    location,
    price,
    capacity,
  } = facility;
  console.log(_id);
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="w-full h-full gap-2 border">
        <Image
          src={imageLink}
          alt="Turf Image"
          width={400}
          height={200}
          className="w-fit mx-auto h-36 rounded-2xl"
        />
        <Card.Header>
          <Card.Title className="bg-blue-200 w-fit px-4 mt-4 rounded-4xl">
            {facilitytype}
          </Card.Title>
          <div className="flex justify-between items-start ">
            <div className="min-h-20">
              <h4 className="text-2xl font-bold">{facilityname}</h4>
              <p className="flex items-center gap-3">
                <MapPin /> {location}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">${price}/hour</h3>
            </div>
          </div>
        </Card.Header>
        <Separator className="my-2 bg-gray-300 h-px" />

        <div className="flex justify-between items-center">
          <p className="flex items-center gap-3">
            <Users />
            Upto {capacity} People
          </p>
          <Link href={`/all-facilities/${_id}`}>
            <Button className="bg-[#003057]">Book Now</Button>
          </Link>
        </div>

        <Card.Footer className="flex gap-2"></Card.Footer>
      </Card>
    </div>
  );
};

export default AllFacilityCard;
