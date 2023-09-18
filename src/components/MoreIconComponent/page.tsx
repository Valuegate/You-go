"use client";
import { MoreIcon } from "@/public/icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const MoreIconComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: { target: any }) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-center" ref={dropdownRef}>
      <button
        className="flex justify-center items-center border-none rounde text-center text-base"
        onClick={handleButtonClick}
      >
        <MoreIcon
          className={`w-8 h-8 fill-current ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-[220px] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-2 px-2 text-left"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              href="#"
              className="block px-4 py-1 text-base leading-8 text-light-black-5 hover:bg-primary hover:text-white hover:rounded"
              role="menuitem"
            >
              Terminate Proposal
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoreIconComponent;
