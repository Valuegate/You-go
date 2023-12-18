"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import ItemsCard from "@/public/components/ItemsCard/page";
import SC from "@/public/assets/Social-Icons.svg";
import SC1 from "@/public/assets/Social-Icons-1.svg";
import SC2 from "@/public/assets/Social-Icons-2.svg";
import SC3 from "@/public/assets/Social-Icons-3.svg";
import SC4 from "@/public/assets/Social-Icons-4.svg";
import FeedBack from "@/public/assets/Feedback-Icon.svg";
import Recommend from "@/public/assets/Layer_1-2.svg";
import Shoe from "@/public/assets/shoe1.png";
import Link from "next/link";
import Upload from "@/public/assets/upload.png";
import useFetchUsersProfile from "@/public/hooks/queries/useFetchUsersProfile";
import { MdLogout, MdEdit, MdDelete } from "react-icons/md";
import { Loader, Button, Modal, Select } from "@mantine/core";
import useFetchSellerProduct from "@/public/hooks/queries/useFetchSellerProducts";
import useDeleteProduct from "@/public/hooks/queries/useDeleteProduct";
import useEditProduct, {
  TEditProductPayload,
} from "@/public/hooks/queries/useEditProduct";
import { BsTrash } from "react-icons/bs";

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

  const [credentials, setCredentials] = useState<TEditProductPayload>({
    name: "",
    image: "",
    brand: "",
    description: "",
    category: "",
    price: "",
    countinStock: "",
    id: "",
  });

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

const EditProduct = ({ product, refresh }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [firstImage, setFirstImage] = useState<any>("");
  const [isFirst, setFirst] = useState<boolean>(true);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const [credentials, setCredentials] = useState<TEditProductPayload>({
    name: "",
    image: "",
    brand: "",
    description: "",
    category: "",
    price: "",
    countinStock: "",
    id: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Edit, error, data } = useEditProduct({
    product: credentials,
  });

  useEffect(() => {
    if (isFirst && product !== null && product !== undefined) {
      setCredentials({
        name: product.name,
        image: product.image,
        brand: product.brand,
        description: product.description,
        category: product.category,
        price: product.price,
        countinStock: product.countinStock,
        id: product.id,
      });
      setFirst(false);
    }

    if (isError) {
      setErrorMsg(
        "An error occurred during creating product. Please try again."
      );
    } else if (isSuccess) {
      refresh();
    }
  }, [isError, isSuccess, product, isFirst, refresh]);

  const handleAdd = () => {
    // Clear previous validation errors
    setValidationErrors({});

    // Validate numeric input for price and stock
    if (!/^\d+$/.test(credentials.price)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        price: "Please enter a valid numeric value for Price.",
      }));
    }

    if (!/^\d+$/.test(credentials.countinStock)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        countinStock: "Please enter a valid numeric value for Stock.",
      }));
    }

    // Check if there are any validation errors
    if (Object.keys(validationErrors).length > 0) {
      // Stop further processing if there are errors
      return;
    }

    setErrorMsg(""); // Clear previous error message

    if (selectedFiles.length > 0) {
      const file = selectedFiles[0];
      //  console.log(file);
      //Edit({ ...credentials, image: file });
    } else {
      //Edit(credentials);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
      setSelectedFiles(newFiles);
      getBase64(newFiles[0])
        .then((resp) => setFirstImage(resp))
        .catch((err) => setFirstImage("./assets/upload.png"));
    } else {
      setFirstImage("./assets/upload.png");
    }
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles([]);
    setFirstImage("./assets/upload.png");
  };

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  }

  return (
    <div className="px-10 bg-primary-1">
      
      <div className="flex flex-col gap-2 ">
        <p className="font-bold my-2">Old Picture</p>
        <img
          src={credentials.image as string}
          alt={""}
          className="mr-2 h-[300px] w-[600px] object-cover"
        />
      </div>

      <div className="my-6">
        {selectedFiles.length === 0 && credentials.image instanceof String ? (
          <img
            src={credentials.image as string}
            alt={""}
            className="mr-2 h-[300px] w-[600px] object-cover"
          />
        ) : selectedFiles.length > 0 ? (
          <img
            src={firstImage}
            alt={""}
            className="mr-2 h-[300px] w-[600px] object-cover"
          />
        ) : (
          <label
            htmlFor="fileInput"
            className="cursor-pointer text-left bg-white-2 text-md mb-2 font-medium transition-all duration-300 opacity-100 md:w-[600px] border-2 border-dashed border-primary bg-gray-300 rounded-md h-[300px] flex items-center flex-col justify-center"
          >
            <Image src={Upload} alt={""} className="my-5" />
            Click to Select New Image
          </label>
        )}

        <input
          type="file"
          id="fileInput"
          className="hidden z-10"
          onChange={handleFileChange}
          multiple
        />
        {selectedFiles.length > 0 && (
          <div className="mt-4">
            <p className="font-bold mb-2">Selected Files:</p>
            <ul>
              {selectedFiles.map((file, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center bg-white py-2 px-4"
                >
                  <p className=" text-primary text base font-semibold">
                    {file.name}
                  </p>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteFile(index)}
                  >
                    <BsTrash />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="product"
          className="block text-sm font-medium text-light-black-8"
        >
          Product Name:
        </label>
        <input
          type="text"
          id="product"
          placeholder="Product Name"
          value={credentials.name}
          onChange={(e) =>
            setCredentials({ ...credentials, name: e.target.value })
          }
          className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-light-black-8"
        >
          Category:
        </label>
        <div className="w-full">
          <Select
            placeholder="Select Category"
            data={[
              "Handmade Goods",
              "Jewelry",
              "Home Decor",
              "Clothing",
              "Art",
              "Vintage Items",
              "Photography",
              "Cosmetics",
              "Toys",
            ]}
            value={credentials.category}
            onChange={(e) => {
              if (e !== null) {
                setCredentials({ ...credentials, category: e });
              }
            }}
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="brand"
          className="block text-sm font-medium text-light-black-8"
        >
          Brand:
        </label>
        <div className="w-full">
          <input
            type="text"
            id="brand"
            placeholder="Brand Name"
            value={credentials.brand}
            onChange={(e) =>
              setCredentials({ ...credentials, brand: e.target.value })
            }
            className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
          />
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-light-black-8"
        >
          Price:
        </label>
        <input
          type="text"
          id="price"
          placeholder="Add price"
          value={credentials.price}
          onChange={(e) =>
            setCredentials({ ...credentials, price: e.target.value })
          }
          pattern="[0-9]*"
          title="Please enter only numbers"
          className={`placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full ${
            validationErrors.price ? "border-red-500" : ""
          }`}

          // className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
        />
        {validationErrors.price && (
          <p className="text-primary text-sm">{validationErrors.price}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="stock"
          className="block text-sm font-medium text-light-black-8"
        >
          Stock:
        </label>
        <input
          type="text"
          id="stock"
          placeholder="Add Stock"
          value={credentials.countinStock}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              countinStock: e.target.value,
            })
          }
          pattern="[0-9]*"
          title="Please enter only numbers"
          className={`placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full ${
            validationErrors.countinStock ? "border-red-500" : ""
          }`}
          // className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
        />
        {validationErrors.countinStock && (
          <p className="text-primary text-sm">
            {validationErrors.countinStock}
          </p>
        )}
      </div>

      <div className="mb-10">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-light-black-8"
        >
          Description:
        </label>

        <textarea
          placeholder="Product description goes in here"
          id="description"
          value={credentials.description}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              description: e.target.value,
            })
          }
          className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full h-[200px] outline-none"
        ></textarea>
      </div>

      <div className="flex justify-end pb-10">
        <Button
          type="submit"
          onClick={handleAdd}
          className="bg-gradient-to-r from-primary-1 to-primary round h-12 typo flex gap-3 items-center justify-center shadow-xl text-white shake-on-hover"
        >
          {isLoading ? "Wait a minute....." : "Edit Product"}
        </Button>
      </div>
    </div>
  );
};

export default Profile;
