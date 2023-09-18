"use client"
import { EyeSlashIcon } from "@/public/icons";
import { useState } from "react";
import { ReactNode, FC } from "react";

interface iPasswordInput {
    label: ReactNode;
  }

const PasswordInput: FC<iPasswordInput> = ({ label }) => {

    const [showPassword, setShowPassword] = useState(false);

    return ( 
        <>
        <label className="block" htmlFor="password">
          {label}
        </label>
        <div className="relative">
        <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Enter password"
            className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full"
          />
          <button
            className="absolute inset-y-0 right-2 flex items-center px-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <span className="w-6 h-6">&#128065;</span> // Unicode for open eye
            ) : (
              <span><EyeSlashIcon/></span> // Unicode for closed eye
            )}
          </button>

        </div>
        </>
     );
}
 
export default PasswordInput;