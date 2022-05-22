import React from 'react';

const ShoppingCart = () => {
  return (
    <div className="top-20 w-72 left-auto right-auto flex flex-col border border-solid border-[#444242] justify-between absolute sm:w-96 h-96 bg-white sm:right-20 sm:top-20 text-sm">
        <div>
            <div className='border-b border-solid border-[#444242] text-center p-3 text-base '>Shopping cart</div>
            <div className='mt-1 mb-1 border border-solid border-gray-200 flex justify-between p-3'>
                <div>NAME OF PRODUCT (TEST)</div>
                <div>L</div>
                <div>3999kr</div>
            </div>
            <div className='mt-1 mb-1 border border-solid border-gray-200 flex justify-between p-3'>
                <div>NAME OF PRODUCT (TEST)</div>
                <div>L</div>
                <div>3999kr</div>
            </div>
            <div className='mt-1 mb-1 border border-solid border-gray-200 flex justify-between p-3'>
                <div>NAME OF PRODUCT (TEST)</div>
                <div>M</div>
                <div>3999kr</div>
            </div>
        </div>
        <button className='flex-end bg-[#444242] text-white p-2 tracking-wider'>ORDER</button>
    </div>
  )
}

export default ShoppingCart;
