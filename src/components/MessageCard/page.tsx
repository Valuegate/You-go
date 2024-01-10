"use client";
import Active from "@/public/assets/Ellipse2370(1).png";
import Image from "next/image";
import { useState } from "react";

const MessageCard = ({
  image = "",
  name = "",
  lastMessage = "",
  time = "",
}) => {
  const [clicked, setClicked] = useState(false);

  const handleCardClick = () => {
    setClicked(!clicked);
  };

  const cardClass = clicked ? "text-white bg-weirdBrown" : "bg-[#FFFFFF99]";

  return (
    <>
      <div
        className={`pl-3 py-2 pr-5 w-full rounded-2xl ${!clicked && "hover:bg-lightBrownGradient"} shadow-sm text-light-black-4 transition-all duration-300 ${cardClass}`}
        onClick={handleCardClick}
      >
        <div className="cursor-pointer">
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Image src={image} alt={""} className="rounded-full w-[50px] object-cover h-[50px]"/>
              <Image
                src={Active}
                alt={""}
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p
                  className={`text-[16px] font-bold ${
                    clicked ? "text-white" : "text-primary"
                  }`}
                >
                  {name}
                </p>
                <span className="text-[14px] font-normal">{time}</span>
              </div>
              <p
                className={`text-md font-normal ${
                  clicked ? "text-white" : "text-light-black-5"
                }`}
              >
                {lastMessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageCard;
