"use client";
import React from "react";
import NavBar from "../NavBar/page";
import Image from "next/image";
import Avatar from "@/public/assets/Ellipse2367.png";
import Active from "@/public/assets/Ellipse2370(1).png";
import MessageCard from "@/public/components/MessageCard/page";
import { MdCall, MdVideocam } from "react-icons/md";
import { MoreIcon } from "@/public/icons";
import SendMsg from "@/public/components/SendMsg/page";
import ReplyMsg from "@/public/components/ReplyMsg/page";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import BackButton from "../BackButton/BackButton";

const Messages = () => {
  const allMessages = [
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
    {
      image: "/assets/shoe1.png",
      name: "Benjamin",
      time: "9:53 PM",
      lastMessage: "I'm yet to get my order delivered",
    },
  ];

  return (
    <div className="h-[100vh] bg-white-1">
      <div className="h-[10vh] flex justify-between items-center px-5 ">
        <BackButton to={"/shopdetails"} />
        <div className="flex flex-col ">
          <h1 className="text-[20px] sm:text-[24px] text-end md:text-[32px] leading-[26px] md:leading-[62px] text-weirdBrown font-medium w-full">
            YouGo
          </h1>
          <p className="text-base sm:text-center text-light-black-3 font-normal">
            The home of style and fashion
          </p>
        </div>
      </div>
      <div className="flex w-[100vw] h-[90vh]">
        <div className="w-[30%] flex flex-col px-[2%]">
          <div className="mt-5">
            <div className="flex gap-3 items-center ">
              <div className="relative">
                <Image src={Avatar} alt={""} />
                <Image
                  src={Active}
                  alt={""}
                  className="absolute right-2 bottom-0"
                />
              </div>
              <div className="">
                <p className="text-[20px] font-medium">Benjamin Achan</p>
                <span className="text-[14px] font-normal">Active Now</span>
              </div>
            </div>
          </div>

          <div className="rounded-3xl mt-10 bg-[#FFFFFF99] w-full h-[70vh] shadow-xl flex flex-col px-5">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-white-1 rounded-full h-[50px] mt-5 px-5 focus:outline-none"
            />

            <div className="overflow-y-scroll gap-2 scrollbar-custom flex flex-col mt-5 mb-5">
              {allMessages.map((message, i) => {
                return (
                  <MessageCard
                    key={i}
                    image={message.image}
                    lastMessage={message.lastMessage}
                    name={message.name}
                    time={message.time}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[70%] flex flex-col px-[2%] scrollbar-custom">
          <div className="pl-5 h-[10vh] py-2  pr-3 w-full rounded-2xl text-light-black-4 bg-[#FFFFFF99] mt-5">
            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center ">
                <div className="relative">
                  <Image src={Avatar} alt={""} />
                  <Image
                    src={Active}
                    alt={""}
                    className="absolute right-2 bottom-0"
                  />
                </div>
                <div className="">
                  <p className="text-[20px] text-black font-medium">Benjamin</p>
                  <span className="text-[14px] text-black font-normal">
                    Active Now
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-around w-[15%]">
                <span className="bg-primary w-[28px] h-[28px] rounded-full flex justify-center items-center">
                  <MdCall className="text-white w-[23px] h-[23px] cursor-pointer" />
                </span>
                <span className="bg-primary w-[28px] h-[28px] rounded-full flex justify-center items-center">
                  <MdVideocam className="text-white w-[23px] h-[23px] cursor-pointer" />
                </span>
                <div className="cursor-pointer">
                  <MoreIcon />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-5 px-5 flex flex-col gap-5 h-[70vh] w-full overflow-y-scroll scrollbar-custom">
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
            <SendMsg />
            <ReplyMsg />
          </div>

          <div className="h-[10vh]">
            <form className="border-none h-[50px] flex gap-10 items-center overflow-hidden mt-3 w-full">
              <div className="relative basis-[90%]">
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="Type here"
                  className="flex-grow px-3 shadow-md py-4 w-full h-[50px] bg-[#FFFFFF99] focus:outline-none rounded-[25px]"
                />
              </div>
              <div className="flex items-center gap-4 basis-[10%]">
                <button className="flex-shrink-0 flex items-center justify-center rounded-2xl gap-2 text-white bg-light-black-5 border-0 font-normal w-[80px] h-[30px] text-sm">
                  Send
                  <FiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
