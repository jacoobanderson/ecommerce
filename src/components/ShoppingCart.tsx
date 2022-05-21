import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="top-20 w-72 left-auto right-auto flex flex-col border border-solid border-[#444242] justify-between absolute sm:w-96 h-96 bg-white sm:right-20 sm:top-20 text-sm">
        <div className='border-b border-solid border-[#444242] text-center p-3 text-base '>Shopping cart</div>
        <button className='flex-end bg-[#444242] text-white p-2 tracking-wider'>ORDER</button>
    </div>
  )
}

export default ShoppingCart;
