"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/page";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { Loader } from "@mantine/core";

import { motion } from "framer-motion";
import useUserUpdate, {
  TUpdatePayload,
} from "@/public/hooks/mutations/useUserUpdate";
import { useRouter } from "next/navigation";

const EditProfile = () => {
  const { data: user, isLoading, isSuccess } = useFetchUsersProfile();
  const [username, setUsername] = useState<string>("");

  // useEffect(() => {
  //   if (user && isSuccess) {
  //     setUsername(user.full_name!);
  //     (document.getElementById("fullNameField") as HTMLInputElement).value = user.full_name!;
  //     (document.getElementById("numberField") as HTMLInputElement).value = (user.phone_number! as string);;
  //     (document.getElementById("emailField") as HTMLInputElement).value = user.email;
  //   }
  // }, [user, isSuccess]);

  useEffect(() => {
    if (user && isSuccess) {
      setUsername(user.full_name!);

      setCredentials({
        full_name: user.full_name || "",
        image: "",
        email: user.email || "",
        phone_number: user.phone_number || "",
        about_seller: user.about_seller || "",
        address: user.address || "",
        password: "",
      });
    }
  }, [user, isSuccess]);

  const router = useRouter();
  const getId = localStorage.getItem("id");
  const [credentials, setCredentials] = useState<TUpdatePayload>({
    full_name: "",
    image: "",
    email: "",
    phone_number: "",
    about_seller: "",
    address: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, Update, error, data } = useUserUpdate({ id: Number(getId) });

  // useEffect(() => {
  if (isError) {
    setErrorMsg("An error occurred during signup. Please try again.");
  }
  // }, [isError]);

  // if (isSuccess) {
  //   router.push("/profile");
  // }

  const handleUpdate = async () => {
    setErrorMsg(""); // Clear previous error message
    try {
      await Update(credentials);
      router.push("/profile");
    } catch (error) {
      setErrorMsg("An error occurred during the update. Please try again.");
    }
  };

  return (
    <div className="h-[100vh] sm:h-full bg-white-1">
      <NavBar showSearch={false} transparent={true} />
      <div
        className={`h-[90vh] sm:h-full flex flex-col ${
          isLoading ? "justify-start" : "justify-around"
        } px-[10%]`}
      >
        <div className="flex items-center gap-10 text-4xl sm:text-2xl sm:gap-5 font-medium h-[10vh]">
          <p
            onClick={() => {
              window.location.href = "/profile";
            }}
            className="text-light-black-4 cursor-pointer"
          >
            My Profile
          </p>
          <FaChevronRight fill={"#5A5F5C"} />
          <p className="text-weirdBrown">Edit Profile</p>
        </div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <Loader
              color="#D4145A"
              size={"36px"}
              className="flex items-center justify-center"
            />
          </div>
        )}

        {user && isSuccess && (
          <div className="h-[70vh] sm:mt-10 sm:mb-20   sm:h-auto bg-white w-full rounded-2xl shadow-xl flex sm:flex-col justify-between px-10 py-5">
            <div className="flex flex-col w-[20%] sm:w-full sm:items-center justify-center">
              <div className="mt-10 rounded-full bg-weirdBrown h-[150px] w-[150px] text-center flex text-[48px] justify-center font-medium items-center text-white">
                {user.full_name?.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="flex flex-col sm:w-full w-[40%] justify-center">
              <label className="block font-normal mt-10 text-light-black-4">
                Full Name
              </label>
              <input
                id="fullNameField"
                type="text"
                placeholder="Your Full name"
                value={credentials.full_name}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    full_name: e.target.value,
                  })
                }
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />

              <label className="block font-normal mt-10 text-light-black-4">
                Phone Number
              </label>
              <input
                id="numberField"
                type="text"
                placeholder="Your Phone Number"
                value={credentials.phone_number}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    phone_number: e.target.value,
                  })
                }
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />

              <label className="block font-normal mt-10 text-light-black-4">
                Email Address
              </label>
              <input
                id="emailField"
                type="email"
                placeholder="Your Email Address"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    email: e.target.value,
                  })
                }
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />
            </div>

            <div className="flex w-[40%] sm:w-full flex-col justify-center">
              <label className="block font-normal mt-10 text-light-black-4">
                About
              </label>
              <textarea
                id="aboutField"
                cols={30}
                rows={5}
                placeholder="Describe yourself"
                value={credentials.about_seller}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    about_seller: e.target.value,
                  })
                }
                className="focus:outline-none placeholder-italic mt-2 p-2 border-none bg-white-1 rounded w-full resize-none"
              />

              <motion.button
                onClick={handleUpdate}
                className="flex sm:w-full mt-10 w-[50%] justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] px-6 text-white"
              >
                Save Changes
                <FaChevronRight size={"25px"} />
              </motion.button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditProfile;
