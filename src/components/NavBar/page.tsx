import React, { FC } from "react";
import Logo from "../Logo/page";
import Link from "next/link";
import { QuestionmarkIcon } from "@/public/icons/questionmark-icon";
import { LoveIcon } from "@/public/icons";
import { HiShoppingCart } from "react-icons/hi"

interface iNavBar {
    btnText: string;
  }

const NavBar: FC<iNavBar> = ({ btnText }) => {
    return ( 
        <>

        <div className="flex items-center justify-between px-24 py-3 border-b border-b-white-5 ">
            <div>
            <Logo />
            </div>
            <div className="flex items-center gap-4">
            <Link href={""}><h5 className="typo text-light-black-5">Home</h5></Link>
            <Link href={""}><h5 className="typo text-light-black-5">Shop</h5></Link>
            </div>

            <div className="flex items-center gap-6">
                <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center"><QuestionmarkIcon /></span>
                <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center"><LoveIcon color="white" /></span>
                <span className="bg-primary w-[28px] h-[28px] round flex justify-center items-center"><HiShoppingCart className="text-white w-[19px] h-[19px]" /></span>
                <button className="bg-gradient-to-r from-primary-1 to-primary round w-[147px] h-[39px] typo flex items-center justify-center text-white ">{btnText}</button>
            </div>
            

            </div>
        </>

     );
}
 
export default NavBar;