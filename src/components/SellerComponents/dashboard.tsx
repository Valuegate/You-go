import React from "react";
import OrderCard from "../OrderCard/page";
import Link from "next/link";
import Image from "next/image";
import line from "@/public/assets/line.png"
import NewProductCard from "../NewProductCard/newproductcard";
import TopSellerCard from "../TopSellerCard";
import TopBuyerCard from "../TopBuyerCard";

const Dashboard = ({setActive = () => {}}) => {
  const topInfo = [
    {
      name: "Total Revenue",
      value: "€23,190",
    },
    {
      name: "Total Orders",
      value: "578",
    },
    {
      name: "Total Products",
      value: "129",
    },
    {
      name: "Total Visitors",
      value: "1,345",
    },
  ];

  const recentOrders = [
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "Achan Benjamin",
      price: "€128",
      status: "Delivered",
    },
  ];

  const newproducts = [
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      stock: "300",
      price: "$30",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
    {
      image: "/assets/product.png",
      product: "Checkered Shoes",
      category: "Price:",
      price: "$30",
      stock: "300",
    },
  ];

  const topuser = [
    {
      image: "/assets/Ellipse2367.png",
      name: "Benjamin Achan",
      codeNo: "#21345",
      product: "100",
      amount: "$2,160",
    },
    {
      image: "/assets/Ellipse2367.png",
      name: "Benjamin Achan",
      codeNo: "#21345",
      product: "100",
      amount: "$2,160",
    },
    {
      image: "/assets/Ellipse2367.png",
      name: "Benjamin Achan",
      codeNo: "#21345",
      product: "100",
      amount: "$2,160",
    },
    {
      image: "/assets/Ellipse2367.png",
      name: "Benjamin Achan",
      codeNo: "#21345",
      product: "100",
      amount: "$2,160",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-col md:flex-row justify-between items-center"> */}
      <div className="flex flex-wrap justify-between items-center">
        {topInfo.map((info, i) => {
          return (
            <div
              key={i}
              className="rounded-2xl items-center md:items-start flex flex-col bg-primary-1 w-full md:w-[200px] md:mr-2 h-[130px] px-[20px] pt-[10px] mb-2 md:mb-0"
            >
              <p className="text-base font-normal text-light-black-6">{info.name}</p>
              <p className="text-xl font-bold text-light-black-7">{info.value}</p>
              <Image src={line} alt={""} />
            </div>
          );
        })}
      </div>

      <div className="mt-5 flex flex-col md:flex-row items-start gap-3 justify-between">
      <div className="flex flex-col w-full md:w-[60%] bg-primary-1 rounded-xl px-5 py-3 mb-2 md:mb-0">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">Recent Orders</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">#Order No</p>
            <p className="text-sm font-normal">Date</p>
            <p className="text-sm font-normal">Customer Name</p>
            <p className="text-sm font-normal">Price</p>
            <p className="text-sm font-normal">Status</p>
          </div>

          <div className="flex flex-col gap-4 overflow-y-scroll h-[45vh]">
            {recentOrders.map((order, i) => {
              return (
                <OrderCard
                  key={i}
                  orderNo={order.orderNo}
                  date={order.date}
                  name={order.name}
                  price={order.price}
                  status={order.status}
                />
              );
            })}
          </div>
        </div>

        <div className="bg-primary-1 rounded-lg w-full md:w-[40%] px-5 py-3">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">New Products</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">Product Name</p>
            <p className="text-sm font-normal">Stock</p>
          </div>
          <div className="flex flex-col gap-2 overflow-y-scroll h-[45vh]">
            {newproducts.map((newproduct, i) => {
              return (
                <NewProductCard
                  key={i}
                  image={newproduct.image}
                  price={newproduct.price}
                  product={newproduct.product}
                  stock={newproduct.stock}
                />
              );
            })}
          </div>
        </div>
      </div>


      <div className="mt-5 flex flex-col md:flex-row items-start gap-3 justify-between">
      <div className="flex flex-col w-full md:w-[50%] bg-primary-1 rounded-xl px-5 py-3 mb-2 md:mb-0">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">Top Sellers</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">Customer Name</p>
            <div className="flex gap-8">
            <p className="text-sm font-normal">Products</p>
            <p className="text-sm font-normal">Amount</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 overflow-y-scroll h-[45vh]">
            {topuser.map((user, i) => {
              return (
                <TopSellerCard
                key={i}
                image={user.image}
                name={user.name}
                codeNo={user.codeNo}
                product={user.product}
                amount={user.amount}
                 />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[50%] bg-primary-1 rounded-xl px-5 py-3">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">Top Sellers</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">Customer Name</p>
            <div className="flex gap-8">
            <p className="text-sm font-normal">Products</p>
            <p className="text-sm font-normal">Amount</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 overflow-y-scroll h-[45vh]">
            {topuser.map((user, i) => {
              return (
                <TopBuyerCard
                key={i}
                image={user.image}
                name={user.name}
                codeNo={user.codeNo}
                product={user.product}
                amount={user.amount}
                 />
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
