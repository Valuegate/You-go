import Image from "next/image";
import Avatar from "@/public/assets/Ellipse2388.png"
import Star from "@/public/assets/stars.png"

const ReviewCard = () => {
    return (
        <>
        <div className="bg-gradient-to-r from-primary-1 to-primary rounded-lg px-2 py-2 w-full md:w-[370px]">
            <div className="flex justify-center">
                <Image src={Avatar} alt={""} />
            </div>
            <p className="text-center text-white text-sm font-normal mb-2">Customer testimonials Customer testimonials Customer testimonialsCustomer testimonials Customer testimonials Customer testimonials Customer testimonials Customer testimonials Cus Customer testimonials</p>
            <div className="flex justify-center mb-2">
                <Image src={Star} alt={""} />
            </div>
            <div className="flex text-center flex-col gap-2">
                <h2 className="font-bold text-base text-white">Customer Name</h2>
                <p className="font-normal text-sm text-white">Customer Portfolio</p>
            </div>
        </div>
        </>
    );
};

export default ReviewCard;