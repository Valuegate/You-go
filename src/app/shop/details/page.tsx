"use client";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import { useState } from "react";
import Perfume from "@/public/assets/perfume.png";
import Footer from "@/public/components/Footer/page";
import Lady from "@/public/assets/lady5.png";
import {
  BrandIcon,
  CalendarIcon,
  FacebokIcon,
  InstagramIcon,
  SocialIcon,
  XIcon,
} from "@/public/icons";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { StockIcon } from "@/public/icons/stock-icon";
import { ArrowRightIcon } from "@/public/icons/arrowright-icon";
import Link from "next/link";
import ItemsCard from "@/public/components/ItemsCard/page";

const ShopDetails = () => {
  const [clickedSize, setClickedSize] = useState<number | null>(null);

  const handleSizeClick = (size: number) => {
    setClickedSize(size);
  };

  const getSizeClass = (size: number) => {
    return clickedSize === size
      ? "text-black bg-primary-1"
      : "text-white bg-primary";
  };

  const [num, setNum] = useState(1);

  return (
    <>
      <NavBar>
        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
          Logout
        </button>
      </NavBar>

      <div className="overflow-y-scroll sm:h-screen h-[87vh]">
        <div className="px-6 md:px-24">
          <div className="mt-8 flex sm:flex-col flex-row gap-10">
            <div className="sm:w-full w-[70%]">
              <div>
                <Image src={Perfume} alt={""} className="w-full" />
              </div>
              <div className="flex justify-between gap-4 mt-8 sm:overflow-x-scroll">
                <Image
                  src={Perfume}
                  alt={""}
                  className="w-[8rem] h-[9rem] object-cover rounded-lg"
                />
                <Image
                  src={Perfume}
                  alt={""}
                  className="w-[8rem] h-[9rem] object-cover rounded-lg"
                />
                <Image
                  src={Perfume}
                  alt={""}
                  className="w-[8rem] h-[9rem] object-cover rounded-lg"
                />
                <Image
                  src={Perfume}
                  alt={""}
                  className="w-[8rem] h-[9rem] object-cover rounded-lg"
                />
                <Image
                  src={Perfume}
                  alt={""}
                  className="w-[8rem] h-[9rem] object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="sm:w-full w-[30%]">
              <div className="flex flex-col gap-2">
                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                  <div className="text-primary text-lg font-bold mb-3">
                    $28.00
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-1 flex items-center justify-center shadow-xl text-white ">
                      Start a chat
                    </button>
                  </div>
                </div>

                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                  <div className="flex gap-2">
                    <div>
                      <Image
                        src={Lady}
                        alt={""}
                        className="w-[5rem] h-[5rem]"
                      />
                    </div>
                    <div>
                      <h2 className="font-medium text-base text-light-black-6">
                        Vanila Castro
                      </h2>
                      <p className="font-normal text-sm text-light-black-5">
                        +123 456 789 10
                      </p>
                      <p className="font-normal text-sm text-light-black-5">
                        mybusinessmail@email.com
                      </p>

                      <div className="flex items-center gap-3 mt-8">
                        <FacebokIcon width="16" height="16" />
                        <XIcon width="16" height="16"/>
                        <InstagramIcon color="#d4145a" width="20" height="20" />
                        <BsLinkedin color="#d4145a" width="16" height="16" />
                        <BsWhatsapp color="#d4145a" width="16" height="16" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                  <h2 className="text-lg font-bold text-light-black-5">
                    Safety Tips
                  </h2>
                  <div>
                    <li className="font-normal text-sm text-light-black-5">
                      Remember, don't send any pre-payments
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Meet the seller at a safe public place
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Inspect the goods to make sure they meet your needs
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Check all documentation and only pay if you're satisfied
                    </li>
                  </div>
                </div>
                <div className="">
                  <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 flex items-center justify-center shadow-xl text-white w-full">
                    Become a seller
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex sm:flex-col flex-row gap-10">
            <div className="sm:w-full w-[70%]">
              <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                <h1 className="text-2xl font-bold text-light-black-5">
                  Product Name Goes Here
                </h1>
                <div className="flex items-center sm:flex-col sm:gap-2 gap-8 mt-3">
                  <div className="flex items-center gap-2">
                    <StockIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Stock:
                    </h2>
                    <p className="text-base font-normal text-primary">23</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <BrandIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Brand:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      Our Brand
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Posted:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      11-11-2023
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:gap-2 gap-10 mt-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-light-black-4 font-normal text-sm">
                      Product category:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      Apparel
                    </p>
                    <span>|</span>
                    <p className="text-base font-normal text-primary">
                      Clothing
                    </p>
                  </div>

                  <div className="bg-primary-1 py-2 px-4 rounded-lg">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <SocialIcon />
                        <h2 className="text-white text-base font-semibold cursor-pointer">
                          25 Feedback
                        </h2>
                      </div>

                      <div className="flex items-center gap-2">
                        <Link
                          className="text-white text-base font-normal"
                          href={""}
                        >
                          View All
                        </Link>
                        <ArrowRightIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-primary-1 border-8 rounded-lg py-3 pl-3 mt-4">
              <h2 className="text-lg font-bold text-light-black-5">
                  Product description
                </h2>
                <div>
                  <li className="font-normal text-sm text-light-black-5">
                    Product description
                  </li>
                  <li className="font-normal text-sm text-light-black-5">
                    Product description Product description
                  </li>
                  <li className="font-normal text-sm text-light-black-5">
                    Product description your needs
                  </li>
                  <li className="font-normal text-sm text-light-black-5">
                    Product description
                  </li>
                </div>
              </div>
            </div>

            <div className="sm:w-full w-[30%]">
              <div className="border-primary-1 border-8 rounded-lg py-3 px-3">
              <h2 className="text-lg font-bold text-light-black-5">
              Similar Products
                </h2>
                <div className="flex flex-col gap-3">
                <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/cup.png"} name={"Human Bag"} rating={""} price={"500"} />
                <ItemsCard width={"300"} height={"300"} className={"shadow-2xl"} image={"/assets/shoe3.png"} name={"Human Bag"} rating={""} price={"500"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShopDetails;
