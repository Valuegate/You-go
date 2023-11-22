import Avatar from "@/public/assets/Ellipse2367.png";
import Image from "next/image";

const ReplyMsg = () => {
  return (
    <div className="flex gap-4 w-full justify-end">
      <div className="bg-weirdBrown text-white px-4 py-4 rounded-b-2xl rounded-tl-2xl relative">
        <p className="text-sm font-normal mb-2">
          I am yet to get my order delivered, how are we going to proceed?
          Because I need this order now.
        </p>

        <p className="text-white font-normal text-[12px] float-right absolute bottom-1 left-4">
          7:38 AM
        </p>
      </div>

      <div className="">
        <Image
          src={Avatar}
          alt={""}
          className="h-[35px] w-[35px] rounded-full"
        />
      </div>
    </div>
  );
};

export default ReplyMsg;
