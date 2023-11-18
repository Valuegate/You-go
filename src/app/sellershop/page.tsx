"use client";
import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import { useState } from "react";
import { GrNext } from "react-icons/gr";
import ReviewCard from "@/public/components/ReviewCard/page";
import NavBar from "@/public/components/NavBar/page";
import Footer from "@/public/components/Footer/page";
import SearchInput from "@/public/components/SearchInput/page";
import MenuSec from "@/public/components/MenuSec/page";

const SellerShop = () => {
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  const handleCardClick = (number: number) => {
    setClickedNumber(number);
  };

  const getCardClass = (number: number) => {
    return clickedNumber === number
      ? "text-white bg-light-black-5"
      : "bg-white";
  };

  return (
    <>
      <NavBar>
        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
          Login
        </button>
      </NavBar>
      <div className="overflow-y-scroll h-[87vh]">
        <div className="h-[400px] bg-custom-image">
        <div className=" pt-4 ml-3 lg:pt-20 lg:ml-16">
            <div className="w-20 h-10 flex justify-center items-center bg-primary text-white">Store</div>
            </div>
          <div className="flex flex-col gap-8 justify-center items-center pt-4 md:pt-12">
            <h2 className="font-bold text-[39px] leading-[45px] text-white">
              Seller Shop Page
            </h2>
            <SearchInput />
          </div>
        </div>
        <div className="pt-1 lg:pt-12 px-4 lg:px-24">
          <MenuSec />

          <div className="float-right mt-8">
            <div className="flex items-center gap-2">
              <div className="flex gap-1 cursor-pointer">
                <ArrowLeftIcon />
                Prev
              </div>
              {Array.from({ length: 3 }).map((_, index) => (
                <span
                  key={index}
                  className={`w-[30px] h-[30px] flex justify-center items-center rounded-lg cursor-pointer ${getCardClass(
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

        <div className="mt-16 px-4 md:px-24">
          <h2 className="text-center font-bold text-2xl text-light-black-5">
            Customer Reviews
          </h2>
          <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-8 mb-12">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>

          <div className="w-full md:w-[60%]">
            <h3 className="font-bold text-base text-light-black-6 mb-2">
              Shop Policies
            </h3>
            <p className="text-light-black-5 text-normal text-sm mb-4">
              Shop policies Shop policies Shop policies Shop policies Shop
              policies Shop policies Shop policies Shop policies Shop policies
              Shop policies Shop policies Shop policies Shop policies Shop
              policies Shop policies Shop policies Shop policies Shop policies
              Shop policies Shop policies Shop policies
            </p>
            <p className="text-light-black-5 text-normal text-sm">
              Shop policies Shop policies Shop policies Shop policies Shop
              policies Shop policies Shop policies Shop policies Shop policies
              Shop policies Shop policies Shop policies Shop policies Shop
              policies Shop policies Shop policies Shop policies Shop policies
              Shop policies Shop policies Shop policies
            </p>
          </div>
        </div>
        <div className="mt-[10%]" />
        <Footer />
      </div>
    </>
  );
};

export default SellerShop;
