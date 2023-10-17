"use client"
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle22.png";
import Google from "@/public/assets/Group7.png";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import { Form, Formik } from "formik";

const Login = () => {
  return (
    <>
      <NavBar btnText={"Signup"} />
      <div className="relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%] px-4 pt-4 pb-8 lg:pr-24 lg:pl-48 lg:pt-12 lg:overflow-y-scroll lg:h-[88vh]">
            <h3 className="font-bold text-[24px] lg:text-[31px] leading-[28px] lg:leading-[36px] pb-4 text-primary text-center lg:text-left">
              Welcome Back
            </h3>
            <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
              Login to your account in seconds
            </p>

            <div>
              <Formik
                initialValues={{
                  email: "",
                  firstName: "",
                  lastName: "",
                  password: "",
                }}
                onSubmit={(values, actions) => {
                  setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                  }, 1000);
                }}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="email" className="block">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="mail@email.com"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <PasswordInput label={"Password"} />
                    <label
                      className="flex items-center justify-center text-[16px] leading-[32px] font-normal text-light-black-5 mb-4 mt-4"
                      htmlFor="remember"
                    >
                      <input
                        type="checkbox"
                        id="remember"
                        className="custom mr-2 text-green w-4 h-4"
                      />
                      Agree to our terms and conditions
                    </label>
                    <div className="mt-4">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-primary-1 to-primary round w-full h-10 text-white"
                      >
                        Register
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="flex justify-center gap-1 pt-4 lg:pt-8">
              <h1 className="text-center lg:text-left font-medium text-[12px] lg:text-lg">
                You do not have an account?
              </h1>
              <Link href="../signup">
                <h1 className="text-center lg:text-left font-semibold text-[12px] lg:text-lg text-primary">
                  Signup
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

export default Login;