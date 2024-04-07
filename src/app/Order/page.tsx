import React from "react";
import products, { Product } from "../Order/product";
import CheckoutPage from "./Checkout/page";

const DetailsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#ecebe4] flex flex-col justify-center items-center p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Order Details</h1>
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 bg-white rounded-lg shadow-md p-8">
        <div className="w-full md:w-1/2">
          <CheckoutPage />
        </div>
        <hr className="my-6 border-gray-300 md:hidden" />
        <form className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-700 font-semibold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="zip" className="block text-gray-700 font-semibold mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="zip"
              name="zip"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-gray-700 font-semibold mb-2">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#1c1c1c] text-white px-6 py-3 rounded-md hover:bg-[#3e3e3e] transition-colors duration-300"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsPage;