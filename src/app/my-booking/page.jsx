import MyBookingCard from "@/Components/Shared/MyBookingCard";
import { auth } from "@/lib/auth";

import { Separator } from "@heroui/react";
import { headers } from "next/headers";

import React from "react";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const userId = session?.user?.id;
  // console.log("session", userId);
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const fetchMyBookings = await fetch(
    `http://localhost:5000/mybookings/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  const data = await fetchMyBookings.json();

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-[calc(90vh-25px)] py-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold">My Bookings</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-semibold ">
          Keep track of your active game times and past victories.
        </p>
        <div>{/* <ul className="flex gap-5">{toogle}</ul> */}</div>
        <Separator className="my-5 bg-gray-300 dark:bg-gray-700" />
        <div>
          <MyBookingCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default MyBookingPage;
