import Image from "next/image";
import card from "@/public/assets/_235782456.png";
import Paypal from "@/public/assets/Group (2).png"

const PaymentCard = () => {
  return (
    <>
      <div className="mb-4">
        <div className="flex flex-col gap-4">
        <div className="w-full bg-white p-3 flex justify-between items-center rounded-2xl border-none box-shadow">
          <label htmlFor="r1" className="flex text-primary gap-4 items-center justify-center">
            <Image src={card} alt="Product" className="" />
            <p>**** **** **** ****</p>
            <p>7654</p>
            <input
              id={"r1"}
              type="radio"
              name="default-radio"
              className="customs w-4 h-4"
            />
          </label>
          </div>
          <div className="w-full bg-white p-3 flex justify-between items-center rounded-2xl border-none box-shadow">
          <label htmlFor="r2" className="flex text-primary gap-4 items-center justify-center">
            <Image src={card} alt="Product" className="" />
            <p>**** **** **** ****</p>
            <p>7654</p>
            <input
              id={"r2"}
              type="radio"
              name="default-radio"
              className="customs w-4 h-4"
            />
          </label>
          </div>
          <div className="w-full bg-white p-3 flex justify-between items-center rounded-2xl border-none box-shadow">
          <label htmlFor="r3" className="flex justify-between items-center w-full">
            <div className="flex gap-4">
            <Image src={Paypal} alt="Product" className="" />
            <p className="text-primary font-bold text-base">PayPal</p>
            </div>
            <div>
            <input
              id={"r3"}
              type="radio"
              name="default-radio"
              className="customs w-4 h-4"
            />
            </div>
          </label>
        </div>
        </div>
      </div>
    </>
  );
};

export default PaymentCard;
