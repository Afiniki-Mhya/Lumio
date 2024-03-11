'use client'
import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

const ProductUpdatePage: React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const router = useRouter();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can perform any action you want with the form data
    console.log("Updated quantity:", quantity);
    console.log("Selected color:", selectedColor);
    console.log("Description:", description);
    // After updating, you might want to redirect to another page
    router.push("/admin/dashboard"); // Example: Redirecting to the admin dashboard
  };

  return (
    <div className="bg-[#ecebe4] min-h-screen flex justify-center py-20 font-[poppins]">
      <div className="p-4">
        <h1 className="text-2xl font-bold pb-6 text-center">Lumio Update</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Select Color
            </label>
            <select
              id="color"
              value={selectedColor}
              onChange={handleColorChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a color</option>
              <option value="pink">Pink</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="mt-5 bg-[#1c1c1c] text-white w-28 h-9 rounded-md hover:bg-[#3e3e3e] transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductUpdatePage;
