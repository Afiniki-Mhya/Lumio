"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import BagModal from "./Components/modal";
import { TbCurrencyNaira } from "react-icons/tb";
import HomeComponents from "./Components/homeComponents";
import QuantityDropdown from "./Components/quantity";
import Colorpage from "./Color/page";

function Homepage() {
  return (
    <div className="bg-[#ecebe4] min-h-screen pt-5 px-24 font-[poppins]  ">
      <HomeComponents />
      <div className="flex justify-center items-center  gap-32 ">
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
          <p className=" flex text-[#6c6a6a93] font-light text-xl pb-5">
            <TbCurrencyNaira />
            300
          </p>
          <p className="pb-4">
            Microsoft and our third-party vendors<br></br> use cookies to store
            and access information.
          </p>
          <div className=" flex  ">
            <p>Select quantity:</p>
            <QuantityDropdown />
          </div>
          <Colorpage />

          <button className=" mt-5 bg-[#1c1c1c] text-white w-28 h-9 rounded-md hover:bg-[#3e3e3e]  ">
            Add to bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
