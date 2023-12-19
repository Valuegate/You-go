"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import FeedBack from "@/public/assets/Feedback-Icon.svg";
import Link from "next/link";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { MdLogout, MdEdit, MdDelete } from "react-icons/md";
import { Loader, Button, Modal, Select } from "@mantine/core";
import useFetchSellerProduct from "@/public/hooks/queries/useFetchSellerProducts";
import useDeleteProduct from "@/public/hooks/queries/useDeleteProduct";
import EditProduct from "@/public/components/EditProduct/EditProduct";

const Profile = () => {
  const { data: user, isLoading, isSuccess } = useFetchUsersProfile();
  const { data: products } = useFetchSellerProduct();
  const [opened, setOpened] = useState<boolean>(false);
  const [deleteID, setDeleteID] = useState<number>(-1);
  const [editID, setEditID] = useState<number>(-1);
  const [change, setChange] = useState<boolean>(false);

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  const {
    isError,
    Delete,
    error,
    data: deleteStatus,
  } = useDeleteProduct({ id: deleteID });

  const filters = [
    "Recommended First",
    "Newest First",
    "Lowest Price First",
    "Highest Price First",
  ];

  useEffect(() => {}, [user, isSuccess, products, change]);

  const handleEdit = (id: number) => {
    setEditID(id);
    open();
  };

  const handleDelete = async (id: number) => {
    setDeleteID(id);
    try {
      await Delete();
      setChange(!change);
    } catch (error) {}
  };

  return (
    <div className="bg-white-1 h-full flex flex-col relative">
      <NavBar showSearch={false} transparent={true} />
      <div className="w-full bg-white-1 h-[90vh] sm:h-auto justify-center flex flex-col">
        {!isLoading && isSuccess && (
          <div className="flex flex-row px-[2%] sm:flex-col sm:mt-5">
            <div
              className={`flex flex-col sm:flex-col gap-20 w-[30%] sm:w-full rounded-xl shadow-xl h-full px-5 bg-white`}
            >
              {user && (
                <div className="w-full h-[85vh] rounded-lg py-3 flex flex-col items-center relative">
                  <div className="mt-5 mb-5">
                    <div className="mt-10 flex flex-col items-center">
                      <Link
                        href={"/profile"}
                        className="rounded-full bg-weirdBrown h-[100px] w-[100px] text-center flex text-[32px] justify-center font-medium items-center text-white"
                      >
                        {user.full_name?.charAt(0).toUpperCase()}
                      </Link>
                    </div>
                  </div>

                  <p className="text-[16px] font-bold">{user.full_name}</p>
                  <p className="text-[14px] font-normal text-light-black-4">
                    {user.phone_number}
                  </p>
                  <p className="text-[14px] font-normal text-light-black-4">
                    {user.email}
                  </p>

                  <p className="text-[14px] my-4 sm:text-center font-normal text-light-black-4">
                    {user.about_seller}
                  </p>

                  <Link
                    href={"/edit-profile"}
                    className="underline text-weirdBrown my-4"
                  >
                    Edit your profile
                  </Link>

                  <div className="w-[80%] rounded-lg py-4 px-2 flex flex-col">
                    <Link
                      href={"#"}
                      className="mb-5 flex justify-between items-center px-4 py-2 bg-weirdBrown rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <Image src={FeedBack} alt=" " />
                        <p className="text-[14px] font-normal text-white">
                          {/* {user.feedbacks} */}
                          Feedbacks
                        </p>
                      </div>
                      <div className="flex items-center gap-3 text-white">
                        <p className="text-[14px] font-normal">View All</p>
                        <FaChevronRight />
                      </div>
                    </Link>

                    {/* <p className="text-[14px] mt-20 font-normal text-light-black-4">
                      ❗️ Never pay in advance! Even for the delivery
                    </p>

                    <p className="text-[14px] font-normal text-light-black-4 mt-2 mb-5">
                      ✅ Inform the seller you got their number on YouGo so they
                      know where you came from
                    </p> */}
                  </div>

                  <div
                    className="flex justify-center text-weirdBrown absolute bottom-10 items-center gap-2 mt-5 cursor-pointer"
                    onClick={() => {
                      window.localStorage.setItem("userToken", "");
                      window.localStorage.setItem("userName", "");
                      window.localStorage.setItem("userStatus", "");
                      window.location.replace("/");
                    }}
                  >
                    Sign out
                    <MdLogout size={"20px"} />
                  </div>
                </div>
              )}
            </div>

            <div className="w-[70%] sm:w-full h-full flex flex-col px-10 sm:px-5 sm:mt-10">
              <p className="text-light-black-3 text-xl font-medium">Products</p>
              <div className="mt-10 grid grid-cols-3 gap-5 sm:flex sm:flex-col sm:mb-20">
                {products !== null &&
                products !== undefined &&
                products.length > 0 ? (
                  products.map((product, i) => {
                    return (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl sm:w-full"
                      >
                        <div className="relative">
                          <Image
                            src={product.image}
                            className="w-full h-[170px] rounded-t-xl object-cover"
                            width={100}
                            height={100}
                            alt={`${product.name} image`}
                          />
                        </div>
                        <div className="flex flex-col justify-center items-start px-4 py-3">
                          <p className="text-lg font-bold">{product.name}</p>

                          <div className="flex gap-1 items-center justify-between w-full">
                            <div className="flex gap-1 items-center justify-start">
                              <p className="text-primary text-[14px] font-medium ">
                                €
                              </p>
                              <p className="font-bold text-primary">
                                {product.price ?? "0.0"}
                              </p>
                            </div>
                            <p>In Stock: {product.countinStock}</p>
                          </div>
                          <p className="text-xs text-light-black-4 font-medium">
                            By{" "}
                            <span className="text-light-black-5 text-sm">
                              {product.brand ?? "N/A"}
                            </span>
                          </p>
                        </div>

                        <div className="flex justify-around items-center text-weirdBrown my-5">
                          <div
                            onClick={() => {
                              handleEdit(i);
                            }}
                            className="flex items-center gap-2 cursor-pointer"
                          >
                            Edit
                            <MdEdit size={20} />
                          </div>
                          <div
                            className="flex items-center gap-2 cursor-pointer"
                            onClick={() => {
                              handleDelete(product.id);
                            }}
                          >
                            Delete
                            <MdDelete size={20} />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="flex flex-col h-[70vh] justify-center items-center w-[60vw] sm:w-[90vw]">
                    <p className="text-light-black-4 text-xl">
                      You do not have any products yet
                    </p>
                    <Link
                      href={"/whysell"}
                      className="px-3 py-2 text-white bg-weirdBrown rounded-xl mt-5"
                    >
                      Add Product
                    </Link>
                  </div>
                )}
              </div>
              <div>
                {products === null ||
                  (products === undefined && (
                    <div className="flex flex-col items-center justify-center h-full w-full">
                      <Loader color="#D4145A" size={"36px"} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="flex flex-col items-center justify-center h-full w-full">
            <Loader color="#D4145A" size={"36px"} />
          </div>
        )}
      </div>

      <Modal opened={opened} onClose={close} size="auto" p={0} title="">
        <EditProduct
          product={editID === -1 ? null : products[editID]}
          refresh={() => {
            close();
            setChange(!change);
          }}
        />
      </Modal>
    </div>
  );
};


export default Profile;
