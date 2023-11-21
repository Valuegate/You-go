import React from 'react';
import arrow from "@/public/assets/arrow-right.png";
import Image from 'next/image';

const Sidebar = () => {
  const options = [
    'Clothing',
    'Accessories',
    'Home Decor',
    'Electronics',
    'Jewelry & Accessories',
    'Jewelry & Accessories',
    'Jewelry & Accessories',
  ];

  return (
    <div className="w-full md:w-1/3 lg:w-[317px] xl:w-[317px] bg-light-black-6 p-8 flex flex-col rounded-xl">
      <h2 className="text-2xl font-bold text-white mb-4">Menu</h2>
      {options.map((option, i) => (
        <a
          key={i}
          href="#"
          className="mb-3 px-4 py-2 flex justify-between items-center bg-primary text-white rounded"
        >
          <span className="whitespace-nowrap">{option}</span>
          <Image src={arrow} alt="Arrow" className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export default Sidebar;