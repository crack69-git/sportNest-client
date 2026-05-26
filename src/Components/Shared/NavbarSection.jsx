import React from "react";

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
    <div className="bg-[#003057] flex justify-between items-center text-white p-4 ">
      <div>
        <h3 className="text-2xl font-bold">SportsNest</h3>
      </div>
      <div>
        <ul className="flex space-x-4 font-semibold">{links}</ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavbarSection;
