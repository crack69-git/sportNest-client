import { Button, Card, Separator } from "@heroui/react";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const AllFacilityCard = ({ facility }) => {
  const { facilitytype, facilityname, imageLink, location, price, capacity } =
    facility;
  return (
    <div className="flex flex-wrap gap-4">
      <Card className="w-full h-fit gap-2 border">
        <Image
          src={imageLink}
          alt="Turf Image"
          width={400}
          height={200}
          className="w-fit mx-auto h-36 rounded-2xl"
        />
        <Card.Header>
          <Card.Title className="bg-blue-200 w-fit p-2 rounded-4xl">
            {facilitytype}
          </Card.Title>
          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-2xl font-bold">{facilityname}</h4>
              <p className="flex items-center gap-3">
                <MapPin /> {location}
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">${price}/hour</h3>
            </div>
          </div>
        </Card.Header>
        <Separator className="my-2 bg-gray-300 h-px" />

        <div className="flex justify-between items-center">
          <p className="flex items-center gap-3">
            <Users />
            Upto {capacity} People
          </p>
          <Button className="bg-[#003057]">Book Now</Button>
        </div>

        <Card.Footer className="flex gap-2"></Card.Footer>
      </Card>
    </div>
  );
};

export default AllFacilityCard;
