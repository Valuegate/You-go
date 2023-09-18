import Image from "next/image";
import Avatar from "@/public/assets/Ellipse 2378.png"

const ProductCard = () => {
    return (
        <>
        <div className="px-2 w-full  rounded-2xl text-light-black-5 bg-white">
              <div className="flex h-[76px] justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div>
                        <Image src={Avatar} alt={""} />
                    </div>
                    <div>
                        <p className="text-sm font-bold">Product Name</p>
                        <p className="text-xs font-normal">Category, subcategory</p>
                    </div>
                </div>
                <span className="text-sm font-normal">$2,160</span>
              </div>
            </div>
        </>
     );
}
 
export default ProductCard;