"use client";
import { SearchIcon } from "@/public/icons";
import Link from "next/link";
import React from "react";
import { ReactNode, FC } from "react";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Avatar from "@/public/assets/Ellipse2367.png";
import Footer from "@/public/components/Footer/page";
import {
  MdDashboard,
  MdNotificationsActive,
  MdOutlineForwardToInbox,
  MdPeople,
  MdSettings,
} from "react-icons/md";
import { BiCart, BiDownload } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import { useState } from "react";
import Dashboard from "./dashboard";
import Orders from "./orders";
import Products from "./products";
import Customers from "./customers";
import Notifications from "./notifications";
import Settings from "./settings";
import Messages from "./message";


const SellerDashBoardLayout = () => {
  const [active, setActive] = useState(0);

  const menus = [
    { name: "Dashboard", icon: MdDashboard },
    { name: "Orders", icon: BiCart },
    { name: "Products", icon: FaProductHunt },
    { name: "Customers", icon: MdPeople },
    {
      name: "Notifications",
      icon: MdNotificationsActive,
    },
    { name: "Settings", icon: MdSettings },
  ];

  const children = [
    <>
      {active == 0 && <Dashboard />}
      {active == 1 && <Orders />}
      {active == 2 && <Products />}
      {active == 3 && <Customers />}
      {active == 4 && <Notifications />}
      {active == 5 && <Settings />}
    </>,
  ];

  return (
    <>
      <NavBar btnText={"Logout"} />
      <div className="overflow-y-scroll h-[90vh]">
        <div className="flex gap-4 bg-white px-24 pb-40">
          <div className="w-72 h-[748px] bg-light-black-5 rounded-lg ">
            <div className="mt-20 round">
              <div className="px-4 flex flex-col gap-1 bg-white py-4 mx-4 round">
                {menus?.map((menu, i) => (
                  <div
                    onClick={() => {
                      setActive(i);
                    }}
                    key={i}
                    className={`group flex items-center text-semibold text-primary gap-2 font-medium p-2 ${
                      i == active && "bg-primary text-white"
                    } cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white rounded`}
                  >
                    <div>{React.createElement(menu?.icon)}</div>
                    <h2>{menu?.name}</h2>
                  </div>
                ))}
              </div>
              <div className="mx-4">
                <Link href="/login" className="">
                  <button className="mr-4 mt-48 bg-gradient-to-r from-primary-1 to-primary round w-full h-[40px] typo flex gap-3 items-center justify-center text-white">
                    <span>
                      <BiDownload />
                    </span>
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full bg-white">
            <nav className="flex justify-between items-center py-6">
              
              <div className="flex justify-center items-center">
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

            <div className="bg-white" key={active}>{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SellerDashBoardLayout;
