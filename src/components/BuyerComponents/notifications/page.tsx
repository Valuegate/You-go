"use client";
import NotificationCard from "@/public/components/NotificationCard/page";
import { ArrowLeftIcon } from "@/public/icons/arrow-left-icon";
import { useState } from "react";
import { GrNext } from "react-icons/gr";

const Notifications = () => {
  const [clickedNumber, setClickedNumber] = useState<number | null>(null);

  const handleCardClick = (number: number) => {
    setClickedNumber(number);
  };

  const getCardClass = (number: number) => {
    return clickedNumber === number ? "text-white bg-primary" : "bg-white";
  };

  const notifications = [
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
    {
      image: "/assets/shoe2.png",
      title: "Order Notification",
      content:
        "You have placed an order and it will be delivered to your location soon",
      time: "8:53 PM",
    },
  ];

  return (
    
    <>
      <div className="pt-4">
        <div className="flex justify-between pb-2">
          <h2 className="text-base font-bold text-light-black-5">
            Notifications
          </h2>
          <h3 className="text-sm font-bold text-light-black-5">
            Mark all as read
          </h3>
        </div>
        <div className="bg-primary-1 rounded-lg px-4 py-4">
          <div className="flex flex-col gap-3">
          {notifications.map((notification, i) => {
              return (
                <NotificationCard
                  key={i}
                  content={notification.content}
                  image={notification.image}
                  title={notification.title}
                  time={notification.time}
                />
              );
            })}
          </div>
        </div>

        <div className="float-right mt-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 cursor-pointer">
              <ArrowLeftIcon />
              Prev
            </div>
            {Array.from({ length: 3 }).map((_, index) => (
              <span
                key={index}
                className={`w-[30px] h-[30px] flex justify-center items-center rounded-lg cursor-pointer ${getCardClass(
                  index
                )}`}
                onClick={() => handleCardClick(index)}
              >
                {index + 1}
              </span>
            ))}
            <div className="flex gap-1 items-center cursor-pointer">
              Next
              <GrNext />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
