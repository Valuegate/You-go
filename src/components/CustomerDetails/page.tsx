import React from "react";
import MoreIconComponent from "../MoreIconComponent/page";
import Image from "next/image";

const CustomerDetails = ({
  name = "",
  image = "",
  id = "",
  spent = "",
  lastOrdered = "",
  email = "",
  phone = "",
  active = true,
}) => {
  return (
    <div className="flex px-3 items-center w-full py-2 rounded-2xl text-light-black-5 bg-white">
      <p className="text-sm font-normal flex items-center gap-3 w-[18%]">
        <Image
          src={image}
          alt="product image"
          className="rounded-[25px] w-[50px] h-[50px]"
        />
        {name}
      </p>

      <div className="flex justify-between items-center w-[16%]">
        <p className="text-sm font-normal">{id}</p>
        <p className="text-sm font-normal">{spent}</p>
      </div>
      <div className="w-[8%]" />

      <div className="flex w-[38%] items-center justify-between">
        <p className="text-sm font-normal">{lastOrdered}</p>
        <p className="text-sm font-normal">{email}</p>
        <p className="text-sm font-normal">{phone}</p>
      </div>
      <div className="w-[3%]" />
      <div className="flex items-center w-[15%] justify-between">
        <button className="p-2 round flex items-center border text-sm font-normal">
          {active ? "Active" : "Inactive"}
        </button>
        <MoreIconComponent />
      </div>
    </div>
  );
};

export default CustomerDetails;
