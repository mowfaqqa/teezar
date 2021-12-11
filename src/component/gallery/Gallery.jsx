import React from 'react'
import images from './galleryData'

const Gallery = () => {
   return (
      <div className="grid grid-cols-3">
         {images.map((image) => {
            return (
               <div className="m-2">
                  <img src={image} alt="gallery" className="w-full"/>
               </div>
            )
         })}         
      </div>
   )
}

export default Gallery
