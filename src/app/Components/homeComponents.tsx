import React from 'react';
import Link from 'next/link';

function HomeComponents() {
  return (
    <div className=''>
      {/* LINKS */}
      <div className='flex flex-row justify-between'>
        {/* <h1>LUMIO</h1> */}
        <img
          src="Logo-removebg-preview.jpg"
          width="100"
          height="0"
          className=""
        />
        <div className='flex gap-4'>
          <Link href="/">Home</Link>
          <Link href="Reviews">Reviews</Link>
          <Link href="Order">Order</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeComponents;
