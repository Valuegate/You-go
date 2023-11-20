"use client";
import React, { FC, ReactNode } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import { QuestionmarkIcon } from "@/public/icons/questionmark-icon";
import { LoveIcon } from "@/public/icons";
import { HiShoppingCart } from "react-icons/hi";
import Burger from "./Burger";

import { motion } from "framer-motion";

interface iNavBar {
  children: ReactNode;
}

const NavBar: FC<iNavBar> = ({ children }) => {
  return (
    <>
      <div className="h-[80px] sm:h-[50px] flex items-center justify-between px-4 lg:px-[5%] lg:py-3 shadow-sm">
        <div className="flex items-center justify-between w-1/3">
          <Link href={"/home"}>
            <Logo />
          </Link>

          <input
            type="text"
            placeholder="Search"
            className="border-weirdBrown border-2 px-3 h-[45px] w-[300px] sm:w-[200px] focus:outline-none rounded-[22.5px] focus:border-weirdBrown"
          />
        </div>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center justify-between w-1/2">
          <Link href={"/home"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              Home
            </motion.h5>
          </Link>
          <Link href={"/"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              About Us
            </motion.h5>
          </Link>
          <Link href={"/"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              Products
            </motion.h5>
          </Link>
          <Link href={"/shop"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              Shop
            </motion.h5>
          </Link>
          <Link href={"/"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              Cart
            </motion.h5>
          </Link>
          <Link href={"/shop"}>
            <motion.h5
              whileHover={{
                scale: 1.1,
              }}
              className="text-weirdBrown text-[20px] font-medium"
            >
              Contact Us
            </motion.h5>
          </Link>
        </div>
        <div className="hidden sm:block md:block">
          <Burger />
        </div>
      </div>
    </>
  );
};

export default NavBar;
