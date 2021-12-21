import React from 'react'
import style from './hamburger.module.css'
import { Link } from 'react-router-dom'

const Hamburger = () => {
   return (
      <div className={`${style['menu-wrap']}`}>
        <input type="checkbox" class={`${style.toggler}`} />
        <div className={`${style.hamburger}`}><div></div></div>
        <div className={`${style.menu}`}>
            <div>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/about">Accessories</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/bookings">Bookings</Link></li>
                        <li><Link to="/allproducts">Products / Collections</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Hamburger