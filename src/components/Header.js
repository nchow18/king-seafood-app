import React, { useState } from 'react';
import '../css/main.css';
import { NavLink } from 'react-router-dom';

function Header(props) {

  const {
    fav,
    cart
  } = props

  const [link, setLink] = useState('HOME')

  return (
    <div className="header-container">
      <div>KINGS SEAFOOD 18</div>
      <div className="header-icons">
        <li>
          <NavLink style={{ textDecoration: 'none'}} onClick={() => setLink('HOME')} className={`header-button ${link === 'HOME' && `active`}`} to={`/`}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/products`}>
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/cart`}>
            CART ( {cart.length} )
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/favorites`}>
            FAVORITES ( {fav.length} )
          </NavLink>
        </li>
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button header-lock" to={`/dashboard`}>
            🔒
          </NavLink>
        </li>        
      </div>
    </div>
  )
}

export default Header;