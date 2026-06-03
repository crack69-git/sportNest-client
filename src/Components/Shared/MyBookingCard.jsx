import { Button, Card, CloseButton, Separator } from "@heroui/react";
import Image from "next/image";
import React from "react";

const MyBookingCard = ({ data }) => {
  console.log(data);

  return (
    <>
      {data.map((booking) => (
        <Card
          key={booking.id}
          className="w-full items-stretch md:flex-row mb-3 "
        >
          <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
            <Image
              src={booking.image}
              fill
              // width={120}
              // height={120}

              alt="Image"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <Card.Header className="gap-1">
              <div className="flex items-center justify-between">
                <Card.Title className="pr-8 text-xl font-semibold">
                  {booking.facilityname}
                </Card.Title>
                <p className="flex flex-col text-xl font-semibold">
                  ${booking.totalPrice.toFixed(2)}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <Card.Description className="bg-red-700 text-white w-fit px-5 rounded-4xl">
                  {booking.status}
                </Card.Description>
                <Card.Description className="bg-sky-700 text-white w-fit px-5 rounded-4xl">
                  {booking.facilitytype}
                </Card.Description>
              </div>
              {/* <CloseButton
              aria-label="Close banner"
              className="absolute top-3 right-3"
            /> */}
            </Card.Header>
            <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-2 flex-wrap items-center justify-between ">
                <span className="text-sm font-medium text-foreground">
                  Players: {booking.capacity} People Max
                </span>
                <Separator orientation="vertical" />
                <span className="text-sm font-medium text-foreground">
                  Start Time: {booking.startTime}
                </span>
                <Separator orientation="vertical" />
                <span className="text-sm font-medium text-foreground">
                  Date: {booking.date}
                </span>
                <Separator orientation="vertical" />
                <span className="text-sm font-medium text-foreground">
                  Booked for: {booking.hours} Hours
                </span>
              </div>
              <Button className="w-full sm:w-auto bg-white text-red-600 border border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-300">
                Cencel Booking
              </Button>
            </Card.Footer>
          </div>
        </Card>
      ))}
    </>
  );
};

export default MyBookingCard;
