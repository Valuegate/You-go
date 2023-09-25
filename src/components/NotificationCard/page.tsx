"use client";
import React, { FC, useState } from "react";

// interface iNotificationCard {
//   image: string,
//   title: string,
//   content: string,
// }

const NotificationCard = ({
  image = "",
  title = "",
  content = "",
  time = "",
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const headerClass = expanded
    ? "bg-primary text-white rounded-t-lg"
    : "bg-white rounded-lg";

  const headingClass = expanded ? "text-white" : "text-primary";

  return (
    <div
      className="bg-white rounded-lg cursor-pointer transition-all duration-300"
      onClick={toggleExpand}
    >
      <div className={`${headerClass}`}>
        <div className="flex gap-4 items-center pl-4 py-2">
          <div>
            <img
              src={image}
              alt={""}
              className="rounded-[25px] w-[50px] h-[50px]"
            />
          </div>
          <div className="flex gap-8">
            <div>
              <h2 className={`text-primary text-md font-bold ${headingClass}`}>
                {title}
              </h2>
              <p className="text-sm font-normal">{time}</p>
            </div>
            <div>
              <p className="text-sm font-normal">{content}</p>
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="my-2 pl-[5rem] pr-[3rem]">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;
