"use client";
import React, { useState, useEffect } from "react";


import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
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
import { MdLogout } from "react-icons/md";
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
    <div className="bg-white-1 h-full flex flex-col relative">
      <NavBar showSearch={false} transparent={true} />

      <div className="w-full bg-white-1 h-[90vh] justify-center flex flex-col">
        {!isLoading && isSuccess && (
          <div className="flex flex-row px-[2%]">
            <div
              className={`flex flex-col sm:flex-col gap-20 w-[30%] rounded-xl shadow-xl h-full bg-white`}
            >
              {user && (
                <div className="w-full h-[85vh] rounded-lg py-3 flex flex-col items-center relative">
                  <div
                    className="flex justify-center text-weirdBrown absolute right-5 top-0 items-center gap-2 mt-5 cursor-pointer"
                    onClick={() => {
                      window.localStorage.setItem("userToken", "");
                      window.localStorage.setItem("userName", "");
                      window.localStorage.setItem("userStatus", "");
                      window.location.replace("/");
                    }}
                  >
                    Sign out
                    <MdLogout size={"20px"} />
                  </div>

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

                  <p className="text-[14px] my-4 font-normal text-light-black-4">
                    {user.about_seller}
                  </p>

                  <Link
                    href={"/edit-profile"}
                    className="underline text-weirdBrown my-4"
                  >
                    Edit your profile
                  </Link>

                  <div className="w-full rounded-lg py-4 px-4 flex flex-col">
                    <Link
                      href={"#"}
                      className="mb-5 flex justify-between items-center px-4 py-2 bg-weirdBrown rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Image src={FeedBack} alt=" " />
                        <p className="text-[14px] font-normal text-white">
                          {/* {user.feedbacks} */}
                          Feedbacks
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <p className="text-[14px] font-normal">View All</p>
                        <FaChevronRight />
                      </div>
                    </Link>

                    {/* <p className="text-[14px] mt-20 font-normal text-light-black-4">
                      ❗️ Never pay in advance! Even for the delivery
                    </p>

                    <p className="text-[14px] font-normal text-light-black-4 mt-2 mb-5">
                      ✅ Inform the seller you got their number on YouGo so they
                      know where you came from
                    </p> */}
                  </div>
                </div>
              )}
            </div>

            <div className="w-[70%] h-full flex flex-col px-10">
              <p className="text-light-black-3 text-xl font-medium">Products</p>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Loader color="#D4145A" size={"36px"} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
