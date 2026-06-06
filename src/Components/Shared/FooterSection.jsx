import React from "react";

const FooterSection = () => {
  return (
    <footer className="mt-auto">
      <div className="grid grid-cols-1 text-center md:grid-cols-3 justify-between items-center p-4 bg-[#003057] dark:bg-[#011a30] text-white">
        <p className="text-2xl font-bold">SportNest</p>
        <p>© 2024 SportNest. All rights reserved.</p>
        <div className="text-lg font-semibold">
          facebook | twitter | instagram
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
