import CartsCard from "@/public/components/CartsCard/page";
import Link from "next/link";

const OrderConfirm = () => {
  return (
    <>
      <div className="mt-10 mx-4 md:mx-20 rounded-lg shadow-box">
        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-0 md:items-center md:justify-between bg-primary rounded-t px-4 md:px-12 py-2">
          <h2 className="text-white font-semibold text-xl md:text-2xl leading-5">Order Summary</h2>
          <Link href="/checkout">
            <button className="bg-primary border rounded w-1/2 md:w-[223px] h-10 md:h-[30px] text-white flex items-center justify-center">
              Return to Cart
            </button>
          </Link>
        </div>
        <div className="px-4 md:px-24 py-2">
          <div className="flex flex-col md:flex-row mt-4 md:mt-8">
            <div className="w-full md:w-1/2">
              <CartsCard product={"Product name"} />
              <CartsCard product={"Product name"} />
              <CartsCard product={"Product name"} />
              <div className="mt-3 md:flex md:justify-between">
                <div className="mt-3 w-full md:w-1/2 flex flex-col gap-1">
                  <div className="w-full flex justify-between">
                    <p className="text-xl font-normal text-light-black-4">
                      Subtotal:
                    </p>
                    <p className="text-xl font-normal text-primary">€455</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-xl font-normal text-light-black-4">
                      Shipping:
                    </p>
                    <p className="text-xl font-normal text-primary">Free</p>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-2xl font-medium text-primary">
                      Grand Total:
                    </p>
                    <p className="text-2xl font-medium text-primary">€455</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-l border-light-black-1 mx-0 md:mx-10"></div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-light-black-11">Shipping/Billing Information</h2>
              <div className="mt-8 md:mt-20 mb-20 md:mb-44">
                <p className="text-lg font-normal text-light-black-5">Shipping address Shipping address</p>
                <p className="text-lg font-normal text-light-black-5">123456 street name</p>
                <p className="text-lg font-normal text-light-black-5">Abuja, Nigeria</p>
              </div>
              <Link href="/payment">
                <button className="bg-gradient-to-r from-primary-1 to-primary rounded w-[70%] md:w-[50%] h-10 md:h-[40px] text-white flex items-center justify-center">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;