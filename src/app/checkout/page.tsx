import CartCard from "@/public/components/CartCard/page";
import CartsCard from "@/public/components/CartsCard/page";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Link from "next/link";

const Checkout = () => {
  return (
    <>
      <NavBar btnText={"Logout"} />

      <div className="overflow-y-scroll h-[90vh]">
        <div className="px-24">
          <div className="flex items-center gap-3 mt-8">
            <Link
              href="#"
              className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"
            >
              Home &gt;
            </Link>
            <Link
              href="#"
              className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"
            >
              {" "}
              Store&nbsp;&gt;
            </Link>
            <Link
              href="#"
              className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"
            >
              {" "}
              Human Bag&nbsp;&gt;
            </Link>
            <Link
              href="#"
              className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"
            >
              {" "}
              Cart&nbsp;&gt;
            </Link>
            <Link
              href="#"
              className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]"
            >
              {" "}
              Checkout&nbsp;&gt;
            </Link>
          </div>

          <div className="flex gap-4 mt-24 mb-48">
            <div className="flex flex-col gap-3 w-[50%]">
              <div>
                <p className="font-bold text-base text-light-black-6 mb-2">
                  Delivery Information
                </p>
                <div className="w-full rounded-lg bg-primary-1">
                  <div className="px-4 py-4">
                    <div className="flex justify-between">
                      <div className="">
                        <div className="mb-2">
                          <label htmlFor="first-name" className="block">
                            Full Name:
                          </label>
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            placeholder="Full Name"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="state" className="block">
                            State:
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            placeholder="Select"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="email" className="block">
                            Email:
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="mail@email.com"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="address" className="block">
                            Address
                          </label>
                          <input
                            type="address"
                            id="address"
                            name="address"
                            placeholder="Enter your address"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="mb-2">
                          <label htmlFor="phone" className="block">
                            Mobile:
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+234"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="city" className="block">
                            City:
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Abuja"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label htmlFor="zip" className="block">
                            Zip:
                          </label>
                          <input
                            type=""
                            id="zip"
                            name="zip"
                            placeholder="123456"
                            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-base text-light-black-6 mb-2">
                  Special Delivery
                </p>
                <div className="w-full rounded-lg bg-primary-1">
                  <div className="px-4 py-4">
                    <div className="">
                      <div className="mb-2">
                        <label htmlFor="date" className="block">
                          Date:
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          placeholder="16 June, 2023 - 21 June, 2023"
                          className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                        />
                      </div>
                      <div className="mb-2">
                        <label htmlFor="note" className="block">
                          Note:
                        </label>
                        <input
                          type="text"
                          id="note"
                          name="note"
                          placeholder="Write an extra note"
                          className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-bold text-base text-light-black-6 mb-2">
                  Payment Method
                </p>
                <div className="w-full rounded-lg bg-primary-1">
                  <div className="px-4 py-4">
                    <div className="flex justify-between">
                      <div className="flex gap-2 items-center">
                        <input
                          id={"r1"}
                          type="radio"
                          value="Buyer"
                          name="default-radio"
                          className="custom w-4 h-4"
                          // checked={selectedOption === "Buyer"}
                          // onChange={handleOptionChange}
                        />
                        <label
                          className="font-medium text-[16px] leading-[32px] text-light-green-17"
                          htmlFor="r1"
                        >
                          Cash on delivery
                        </label>
                      </div>

                      <div className="flex gap-2 items-center">
                        <input
                          id={"r2"}
                          type="radio"
                          value="Buyer"
                          name="default-radio"
                          className="custom w-4 h-4"
                          // checked={selectedOption === "Buyer"}
                          // onChange={handleOptionChange}
                        />
                        <label
                          className="font-medium text-[16px] leading-[32px] text-light-green-17"
                          htmlFor="r2"
                        >
                          Online payment
                        </label>
                      </div>

                      <div className="flex gap-2 items-center">
                        <input
                          id={"r3"}
                          type="radio"
                          value="Buyer"
                          name="default-radio"
                          className="custom w-4 h-4"
                          // checked={selectedOption === "Buyer"}
                          // onChange={handleOptionChange}
                        />
                        <label
                          className="font-medium text-[16px] leading-[32px] text-light-green-17"
                          htmlFor="r3"
                        >
                          POS on delivery
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[50%]">
              <div>
                <p className="font-bold text-base text-light-black-6 mb-2">
                  Order Summary
                </p>
                <div className="w-full rounded-lg bg-primary-1">
                  <div className="px-4 py-4">
                    <CartsCard product={"Product name"} />
                    <CartsCard product={"Product name"} />
                    <CartsCard product={"Product name"} />

                    <div className="mt-12 mb-[66px]">
                      <hr className="border-none bg-light-black-1 h-[1px] w-full" />
                      <div className="px-12 w-full flex flex-row justify-between">
                        <p className="text-[18px] font-bold text-light-black-4">
                          Subtotal:
                        </p>
                        <p className="text-[1.1rem] font-bold text-light-black-9">
                          $450
                        </p>
                      </div>
                      <p className="mt-4 px-12 text-[18px] font-bold text-light-black-4">
                        Shipping:
                      </p>
                      <hr className="border-none bg-light-black-1 h-[1px] w-full" />
                      <div className="px-12 w-full flex flex-row justify-between mt-2 mb-12">
                        <p className="text-[18px] font-bold text-light-black-4">
                          Total:
                        </p>
                        <p className="text-[1.1rem] font-bold text-light-black-9">
                          $455
                        </p>
                      </div>
                      <Link href={"/orderconfirm"}>
                      <button className="bg-light-black-9 round w-full h-[40px] typo flex items-center justify-center text-white">
                        Confirm Order
                      </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>
    </>
  );
};

export default Checkout;
