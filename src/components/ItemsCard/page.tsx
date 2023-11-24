import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import star from "@/public/assets/stars.png";
import { LoveIcon } from "@/public/icons";
import useFetchProduct from "@/public/hooks/queries/useFetchProduct";
import Img from "@/public/assets/watch.png";
// import { Product } from "@/public/types/product"
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ItemsCardProps {
  image: string | StaticImageData;
  name: string;
  rating: string;
  price: string | number;
  width: string | number;
  height: string | number;
  className: string;
}

const ItemsCard: React.FC<ItemsCardProps> = ({
  image,
  name,
  price,
  rating,
  width,
  height,
  className,
}) => {
  // const { data: user, isLoading } = useFetchProduct();
  const user = {};

  return (
    <>
      {user && (
        <div
          className={`shadow-lg h-[350px] md:h-[286px] rounded-b-xl w-[250px]`}
        >
          <div className="relative">
            <Image
              src={image}
              className="w-full h-[170px] rounded-t-xl object-cover"
              alt={"product image"}
            />
            <div className="w-[30px] h-[30px] rounded-full bg-primary-1 flex justify-center items-center absolute right-4 top-4 cursor-pointer">
              <LoveIcon color="black" width="15px" height="15px" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-start pl-4 pt-2">
            <p className="text-lg font-bold">{name}</p>
            <div className="flex gap-1 items-center">
              <Image src={star} alt="rating icon" />
              <p className="mr-1">{rating}</p>
            </div>
            <div className="flex gap-1 items-center justify-start">
              <p className="text-primary text-[14px] font-medium ">€</p>
              <p className="font-bold text-primary">{price}</p>
            </div>
            <p className="text-xs text-light-black-4 font-medium">
              By <span className="text-light-black-5 text-sm">{className}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemsCard;
