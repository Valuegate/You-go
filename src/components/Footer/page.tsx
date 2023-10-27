import React from "react";
import logo from "@/public/assets/yougo_logo.png";
import Image from "next/image";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#494848] w-full px-6 md:px-24 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[38%]">
            <div className="bg-white w-[69px] h-[96px] md:w-[96px] md:h-[128px] flex items-center justify-center ">
              <Image src={logo} alt="Logo" className="w-[69px] h-[96px] md:w-[96px] md:h-[128px]" />
            </div>
            <p className="text-white mt-3 font-normal text-base">
              Kindly click on the social media icon below to follow us and know more about us. Thank you.
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

            <h2 className="text-white font-bold text-base md:text-lg">Follow Us</h2>

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
          <div className="w-full md:w-[54%] mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-row md:flex-col gap-24">
              <div>
                <p className="text-white text-base mb-3 font-bold">
                Product Categories
                </p>
                <p className="text-white font-normal text-base">Apparel</p>
                <p className="text-white font-normal text-base">Footwear</p>
                <p className="text-white font-normal text-base">Electronics</p>
              </div>
              <div className="">
                <p className="text-white mb-3 font-bold text-base">About</p>
                <p className="text-white font-normal text-base">Our Story</p>
                <p className="text-white font-normal text-base">Meet the Team</p>
                <p className="text-white font-normal text-base">Our Mission</p>
              </div>
            </div>
            <div className="flex flex-row md:flex-col gap-24 mt-4 md:mt-0">
              <div>
                <p className="text-white mb-3 font-bold text-base">Sell</p>
                <p className="text-white font-normal text-base">Home & Living</p>
                <p className="text-white font-normal text-base">Beauty & Personal Care</p>
                <p className="text-white font-normal text-base">Sports & Outdoors</p>
              </div>
              <div className="">
                <p className="text-white mb-3 font-bold text-base">Terms</p>
                <p className="text-white font-normal text-base">Disclaimer</p>
                <p className="text-white font-normal text-base">Refund Policy</p>
                <p className="text-white font-normal text-base">Cookies & Tracking</p>
              </div>
            </div>
            <div className="h-full mt-4 md:mt-0">
              <div>
                <p className="text-white mb-3 font-bold text-base">Help</p>
                <p className="text-white font-normal text-base">Contact us</p>
                <p className="text-white font-normal text-base">FAQ</p>
                <p className="text-white font-normal text-base">Shipping & Delivery</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70px] md:h-[40px] bg-black px-6 md:px-24">
        <div className="flex justify-between items-center pt-3">
          <p className="paragraph text-primary-1 text-xs md:text-lg">
            Copyright 2023. All right reserved
          </p>
          <div className="flex gap-4">
            <Link href={""} className="paragraph text-primary-1 text-xs md:text-lg">
              Terms & Conditions
            </Link>
            <Link href={""} className="paragraph text-primary-1 text-xs md:text-lg">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;