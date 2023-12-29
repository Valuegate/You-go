"use client";
import React from "react";
import Sidebar from "../SideBar/page";
import ItemsCard from "../ItemsCard/page";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdGridView } from "react-icons/md";
import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import { useState } from "react";
import { GrNext } from "react-icons/gr";
import img2 from "@/public/assets/arrow-left.png";
import img3 from "@/public/assets/carrow-left.png";
import Image from "next/image";
import Link from "next/link";
import useFetchProduct from "@/public/hooks/queries/useFetchProduct";
import { Loader } from "@mantine/core";

import Background from "@/public/assets/Trimmed Home.png";

const MenuSection = () => {
  const { data: products, isLoading } = useFetchProduct();
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  const handleCardClick = (number: number) => {
    setClickedNumber(number);
  };

  const getCardClass = (number: number) => {
    return clickedNumber === number
      ? "text-white bg-light-black-5"
      : "bg-white";
  };


  const onSearch = () => {
    let searchParameter = (document.getElementById("searchField") as HTMLInputElement).value;
    console.log(searchParameter);
  }

  return (
    <>
      <div className="relative w-[100vw] h-[450px] flex flex-col gap-8 items-center justify-center">
        <Image
          src={Background}
          alt=""
          className="w-[100%] object-cover h-[450px] absolute top-0 left-0"
        />
        <h2 className="font-bold text-xl md:text-4xl leading-normal text-white text-center z-10">
          Welcome to YouGo Ecommerce
        </h2>
        <div className="relative bg-gray-50">
          <input
            id="searchField"
            type="text"
            placeholder="Search Product"
            className="w-full md:w-[695px] h-[64px] px-4 pl-10 round text-[16px] leading-8 font-normal placeholder-color focus:outline-none"
          />
          <span className="absolute cursor-pointer inset-y-0 left-3 flex items-center pr-3" onClick={onSearch}>
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="px-10 sm:px-5 w-[100%] mb-20">
        <div className="w-full flex flex-row sm:flex-col gap-10 mt-20">
          <div className="sm:w-full w-[25%]">
            <Sidebar />
          </div>

          <div className="sm:w-full w-[75%]">
            <div className="">
              <div className="">
                <p className="font-bold sm:text-base text-lg text-light-black-5 mb-2">
                  Find something that catches your eyes!
                </p>
              </div>

              <div className="w-full flex flex-wrap flex-row sm:justify-evenly sm:gap-8 justify-between">
                {isLoading ? (
                  <div className="flex text-primary justify-center items-center gap-2">
                    <p className="text-lg">Loading</p>
                    <Loader color="#d4145a" />
                  </div>
                ) : (
                  products &&
                  products.products.length >= 0 &&
                  products.products.map((product) => {
                    return <ItemsCard key={product.id} product={product} />;
                  })
                )}
              </div>

              <div className="w-full flex justify-between mt-8">
                <div className="font-bold text-sm lg:text-base text-light-black-5">
                  Find something that catches your eyes!
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 cursor-pointer">
                    <ArrowLeftIcon />
                    Prev
                  </div>
                  {Array.from({ length: 3 }).map((_, index) => (
                    <span
                      key={index}
                      className={`w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] flex justify-center items-center rounded-lg cursor-pointer ${getCardClass(
                        index
                      )}`}
                      onClick={() => handleCardClick(index)}
                    >
                      {index + 1}
                    </span>
                  ))}
                  <div className="flex gap-1 items-center cursor-pointer">
                    Next
                    <GrNext />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-6 w-6 text-black-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search">
        <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
      </svg>
    </svg>
  );
};

export default MenuSection;
