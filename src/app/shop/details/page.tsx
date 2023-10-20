"use client"
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Link from "next/link";
import Bag from "@/public/assets/Rectangle10.png";
import star from "@/public/assets/stars.png";
import { useState } from "react";
import Bags from "@/public/assets/Rectangle11.png";
import ItemsCard from "@/public/components/ItemsCard/page";
import img2 from "@/public/assets/arrow-left.png";
import img3 from "@/public/assets/carrow-left.png";
import Footer from "@/public/components/Footer/page";

const ShopDetails = () => {
  const [clickedSize, setClickedSize] = useState<number | null>(null);

  const handleSizeClick = (size: number) => {
    setClickedSize(size);
  };

  const getSizeClass = (size: number) => {
    return clickedSize === size ? "text-black bg-primary-1" : "text-white bg-primary";
  };

  const [num, setNum] = useState(1);

  return (
    <>
      <NavBar btnText={"Logout"} />

      <div className="overflow-y-scroll h-screen md:h-[87vh]">
        <div className="px-6 md:px-24">
          <div className="flex flex-col md:flex-row items-center md:gap-3 mt-8">
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]">
              Home &gt;
            </Link>
            <Link href="#" className="text-white bg-primary round p-2 font-medium text-[15px] leading-[15px]">
              Store &gt;
            </Link>
            <Link href="#" className="text-black bg-primary round p-2 font-medium text-[15px] leading-[15px]">
              Human Bag &gt;
            </Link>
          </div>
          <div className="mt-8 flex flex-col md:flex-row md:gap-10">
            <div className="w-full md:w-1/2">
              <div>
                <Image src={Bag} alt={""} />
              </div>
              <div className="flex justify-between mt-8">
                <Image src={Bags} alt={""} />
                <Image src={Bags} alt={""} />
                <Image src={Bags} alt={""} />
                <Image src={Bags} alt={""} className="hidden md:block" />
                <Image src={Bags} alt={""} className="hidden md:block" />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-xl text-light-black-4 font-bold">Human Bag</h2>
              <div className="flex gap-8 mt-4">
                <h3 className="text-primary font-bold text-base">
                  Category: <span className="text-light-black-5"> Bags</span>
                </h3>
                <div className="flex gap-2 items-center">
                  <div>
                    <Image src={star} alt="Star" />
                  </div>
                  <span className="text-sm font-bold text-light-black-4">5.0 (213 reviews)</span>
                </div>
              </div>
              <h2 className="text-xl text-light-black-4 font-bold mt-6">Description</h2>
              <p className="text-md text-light-black-4 font-normal mt-4">
                Product description Product description Product description Product description Product description Product
                description Product description Product description Product description Product description
              </p>
              <p className="text-md text-light-black-4 font-normal mt-4">
                Product description Product description Product description Product description Product description Product
                description Product description Product description Product description Product description
              </p>

              <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
                <div>
                  <h2 className="font-bold text-sm text-light-black-5">Size:</h2>
                </div>
                <div className="flex gap-[3px]">
                  {["small", "Medium", "Large", "Extra Large"].map((size, index) => (
                    <span
                      key={index}
                      className={`w-[${index === 3 ? "100px" : "80px"}] h-[40px] text-base font-medium flex justify-center items-center cursor-pointer ${getSizeClass(
                        index
                      )}`}
                      onClick={() => handleSizeClick(index)}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <div>
                  <h2 className="font-bold text-sm text-light-black-5">Color:</h2>
                </div>
                <div className="flex gap-[5px]">
                  <span className="w-8 h-8 bg-[#2acb74] rounded-full cursor-pointer"></span>
                  <span className="w-8 h-8 bg-[#aee832] rounded-full cursor-pointer"></span>
                  <span className="w-8 h-8 bg-[#f37705] rounded-full cursor-pointer"></span>
                  <span className="w-8 h-8 bg-[#1abadd] rounded-full cursor-pointer"></span>
                  <span className="w-8 h-8 bg-[#9c3efa] rounded-full cursor-pointer"></span>
                </div>
              </div>

              <div className="flex items-center gap-3 md:gap-6 mt-8">
                <div>
                  <h2 className="font-bold text-sm text-light-black-5">Qty:</h2>
                </div>
                <div className="flex gap-6 md:gap-20">
                  <div className="flex items-center gap-4">
                    <button
                      className="flex items-center justify-center w-5 h-5 rounded border border-black text-black font-bold cursor-pointer"
                      onClick={() => setNum(num - 1)}
                    >
                      -
                    </button>
                    <p className="w-8 h-8 rounded border-[2px] border-[#e7e7e7] font-bold justify-center flex items-center">
                      {num}
                    </p>
                    <button
                      className="flex items-center justify-center w-5 h-5 rounded border border-black text-black font-bold cursor-pointer"
                      onClick={() => setNum(num + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div>
                    <Link href={"/cart"}>
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-primary-1 to-primary round w-[180px] h-12 text-white text-base font-bold"
                      >
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 px-4 md:px-24">
          <div className="flex">
            <button className="w-1/2 md:w-48 h-12 flex justify-center items-center text-sm text-white font-bold bg-primary">Production Description</button>
            <button className="w-1/2 md:w-48 h-12 flex justify-center items-center text-sm text-black font-bold bg-white-3">Reviews</button>
          </div>
        </div>
        <hr className="border-white-3 h-1" />
        <div className="mt-8 md:w-1/2  px-4 md:pl-24">
          <p className="font-medium text-base text-light-black-5">Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description.</p>
          <p className="font-medium text-base text-light-black-5 mt-6">Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description.</p>
          <p className="font-medium text-base text-light-black-5 mt-6">Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description Product description.</p>
        </div>
        <div className="mt-16">
          <hr className="border-white-3 h-1" />
        </div>
        <div className="mt-8 mb-32 px-4 md:px-24">
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg text-light-black-5">Recently Viewed</p>
            <div className="flex">
              <Image
                src={img2}
                alt="Previous Slide"
                className="cursor-pointer"
                //   onClick={prevSlide}
              />
              <Image
                src={img3}
                alt="Next Slide"
                className="cursor-pointer"
                //   onClick={nextSlide}
              />
            </div>
          </div>
          <div className="w-full flex flex-wrap gap-6 pl-6 md:pl-0 mt-4">
            <ItemsCard
              src="/assets/cup.png"
              product={"Human Bag"}
              rating={"(2630)"}
              amount={5000}
              width={300}
              height={300} className={""}            />
            <ItemsCard
              src="/assets/watch2.png"
              product={"Human Bag"}
              rating={"(2630)"}
              amount={5000}
              width={300}
              height={300} className={""}            />
            <ItemsCard
              src="/assets/shoe3.png"
              product={"Human Bag"}
              rating={"(2630)"}
              amount={5000}
              width={300}
              height={300} className={""}            />
            <ItemsCard
              src="/assets/shoe3.png"
              product={"Human Bag"}
              rating={"(2630)"}
              amount={5000}
              width={300}
              height={300} className={""}            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ShopDetails;