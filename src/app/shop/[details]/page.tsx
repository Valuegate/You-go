"use client";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/public/components/Footer/page";
import { BrandIcon, CalendarIcon } from "@/public/icons";
import { StockIcon } from "@/public/icons/stock-icon";
import Link from "next/link";
import useFetchProductDetails from "@/public/hooks/queries/useFetchProductDetails";
import { Loader } from "@mantine/core";

import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTranslation } from "react-i18next";

const ShopDetails = ({ params }: { params: { details: string } }) => {
  const { t } = useTranslation();
  const [sellerLoading, setSellerLoading] = useState<boolean>(true);
  const [selectPicture, setSelectPicture] = useState<number>(0)
  const [seller, setSeller] = useState<any>();

  const id = params.details;

  const { data: product, isLoading: productLoading } = useFetchProductDetails({
    id: Number(id),
  });

  useEffect(() => {
    if (product !== undefined && product !== null) {
      const { user } = product;
      let token = window.localStorage.getItem("userToken");
      axios({
        method: "GET",
        url: `https://web-production-b1c8.up.railway.app/api/users/${user}/`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res: { data: any }) => {
          setSeller(res.data);
          setSellerLoading(false);
        })
        .catch((err: any) => {
          console.error("Error fetching seller data:", err);
          setSeller(null);
          setSellerLoading(false);
        });
    }
  }, [product]);

  if (productLoading || sellerLoading) {
    return (
      <p className="flex flex-col items-center justify-center h-full w-full mt-80">
        <Loader color="#D4145A" size={"36px"} />
      </p>
    );
  }

  function generateWhatsAppLink(text, phone_number) {
    let link: string = "https://wa.me/" + phone_number + "?text=";
    let split: string[] = text.split(" ");
    for (let i = 0; i < split.length; ++i) {
      let s = split[i];
      link += s;
      if (i != split.length - 1) {
        link += "%20";
      }
    }

    return link;
  }

  function convertDate(date: string | number | Date) {
    let dateObject = new Date(date);

    let day = dateObject.getDate();
    let month = dateObject.getMonth();
    let year = dateObject.getFullYear();

    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let monthName = monthNames[month];

    let dayWithSuffix = day + getOrdinalSuffix(day);

    return `${monthName} ${dayWithSuffix}, ${year}`;
  }

  function getOrdinalSuffix(day: number) {
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  return (
    <>
      <NavBar />

      <div className="overflow-y-scroll sm:h-screen h-[83vh]">
        <div className="sm:px-6 px-24 sm:mb-20">
          <div className="mt-8 flex sm:flex-col flex-row gap-10">
          <div className="flex flex-col gap-4 sm:w-full w-[70%]">
            <div className="w-full">

              {Array.isArray(product.images) && product.images.length > 0 ? (
                <Carousel showThumbs={false} selectedItem={selectPicture}>
                  {product.images.map((image, index) => (
                    <div key={index}>
                      <Image
                        src={image.image}
                        alt={`Product ${product.name}`}
                        className="object-contain w-full h-[450px]"
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <p>{t('noImagesAvailable')}</p>
              )}
            </div>
            <div className="flex justify-evenly w-full">
            {product.images.map((image, index) => (
                    <div key={index} onClick={()=>setSelectPicture(index)}>
                      <Image
                        src={image.image}
                        alt={`Product ${product.name}`}
                        className="object-contain sm:w-[50px] sm:h-[50px] w-[100px] h-[100px]"
                        width={100}
                        height={100}
                      />
                    </div>
                  ))}
            </div>
            </div>
            <div className="sm:w-full w-[30%]">
              <div className="flex flex-col gap-4">
                <div className="border-primary-1 border-8 rounded-lg py-3 px-3">
                  <div className="text-primary text-lg font-bold mb-3">
                    €{product.price}
                  </div>
                  <Link
                    href={generateWhatsAppLink(
                      `Hi, I am from YouGo. I am contacting you with respect to your product *${
                        product.name
                      }* which you posted on *${convertDate(
                        product.createdAt
                      )}*.`,
                      seller?.phone_number
                    )}
                    target="__blank"
                    className="bg-gradient-to-r from-primary-1 to-primary round px-2 py-1 flex items-center justify-center shadow-xl text-white "
                  >
                    {t('chatWithSellerOnWhatsApp')}
                  </Link>
                </div>
                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3 flex flex-col">
                  <p className="text-[20px] font-bold text-slate-950">
                  {t('contactSeller')}
                  </p>
                  <div className="flex gap-5 mt-3">
                    <Link
                      href={"#"}
                      className="rounded-full bg-weirdBrown h-[100px] w-[100px] text-center flex text-[32px] justify-center font-medium items-center text-white"
                    >
                      {seller?.full_name?.charAt(0).toUpperCase()}
                    </Link>
                    <div>
                      <h2 className="text-[16px] font-bold">
                        {seller?.full_name}
                      </h2>
                      <p className="text-[14px] font-normal text-light-black-4">
                        {seller?.phone_number}
                      </p>
                      <Link
                        href={`mailto:${seller?.email}`}
                        className="text-[14px] font-normal text-light-black-4"
                      >
                        {seller?.email}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                  <h2 className="text-lg font-bold text-light-black-5">
                  {t('safetyTips')}
                  </h2>
                  <div>
                    <li className="font-normal text-sm text-light-black-5">
                    {t('dontSendPrePayments')}
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                    {t('meetSellerAtSafePlace')}
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                    {t('inspectGoods')}
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                    {t('checkDocumentation')}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex sm:flex-col flex-row gap-10">
            <div className="sm:w-full w-[70%]">
              <div className="border-primary-1 border-8 rounded-lg py-3 pl-3">
                <h1 className="text-2xl font-bold text-light-black-5">
                  {product.name}
                </h1>
                <div className="flex items-center sm:flex-col sm:items-start sm:gap-2 gap-8 mt-3">
                  <div className="flex items-center gap-2">
                    <StockIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                    {t('stock')}
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.countinStock}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <BrandIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                    {t('brand')}
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.brand}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                    {t('posted')}
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {convertDate(product.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-start sm:gap-2 gap-10 mt-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-light-black-4 font-normal text-xl">
                    {t('productCategory')}
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-primary-1 border-8 rounded-lg py-3 pl-3 mt-4">
                <h2 className="text-lg font-bold text-light-black-5">
                {t('productDescription')}
                </h2>
                <div>
                  <p className="font-normal text-[16px] text-light-black-5 mt-5">
                    {product.description}
                  </p>
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
