"use client";
import Avatar from "@/public/assets/Ellipse 2367.png";
import Active from "@/public/assets/Ellipse 2370 (1).png";
import Image from "next/image";
import { useState } from "react";

const MessageCard = () => {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setClicked(!clicked);
  };

  const cardClass = clicked ? "text-white bg-primary" : "bg-white";

  return (
    <>
      <div
        className={`pl-3 py-2 pr-5 w-full rounded-2xl text-light-black-4 transition-all duration-300 ${cardClass}`}
        onClick={handleCardClick}
      >
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Image src={Avatar} alt={""} />
              <Image
                src={Active}
                alt={""}
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p
                  className={`text-sm font-bold ${
                    clicked ? "text-white" : "text-primary"
                  }`}
                >
                  Benjamin
                </p>
                <span className="text-sm font-normal">9:37AM</span>
              </div>
              <p
                className={`text-md font-normal ${
                  clicked ? "text-white" : "text-light-black-5"
                }`}
              >
                I am yet to get my order delivered
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
