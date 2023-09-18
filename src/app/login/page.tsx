"use client"
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle 21.png";
import Google from "@/public/assets/Group 7.png";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import { Form, Formik } from "formik";

const Login = () => {
  return (
    <>
      <NavBar btnText={"Signup"} />
      <div className="relative">
        <div className="flex">
          <div className="w-[50%] px-24 pt-12 overflow-y-scroll h-[88vh]">
            <h3 className="font-bold text-[31px] leading-[36px] pb-4 text-primary text-center">
              Welcome Back
            </h3>
            <p className="font-medium text-[16px] leading-[32px] text-light-black-5 pb-4 text-center">
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
            <div className="flex justify-center gap-1 pt-8">
              <h1 className="text-center font-medium text-l">
              You do not have account?
              </h1>
              <Link href="../signup">
                <h1 className="text-center font-semibold text-l text-primary">
                  Signup
                </h1>
              </Link>
            </div>

            <div className=" pt-8 pb-4">
              <h2 className="text-primary font-normal text-[25px] leading-[29px] text-center">
                Social Login
              </h2>
            </div>

            <div className="flex justify-center items-center gap-4 pb-24">
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

          <div className="w-[50%]">
            <Image src={FlexImg} alt={""} className="h-[90vh]" />
          </div>

          <div className="w-full absolute bottom-0 right-0 left-0 h-[40px] bg-black px-24">
            <div className="flex justify-between items-center pt-3">
              <p className="paragraph text-primary-1">
                Copyright 2023. All right reserved
              </p>
              <div className="flex gap-4">
                <Link href={""} className="paragraph text-primary-1">
                  Terms & Conditions
                </Link>
                <Link href={""} className="paragraph text-primary-1">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
