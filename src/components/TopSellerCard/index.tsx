import Image from "next/image";
import Active from "@/public/assets/Ellipse2370(1).png";

const TopSellerCard = ({ image = "", name= "", codeNo = "", product ="", amount = "" }) => {
  return (
    <>
      <div className="px-2 w-full rounded-2xl text-light-black-5 bg-white">
        <div className="flex h-[65px] justify-between items-center">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Image
                src={image}
                alt={"user pics"}
                className="rounded-[25px] w-[50px] h-[50px] cursor-pointer"
                width={50}
                height={50}
              />
              <Image
                src={Active}
                alt={"active icon"}
                className="absolute right-0 bottom-0"
              />
            </div>
            <div>
              <h2 className="font-bold text-base text-light-black-7">{name}</h2>
              <p className="font-normal text-sm text-light-black-7">{codeNo}</p>
            </div>
          </div>

          <p className="font-normal text-sm text-light-black-7">{product}</p>
          <p className="font-normal text-sm text-light-black-7">{amount}</p>
        </div>
      </div>
    </>
  );
};

export default TopSellerCard;
