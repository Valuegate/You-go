import MessageCard from "@/public/components/MessageCard/page";
import Avatar from "@/public/assets/Ellipse 2367.png";
import Active from "@/public/assets/Ellipse 2370 (1).png";
import Image from "next/image";
import { MdCall, MdVideocam } from "react-icons/md";
import { MoreIcon } from "@/public/icons";
import SendMsg from "@/public/components/SendMsg/page";
import ReplyMsg from "@/public/components/ReplyMsg/page";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im"
import { FiSend } from "react-icons/fi"

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
    <>
      <div className="pt-4">
        <div className="flex gap-4">
          <div className="bg-primary-1 rounded-lg px-4 py-4 w-[50%] h-[625px] overflow-y-scroll">
            <div className="flex flex-col gap-4">
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

          <div className="bg-primary-1 rounded-lg px-4 py-4 w-[50%] h-[625px]">
            <div className="pl-5 py-2 pr-3 w-full rounded-2xl text-light-black-4 bg-white">
              <div className="flex items-center justify-between">
                <div className="flex gap-2 items-center ">
                  <div className="relative">
                    <Image src={Avatar} alt={""} />
                    <Image
                      src={Active}
                      alt={""}
                      className="absolute right-0 bottom-0"
                    />
                  </div>
                  <div className="">
                    <p className="text-sm font-bold">Benjamin</p>
                    <span className="text-sm font-normal">Active Now</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <span className="bg-primary w-[28px] h-[28px] rounded-full flex justify-center items-center">
                    <MdCall className="text-white w-[23px] h-[23px] cursor-pointer" />
                  </span>
                  <span className="bg-primary w-[28px] h-[28px] rounded-full flex justify-center items-center">
                    <MdVideocam className="text-white w-[23px] h-[23px] cursor-pointer" />
                  </span>
                </div>
                <div className="cursor-pointer">
                  <MoreIcon />
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-col gap-4 h-[455px] overflow-y-scroll">
              <SendMsg />
              <ReplyMsg />
              <SendMsg />
              <ReplyMsg />
              <SendMsg />
              <ReplyMsg />
            </div>
            <div>
            <form className="border-none h-[40px] rounded-2xl flex items-center overflow-hidden mt-3 bg-white w-full">
              <input
                type="text"
                id=""
                name=""
                placeholder="Type here"
                className="flex-grow border-0 pl-4 basis-[70%] bg-white"
              />
              <div className="flex items-center gap-4 basis-[40%]">
                <span><BsEmojiSmile /></span>
                <span><ImAttachment /></span>
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
    </>
  );
};

export default Messages;
