import React, { useState } from 'react';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import MobileCart from '../../components/Cart/MobileCart';
import WindowCart from '../../components/Cart/WindowCart';

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
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getCartQuantity()})</b></i>
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
              <label htmlFor="window-cart">
                <i className="fas fa-shopping-cart cart-link"><b> ({Auth.getCartQuantity()})</b></i>
              </label>
              </>   
            )}
          {isModal && ( 
            <div className="window-cart-container">
              <i onClick={() => {setModal(false)}} className="fas fa-times mobile-icon"></i>
              <WindowCart />
            </div>
          )}
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