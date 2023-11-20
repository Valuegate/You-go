import React, { useState } from "react";
import RightNav from "./RightNav";
import Link from "next/link";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`w-8 h-8 absolute top-6 right-6 flex flex-col justify-between ${
          open ? "block" : "block"
        } md:hidden cursor-pointer z-20`}
        onClick={() => setOpen(!open)}
      >
        <div
          className={`w-10 h-1 bg-black rounded-full transform ${
            open ? "rotate-45" : "rotate-0"
          } transition-transform duration-300`}
        ></div>
        <div
          className={`w-10 h-1 bg-black rounded-full transform ${
            open ? "translate-x-1 opacity-1" : "translate-x-0 opacity-100"
          } transition-transform duration-300`}
        ></div>
        <div
          className={`w-10 h-1 bg-black rounded-full transform ${
            open ? "-rotate-45" : "rotate-0"
          } transition-transform duration-300`}
        ></div>
      </div>
      <RightNav open={open} btnText={"Logout"}>
        <Link href={"/signupselect"}>
          <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white">
            Login
          </button>
        </Link>
      </RightNav>
    </>
  );
};

export default Burger;
