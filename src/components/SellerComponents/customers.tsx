import React from "react";
import { FaCaretDown } from "react-icons/fa";
import AddItem from "../AddItem";
import CustomerDetails from "../CustomerDetails/page";

const Customers = () => {
  const customers = [
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },
    {
      image: "/assets/bigbag.png",
      name: "Benjamin Achan",
      id: "#12345",
      spent: "€2,659",
      lastOrdered: "12/01/2023",
      email: "me@email.com",
      phone: "+2348012345678",
      active: true,
    },

  ];

  return (
    <>
      {/* <AddItem addText="Add Customer" /> */}
      <div className="pt-10">
        <div className="bg-primary-1 rounded-lg px-4 py-4 w-full">
          <p className="text-light-black-5 text-base font-bold mb-3">
            Customers
          </p>
          <div className="flex pt-1 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">Customer Name</p>
            <p className="text-sm font-normal">#ID</p>
            <p className="text-sm font-normal">Spent</p>
            <p className="text-sm font-normal">Last Ordered</p>
            <p className="text-sm font-normal">Email</p>
            <p className="text-sm font-normal">Phone</p>
            <p className="text-sm font-normal">Status</p>
            <p className="text-sm font-normal">Action</p>
          </div>

          <div className="flex flex-col gap-4">
            {customers.map((customer, i) => {
              return (
                <CustomerDetails
                key={i}
                  name={customer.name}
                  id={customer.id}
                  spent={customer.spent}
                  lastOrdered={customer.lastOrdered}
                  email={customer.email}
                  phone={customer.phone}
                  active={customer.active}
                  image={customer.image}
                />
              );
            })}
          </div>

          {/* <div className="flex justify-between items-center mt-5 relative">
            <div className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer">
              Show: 10
              <FaCaretDown />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Customers;
