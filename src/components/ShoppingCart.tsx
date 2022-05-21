import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="border border-solid border-[#444242] flex flex-col justify-between absolute w-96 h-96 bg-white right-20 top-20 text-sm">
        <div className='border-b border-solid border-[#444242] text-center p-3 text-base'>Shopping cart</div>
        <button className='flex-end bg-[#444242] text-white p-2 tracking-wider'>ORDER</button>
    </div>
  )
}

export default ShoppingCart;
