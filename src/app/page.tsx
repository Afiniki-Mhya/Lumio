"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import BagModal from "./Components/modal";
import HomeComponents from "./Components/homeComponents";
import QuantityDropdown from "./Components/quantity";

function Homepage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBagBtn = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-[#ecebe4] min-h-screen pt-5 px-24 font-[poppins] ">
      <HomeComponents />
      <div className="flex justify-center items-center pt-5 gap-32 ">
        {/* LEFT */}
        <div className="flex flex-col gap-4  ">
          <img
            src="pink.jpg"
            width="100"
            height="0"
            className=" rounded-2xl "
          />
          <img
            src="blue.jpg"
            width="100"
            height="0"
            className=" rounded-2xl "
          />
          <img
            src="yellow.jpg"
            width="100"
            height="0"
            className=" rounded-2xl "
          />
        </div>

        {/* CENTER */}
        <div className="flex justify-center items-center bg-[#6c6a6a93] w-96 h-96 rounded-full">
          <img
            src="groupphoto-removebg-preview.jpg"
            width="350"
            className=" rounded-3xl shadow-xl shadow-black origin-center -rotate-6 "
          />
        </div>

        {/* RIGHT */}
        <div className=" flex flex-col  ">
          <h1 className=" font-extrabold text-3xl font-mono ">
            LUMINOUS LIGHT BULB
          </h1>
          <p className=" text-[#6c6a6a93] font-light text-xl pb-5">N300</p>
          <p className="pb-4">
            Microsoft and our third-party vendors<br></br> use cookies to store
            and access information.
          </p>
          <div className=" flex  ">
            <p>Select quantity:</p>
            <QuantityDropdown />
            </div>
                  
          
          <button
            className=" mt-5 bg-[#1c1c1c] text-white w-28 h-9 rounded-md hover:bg-[#3e3e3e]  "
            onClick={handleBagBtn}
          >
            Add to bag
          </button>
        </div>
      </div>
      {isModalOpen && <BagModal onClose={closeModal} />}
    </div>
  );
}

export default Homepage;
