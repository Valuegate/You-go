import React from "react";
import { useSession } from "next-auth/react";
import BuyerDashBoardLayout from "@/public/components/BuyerComponents/layout";

const BuyerDashboard = () => {
  return (
    <>
      <BuyerDashBoardLayout />
    </>
  );
};

export default BuyerDashboard;
