import React from "react";
// import { Link } from "react-router-dom";
import { ArrowBackIcon } from "@/public/icons";
import Link from "next/link";


interface BackButtonProps {
    to: string;
  }

const BackButton: React.FC<BackButtonProps> = ({ to }) => {

  return (
    <>
    <Link
      href={to}
      className=""
      onClick={() => window.history.back()}
    >
      <div className="hover:w-16">
        <ArrowBackIcon className="text-red-500 w-50 hover:w-60 h-30" />
      </div>
    </Link>

    </>
  );
};

export default BackButton;