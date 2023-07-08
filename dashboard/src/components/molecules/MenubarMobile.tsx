import React from "react";
import { Menu } from "@material-ui/icons";

export default function MenubarMobile({ setter }: any) {
  return (
    <nav className="md:hidden z-20 fixed top-0 left-0 right-0 h-[60px] bg-white flex [&>*]:my-auto px-4 border-b border-gray">
      <button
        className="text-4xl flex text-black"
        onClick={() => {
          setter((oldVal: boolean) => !oldVal);
        }}
      >
        <Menu />
      </button>
      <img
        src={"/logo.png"}
        alt="logo"
        width={20}
        height={20}
        className="ml-4"
      />
      <span className="font-bold ml-2">
        Dashboard <span className="text-[#E50914]">NETFLIX</span>
      </span>
    </nav>
  );
}
