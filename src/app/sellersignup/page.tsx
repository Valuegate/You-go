"use client";
import React, { useState } from "react";
import { Form, Formik } from "formik";
import PasswordInput from "@/public/components/PasswordInput/PasswordInput";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle22.png";
import useUserSellerRegister, {
  TSignupPayload,
} from "@/public/hooks/mutations/useUserSellerRegister";
import { useRouter } from "next/navigation";
import { EyeSlashIcon } from "@/public/icons";

const SellerSignUp = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<TSignupPayload>({
    email: "",
    password: "",
    full_name: "",
    phone_number: "",
    address: "",
    brand_name: "",
    social_business_bio: "",
    website: "",
    short_business_bio: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Signup, error, data } =
    useUserSellerRegister();

  if (isSuccess) {
    router.push("/seller");
  }

  const handleSignup = () => {
    // console.log("Credentials", credentials);
    Signup(credentials);
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <NavBar>
        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
          Login
        </button>
      </NavBar>
      <div className="relative">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-[50%] px-4 py-8 lg:pr-24 lg:pl-48 lg:pt-12 lg:overflow-y-scroll lg:h-[87vh]">
            <h3 className="font-bold text-[24px] lg:text-[31px] leading-[28px] lg:leading-[36px] pb-4 text-primary text-center">
              Create a Seller Account
            </h3>
            <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center">
              Create a new account in seconds
            </p>
            {/* <InputField /> */}

            <div>
              <Formik
                initialValues={{
                  email: "",
                  full_name: "",
                  password: "",
                  phone_number: "",
                  address: "",
                  brand_name: "",
                  social_business_bio: "",
                  website: "",
                  short_business_bio: "",
                }}
                onSubmit={(values, actions) => {
                  // setTimeout(() => {
                  //   alert(JSON.stringify(values, null, 2));
                  //   actions.setSubmitting(false);
                  // }, 1000);
                }}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="first-name" className="block">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="full-name"
                        name="full-name"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            full_name: e.target.value,
                          })
                        }
                        placeholder="Name"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            email: e.target.value,
                          })
                        }
                        placeholder="mail@email.com"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="phone" className="block">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            phone_number: e.target.value,
                          })
                        }
                        placeholder="+123"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="address" className="block">
                        Address:
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            address: e.target.value,
                          })
                        }
                        placeholder="Put address here"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="brand" className="block">
                        Brand Name:
                      </label>
                      <input
                        type="text"
                        id="brand"
                        name="brand"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            brand_name: e.target.value,
                          })
                        }
                        placeholder="Put brand name here"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="social" className="block">
                        Social Media URL:
                      </label>
                      <input
                        type="url"
                        id="social"
                        name="social"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            social_business_bio: e.target.value,
                          })
                        }
                        placeholder="Put your social media here"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="business" className="block">
                        Short Business Bio:
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            short_business_bio: e.target.value,
                          })
                        }
                        placeholder="Put your business bio here"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="website" className="block">
                        Website:
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        onChange={(e) =>
                          setCredentials({
                            ...credentials,
                            website: e.target.value,
                          })
                        }
                        placeholder="Put your website here"
                        className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                      />
                    </div>
                    {/* <PasswordInput label={"Password"} /> */}

                    <div className="mb-4">
              <label htmlFor="email" className="block">
                Password
              </label>

              <div className="relative">
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
                  className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                />
                <button
                  className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <span className="w-6 h-6">&#128065;</span> // Unicode for open eye
                  ) : (
                    <span>
                      <EyeSlashIcon />
                    </span> // Unicode for closed eye
                  )}
                </button>
              </div>
            </div>
            
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
                        onClick={handleSignup}
                        className="bg-gradient-to-r from-primary-1 to-primary round w-full h-10 text-white"
                      >
                        {isLoading ? "Wait a minute....." : "Register"}
                      </button>
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
            <div className="h-40"></div>
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
              <Link
                href={""}
                className="paragraph text-[10px] lg:text-[12px] text-primary-1"
              >
                Terms & Conditions
              </Link>
              <Link
                href={""}
                className="paragraph text-[10px] lg:text-[12px] text-primary-1"
              >
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
