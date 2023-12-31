import NavBar from "@/public/components/NavBar/page";

import MenuSec from "@/public/components/MenuSec/page";
import Footer from "@/public/components/Footer/page";

const Favorites = () => {

  return (
    <>
      <NavBar />
      <div className="overflow-y-scroll h-[87vh]">
        <div className="h-[400px] bg-custom-image">
        <div className=" pt-4 ml-3 lg:pt-20 lg:ml-16">
            <div className="w-20 h-10 flex justify-center items-center bg-primary text-white">Favorites</div>
            </div>
          <div className="flex flex-col gap-8 justify-center items-center pt-4 md:pt-12">
            <h2 className="font-bold text-[39px] leading-[45px] text-white">
              Your Favorites
            </h2>
            
          </div>
        </div>
        <div className="pt-1 lg:pt-12 px-4 lg:px-24">
          <MenuSec />
          </div>
          <Footer />
          </div>
          </>
  );
};

export default Favorites;
