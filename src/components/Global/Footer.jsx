import React from "react";

const Footer = () => {
  return (
    <div className="flex h-10 w-full items-center justify-between px-10">
      <div className="text-xs">
        <p>
          Copyright © {new Date().getFullYear()} Egostix Engineering Pvt. Ltd.
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
