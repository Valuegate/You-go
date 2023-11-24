"use client";
import Footer from "@/public/components/Footer/page";
import NavBar from "@/public/components/NavBar/page";
import Image from "next/image";
import Author from "@/public/assets/Ellipse-2402.svg";
import Link from "next/link";
import { MdOutlineLocalPostOffice } from "react-icons/md";

const Profile = () => {
  const user = {
    name: "Benjamin Achan",
    picture: Author,
    contact: "+1 234 567 890",
    email: "mybusiness@mail.com",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean scelerisque eget eros tempor consequat. Etiam non est dapibus, elementum est eu, pharetra nisi. Pellentesque eget volutpat leo, sed fringilla arcu. Etiam laoreet ipsum sit amet eros rutrum tincidunt. Mauris venenatis congue dignissim. Donec imperdiet quam in sem euismod accumsan. Aliquam consequat nunc venenatis quam rutrum semper. Donec condimentum, sem rhoncus consectetur hendrerit, sem tortor dignissim arcu, ut efficitur magna metus quis lacus. Proin dui sapien, varius at aliquet vitae, condimentum eget risus. Vivamus suscipit, purus volutpat lobortis dignissim, nisi felis faucibus eros, nec facilisis tortor massa at tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse vulputate justo eget felis tristique porta. Etiam convallis lorem vitae lorem tempus, in feugiat lectus congue. Nulla vitae turpis fermentum elit euismod mattis et a enim.",
    
  };

  return (
    <>
      <NavBar showSearch={false} />
      <div className="overflow-y-scroll h-[90vh]">
        <div className="sm:h-[100px] h-[150px] bg-lightBrownGradient relative">
          <div className="absolute -bottom-[75px] left-32">
            <Image
              src={user.picture}
              alt={""}
              className="object-cover w-[150px] h-[150px]"
            />
          </div>
        </div>
        <div className="flex flex-col mt-28 mb-24 px-10">
          <p className="font-bold text-2xl text-weirdBrown">{user.name}</p>
        </div>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Profile;
