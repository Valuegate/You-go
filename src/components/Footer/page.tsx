"use client";

import React, { useState, useEffect } from "react";
import logo from "@/public/assets/you_go_logo.png";
import Image from "next/image";
import CoFounded from "@/public/assets/europe_symbol.webp"
import Link from "next/link";
import { useTranslation } from "react-i18next";


const Footer = ({transparent = false}) => {
  const { t } = useTranslation();
  const instaUrl = "";
  const fbUrl = "";
  const twUrl = "";
  const ytUrl = "";

  const [isSeller, setSeller] = useState<string>("");
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    let status = window.localStorage.getItem("userStatus");
    let username = window.localStorage.getItem("userName");

    if (status !== undefined && status !== null) {
      setSeller(status);
    }

    setLoggedIn(
      username !== undefined && username !== null && username!.length > 0
    );
  }, []);

  return (
    <>
      <div className={`${transparent ? "bg-[#FFFFFFFF00]" : "bg-white"} w-full px-6 md:px-24 flex justify-between items-center `}>
        <div className="flex flex-col">
          <p className="text-4xl sm:text-2xl text-weirdBrown font-medium">
          {t('quickLinks')}
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              className="text-purpleBrown text-[18px] sm:text-[16px]"
              href={"/home"}
            >
              {t('home')}
            </Link>
            {loggedIn && (isSeller === "buyer" || isSeller.length === 0) && (
              <Link
                className="text-purpleBrown text-[18px] sm:text-[16px]"
                href={"/register-as-seller"}
              >
                {t('sellOnYouGo')}
              </Link>
            )}
            <Link
              className="text-purpleBrown text-[18px] sm:text-[16px]"
              href={"/shop"}
            >
              {t('shop')}
            </Link>
            <Link
              className="text-purpleBrown text-[18px] sm:text-[16px]"
              href={"/about-us"}
            >
              {t('aboutUs')}
            </Link>
            <div className="">
            <Link
              className="text-purpleBrown text-[18px] sm:text-[16px]"
              href={"mailto:info@efektasgroup.com"}
            >
              {t('contactUs')}
            </Link>
            </div>
          </div>
        </div>
        <Image
          src={logo}
          alt="logo"
          className="w-[20vw] h-auto object-cover sm:hidden"
        />
      </div>

      <div className="w-full px-6 md:px-24">
        <div className="flex sm:flex-col justify-between items-center pt-3 sm:mt-10">
          <p className="paragraph text-black text-xs md:text-lg">
            ©{new Date().getFullYear()} <span> {t('allRightsReserved')}</span>
          </p>
          <div className="flex gap-4 sm:mt-5 sm:justify-between sm:mb-10">
            <Link
              href={"/termsandconditions"}
              className="paragraph text-purpleBrown text-xs md:text-lg"
            >
              {t('termsConditions')}
            </Link>
            <Link
              href={"/privacy-policy"}
              className="paragraph text-purpleBrown text-xs md:text-lg"
            >
              {t('privacyPolicy')}
            </Link>
          </div>
        </div>
      </div>

      <div className="flex sm:gap-4 flex-row sm:flex-col bg-primary text-white items-center px-8 sm:px-2 mt-8 mb-20 py-4">
      <div className="w-[65%] sm:w-full">
        <h2 className="sm:text-justify">{t('fundedByEU')}</h2>
      </div>
      <div className="w-[35%] sm:w-full">
        <Image src={CoFounded} alt={""} />
      </div>
    </div>
    </>
  );
};

export default Footer;
