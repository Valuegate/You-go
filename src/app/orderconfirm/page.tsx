import CartsCard from "@/public/components/CartsCard/page";
import Link from "next/link";

const OrderConfirm = () => {
  return (
    <>
      <div className="mt-20 mx-20 round boxs-shadow">
        <div className="flex items-center justify-between bg-primary rounded-t px-12 py-2">
          <h2 className="text-white font-semibold text-[20px] leading-[15px]">Order Summary</h2>
          <Link href={"/checkout"}>
          <button className="bg-primary border round w-[223px] h-[30px] typo flex items-center justify-center text-white">
            Return to Cart
          </button>
          </Link>
        </div>
        <div className="px-24 py-2">
          <div className="flex mt-8">
            <div className="w-[50%]">
              <CartsCard product={"Product name"} />
              <CartsCard product={"Product name"} />
              <CartsCard product={"Product name"} />
              <div className="mt-3 flex justify-end">
                <div className="mt-3 w-[50%] flex flex-col gap-1">
                <div className="w-full flex flex-row justify-between">
                  <p className="text-[20px] font-normal text-light-black-4">
                    Subtotal:
                  </p>
                  <p className="text-[20px] font-normal text-primary">$455</p>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <p className="text-[20px] font-normal text-light-black-4">
                    Shipping:
                  </p>
                  <p className="text-[20px] font-normal text-primary">Free</p>
                </div>
                <div className="w-full flex flex-row justify-between">
                  <p className="text-[25px] font-medium text-primary">
                    Grand Total:
                  </p>
                  <p className="text-[25px] font-medium text-primary">$455</p>
                </div>
                </div>
              </div>
            </div>
            <div className="border-l border-light-black-1 mx-10"></div>

            <div className="w-[50%]">
                <h2 className="text-[25px] font-bold text-light-black-11">Shipping/Billing Information</h2>
                <div className="mt-20 mb-44">
                    <p className="text-[15px] font-normal text-light-black-5">Shipping address Shipping address</p>
                    <p className="text-[15px] font-normal text-light-black-5">123456 street name</p>
                    <p className="text-[15px] font-normal text-light-black-5">Abuja, Nigeria</p>
                </div>
                
                <Link href="/payment">
              <button className="bg-gradient-to-r from-primary-1 to-primary round w-[70%] h-[40px] typo flex items-center justify-center text-white">Checkout</button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirm;
