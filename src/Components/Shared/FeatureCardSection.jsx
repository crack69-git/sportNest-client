import { Button, Card, Separator } from "@heroui/react";
import { MapPin, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const FeatureCardSection = () => {
  return (
    <div className="gap-5 grid grid-cols-3 mb-10">
      <div>
        <Card className="w-full border-2" variant="default">
          <Card.Header>
            <Image
              src="/bg.webp"
              alt="Card Image"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="flex justify-between items-center my-5">
              <Card.Title className="text-3xl font-bold">
                Apex Scocer Arena
              </Card.Title>
              <Card.Title className="text-xl font-bold text-[#FF5F05]">
                $<span>35</span>/hour
              </Card.Title>
            </div>
            <Card.Description className="flex items-center gap-2">
              <MapPin />
              <span>Downtown, New York</span>
            </Card.Description>
          </Card.Header>
          <Separator className="my-4" />
          <Card.Content className="flex flex-row justify-between items-center">
            <p className="flex gap-2">
              {" "}
              <Users />
              Upto 12 players
            </p>
            <Button className="rounded-lg">Book Now</Button>
          </Card.Content>
        </Card>
      </div>
      <div>
        <Card className="w-full border-2" variant="default">
          <Card.Header>
            <Image
              src="/bg.webp"
              alt="Card Image"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="flex justify-between items-center my-5">
              <Card.Title className="text-3xl font-bold">
                Apex Scocer Arena
              </Card.Title>
              <Card.Title className="text-xl font-bold text-[#FF5F05]">
                $<span>35</span>/hour
              </Card.Title>
            </div>
            <Card.Description className="flex items-center gap-2">
              <MapPin />
              <span>Downtown, New York</span>
            </Card.Description>
          </Card.Header>
          <Separator className="my-4" />
          <Card.Content className="flex flex-row justify-between items-center">
            <p className="flex gap-2">
              {" "}
              <Users />
              Upto 12 players
            </p>
            <Button className="rounded-lg">Book Now</Button>
          </Card.Content>
        </Card>
      </div>
      <div>
        <Card className="w-full border-2" variant="default">
          <Card.Header>
            <Image
              src="/bg.webp"
              alt="Card Image"
              width={400}
              height={200}
              className="rounded-lg w-full object-cover"
            />
            <div className="flex justify-between items-center my-5">
              <Card.Title className="text-3xl font-bold">
                Apex Scocer Arena
              </Card.Title>
              <Card.Title className="text-xl font-bold text-[#FF5F05]">
                $<span>35</span>/hour
              </Card.Title>
            </div>
            <Card.Description className="flex items-center gap-2">
              <MapPin />
              <span>Downtown, New York</span>
            </Card.Description>
          </Card.Header>
          <Separator className="my-4" />
          <Card.Content className="flex flex-row justify-between items-center">
            <p className="flex gap-2">
              {" "}
              <Users />
              Upto 12 players
            </p>
            <Button className="rounded-lg">Book Now</Button>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCardSection;
