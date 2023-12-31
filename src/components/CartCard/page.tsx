"use client"
import React, { FC, useState } from 'react';
import smallbag from "@/public/assets/bigbag.png";
import { MdCancelPresentation } from "react-icons/md"
import Image from 'next/image';

interface iCartCard {
  product: string;
}

const CartCard: FC<iCartCard> = ({ product }) => {
  const [num, setNum] = useState(1);

  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // Fetch products when the component mounts
  //   fetchProducts()
  //     .then((response: { data: React.SetStateAction<never[]>; }) => {
  //       setProducts(response.data);
  //     })
  //     .catch((error: any) => {
  //       console.error('Error fetching products:', error);
  //     });
  // }, []);

  return (
    <div className="mb-8">
      <div className="w-full bg-white p-2 md:p-5 flex justify-between items-center rounded-2xl border-none box-shadow">
        <div className="flex items-center justify-center">
          <Image src={smallbag} alt="Product" className=" w-10 h-10 md:w-16 md:h-16" />
          <div className="flex flex-col ml-1 md:ml-3">
            <p className="font-normal text-xs md:font-bold md:text-[13px] md:leading-[15px] text-light-black-5">
              Seller name
            </p>
            <p className="font-medium text-sm md:font-bold md:text-[18px] md:leading-[30px] text-primary">{product}</p>
          </div>
        </div>
        {/* <div className='block md:flex md:justify-between'> */}
        <p className="font-bold text-[13px] leading-[15px] text-light-black-5">
        €450&nbsp;&nbsp;
        </p>
        <div className="flex border-light-black-6 items-center">
          <button
            className="border-l w-8 h-8 rounded-l border-t border-b border-black text-primary font-bold cursor-pointer"
            onClick={() => setNum(num - 1)}
          >
            -
          </button>
          <p className="border-none w-8 h-8 bg-[#e7e7e7] font-bold justify-center flex items-center">
            {num}
          </p>
          <button
            className="border-r w-8 h-8 rounded-r border-t border-b text-primary text-[13px] border-black font-bold cursor-pointer"
            onClick={() => setNum(num + 1)}
          >
            +
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <p className="font-bold text-[13px] leading-[15px] text-primary">€450</p>
          <MdCancelPresentation className="w-[18px] h-[18px]" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default CartCard;