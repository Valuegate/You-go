import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";

const Profile = () => {
    return (
        <>
        <NavBar btnText={"logout"} />
        <div className="overflow-y-scroll h-[88vh]">
        <div className="h-[100px] md:h-[260px] bg-profile-image">
        </div>
        <div className="px-48">
            <div className="flex justify-between">
                <div className="w-[60%] pt-10">
                    <div className="flex justify-between mb-20">
                        <div>
                        <h2 className="text-primary text-xl font-semibold">3 years plus</h2>
                        <p className="text-light-black-3 font-medium text-base">Registered</p>
                        </div>
                        <div>
                        <h2 className="text-primary text-xl font-semibold">38 +</h2>
                        <p className="text-light-black-3 font-medium text-base">Purchases</p>
                        </div>
                        <div>
                        <h2 className="text-primary text-xl font-semibold">$5,678</h2>
                        <p className="text-light-black-3 font-medium text-base">Spent</p>
                        </div>
                    </div>

                    <div>
                    <h2 className="text-primary text-2xl font-bold">Benjamin</h2>
                    <p className="text-light-black-5 font-semibold text-base mb-4">Abuja, Nigeria</p>
                    <p className="text-light-black-5 font-normal text-sm">Brief profileBrief profileBrief profileBrief profile Brief profileBrief profile Brief profileBrief profile Brief profileBrief profile  Brief profileBrief profile Brief profileBrief profileBrief profileBrief profile</p>
                    </div>
                </div>
                <div className="w-[40%]"></div>
            </div>
        </div>
        

        <Footer />
        </div>
        
        </>
    );
  };
  
  export default Profile;