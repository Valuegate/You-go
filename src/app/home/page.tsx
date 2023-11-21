"use client";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import FlexImg from "@/public/assets/Fashion_Women.png";
import { HiShoppingCart } from "react-icons/hi";
import Lady from "@/public/assets/image3.png";
import Cart from "@/public/assets/Frame36172(1).png";
import Lady3 from "@/public/assets/image1.png";
import Link from "next/link";
import React from "react";

import Money from "@/public/assets/Vector.svg";
import Security from "@/public/assets/Group 4011.svg";
import Car from "@/public/assets/Group 4013.svg";
import User from "@/public/assets/Group 4012.svg";
import Fancy from "@/public/assets/Rectangle 138.svg";
import Arrow from "@/public/assets/Arrow.svg";

import { motion } from "framer-motion";

const HomePage = () => {
  const reasons = [
    {
      title: "Money Saving",
      content:
        "We offer great deals and discounts on a regular basis, so you can save your money while still looking and feeling great.",
      image: Money,
    },
    {
      title: "Secure Shopping",
      content:
        "We take extra measures to ensure that your shopping experience with us is secure and worry-free.",
      image: Security,
    },
    {
      title: "Fast Delivery",
      content:
        "We provide fast and reliable delivery options to get your products to you in no time.",
      image: Car,
    },
    {
      title: "User friendly",
      content:
        "Our easy-to-navigate interface makes finding your favorite products or making pruchases a breeze.",
      image: User,
    },
  ];

  const products = [
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
    {
      title: "Elegant Backpacks",
      content: "Elegant pink backpack",
      image: Lady,
    },
  ];

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
          <div className="flex flex-col-reverse sm:flex-col md:flex-row mt-16 sm:mt-8">
            <div className="flex-1">
              <div className="mt-8 w-[35vw] sm:w-full">
                <div className="flex flex-col">
                  <h1 className="text-[20px] sm:text-[24px] text-start md:text-[32px] leading-[26px] md:leading-[62px] text-light-black-4 font-medium w-full">
                    Join the shopping{" "}
                  </h1>
                  <motion.span
                    animate={{
                      x: ["0%", "10%", "0%"],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                    className="text-weirdBrown text-center text-7xl sm:text-4xl font-extrabold"
                  >
                    REVOLUTION
                  </motion.span>
                  <h1 className="text-[20px] sm:text-[24px] text-end md:text-[32px] leading-[26px] md:leading-[62px] text-light-black-4 font-medium w-full">
                    with YouGo!
                  </h1>
                </div>
                <p className="text-base sm:text-center text-light-black-3 font-normal mt-4">
                  We believe that every woman deserves to feel confident,
                  stylish and empowered. That&apos;s why we offer a wide range
                  of products that cater to different tastes, preferences and
                  budgets.
                </p>
                <p className="text-base sm:text-center text-light-black-3 font-normal mt-4">
                  Whether you&apos;re looking for trendy clothing, comfortable
                  shoes, stylish accessories, or beauty products that will help
                  you look and feel your best, we&apos;ve got your covered.
                </p>
                <div className="mt-6 sm:mt-10">
                  <motion.button
                    animate={{
                      y: ["0%", "10%", "0%"],
                      transition: {
                        duration: 1,
                        repeat: Infinity,
                      },
                    }}
                    onClick={() => {
                      window.location.href = "/shop";
                    }}
                    className="flex sm:w-full justify-center items-center hover:bg-darkBrownGradient hover:text-weirdBrown gap-2 shadow-2xl sm:shadow-xl bg-weirdBrown font-medium rounded-[25px] h-[50px] px-10 text-white"
                  >
                    <HiShoppingCart className="text-white hover:text-black w-[20px] h-[20px]" />
                    Shop Now!
                  </motion.button>
                </div>
              </div>
            </div>
            <motion.div
              className="flex-1 sm:mt-12"
              animate={{
                x: ["0%", "-10%", "0%"],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                scale: 1.05,
              }}
            >
              <Image
                  src={FlexImg}
                  alt={""}
                  className="w-[50vw] h-auto sm:w-full"
                />
            </motion.div>
          </div>

          <div className="flex justify-center items-center flex-col mt-32 sm:mt-24 relative">
          <Image src={Fancy} alt="" className="absolute -left-[12%] sm:-left-[50%] sm:-top-10 -z-10 top-0 w-[300px] h-[300px]"/>

            <p className="text-lg text-light-black-4 font-semibold mb-2">
              WHY US?
            </p>
            <div className="bg-weirdBrown h-1 w-12 rounded-lg" />
            <h2 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] mt-2 text-weirdBrown font-bold text-center">
              Quality & Style
            </h2>
            <p className="text-base text-light-black-3 font-normal mt-2 sm:mt-4 w-full md:w-[49%] text-center">
              Welcome to YouGo, where quality and style come together to bring
              you the best shopping experience possible.
            </p>
            <p className="text-base text-light-black-3 font-normal mt-2 w-full md:w-[49%] text-center">
              We take great pride in curating a collection of fashion and
              lifestyle products that are not only stylish but also of the
              highest quality.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 mt-12 items-center sm:w-full justify-center">
            {reasons.map((reason, i) => {
              return (
                <motion.div
                  whileHover={{
                    scale: 1.2,
                  }}
                  key={i}
                  className={`border-2 cursor-pointer border-primary-1 rounded-[30px] w-[220px] sm:w-[90%] sm:h-[250px] h-[280px] flex-col px-5 py-5 ${
                    i == 0 &&
                    "shadow-2xl bg-gradient-to-r from-darkBrownGradient to-lightBrownGradient"
                  }`}
                >
                  <Image
                    src={reason.image}
                    alt="reason image"
                    className="w-[75px] h-[75px]"
                  />
                  <p className="text-weirdBrown font-[600] text-xl mt-2">
                    {reason.title}
                  </p>
                  <p className="text-purpleBrown mt-2 text-[14px] ">
                    {reason.content}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="w-full flex-col items-center flex mt-24 relative">
            <p className="text-lg text-light-black-4 font-semibold mb-2">
              INTERESTED IN MORE?
            </p>
            <div className="bg-weirdBrown h-1 w-12 rounded-lg" />
            <h2 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] mt-2 text-weirdBrown font-bold text-center">
              Our Products
            </h2>
            <Image src={Arrow} alt="" className="absolute top-[10vh] sm:top-[12%] sm:w-[200px] left-[22vw] sm:-left-[5%] w-[250px] h-[80px]"/>


            <div className="flex gap-12 w-full overflow-x-auto scrollbar-custom mt-32 sm:mt-24 sm:w-full">
              {products.map((product, i) => {
                return (
                  <motion.div
                    whileHover={{
                      elevation: 2.0,
                    }}
                    key={i}
                    className="border cursor-pointer border-primary-1 rounded-[30px] w-[200px] sm:h-[320px] h-[290px] flex-col shadow-xl"
                  >
                    <div className=" w-[200px] flex flex-col">
                      <Image
                        src={product.image}
                        alt="product-image"
                        className="w-[200px] sm:w-full h-[220px] object-cover rounded-tl-[30px] rounded-tr-[30px]"
                      />
                      <p className="mt-2 text-[16px] font-[600] text-black pl-3">
                        {product.title}
                      </p>
                      <p className="text-[12px] font-normal text-black pl-3">
                        {product.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="flex sm:flex-col justify-around sm:px-[5%] items-center md:flex-row gap-12 sm:mt-24 mb-24 mt-40 w-full px-12">
            <div className="md:mt-28 flex flex-col items-end w-[50%] sm:w-full">
              <p className="text-base md:text-xl text-light-black-4 font-medium mt-3">
                &quot;I&apos;ve been shopping with{" "}
                <span className="text-primary-1">YouGo</span> for over a year
                now, and I must say it&apos;s been a fantastic experience. The
                quality of the products is top-notch, and they offer a wide
                range of styles that cater to my diverse fashion preferences.
              </p>

              <p className="text-base md:text-xl text-light-black-4 font-medium mt-3">
                What truly sets <span className="text-primary-1">YouGo</span>{" "}
                apart is their commitment to customer satisfaction. Quick
                delivery, a secure shopping environment, and an easy-to-use
                website make my shopping experience a delight.
                <span className="text-primary-1">YouGo</span> has become my
                go-to online store for style, savings, and reliability. Highly
                recommended!&quot;
              </p>

              <p className="text-light-black-4 font-normal mt-3 text-lg">
                Maria, 35
              </p>
            </div>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
            >
              <Image
                src={Lady3}
                alt={"testimonial"}
                className="w-[300px] h-[400px] border-4 border-weirdBrown object-cover rounded-tl-[100px] rounded-br-[100px] "
              />
            </motion.div>
          </div>
        </div>
        <div className="mt-24 mb-24 w-full bg-gradient-to-r from-lightBrownGradient to-deepBrownGradient sm:h-32  h-52 px-12 py-6 flex justify-center items-center">
          <p className="font-extrabold sm:text-2xl sm:px-0 text-6xl text-weirdBrown px-32">
            Trusted by 100,000+ customers all over the world
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
