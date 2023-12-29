import React from "react";
import arrow from "@/public/assets/arrow-right.png";
import Image from "next/image";

import Link from "next/link";

const Sidebar = () => {
  const options = [
    "Handmade Goods",
    "Jewelry",
    "Home Decor",
    "Clothing",
    "Art",
    "Vintage Items",
    "Photography",
    "Cosmetics",
    "Toys",
  ];

  return (
    <div className="sm:flex sm:flex-col">
      <h2 className="hidden sm:block text-2xl text-center font-bold text-slate-950">
        Categories
      </h2>
      <p className="font-bold sm:block hidden text-center text-lg text-light-black-5 mb-10">
        Find something that catches your eyes!
      </p>
      <div className="bg-light-black-6 p-8 sm:p-0 flex flex-col rounded-xl sm:rounded-none sm:bg-[#00000000] sm:overflow-x-scroll sm:flex-row sm:scrollbar-custom sm:w-full sm:gap-5">
        <h2 className="text-2xl font-bold text-white mb-4 sm:hidden">
          Categories
        </h2>
        {options.map((option, i) => (
          <Link
            key={i}
            href={"/shop"}
            className="mb-3 px-4 py-2 flex justify-between items-center bg-primary text-white rounded"
          >
            <span className="whitespace-nowrap">{option}</span>
            <Image src={arrow} alt="Arrow" className="w-4 h-4 sm:hidden" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
