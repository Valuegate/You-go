import React from "react";
import SearchInput from "../SearchInput/page";

const SearchContainer = () => {
    return ( 
        <div className="h-[400px] bg-custom-image">
            <div className="pt-20 ml-16">
            <div className="w-20 h-10 flex justify-center items-center bg-primary text-white">Store</div>
            </div>
            <div className="flex flex-col gap-8 justify-center items-center pt-12">
                <h2 className="font-bold text-[39px] leading-[45px] text-white">Welcome to YouGo Ecommerce</h2>
                <SearchInput/>
            </div>
        </div>
     );
}
 
export default SearchContainer;