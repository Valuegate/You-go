import React from "react";
import logo from "@/public/assets/yougo_logo.png";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#494848] w-full flex px-24 py-8">
        <div className="flex justify-between">
          <div className="w-[38%]">
            <div className="bg-white w-[69px] h-[96px] flex items-center justify-center ">
              <Image src={logo} alt="Logo" className="w-[69px] h-[96px]" />
            </div>
            <p className="text-white mt-3 font-normal text-base">
              Kindly click on the social media icon below to follow us and know more about us.Thank you
            </p>

            <form className="border-none h-[48px] round flex overflow-hidden mb-4 mt-4">
              <input
                className="flex-grow border-0 pl-4"
                type="email"
                placeholder="Enter your email"
              />
              <button className="flex-shrink-0 text-white bg-primary border-0 font-semibold w-[7rem] text-lg">
                Subscribe
              </button>
            </form>

            <h2 className="text-white font-bold text-base">Follow Us</h2>

            <div className="flex w-full gap-4 mt-4">
              <Link href="#">
                <span className="flex justify-center items-center rounded-full bg-primary w-[40px] h-[40px]">
                  <FaLinkedinIn className="text-white" />
                </span>
              </Link>
              <Link href="#">
                <span className="flex justify-center items-center rounded-full bg-primary w-[40px] h-[40px]">
                  <BiLogoInstagramAlt className="text-white" />
                </span>
              </Link>
              <Link href="#">
                <span className="flex justify-center items-center rounded-full bg-primary w-[40px] h-[40px]">
                  <FaTwitter className="text-white" />
                </span>
              </Link>
              <Link href="#">
                <span className="flex justify-center items-center rounded-full bg-primary w-[40px] h-[40px]">
                  <FaFacebookF className="text-white" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex justify-between w-[54%]">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white text-basetext-white mb-3 font-bold">
                  Shop
                </p>
                <p className="text-white font-normal text-base">Shop Us</p>
                <p className="text-white font-normal text-base">Shop Us</p>
                <p className="text-white font-normal text-base">Shop Us</p>
              </div>
              <div className="">
                <p className="text-white mb-3 font-bold">About</p>
                <p className="text-white font-normal text-base">About Us</p>
                <p className="text-white font-normal text-base">About Us</p>
                <p className="text-white font-normal text-base">About Us</p>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-white mb-3 font-bold">Sell</p>
                <p className="text-white font-normal text-base">Click to sell</p>
                <p className="text-white font-normal text-base">Click to sell</p>
                <p className="text-white font-normal text-base">Click to sell</p>
              </div>
              <div className="">
                <p className="text-white mb-3 font-bold">Terms</p>
                <p className="text-white font-normal text-base">Terms and Condition</p>
                <p className="text-white font-normal text-base">Terms and Condition</p>
                <p className="text-white font-normal text-base">Terms and Condition</p>
              </div>
            </div>
            <div className="h-full">
              <div>
                <p className="text-white mb-3 font-bold">Help</p>
                <p className="text-white">Contact for help</p>
                <p className="text-white">Contact for help</p>
                <p className="text-white">Contact for help</p>
              </div>
            </div>
          </div>
          </div>
      </div>
      <div className="w-full h-[40px] bg-black px-24">
        <div className="flex justify-between items-center pt-3">
          <p className="paragraph text-primary-1">
            Copyright 2023. All right reserved
          </p>
          <div className="flex gap-4">
            <Link href={""} className="paragraph text-primary-1">
              Terms & Conditions
            </Link>
            <Link href={""} className="paragraph text-primary-1">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
