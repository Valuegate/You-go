import React from "react";
import Image from "next/image";
import MoreIconComponent from "../MoreIconComponent/page";

const ProductDetails = ({
  name = "",
  category = "",
  price = "",
  stock = 0,
  sold = 0,
  revenue = "",
  image = "",
}) => {
  return (
    <div className="flex px-5 items-center w-full py-2 rounded-2xl text-light-black-5 bg-white">
      <p className="text-sm font-normal flex items-center gap-3 w-[15%]">
        <Image
          src={image}
          alt="product image"
          className="rounded-[25px] w-[50px] h-[50px]"
        />
        {name}
      </p>

      <div className="w-[5%]" />

      <div className="flex justify-between items-center w-[20%]">
        <p className="text-sm font-normal">{category}</p>
        <p className="text-sm font-normal">{price}</p>
      </div>

      <div className="w-[12%]" />

      <div className="flex w-[16%] items-center justify-between">
        <p className="text-sm font-normal">{stock}</p>
        <p className="text-sm font-normal">{sold}</p>
      </div>

      <div className="w-[12%]" />

      <div className="flex items-center w-[20%] justify-between">
        <p className="text-sm font-normal">{revenue}</p>
        <MoreIconComponent />
      </div>
    </div>
  );
};

export default ProductDetails;
