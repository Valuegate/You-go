"use client";
import React, { useState, useEffect } from "react";

import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Author from "@/public/assets/Ellipse-2402.svg";
import { FaChevronRight } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import ItemsCard from "@/public/components/ItemsCard/page";
import SC from "@/public/assets/Social-Icons.svg";
import SC1 from "@/public/assets/Social-Icons-1.svg";
import SC2 from "@/public/assets/Social-Icons-2.svg";
import SC3 from "@/public/assets/Social-Icons-3.svg";
import SC4 from "@/public/assets/Social-Icons-4.svg";
import FeedBack from "@/public/assets/Feedback-Icon.svg";
import Recommend from "@/public/assets/Layer_1-2.svg";
import Shoe from "@/public/assets/shoe1.png";
import Link from "next/link";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { FaPowerOff } from "react-icons/fa6";
import { Loader } from "@mantine/core";

const Profile = () => {
  const { data: user, isLoading, isSuccess } = useFetchUsersProfile();

  const [products, setProducts] = useState<any>([]);

  const filters = [
    "Recommended First",
    "Newest First",
    "Lowest Price First",
    "Highest Price First",
  ];

  useEffect(() => {
    console.log(user);

    if (user !== null && user?.is_staff) {
      setProducts([
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },

        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
        {
          image: Shoe,
          title: "Human Shoe",
          reviews: "2630",
          price: 5000,
          from: "Crescent Multipurpose Store",
        },
      ]);
    }
  }, [user, isSuccess]);

  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  return (
    <>
    
      <NavBar showSearch={false} />

      <div className="mt-16 w-full px-10 sm:px-5 h-[90vh] overscroll-y-scroll">
        {!isLoading && isSuccess && (
          <div className="  ">
              
            <div className={`flex justify-center sm:flex-col gap-20`}>
              {user && (
                <div className="bg-primary-1 w-[30%] sm:w-full rounded-xl py-4 px-4 mt-5">
                  <div className="bg-white w-full rounded-lg py-3 flex flex-col items-center relative">
                    <Link
                      href={"/edit-profile"}
                      className="absolute right-5 top-5"
                    >
                      <MdModeEdit size={"25px"} fill={"#A90041"} />
                    </Link>
                    <div className="mt-5 mb-5">
                      <div className="mt-10 flex flex-col items-center">
                        <Link
                          href={"/profile"}
                          className="rounded-full bg-weirdBrown h-[100px] w-[100px] text-center flex text-[32px] justify-center font-medium items-center text-white"
                        >
                          {user.full_name?.charAt(0).toUpperCase()}
                        </Link>
                      </div>
                    </div>

                    <p className="text-[16px] font-bold">{user.full_name}</p>
                    <p className="text-[14px] font-normal text-light-black-4">
                      {user.phone_number}
                    </p>
                    <p className="text-[14px] font-normal text-light-black-4">
                      {user.email}
                    </p>

                    <div className="flex gap-5 items-center justify-center mt-5 mb-5">
                      <Image
                        src={SC}
                        alt=" "
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                      <Image
                        src={SC1}
                        alt=" "
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                      <Image
                        src={SC2}
                        alt=" "
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                      <Image
                        src={SC3}
                        alt=" "
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                      <Image
                        src={SC4}
                        alt=" "
                        className="w-[25px] h-[25px] cursor-pointer"
                      />
                    </div>

                    <div
                      className="flex justify-center items-center gap-3 mt-5 cursor-pointer"
                      onClick={() => {
                        window.localStorage.setItem("userToken", "");
                        window.localStorage.setItem("userName", "");
                        window.localStorage.setItem("userStatus", "");
                        window.location.replace("/");
                      }}
                    >
                      Logout
                      <FaPowerOff fill={"#A90041"} size={"20px"} />
                    </div>
                  </div>
                </div>
              )}
              <div className="w-[40%] sm:w-full">
              <div className="bg-primary-1 w-full rounded-xl py-4 px-4 mt-5">
                <div className="bg-white w-full rounded-lg py-4 px-4 flex flex-col">
                  <Link
                    href={"#"}
                    className="mb-5 flex justify-between items-center px-4 py-2 bg-primary-1 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <Image src={FeedBack} alt=" " />
                      <p className="text-[14px] font-normal text-white">
                        {/* {user.feedbacks} */}
                        Feedbacks
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-[14px] font-normal text-white">
                        View All
                      </p>

                      <FaChevronRight fill={"#FFFFFF"} />
                    </div>
                  </Link>

                  <p className="text-[14px] font-normal text-light-black-4">
                    ❗️ Never pay in advance! Even for the delivery
                  </p>

                  <p className="text-[14px] font-normal text-light-black-4 mt-2 mb-5">
                    ✅ Inform the seller you got their number on YouGo so they
                    know where you came from
                  </p>
                </div>
              </div>
              <div className="bg-primary-1 w-full rounded-xl py-4 px-4 mt-5">
                <div className="bg-white w-full rounded-lg py-4 px-4 flex flex-col gap-5">
                  <p className="text-[16px] font-bold text-light-black-4">
                    About Seller
                  </p>
                  <p className="text-[14px] font-normal text-light-black-4">
                    {user.about_seller}
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center h-[80vh]">
            <Loader
              color="#D4145A"
              size={"36px"}
              className="flex items-center justify-center"
            />
          </div>
        )}
        <div className="h-32" />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
