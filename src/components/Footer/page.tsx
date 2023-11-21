import React from "react";
import logo from "@/public/assets/you_go_logo.png";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-white w-full px-6 md:px-24 flex justify-between items-center">
        <div className="flex flex-col">
          <p className="text-4xl sm:text-2xl text-weirdBrown font-medium">Quick links</p>

          <div className="mt-5 flex flex-col gap-3">
            <Link className="text-purpleBrown text-[18px] sm:text-[16px]" href={"/home"}>
              Home
            </Link>
            <Link className="text-purpleBrown text-[18px] sm:text-[16px]" href={"/shop"}>
              Shop
            </Link>
            <Link className="text-purpleBrown text-[18px] sm:text-[16px]" href={"/"}>
              Cart
            </Link>
          </div>
        </div>
        <Image src={logo} alt="logo" className="w-[20vw] h-auto object-cover sm:hidden" />
      </div>

      <div className="w-full px-6 md:px-24">
        <div className="flex sm:flex-col justify-between items-center pt-3 sm:mt-10">
          <p className="paragraph text-black text-xs md:text-lg">
            ©{new Date().getFullYear()} YouGo. All rights reserved.
          </p>
          <div className="flex gap-4 sm:mt-5 sm:justify-between sm:mb-10">
            <Link
              href={""}
              className="paragraph text-purpleBrown text-xs md:text-lg"
            >
              Terms & Conditions
            </Link>
            <Link
              href={""}
              className="paragraph text-purpleBrown text-xs md:text-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
