// "use client";
import React from "react";
import { IoMdCloseCircle } from "react-icons/io";


interface BagModalProps {
  onClose: () => void;
}

const BagModal: React.FC<BagModalProps> = ({ onClose }) => {


  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 flex justify-center items-center">
      <div className="bg-[#ecebe4] w-3/4 h-3/4 p-8 rounded-md shadow-lg relative">
        <button
          className="absolute top-2 right-2 text-[#1c1c1c] hover:text-red-500 "
          onClick={onClose}
        >
          <IoMdCloseCircle size={24} />
        </button>
        <div className=" flex flex-col gap-4  ">
          <img
            src="Lighting.jpg"
            width="200"
            className=" rounded-3xl shadow-xl shadow-black   "
          />
          <div className=" flex gap-3 ">
            <img src="flourlight.jpg" width="80" className=" rounded-2xl " />
            <img src="Lightbulb _.jpg" width="80" className=" rounded-2xl " />
            <img src="retro.jpg" width="80" className=" rounded-2xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagModal;

