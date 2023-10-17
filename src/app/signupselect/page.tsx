import Logo from "@/public/components/Logo/page";
import Image from "next/image";
import Link from "next/link";
import BgImg from "@/public/assets/Rectangle23.png"
import Group from "@/public/assets/Group3993.png"

const SignupSelect = () => {
    return (
        <>
        <div className="px-4 md:px-24 py-2 bg-light-black-4">
            <div className="flex justify-between items-center">
                <div>
                    <Logo />
                </div>
                <Link href={"./login"}>
                <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">Login
          </button>
                </Link>
            </div>
        </div>
        <div className="bg-cover bg-center h-screen relative">
      <Image src={BgImg} alt={""} className="absolute inset-0 w-full h-full object-cover opacity-50"/>
      <div className="flex relative top-32 flex-col gap-4 items-center justify-center">
        <Image src={Group} alt={""} />
        <h2 className="text-white text-3xl font-bold w-full md:w-[30%] text-center">Welcome to YouGo Ecommerce</h2>
        <p className="text-white text-xl font-medium">Sign-up as;</p>
        <div className="flex items-center gap-4">
        <Link href={"./buyersignup"}>
                <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">A Buyer
          </button>
                </Link>
                <div className="text-white text-base font-semibold">OR</div>
                <Link href={"./sellersignup"}>
                <button className="border-white border-[3px] round px-6 py-2 typo flex items-center justify-center text-white ">A Seller
          </button>
                </Link> 

        </div>
      </div>
    </div>
        </>
    );
};

export default SignupSelect;