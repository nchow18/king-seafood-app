import React, { useState, useContext } from 'react';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import MobileCart from '../../components/Cart/MobileCart';
import WindowCart from '../../components/Cart/WindowCart';
import { UserContext } from '../../utils/GlobalState';

function Header(props) {

  const {
    headerLinks = [],
    currentHeaderLink,
    setCurrentHeaderLink
  } = props

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  function setMode(mode) {
    Auth.lightMode(mode);
  }

  const [state, dispatch] = useContext(UserContext);
  const [isModal, setModal] = useState(false);
  const publicArr = headerLinks.filter((link) => link.guest === true);
  const userArr = headerLinks.filter((link) => link.user === true);
  const adminArr = headerLinks.filter((link) => link.admin === true);

  const headerArr = [];
   
  if (!Auth.loggedIn()) {
      console.log('guest account')
      headerArr.push(publicArr);
    } else {
    if(Auth.getProfileType() === 'admin') {
      console.log('admin account');
      headerArr.push(adminArr)
    } else {
      console.log('user account');
      headerArr.push(userArr);
    }
  }
  
  // prevent guest_cart_quantity to be below 0
  const guest_cart = localStorage.getItem('guest_cart_quantity');

  if (guest_cart < 0) {
    localStorage.setItem('guest_cart_quantity', 0)
  }

  return (
      <div className="header-items">
        <div className="header-mobile">
          <div className="bold logo-name">KING'S SEAFOOD 18</div>
          <div className="night-mode">
            <div key='night' onClick={() => {setMode('night'); Auth.getMode()}}><i className="far fa-moon header-icon night-right-display"></i></div>
            <div key='day' onClick={() => {setMode('day'); Auth.getMode()}}><i className="far fa-sun header-icon night-left-display"></i></div>
          </div>
        </div>
        <div className="header-links-container">
          <div className="links">
            {Auth.loggedIn() === false && (
              <>
            {headerLinks.filter((link) => link.guest === true).map((link) => (
              <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
            ))}
              {state.active === true && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getGuestCartQuantity()})</b></i>
              )}
              {state.active === false && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getGuestCartQuantity()})</b></i>
              )}              
              </>
            )}
            {Auth.getAdmin() === true && (
              <>
              
              {headerLinks.filter((link) => link.admin === true).map((link) => (
                <>
                  <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
                </>        
              ))}
              </>
            )}

            {Auth.getAdmin() === false && (
              <>
              {headerLinks.filter((link) => link.user === true).map((link) => (
                  <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
              ))}
              </>
            )}
            {Auth.loggedIn() && (
              <>
              <Link key='log-out' to="/" className="header-link" onClick={logout} >Log Out</Link>
              {state.active === true && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getUserCartQuantity()})</b></i>
              )}
              {state.active === false && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getUserCartQuantity()})</b></i>
              )}              

              </>   
            )}
          {isModal && ( 
            <div className="window-cart-container">
              <WindowCart
                setModal={setModal} />
            </div>
          )}
            {/* <button onClick={() => dispatch({ type: 'toggle_button' })}>
              { state.active ? "On" : "Off" }
            </button>           */}
            <div className="night-mobile">
              <div key='night' onClick={() => {setMode('night'); Auth.getMode()}}><i className="far fa-moon header-icon night-header-display"></i></div>
              <div key='day' onClick={() => {setMode('day'); Auth.getMode()}}><i className="far fa-sun header-icon night-header-display"></i></div>
            </div>
          </div>
          </div>
      </div>
  )
}

export default Header;