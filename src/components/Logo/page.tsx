import React from "react";
import Image from "next/image";
import logo from "@/public/assets/you_go_logo.png"

const Logo = () => {
    return ( 
            <div className="w-[70px] h-[70px]">
                <Image src={logo} alt={"logo"} />
            </div>
     );
}
 
export default Logo;