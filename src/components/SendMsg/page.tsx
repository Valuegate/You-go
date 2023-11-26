import Avatar from "@/public/assets/Ellipse2367.png";
import Image from "next/image";

const SendMsg = () => {
  return (
    <div className="flex gap-4 w-full">
      <div className="">
        <Image
          src={Avatar}
          alt={""}
          className="h-[35px] w-[35px] rounded-full"
        />
      </div>

      <div className="bg-white text-light-black-5 px-4 py-4 rounded-b-2xl rounded-tr-2xl relative">
        <p className="text-sm font-normal mb-2">
          I am yet to get my order delivered, how are we going to proceed?
          Because I need this order now.
        </p>

        <p className="text-light-black-6 font-normal text-[12px] float-right absolute bottom-1 right-4">
          7:38 AM
        </p>
      </div>
    </div>
  );
};

export default SendMsg;
