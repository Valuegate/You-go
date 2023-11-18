"use client";
import React from "react";
import { Form, Formik } from "formik";
import PasswordInput from "../PasswordInput/PasswordInput";
// import useUserRegister, {
//   TSignupPayload,
// } from "@/public/hooks/mutations/useUserRegister";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EyeSlashIcon } from "@/public/icons";
import useUserRegister, { TSignupPayload } from "@/public/hooks/mutations/useUserRegister";

const InputField = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState<TSignupPayload>({
    full_name: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Signup, error, data } =
    useUserRegister();

  if (isSuccess) {

    router.push("/buyer");
  }

  const handleSignup = () => {
    // console.log("Credentials", credentials);
    Signup(credentials);
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
      {/* {isError && (
              <p className="text-sm text-red-500">
                {error?.response?.data?.detail as string}
              </p>
            )} */}
      <Formik
        initialValues={{
          email: "",
          full_name: "",
          phone_number: "",
          password: "",
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
              <label htmlFor="full-name" className="block">
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
                placeholder="Full Name"
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
                placeholder="+234"
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
  );
};

export default InputField;
