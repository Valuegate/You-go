"use client";
import React, { useState, useEffect, ChangeEvent } from "react";

import Image from "next/image";
import UploadImage from "@/public/assets/upload.png";
import { Button, Select } from "@mantine/core";
import useEditProduct, {
  TEditProductPayload,
} from "@/public/hooks/queries/useEditProduct";
import { BsTrash } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

const EditProduct = ({ product, refresh }) => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [image, setImage] = useState<string>("");
  const [loading, isLoading] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<any>("");
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
    uploaded_images: [],
  });

  function tryEdit() {
    var formData = new FormData();

    formData.append("name", credentials.name);
    formData.append("brand", credentials.brand);
    formData.append("description", credentials.description);
    formData.append("category", credentials.category);
    formData.append("price", credentials.price);
    formData.append("countinStock", credentials.countinStock);

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("uploaded_images", selectedFiles[i]);
    }

    let token = window.localStorage.getItem("userToken");

    axios({
      method: "PUT",
      url: `https://web-production-b1c8.up.railway.app/api/products/edit/${credentials.id}/`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        toast.success("Your product was edited");
        isLoading(false);
        refresh();
      })
      .catch((err) => {
        toast.error("An error occurred while trying to edit your product.");
        isLoading(false);
      });
  }

  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (product !== null && product !== undefined) {
      setCredentials({
        name: product.name,
        brand: product.brand,
        description: product.description,
        category: product.category,
        price: `${Math.trunc(product.price)}`,
        countinStock: product.countinStock,
        id: product.id,
        uploaded_images: [],
      });
      setImage(product.image);
    }
  }, []);

  const handleAdd = () => {
    setValidationErrors({});
    isLoading(true);
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

    if (Object.keys(validationErrors).length > 0) {
      isLoading(false);
      return;
    }

    setErrorMsg("");
    tryEdit();
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
    <div className="px-10 py-5 bg-primary-1">
      <p
        className={`font-medium text-xl mt-6 ${
          selectedFiles.length > 0 && "hidden"
        }`}
      >
        Current Images
      </p>
      <div className={`w-[600px] ${selectedFiles.length > 0 && "hidden"}`}>
        <Carousel showThumbs={false}>
          {product.images.map((image, index) => (
            <div key={index}>
              <img
                src={image.image}
                alt={`Product ${product.name}`}
                className="object-cover h-[300px] w-[400px] "
              />
            </div>
          ))}
        </Carousel>
      </div>
      <p className="font-medium text-xl mt-6">Selected Images</p>
      <div className="my-6">
        {selectedFiles.length > 0 ? (
          <img
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
          {loading ? "Wait a minute....." : "Edit Product"}
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
