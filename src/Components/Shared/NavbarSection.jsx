import { Button } from "@heroui/react";
import Image from "next/image";

const NavbarSection = () => {
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
    <div className="flex justify-between items-center p-3 bg-[#003057] text-white">
      <div className="flex gap-2">
        <Image src="/logo.png" alt="Logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">SportNest</h2>
      </div>
      <div>
        <ul className="flex gap-4 ">{links}</ul>
      </div>
      <div className="flex gap-2">
        <Button>Login</Button>
        <Button variant="secondary">Register</Button>
      </div>
    </div>
  );
};

export default NavbarSection;
