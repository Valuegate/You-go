import React from "react";
import SearchInput from "../SearchInput/page";

const SearchContainer = () => {
    return ( 
        <div className="h-[400px] bg-custom-image">
            <div className="flex flex-col gap-8 justify-center items-center pt-32">
                <h2 className="font-bold text-[39px] leading-[45px] text-white">Welcome to YouGo Ecommerce</h2>
                <SearchInput/>
            </div>
        </div>
     );
}
 
export default SearchContainer;