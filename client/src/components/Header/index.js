import React, { useState, useContext } from 'react';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { UserContext } from '../../utils/GlobalState';
import MobileHeader from './MobileHeader';
import Logo from '../../assets/images/king-logo.png';
import { useQuery } from '@apollo/react-hooks';
import { USER_ME } from '../../utils/queries';
import Lobster from '../../assets/images/lobster-logo3.png';


function Header(props) {

  const {
    headerLinks = [],
    currentHeaderLink,
    setCurrentHeaderLink,
    cartModal,
    setCartModal
  } = props

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const { loading, data } = useQuery(USER_ME)
  const [state, dispatch] = useContext(UserContext);
  const [isModal, setModal] = useState(false);
  const publicArr = headerLinks.filter((link) => link.guest === true);
  const userArr = headerLinks.filter((link) => link.user === true);
  const adminArr = headerLinks.filter((link) => link.admin === true);
  const user = data?.userMe.cart.length || 0;
  const user_cart_length = user;

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

  if (guest_cart <= 0) {
    localStorage.setItem('guest_cart_quantity', 0)
  }

  if (loading) return `...Loading`;

  return (
      <div className="header-items">
        <div className="header-links-container">
        <Link to="/">
              <div className="header-logo-display">
                <span>KING'S SEAFOOD 18</span>
              </div>
          </Link>
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
                <span className={`header-link ${currentHeaderLink.name === headerLinks[2].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[2]); setCartModal(true)}}>Cart ( {Auth.getGuestCartQuantity()} )</span>
              )}
              {state.active === false && (
                <span className={`header-link ${currentHeaderLink.name === headerLinks[2].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[2]); setCartModal(true)}}>Cart ( {Auth.getGuestCartQuantity()} )</span>
              )}              

              <Link to={headerLinks[3].href} className={`header-link ${currentHeaderLink.name === headerLinks[3].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[3])}}>{headerLinks[3].name}</Link>

              <Link to={headerLinks[5].href} className={`header-link ${currentHeaderLink.name === headerLinks[5].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[5])}}>{headerLinks[5].name}</Link>

              <Link to={headerLinks[6].href} className={`header-link ${currentHeaderLink.name === headerLinks[6].name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(headerLinks[7])}}>{headerLinks[6].name}</Link>

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
              {state.active === true && (
                <span className="header-link" onClick={() => { setCartModal(true)}}>Cart ( {user_cart_length} )</span>
              )}
              {state.active === false && (
                <span className="header-link" onClick={() => { setCartModal(true)}}>Cart ( {user_cart_length} )</span>
              )}               
              </>
            )}

            {Auth.getAdmin() === false && (
              <>
              {headerLinks.filter((link) => link.user === true).map((link) => (
                  <Link key={link.name} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
              ))}
              {state.active === true && (
                <span className="header-link" onClick={() => {setCartModal(true)}}>Cart ( {user_cart_length} )</span>
              )}
              {state.active === false && (
                <span className="header-link" onClick={() => {setCartModal(true)}}>Cart ( {user_cart_length} )</span>
              )}               
              </>
            )}
            {Auth.loggedIn() === true && (
              <>               
              <Link key='log-out' to="/" className="header-link" onClick={logout} >Log Out</Link>
              </>   
            )}
          </div>         
        </div>
        <div className="mobile-header-display">
          <MobileHeader 
            setModal={setModal}
            isModal={isModal}
            headerLinks={headerLinks}
            cartModal={cartModal}
            setCartModal={setCartModal}
            />
        </div> 
      </div>
  )
}

export default Header;