import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import items from './carouselData'


class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      // centerMode: true,
      infinite: true,
      autoplay: true,
      speed: 2000,
      centerPadding: "60px",
      slidesToShow: 3,
      // speed: 500,
      cssEase : "linear",
      responsive : [
         {
            breakpoint : 600,
            settings: {
               slidesToShow : 2,
               slidesToScroll: 1,
               initiallSlide: 2
            }
         }
      ]

    };
    return (
      <div className="overflow-hidden my-4">
        <h2 className="text-center text-4xl font-dancing mb-3">Teezar Fashion</h2>
        <Slider {...settings} className="my-8 p-2">
        {items.map((item) => {
           return (
            <Div className="bg-white p-2 mx-5 shadow-inner object-cover">
            <Img src={item.img} alt="sample" className="mx-auto"/>
            <p className="text-center text-base md:text-xl font-roboto mt-2">{item.name}</p>
          </Div>
           )
        })}
        </Slider>
        
      </div>
    );
  }
}
export default CenterMode

const Img = styled.img `
   width: 100%;
   @media (max-width: 500px) {
      width: 100%;
      
   }
`
 const Div = styled.div `
    
    @media (max-width: 500px) {
      width: 75%;
   }
 `