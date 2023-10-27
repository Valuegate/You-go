import React from "react";
import { useSession } from "next-auth/react";
import BuyerDashBoardLayout from "@/public/components/BuyerComponents/layout";

const BuyerDashboard = () => {
  // const session = useSession();
  // console.log("SESSION", session.data?.user.email);
  return (
    <>
      {/* <BuyerDashBoardLayout /> */}
      <h1>BUYER DASHBOARD</h1>
      {/* Current Session {session.data?.user.email} */}
    </>
  );
};

export default BuyerDashboard;
