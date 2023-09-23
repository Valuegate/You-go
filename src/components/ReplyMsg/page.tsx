import Avatar from "@/public/assets/Ellipse 2377.png";
import Image from "next/image";

const ReplyMsg = () => {
    return (
        <>
        <div className="">
        <div className="flex gap-4">

            <div className="bg-white-3 text-light-black-5 px-4 py-4 rounded-b-2xl rounded-tl-2xl">
                <p className="text-sm font-normal">I am yet to get my order delivered, how are we going to proceed? Because I need this order now.</p>
            </div>
            <div className="">
            <Image src={Avatar} alt={""}/>
            </div>
        </div>
        <p className="text-light-black-6 font-normal text-sm">7:38 AM</p>
        </div>
        </>
    );
};

export default ReplyMsg;