import Image from "next/image";
import Link from "next/link";
import star from "@/public/assets/stars.png"
import { LoveIcon } from "@/public/icons";

interface ItemsCardProps {
    src: string;
    product: string;
    rating: string;
    amount: string | number;
    width: number | string;
    height: number | string;
  }
  
  const ItemsCard: React.FC<ItemsCardProps> = ({ src, product, rating, amount, width, height }) => {
    return ( 
        <>
        <div className="shadow-lg h-[330px] md:h-[286px] rounded-b-xl">
        <div className="relative">
      <Image src={src} className="w-full lg:w-[258px] h-[190px] md:h-[170px] rounded-t-xl object-cover" alt="" width={100} height={100} />
      <div className="w-[18px] h-[18px] rounded-full bg-primary-1 flex justify-center items-center absolute right-4 top-3 cursor-pointer"><LoveIcon color="black" width="13px" height="13px" /></div>
      </div>
      <div className="flex flex-col justify-center items-start pl-4 pt-2">
        <p className="text-lg font-bold">{product}</p>
        <div className="flex gap-1 items-center">
          <Image src={star} alt="Star" />
          <p className="mr-1">{rating}</p>
        </div>
        <div className="flex gap-1 items-center justify-start">
          <p className="text-primary text-[10px] font-medium ">NGN</p>
          <p className="font-bold text-primary">{amount}</p>
        </div>
        <p className="text-xs text-light-black-4 font-medium">By <span className="text-light-black-5 text-sm">Cresent Multipurpose Store</span></p>
      </div>
    </div>
        </>
     );
}
 
export default ItemsCard;