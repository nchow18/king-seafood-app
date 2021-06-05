import React, { useState, useContext } from 'react';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import MobileCart from '../../components/Cart/MobileCart';
import WindowCart from '../../components/Cart/WindowCart';
import { UserContext } from '../../utils/GlobalState';
import MobileHeader from './MobileHeader';
import Logo from '../../assets/images/king-logo.png';

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
        <div className="header-links-container">
        <span className="header-logo-display">KING'S SEAFOOD 18</span>
          <div className="links">
            {Auth.loggedIn() === false && (
              <>
              <Link to={headerLinks[0].href} className={`header-link ${currentHeaderLink.name === headerLinks[0].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[0])}}>{headerLinks[0].name}</Link>
              {currentHeaderLink.name !== 'Products' && (
                <Link to={headerLinks[1].href} className={`header-link ${currentHeaderLink.name === headerLinks[1].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[1])}}>{headerLinks[1].name}</Link>
              )}
              {currentHeaderLink.name === 'Products' && (
                <Link to={headerLinks[1].href} className={`header-link ${currentHeaderLink.name === headerLinks[1].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[1])}}>Categories</Link>                
              )}
              {state.active === true && (
                <Link to={headerLinks[2].href} className={`header-link ${currentHeaderLink.name === headerLinks[2].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[2]); setModal(true)}}>{headerLinks[2].name} ( {Auth.getGuestCartQuantity()} )</Link>
              )}
              {state.active === false && (
                <Link to={headerLinks[2].href} className={`header-link ${currentHeaderLink.name === headerLinks[2].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[2]); setModal(true)}}>{headerLinks[2].name} ( {Auth.getGuestCartQuantity()} )</Link>
              )}              

              <Link to={headerLinks[4].href} className={`header-link ${currentHeaderLink.name === headerLinks[4].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[4])}}>{headerLinks[4].name}</Link>

              <Link to={headerLinks[6].href} className={`header-link ${currentHeaderLink.name === headerLinks[6].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[6])}}>{headerLinks[6].name}</Link>

              <Link to={headerLinks[7].href} className={`header-link ${currentHeaderLink.name === headerLinks[7].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[7])}}>{headerLinks[7].name}</Link>

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
              {state.active === true && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getUserCartQuantity()})</b></i>
              )}
              {state.active === false && (
                <i className="fas fa-shopping-cart cart-link" onClick={() => {setModal(true)}}><b> ({Auth.getUserCartQuantity()})</b></i>
              )}                
              <Link key='log-out' to="/" className="header-link" onClick={logout} >Log Out</Link>
              </>   
            )}
            {isModal && ( 
              <div className="window-cart-container">
                <WindowCart
                  setModal={setModal} />
              </div>
            )}
          </div>         
        </div>
        <div className="mobile-header-display">
          <MobileHeader 
            setModal={setModal}
            headerLinks={headerLinks}
            />
        </div> 
      </div>
  )
}

export default Header;