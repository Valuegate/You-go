"use client";
import React, { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import Image from "next/image";
import Link from "next/link";
import FlexImg from "@/public/assets/Rectangle22.png";
import useUserRegister, {
  TSignupPayload,
} from "@/public/hooks/mutations/useUserRegister";
import { useRouter } from "next/navigation";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import BackButton from "@/public/components/BackButton/BackButton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/public/components/LanguageSwitcher/LanguageSwitcher";

const SignUp = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [credentials, setCredentials] = useState<TSignupPayload>({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
    is_staff: false,
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [confirm, setConfirm] = useState<string>("");
  const [termsAgreed, setTermsAgreed] = useState(false);

  const { isError, isLoading, isSuccess, Signup, error, data } =
    useUserRegister();

  useEffect(() => {
    if (isError) {
      setErrorMsg("An error occurred during signup. Please try again.");
      let data = error.response?.data as any;
      toast.error(data.errors.email[0]);
    }
  }, [isError, error]);

  if (isSuccess) {
    //localStorage.setItem("userToken", data?.access);
    //localStorage.setItem("userName", data?.full_name);
    //localStorage.setItem("id", data?.id as string);
    //localStorage.setItem("userStatus", data?.is_staff ? "seller" : "buyer");
    //router.push("/home");
    router.push("/login");
  }

  const handleSignup = () => {
    if (!termsAgreed) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    if (credentials.password !== confirm) {
      toast.error("The passwords do not match");
      return;
    }

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
  const [showPassword1, setShowPassword1] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  return (
    <>
      <ToastContainer />
      <div className="flex flex-col lg:flex-row">
        <div className="w-[50%] px-[5%] flex flex-col justify-center sm:justify-start sm:w-full overflow-y-scroll h-screen">
          <div className="mt-40 sm:mb-24 sm:mt-10">
          <div><LanguageSwitcher /></div>
            <BackButton to={"/login"} />
          </div>
          <h3 className="font-bold text-[32px] sm:text-[36px] sm:leading-[28px] leading-[36px] text-weirdBrown sm:text-center">
            {t('niceToSeeYou')}
          </h3>
          <p className="font-medium text-[14px] lg:text-[16px] leading-[24px] lg:leading-[32px] text-light-black-5 pb-4 text-center lg:text-left">
          {t('createAccount')}
          </p>

          <div className="mt-10">
            <Formik
              initialValues={{
                email: "",
                full_name: "",
                password: "",
                confirm_password: "",
                phone_number: "",
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
                    {t('fullName')}
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
                      placeholder="Enter your full name"
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block">
                    {t('email')}
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
                      placeholder={t('enterEmail')}
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1 rounded w-[70%] sm:w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block">
                    {t('whatsappPhoneNumber')}
                    </label>
                    <PhoneInput
                      type="tel"
                      id="phone"
                      name="phone"
                      value={credentials.phone_number}
                      onChange={handlePhoneNumberChange}
                      placeholder={t('enterPhoneNumber')}
                      className="placeholder-italic mt-1 p-2 border-none focus:outline-none bg-white-1  rounded w-[70%] sm:w-full"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="block">
                    {t('password')}
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        placeholder={t('enterPassword')}
                        onChange={(e) => {
                          setCredentials({
                            ...credentials,
                            password: e.target.value,
                          });
                          setIsPasswordValid(e.target.value.length >= 6);
                        }}
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
                        {t('passwordLengthError')}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="re-password" className="block">
                    {t('confirmPassword')}
                    </label>

                    <div className="relative w-[70%] sm:w-full">
                      <input
                        type={showPassword1 ? "text" : "password"}
                        id="re-password"
                        name="re-password"
                        placeholder={t('confirmYourPassword')}
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

                  <label
                    className="flex items-center text-[16px] leading-[32px] font-normal text-light-black-5 mb-4 mt-4"
                    htmlFor="remember"
                  >
                    <input
                      type="checkbox"
                      id="remember"
                      className="custom mr-2 text-green w-4 h-4"
                      checked={termsAgreed}
                      onChange={() => setTermsAgreed(!termsAgreed)}
                    />
                    {t('agreeToTerms')}
                    <Link href={"/termsandconditions"} className="text-primary ml-1 underline">
                    {t('termsAndConditions')}
                    </Link>
                  </label>
                  <div className="mt-4">
                    <button
                      type="submit"
                      onClick={handleSignup}
                      className="flex sm:w-full justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] w-[70%] text-white"
                     
                    >
                      {isLoading ? "Wait a minute....." : t('registerButton')}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div className="flex justify-start mb-20 gap-1 pt-4 lg:pt-8 sm:justify-center">
            <h1 className="text-center lg:text-left font-normal text-[14px] sm:text-[18px] lg:text-lg">
              {t('haveAnAccount')}
            </h1>
            <Link href="../login">
              <h1 className="text-center lg:text-left font-medium text-[14px] sm:text-[18px] lg:text-lg text-weirdBrown">
                {t('login')}
              </h1>
            </Link>
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

export default SignUp;
