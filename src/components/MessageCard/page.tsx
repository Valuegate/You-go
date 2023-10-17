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
              <Image src={image} alt={""} className="rounded-[25px] w-[50px] h-[50px] cursor-pointer"/>
              <Image
                src={Active}
                alt={""}
                className="absolute right-0 bottom-0"
              />
            </div>
            <div className="w-full">
              <div className="flex justify-between">
                <p
                  className={`text-sm font-bold cursor-pointer ${
                    clicked ? "text-white" : "text-primary"
                  }`}
                >
                  {name}
                </p>
                <span className="text-sm font-normal cursor-pointer">{time}</span>
              </div>
              <p
                className={`text-md font-normal cursor-pointer ${
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
