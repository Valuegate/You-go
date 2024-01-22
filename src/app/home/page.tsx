"use client";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import FlexImg from "@/public/assets/Fashion_Women.png";
import { HiShoppingCart } from "react-icons/hi";
import React from "react";
import { Loader } from "@mantine/core";
import Money from "@/public/assets/Vector.svg";
import Security from "@/public/assets/Group 4011.svg";
import Car from "@/public/assets/Group 4013.svg";
import User from "@/public/assets/Group 4012.svg";
import Fancy from "@/public/assets/Rectangle 138.svg";

import useFetchProduct from "@/public/hooks/queries/useFetchProduct";
import { motion } from "framer-motion";
import Link from "next/link";
import CookieConsent from "@/public/components/Cookie/Cookie";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/public/components/LanguageSwitcher/LanguageSwitcher";

const HomePage = () => {
  const { t } = useTranslation();
  const { data: products, isLoading } = useFetchProduct();

  const reasons = [
    {
      title: t('moneySaving'),
      content:
      t('moneySavingContent'),
      image: Money,
    },
    {
      title: t('secureShopping'),
      content:
      t('secureShoppingContent'),
      image: Security,
    },
    {
      title: t('fastDelivery'),
      content:
      t('fastDeliveryContent'),
      image: Car,
    },
    {
      title: t('userFriendly'),
      content:
      t('userFriendlyContent'),
      image: User,
    },
  ];

  return (
    <>
    {/* <LanguageSwitcher /> */}
      <NavBar showSearch={false} />
      <div className="overflow-y-scroll h-screen md:h-[83vh]">
        <div className="px-6 md:px-24">
          <div className="flex flex-col-reverse sm:flex-col md:flex-row mt-16 sm:mt-8">
            <div className="flex-1">
              <div className="mt-8 w-[35vw] sm:w-full">
                <div className="flex flex-col">
                  <h1 className="text-[20px] sm:text-[24px] text-start md:text-[32px] leading-[26px] md:leading-[62px] text-light-black-4 font-medium w-full">
                  {t('joinShoppingRevolution')}
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
                    {t('revolutions')}
                  </motion.span>
                  <h1 className="text-[20px] sm:text-[24px] text-end md:text-[32px] leading-[26px] md:leading-[62px] text-light-black-4 font-medium w-full">
                  {t('withYouGo')}
                  </h1>
                </div>
                <p className="text-base sm:text-center text-light-black-3 font-normal mt-4">
                {t('confidence')}
                </p>
                <p className="text-base sm:text-center text-light-black-3 font-normal mt-4">
                {t('lookAndFeelBest')}
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
                    <HiShoppingCart className="w-[20px] h-[20px]" />
                    {t('shopNow')}
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
            <Image
              src={Fancy}
              alt=""
              className="absolute -left-[150px] sm:-left-[200px] sm:-top-10 -z-10 top-0 w-[300px] h-[300px]"
            />

            <p className="text-lg text-light-black-4 font-semibold mb-2">
            {t('whyUsTitle')}
            </p>
            <div className="bg-weirdBrown h-1 w-12 rounded-lg" />
            <h2 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] mt-2 text-weirdBrown font-bold text-center">
              {t('qualityStyleTitle')}
            </h2>
            <p className="text-base text-light-black-3 font-normal mt-2 sm:mt-4 w-full md:w-[49%] text-center">
            {t('welcomeText')}
            </p>
            <p className="text-base text-light-black-3 font-normal mt-2 w-full md:w-[49%] text-center">
              {t('prideText')}
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
            {t('interestedInMore')}
            </p>
            <div className="bg-weirdBrown h-1 w-12 rounded-lg" />
            <h2 className="text-[30px] md:text-[40px] leading-[40px] md:leading-[60px] mt-2 text-weirdBrown font-bold text-center">
            {t('ourProducts')}
            </h2>
            {isLoading && (
              <div className="flex text-primary h-32 mt-20 justify-center items-center gap-2">
                <p className="text-lg">{t('loading')}</p>
                <Loader color="#d4145a" />
              </div>
            )}

            {!isLoading && products && (
              <div className="flex gap-12 w-full overflow-x-auto scrollbar-custom mt-32 sm:mt-24 sm:w-full">
                {products.products.map((product, i) => {
                  return i > 9 ? (
                    <></>
                  ) : (
                    <Link href={`/shop/${product.id}`} key={i}>
                      <motion.div
                        whileHover={{
                          elevation: 2.0,
                        }}
                        key={i}
                        className="border cursor-pointer border-primary-1 rounded-[30px] w-[200px] h-[320px] flex-col shadow-xl"
                      >
                        <div className="w-[200px] flex flex-col">
                          <Image
                            src={product.images[0].image}
                            width={100}
                            height={100}
                            alt="product-image"
                            className="w-[99%] h-[220px] object-cover rounded-t-[30px]"
                          />
                          <p className="mt-2 text-[16px] font-[600] text-black pl-3">
                            {product.name}
                          </p>
                          <p className="text-[12px] font-normal text-black pl-3">
                            {product.category}
                          </p>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="mt-24 mb-24 w-full bg-gradient-to-r from-lightBrownGradient to-deepBrownGradient sm:h-32  h-52 px-12 py-6 flex justify-center items-center">
          <p className="font-extrabold sm:text-2xl sm:px-0 text-6xl text-weirdBrown px-32">
          {t('trustedByCustomers')}
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
