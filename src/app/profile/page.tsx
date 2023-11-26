"use client";
import React, { useState } from "react";

import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Author from "@/public/assets/Ellipse-2402.svg";
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

const Profile = () => {
  const user = {
    name: "Benjamin Achan",
    picture: Author,
    contact: "+1 234 567 890",
    email: "mybusiness@mail.com",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque eget eros tempor consequat. Etiam non est dapibus, elementum est eu, pharetra nisi. Pellentesque eget volutpat leo, sed fringilla arcu. Etiam laoreet ipsum sit amet eros rutrum tincidunt. Mauris venenatis congue dignissim. Donec imperdiet quam in sem euismod accumsan. Aliquam consequat nunc venenatis quam rutrum semper. Donec condimentum, sem rhoncus consectetur hendrerit, sem tortor dignissim arcu, ut efficitur magna metus quis lacus. Proin dui sapien, varius at aliquet vitae, condimentum eget risus. Vivamus suscipit, purus volutpat lobortis dignissim, nisi felis faucibus eros, nec facilisis tortor massa at tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate justo eget felis tristique porta. Etiam convallis lorem vitae lorem tempus, in feugiat lectus congue. Nulla vitae turpis fermentum elit euismod mattis et a enim.",
    feedbacks: 25,
  };

  const filters = [
    "Recommended First",
    "Newest First",
    "Lowest Price First",
    "Highest Price First",
  ];

  const products = [
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
  ];

  const [selectedFilter, setSelectedFilter] = useState<number>(0);

  return (
    <>
      <NavBar showSearch={false} />

      <div className="mt-16 flex flex-col gap-8 w-full px-10 h-[90vh] overscroll-y-scroll">
        <div className="flex gap-8">
          <div className="flex flex-col w-[25%] mb-32">
            <p className="text-[20px] font-bold">Profile</p>
            <div className="bg-primary-1 w-full rounded-xl py-4 px-4 mt-5">
              <div className="bg-white w-full rounded-lg py-3 flex flex-col items-center">
                <div className="mt-5 mb-5">
                  <Image src={Author} alt="" />
                </div>

                <p className="text-[16px] font-bold">{user.name}</p>
                <p className="text-[14px] font-normal text-light-black-4">
                  {user.contact}
                </p>
                <p className="text-[14px] font-normal text-light-black-4">
                  {user.email}
                </p>

                <div className="flex gap-5 items-center justify-center mt-5 mb-5">
                  <Image src={SC} alt=" " className="w-[25px] h-[25px] cursor-pointer" />
                  <Image src={SC1} alt=" " className="w-[25px] h-[25px] cursor-pointer" />
                  <Image src={SC2} alt=" " className="w-[25px] h-[25px] cursor-pointer" />
                  <Image src={SC3} alt=" " className="w-[25px] h-[25px] cursor-pointer" />
                  <Image src={SC4} alt=" " className="w-[25px] h-[25px] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="bg-primary-1 w-full rounded-xl py-4 px-4 mt-5">
              <div className="bg-white w-full rounded-lg py-4 px-4 flex flex-col">
                <div className="mb-5 flex justify-between items-center px-4 py-2 bg-primary-1 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Image src={FeedBack} alt=" " />
                    <p className="text-[14px] font-normal text-white">
                      {user.feedbacks} Feedbacks
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-[14px] font-normal text-white">
                      View All
                    </p>

                    <FaChevronRight fill={"#FFFFFF"} />
                  </div>
                </div>

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
                  {user.about}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[75%]">
            <div className="flex justify-between items-center">
              <p className="text-[20px] font-bold">Products</p>
              <div className="flex items-center gap-5">
                <p>Sort by:</p>
                <div className="flex items-center gap-2">
                  <Image src={Recommend} alt=" " className="cursor-pointer" />
                  <p>{filters[selectedFilter]}</p>
                </div>
              </div>
            </div>

            <div className="sm:flex mt-5 sm:flex-col sm:gap-5 sm:w-full grid grid-cols-4 gap-5 w-full">
              {products.map((product, i) => {
                return (
                  <ItemsCard
                    key={i}
                    name={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.reviews}
                    width={0}
                    height={0}
                    className={product.from}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-32" />
        <Footer />
      </div>
    </>
  );
};

export default Profile;
