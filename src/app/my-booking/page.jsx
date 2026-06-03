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
  console.log("session", userId);
  const fetchMyBookings = await fetch(
    `http://localhost:5000/mybookings/${userId}`,
  );
  const data = await fetchMyBookings.json();
  console.log(data);

  // const toogle = (
  //   <>
  //     <li className="bg-[#003057] text-white px-8 rounded-3xl">All</li>
  //     <li className="bg-[#003057] text-white px-8 rounded-3xl">Confirmed</li>
  //     <li className="bg-[#003057] text-white px-8 rounded-3xl">Pending</li>
  //   </>
  // );
  return (
    <div className="bg-gray-100 min-h-[calc(90vh-25px)] py-8">
      <div className="w-11/12 mx-auto">
        <h2 className="text-3xl font-bold">My Bookings</h2>
        <p className="text-lg text-gray-600 font-semibold mb-10">
          Keep track of your active game times and past victories.
        </p>
        <div>{/* <ul className="flex gap-5">{toogle}</ul> */}</div>
        <Separator className="my-5 bg-gray-300" />
        <div>
          <MyBookingCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default MyBookingPage;
