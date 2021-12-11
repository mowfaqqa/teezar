import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <div className="bg-gold-100 m-2">
      <div className="bg-gold-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
         <div className=" mb-3">
            <h5 className="font-dancing text-xl">Shop</h5>
            <li className="list-none md:text-xs"><Link to="/" className="list-none text-white font-roboto">Bespoke</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Accessories</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Luxury & Bridal</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Turban Caps & Headbands</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Ready To Wear</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Kaftan Dresses</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Kiddies wears</Link></li>
         </div>
         <div>
            <h6 className="font-dancing text-xl">Brands</h6>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Elegante</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Teezar collection</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Lorem, ipsum.</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Lorem, ipsum.</Link></li>
         </div>
         <div>
            <h6 className="font-dancing text-xl">Help</h6>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Privacy Policy</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Terms and Conditions</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Contact Us</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">FAQs</Link></li>
         </div>
         <div>
            <h6 className="font-dancing text-xl">Teezar</h6>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">About Us</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Blog</Link></li>
            <li className="list-none md:text-xs"><Link to="/" className="text-white font-roboto">Gallery</Link></li>
         </div>
         <div>
            <h6 className="font-dancing text-xl">Contact Information</h6>
            <li className="list-none md:text-xs p-1 text-white"><PhoneIcon className="w-5 inline-block"/> : 07042829999</li>
            <li className="list-none md:text-xs p-1 text-white"><LocationMarkerIcon className="w-5 inline-block"/> : Kaduna / Abuja, NG.</li>
            <li className="list-none md:text-xs p-1 text-white"><MailIcon className="w-5 inline-block"/> : teezarfashion@gmail.com</li>
            <div className="mt-3">
               <i className="fab fa-facebook p-2"></i>
               <i className="fab fa-twitter p-2"></i>
               <i className="fab fa-instagram p-2"></i>
            </div>
         </div>
      </div>
         <div className="m-2 p-1 text-center">
            <p className="font-dancing text-sm md:text-xl text-white"> &copy; Teezar fashion, 2021</p>
         </div>
      </div>
   )
}

export default Footer
