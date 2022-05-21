import { BellIcon, MenuIcon, XIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';


interface CurrentProps {
    current: String
}


const Navbar = ({ current }: CurrentProps) => {
  const [shoppingCart, setShoppingCart] = useState<Boolean>(false)

  const toggleShoppingCart = () => {
      setShoppingCart(!shoppingCart)
  }
  return (
      <div className='flex text-gray-800 justify-between'>
          {/* Desktop version */}
          <div className='hidden sm:flex m-5 h-12 justify-center items-center'>
              <Link className={current === 'Home' ? 'border-b border-solid border-gray-800 mx-6' : 'mx-6'} to='/'>Home</Link>
              <Link className={current === 'Products' ? 'border-b border-solid border-gray-800 mx-6' : 'mx-6'} to=''>Products</Link>
              <Link className={current === 'Inspiration' ? 'border-b border-solid border-gray-800 mx-6' : 'mx-6'} to=''>Inspiration</Link>
              <Link className={current === 'About' ? 'border-b border-solid border-gray-800 mx-6' : 'mx-6'} to=''>About</Link>
          </div>
          {/* Mobile version */}
          <div className='flex sm:hidden justify-center items-center m-5 h-12'>
              <MenuIcon className='h-8 w-8 mx-6' />
          </div>
          <div onClick={toggleShoppingCart} className='flex justify-center items-center m-5 h-12'>
              <ShoppingCartIcon className='h-8 w-8 mx-6'/>
          </div>

          {shoppingCart ? <ShoppingCart /> : null}
      </div>
    
  )
}

export default Navbar;
