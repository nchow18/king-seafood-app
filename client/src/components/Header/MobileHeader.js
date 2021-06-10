import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Lobster from '../../assets/images/lobster-logo3.png';
import Cart from '../../assets/images/cart.png';

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
              <img alt="cart" src={Cart} className="cart-icon" onClick={() => {setCartModal(false)}} />
              <span className="cart-quantity-display">{Auth.getGuestCartQuantity()}</span>
            </div>
          ) : (
            <div>
              <img alt="cart" src={Cart} className="cart-icon" onClick={() => {setCartModal(true)}} />
              <span className="cart-quantity-display">{Auth.getGuestCartQuantity()}</span>
            </div>
          )}  
          <Link to="/" className="king-title-mobile">
            {/* <span className="bold">KING'S SEAFOOD 18</span> */}
            <div>
              {/* <span>ORDER</span> */}
              <img alt="lobster" src={Lobster} className="lobster-logo" />
              {/* <span>FRESH</span> */}
            </div>

          </Link>        
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



  

