"use client";
import OrderCard from "@/public/components/OrderCard/page";
import ProductCard from "@/public/components/ProductCard/page";
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <div className="pt-4">
        <div className="flex gap-4">
          <div className="bg-primary-1 rounded-lg px-4 py-4 w-[60%]">
            <div className="flex text-light-black-5 justify-between pb-1">
              <h5 className="text-base font-bold">Recent Orders</h5>
              <Link href={""}>
              <p className="text-base font-bold">See All</p>
              </Link>
            </div>
            <div className="flex pt-2 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
              <div className="flex gap-5">
              <p className="text-sm font-normal">#Order No</p>
              <p className="text-sm font-normal">Date</p>
              </div>
              <div>
              <p className="text-sm font-normal">Product Name</p>
              </div>
              <div className="flex gap-8">
              <p className="text-sm font-normal">Price</p>
              <p className="text-sm font-normal">Status</p>
              </div>
            </div>

          <div className="flex flex-col gap-4">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
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
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
