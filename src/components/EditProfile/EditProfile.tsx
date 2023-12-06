"use client";

import React, { useState, useEffect } from "react";
import NavBar from "../NavBar/page";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { Loader } from "@mantine/core";

import { motion } from "framer-motion";

const EditProfile = () => {
  const { data: user, isLoading, isSuccess } = useFetchUsersProfile();
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (user && isSuccess) {
      setUsername(user.full_name!);
  //     document.getElementById("fullNameField")!.value = user.full_name;
  //     document.getElementById("numberField")!.value = user.phone_number;
  //     document.getElementById("emailField")!.value = user.email;
  //   }
  // }, [user, isSuccess]);

  const fullNameField = document.getElementById("fullNameField") as HTMLInputElement;
    const numberField = document.getElementById("numberField") as HTMLInputElement;
    const emailField = document.getElementById("emailField") as HTMLInputElement;

    if (fullNameField) fullNameField.value = user.full_name || "";
    if (numberField) numberField.value = user.phone_number || "";
    if (emailField) emailField.value = user.email || "";
  }
}, [user, isSuccess]);

  return (
    <div className="h-[100vh] bg-white-1">
      <NavBar showSearch={false} transparent={true} />
      <div
        className={`h-[90vh] flex flex-col ${
          isLoading ? "justify-start" : "justify-around"
        } px-[10%]`}
      >
        <div className="flex items-center gap-10 text-4xl font-medium h-[10vh]">
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
          <div className="h-[70vh] bg-white w-full rounded-2xl shadow-xl flex justify-between px-10 py-5">
            <div className="flex flex-col w-[20%] justify-center">
              <div className="mt-10 rounded-full bg-weirdBrown h-[150px] w-[150px] text-center flex text-[48px] justify-center font-medium items-center text-white">
                {user.full_name!.charAt(0).toUpperCase()}
              </div>
            </div>

            <div className="flex flex-col w-[40%] justify-center">
              <label className="block font-normal mt-10 text-light-black-4">
                Full Name
              </label>
              <input
                id="fullNameField"
                type="text"
                placeholder="Your Full name"
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />

              <label className="block font-normal mt-10 text-light-black-4">
                Phone Number
              </label>
              <input
                id="numberField"
                type="text"
                placeholder="Your Phone Number"
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />

              <label className="block font-normal mt-10 text-light-black-4">
                Email Address
              </label>
              <input
                id="emailField"
                type="email"
                placeholder="Your Email Address"
                className="placeholder-italic mt-2 p-2 border-none bg-white-1 focus:outline-none rounded w-[70%] sm:w-full"
              />
            </div>

            <div className="flex w-[40%] flex-col justify-center">
              <label className="block font-normal mt-10 text-light-black-4">
                About
              </label>
              <textarea
                id="aboutField"
                cols={30}
                rows={5}
                placeholder="Describe yourself"
                className="focus:outline-none placeholder-italic mt-2 p-2 border-none bg-white-1 rounded w-full resize-none"
              />

              <motion.button
                animate={{
                  y: ["0%", "10%", "0%"],
                  transition: {
                    duration: 1,
                    repeat: Infinity,
                  },
                }}
                onClick={() => {
                  window.location.replace("/profile");
                }}
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
