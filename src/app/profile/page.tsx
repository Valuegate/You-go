import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Author from "@/public/assets/Ellipse2396.png";
import Link from "next/link";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const Profile = () => {
  return (
    <>
      <NavBar btnText={"logout"} />
      <div className="overflow-y-scroll h-[88vh]">
        <div className="h-[100px] md:h-[260px] bg-profile-image"></div>
        <div className="px-4 md:px-48">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-[50%] pt-10">
              <div className="flex flex-col md:flex-row justify-between mb-8 md:mb-20">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-primary text-xl font-semibold">
                    3 years plus
                  </h2>
                  <p className="text-light-black-3 font-medium text-base">
                    Registered
                  </p>
                </div>
                <div className="mb-4 md:mb-0">
                  <h2 className="text-primary text-xl font-semibold">38 +</h2>
                  <p className="text-light-black-3 font-medium text-base">
                    Purchases
                  </p>
                </div>
                <div>
                  <h2 className="text-primary text-xl font-semibold">
                    $5,678
                  </h2>
                  <p className="text-light-black-3 font-medium text-base">
                    Spent
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-primary text-2xl font-bold">Benjamin</h2>
                <p className="text-light-black-5 font-semibold text-base mb-4">
                  Abuja, Nigeria
                </p>
                <p className="text-light-black-5 font-normal text-sm">
                  Brief profileBrief profileBrief profileBrief profile Brief
                  profileBrief profile Brief profileBrief profile Brief
                  profileBrief profile Brief profileBrief profile Brief
                  profileBrief profileBrief profileBrief profile
                </p>
              </div>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="relative bottom-0 md:bottom-40">
                <div>
                  <Image src={Author} alt={""} />
                </div>
                <Link href="/login" className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary-1 to-primary round w-full md:w-[280px] h-[50px] typo flex gap-3 items-center justify-center text-white">
                    <MdOutlineLocalPostOffice className="text-white w-[25px] h-[25px] cursor-pointer" />
                    Send Message
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-1/2"></div>

        <Footer />
      </div>
    </>
  );
};

export default Profile;