// "use client";
// import { SearchIcon } from "@/public/icons";
// import Link from "next/link";
// import React from "react";
// import { useState } from "react";
// import NavBar from "@/public/components/NavBar/page";
// import Image from "next/image";
// import Avatar from "@/public/assets/Ellipse 2367.png";
// import Footer from "@/public/components/Footer/page";
// import {
//   MdDashboard,
//   MdNotificationsActive,
//   MdOutlineForwardToInbox,
//   MdPeople,
//   MdSettings,
// } from "react-icons/md";
// import { BiCart, BiDownload } from "react-icons/bi";
// import { FaProductHunt } from "react-icons/fa";
// import Dashboard from "./dashboard/page";
// import Messages from "./messages/page";
// import Notifications from "./notifications/page";
// import Orders from "./orders/page";
// import Settings from "./settings/page";

// const BuyerDashBoardLayout = () => {
//   const [active, setActive] = useState(0);

//   const menus = [
//     { name: "Dashboard", link: "./dashboard", icon: MdDashboard },
//     { name: "Orders", link: "./orders", icon: BiCart },
//     {
//       name: "Notifications",
//       link: "./notifications",
//       icon: MdNotificationsActive,
//     },
//     { name: "Settings", link: "./settings", icon: MdSettings },
//   ];

//   const children = [
//     <>
//       {active == 0 && <Dashboard />}
//       {active == 1 && <Orders />}
//       {active == 2 && <Notifications />}
//       {active == 3 && <Settings />}
//     </>,
//   ];

//   return (
//     <>
//       <NavBar btnText={"Logout"} />
//       <div className="overflow-y-scroll h-[88vh]">
//         <div className="flex gap-4 bg-white px-24 pb-40">
//           <div className="w-72 h-[748px] bg-light-black-5 rounded-lg ">
//             <div className="mt-20 round">
//               <div className="px-4 flex flex-col gap-1 bg-white py-4 mx-4 round">
//                 {menus?.map((menu, i) => (
//                   <div
//                     onClick={() => {
//                       setActive(i);
//                     }}
//                     key={i}
//                     className={`group flex items-center text-semibold text-primary gap-2 font-medium p-2 ${
//                       i == active && "bg-primary text-white"
//                     } cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white rounded`}
//                   >
//                     <div>{React.createElement(menu?.icon)}</div>
//                     <h2>{menu?.name}</h2>
//                   </div>
//                 ))}
//               </div>
//               <div className="mx-4">
//                 <Link href="/login" className="">
//                   <button className="mr-4 mt-48 bg-gradient-to-r from-primary-1 to-primary round w-full h-[40px] typo flex gap-3 items-center justify-center text-white">
//                     <span>
//                       <BiDownload />
//                     </span>
//                     Logout
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full bg-white">
//             <nav className="flex justify-between items-center py-6">
//               <div className="flex items-center">
//                 <div className="relative flex items-center">
//                   <span className="absolute left-4">
//                     <SearchIcon />
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Search"
//                     className="search w-[500px] py-2 pl-10 pr-4 border-none bg-white-1 rounded focus:ring-none focus:border-none"
//                   />
//                 </div>
//               </div>

//               <div className="">
//                 <div className="flex gap-1 items-center">
//                   <div>
//                     <Image src={Avatar} alt={""} />
//                   </div>
//                   <div>
//                     <h5 className="text-primary text-base font-medium">
//                       Benjamin Achan
//                     </h5>
//                     <p className="text-light-black-4 text-sm font-medium">
//                       Seller account
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </nav>

//             <div key={active} className="bg-white">{children}</div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default BuyerDashBoardLayout;


"use client"
import { SearchIcon } from "@/public/icons";
import Link from "next/link";
import React, { useState } from "react";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Avatar from "@/public/assets/Ellipse 2367.png";
import Footer from "@/public/components/Footer/page";
import {
  MdDashboard,
  MdNotificationsActive,
  MdOutlineForwardToInbox,
  MdPeople,
  MdSettings,
} from "react-icons/md";
import { BiCart, BiDownload } from "react-icons/bi";
import { FaProductHunt } from "react-icons/fa";
import Dashboard from "./dashboard/page";
import Messages from "./messages/page";
import Notifications from "./notifications/page";
import Orders from "./orders/page";
import Settings from "./settings/page";

const BuyerDashBoardLayout = () => {
  const [active, setActive] = useState(0);

  const menus = [
    { name: "Dashboard", link: "./dashboard", icon: MdDashboard },
    { name: "Orders", link: "./orders", icon: BiCart },
    {
      name: "Notifications",
      link: "./notifications",
      icon: MdNotificationsActive,
    },
    { name: "Settings", link: "./settings", icon: MdSettings },
  ];

  const children = [
    <>
      {active == 0 && <Dashboard />}
      {active == 1 && <Orders />}
      {active == 2 && <Notifications />}
      {active == 3 && <Settings />}
    </>,
  ];

  return (
    <>
      <NavBar btnText={"Logout"} />
      <div className="overflow-y-scroll h-[88vh]">
        <div className="flex flex-col md:flex-row bg-white px-4 md:px-24 pb-40">
          <div className="w-full md:w-72 h-auto md:h-[748px] bg-light-black-5 rounded-lg">
            <div className="mt-8 mb-8 md:mb-0 md:mt-20 round">
              <div className="px-4 flex flex-col gap-1 bg-white py-4 mx-4 round">
                {menus?.map((menu, i) => (
                  <div
                    onClick={() => {
                      setActive(i);
                    }}
                    key={i}
                    className={`group flex items-center text-semibold text-primary gap-2 font-medium p-2 ${
                      i == active && "bg-primary text-white"
                    } cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white rounded`}
                  >
                    <div>{React.createElement(menu?.icon)}</div>
                    <h2>{menu?.name}</h2>
                  </div>
                ))}
              </div>
              <div className="mx-4">
                <Link href="/login" className="">
                  <button className="mr-4 mt-4 md:mt-48 bg-gradient-to-r from-primary-1 to-primary round w-full h-[40px] typo flex gap-3 items-center justify-center text-white">
                    <span>
                      <BiDownload />
                    </span>
                    Logout
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:pl-4 w-full bg-white">
            <nav className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center py-4 md:py-6">
              <div className="flex items-center">
                <div className="relative flex items-center">
                  <span className="absolute left-4">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search w-full md:w-[500px] py-2 pl-10 pr-4 border-none bg-white-1 rounded focus:ring-none focus:border-none"
                  />
                </div>
              </div>

              <div className="">
                <div className="flex gap-1 items-center">
                  <div>
                    <Image src={Avatar} alt={""} />
                  </div>
                  <div>
                    <h5 className="text-primary text-base font-medium">
                      Benjamin Achan
                    </h5>
                    <p className="text-light-black-4 text-sm font-medium">
                      Seller account
                    </p>
                  </div>
                </div>
              </div>
            </nav>

            <div key={active} className="bg-white">{children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BuyerDashBoardLayout;