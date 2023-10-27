"use client"
import React, { FC } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import { QuestionmarkIcon } from "@/public/icons/questionmark-icon";
import { LoveIcon } from "@/public/icons";
import { HiShoppingCart } from "react-icons/hi";
import Burger from "./Burger";

interface iNavBar {
  btnText: string;
}

const NavBar: FC<iNavBar> = ({ btnText }) => {
  return (
    <>
      <div className="h-[80px] flex items-center justify-between px-4 lg:px-24 lg:py-3 border-b border-b-white-5 ">
        <div>
          <Link href={"/home"}>
            <Logo />
          </Link>
        </div>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center gap-4">
          <Link href={"/home"}>
            <h5 className="typo text-light-black-5">Home</h5>
          </Link>
          <Link href={"/shop"}>
            <h5 className="typo text-light-black-5">Shop</h5>
          </Link>
        </div>

        <div className="hidden md:flex md:items-center lg:flex lg:items-center gap-6">
          <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
            <Link href={"#"}>
            <QuestionmarkIcon />
          </Link>
          </span>
          <Link href={"#"}>
          <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
            <LoveIcon color="white" />
          </span>
          </Link>
          <Link href={"#"}>
          <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
            <HiShoppingCart className="text-white w-[19px] h-[19px]" />
          </span>
          </Link>
          <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
            {btnText}
          </button>
        </div>
        <Burger />
      </div>
    </>
  );
}

export default NavBar;
