"use client"
import Image from 'next/image';
import React, { FC, useState } from 'react';
import Camera from "@/public/assets/Ellipse 2397.png"

interface iNotificationCard {
  }

const NotificationCard: FC<iNotificationCard> = ({ }) => {
    const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const headerClass = expanded ? 'bg-primary text-white rounded-t-lg' : 'bg-white rounded-lg' ;

  const headingClass = expanded ? 'text-white' : 'text-primary' ;

  return (
    <div className="bg-white rounded-lg cursor-pointer transition-all duration-300" onClick={toggleExpand}>
      <div className= {`${headerClass}`}>
            <div className="flex gap-4 items-center pl-4 py-2">
                <div>
                <Image src={Camera} alt={''} />
                </div>
            <div className='flex gap-8'>
                <div>
                    <h2 className={`text-primary text-md font-bold ${headingClass}`}>Order Notification:</h2>
                    <p className='text-sm font-normal'>8:53</p>
                </div>
            <div>
                <p className='text-sm font-normal'>Your order has been shipped and is on it’s way to you</p>
            </div>
            </div>
        </div>
      </div>
      {expanded && (
        <div className="my-2 pl-[5rem] pr-[3rem]">
          <p>Your order has been shipped to your location Your order has been shipped to your location Your order has been shipped to your location Your order has been shipped to your location Your order has been shipped to your location.</p>
        </div>
      )}
    </div>
  );
};

export default NotificationCard;

