import CartCard from "@/public/components/CartCard/page";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Link from "next/link";

const Cart = () => {
  return (
    <>
      <NavBar btnText={"Logout"} />

      <div className="overflow-y-scroll h-[90vh]">
        <div className="px-24">
          <div className="flex items-center gap-3 mt-8">
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]">Home &gt;</Link>
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"> Store&nbsp;&gt;</Link>
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"> Human Bag&nbsp;&gt;</Link>
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"> Cart&nbsp;&gt;</Link>
          </div>
          <div className="px-32">
          <div className="pt-16 pb-2">
            <div className="flex justify-between">
              <p className="text-[18px] font-semibold text-primary">Item</p>
              <p className="text-[18px] font-semibold text-primary">Price</p>
              <p className="text-[18px] font-semibold text-primary">Quantity</p>
              <p className="text-[18px] font-semibold text-primary">Total</p>
            </div>
            <div className="mt-2 mb-3">
            <hr className="border-none bg-light-black-1 h-[1px] w-full"/>
            </div>
          </div>
          <CartCard product={"Human Bag"} />
          <CartCard product={"Human Bag"} />
          <CartCard product={"Human Bag"} />
          <div className="flex justify-end">
          <div className="mt-8 w-[40%] mb-32">
            <div className="w-full flex flex-row justify-between">
              <p className="text-[18px] font-bold text-light-black-4">Subtotal:</p>
              <p className="text-[1.1rem] font-normal text-primary">$450</p>
            </div>
            <div className="mt-2 mb-3">
            <hr className="border-none bg-light-black-1 h-[1px] w-full"/>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="text-[18px] font-bold text-light-black-4">
                Sales taxes:
              </p>
              <p className="text-[1.1rem] font-normal text-primary">$5</p>
            </div>
            <div className="mt-2 mb-3">
            <hr className="border-none bg-light-black-1 h-[1px] w-full"/>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="text-[18px] font-bold text-light-black-4">
                Coupon code:
              </p>
              <p className="text-[1.1rem] font-normal text-light-black-3">
                Add coupon
              </p>
            </div>
            <div className="mt-2 mb-3">
            <hr className="border-none bg-light-black-1 h-[1px] w-full"/>
            </div>
            <div className="w-full flex flex-row justify-between">
              <p className="text-[18px] font-bold text-light-black-4">Subtotal:</p>
              <p className="text-[1.1rem] font-bold text-primary">$455</p>
            </div>
            <div className="mt-2 mb-10">
            <hr className="border-none bg-light-black-1 h-[1px] w-full"/>
            </div>
            <Link href="/checkout" className="w-full">
              <button className="bg-gradient-to-r from-primary-1 to-primary round w-full h-[50px] typo flex items-center justify-center text-white">Checkout</button>
            </Link>
          </div>
          </div>
          </div>
        </div>
        <div>
        <Footer />
        </div>
      
      </div>

    </>
  );
};

export default Cart;
