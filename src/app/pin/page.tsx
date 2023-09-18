"use client"
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Link from "next/link";
import { PinInput, Group } from '@mantine/core';

const Pin = () => {
    return ( 
        <>
        <NavBar btnText={"Logout"} />
        
        <div className="overflow-y-scroll h-[90vh]">
        <div className="pl-48 mt-16 font-bold text-[20px] leading-[15px] text-primary">Enter your PIN</div>
        <div className="flex flex-col justify-center mt-10 mb-10">
            <p className="text-center text-[10px] text-primary font-normal">Enter the PIN sent to your mobile phone to confirm payment</p>
        </div>
        <Group position="center">
      <PinInput mask 
      size="xl" // Adjust the size, available options are "xs", "sm", "md", "lg", "xl"
      style={{ // Inline styles
        gap: "30px"
      }}
      />
    </Group>
            <div className="flex justify-center mt-10 mb-32">
            <Link href="/thanks">
              <button className="bg-gradient-to-r from-primary-1 to-primary round w-[325px] h-[40px] typo flex items-center justify-center text-white">Continue</button>
            </Link>
            </div>
            <Footer />
        </div>
        </>
     );
}
 
export default Pin;