const OrderCard = ({
  name = "",
  orderNo = "",
  date = "",
  price = "",
  status = "",
}) => {
  return (
    <>
      <div className="flex px-2 items-center w-full h-[60px] rounded-2xl text-light-black-5 bg-white justify-between">
        <p className="text-sm font- w-[15%]">{orderNo}</p>
        <p className="text-sm font-normal w-[15%]">{date}</p>
        <p className="text-sm font-normal w-[15%]">{name}</p>
        <p className="text-sm font-normal w-[5%]">{price}</p>
        <button className="p-1 round flex items-center border text-sm font-normal">
          {status}
        </button>
      </div>
    </>
  );
};

export default OrderCard;
