import Footer from "@/public/components/Footer/page";
import MenuSection from "@/public/components/MenuSection/page";
import NavBar from "@/public/components/NavBar/page";
import SearchContainer from "@/public/components/SearchContainer/page";

const Shop = () => {
  return (
    <>
      <NavBar btnText={"Login"} />
      <div className="overflow-y-scroll h-[88vh]">
      <div className="">
        
        <SearchContainer />
        <div className="pt-1 lg:pt-12 px-4 lg:px-24">
          <MenuSection />
        </div>
      </div>
      <div className="mt-[10%]"/>
      <Footer />
      </div>
    </>
  );
};

export default Shop;
