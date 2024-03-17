// pages/checkout.tsx
import React from "react";
import products, { Product } from "../Order/product";

const CheckoutPage: React.FC = () => {
  
  return (
    <div className="min-h-screen bg-[#ecebe4] flex pt-4 justify-center gap-12  ">
      <h1 className="text-2xl font-bold mb-4 text-center ">Checkout</h1>
      <div className="max-w-md w-full flex flex-col pt-12 ">
        {/* <p>Kindly fill out personal information for this order</p> */}
        <form className=" pt-14 grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            />
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              Country
            </label>
            <select
              id="country"
              name="country"
              className="mt-1 p-2 block w-full rounded-md border border-gray-300"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-[#1c1c1c] text-white px-4 py-2 my-3 rounded-md hover:bg-[#3e3e3e]"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>

      {/*  */}
      {/* <div>
        <div className="max-w-md   mt-8 p-6 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <div className="mb-4">
            <label
              htmlFor="product"
              className="block text-sm font-medium text-gray-700"
            >
              Select Product
            </label>
            <select
              id="product"
              name="product"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            >
              <option value="">Select Product</option>
              {products.map((product: Product) => (
                <option key={product.id} value={product.id.toString()}>
                  {product.name} - ${product.price}
                </option>
              ))}
            </select>
          </div>
       
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Place Order
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default CheckoutPage;
