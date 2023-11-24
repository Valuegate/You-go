"use client";
import BackButton from "@/public/components/BackButton/BackButton";
import NavBar from "@/public/components/NavBar/page";
import { UploadIcon } from "@/public/icons";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import feedback from "@/public/assets/feedback.png";

const Feedback = () => {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("You entered:", textareaValue);
    // Add further logic based on the entered text
  };

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };
  return (
    <>
      <NavBar>
        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 typo flex items-center justify-center shadow-xl text-white ">
          Logout
        </button>
      </NavBar>
      <div className="overflow-y-scroll sm:h-screen h-[87vh]">
        <div className="sm:px-6 px-24">
          <div className="mt-10">
            <BackButton to={""} />
          </div>

          <div className="flex items-center gap-20 mt-6">
            <div className="flex items-center gap-1">
              <h2 className="text-lg text-light-black-8 font-bold">
                Feedback about
              </h2>
              <Link href={""} className="text-primary text-lg font-bold">
                Our brand
              </Link>
            </div>
            <div>
              <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-1 text-base font-semibold flex items-center justify-center shadow-xl text-white ">
                Leave Feedback
              </button>
            </div>
          </div>

          <div className="mt-4 flex gap-6">
            <div className="sm:w-full w-[70%]">
              <div className="border-primary-1 border-8 rounded-lg">
                <div className="flex text-center flex-col mt-5">
                  <p className="text-base font-medium text-light-black-7 mb-3">
                    How was your experience?
                  </p>
                  <hr />
                  <div className="mt-5">
                    <form onSubmit={handleSubmit}>
                      <textarea
                        value={textareaValue}
                        onChange={handleTextareaChange}
                        placeholder="Please write a detailed feedback"
                        className="bg-white-3 w-[60%] h-[50%] rounded-lg pl-4 pt-4 outline-none"
                      />

                      <label htmlFor="upload" className="">
                        <input
                          type="file"
                          id="upload"
                          name="upload"
                          className="hidden"
                          onChange={handleFileChange}
                        />

                        {selectedFile && (
                          <p className="mb-6 text-light-black-6 flex items-center justify-center">
                            {selectedFile.name}
                          </p>
                        )}

                        <div className="flex gap-2 justify-center items-center cursor-pointer">
                          <div>
                            <UploadIcon
                              color="#d4145a"
                              width="35px"
                              height="35px"
                            />
                          </div>
                          <div>
                            <p className="font-medium text-sm text-light-black-6">
                              Attach a photo (optional)
                            </p>
                            <p className="font-medium text-sm text-light-black-6">
                              You can upload 5 images more
                            </p>
                          </div>
                        </div>
                      </label>
                      <div className="flex justify-center mt-4 mb-10">
                        <button className="bg-gradient-to-r from-primary-1 to-primary round px-6 py-2 text-lg font-semibold flex items-center justify-center shadow-xl text-white w-[50%]">
                          Send feedback
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-full w-[30%]">
              <div className="border-primary-1 border-8 rounded-lg py-3 px-3">
                <div className="flex justify-center">
                  <Image src={feedback} alt={""} />
                </div>
                <p className="text-light-black-4 font-medium text-sm text-justify">
                  Your honest feedback is crucial for other buyers and the
                  seller to make informed decisions. Please share your genuine
                  thoughts and experiences with this product to help others and
                  contribute to the seller's success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
