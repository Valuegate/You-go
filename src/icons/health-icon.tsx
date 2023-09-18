import { IconProps } from "./types";

export const HealthIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "21"}
      height={height ?? "21"}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.97493 18.8332H12.9749C17.1416 18.8332 18.8083 17.1665 18.8083 12.9998V7.99984C18.8083 3.83317 17.1416 2.1665 12.9749 2.1665H7.97493C3.80827 2.1665 2.1416 3.83317 2.1416 7.99984V12.9998C2.1416 17.1665 3.80827 18.8332 7.97493 18.8332Z"
        stroke={color ?? "#292D32"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.1416 11.0836L7.1416 11.0669C7.7666 11.0669 8.4666 11.5419 8.69993 12.1253L9.64993 14.5253C9.8666 15.0669 10.2083 15.0669 10.4249 14.5253L12.3333 9.68359C12.5166 9.21692 12.8583 9.20025 13.0916 9.64192L13.9583 11.2836C14.2166 11.7753 14.8833 12.1753 15.4333 12.1753H18.8166"
        stroke={color ?? "#292D32"}
        stroke-width="1.25"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
