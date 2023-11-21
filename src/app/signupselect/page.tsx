import Logo from "@/public/components/Logo/page";
import Image from "next/image";
import Link from "next/link";
import BgImg from "@/public/assets/Rectangle23.png";
import Group from "@/public/assets/Group3993.png";

const SignupSelect = () => {
  return (
    <>
      <div className="flex">
        <div className="sm:hidden md:hidden lg:block w-[50%] h-[100vh]">
          <Image
            src={BgImg}
            alt={"woman"}
            className="h-[100vh] w-full object-cover"
          />
        </div>
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:w-full sm:mt-32">
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            Welcome Back
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
            How will you be signing up to YouGo?
          </p>
          <div className="flex justify-around items-center gap-10 mt-32">
            <Link href={"./buyersignup"}>
            <div className="w-[250px] bg-white-1 hover:bg-gradient-to-r hover:from-darkBrownGradient hover:to-lightBrownGradient hpver:border-2 hover:border-primary-1 text-center shadow-2xl rounded-2xl h-[300px] flex flex-col ">
                <p className="mt-5 text-[26px] font-bold text-weirdBrown px-5 text-center">
                  Buyer
                </p>
                <p className="px-[5%] mt-8 font-normal text-[16px]">
                  YouGo provides a seamless shopping experience, allowing you to
                  effortlessly browse a vast array of products, easily locate
                  what you desire, and enjoy a streamlined checkout process.
                </p>
              </div>
            </Link>
            <p className="text-weirdBrown text-4xl font-semibold">OR</p>
            <Link href={"./sellersignup"}>
              <div className="w-[250px] bg-white-1 hover:bg-gradient-to-r hover:from-darkBrownGradient hover:to-lightBrownGradient hpver:border-2 hover:border-primary-1 text-center shadow-2xl rounded-2xl h-[300px] flex flex-col ">
                <p className="mt-5 text-[26px] font-bold text-weirdBrown px-5 text-center">
                  Seller
                </p>
                <p className="px-[5%] mt-8 font-normal text-[16px]">
                  YouGo empowers you with intuitive tools to showcase your
                  products, manage inventory efficiently, and connect with a
                  broad audience, ensurring a user-friendly experience for both
                  buyers and sellers alike.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupSelect;
