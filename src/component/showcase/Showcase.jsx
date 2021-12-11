import React from 'react'
import styled from 'styled-components'
import Navbar from '../navbar/Navbar'
import img from './asset/background.png'

const Showcase = () => {
   return (
      <Div bg={`linear-gradient(45deg, rgba(0, 0, 0, 0.64), rgba(0, 0, 0, 0.64)), url('${img}')no-repeat top center/cover`} height="100vh" rsheight="60vh" >
         <Navbar />
      </Div>
   )
}

export default Showcase

const Div = styled.div `
   background : ${(props) => props.bg};
   overflow: hidden;
   height: ${(props) => props.height};

   @media (max-width:500px) {
      height: ${(props) => props.rsheight};
   }
`