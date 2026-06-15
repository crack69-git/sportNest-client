import BokkingForm from "@/Components/Shared/BokkingForm";
import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { MapPin, User } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  console.log(token, id);
  const facility = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/product/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  console.log(facility);
  //   const facilityData = await facility.json();
  const data = await facility.json();
  console.log("data", data);

  return (
    <div className="bg-gray-100 dark:bg-gray-950 min-h-[calc(100vh-8rem)]">
      <div className="w-11/12 mx-auto pt-10">
        <div className="grid max-md:grid-cols-1 grid-cols-3 gap-5 pb-10">
          <div>
            <Image
              src={data?.imageLink}
              loading="lazy"
              alt="Turf Image"
              width={400}
              height={200}
              className="rounded-2xl mx-auto"
            />
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border">
            <h1 className="text-3xl font-bold">{data?.facilityname}</h1>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2">
              <MapPin></MapPin>
              {data?.location}
            </p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2">
              <User></User>Maximum {data?.capacity} People
            </p>
            <p className="text-gray-900 dark:text-gray-300 font-semibold mt-5">
              About This Page{" "}
            </p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2 mt-2">
              {data?.description}
            </p>
            <Separator className="my-5 bg-gray-300 " />
            <p className="font-semibold">
              <span className="text-gray-500">Type: </span>
              {data?.facilitytype}
            </p>
            <p className="font-semibold">
              <span className="text-gray-500">Hourly Rate: </span>${data?.price}
            </p>
            {/* <p className="font-semibold">
              <span className="text-gray-500">Type: </span>
              {data.facilitytype}
            </p> */}
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-5 border">
            <h4 className="font-semibold text-lg mb-5">Book yours Now</h4>
            <BokkingForm data={data}></BokkingForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
