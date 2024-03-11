import Link from "next/link";
import React from "react";

function Dashboardpage() {
  return (
    <div className=" bg-[#ecebe4] min-h-screen pt-20 px-24 font-[poppins] ">
      <h1 className=" text-2xl font-bold ">Hello!</h1>
      <div className=" mt-7 flex gap-4 ">
        <Link
          href="/"
          className=" p-3 bg-[#1c1c1c] text-white rounded-md hover:bg-[#3e3e3e] "
        >
          View Home Page
        </Link>
        <Link
          href="Form"
          className=" p-3 bg-[#1c1c1c] text-white rounded-md hover:bg-[#3e3e3e] "
        >
          Product Update
        </Link>
      </div>
    </div>
  );
}

export default Dashboardpage;
