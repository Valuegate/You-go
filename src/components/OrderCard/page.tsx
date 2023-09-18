const OrderCard = () => {
    return ( 
        <>
            <div className="flex px-2 items-center w-full h-[60px] rounded-2xl text-light-black-5 bg-white justify-between">
              <div className="flex gap-8">
              <p className="text-sm font-normal">#12345</p>
              <p className="text-sm font-normal">12.01.23</p>
              </div>
              <div>
              <p className="text-sm font-normal">product</p>
              </div>
              <div className="flex items-center gap-5">
              <p className="text-sm font-normal">$128</p>
              <button className="p-1 round flex items-center border text-sm font-normal">Delivered</button>
              </div>
            </div>
        </>
     );
}
 
export default OrderCard;