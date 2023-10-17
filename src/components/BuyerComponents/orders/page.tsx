import OrderDetails from "@/public/components/OrderDetails/page";

const Orders = () => {
  const orders = [
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
    {
      orderNo: "#12345",
      date: "12/01/2023",
      customerName: "Achan Benjamin",
      email: "me@email.com",
      price: "€128",
      status: "Delivered",
    },
  ];

  return (
    <>
      <div className="pt-4">
        <div className="bg-primary-1 rounded-lg px-4 py-4 w-full">
          <p className="text-light-black-5 text-base font-bold mb-3">
            All Orders
          </p>
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
            {orders.map((order, i) => {
              return (
                <OrderDetails
                  key={i}
                  name={order.customerName}
                  orderNo={order.orderNo}
                  date={order.date}
                  email={order.email}
                  price={order.price}
                  status={order.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
