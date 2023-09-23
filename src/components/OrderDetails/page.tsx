import MoreIconComponent from "../MoreIconComponent/page";

const OrderDetails = ({
  orderNo = "#12345",
  date = "12/01/2023",
  name = "Achan Benjamin",
  email = "me@email.com",
  price = "$128",
  status = "Delivered",
}) => {
  return (
    <div className="flex px-5 items-center w-full py-3 rounded-2xl text-light-black-5 bg-white justify-between">
      <p className="text-sm font-normal w-[10%]">{orderNo}</p>

      <div className="flex w-[25%] items-center justify-between">
        <p className="text-sm font-normal">{date}</p>
        <p className="text-sm font-normal">{name}</p>
      </div>

      <div className="flex items-center justify-between w-[20%]">
        <p className="text-sm font-normal">{email}</p>
        <p className="text-sm font-normal">{price}</p>
      </div>
      <div className="flex items-center justify-between w-[18%]">
        <button className="p-1 round flex items-center border text-sm font-normal">
          {status}
        </button>
        <MoreIconComponent />
      </div>
    </div>
  );
};

export default OrderDetails;
