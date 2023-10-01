import React from "react";
import OrderCard from "../OrderCard/page";
import Link from "next/link";
import ProductCard from "../ProductCard/page";
import products from "./products";
import { Charts } from "../Charts/Charts";

const Dashboard = ({setActive = () => {}}) => {

  const recentOrders = [
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/23",
      name: "product",
      price: "$128",
      status: "Delivered",
    },
  ];

  const products = [
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
    {
      image: "/assets/shoe3.png",
      product: "Product Name",
      category: "Category",
      subCategory: "Sub Category",
      price: "$2,180",
    },
  ];

  return (
    <div className="flex flex-col">
      
      <div className="mt-5 flex items-start justify-between">
      <div className="flex flex-col w-[58%] bg-primary-1 rounded-xl px-5 py-3">
          <div className="flex justify-between pb-1 mb-2">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">Recent Orders</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">#Order No</p>
            <p className="text-sm font-normal">Date</p>
            <p className="text-sm font-normal">Product Name</p>
            <p className="text-sm font-normal">Price</p>
            <p className="text-sm font-normal">Status</p>
          </div>

          <div className="flex flex-col gap-4">
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

        <div className="bg-primary-1 rounded-lg w-[40%] px-4 py-4">
          <div className="flex justify-between pb-1 mb-2">
            <h5 className="text-base font-bold">Top Products</h5>
            <Link href={""}>
              <p className="text-base font-bold">See All</p>
            </Link>
          </div>
          <div className="flex flex-col gap-1">
            {products.map((product, i) => {
              return (
                <ProductCard
                  key={i}
                  category={product.category}
                  image={product.image}
                  price={product.price}
                  product={product.product}
                  subCategory={product.subCategory}
                />
              );
            })}
          </div>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Dashboard;
