import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import PaymentCard from "@/public/components/PaymentCard/page";
import Link from "next/link";

const Payment = () => {
    return ( 
        <>
        <NavBar btnText={"Logout"} />
        
        <div className="overflow-y-scroll h-[90vh]">
        <div className="pl-48 mt-16 font-bold text-[20px] leading-[15px] text-primary">Payment Method</div>
        <div className="flex flex-col justify-center mt-10">
            <p className="text-center text-light-black-4 font-medium">Select the payment method to proceed</p>
            <div className="flex justify-center mt-6">
            <PaymentCard />
            </div>
        </div>
            <div className="flex justify-center mt-6 mb-32">
            <Link href="/pin">
              <button className="bg-gradient-to-r from-primary-1 to-primary round w-[325px] h-[40px] typo flex items-center justify-center text-white">Confirm Payment</button>
            </Link>
            </div>
            <Footer />
        </div>
        </>
     );
}
 
export default Payment;