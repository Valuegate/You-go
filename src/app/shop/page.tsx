import Footer from "@/public/components/Footer/page";
import MenuSection from "@/public/components/MenuSection/page";
import NavBar from "@/public/components/NavBar/page";

import Image from "next/image";
import Background from "@/public/assets/Trimmed Home.png";

const Shop = () => {
  return (
    <>
      <NavBar showSearch={false} />
      <div className="overflow-y-scroll h-[90vh]">
        <MenuSection />
        <Footer />
      </div>
    </>
  );
};

export default Shop;
