'use client'
import React, { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm/page";
import { auth, firestore } from "../Firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ReviewComponents from "../Components/reviewComponents";
import { MdOutlineRateReview } from "react-icons/md";

async function fetchReviews() {
  const querySnapshot = await getDocs(collection(firestore, "reviews"));
  const reviews = querySnapshot.docs.map((doc) => doc.data());
  return reviews;
}

const Reviewpage: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    async function loadReviews() {
      const reviewsData = await fetchReviews();
      setReviews(reviewsData);
    }
    loadReviews();
  }, []);

  const togglePopUp = () => {
    setShowPopUp(!showPopUp);
  };
  
  return (
    <main className="bg-[#ecebe4] min-h-screen flex justify-center ">
      <div className="max-w-screen-lg mx-auto">
        <div className="flex justify-between items-center pt-20 px-8">
          <h1 className="text-3xl font-semibold text-center ">
            TESTIMONIAL BLOCK
          </h1>
          <button
            className="bg-[#1c1c1c] text-white border-2 border-[#3e3e3e] rounded-full p-3"
            onClick={togglePopUp}
          >
            <MdOutlineRateReview />
          </button>
        </div>
        <ReviewComponents />
        {showPopUp && <ReviewForm onClose={togglePopUp} />}
      </div>
    </main>
  );
}

export default Reviewpage;
