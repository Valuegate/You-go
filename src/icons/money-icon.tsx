import { IconProps } from "./types";

export const MoneyIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "19"}
      height={height ?? "20"}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.2791 6.76993V10.847C15.2791 13.2854 13.8858 14.3303 11.7958 14.3303H4.83703C4.48078 14.3303 4.14036 14.2987 3.82369 14.2275C3.62578 14.1958 3.43579 14.1404 3.26162 14.077C2.07412 13.6337 1.3537 12.6045 1.3537 10.847V6.76993C1.3537 4.33159 2.74703 3.28662 4.83703 3.28662H11.7958C13.5691 3.28662 14.8437 4.0387 15.1841 5.75662C15.2395 6.07328 15.2791 6.39784 15.2791 6.76993Z"
        stroke={color ?? "white"}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.655 9.14514V13.2222C17.655 15.6606 16.2617 16.7056 14.1717 16.7056H7.21292C6.62708 16.7056 6.09668 16.6264 5.63751 16.4523C4.69543 16.1039 4.05417 15.3835 3.82458 14.2277C4.14125 14.2989 4.48167 14.3306 4.83792 14.3306H11.7967C13.8867 14.3306 15.28 13.2856 15.28 10.8472V6.77014C15.28 6.39806 15.2483 6.06559 15.185 5.75684C16.6892 6.0735 17.655 7.13431 17.655 9.14514Z"
        stroke={color ?? "white"}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.31126 10.9022C9.46554 10.9022 10.4013 9.96645 10.4013 8.81218C10.4013 7.6579 9.46554 6.72217 8.31126 6.72217C7.15699 6.72217 6.22125 7.6579 6.22125 8.81218C6.22125 9.96645 7.15699 10.9022 8.31126 10.9022Z"
        stroke={color ?? "white"}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.78412 7.0708V10.5542"
        stroke={color ?? "white"}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.8422 7.07129V10.5546"
        stroke={color ?? "white"}
        stroke-width="1.2"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
