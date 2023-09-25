import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";

const HomePage = () => {
  return (
    <>
      <NavBar btnText={"Login"} />
      <div className="mt-32">Home Page</div>
      <Footer />
    </>
  );
};

export default HomePage;
