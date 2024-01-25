"use client"
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import React from "react";
import { useTranslation } from "react-i18next";

const AboutUsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar showSearch={false} />
      <div>

        <p className="sm:text-center sm:text-2xl text-4xl text-weirdBrown font-bold mt-20 mb-10 px-[10%]">
            {t('aboutUs')}
        </p>

      <p className="mt-20 text-light-black-4 text-xl px-[10%]">
       {t('welcomeMessage')}
      </p>
      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
      {t('craftsRange')}
      </p>
      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
      {t('commitment')}
      </p>

      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
        {t('erasmusProject')}
      </p>

      <p className="mt-10 text-light-black-4 text-xl px-[10%]">
      {t('passionateAboutCrafts')}
      </p>

      <p className="mt-10 mb-20 text-light-black-4 text-xl px-[10%]">
      {t('thankYouMessage')}
      </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
