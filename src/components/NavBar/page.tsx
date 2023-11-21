"use client";
import React, { FC, ReactNode, useState } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import { QuestionmarkIcon } from "@/public/icons/questionmark-icon";
import { LoveIcon } from "@/public/icons";
import { HiShoppingCart } from "react-icons/hi";
import Burger from "./Burger";

import { FaBarsStaggered, FaChevronRight } from "react-icons/fa6";

import { motion } from "framer-motion";
import { BiX } from "react-icons/bi";

interface iNavBar {
  children: ReactNode;
}

const NavBar: FC<iNavBar> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="h-[80px] sm:h-[50px] flex items-center justify-between px-4 lg:px-[5%] lg:py-3 shadow-sm">
        <div className="flex items-center justify-between w-1/3">
          <Link href={"/home"}>
            <Logo />
          </Link>

          <form action="nosubmit">
            <input
              type="search"
              placeholder="Search"
              className="border-weirdBrown sm:hidden border-2 px-3 h-[45px] w-[300px] sm:w-[200px] focus:outline-none rounded-[22.5px] focus:border-weirdBrown"
            />
          </form>
        </div>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center justify-between w-2/5">
          <Link href={"/home"}>
            <h5 className="text-weirdBrown text-[20px] font-normal">
              Home
            </h5>
          </Link>
          <Link href={"/shop"}>
          <h5 className="text-weirdBrown text-[20px] font-normal">
              Shop
            </h5>
          </Link>
          <Link href={"/"}>
          <h5 className="text-weirdBrown text-[20px] font-normal">
              Cart
            </h5>
          </Link>
          <Link href={"/"}>
          <h5 className="text-weirdBrown text-[20px] font-normal">
              About Us
            </h5>
          </Link>
          <Link href={"/login"}>
            <h5 className=" text-white hover:text-weirdBrown hover:bg-darkBrownGradient bg-weirdBrown px-4 py-2 rounded-lg text-[20px] font-normal">
              Login
            </h5>
          </Link>
        </div>
        <div className="hidden sm:block md:hidden" onClick={toggle}>
          <FaBarsStaggered size={"26px"} fill={"#A90041"} />
        </div>
      </div>
      <div
        className={`sm:flex sm:flex-col z-30 hidden ${
          open ? "sm:block left-0" : "sm:hidden -left-[100%]"
        } fixed overscroll-y-auto top-0 transform ease-linear duration-500 w-[100%] bg-white h-full shadow-md px-[5%] py-[5%]`}
      >
        <div className="flex justify-between items-center">
          <Link href={"/home"}>
            <Logo />
          </Link>

          <BiX size={"32px"} className="text-weirdBrown" onClick={toggle} />
        </div>

        <div className="flex flex-col items-center gap-5 mt-10">
          <Link
            href={"/"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            Home
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          <Link
            href={"/"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            Shop
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          <Link
            href={"/"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            Cart
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          <Link
            href={"/"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            About Us
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          <Link href={"/login"}>
            <h5 className=" text-white hover:text-weirdBrown mt-24 hover:bg-darkBrownGradient bg-weirdBrown px-10 py-2 rounded-lg text-[20px] font-normal">
              Login
            </h5>
          </Link>
          
        </div>
        <div>
          <p className=" mt-24 text-slate-950 text-base text-center font-normal leading-loose">
            ©{new Date().getFullYear()} YouGo. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
