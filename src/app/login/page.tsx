"use client";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle22.png";
import Google from "@/public/assets/Group7.png";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useMutation } from "react-query";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import useLogin, { TLoginPayload } from "@/public/hooks/mutations/useLogin";
import { Loader } from "@mantine/core";

import { motion } from "framer-motion";
import { HiShoppingCart } from "react-icons/hi";
import BackButton from "@/public/components/BackButton/BackButton";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const router = useRouter();
  // const is_staff: boolean = false;
  const [credentials, setCredentials] = useState<TLoginPayload>({
    email: "",
    password: "",
    is_staff: false,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, login, error, data } = useLogin();

  // useEffect(() => {
  if (isSuccess) {
    // Set token to local storage
    localStorage.setItem("userToken", data?.access);
    localStorage.setItem("userName", data?.full_name);
    localStorage.setItem("id", data?.id as string);
    localStorage.setItem("userStatus", data?.is_staff ? "seller" : "buyer");
    console.log(data);
    //     if (data.is_staff) {
    //       router.push("/seller");
    //     } else {
    //       router.push("/buyer");
    //     }
    //   }
    // }, [isSuccess, data, router]);

    // const handleLogin = () => {
    //   login(credentials);
    // };

    router.push("/shop");
  }

  useEffect(() => {
    if (isError) {
      let data = error.response?.data as any;
      toast.error(data.detail);
    }
  }, [error, isError]);

  const handleLogin = () => {
    login(credentials);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row h-[100vh] sm:h-auto">
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:justify-start sm:w-full">
          <div className="mb-5 sm:mb-24 sm:mt-10">
            <BackButton to={"/home"} />
          </div>
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            Welcome Back
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
            Login to your account in seconds
          </p>
          {/* {isError && (
              <p className="text-sm flex justify-center text-primary">
                {error?.response?.data?.detail as string}
              </p>
            )} */}

          <div className="mt-10">
            <Formik
              initialValues={{
                email: "",
                password: "",
                is_staff: Boolean,
              }}
              onSubmit={(values, actions) => {
                // setTimeout(() => {
                //   alert(JSON.stringify(values, null, 2));
                //   actions.setSubmitting(false);
                // }, 1000);
                // console.log("VALUES", values);
                // const res =  signIn('credentials', { ...values })
                // console.log("LOGIN RES", res);
              }}
            >
              {({ handleChange }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="email" className="block font-normal">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      // onChange={handleChange}
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          email: e.target.value,
                        })
                      }
                      placeholder="mail@email.com"
                      className="placeholder-italic mt-1 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
                    />
                  </div>

                  <div className="mb-4 mt-4">
                    <label htmlFor="password" className="block font-normal">
                      Password
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            password: e.target.value,
                          })
                        }
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-full"
                      />
                      <button
                        className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <IoMdEyeOff fill="#470912" size={"20px"} />
                        ) : (
                          <IoMdEye fill="#470912" size={"20px"} />
                        )}
                      </button>
                    </div>
                  </div>

                  <Link href="/forgotpassword">
                    <h1 className="text-center lg:text-end lg:w-[70%] font-normal text-[16px] sm:text-[16px] text-weirdBrown">
                      Forgot Password?
                    </h1>
                  </Link>

                  <div className="mt-8">
                    <button
                      type="submit"
                      onClick={handleLogin}
                      className="flex sm:w-full justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] w-[70%] text-white"
                    >
                      {isLoading ? (
                        <Loader
                          color="#D4145A"
                          className="flex items-center justify-center"
                        />
                      ) : (
                        "Login"
                      )}
                    </button>
                  </div>

                  {/* {loginMutation.isError && (
                      <p className="text-red-500 mt-2">
                        {loginMutation.error.message}
                      </p>
                    )} */}
                </Form>
              )}
            </Formik>
          </div>
          <div className="flex justify-start mt-10 gap-1 pt-4 lg:pt-8 sm:justify-center">
            <h1 className="text-center lg:text-left font-normal text-[14px] sm:text-[18px] lg:text-lg">
              Don&apos;t have an account?
            </h1>
            <Link href="/signup">
              <h1 className="text-center lg:text-left font-medium text-[14px] sm:text-[18px] lg:text-lg text-weirdBrown">
                Signup
              </h1>
            </Link>
          </div>

          {/* <div className="flex justify-center items-center gap-4 pb-12 lg:pb-24">
          <Link href={"#"}>
            <button className="bg-blue text-white flex items-center justify-center w-[103px] h-[38px] text-base font-normal">
              Facebook
            </button>
          </Link>

          <Link href={"#"}>
            <Image src={Google} alt={""} />
          </Link>
        </div> */}
        </div>

        <div className="sm:hidden md:hidden lg:block w-[50%] h-[100vh]">
          <Image
            src={FlexImg}
            alt={"woman"}
            className="h-[100vh] w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
