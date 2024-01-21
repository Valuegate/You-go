"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import { FaBarsStaggered, FaChevronRight } from "react-icons/fa6";
import { BiX } from "react-icons/bi";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const NavBar = ({ showSearch = true, transparent = false }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [isSeller, setSeller] = useState<string>("");
  const [initials, setInitials] = useState<string>("");
  const toggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    let username = window.localStorage.getItem("userName");
    let isSeller = window.localStorage.getItem("userStatus");
    if (username !== undefined && username !== null) {
      setInitials(username);
    }

    if (isSeller !== undefined && isSeller !== null) {
      setSeller(isSeller);
    }

    setLoggedIn(
      username !== undefined && username !== null && username!.length > 0
    );
  }, []);

  return (
    <>
    <LanguageSwitcher />
      <div
        className={`h-[10vh] sm:h-[8vh] flex items-center ${
          transparent ? "bg-[#FFFFFFFF00]" : "bg-white"
        } justify-between px-4 lg:px-[5%] lg:py-3 shadow-sm`}
      >
        <div className="flex items-center justify-between w-1/3">
          <Link href={"/home"}>
            <Logo />
          </Link>

          {/* {showSearch && (
            <form action="nosubmit">
              <input
                type="search"
                placeholder="Search"
                className="border-weirdBrown sm:hidden border-2 px-3 h-[45px] w-[300px] sm:w-[200px] focus:outline-none rounded-[22.5px] focus:border-weirdBrown"
              />
            </form>
          )} */}
        </div>
        <div className="hidden md:flex md:items-center lg:flex lg:items-center justify-between w-2/5">
          <Link href={"/home"}>
            <h5 className="text-weirdBrown text-[20px] font-normal">Home</h5>
          </Link>
          {loggedIn && (isSeller === "buyer" || isSeller.length === 0) && (
            <Link href={"whysell"}>
              <h5 className="text-weirdBrown text-[20px] font-normal">Sell</h5>
            </Link>
          )}
          <Link href={"/shop"}>
            <h5 className="text-weirdBrown text-[20px] font-normal">Shop</h5>
          </Link>
          {loggedIn && isSeller === "seller" && (
            <Link href={"/whysell"}>
              <h5 className="text-weirdBrown text-[20px] font-normal">
                Add Product
              </h5>
            </Link>
          )}
          <Link href={"/about-us"}>
            <h5 className="text-weirdBrown text-[20px] font-normal">
              About Us
            </h5>
          </Link>

          {loggedIn ? (
            <Link
              href={"/profile"}
              className="rounded-full bg-weirdBrown h-[50px] w-[50px] text-center flex text-[24px] justify-center font-medium items-center text-white"
            >
              {initials.charAt(0).toUpperCase()}
            </Link>
          ) : (
            <Link href={"/login"}>
              <h5 className=" text-white hover:text-weirdBrown hover:bg-darkBrownGradient bg-weirdBrown px-4 py-2 rounded-lg text-[20px] font-normal">
                Login
              </h5>
            </Link>
          )}
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

        {loggedIn && (
          <div className="mt-10 flex flex-col items-center">
            <Link
              href={"/profile"}
              className="rounded-full bg-weirdBrown h-[75px] w-[75px] text-center flex text-[32px] justify-center font-medium items-center text-white"
            >
              {initials.charAt(0).toUpperCase()}
            </Link>
            <p className="text-[16px] mt-2 mb:5 font-bold">{initials}</p>
          </div>
        )}

        <div className="flex flex-col items-center gap-5 mt-10">
          <Link
            href={"/home"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            Home
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          {loggedIn && (isSeller === "buyer" || isSeller.length === 0) && (
            <Link
              href={"/whysell"}
              className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
            >
              Sell On YouGo
              <FaChevronRight size={"16px"} fill={"#000000"} />
            </Link>
          )}
          <Link
            href={"/shop"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            Shop
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>
          {loggedIn && isSeller === "seller" && (
            <Link
              href={"/whysell"}
              className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
            >
              Add Product
            </Link>
          )}
          <Link
            href={"/about-us"}
            className="text-weirdBrown w-full py-2 rounded-xl text-[20px] font-normal flex justify-between items-center"
          >
            About Us
            <FaChevronRight size={"16px"} fill={"#000000"} />
          </Link>

          <button
            onClick={() => {
              if (loggedIn) {
                window.localStorage.setItem("userToken", "");
                window.localStorage.setItem("userName", "");
                window.localStorage.setItem("userStatus", "");
                window.location.replace("/home");
              } else {
                window.location.href = "/login";
              }
            }}
          >
            <h5 className=" text-white hover:text-weirdBrown mt-10 hover:bg-darkBrownGradient bg-weirdBrown px-10 py-2 rounded-lg text-[20px] font-normal">
              {loggedIn ? "Logout" : "Login"}
            </h5>
          </button>
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
