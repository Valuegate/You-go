import React from 'react'
import { FaCaretDown } from 'react-icons/fa';
import AddItem from '../AddItem/page';
import ProductDetails from '../ProductDetails/page';

const Products = () => {

  const products = [
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },

    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
    {
      image: "/assets/bigbag.png",
      name: "Product",
      category: "Category",
      price: "€24",
      stock: 220,
      sold: 90,
      revenue: "€2,160",
    },
  ];



  return (
    <>
      <AddItem addText="Add Product"/>
      <div className="pt-10">
        <div className="bg-primary-1 rounded-lg px-4 py-4 w-full">
          <p className="text-light-black-5 text-base font-bold mb-3">
            Products
          </p>
          <div className="flex pt-1 pb-1 mb-4 rounded-b-lg bg-light-black-5 text-white px-4 justify-between">
            <p className="text-sm font-normal">Product Name</p>
            <p className="text-sm font-normal">Category</p>
            <p className="text-sm font-normal">Price</p>
            <p className="text-sm font-normal">Stock</p>
            <p className="text-sm font-normal">Sold</p>
            <p className="text-sm font-normal">Revenue</p>
            <p className="text-sm font-normal">Action</p>
          </div>

          <div className="flex flex-col gap-4">
            {products.map((product, i) => {
              return (
                <ProductDetails key={i} 
                name={product.name}
                category={product.category}
                image={product.image}
                price={product.price}
                revenue={product.revenue}
                sold={product.sold}
                stock={product.stock}
                
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center mt-5 relative">
            <div className="border-2 border-black rounded-md py-2 px-3 flex items-center gap-2 cursor-pointer">
              Show: 10
              <FaCaretDown />
            </div>

            <div>There</div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Products