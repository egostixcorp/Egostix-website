import React from "react";

const Footer = () => {
  return (
    <div className="flex h-10 w-full items-center justify-between">
      <div className="px-[15%] text-xs flex items-center justify-center w-full">
        <p>
          Copyright © {new Date().getFullYear()} Egostix Engineering Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
