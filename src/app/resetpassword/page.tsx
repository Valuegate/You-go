"use client";
import Image from "next/image";
import FlexImg from "@/public/assets/Rectangle22.png";
import BackButton from "@/public/components/BackButton/BackButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Loader } from "@mantine/core";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const ResetPassword = () => {

    const [confirm, setConfirm] = useState<string>("");

    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);


  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row h-[100vh] sm:h-auto">
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:justify-start sm:w-full">
          <div className="mb-5 sm:mb-24 sm:mt-10">
            <BackButton to={"/forgotpassword"} />
          </div>
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            Rest Your Password
          </h3>
          
          <div className="mt-10">
            <Formik
              initialValues={{
                password: "",
              }}
              onSubmit={(values, actions) => {
              }}
            >
              {({ handleChange }) => (
                <Form>
                   <div className="mb-4">
                    <label htmlFor="password" className="block">
                      Password
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder="New password"
                        // onChange={(e) => {
                        //   setCredentials({
                        //     ...credentials,
                        //     password: e.target.value,
                        //   });
                        //   setIsPasswordValid(e.target.value.length >= 6);
                        // }}
                        className={`placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-full ${
                          !isPasswordValid ? "border-red-500" : ""
                        }`}
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
                    {!isPasswordValid && (
                      <p className="text-primary text-sm mt-1">
                        Password must be at least 6 characters long
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="re-password" className="block">
                      Confirm New Password
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword1 ? "text" : "password"}
                        id="re-password"
                        name="re-password"
                        placeholder="Confirm your new password"
                        onChange={(e) => setConfirm(e.target.value)}
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-full"
                      />
                      <button
                        className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                        onClick={() => setShowPassword1(!showPassword1)}
                      >
                        {showPassword1 ? (
                          <IoMdEyeOff fill="#470912" size={"20px"} />
                        ) : (
                          <IoMdEye fill="#470912" size={"20px"} />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                    //   onClick={handleForgot}
                      className="flex sm:w-full justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] w-[70%] text-white"
                    >
                      {/* {isLoading ? (
                        <Loader
                          color="#D4145A"
                          className="flex items-center justify-center"
                        />
                      ) : (
                        "Submit"
                      )} */}
                      Submit
                    </button>
                  </div>
                  </Form>
              )}
            </Formik>
            </div>


          
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

export default ResetPassword;
