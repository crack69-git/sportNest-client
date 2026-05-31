import AddFacility from "@/Components/Shared/AddFacility";
import { Separator } from "@heroui/react";
import { BadgeCheck, Info, Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

const AddFacilityPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto grid grid-cols-3  gap-10 py-10">
        <div className="col-span-1">
          <h2 className="text-3xl font-bold">Expand Your Reach</h2>
          <p className="text-lg font-medium mb-5 text-gray-600">
            List your facility on SportNest and connect with thousands of
            athletes looking for the perfect place to train, compete, and grow.
          </p>
          <Image
            src="/turf.jpg"
            loading="eager"
            alt="Turf Image"
            width={600}
            height={400}
            className="rounded-2xl"
          />
          <div className="bg-gray-200 mt-5 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-red-400 h-8 w-8"></BadgeCheck>
              <div>
                <p className="font-bold">Owner Account Verified</p>
                <p>demo@gmail.com</p>
              </div>
            </div>
            <Separator className="my-4 bg-gray-300 h-px" />
            <div className="flex items-center gap-3">
              <Info className="text-blue-400 h-10 w-10" />
              <p>
                Your facility will be reviewed by our team within 24 hours of
                submission.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white rounded-2xl p-10">
          <AddFacility />
        </div>
      </div>
    </div>
  );
};

export default AddFacilityPage;
