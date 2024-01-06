import React, {  } from "react";
import Image from "next/image";
import Img from "@/public/assets/upload.png";
import Link from "next/link";

interface imageResponse {
  id: number;
  image: string;
  product: number;
}
interface Product {
  id: number;
  name: string;
  rating: string;
  numReviews: number;
  price: number;
  brand: string;
  images: imageResponse[];
}

interface ItemsCardProps {
  product: Product;
}

const ItemsCard: React.FC<ItemsCardProps> = ({ product }) => {
  return (
    <>
      {/* {JSON.stringify(product)} */}

      <Link href={`/shop/${product.id}`}
        className={`shadow-lg sm:h-[18rem] h-[17.8rem] rounded-b-xl w-[15.6rem] sm:w-full mb-8`}
      >
        <div className="relative">
          <Image
            src={product?.images[0].image || Img}
            className="w-full h-[170px] rounded-t-xl object-cover"
            width={100}
            height={100}
            alt={product?.name ? `${product.name} image` : "Product image"}
          />
        </div>
        <div className="flex flex-col justify-center items-start pl-4 pt-2">
          <p className="text-lg font-bold">{product?.name ?? "N/A"}</p>
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
      </Link>
    </>
  );
};

export default ItemsCard;
