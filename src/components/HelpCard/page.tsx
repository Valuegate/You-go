"use client";
import React, { FC, useState } from "react"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

const HelpCard = ({
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
    : "bg-primary rounded-lg";

  const headingClass = expanded ? "text-white" : "text-primary";

  return (
    <div
      className="bg-white w-[630px] rounded-lg cursor-pointer transition-all duration-300"
      onClick={toggleExpand}
    >
      <div className={` ${headerClass}`}>
        <div className="pl-4 pr-6 py-4">
          <div className="flex justify-between w-full">
            <div>
              <h2 className={`text-white text-base font-medium ${headingClass}`}>
                {title}
              </h2>
            </div>
            <div>
              <span><MdOutlineKeyboardArrowDown className="w-6 h-6 text-white"/></span>
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="py-2 pl-[2rem] pr-6 bg-primary-1">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default HelpCard;
