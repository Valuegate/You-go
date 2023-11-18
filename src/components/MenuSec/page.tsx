"use client";
import React from "react";
import Sidebar from "../SideBar/page";
import ItemsCard from "../ItemsCard/page";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdGridView } from "react-icons/md";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Avatar from "@/public/assets/Ellipse2367.png";

const MenuSec = () => {
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  return (
    <div className="flex flex-col lg:flex-row gap-12">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>

      <div className="lg:w-3/4">
        <div className="mt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div>
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
                <div>
                  <h2 className="font-bold text-sm lg:text-base text-light-black-5">
                    Price
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-[100px] h-[40px] flex justify-center items-center bg-white-3">
                    €5
                  </span>
                  <span>-</span>
                  <span className="w-[100px] h-[40px] flex justify-center items-center bg-white-3">
                    €15
                  </span>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row gap-8 mb-3">
                <label
                  className="flex items-center justify-center text-[16px] lg:text-base leading-[32px] font-bold text-light-black-5"
                  htmlFor="remember"
                >
                  <input
                    type="checkbox"
                    id="remember"
                    className="custom mr-2 text-black w-4 h-4"
                  />
                  Summer Sale
                </label>
                <label
                  className="flex items-center justify-center text-[16px] lg:text-base leading-[32px] font-bold text-light-black-5"
                  htmlFor="sale"
                >
                  <input
                    type="checkbox"
                    id="sale"
                    className="custom mr-2 text-black w-4 h-4"
                  />
                  Spend & Sale
                </label>
                <label
                  className="flex items-center justify-center text-[16px] lg:text-base leading-[32px] font-bold text-light-black-5"
                  htmlFor="shipping"
                >
                  <input
                    type="checkbox"
                    id="shipping"
                    className="custom mr-2 text-black w-4 h-4"
                  />
                  Free Shipping
                </label>
              </div>

              {/* <div className="flex flex-col lg:flex-row items-center justify-between"> */}
              <div className="flex flex-col lg:flex-row items-center gap-4 mb-3">
                <div>
                  <h2 className="font-bold text-sm lg:text-base text-light-black-5">
                    Sort By
                  </h2>
                </div>
                <div className="flex items-center gap-3 md:gap-[1px]">
                  <span className="w-[100px] h-[40px] text-xs lg:text-base font-bold flex justify-center items-center bg-primary text-white">
                    Best Match
                  </span>
                  <span className="w-[80px] h-[40px] text-xs lg:text-base font-bold flex justify-center items-center bg-primary-1 text-black">
                    Orders
                  </span>
                  <span className="w-[80px] h-[40px] text-xs lg:text-base font-bold flex justify-center items-center bg-primary-1 text-black">
                    Price
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div className="mb-10">
                <div className="flex gap-1 items-center">
                  <div>
                    <Image src={Avatar} alt={""} />
                  </div>
                  <div>
                    <h5 className="text-primary text-base font-medium">
                      Benjamin Achan
                    </h5>
                    <p className="text-light-black-4 text-sm font-medium">
                      Seller account
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex md:justify-end gap-2">
                <p className="font-normal text-base lg:text-lg pt-[12px]">
                  View
                </p>
                <span>
                  <MdGridView className="w-[35px] h-[35px]" />
                </span>
                <span>
                  <RxHamburgerMenu className="w-[35px] h-[35px]" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 w-full">
          <div className="">
            <p className="font-bold text-base lg:text-lg text-light-black-5 mb-2">
              Find something that catches your eyes!
            </p>
          </div>
          <div className="w-full flex flex-col lg:flex-row justify-between gap-6">
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mt-8">
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mt-8">
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
            <Link href={"../shop/details"}>
            <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"€500"} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuSec;
