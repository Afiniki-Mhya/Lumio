"use client";
import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";
import HomeComponents from "./Components/homeComponents";
import QuantityDropdown from "./Components/quantity";
import Colorpage from "./Color/page";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import Link from "next/link";
import {
  ADD_TO_CART_ROUTE as ADD_TO_CART_ROUTE,
  DASHBOARD_ROUTE,
} from "@/constants/routes";
import { useSearchParams } from "next/navigation";

function Homepage() {
  const searchParams = useSearchParams();

  return (
    <div className="bg-[#ecebe4] min-h-screen pt-5 px-24 font-[poppins]  ">
      <HomeComponents />
      <div className="flex justify-center items-center flex-col md:flex-row gap-6 md:gap-32 ">
        {/* LEFT */}
        <section className="flex flex-col-reverse items-center justify-center gap-6 lg:flex-row md:gap-10">
          <div className="flex lg:flex-col gap-4  ">
            <motion.img
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                transition: { type: "tween" },
              }}
              transition={{
                duration: 0.5,
              }}
              src="pink.jpg"
              width="100"
              height="0"
              className=" rounded-2xl "
            />
            <motion.img
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                transition: { type: "tween" },
              }}
              transition={{
                duration: 0.5,
              }}
              src="blue.jpg"
              width="100"
              height="0"
              className=" rounded-2xl "
            />
            <motion.img
              whileHover={{
                scale: 1.1,
                cursor: "pointer",
                transition: { type: "tween" },
              }}
              transition={{
                duration: 0.5,
              }}
              src="yellow.jpg"
              width="100"
              height="0"
              className=" rounded-2xl "
            />
          </div>
          {/* CENTER */}
          <div className="relative flex justify-center items-center bg-[#6c6a6a93] w-96 h-96 rounded-full">
            <Tilt
              className="bg-[#ecebe4] parallax-effect rounded-3xl shadow-xl shadow-black  -rotate-6 "
              perspective={500}
              style={{
                rotate: "-10deg",
              }}
              scale={1.1}
              transitionSpeed={2500}
            >
              <div className="inner-element">
                <motion.img
                  draggable="false"
                  src="nobg.png"
                  width="350"
                  className=" z-100 "
                  style={{
                    translateZ: 1000,
                  }}
                />
              </div>
            </Tilt>
          </div>
        </section>

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

          <Link
            href={ADD_TO_CART_ROUTE + "?" + searchParams?.toString()}
            className="font-sans flex items-center justify-center mt-5 bg-[#1c1c1c] text-white w-28 h-9 rounded-md hover:bg-[#3e3e3e]  "
          >
            Add to bag
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
