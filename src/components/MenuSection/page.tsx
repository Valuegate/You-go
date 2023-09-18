import Image from "next/image";
import Sidebar from "../SideBar/page";
import img1 from "@/public/assets/glasses.png";
import img2 from "@/public/assets/arrow-left.png";
import img3 from "@/public/assets/carrow-left.png";
import shoe1 from "@/public/assets/shoe1.png";
import shoe2 from "@/public/assets/shoe2.png";
import lip from "@/public/assets/lipstick.png";
import headset from "@/public/assets/earphones.png";
import car from "@/public/assets/car.png";
import watch from "@/public/assets/watch.png";
import shaving from "@/public/assets/shaving.png";
import larrow from "@/public/assets/larrow-right.png";
import ItemsCard from "../ItemsCard/page";

// const recommendation = [
//     {
//       id: 1,
//       src: '/assets/shoe3.png',
//       product: 'Product 1',
//       rating: 4.5,
//       amount: 29.99,
//     },
//     {
//       id: 2,
//       src: '/assets/watch2.png',
//       product: 'Product 2',
//       rating: 4.0,
//       amount: 19.99,
//     },
//     {
//         id: 3,
//         src: '/assets/cup.png',
//         product: 'Product 2',
//         rating: 4.0,
//         amount: 19.99,
//       },
//   ];

const MenuSection = () => {
  return (
    <>
      <div className="flex gap-6">
        <div>
          <Sidebar />
        </div>

        <div>
          <div className="hidden md:block w-full">
            <Image src={img1} alt="Image 1" className="h-[222px]" />
          </div>
          <div className="">
            <div className="w-full flex justify-between items-center">
              <p className="font-bold text-lg text-gray-600">Categories</p>
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

            <div className="flex gap-4 pt-4">
              <Image src={shoe1} alt={""} />
              <Image src={shoe2} alt={""} />
              <Image src={lip} alt={""} />
              <Image src={headset} alt={""} />
              <Image src={car} alt={""} />
              <Image src={watch} alt={""} />
              <Image src={shaving} alt={""} />
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="w-full flex justify-between items-center">
              <p className="font-bold text-lg text-gray-600">Recommendations</p>
              <div className="flex">
                <a href="/recomendations" className="flex items-center">
                  <p className="whitespace-nowrap">View all</p>
                  <Image
                    className="mr-2 mt-1 w-4 h-4"
                    src={larrow}
                    alt="Left Arrow"
                  />
                </a>
              </div>
            </div>
            <div className="w-full flex justify-between gap-4">
              <ItemsCard src="/assets/shoe3.png" product={"Human Bag"} rating={"(2630)"} amount={5000} width={300} height={300} />
              <ItemsCard src="/assets/watch2.png" product={"Human Bag"} rating={"(2630)"} amount={5000} width={300} height={300} />
              <ItemsCard src="/assets/cup.png" product={"Human Bag"} rating={"(2630)"} amount={5000} width={300} height={300} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSection;
