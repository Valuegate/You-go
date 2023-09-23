"use client";
import {
  SearchIcon,
} from "@/public/icons";
import Link from "next/link";
import React from "react";
import { ReactNode, FC } from "react";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Avatar from "@/public/assets/Ellipse 2367.png";
import Footer from "@/public/components/Footer/page";
import { MdDashboard, MdNotificationsActive, MdOutlineForwardToInbox, MdPeople, MdSettings } from "react-icons/md";
import { BiCart, BiDownload } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";

interface iBuyerDashBoardLayout {
  children: ReactNode;
}

const BuyerDashBoardLayout: FC<iBuyerDashBoardLayout> = ({ children }) => {
  const menus = [
    { name: "Dashboard", link: "./dashboard", icon: MdDashboard },
    { name: "Orders", link: "./orders", icon: BiCart },
    { name: "Products", link: "./products", icon: FaProductHunt },
    { name: "Customers", link: "./customers", icon: MdPeople },
    { name: "Messages", link: "./messages", icon: MdOutlineForwardToInbox },
    { name: "Notifications", link: "./notifications", icon: MdNotificationsActive },
    { name: "Settings", link: "./settings", icon: MdSettings },
  ];


  return (
    <>
      <NavBar btnText={"Logout"} />
      <div className="overflow-y-scroll h-[88vh]">
        <div className="flex gap-4 bg-white px-24 pb-40">
          <div className="w-72 h-[748px] bg-light-black-5 rounded-lg ">
            <div className="mt-20 round">
              <div className="px-4 flex flex-col gap-1 bg-white py-4 mx-4 round">
                {menus?.map((menu, i) => (
                  <Link
                    href={menu?.link}
                    key={i}
                    className="group flex items-center text-semibold text-primary gap-2 font-medium p-2 hover:bg-primary hover:text-white rounded"
                  >
                    <div>{React.createElement(menu?.icon)}</div>
                    <h2>{menu?.name}</h2>
                  </Link>
                ))}
              </div>
              <div className="mx-4">
              <Link href="/login" className="">
              <button className="mr-4 mt-48 bg-gradient-to-r from-primary-1 to-primary round w-full h-[40px] typo flex gap-3 items-center justify-center text-white">
                <span><BiDownload/></span>
                Logout
                </button>
            </Link>
            </div>
            </div>
          </div>
          <div className="w-full bg-white">
            <nav className="flex justify-between items-center py-6">
              <div className="flex gap-4 items-center">
                <div className="relative flex items-center">
                  <span className="absolute left-4">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search w-[500px] py-2 pl-10 pr-4 border-none bg-white-1 rounded focus:ring-none focus:border-none"
                  />
                </div>
              </div>
              <div className="">
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
            </nav>

            <div className="bg-white">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BuyerDashBoardLayout;
