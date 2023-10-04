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

        <Footer />
        </div>
        
        </>
    );
  };
  
  export default OrderTracking;