import React, { FC } from 'react';
import { QuestionmarkIcon } from '@/public/icons/questionmark-icon';
import { LoveIcon } from '@/public/icons';
import { HiShoppingCart } from 'react-icons/hi';
import Link from 'next/link';

interface RightNavProps {
  btnText: string;
  open: boolean;
}

const RightNav: FC<RightNavProps> = ({ btnText, open }) => {
    if (!open) {
        return null;
      }

  return (
    <div className='md-hidden lg:hidden'>
    <ul
      className={`${
        open
          ? 'transform translate-x-0'
          : 'transform translate-x-full md:translate-x-0'
      } md:fixed md:right-0 w-64 bg-primary-1 transition-transform duration-300 md:py-12 md:px-0 py-20 px-4 flex flex-col md:flex-row md:flex-wrap md:items-start items-center md:gap-10 gap-8 z-10 left-5 top-44 relative`}
    >
        <div className="flex flex-col items-center gap-4">
          <Link href={"/home"}>
            <h5 className="typo text-light-black-5">Home</h5>
          </Link>
          <Link href={"/shop"}>
            <h5 className="typo text-light-black-5">Shop</h5>
          </Link>
        </div>
      <div className="flex flex-col items-center gap-6">
        <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
          <QuestionmarkIcon />
        </span>
        <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
          <LoveIcon color="white" />
        </span>
        <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center">
          <HiShoppingCart className="text-white w-[19px] h-[19px]" />
        </span>
        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white">
          {btnText}
        </button>
      </div>
    </ul>
    </div>
  );
};

export default RightNav;