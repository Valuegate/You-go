import Image from "next/image";
import Cloud from "@/public/assets/Group 3992.png"
import Thank from "@/public/assets/Group 3991.png"
import Link from "next/link";


const Thanks = () => {
    return ( 
        <>
        <div className="mt-20 mx-48 round boxs-shadow">
            <div className="relative">
                <div className="flex justify-end">
                <Image src={Cloud} alt={""} />
                </div>
            
            <div className="">
                <div className="absolute bottom-0">
                <Image src={Thank} alt={""} />
                </div>
                <Link href="/" className="flex justify-end pb-8 pr-8">
              <button className="bg-gradient-to-r from-primary-1 to-primary round w-[230px] h-[40px] typo flex items-center justify-center text-white">Checkout</button>
            </Link>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Thanks;