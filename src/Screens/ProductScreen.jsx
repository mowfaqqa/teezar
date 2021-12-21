import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../component/footer/Footer'
import Navbar2 from '../component/navbar/Navbar2'
import productData from '../component/products/productData'

const ProductScreen = () => {
   return (
      <>
         <Navbar2 />
            <div className="grid grid-cols-2 md:grid-cols-4 my-2">
               {productData.map((item) => {
                  return (
                     <div className="m-2" key={item.id}>
                     <Link to={`/product/${item.id}`}>
                        <img src={item.img} alt="product" className="w-full mx-auto rounded-md h-5/6 object-cover"/>
                        <div className="text-center">
                           <h5>{item.product_name}</h5>
                           <h6>{item.price}</h6>
                        </div>
                     </Link>
                     </div>
                  )
               })}
            </div>
         <Footer />
      </>
   )
}

export default ProductScreen
