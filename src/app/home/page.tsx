import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import FlexImg from "@/public/assets/Frame 36180.png";
import { HiShoppingCart } from "react-icons/hi";
import Lady from "@/public/assets/Rectangle 125.png";
import Saving from "@/public/assets/Frame 36172.png";
import Cart from "@/public/assets/Frame 36172 (1).png";
import Car from "@/public/assets/Frame 36173.png";
import User from "@/public/assets/Frame 36172 (2).png";
import img2 from "@/public/assets/arrow-left.png";
import img3 from "@/public/assets/carrow-left.png";
import ItemsCard from "@/public/components/ItemsCard/page";
import Lady2 from "@/public/assets/Rectangle 1266.png"
import Lady3 from "@/public/assets/Rectangle 126.png"
import Link from "next/link";


const HomePage = () => {
  return (
    <>
    <Link href={"/signupselect"}>
      <NavBar btnText={"Login"} />
      </Link>
      <div className="overflow-y-scroll h-screen md:h-[88vh]">
        <div className="px-6 md:px-24">
          <div className="flex mt-16">
            <div className="flex-1">
              <div className="mt-8">
                <p className="text-base text-primary font-normal mb-2">
                  WELCOME TO SHOPPING MODE!
                </p>
                <h1 className="text-[50px] leading-[62px] text-black font-extrabold w-[95%]">
                  Join the Shopping{" "}
                  <span className="text-primary">Revolution</span> with YouGo
                </h1>
                <p className="text-base text-light-black-3 font-normal mt-4">
                  Embrace a new era of shopping convenience and savings by
                  joining YouGo, your ultimate shopping companion.
                </p>
                <div className="mt-6">
                  <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[160px] h-10 text-white">
                    <HiShoppingCart className="text-white w-[19px] h-[19px]" />
                    Shop Now!
                  </button>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <Image src={FlexImg} alt={""} />
            </div>
          </div>

          <div className="flex justify-center items-center flex-col mt-20">
            <p className="text-sm text-primary font-semibold mb-2">WHY US?</p>
            <h2 className="text-[30px] leading-[60px] text-black font-bold">
              Quality & Style
            </h2>
            <p className="text-base text-light-black-3 font-normal mt-2 w-[49%] text-center">
              At YouGo, we believe that fashion should never compromise on
              quality. That's why our products are built to last
            </p>
          </div>

          <div className="flex gap-12 mt-8">
            <div className="w-[30%]">
              <Image src={Lady} alt={""} />
            </div>
            <div className="w-[70%]">
              <div className="flex justify-between">
                <div className="shadow-2xl h-[230px] md:h-[230px] w-[360px] rounded-xl">
                  <div className="mt-6 ml-8">
                    <Image src={Saving} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Money Saving
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-[90%]">
                      Shop smart at YouGo and discover our budget-friendly
                      collection that doesn't compromise on quality.
                    </p>
                  </div>
                </div>
                <div className="shadow-2xl h-[230px] md:h-[230px] w-[360px] rounded-xl">
                  <div className="mt-6 ml-8">
                    <Image src={Cart} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Secure Shopping
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-[90%]">
                      Shop confidently knowing that your shopping information is
                      protected.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-[62px]">
                <div className="shadow-2xl h-[230px] md:h-[230px] w-[360px] rounded-xl">
                  <div className="mt-6 ml-8">
                    <Image src={Car} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      Fast Delivery
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-[90%]">
                      Our streamlined order processing and fulfillment system
                      speed up the delivery of your favorite products.
                    </p>
                  </div>
                </div>
                <div className="shadow-2xl h-[230px] md:h-[230px] w-[360px] rounded-xl">
                  <div className="mt-6 ml-8">
                    <Image src={User} alt={""} />
                    <h2 className="text-xl mt-2 font-semibold text-light-black-7">
                      User Friendly
                    </h2>
                    <p className="text-sm text-light-black-4 font-normal mt-4 w-[90%]">
                      Our easy-to-navigate website ensures that finding your
                      favorite products and making purchases is a breeze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base text-primary font-normal mb-2">
                  EXPLORE MORE
                </p>
                <h1 className="text-[30px] leading-[42px] text-black font-bold">
                  Explore Our Products
                </h1>
                <p className="text-sm text-light-black-4 font-normal mt-1 w-[80%]">
                  Shop at YouGo for styles that not only look good but also make
                  you feel confident and stylish every day.
                </p>
              </div>

              <div>
                <div className="flex gap-3">
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
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-between gap-6 mt-6">
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
                className={"shadow-2xl"}
              />
              <ItemsCard
                src="/assets/watch2.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
                className={"shadow-2xl"}
              />
              <ItemsCard
                src="/assets/cup.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
                className={"shadow-2xl"}
              />
              <ItemsCard
                src="/assets/shoe3.png"
                product={"Human Bag"}
                rating={"(2630)"}
                amount={5000}
                width={300}
                height={300}
                className={"shadow-2xl"}
              />
            </div>

            <div className="mt-10 flex justify-center">
              <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[140px] h-10 text-white">
                Go to Shop
              </button>
            </div>

            <div className="flex gap-12 mt-32 mb-24">
              <div>
                <Image src={Lady2} alt={""} />
              </div>
              <div className="mt-28">
              <p className="text-sm text-primary font-normal mb-2">
              WELCOME TO SHOPPING MODE!
                </p>
                <h1 className="text-[25px] leading-[42px] text-black font-bold">
                Ready to Shop?
                </h1>
                <p className="text-sm text-light-black-4 font-normal mt-3">
                Explore an array of styles that cater to diverse tastes, so you can express your unique fashion sense.
                </p>
                <div className="mt-6">
                  <button className="bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[160px] h-10 text-white">
                    <HiShoppingCart className="text-white w-[19px] h-[19px]" />
                    Shop Now!
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-12 mb-24">
              <div className="flex-1 mt-24">
              <p className="text-sm text-primary font-normal mb-2">
              TESTIMONIAL
                </p>
                <h1 className="text-[25px] leading-[42px] text-black font-bold">
                Hear What our Customers say Yes
                </h1>
                <p className="text-sm text-light-black-4 font-normal mt-3">
                “I've been shopping with YouGo for over a year now, and I must say it's been a fantastic experience. The quality of the products is top-notch, and they offer a wide range of styles that cater to my diverse fashion preferences. What truly sets YouGo apart is their commitment to customer satisfaction. Quick delivery, a secure shopping environment, and an easy-to-use website make my shopping experience a delight. YouGo has become my go-to online store for style, savings, and reliability. Highly recommended!"
                </p>
              </div>
              <div className="flex-1">
                <Image src={Lady3} alt={""} />
              </div>
            </div>

            <div className="bg-primary rounded-xl">
              <div className="py-20 pl-16">
                <h2 className="text-[25px] leading-[40px] text-white font-semibold">Patronise Our Products</h2>
                <p className="text-sm text-white-1 font-normal mt-3 w-[50%]">From classic elegance to bold and trendy, YouGo has a style for every fashion-forward individual.</p>
                <Link href={""}>
                <div className="mt-6">
                  <button className="shadow-2xl bg-gradient-to-r flex justify-center items-center gap-2 font-bold from-primary-1 to-primary round w-[160px] h-10 text-white">
                  Get Started Now
                  </button>
                </div>
                </Link>
              </div>
            </div>

            <div className="mt-[10%]"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
