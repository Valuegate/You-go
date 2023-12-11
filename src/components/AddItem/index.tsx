"use client";
import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";
import Outlined from "@/public/assets/Plus_Outlined.svg";
import { Button, Modal } from "@mantine/core";
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
  const open = () => setOpened(true);
  const close = () => setOpened(false);

  // const handleFileChange = (files: File[]) => {
  //   // Assuming you want to store only the first selected file in the credentials
  //   if (files.length > 0) {
  //     setCredentials((prevCredentials) => ({
  //       ...prevCredentials,
  //       image: files[0].name, // Update with your desired logic for storing file data
  //     }));
  //   }
  // };

  const router = useRouter();
  const [credentials, setCredentials] = useState<TCreatePayload>({
    name: "",
    image: "",
    brand: "",
    description: "",
    category: "",
    price: "",
    countinStock: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");

  const { isError, isLoading, isSuccess, Add, error, data } =
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
    setErrorMsg(""); // Clear previous error message

    if (selectedFiles.length > 0) {
      const file = selectedFiles[0];
      //  console.log(file);
      Add({ ...credentials, image: file });
    } else {
      Add(credentials);
    }

    // const reader = new FileReader();
    //     const file = selectedFiles[0];
    //   reader.onerror = (error) => {
    //     console.error("File reading error:", error);
    //     setErrorMsg("Error reading the file. Please try again.");
    //   };

    //   reader.onload = (e) => {
    //     if (e.target) {
    //       const base64Image = e.target.result as string;
    //       console.log("Base64 Data:", base64Image);

    //       const updatedCredentials = {
    //         ...credentials,
    //         image: base64Image,
    //       };

    //       Add(updatedCredentials);
    //     }
    //   };

    //   reader.readAsDataURL(file);
    // }
    // else {
    //   Add(credentials);
    // }
  };

  // const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const newFiles: File[] = Array.from(files);
      setSelectedFiles(newFiles);

      // setSelectedFiles((prevFiles) => {
      //   const updatedFiles = [...prevFiles, ...newFiles];
      //   // onFileChange(updatedFiles);
      //   return updatedFiles;
      // });

      // onFileChange([...BsTrash.prevFiles, ...newFiles]);
    }
  };

  const handleDeleteFile = (index: number) => {
    setSelectedFiles((prevFiles) => {
      const updatedFiles = [...prevFiles];
      updatedFiles.splice(index, 1);
      // onFileChange(updatedFiles);
      return updatedFiles;
    });
  };

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

              <label
                htmlFor="fileInput"
                className="cursor-pointer text-left bg-white-2 text-md mb-2 font-medium transition-all duration-300 opacity-100 md:w-[600px] border-2 border-dashed border-primary bg-gray-300 rounded-md h-[300px] flex items-center flex-col justify-center"
              >
                <Image src={Upload} alt={""} className="mr-2" />
                Click to Drop Files Here
              </label>
              <input
                type="file"
                id="fileInput"
                className="hidden"
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
                <input
                  type="text"
                  id="category"
                  placeholder="place your category here"
                  value={credentials.category}
                  onChange={(e) =>
                    setCredentials({ ...credentials, category: e.target.value })
                  }
                  className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
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
                className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
              />
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
                className="placeholder-italic mt-1 p-2 border-none bg-white-1 outline-none rounded w-full"
              />
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
