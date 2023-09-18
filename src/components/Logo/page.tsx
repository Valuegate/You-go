import React from "react";
import Image from "next/image";
import logo from "@/public/assets/YOU GO (3) 1.png"

const Logo = () => {
    return ( 
            <div className="w-[20px] h-[20px]">
                <Image src={logo} alt={""} />
            </div>
     );
}
 
export default Logo;