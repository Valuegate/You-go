import Image from "next/image";

const NewProductCard = ({
  image = "",
  product = "",
  price = "",
  stock = "",
}) => {
  return (
    <>
      <div className="px-2 w-full rounded-2xl text-light-black-5 bg-white">
        <div className="flex h-[60px] justify-between items-center">
          <div className="flex gap-2 items-center">
            <div>
              <Image
                src={image}
                alt={""}
                className="rounded-[25px] w-[50px] h-[50px]"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col gap-1 ml-2">
              <p className="text-sm font-bold">{product}</p>
              <p className="text-xs font-normal">
                Price: {price}
              </p>
            </div>
          </div>
          <span className="text-sm font-normal pr-3">{stock}</span>
        </div>
      </div>
    </>
  );
};

export default NewProductCard;