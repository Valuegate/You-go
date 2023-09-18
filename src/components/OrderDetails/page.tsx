import MoreIconComponent from "../MoreIconComponent/page";

const OrderDetails = () => {
  return (
    <>
      <div className="flex pl-2 pr-8 items-center w-full h-[50px] rounded-2xl text-light-black-5 bg-white justify-between">
          <p className="text-sm font-normal">#12345</p>
        <div className="flex gap-20">
          <p className="text-sm font-normal ml-16">12.01.23</p>
          <p className="text-sm font-normal">Achan Benjamin</p>
        </div>
        <div className="flex gap-12">
          <p className="text-sm font-normal">me@email.com</p>
          <p className="text-sm font-normal">$128</p>
        </div>
        <div className="flex items-center gap-12">
          <button className="p-1 round flex items-center border text-sm font-normal">
            Delivered
          </button>
          <MoreIconComponent />
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
