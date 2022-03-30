import React from 'react';
import '../css/main.css';
import { NavLink } from 'react-router-dom';

function Header() {

  return (
    <div className="header-container">
      <div>KINGS SEAFOOD 18</div>
      <div className="header-icons">
        <li>
          <NavLink style={{ textDecoration: 'none'}} className="header-button" to={`/`}>
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
            CART
          </NavLink>
        </li>
      </div>
    </div>
  )
}

export default Header;