"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import Outlined from "@/public/assets/Plus_Outlined.svg";
import { Button, Modal, Select } from "@mantine/core";
import FileUpload from "../FileUpload";
import { useRouter } from "next/navigation";
import useCreateProduct, {
  TCreatePayload,
} from "@/public/hooks/mutations/useCreateProduct";
import { BsTrash } from "react-icons/bs";
import Upload from "@/public/assets/upload.png";

const AddItem = ({ addText = "Add Order" }) => {
  const [opened, setOpened] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [firstImage, setFirstImage] = useState<any>("");
  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const [validationErrors, setValidationErrors] = useState<{
    [key: string]: string;
  }>({});

  const router = useRouter();
  const [credentials, setCredentials] = useState<TCreatePayload>({
    name: "",
    uploaded_images: [],
    brand: "",
    description: "",
    category: "",
    price: "",
    countinStock: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, addProduct, error, data } =
    useCreateProduct();

  useEffect(() => {
    if (isError) {
      setErrorMsg(
        "An error occurred during creating product. Please try again."
      );
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/shop");
    }
  }, [isSuccess, router]);

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
      const files = selectedFiles[0];
      //  console.log("UPLOADING FILES", files);
      addProduct({ ...credentials, uploaded_images: files });
    } else {
      addProduct(credentials);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
      setSelectedFiles((prevFiles) => [...prevFiles, ...newFiles]);
      getBase64(newFiles[0])
        .then((resp) => setFirstImage(resp))
        .catch((err) => setFirstImage("./assets/upload.png"));
    } else {
      // setFirstImage("./assets/upload.png");
    }
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      // onFileChange(updatedFiles);
      return updatedFiles;
    });
    // setSelectedFiles([]);
    // setFirstImage("./assets/upload.png");
  };

  function getBase64(file: File) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
    });
  }

  return (
    <>
      <div className="bg-primary-1">
        <Modal opened={opened} onClose={close} size="auto" p={0} title="">
          <div className="px-10 bg-primary-1">
            <h2 className="font-semibold text-base text-light-black-8 mb-3">
              Add Image
            </h2>

            <div className="mb-6">
              {/* <FileUpload onFileChange={handleFileChange} /> */}

              {selectedFiles.length > 0 ? (
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
                  Click to Select Image
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

            {/* <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-light-black-8"
              >
                Category:
              </label>
              <div className="w-full">
                <select
                  id="category"
                  name="category"
                  className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full outline-none"
                >
                  <option>Select a category</option>
                  <option className="hover:bg-primary bg-white-2" value="man">
                    Man
                  </option>
                  <option value="woman">Woman</option>
                </select>
              </div>
            </div> */}

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
                {isLoading ? "Wait a minute....." : "Publish Product"}
              </Button>
            </div>
          </div>
        </Modal>
      </div>

      <Button
        onClick={open}
        className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 flex items-center justify-center shadow-xl text-white w-full shake-on-hover"
      >
        {addText}
      </Button>
    </>
  );
};

export default AddItem;
