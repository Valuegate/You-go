"use client";
import React, { useState, useEffect } from "react";

import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { MdLogout, MdEdit, MdDelete } from "react-icons/md";
import { Loader, Modal } from "@mantine/core";
import useFetchSellerProduct from "@/public/hooks/queries/useFetchSellerProducts";
import useDeleteProduct from "@/public/hooks/queries/useDeleteProduct";
import EditProduct from "@/public/components/EditProduct/EditProduct";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const axios = require("axios");

const Profile = () => {
  const { data: user, isLoading, isSuccess } = useFetchUsersProfile();
  const { data: products } = useFetchSellerProduct();
  const [opened, setOpened] = useState<boolean>(false);
  const [isDeleting, setDeleting] = useState<boolean>(false);

  const [editID, setEditID] = useState<number>(-1);

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  const filters = [
    "Recommended First",
    "Newest First",
    "Lowest Price First",
    "Highest Price First",
  ];

  useEffect(() => {}, [user, isSuccess, products]);

  const handleEdit = (id: number) => {
    setEditID(id);
    open();
  };

  const handleDelete = (id: number) => {
    setDeleting(true);
    let token = window.localStorage.getItem("userToken");

    axios({
      method: "DELETE",
      url: `https://web-production-b1c8.up.railway.app/api/products/delete/${id}/`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setDeleting(false);
        toast.success("Product deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        setDeleting(false);
        toast.error("An error occurred while trying to delete your product");
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white-1 h-full flex flex-col relative">
        <NavBar showSearch={false} transparent={true} />
        <div className="w-full bg-white-1 h-[90vh]  justify-start flex flex-col">
          {!isLoading && !isDeleting && isSuccess && (
            <div className="flex flex-row px-[2%] sm:flex-col sm:mt-5">
              <div
                className={`flex flex-col sm:flex-col gap-20 w-[30%] sm:w-full rounded-xl shadow-xl h-full px-5 bg-white`}
              >
                {user && (
                  <div className="w-full h-auto rounded-lg py-3 flex flex-col items-center relative">
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
                      className="underline text-weirdBrown mt-4 mb-24"
                    >
                      Edit your profile
                    </Link>

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

              <div className="w-[70%] sm:w-full h-auto flex flex-col px-10 sm:px-5 sm:mt-10">
                <p className="text-light-black-3 text-xl font-medium">
                  Products
                </p>
                <div className="mt-10 sm:mt-0 grid grid-cols-3 gap-5 sm:flex sm:flex-col sm:mb-20">
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

          {isLoading ||
            (isDeleting && (
              <div className="flex flex-col items-center justify-center h-full w-full">
                <Loader color="#D4145A" size={"36px"} />
              </div>
            ))}
        </div>

        <Modal opened={opened} onClose={close} size="auto" p={0} title="">
          <EditProduct
            product={editID === -1 ? null : products[editID]}
            refresh={() => {
              close();
              window.location.reload();
            }}
          />
        </Modal>
      </div>
    </>
  );
};

export default Profile;
