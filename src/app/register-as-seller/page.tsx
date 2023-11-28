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