import React from 'react'
import { Link } from 'react-router-dom'
import CenterMode from '../component/carousel/Carousel'
import Category from '../component/category/Category'
import Footer from '../component/footer/Footer'
import Gallery from '../component/gallery/Gallery'
import Showcase from '../component/showcase/Showcase'
// import Navbar from '../component/navbar/Navbar'



const Homepage = () => {
   return (
      <div>
         <Showcase />
         <CenterMode />
         <div className="text-center my-8">
            <Link to="/" className="bg-gold-100 py-2 px-8 text-white">Shop Now</Link>
        </div>
         <Category />
         <Gallery />
         <Footer />
      </div>
   )
}

export default Homepage
