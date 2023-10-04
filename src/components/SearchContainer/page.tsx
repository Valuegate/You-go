import React from "react";
import SearchInput from "../SearchInput/page";

const SearchContainer = () => {
    return ( 
        <div className="h-[400px] bg-custom-image">
            <div className=" pt-4 ml-3 lg:pt-20 lg:ml-16">
            <div className="w-20 h-10 flex justify-center items-center bg-primary text-white">Store</div>
            </div>
            <div className="flex flex-col md:4 gap-8 justify-center items-center pt-4 md:pt-12">
           <h2 className="font-bold text-xl md:text-4xl leading-normal text-white text-center">Welcome to YouGo Ecommerce</h2>
           <SearchInput />
         </div>
        </div>
     );
}
 
export default SearchContainer;