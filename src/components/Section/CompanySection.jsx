import Image from "next/image";
import React from "react";

const CompanySection = () => {
  return (
    <div className="reds minh-screen flex w-full flex-col items-center justify-center">
      <h1 className="w-full text-left text-2xl tablet:text-3xl laptop:text-6xl">
        <span className="font-ego">Our</span> Innovations
      </h1>
      <div className="flex h-fit w-full items-center justify-center laptop:h-96">
        <div className="w-full overflow-hidden border bg-green-600 laptop:h-96">
          <Image
            src={"/product/exelth-green-white.png"}
            alt=""
            width={1000}
            height={1000}
            className="size-full object-contain"
          />
        </div>
        <div className="flex h-full w-full items-center justify-center p-2 laptop:p-20">
          <p className="text-sm italic text-black tablet:text-3xl laptop:text-5xl">
            “Where healthcare becomes connected, intelligent, and human again.”
          </p>
        </div>
      </div>
      <div className="flex w-full items-center justify-center laptop:h-96">
        <div className="h-full w-full flex items-center justify-center p-2 laptop:p-20">
          <p className="text-sm italic text-black tablet:text-3xl laptop:text-5xl">
            “Where imagination meets intelligence — and ideas take form.”
          </p>
        </div>
        <div className="w-full overflow-hidden border laptop:h-96">
          <Image
            src={"/product/egostix-media-trans.png"}
            alt=""
            width={1000}
            height={1000}
            className="size-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanySection;
