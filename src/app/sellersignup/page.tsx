"use client"
import React from 'react';
import { Form, Formik } from 'formik';
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle 22.png";

const SellerSignUp = () => {
  return (
    <>
      <NavBar btnText={"Login"} />
      <div className="relative">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[50%] px-4 py-8 lg:pr-24 lg:pl-48 lg:pt-12 lg:overflow-y-scroll lg:h-[88vh]">
          <h3 className="font-bold text-[24px] lg:text-[31px] leading-[28px] lg:leading-[36px] pb-4 text-primary text-center lg:text-left">
            Create a Seller Account
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
            Create a new account in seconds
          </p>
          {/* <InputField /> */}

          <div>
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
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
                <label htmlFor="first-name" className="block">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder='Name' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" name="email" placeholder='mail@email.com' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder='+234' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="numer" className="block">National ID Card Number</label>
                <input type="tel" id="number" name="phone" placeholder='2345678912' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <PasswordInput label={"Password"} />
            <label className="flex items-center justify-center text-[16px] leading-[32px] font-normal text-light-black-5 mb-4 mt-4" htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              className="custom mr-2 text-green w-4 h-4"
            />
            Agree to our terms and conditions
          </label>
            <div className="mt-4">
                <button type="submit" className="bg-gradient-to-r from-primary-1 to-primary round w-full h-10 text-white">Register</button>
            </div>
        </Form>
      )}
    </Formik>
  </div>

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
          <div className='h-40'></div>
        </div>

        <div className="hidden lg:block lg:w-[50%]">
          <Image src={FlexImg} alt={""} className="h-[89vh]" />
        </div>
      </div>

      {/* <div className="w-full absolute bottom-0 right-0 left-0 h-[40px] bg-black px-4 lg:px-24 lg:fixed"> */}
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

export default SellerSignUp;