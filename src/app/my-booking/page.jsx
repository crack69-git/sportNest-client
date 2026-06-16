import MyBookingCard from "@/Components/Shared/MyBookingCard";
import { auth } from "@/lib/auth";

import { Separator } from "@heroui/react";
import { headers } from "next/headers";

import React from "react";
export const metadata = {
  title: "My Booking - SportNest",
  description:
    "View and manage your sports facility bookings with ease on SportNest. Access your personalized dashboard to see all your upcoming reservations, past bookings, and current statuses. Whether you're tracking your next game or reviewing your booking history, SportNest provides a seamless experience to keep you organized and informed. Stay on top of your sports schedule and never miss a match with our intuitive booking management system.",
};
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
    `${process.env.NEXT_PUBLIC_SERVER_URL}/mybookings/${userId}`,
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
