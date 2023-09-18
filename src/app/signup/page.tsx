import InputField from "@/public/components/InputField/InputField";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle 21.png"
import Google from "@/public/assets/Group 7.png"

const SignUp = () => {
  return (
    <>
      <NavBar btnText={"Login"} />
      <div className="relative">
      <div className="flex">
        <div className="w-[50%] px-24 pt-12 overflow-y-scroll h-[88vh]">
          <h3 className="font-bold text-[31px] leading-[36px] pb-4 text-primary text-center">Create a New Account</h3>
          <p className="font-medium text-[16px] leading-[32px] text-light-black-5 pb-4 text-center">
            Create a new account in seconds
          </p>
          <InputField />

          <div className="flex justify-center gap-1 pt-8">
            <h1 className="text-center font-medium text-l">
              Do you have an account?
            </h1>
            <Link href="../login">
              <h1 className="text-center font-semibold text-l text-primary">
                Login
              </h1>
            </Link>
          </div>

          <div className=" pt-8 pb-4">
            <h2 className="text-primary font-normal text-[25px] leading-[29px] text-center">Social Login</h2>
          </div>

          <div className="flex justify-center items-center gap-4 pb-24">
            <Link href={"#"}>
            <button className="bg-blue text-white flex items-center justify-center w-[103px] h-[38px] text-base font-normal">Facebook</button>
            </Link>

            <Link href={"#"}>
                <Image src={Google} alt={""} />
            </Link>
          </div>

          
        </div>
      

      <div className="w-[50%]">
        <Image src={FlexImg} alt={""} className="h-[90vh]" />
      </div>

      <div className="w-full absolute bottom-0 right-0 left-0 h-[40px] bg-black px-24">
        <div className="flex justify-between items-center pt-3">
          <p className="paragraph text-primary-1">Copyright 2023. All right reserved</p>
          <div className="flex gap-4">
            <Link href={""} className="paragraph text-primary-1">Terms & Conditions</Link>
            <Link href={""} className="paragraph text-primary-1">Privacy Policy</Link>
          </div>
        </div>
      </div>

      </div>
      </div>
    </>
  );
};

export default SignUp;
