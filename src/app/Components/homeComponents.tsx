import Link from 'next/link'
import React from 'react'

function homeComponents() {
  return (
    <div className=' '>
        {/* LINKS */}
        <div className=' flex flex-row justify-between  '>
            {/* <h1>LUMIO</h1> */}
            <img
            src="Logo-removebg-preview.jpg"
            width="180"
            height="0"
            className=" "
          />
            <div className=' flex gap-4 '>
                <Link href="/">Home</Link>
                <Link href="Reviews">Reviews</Link>
                <Link href="/">Order</Link>
            </div>
        </div>
    </div>
  )
}

export default homeComponents