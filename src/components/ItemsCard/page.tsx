import React, { useEffect, useState } from 'react';
import Image from "next/image";
import star from "@/public/assets/stars.png"
import { LoveIcon } from "@/public/icons";
import useFetchProduct from '@/public/hooks/queries/useFetchProduct';
import Img from "@/public/assets/watch.png"
// import { Product } from "@/public/types/product"
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface ItemsCardProps {
    // src: string;
    image: string;
    name: string;
    rating: string;
    price: string | number;
    width: number | string;
    height: number | string;
    className: string;
  }


  const ItemsCard: React.FC<ItemsCardProps> = ({width, height, className, image, price, name , rating }) => {
    const { data: user, isLoading } = useFetchProduct();

  
    return ( 
        <>
        {user && (
        <div className={`shadow-lg h-[330px] md:h-[286px] rounded-b-xl ${className}`}>
        <div className="relative">
      <Image src={image} className="w-full h-[190px] md:h-[170px] rounded-t-xl object-cover" alt={"product image"} width={100} height={100} />
      <div className="w-[18px] h-[18px] rounded-full bg-primary-1 flex justify-center items-center absolute right-4 top-3 cursor-pointer"><LoveIcon color="black" width="13px" height="13px" /></div>
      </div>
      <div className="flex flex-col justify-center items-start pl-4 pt-2">
        <p className="text-lg font-bold">{name}</p>
        <div className="flex gap-1 items-center">
          <Image src={star} alt="rating icon" />
          <p className="mr-1">{user.numReviews}</p>
        </div>
        <div className="flex gap-1 items-center justify-start">
          <p className="text-primary text-[15px] font-medium ">€</p>
          <p className="font-bold text-primary">{price}</p>
        </div>
        <p className="text-xs text-light-black-4 font-medium">By <span className="text-light-black-5 text-sm">Cresent Multipurpose Store</span></p>
      </div>
    </div>
    )}
        </>
     );
}
 
export default ItemsCard;