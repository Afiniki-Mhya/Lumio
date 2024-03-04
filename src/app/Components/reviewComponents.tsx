import React from "react";
import next from "next";

const ReviewComponents: React.FC = () => {
  return (
    <main className="max-w-4xl mx-auto  ">

      <div className= " grid gap-4 grid-row-3 p-8 ">
       
        <div className="bg-white p-4 rounded-lg shadow-md">

       
            {/* Example review */}
      
              <div className="flex ">
                <div className="flex-1">
                  <div className="text-lg font-semibold">Great Product!</div>
                  <p className="text-gray-500">by John Doe</p>
                  <p className="mt-2">I really enjoyed using this product. It's amazing!</p>
                </div>
              </div>
           
              <div className="flex space-x-4">
                <div className="flex-1">
                  <div className="text-lg font-semibold">Great Product!</div>
                  <p className="text-gray-500">by John Doe</p>
                  <p className="mt-2">I really enjoyed using this product. It's amazing!</p>
                </div>
              </div>
         
            {/* More reviews go here */}
          
        </div>
      </div>

      <footer className="bg-gray-200 text-center py-4">
        <p>&copy; 2024 Review Webpage. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default ReviewComponents;
