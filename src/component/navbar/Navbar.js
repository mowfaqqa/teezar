import React from 'react'
import { Link } from 'react-router-dom'
import { SearchIcon, ShoppingBagIcon, UserIcon, MenuIcon } from '@heroicons/react/outline'

const Navbar = () => {
   return (
      <div>
         <div className="hidden md:block bg-transparent hover:bg-black  hover:text-white border-b border-solid border-white px-6">
            <div className="bg-transparent sticky top-0 pb-2 mb-3 flex justify-between items-center">
               <div>
                  <i className="fab fa-facebook text-2xl px-2 text-white hover:text-red-900"></i>
                  <i className="fab fa-twitter text-2xl px-2 text-white hover:text-red-900"></i>
                  <i className="fab fa-instagram text-2xl px-2 text-white hover:text-red-900"></i>
               </div>
               <div>
                  <div className="text-center m-1">
                     <h1 className="text-white text-8xl font-dancing">Teezar</h1>
                     <h6 className="text-white text-xl font-dancing my-2">Fashion</h6>
                  </div>
               </div>
               <div className="icons flex justify-end mx-2">
                  <Link to='/' className="px-2"><UserIcon className="w-8 text-white hover:text-red-900" /></Link>
                  <Link to='/' className="px-2"><SearchIcon className="w-8 text-white hover:text-red-900" /></Link> 
                  <Link to='/' className="px-2"><ShoppingBagIcon className="w-8 text-white hover:text-red-900" /></Link>
               </div>
            </div>
            <ul className="hidden pb-2 md:flex justify-center items-center">
                     <li><Link to='/' className="text-white text-base px-4 hover:text-red-900">Home</Link></li>
                     <li><Link to='/#' className="text-white text-base px-4 hover:text-red-900">Shop</Link></li>
                     <li><Link to='/#' className="text-white text-base px-4 hover:text-red-900">Accessories</Link></li>
                     <li><Link to='/#' className="text-white text-base px-4 hover:text-red-900">Collections</Link></li>
            </ul>
         </div>
         {/* mobile view */}
         <div className="md:hidden flex justify-between items-center md:bg-transparent hover:bg-black border-b border-solid border-gray-200 px-2">
            <div className="icons flex justify-end mx-2">
               <Link to='/' className="px-1"><UserIcon className="w-5 md:w-8 text-white hover:text-red-900" /></Link> 
               <Link to='/' className="px-1"><ShoppingBagIcon className="w-5 md:w-8 text-white hover:text-red-900" /></Link>
            </div>
            <div className="text-center m-1">
            <h1 className="text-white text-8xl font-dancing"><Link to='/'>Teezar</Link></h1>
               <h6 className="text-white text-sm font-dancing my-2">Fashion</h6>
            </div>
            <div className="icons flex justify-end mx-2">
                  <Link to='/' className="px-1"><SearchIcon className="w-5 md:w-8 text-white hover:text-red-900" /></Link>
                  <Link to='/' className="px-1"><MenuIcon className="w-5 md:w-8 text-white hover:text-red-900" /></Link> 
            </div>
         </div>
      </div>
   )
}

export default Navbar
