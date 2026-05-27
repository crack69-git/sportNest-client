"use client";
import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const NavbarSection = () => {
  const [state, setState] = useState(false);
  const links = (
    <>
      <li>Home</li>
      <li>All Facilities</li>
      <li>My Bookings</li>
      <li>Add-Facility</li>
      <li>Manage My Facilities</li>
    </>
  );
  return (
    <div className="flex  items-center justify-between   p-3 bg-[#003057] text-white">
      <div className="flex items-center gap-2">
        <div className="cursor-pointer max-[928px]:block hidden">
          <Menu onClick={() => setState(!state)}></Menu>
          {state ? (
            <div className="z-20 absolute top-16 left-0 bg-[#003057] text-white p-4 ">
              <ul className="flex flex-col gap-2">{links}</ul>
            </div>
          ) : null}
        </div>
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">SportNest</h2>
      </div>
      <div>
        <ul className="flex gap-4 max-[928px]:hidden">{links}</ul>
      </div>
      <div className="flex gap-2 max-sm:mt-5">
        <Button>Login</Button>
        <Button variant="secondary">Register</Button>
      </div>
    </div>
  );
};

export default NavbarSection;
