import React from "react";
import Image from "next/image";
import logo from "@/public/assets/YOU GO (3) 1.png"

const Logo = () => {
    return ( 
            <div className="w-[36px] h-[50px]">
                <Image src={logo} alt={"logo"} />
            </div>
     );
}
 
export default Logo;