import React from "react";
// import Ego from '/brand/egostix.png'
import Image from "next/image";
const Logo = () => {
  return <div className="redd h-16 w-32">
    <Image alt="Egostix" src={'/brand/egostix.png'} width={500} height={500} className="w-full h-full object-cover"/>
  </div>;
};

export default Logo;
