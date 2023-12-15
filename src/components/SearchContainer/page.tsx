import React from "react";
import SearchInput from "../SearchInput/page";

const SearchContainer = () => {
  return (
    <div className="h-[400px] bg-custom-image w-full flex flex-col gap-8 items-center justify-center">
        <h2 className="font-bold text-xl md:text-4xl leading-normal text-white text-center">
          Welcome to YouGo Ecommerce
        </h2>
        <SearchInput />
    
    </div>
  );
};

export default SearchContainer;
