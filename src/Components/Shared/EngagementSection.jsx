import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const EngagementSection = () => {
  return (
    <div className="bg-[#003057] mb-10 text-white rounded-lg py-10">
      <div className=" flex items-center  gap-10 w-11/12 mx-auto">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Built by Athletes, for Athletes
          </h2>
          <p className="font-semibold text-gray-300 w-11/12">
            SportNest isn't just a booking platform; it's the pulse of our local
            sports community. We bridge the gap between empty venues and eager
            players.
          </p>
          <div className="flex gap-3 my-5">
            <Button
              variant="secondary"
              className="rounded-lg flex flex-col py-15 px-20 gap-0"
            >
              <p className="text-2xl font-bold">10k+</p>
              <p>Games Booked</p>
            </Button>

            <Button
              variant="secondary"
              className="rounded-lg flex flex-col py-15 px-20 gap-0"
            >
              <p className="text-2xl font-bold">5K+</p>
              <p>Active Users</p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 items-center">
          <Image
            src="/img3.webp"
            alt="Engagement Image"
            width={500}
            height={300}
            className="row-span-2 h-2/3 rounded-lg shadow-lg"
          />
          <Image
            src="/img1.jpg"
            alt="Engagement Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/img2.webp"
            alt="Engagement Image"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default EngagementSection;
