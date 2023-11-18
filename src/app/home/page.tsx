"use client";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
// import FlexImg from "@/public/assets/Frame 36180.png";
import FlexImg from "@/public/assets/fleximg.png";
import { HiShoppingCart } from "react-icons/hi";
import Lady from "@/public/assets/image3.png";
import Saving from "@/public/assets/Frame36172.png";
import Cart from "@/public/assets/Frame36172(1).png";
import Car from "@/public/assets/Frame36173.png";
import User from "@/public/assets/Frame36172(2).png";
import img2 from "@/public/assets/arrow-left.png";
import img3 from "@/public/assets/carrow-left.png";
import ItemsCard from "@/public/components/ItemsCard/page";
import Lady2 from "@/public/assets/image2.png";
import Lady3 from "@/public/assets/image1.png";
import Link from "next/link";
import Ladies from "@/public/assets/Frame36189.png";
import React from "react";

const HomePage = () => {
  return (
    <>
      <NavBar>
        <Link href={"/signupselect"}>
          <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
            Login
          </button>
        </Link>
      </NavBar>
      <div className="overflow-y-scroll h-screen md:h-[87vh]">
        <div className="px-6 md:px-24">
          <div className="flex flex-col-reverse md:flex-row mt-16">
            <div className="flex-1">
              <div className="mt-8">
                <p className="text-base text-primary font-normal mb-2">
                  WELCOME TO SHOPPING MODE!
                </p>
                <h1 className="text-[40px] md:text-[55px] leading-[48px] md:leading-[62px] text-black font-extrabold w-full">
                  Join the Shopping{" "}
                  <span className="text-primary">Revolution</span> with YouGo
                </h1>
                <p className="text-base text-light-black-3 font-normal mt-4">
                  Embrace a new era of shopping convenience and savings by
                  joining YouGo, your ultimate shopping companion.
                </p>
                <div className="mt-6">
                  <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-full md:w-[160px] h-10 text-white">
                    <HiShoppingCart className="text-white w-[19px] h-[19px]" />
                    Shop Now!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image src={FlexImg} alt={""} />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col mt-20">
            <p className="text-sm text-primary font-semibold mb-2">WHY US?</p>
            <h2 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] text-black font-bold text-center">
              Quality & Style
            </h2>
            <p className="text-base text-light-black-3 font-normal mt-2 w-full md:w-[49%] text-center">
              At YouGo, we believe that fashion should never compromise on
              quality. That&apos;s why our products are built to last
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mt-8">
            <div className="w-full md:w-[30%]">
              <Image src={Lady} alt={""} />
            </div>
            <div className="w-full md:w-[70%]">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="shadow-2xl h-[230px] md:h-[240px] w-full md:w-[360px] rounded-xl">
                  <div className="mt-6 md:mt-6 ml-8">
                    <Image src={Saving} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Money Saving
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-full md:w-[90%]">
                      Shop smart at YouGo and discover our budget-friendly
                      collection that doesn&apos;t compromise on quality.
                    </p>
                  </div>
                </div>
                <div className="shadow-2xl h-[230px] md:h-[240px] w-full md:w-[360px] rounded-xl">
                  <div className="mt-6 md:mt-6 ml-8">
                    <Image src={Cart} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Secure Shopping
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-full md:w-[90%]">
                      Shop confidently knowing that your shopping information is
                      protected.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-between mt-10">
                <div className="shadow-2xl h-[230px] md:h-[240px] w-full md:w-[360px] rounded-xl">
                  <div className="mt-6 md:mt-6 ml-8">
                    <Image src={Car} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Fast Delivery
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-full md:w-[90%]">
                      Our streamlined order processing and fulfillment system
                      speed up the delivery of your favorite products.
                    </p>
                  </div>
                </div>
                <div className="shadow-2xl h-[230px] md:h-[240px] w-full md:w-[360px] rounded-xl">
                  <div className="mt-6 md:mt-6 ml-8">
                    <Image src={User} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      User Friendly
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-full md:w-[90%]">
                      Our easy-to-navigate website ensures that finding your
                      favorite products and making purchases is a breeze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="w-full md:w-[50%]">
                <p className="text-base text-primary font-normal mb-2">
                  EXPLORE MORE
                </p>
                <h1 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[42px] text-black font-bold">
                  Explore Our Products
                </h1>
                <p className="text-sm text-light-black-4 font-normal mt-1 w-full md:w-[80%]">
                  Shop at YouGo for styles that not only look good but also make
                  you feel confident and stylish every day.
                </p>
              </div>

              <div className="w-full md:w-[50%]">
                <div className="flex justify-end gap-3">
                  <Image
                    src={img2}
                    alt="Previous Slide"
                    className="cursor-pointer"
                  />
                  <Image
                    src={img3}
                    alt="Next Slide"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>

            <div className="w-full overflow-y-hidden flex flex-col lg:flex-row justify-between gap-6 mt-6">
            <ItemsCard
                name={"Human Watch"}
                image={"/assets/watch2.png"}
                rating={"(2,630)"}
                price={"5,000"}
                width={"300"}
                height={"300"}
                className={"shadow-2xl"} 
              />

              <ItemsCard
                name={"Cup"}
                image={"/assets/cup.png"}
                rating={"(2,630)"}
                price={"5,000"}
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              />
                <ItemsCard
                name={"Human Bag"}
                image={"/assets/bigbag.png"}
                rating={"(2,630)"}
                price={"5,000"}
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              />

              <ItemsCard
                name={"Human Shoe"}
                image={"/assets/shoe1.png"}
                rating={"(2,630)"}
                price={"5,000"}
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              />

              <ItemsCard
                name={"Human Watch"}
                image={"/assets/watch2.png"}
                rating={"(2,630)"}
                price={"5,000"}
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              />

              {/* <ItemsCard
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              />

              <ItemsCard
                width={"300"}
                height={"300"}
                className={"shadow-2xl"}
              /> */}
            </div>

            <div className="mt-10 flex justify-center">
              <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[140px] h-10 text-white">
                Go to Shop
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-12 mt-32 mb-24">
              <div className=" flex-1">
                <Image src={Lady2} alt={""} />
              </div>
              <div className=" flex-1 mt-10 md:mt-28">
                <p className="text-base md:text-sm text-primary font-normal mb-2">
                  WELCOME TO SHOPPING MODE!
                </p>
                <h1 className="text-[30px] md:text-[25px] leading-[40px] md:leading-[42px] text-black font-bold">
                  Ready to Shop?
                </h1>
                <p className="text-base md:text-sm text-light-black-4 font-normal mt-3">
                  Explore an array of styles that cater to diverse tastes, so
                  you can express your unique fashion sense.
                </p>
                <div className="mt-6">
                  <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[160px] h-10 text-white">
                    <HiShoppingCart className="text-white w-[19px] h-[19px]" />
                    Shop Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-12 mb-24">
              <div className="md:mt-28 flex-1">
                <p className="text-base md:text-sm text-primary font-normal mb-2">
                  TESTIMONIAL
                </p>
                <h1 className="text-[30px] md:text-[25px] leading-[40px] md:leading-[42px] text-black font-bold">
                  Hear What our Customers say
                </h1>
                <p className="text-base md:text-sm text-light-black-4 font-normal mt-3">
                  &quot;I&apos;ve been shopping with YouGo for over a year now,
                  and I must say it&apos;s been a fantastic experience. The
                  quality of the products is top-notch, and they offer a wide
                  range of styles that cater to my diverse fashion preferences.
                  What truly sets YouGo apart is their commitment to customer
                  satisfaction. Quick delivery, a secure shopping environment,
                  and an easy-to-use website make my shopping experience a
                  delight. YouGo has become my go-to online store for style,
                  savings, and reliability. Highly recommended!&quot;
                </p>
              </div>
              <div className="flex-1">
                <Image src={Lady3} alt={""} />
              </div>
            </div>

            <div className="bg-primary rounded-xl">
              <div className="md:flex">
                <div className="py-20 md:pl-16 px-6 md:px-0 flex-1">
                  <h2 className="text-[30px] md:text-[25px] leading-[40px] md:leading-[40px] text-white font-semibold">
                    Patronise Our Products
                  </h2>
                  <p className="text-base md:text-sm text-white-1 font-normal mt-3 w-full md:w-[50%]">
                    From classic elegance to bold and trendy, YouGo has a style
                    for every fashion-forward individual.
                  </p>
                  <Link href={""}>
                    <div className="mt-6">
                      <button className="shadow-2xl bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-full md:w-[160px] h-10 text-white">
                        Get Started Now
                      </button>
                    </div>
                  </Link>
                </div>
                <div className="flex-1">
                  <Image src={Ladies} alt={""} className="h-full w-full" />
                </div>
              </div>
            </div>

            <div className="mt-[10%]"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
