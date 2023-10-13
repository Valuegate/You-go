import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";

const OrderTracking = () => {
    return (
        <>
        <NavBar btnText={"logout"} />
        <div className="overflow-y-scroll h-[88vh]">
        <div className="h-[100px] md:h-[260px] bg-tracking-image">
        <div className="flex flex-col gap-8 justify-center items-center pt-6 md:pt-24">
            <h2 className="font-bold text-[30px] leading-[40px] text-white">
            Track Your Order
            </h2>
          </div>
        </div>

        <div className="px-4 md:px-48">
          <div className="mt-4">
            <p className="text-primary text-base font-semibold">Current Order (2)</p>
            <p className="text-light-black-3 text-sm font-medium mb-1">Order: 318742</p>
            <h2 className="text-light-black-4 text-2xl font-bold">Wooden Chair (classic)</h2>
          </div>


          <div className="flex justify-between mt-6">
          <p className="text-primary text-sm font-medium">12-06-2023</p>
            <p className="text-light-black-3 text-sm font-medium">13-06-2023</p>
          </div>
          </div>
          <div className="h-1/2"></div>


          <hr className="border-none bg-light-black-1 h-[1px] w-full"/>

          <div className="my-4 px-4 md:px-48">
            <p className="text-light-black-4 text-sm font-medium">Order (1)</p>
            <p className="text-light-black-3 text-sm font-medium mb-1">Order: 318742</p>
            <div className="flex justify-between">
            <h2 className="text-primary text-2xl font-normal">Wooden Chair 1 (classic)</h2>
            <h2 className="text-primary text-xl font-semibold">Delivered</h2>
            </div>
          </div>

          <hr className="border-none bg-light-black-1 h-[1px] w-full"/>


        <div className="h-1/2"></div>
        <Footer />
        </div>
        
        </>
    );
  };
  
  export default OrderTracking;