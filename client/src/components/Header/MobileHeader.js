import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function MobileHeader(props) {

  const {
    setModal,
    isModal,
    headerLinks=[],
    cartModal,
    setCartModal
  } = props

  const [currentMenu, setMenu] = useState(false);
  const publicArr = headerLinks.filter((link) => link.guest === true);
  const userArr = headerLinks.filter((link) => link.user === true);
  const adminArr = headerLinks.filter((link) => link.admin === true);

  return (
    <>
      <div className="mobile-header-container">
          {cartModal ? (
            <div>
              <i className="fas fa-shopping-cart menu-icon" onClick={() => {setCartModal(false)}}></i>
              <span className="cart-quantity-display">{Auth.getGuestCartQuantity()}</span>
            </div>
          ) : (
            <div>
              <i className="fas fa-shopping-cart menu-icon" onClick={() => {setCartModal(true)}}></i>
              <span className="cart-quantity-display">{Auth.getGuestCartQuantity()}</span>
            </div>
          )}  
          <Link to="/" className="king-title-mobile">KING'S SEAFOOD 18</Link>        
          {currentMenu ? (
            <i className="fas fa-times menu-icon" onClick={() => {setMenu(false)}}></i>
          ) : (
            <i className="fas fa-bars menu-icon" onClick={() => {setMenu(true)}}></i>
          )}
      </div>
      {currentMenu && (
        <div className="mobile-header-menu">
          {Auth.loggedIn() ? (
            <>
              {Auth.getProfileType() ? (
                <>
                {adminArr.map((link) => (
                  <Link to={link.href} onClick={() => {setMenu(false)}} className="mobile-header-links">{link.name}</Link>
                  ))}     
                </>           
              ) : (
                <>
                  {userArr.map((link) => (
                    <Link to={link.href} onClick={() => {setMenu(false)}}  className="mobile-header-links">{link.name}</Link>
                  ))}                 
                </>
              )}            
            </>
          ) : (
            <>
              {publicArr.map((link) => (
              <Link to={link.href} onClick={() => {setMenu(false)}}  className="mobile-header-links">{link.name}</Link>
              ))}            
            </>
          )}
        </div>
      )}
    </>
  )
}

export default MobileHeader;



  

