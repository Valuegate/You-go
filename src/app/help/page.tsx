import NavBar from "@/public/components/NavBar/page";
import { MessageIcon, SearchIcon } from "@/public/icons";
import ProcessCard from "@/public/components/ProcessCard/page";
import HelpCard from "@/public/components/HelpCard/page";
import { BiPhoneCall } from "react-icons/bi";
import { MdCall, MdInbox, MdOutlineLocalPostOffice } from "react-icons/md";
import Footer from "@/public/components/Footer/page";

const HelpCenter = () => {
  const helpcenter = [
    {
      title: "Question 1",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
    {
      title: "Question 2",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
    {
      title: "Question 3",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
    {
      title: "Question 4",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
    {
      title: "Question 5",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
    {
      title: "Question 6",
      content:
        "Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer    ",
    },
  ];
  
  return (
    <>
      <NavBar btnText={"Logout"} />
      <div className="overflow-y-scroll h-[88vh]">
        <div className="flex bg-white pl-24 pb-40">
          <div className="w-64 h-[748px] bg-light-black-5 rounded-lg ">
            <div className="mt-32 round">
              <div className="px-6">
                <div className="relative flex items-center">
                  <span className="absolute left-4">
                    <SearchIcon />
                  </span>
                  <input
                    type="text"
                    placeholder="Search"
                    className="search w-full py-2 pl-10 pr-4 border-none bg-white-1 rounded focus:ring-none focus:border-none"
                  />
                </div>
                <div className="flex flex-col gap-8 mt-8">
                  <div className="text-white">
                    <h2 className="text-base font-semibold mb-2">Topic</h2>
                    <div className="ml-4 flex flex-col gap-2">
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                    </div>
                  </div>

                  <div className="text-white">
                    <h2 className="text-base font-semibold mb-2">Topic</h2>
                    <div className="ml-4 flex flex-col gap-2">
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                      <p className="font-normal text-base">Sub topic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bg-help-image">
              <div className="flex justify-center py-20">
                <h2 className="text-2xl font-semibold text-white">
                Find Help Here
                </h2>
              </div>
            </div>

            <div className="pl-4 mt-4 pr-24">
              <h2 className="text-primary font-bold text-lg mb-4 flex justify-center">Process</h2>
              <div className="flex flex-col gap-6">
              <div className="flex justify-between">
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
              </div>
              <div className="flex justify-between">
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
              </div>
              <div className="flex justify-between">
                <ProcessCard />
                <ProcessCard />
                <ProcessCard />
              </div>
              </div>

              <div className="mt-32">
                <h2 className="font-bold text-2xl mb-2">FAQ</h2>
                <div>
                <div className="flex flex-col gap-1">
          {helpcenter.map((helpcenter, i) => {
              return (
                <HelpCard
                  key={i}
                  content={helpcenter.content}
                  title={helpcenter.title}
                />
              );
            })}
          </div>
                </div>
              </div>
              <div className="mt-32">
              <h2 className="font-bold text-2xl mb-2">FAQ</h2>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <span><MdOutlineLocalPostOffice className="text-primary w-[23px] h-[23px] cursor-pointer"/></span>
                  <p>website@mai.com</p>
                </div>
                <div className="flex gap-4 items-center">
                  {/* <span><BiPhoneCall className="text-primary" /></span> */}
                  <MdCall className="text-primary w-[23px] h-[23px] cursor-pointer" />
                  <p>+123 456 789</p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HelpCenter;
