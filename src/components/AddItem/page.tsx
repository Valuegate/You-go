"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import Outlined from "@/public/assets/Plus_Outlined.svg"

const AddItem = ({ addText = "Add Order" }) => {
  const [current, setCurrent] = useState(-1);

  return (
    <div className="bg-primary-1 rounded-md w-full h-[60px] px-[2%] relative flex items-center justify-between ">
      <div className="w-2/3 flex items-center gap-10">
        <div
          className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setCurrent(current == 0 ? -1 : 0);
          }}
        >
          Category
          <FaCaretDown />
        </div>

        <div
          className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer "
          onClick={() => {
            setCurrent(current == 1 ? -1 : 1);
          }}
        >
          Status
          <FaCaretDown />
        </div>

        <div
          className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setCurrent(current == 2 ? -1 : 2);
          }}
        >
          Price
          <FaCaretDown />
        </div>

        <div
          className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setCurrent(current == 3 ? -1 : 3);
          }}
        >
          Date
          <FaCaretDown />
        </div>
      </div>

      {current == 0 && <CategoryDropdown />}
      {current == 1 && <StatusDropdown />}
      {current == 2 && <PriceDropdown />}
      {current == 3 && <DateDropdown />}

      <button className="bg-gradient-to-r from-primary-1 to-primary round px-5 py-2 typo flex gap-3 items-center justify-center shadow-xl text-white ">
        <Image src={Outlined} alt="plus" />
        {addText}
      </button>
    </div>
  );
};

export default AddItem;

const CategoryDropdown = () => {
  return (
    <div className="absolute top-[85%] left-[2%] flex flex-col gap-3 bg-white z-10 rounded-md shadow-md py-3 px-8">
      <div className="cursor-pointer">Category 1</div>
      <div className="cursor-pointer">Category 2</div>
      <div className="cursor-pointer">Category 3</div>
    </div>
  );
};

const StatusDropdown = () => {
  return (
    <div className="absolute top-[85%] left-[16%] flex flex-col gap-3 bg-white z-10 rounded-md shadow-md py-3 px-5">
      <div className="cursor-pointer">Status 1</div>
      <div className="cursor-pointer">Status 2</div>
      <div className="cursor-pointer">Status 3</div>
    </div>
  );
};

const PriceDropdown = () => {
  return (
    <div className="absolute top-[85%] left-[28%] flex flex-col gap-3 bg-white z-10 rounded-md shadow-md py-3 px-4">
      <div className="cursor-pointer">Price 1</div>
      <div className="cursor-pointer">Price 2</div>
      <div className="cursor-pointer">Price 3</div>
    </div>
  );
};

const DateDropdown = () => {
  return (
    <div className="absolute top-[85%] left-[40%] flex flex-col gap-3 bg-white z-10 rounded-md shadow-md py-3 px-4">
      <div className="cursor-pointer">Date 1</div>
      <div className="cursor-pointer">Date 2</div>
      <div className="cursor-pointer">Date 3</div>
    </div>
  );
};
