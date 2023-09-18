import { IconProps } from "./types";

export const MaximizeIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "24"}
      height={height ?? "24"}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 9.98V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H10"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 11L5.99 5.97998H10"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.99023 5.97998V9.98998"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 16.15V18.85C13 21.1 13.9 22 16.15 22H18.85C21.1 22 22 21.1 22 18.85V16.15C22 13.9 21.1 13 18.85 13H16.15C13.9 13 13 13.9 13 16.15Z"
        stroke={color ?? "white"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

