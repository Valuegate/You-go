"use client";
import Image from "next/image";
import FlexImg from "@/public/assets/Rectangle22.png";
import BackButton from "@/public/components/BackButton/BackButton";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Loader } from "@mantine/core";

const ForgotPassword = () => {


  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row h-[100vh] sm:h-auto">
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:justify-start sm:w-full">
          <div className="mb-5 sm:mb-24 sm:mt-10">
            <BackButton to={"/login"} />
          </div>
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            Forget Password
          </h3>
          
          <div className="mt-10">
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values, actions) => {
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
                      placeholder="mail@email.com"
                      className="placeholder-italic mt-1 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
                    />
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

export default ForgotPassword;
