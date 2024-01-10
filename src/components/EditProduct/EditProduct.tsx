"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

import Image from "next/image";
import UploadImage from "@/public/assets/upload.png";
import { Button, Select } from "@mantine/core";
import useEditProduct, {
  TEditProductPayload,
} from "@/public/hooks/queries/useEditProduct";
import { BsTrash } from "react-icons/bs";
import useEditProductImage, {
  TEditProductImage,
} from "@/public/hooks/queries/useEditProductImage";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const EditProduct = ({ product, refresh }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<any>("");
  const [isFirst, setFirst] = useState<boolean>(true);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const [credentials, setCredentials] = useState<TEditProductPayload>({
    name: "",
    brand: "",
    description: "",
    category: "",
    price: "",
    countinStock: "",
    id: "",
  });

  const [imageCredentials, setImageCredentials] = useState<TEditProductImage>({
    product_id: "",
    image: null,
  });

  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Edit } = useEditProduct({
    product: credentials,
  });

  const {
    data,
    Upload,
    isError: deleteStatus,
  } = useEditProductImage({
    product: imageCredentials,
  });

  useEffect(() => {
    if (isFirst && product !== null && product !== undefined) {
      setCredentials({
        name: product.name,
        brand: product.brand,
        description: product.description,
        category: product.category,
        price: `${Math.trunc(product.price)}`,
        countinStock: product.countinStock,
        id: product.id,
      });
      setImage(product.image);
      setImageCredentials({
        product_id: product.id,
        image: null,
      });
      setFirst(false);
    }

    if (isError || deleteStatus) {
      setErrorMsg(
        "An error occurred during creating product. Please try again."
      );
      toast.error("An error occurred while trying to edit your product.");
    } else if (isSuccess) {
      toast.success('Product edited successfully');
      refresh();
    }
  }, [isError, deleteStatus, isSuccess, product, isFirst, refresh]);

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
      setImageCredentials({ ...imageCredentials, image: file });
      Upload();
    }

    Edit();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
      setSelectedFiles(newFiles);
      getBase64(newFiles[0])
        .then((resp) => setSelectedImage(resp))
        .catch((err) => setSelectedImage(""));
    } else {
      setSelectedImage("");
    }
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles([]);
    setSelectedImage("");
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
        <Image
          src={image}
          alt={""}
          className="mr-2 h-[300px] w-[600px] object-cover"
        />
      </div>

      <div className="my-6">
        {selectedFiles.length > 0 ? (
          <Image
            src={selectedImage}
            alt={""}
            className="mr-2 h-[300px] w-[600px] object-cover"
          />
        ) : (
          <label
            htmlFor="fileInput"
            className="cursor-pointer text-left bg-white-2 text-md mb-2 font-medium transition-all duration-300 opacity-100 md:w-[600px] border-2 border-dashed border-primary bg-gray-300 rounded-md h-[300px] flex items-center flex-col justify-center"
          >
            <Image src={UploadImage} alt={""} className="my-5" />
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

export default EditProduct;
