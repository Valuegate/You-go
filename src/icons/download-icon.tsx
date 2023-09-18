import { IconProps } from "./types";

export const DownloadIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "19"}
      height={height ?? "20"}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 2.08325V6.83325L11.0833 5.24992"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.50008 6.83333L7.91675 5.25"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.54167 10C2.375 10 2.375 11.4171 2.375 13.1667V13.9583C2.375 16.1433 2.375 17.9167 6.33333 17.9167H12.6667C15.8333 17.9167 16.625 16.1433 16.625 13.9583V13.1667C16.625 11.4171 16.625 10 13.4583 10C12.6667 10 12.445 10.1663 12.0333 10.475L11.2258 11.33C10.2917 12.3275 8.70833 12.3275 7.76625 11.33L6.96667 10.475C6.555 10.1663 6.33333 10 5.54167 10Z"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.95825 9.99991V6.83324C3.95825 5.24199 3.95825 3.92783 6.33325 3.69824"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.0417 9.99991V6.83324C15.0417 5.24199 15.0417 3.92783 12.6667 3.69824"
        stroke={color ?? "#2C4C3B"}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
