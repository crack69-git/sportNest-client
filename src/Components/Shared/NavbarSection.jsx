"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavbarSection = () => {
  const [state, setState] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  // console.log(isPending);
  const users = session?.user;
  // console.log("users:", users);

  const links = (
    <>
      <Link href={"/"}>
        <li>Home</li>
      </Link>
      <Link href={"/all-facilities"}>
        <li>All Facilities</li>
      </Link>
      <Link href={"/my-booking"}>
        <li>My Bookings</li>
      </Link>
      <Link href={"/add-facility"}>
        <li>Add-Facility</li>
      </Link>
      <Link href={"/manage-facility"}>
        <li>Manage My Facilities</li>
      </Link>
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
        {isPending ? (
          <div className="flex items-center gap-2">
            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-6 h-6"></span>
            <p>Loading...</p>
          </div>
        ) : users ? (
          <div className="flex gap-3 items-center">
            <Link href="/">
              {users.image ? (
                <Image
                  src={users.image}
                  referrerPolicy="no-referrer"
                  alt="Profile Picture"
                  width={40}
                  height={40}
                  className="contain-content rounded-full"
                />
              ) : (
                <p className="p-2 bg-white text-black rounded-full">
                  {users.name[0]}
                </p>
              )}
            </Link>
            <button
              onClick={async () => {
                await authClient.signOut();
              }}
              className="bg-white hover:bg-gray-200 text-black py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link href="/login">
              <Button>Login</Button>
            </Link>
            <Link href="/register">
              <Button variant="secondary">Register</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavbarSection;
