import React from "react";
import Logo from "@/components/Global/Logo";
const Header = () => {
  return (
    <div id="wrapper" className="redd fixed top-0 h-16 w-full">
      <div
        id="content"
        className="flex h-full w-full items-center justify-between px-4 tablet:px-10"
      >
        <Logo />
        <h1>content</h1>
      </div>
    </div>
  );
};

export default Header;
