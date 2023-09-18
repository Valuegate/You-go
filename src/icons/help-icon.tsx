import { IconProps } from "./types";

export const HelpIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9998 11.36V11.15C11.9998 10.47 12.4198 10.11 12.8398 9.82001C13.2498 9.54001 13.6598 9.18002 13.6598 8.52002C13.6598 7.60002 12.9198 6.85999 11.9998 6.85999C11.0798 6.85999 10.3398 7.60002 10.3398 8.52002"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9955 13.75H12.0045"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
