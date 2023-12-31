"use client";
import React, { useState, useEffect } from "react";
import ItemsCard from "../ItemsCard/page";
import useFetchProduct from "@/public/hooks/queries/useFetchProduct";
import { Loader, Pagination } from "@mantine/core";

import arrow from "@/public/assets/arrow-right.png";
import Image from "next/image";

import Background from "@/public/assets/Trimmed Home.png";

const axios = require("axios");

interface productResponse {
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  rating: string;
  numReviews: number;
  price: number;
  countinStock: number;
  createdAt: number;
  id: number;
}

interface iProductResponse {
  products: productResponse[];
  pages: number;
  page: number;
}

const MenuSection = () => {
  const { data: products, isLoading } = useFetchProduct();
  const [isSearching, setSearching] = useState<boolean>(false);
  const [hasSearch, setHasSearch] = useState<boolean>(false);
  const [searchedProducts, setSearchedProducts] = useState<iProductResponse>({
    products: [],
    pages: 0,
    page: 0,
  });

  const options = [
    "Handmade Goods",
    "Jewelry",
    "Home Decor",
    "Clothing",
    "Art",
    "Vintage Items",
    "Photography",
    "Cosmetics",
    "Toys",
  ];

  function onSearch(page = 0) {
    let searchParameter = (
      document.getElementById("searchField") as HTMLInputElement
    ).value;
    searchParameter = searchParameter.trim();

    if (searchParameter.length == 0 && page === 0) {
      setHasSearch(false);
      setSearchedProducts({
        products: [],
        pages: 0,
        page: 0,
      });
      return;
    }

    search(searchParameter, page);
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  const handleOnTextChange = (_: any) => {
    let searchParameter = (
      document.getElementById("searchField") as HTMLInputElement
    ).value;

    if (searchParameter.trim().length === 0) {
      onSearch();
    }
  };

  function search(keyword, page = 0) {
    setSearching(true);
    axios({
      method: "GET",
      url: `https://web-production-b1c8.up.railway.app/api/products/?keyword=${keyword}${
        page !== 0 ? `&page=${page}` : ""
      }`,
    })
      .then((res: { data: iProductResponse }) => {
        let search = res.data as iProductResponse;
        setSearching(false);
        setSearchedProducts(search);
        setHasSearch(search.products.length > 0);
      })
      .catch((_) => {
        setSearching(false);
        setHasSearch(false);
        setSearchedProducts({
          products: [],
          pages: 0,
          page: 0,
        });
      });
  }

  return (
    <>
      <div className="relative w-[100vw] h-[450px] flex flex-col gap-8 items-center justify-center">
        <Image
          src={Background}
          alt=""
          className="w-[100%] object-cover h-[450px] absolute top-0 left-0"
        />
        <h2 className="font-bold text-xl md:text-4xl leading-normal text-white text-center z-10">
          Welcome to YouGo Ecommerce
        </h2>
        <div className="relative bg-gray-50 w-[50%] sm:w-[80%]">
          <input
            id="searchField"
            type="search"
            onKeyDown={handleKeyDown}
            placeholder="Search Product"
            onChange={handleOnTextChange}
            className="w-full md:w-[695px] h-[50px] px-4 pl-10 round text-[16px] leading-8 font-normal placeholder-color focus:outline-none"
          />
          <span
            className="absolute cursor-pointer inset-y-0 left-3 flex items-center pr-3"
            onClick={() => onSearch()}
          >
            <SearchIcon />
          </span>
        </div>
      </div>
      <div className="px-10 sm:px-5 w-[100%] mb-20">
        {isLoading || isSearching ? (
          <div className="flex text-primary justify-center items-center gap-2 mt-32">
            <p className="text-lg">Loading</p>
            <Loader color="#d4145a" />
          </div>
        ) : (
          <div className="w-full flex flex-row sm:flex-col gap-10 mt-20">
            <div className="sm:w-full w-[25%]">
              <div className="sm:flex sm:flex-col">
                <h2 className="hidden sm:block text-2xl text-center font-bold text-slate-950">
                  Categories
                </h2>
                <p className="font-bold sm:block hidden text-center text-lg text-light-black-5 mb-10">
                  Find something that catches your eyes!
                </p>
                <div className="bg-weirdBrown  p-8 sm:p-0 flex flex-col rounded-xl sm:rounded-none sm:bg-[#00000000] sm:overflow-x-scroll sm:flex-row sm:scrollbar-custom sm:w-full sm:gap-5">
                  <h2 className="text-2xl font-bold text-white mb-4 sm:hidden">
                    Categories
                  </h2>
                  {options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() => search(option)}
                      className="mb-3 px-4 py-2 flex justify-between items-center bg-primary text-white rounded"
                    >
                      <span className="whitespace-nowrap">{option}</span>
                      <Image
                        src={arrow}
                        alt="Arrow"
                        className="w-4 h-4 sm:hidden"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="sm:w-full w-[75%]">
              <div className="">
                <div className="">
                  <p className="font-bold sm:text-base text-lg text-light-black-5 mb-2 sm:hidden">
                    Find something that catches your eyes!
                  </p>
                </div>

                {!hasSearch && products.products.length === 0 && (
                  <div className="w-full h-[65vh] sm:h-[50vh] flex items-center justify-center">
                    <p className="font-bold sm:text-base text-lg text-light-black-5 mb-2 sm:hidden">
                      There are no items in the shop at the moment
                    </p>
                  </div>
                )}

                {hasSearch && searchedProducts.products.length === 0 && (
                  <div className="w-full h-[65vh] sm:h-[50vh] flex items-center justify-center">
                    <p className="font-bold sm:text-base text-lg text-light-black-5 mb-2 sm:hidden">
                      There are no items that match your search input
                    </p>
                  </div>
                )}

                <div className="w-full flex flex-wrap flex-row justify-start gap-10">
                  {!hasSearch &&
                    products &&
                    products.products.length >= 0 &&
                    products.products.map((product, i) => {
                      return <ItemsCard key={product.id} product={product} />;
                    })}
                </div>

                <div className="w-full flex flex-wrap flex-row justify-start gap-10">
                  {hasSearch &&
                    searchedProducts.products.map((product, i) => {
                      return <ItemsCard key={product.id} product={product} />;
                    })}
                </div>

                <div
                  className={`w-full flex justify-center items-center mt-8 
                ${
                  searchedProducts.products.length === 0 &&
                  products.products.length === 0 &&
                  "hidden"
                }`}
                >
                  <Pagination
                    total={hasSearch ? searchedProducts.pages : products.pages}
                    value={hasSearch ? searchedProducts.page : products.page}
                    onChange={(page) => onSearch(page)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-6 w-6 text-black-1"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 101" id="search">
        <path d="M63.3 59.9c3.8-4.6 6.2-10.5 6.2-17 0-14.6-11.9-26.5-26.5-26.5S16.5 28.3 16.5 42.9 28.4 69.4 43 69.4c6.4 0 12.4-2.3 17-6.2l20.6 20.6c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7.9-.9.9-2.5 0-3.4L63.3 59.9zm-20.4 4.7c-12 0-21.7-9.7-21.7-21.7s9.7-21.7 21.7-21.7 21.7 9.7 21.7 21.7-9.7 21.7-21.7 21.7z"></path>
      </svg>
    </svg>
  );
};

export default MenuSection;
