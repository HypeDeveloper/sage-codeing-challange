// Handles the navbar section

import React from 'react'
import Logo from './LogoComponent'
import './style.css'

import search_Icon from './../assets/icons/search.png'
import cart_Icon from './../assets/icons/cart.png'
import notify_Icon from './../assets/icons/Bell.png'

function Navbar() {
  return (
      <div className="navbar">
          <div className="innerContent">
              <Logo size />
              <div className="links">
                  <li className='linkList'>Home</li>
                  <li className='linkList'>Marketplace</li>
                  <li className='linkList'>Auctions</li>
                  <li className='linkList'>Drop</li>
              </div>
              <div className="other">
                  <li className='linkList'>
                      <img src={search_Icon} alt="" />
                  </li>
                  <li className='linkList'>
                      <img src={cart_Icon} alt="" />
                  </li>
                  <li className='linkList'>
                      <img src={notify_Icon} alt="" />
                  </li>
              </div>
          </div>
    </div>
  )
}

export default Navbar