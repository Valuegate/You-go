import AddItem from "@/public/components/AddItem";
import NavBar from "@/public/components/NavBar/page";
import Link from "next/link";

const WhySell = () => {
  return (
    <>
      <NavBar />
      <div className="mt-20 sm:px-4 flex flex-col items-center">
        <h2 className="text-primary text-lg font-bold">
          Why You Should Sell on YouGo
        </h2>
        <div className="mt-3 flex flex-col justify-center">
          <h5 className="text-light-black-10 text-base font-medium">
            YouGo offers:
          </h5>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">
            A large and active community: Reach buyers who appreciate
            handcrafted goods like yours.
          </li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">
            Specialized category: Stand out from the crowd with dedicated
            exposure for handmade clothing.
          </li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">Low fees: Keep more of your profits and grow your business</li>
          <li className="decoration-dotted text-light-black-7 text-sm font-normal">Easy to use: List your items and manage your shop with ease.</li>
          <h5 className="text-light-black-10 text-base font-medium">
            Ready to start selling?{" "}
            {/* <Link href="./" className="text-primary">Sign up today!</Link>{" "} */}
          </h5>
        </div>

        <div className="mt-6">
            <AddItem addText="Sell on YouGo" />
        </div>
      </div>
    </>
  );
};

export default WhySell;
