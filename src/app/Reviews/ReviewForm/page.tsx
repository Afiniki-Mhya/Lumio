'use client'
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineRateReview } from "react-icons/md";

const PopUp: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="relative bg-white rounded-lg px-4 py-8">
          <button className="absolute top-0 right-0 p-2" onClick={onClose}>
          <IoMdCloseCircle  className=" text-xl hover:text-red-600 " />
          </button>
          <h2 className="text-2xl font-bold mb-4">Leave a Review</h2>
          {/* Your review form can be placed here */}
         
        <div className=' grid gap-4 justify-center '>
          <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
                <input
                  className="outline-none bg-[#d8dade] m-2 text-sm rounded-sm w-full"
                  type="name"
                  name="name"
                  placeholder="Title"
                ></input>
              </div>
            
              <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center mb-1 rounded-md">
           
              <input
                className="outline-none bg-[#d8dade] text-sm rounded-sm w-full"
                type="name"
                name="name"
                placeholder="Name"
              >
                
              </input>
            </div>
            <div className="bg-[#d8dade] w-full md:w-64 p-1 flex items-center  rounded-md flex-col mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Review
            </label>
            <textarea
              id="description"
              // value={description}
              // onChange={handleDescriptionChange}
              className="mt-1 p-2 border w-full border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows={4}
            ></textarea>
          </div>
        </div>

            {/* BUTTONS */}
        <div className=' flex flex-row justify-end gap-4 mt-4 '>
        
              <button className=" bg-green-800 text-white w-16 h-8 rounded  ">
                Submit
              </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
