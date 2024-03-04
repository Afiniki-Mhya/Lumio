import React from 'react'
import ReviewComponents from '../Components/reviewComponents'

function Reviewpage() {
  return (
    <main className='bg-[#ecebe4] min-h-screen flex justify-center'>
        <div>

          <h1 className=' text-3xl font-semibold pt-28 '>TESTIMONIAL BLOCK</h1>
          {/* <hr className=' text-white w-4 border  '></hr> */}
          <div></div>
          <ReviewComponents />
        </div>
    </main>
  )
}

export default Reviewpage