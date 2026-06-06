import React from "react";
import { Button, Card } from "@heroui/react";
import {
  IdCard,
  MonitorCheck,
  ShieldCheck,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import MotionButtom from "./MotionButtom";

const HeroSection = () => {
  return (
    <div>
      <div>
        <div
          style={{
            backgroundImage: "url('/bg.webp')",
            backgroundSize: "cover",
            height: "60vh",
            backgroundRepeat: "no-repeat",
          }}
          className="relative h-[500px]"
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            aria-hidden="true"
          />
          <div className="relative contain z-10 flex items-center gap-8 w-11/12 mx-auto justify-center h-full p-8 text-white">
            <div className="max-[1168px]:text-center max-[1168px]:items-center flex flex-col gap-5">
              <p className="bg-blue-900 w-fit max-sm:hidden py-2 px-5 rounded-3xl font-semibold ">
                Ready to Perform
              </p>
              <h1 className="max-sm:text-4xl text-7xl mt-5 font-bold text-white">
                Unleash Your Game
              </h1>
              <p className="mt-2">
                Premium sports facilities at your fingertips. Discover
                high-performance venues designed for precision, momentum, and
                your next big win.
              </p>
              <div className="flex items-center max-sm:mt-2 gap-3 mt-5">
                <MotionButtom></MotionButtom>
              </div>
            </div>
            <div className="flex gap-4 max-[1168px]:hidden">
              <div className="relative top-9">
                <Card className="w-100 bg-gray-700 p-7 ">
                  <Card.Header>
                    <Card.Title className="text-white">
                      <MonitorCheck className="w-10 h-10" />
                      <p className="text-4xl text-orange-500">500+</p>
                    </Card.Title>
                    <Card.Description className="text-gray-300 text-xl">
                      Active Courts: Over 500 state-of-the-art sports facilities
                      available for booking, ensuring you find the perfect venue
                      for your game.
                    </Card.Description>
                  </Card.Header>
                </Card>
              </div>
              <div>
                <Card className="w-100 bg-gray-800 p-7">
                  <Card.Header>
                    <Card.Title className="text-white">
                      <IdCard className="w-10 h-10" />
                      <p className="text-4xl text-orange-500"> 100%</p>
                    </Card.Title>
                    <Card.Description className="text-gray-300 text-xl">
                      Verified Users: Our platform boasts a 200% increase in
                      verified users, ensuring a secure and trustworthy
                      community for all your sports bookings.
                    </Card.Description>
                  </Card.Header>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
