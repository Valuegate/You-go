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
import AddItem from "@/public/components/AddItem";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import useFetchProductDetails from "@/public/hooks/queries/useFetchProductDetails";
import { Loader } from "@mantine/core";
import useFetchSellerDetails from "@/public/hooks/queries/useFetchSellerDetails";

const ShopDetails = ({ params }: { params: { details: string } }) => {
  // const { data: user, isLoading } = useFetchUsersProfile();
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
  const id = params.details;

  const { data: product, isLoading: productLoading } = useFetchProductDetails({
    id: Number(id),
  });

  const { data: seller, isLoading: sellerLoading } = useFetchSellerDetails({
    id: Number(id),
  });

  if (productLoading || sellerLoading) {
    return (
      <p className="flex flex-col items-center justify-center h-full w-full mt-80">
        <Loader color="#D4145A" size={"36px"} />
      </p>
    );
  }

  function generateWhatsAppLink(text = "Hello. This is from YouGo.") {
    let link: string = "https://wa.me/" + seller.phone_number + "?text=";
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
        <div className="sm:px-6 px-24">
          <div className="mt-8 flex sm:flex-col flex-row gap-10">
            <div className="sm:w-full w-[70%]">
              <div>
                <Image
                  src={product.image}
                  alt={""}
                  className="w-full h-[31rem]"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            <div className="sm:w-full w-[30%]">
              <div className="flex flex-col gap-4">
                <div className="border-primary-1 border-8 rounded-lg py-3 px-3">
                  <div className="text-primary text-lg font-bold mb-3">
                    €{product.price}
                  </div>
                  <Link
                    href={generateWhatsAppLink(`Hi, I am from YouGo. I am contacting you with respect to your product ${product.name}.`)}
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
                        {seller.full_name?.charAt(0).toUpperCase()}
                      </Link>
                    <div>
                      <h2 className="text-[16px] font-bold">
                        {seller.full_name}
                      </h2>
                      <p className="text-[14px] font-normal text-light-black-4">
                        <Link
                          href={generateWhatsAppLink(`Hi, I am from YouGo. I am contacting you with respect to your product ${product.name}.`)}
                          target="__blank"
                          className="text-[14px] font-normal text-light-black-4"
                        >
                          {seller.phone_number}
                        </Link>
                      </p>
                      <Link
                        href={`mailto:${seller.email}`}
                        className="text-[14px] font-normal text-light-black-4"
                      >
                        {seller.email}
                      </Link>

                      {/* <div className="flex items-center gap-3 mt-8">
                        <FacebokIcon width="16" height="16" />
                        <XIcon width="16" height="16" />
                        <InstagramIcon color="#d4145a" width="20" height="20" />
                        <BsLinkedin color="#d4145a" width="16" height="16" />
                        <BsWhatsapp color="#d4145a" width="16" height="16" />
                      </div> */}
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
                  Product Name Goes Here
                </h1>
                <div className="flex items-center sm:flex-col sm:gap-2 gap-8 mt-3">
                  <div className="flex items-center gap-2">
                    <StockIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Stock:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      {product.countinStock}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <BrandIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Brand:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      {product.brand}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarIcon />
                    <h2 className="text-xl font-bold text-light-black-8">
                      Posted:
                    </h2>
                    <p className="text-base font-normal text-primary">
                      {convertDate(product.createdAt)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center sm:flex-col sm:gap-2 gap-10 mt-4">
                  <div className="flex items-center gap-4">
                    <h2 className="text-light-black-4 font-normal text-sm">
                      Product category:
                    </h2>
                    <p className="text-base font-normal text-primary">
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
                  <li className="font-normal text-sm text-light-black-5">
                    {product.description}
                  </li>
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
