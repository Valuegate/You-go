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

const axios = require("axios");

const ShopDetails = ({ params }: { params: { details: string } }) => {
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
  const [sellerLoading, setSellerLoading] = useState<boolean>(true);
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
        .then((res) => {
          setSeller(res.data);
          setSellerLoading(false);
        })
        .catch((err) => {
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

      <div className="overflow-y-scroll sm:h-screen h-[87vh]">
        <div className="sm:px-6 px-24 sm:mb-20">
          <div className="mt-8 flex sm:flex-col flex-row gap-10">
            <div className="sm:w-full w-[70%]">
              <img src={product.image} alt={""} className="object-cover w-full h-[450px]" />
            </div>
            <div className="sm:w-full w-[30%]">
              <div className="flex flex-col gap-4">
                <div className="border-primary-1 border-8 rounded-lg py-3 px-3">
                  <div className="text-primary text-lg font-bold mb-3">
                    €{product.price}
                  </div>
                  <Link
                    href={generateWhatsAppLink(
                      `Hi, I am from YouGo. I am contacting you with respect to your product *${product.name}* which you posted on *${convertDate(product.createdAt)}*.`,
                      seller?.phone_number
                    )}
                    target="__blank"
                    className="bg-gradient-to-r from-primary-1 to-primary round px-2 py-1 flex items-center justify-center shadow-xl text-white "
                  >
                    CHAT WITH SELLER ON WHATSAPP
                  </Link>
                </div>
                <div className="border-primary-1 border-8 rounded-lg py-3 pl-3 flex flex-col">
                  <p className="text-[20px] font-bold text-slate-950">
                    Contact Seller
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
                        <Link
                          href={generateWhatsAppLink(
                            `Hi, I am from YouGo.`,
                            seller?.phone_number
                          )}
                          target="__blank"
                          className="text-[14px] font-normal text-light-black-4"
                        >
                          {seller?.phone_number}
                        </Link>
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
                    Safety Tips
                  </h2>
                  <div>
                    <li className="font-normal text-sm text-light-black-5">
                      Remember, don&apos;t send any pre-payments
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Meet the seller at a safe public place
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Inspect the goods to make sure they meet your needs
                    </li>
                    <li className="font-normal text-sm text-light-black-5">
                      Check all documentation and only pay if you&apos;re
                      satisfied
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
                      Stock:
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.countinStock}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <BrandIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Brand:
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.brand}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Posted:
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {convertDate(product.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:items-start sm:gap-2 gap-10 mt-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-light-black-4 font-normal text-xl">
                      Product category:
                    </h2>
                    <p className="text-xl font-normal text-primary">
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-primary-1 border-8 rounded-lg py-3 pl-3 mt-4">
                <h2 className="text-lg font-bold text-light-black-5">
                  Product description
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
