"use client";
import Image from "next/image";
import React, { useState } from "react";
import Outlined from "@/public/assets/Plus_Outlined.svg";
import { Button, Modal } from "@mantine/core";
import FileUpload from "../FileUpload";

const AddItem = ({ addText = "Add Order" }) => {
  const [opened, setOpened] = useState(false);

  const open = () => setOpened(true);
  const close = () => setOpened(false);

  return (
    <>
      <div className="bg-primary-1">
        <Modal opened={opened} onClose={close} size="auto" p={0} title="">
          <div className="px-10 bg-primary-1">
            <h2 className="font-semibold text-base text-light-black-8 mb-3">
              Add Image
            </h2>

            <div className="mb-6">
              <FileUpload />
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
                className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
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
                htmlFor="subcategory"
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
                  <option value="man">Shoes</option>
                  <option value="footwears">Footwears</option>
                  <option value="sneakers">Sneakers</option>
                  <option value="wristwatch">Wristwatch</option>
                  <option value="footwear">Footwear</option>
                  <option value="fashion">Fashion</option>
                </select>
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
                className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
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
                className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full h-[200px] outline-none"
              ></textarea>
            </div>

            <div className="flex justify-end pb-10">
              <Button className="bg-gradient-to-r from-primary-1 to-primary round h-12 typo flex gap-3 items-center justify-center shadow-xl text-white shake-on-hover">
                Publish Product
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
