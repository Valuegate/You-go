import Image from "next/image";
import Cloud from "@/public/assets/Group 3992.png";
import Thank from "@/public/assets/Group 3991.png";
import Link from "next/link";

const Thanks = () => {
  return (
    <>
      <div className="mt-10 mx-4 md:mx-48 rounded-lg shadow-box">
        <div className="relative">
          <div className="flex justify-end">
            <Image src={Cloud} alt={""} />
          </div>

          <div className="relative">
            <Image src={Thank} alt={""} className="absolute bottom-0" />
            <Link href="/" className="flex justify-end pb-8 pr-8">
              <button className="bg-gradient-to-r from-primary-1 to-primary rounded w-full md:w-[230px] h-10 md:h-[40px] text-white flex items-center justify-center z-10">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thanks;