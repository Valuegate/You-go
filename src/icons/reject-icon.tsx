import { IconProps } from "./types";

export const RejectIcon = ({ color, width, height }: IconProps) => {
  return (
    <svg
      width={width ?? "22"}
      height={height ?? "22"}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.7349 21.9355C5.00736 21.9355 0.377686 17.1713 0.377686 11.2774C0.377686 5.38339 5.00736 0.619181 10.7349 0.619181C16.4624 0.619181 21.0921 5.38339 21.0921 11.2774C21.0921 17.1713 16.4624 21.9355 10.7349 21.9355ZM15.1885 6.69435C15.0927 6.59554 14.9789 6.51715 14.8536 6.46367C14.7283 6.41018 14.594 6.38265 14.4583 6.38265C14.3227 6.38265 14.1883 6.41018 14.0631 6.46367C13.9378 6.51715 13.8239 6.59554 13.7281 6.69435L10.7349 9.77456L7.74166 6.69435C7.548 6.49506 7.28535 6.3831 7.01148 6.3831C6.7376 6.3831 6.47495 6.49506 6.28129 6.69435C6.08764 6.89363 5.97884 7.16392 5.97884 7.44575C5.97884 7.58529 6.00555 7.72348 6.05745 7.8524C6.10934 7.98133 6.1854 8.09847 6.28129 8.19715L9.27453 11.2774L6.28129 14.3576C6.08764 14.5569 5.97884 14.8272 5.97884 15.109C5.97884 15.3908 6.08764 15.6611 6.28129 15.8604C6.47495 16.0597 6.7376 16.1716 7.01148 16.1716C7.28535 16.1716 7.548 16.0597 7.74166 15.8604L10.7349 12.7802L13.7281 15.8604C13.824 15.9591 13.9378 16.0373 14.0631 16.0907C14.1884 16.1441 14.3227 16.1716 14.4583 16.1716C14.5939 16.1716 14.7282 16.1441 14.8535 16.0907C14.9788 16.0373 15.0926 15.9591 15.1885 15.8604C15.2844 15.7617 15.3604 15.6446 15.4123 15.5156C15.4642 15.3867 15.4909 15.2485 15.4909 15.109C15.4909 14.9694 15.4642 14.8313 15.4123 14.7023C15.3604 14.5734 15.2844 14.4563 15.1885 14.3576L12.1953 11.2774L15.1885 8.19715C15.5821 7.79214 15.5821 7.11001 15.1885 6.69435Z"
        fill={color ?? "#FF0000"}
      />
    </svg>
  );
};
