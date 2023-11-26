import InputField from "@/public/components/InputField/InputField";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle21.png";
import Google from "@/public/assets/Group7.png";

const BuyerSignUp = () => {
  
  return (
    <>
      <NavBar />
      <div className="relative">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] px-4 py-8 lg:pr-24 lg:pl-48 lg:pt-12 lg:overflow-y-scroll lg:h-[87vh]">
          <h3 className="font-bold text-[24px] lg:text-[26px] leading-[28px] lg:leading-[36px] pb-4 text-primary text-center">
            Create a New Buyer Account
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center">
            Create a new account in seconds
          </p>
          <InputField />

          <div className="flex justify-center gap-1 pt-4 lg:pt-8">
            <h1 className="text-center lg:text-left font-medium text-[12px] lg:text-lg">
              Do you have an account?
            </h1>
            <Link href="../login">
              <h1 className="text-center lg:text-left font-semibold text-[12px] lg:text-lg text-primary">
                Login
              </h1>
            </Link>
          </div>

          <div className="pt-4 lg:pt-8 pb-4">
            <h2 className="text-primary font-normal text-[18px] lg:text-[25px] leading-[21px] lg:leading-[29px] flex justify-center text-center lg:text-left">
              Social Login
            </h2>
          </div>

          <div className="flex justify-center items-center gap-4 pb-12 lg:pb-24">
            <Link href={"#"}>
              <button className="bg-blue text-white flex items-center justify-center w-[103px] h-[38px] text-base font-normal">
                Facebook
              </button>
            </Link>

            <Link href={"#"}>
              <Image src={Google} alt={""} />
            </Link>
          </div>
        </div>

        <div className="hidden lg:block lg:w-[50%]">
          <Image src={FlexImg} alt={""} className="h-[89vh]" />
        </div>
      </div>

      <div className="w-full absolute bottom-0 right-0 lg:left-0 h-[80px] lg:h-[40px] bg-black px-4 lg:px-24">
          <div className="block text-center lg:flex lg:justify-between items-center pt-3">
            <p className="paragraph text-[10px] lg:text-[12px] text-primary-1">
              Copyright 2023. All right reserved
            </p>
            <div className="flex items-center justify-center mt-3 lg:mt-0 gap-4">
              <Link href={""} className="paragraph text-[10px] lg:text-[12px] text-primary-1">
                Terms & Conditions
              </Link>
              <Link href={""} className="paragraph text-[10px] lg:text-[12px] text-primary-1">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};

export default BuyerSignUp;