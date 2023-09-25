"use client";
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


const MenuSection = () => {
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
      <div className="flex gap-6">
        <div>
          <Sidebar />
        </div>

        <div>
          <div className="mt-8">
            <div className="flex items-center gap-4 mb-3">
              <div>
                <h2 className="font-bold text-sm text-light-black-5">Price</h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-[100px] h-[40px] flex justify-center items-center bg-white-3">
                  $5
                </span>
                <span>-</span>
                <span className="w-[100px] h-[40px] flex justify-center items-center bg-white-3">
                  $15
                </span>
              </div>
            </div>

            <div className="flex gap-8 mb-3">
              <label
                className="flex items-center justify-center text-[16px] leading-[32px] font-bold text-light-black-5"
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
                className="flex items-center justify-center text-[16px] leading-[32px] font-bold text-light-black-5"
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
                className="flex items-center justify-center text-[16px] leading-[32px] font-bold text-light-black-5"
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

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 mb-3">
                <div>
                  <h2 className="font-bold text-sm text-light-black-5">
                    Sort By
                  </h2>
                </div>
                <div className="flex items-center gap-[1px]">
                  <span className="w-[100px] h-[40px] text-xs font-bold flex justify-center items-center bg-primary text-white">
                    Best Match
                  </span>
                  <span className="w-[80px] h-[40px] text-xs font-bold flex justify-center items-center bg-primary-1 text-black">
                    Orders
                  </span>
                  <span className="w-[80px] h-[40px] text-xs font-bold flex justify-center items-center bg-primary-1 text-black">
                    Price
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <p className="font-normal text-base pt-[12px]">View</p>
                <span>
                  <MdGridView className="w-[35px] h-[35px]" />
                </span>
                <span>
                  <RxHamburgerMenu className="w-[35px] h-[35px]" />
                </span>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <div className="">
              <p className="font-bold text-base text-light-black-5 mb-2">
                Find something that catches your eyes!
              </p>
            </div>
            <div className="w-full flex justify-between gap-6">
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
            </div>

            <div className="w-full flex justify-between gap-6 mt-8">
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
            </div>

            <div className="w-full flex justify-between gap-6 mt-8">
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
            </div>

            <div className="w-full flex justify-between gap-6 mt-8">
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
            </div>

            <div className="flex justify-between mt-8">
              <div className="font-bold text-sm text-light-black-5">
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

            <div className="mt-12">
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg text-light-black-5">Recently Viewed</p>
              <div className="flex">
                <Image
                  src={img2}
                  alt="Previous Slide"
                  className="cursor-pointer"
                  //   onClick={prevSlide}
                />
                <Image
                  src={img3}
                  alt="Next Slide"
                  className="cursor-pointer"
                  //   onClick={nextSlide}
                />
              </div>
            </div>
            <div className="w-full flex justify-between gap-6 mt-4">
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
              />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
