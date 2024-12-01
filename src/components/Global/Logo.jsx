import React from "react";
// import Ego from '/brand/egostix.png'
// import Image from "next/image";
const Logo = () => {
  return (
    <div className="redd flex h-16 w-32 items-center justify-center">
      {/* <Image
        alt="Egostix"
        src={"/brand/egostix.png"}
        width={500}
        height={500}
        className="h-full w-full object-cover"
      /> */}
      <h1 className="font-ego text-2xl font-extrabold text-EgostixBlue">
        Egostix
      </h1>
    </div>
  );
};

export default Logo;
