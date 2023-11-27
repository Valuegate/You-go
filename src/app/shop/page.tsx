import Footer from "@/public/components/Footer/page";
import MenuSection from "@/public/components/MenuSection/page";
import NavBar from "@/public/components/NavBar/page";
import SearchContainer from "@/public/components/SearchContainer/page";

const Shop = () => {
  return (
    <>
      <NavBar />
      <div className="overflow-y-scroll h-[90vh]">
      <div className="">
        
        <SearchContainer />
        <div className="sm:pt-1 pt-12 sm:px-4 px-24">
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
