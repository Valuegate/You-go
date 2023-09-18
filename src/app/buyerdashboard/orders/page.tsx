import OrderDetails from "@/public/components/OrderDetails/page";

const Orders = () => {
    return ( 
        <>
        <div className="pt-4">
        <div className="bg-primary-1 rounded-lg px-4 py-4 w-full">
            <p className="text-light-black-5 text-base font-bold mb-3">All Orders</p>
            <div className="flex pt-1 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
              <p className="text-sm font-normal">#Order Number</p>
              <p className="text-sm font-normal">Date</p>
              <p className="text-sm font-normal">Customer Name</p>
              <p className="text-sm font-normal">Email</p>
              <p className="text-sm font-normal">Price</p>
              <p className="text-sm font-normal">Status</p>
              <p className="text-sm font-normal">Action</p>
            </div>

            <div className="flex flex-col gap-4">
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
              <OrderDetails />
            </div>
        </div>
        </div>
        </>
     );
}
 
export default Orders;