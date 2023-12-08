import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import star from "@/public/assets/stars.png";
import { LoveIcon } from "@/public/icons";
import useFetchProduct from "@/public/hooks/queries/useFetchProduct";
import Img from "@/public/assets/watch.png";
// import { Product } from "@/public/types/product"
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Product {
  id: number;
  name: string;
  image: string;
  rating: string;
  numReviews: number;
  price: number;
  brand: string;
}

interface ItemsCardProps {
  product: Product;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ product }) => {
  // const { data: product, isLoading } = useFetchProduct();
  // console.log(product)
  
  return (
    <>
      {/* {JSON.stringify(product)} */}

      <div
        className={`shadow-lg sm:h-[18rem] h-[17.8rem] rounded-b-xl w-[15.6rem] sm:w-full mb-8`}
      >
        <div className="relative">
          <Image
            // src={product?.image || Img}
            src={`data:image/jpeg;base64,${product?.image}`}
            className="w-full h-[170px] rounded-t-xl object-cover"
            width={100}
            height={100}
            alt={"product image"}
          />
          <div className="w-[30px] h-[30px] rounded-full bg-primary-1 flex justify-center items-center absolute right-4 top-4 cursor-pointer">
            <LoveIcon color="black" width="15px" height="15px" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start pl-4 pt-2">
          <p className="text-lg font-bold">{product?.name ?? "N/A"}</p>
          <div className="flex gap-1 items-center">
            {/* <Image src={product?.rating ?? 'https://'} alt="rating icon" width={100} height={100}/> */}
            <p className="mr-1">{product?.rating ?? "0"}</p>
            <p className="mr-1">{product?.numReviews ?? "0"}</p>
          </div>
          <div className="flex gap-1 items-center justify-start">
            <p className="text-primary text-[14px] font-medium ">€</p>
            <p className="font-bold text-primary">{product?.price ?? "0.0"}</p>
          </div>
          <p className="text-xs text-light-black-4 font-medium">
            By{" "}
            <span className="text-light-black-5 text-sm">
              {product?.brand ?? "N/A"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ItemsCard;
