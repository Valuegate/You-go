"use client"
import AddItem from "@/public/components/AddItem";
import NavBar from "@/public/components/NavBar/page";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const WhySell = () => {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <div className="mt-20 sm:px-4 flex flex-col items-center">
        <h2 className="text-primary text-lg font-bold">
          {t('whyYouGoTitle')}
        </h2>
        <div className="mt-3 flex flex-col justify-center">
          <h5 className="text-light-black-10 text-base font-medium">
          {t('youGoOffers')}
          </h5>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">
            {t('largeActiveCommunity')}
          </li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">
          {t('specializedCategory')}
          </li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">{t('lowFees')}</li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">{t('easyToUse')}</li>
          <h5 className="text-light-black-10 text-base font-medium">
          {t('readyToStartSelling')}
            {/* <Link href="./" className="text-primary">Sign up today!</Link>{" "} */}
          </h5>
        </div>

        <div className="mt-6">
            <AddItem addText={t('sellOnYouGo')} />
        </div>
      </div>
    </>
  );
};

export default WhySell;
