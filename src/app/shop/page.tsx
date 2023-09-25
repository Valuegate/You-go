import Footer from "@/public/components/Footer/page";
import MenuSection from "@/public/components/MenuSection/page";
import NavBar from "@/public/components/NavBar/page";
import SearchContainer from "@/public/components/SearchContainer/page";

const Shop = () => {
  return (
    <>
      <NavBar btnText={"Login"} />
      <div className="">
        {/* overflow-y-scroll h-[90vh] */}
        <SearchContainer />
        <div className="pt-12 px-24">
          <MenuSection />
        </div>
      </div>
      <div className="mt-[10%]"/>
      <Footer />
    </>
  );
};

export default Shop;
