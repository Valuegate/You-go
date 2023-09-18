import Image from "next/image";
import Link from "next/link";
import star from "@/public/assets/stars.png"

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
        <Link href="#" className="shadow-lg h-[286px]">
      <Image src={src} className="w-[258px] h-[170px] rounded-t-xl object-cover" alt="" width={100} height={100} />
      <div className="flex flex-col justify-center items-start pl-4 pt-2">
        <p className="text-lg font-bold text-gray-600">{product}</p>
        <div className="flex gap-1 items-center">
          <Image src={star} alt="Star" />
          <p className="mr-1 text-gray-600">{rating}</p>
        </div>
        <div className="flex items-center justify-start">
          <p className="text-primary text-[10px] font-normal ">NGN</p>
          <p className="font-bold text-red-500">{amount}</p>
        </div>
        <p className="text-xs text-gray-500">By Cresent Multipurpose Store</p>
      </div>
    </Link>
        </>
     );
}
 
export default ItemsCard;