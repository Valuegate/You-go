"use client"
import React, { useEffect, useState } from "react";
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
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import BackButton from "@/public/components/BackButton/BackButton";

const RegisterAsSeller = () => {
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
    // is_staff: true,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Signup, error, data } =
    useUserSellerRegister();

  useEffect(() => {
    if (isError) {
      setErrorMsg("An error occurred during signup. Please try again.");
    }
  }, [isError]);

  if (isSuccess) {
    router.push("/seller");
  }

  const handleSignup = () => {
    setErrorMsg(""); // Clear previous error message
    Signup(credentials);
  };

  const handlePhoneNumberChange = (value) => {
    setCredentials({
      ...credentials,
      phone_number: value || "", // handle null value
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className="flex flex-col lg:flex-row">
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:justify-start sm:w-full">
          <div className="mb-5 sm:mb-24 sm:mt-10">
            <BackButton to={"/login"} />
          </div>
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            Nice to see you
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
            Register as a seller in seconds
          </p>

          <div className="mt-10">
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
                  {/* <div className="mb-4">
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
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
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
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block">
                      Phone Number
                    </label>
                    <PhoneInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={credentials.phone_number}
                      onChange={handlePhoneNumberChange}
                      placeholder="Enter phone number"
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1  rounded w-[70%] sm:w-full"
                    />
                  </div> */}


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
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
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
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
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
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
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
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
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
                        className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
                      />
                    </div>
                  {/* <PasswordInput label={"Password"} /> */}

                  {/* <div className="mb-4">
                    <label htmlFor="password" className="block">
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
                          <span className="w-6 h-6">&#128065;</span> // Unicode for open eye
                        ) : (
                          <span>
                            <EyeSlashIcon />
                          </span> // Unicode for closed eye
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="password" className="block">
                      Confirm Password
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="re-password"
                        name="re-password"
                        placeholder="Confirm your password"
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
                    className="flex items-center text-[16px] leading-[32px] font-normal text-light-black-5 mb-4 mt-4"
                    htmlFor="remember"
                  >
                    <input
                      type="checkbox"
                      id="remember"
                      className="custom mr-2 text-green w-4 h-4"
                    />
                    Agree to our terms and conditions
                  </label> */}
                  <div className="mt-4">
                    <button
                      type="submit"
                      onClick={handleSignup}
                      className="flex sm:w-full justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] w-[70%] text-white"
                    >
                      {isLoading ? "Wait a minute....." : "Register"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* <div className="flex justify-start mb-20 gap-1 pt-4 lg:pt-8 sm:justify-center">
            <h1 className="text-center lg:text-left font-normal text-[14px] sm:text-[18px] lg:text-lg">
              Already have an account?
            </h1>
            <Link href="../login">
              <h1 className="text-center lg:text-left font-medium text-[14px] sm:text-[18px] lg:text-lg text-weirdBrown">
                Login
              </h1>
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
  )
}

export default RegisterAsSeller;