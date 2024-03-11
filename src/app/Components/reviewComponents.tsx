import React from "react";
import next from "next";

const ReviewComponents: React.FC = () => {
  return (
    <main className="">
      <div className="grid gap-4 grid-cols-2 p-8">
        <div className=" bg-white gap-5 p-4 rounded-lg shadow-md ">
          <div className="text-lg font-semibold">Great Product!</div>
          <p className="text-gray-500">by John Doe</p>
          <p className="mt-2">
            I really enjoyed using this product. It's amazing!
          </p>
        </div>

        {/* Second review */}
        <div className=" bg-white gap-5 p-4 rounded-lg shadow-md ">
          <div className="text-lg font-semibold">Awesome Service!</div>
          <p className="text-gray-500">by Jane Smith</p>
          <p className="mt-2">
            This service exceeded my expectations. Highly recommended!
          </p>
        </div>

        {/* Third review */}
        <div className=" bg-white gap-5 p-4 rounded-lg shadow-md ">
          <div className="text-lg font-semibold">Excellent Experience!</div>
          <p className="text-gray-500">by Michael Johnson</p>
          <p className="mt-2">
            I had a fantastic experience with this product. Will buy again!
          </p>
        </div>
      </div>

      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2024 Review Webpage. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default ReviewComponents;
