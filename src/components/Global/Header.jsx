"use client";
import React from "react";
import Logo from "@/components/Global/Logo";
import Link from "next/link";
import { header } from "@/data/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const Header = () => {
  const path = usePathname();
  const basePath = "/" + path.split("/").filter(Boolean).slice(0, 2).join("/");
  return (
    <div id="wrapper" className="redd fixed top-0 h-16 w-full p-2 tablet:px-[15%]">
      <div
        id="content"
        className="redd flex h-full w-full items-center justify-between border border-blue-600 bg-white/10 px-4  backdrop-blur-sm tablet:px-5"
      >
        <Link href={"/"} className="redd">
          <Logo />
        </Link>
        <div className="flex items-center justify-center gap-4 text-sm font-medium">
          {header.map((item, i) => {
            return (
              <Link
                className={cn("", {
                  "text-EgostixBlue": basePath === item.route,
                })}
                key={i}
                href={item.route}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
