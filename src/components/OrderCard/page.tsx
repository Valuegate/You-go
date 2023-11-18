const OrderCard = ({
  name = "",
  orderNo = "",
  date = "",
  price = "",
  status = "",
}) => {
  return (
    <>
      <div className="flex px-2 items-center w-full py-4 rounded-2xl text-light-black-5 bg-white justify-between">
        <p className="text-sm font-normal ">{orderNo}</p>
        <p className="text-sm font-normal ">{date}</p>
        <p className="text-sm font-normal ">{name}</p>
        <p className="text-sm font-normal">{price}</p>
        <button className="p-1 round flex items-center border text-sm font-normal">
          {status}
        </button>
      </div>
    </>
  );
};

export default OrderCard;
