import React, { useState } from 'react';
import '../../css/Header.css';
import '../../css/Footer.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import WindowCart from '../../components/Cart/WindowCart';

function Footer( props) {

  const {
    headerLinks = [],
    currentHeaderLink,
    setCurrentHeaderLink
  } = props

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

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
  <div className="footer-container">
    <div className="header-links-container">
    <input type="checkbox" id="footer-links"/ >
      <div className="links">

        <label className="mobile-header-toggle" htmlFor="footer-links"><i className="fas fa-times mobile-icon"></i></label>
        {Auth.loggedIn() === false && (
          <>
        {headerLinks.filter((link) => link.guest === true).map((link) => (
          <Link key={link.href} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
        ))}
          </>
        )}
        {Auth.getAdmin() === true && (
          <>
          
          {headerLinks.filter((link) => link.admin === true).map((link) => (
            <>
              <Link key={link.href} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
            </>        
          ))}
          </>
        )}

        {Auth.getAdmin() === false && (
          <>
          {headerLinks.filter((link) => link.user === true).map((link) => (
              <Link key={link.href} to={link.href} className={`header-link ${currentHeaderLink.name === link.name && `headerActive`}`} onClick={() => { setCurrentHeaderLink(link)}}>{link.name}</Link>
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
      </div>

      <div className="icons">
        <Link to="/"><i className="fas fa-home mobile-icon"></i></Link>
        <Link to="/products"><i className="fas fa-tags mobile-icon"></i></Link>
        <label htmlFor="mobile-cart">
        <i onClick={() => {setModal(true)}} className="fas fa-shopping-cart mobile-icon"></i>
        </label>
        <label key='list' htmlFor="footer-links" >
        <i className="fas fa-bars drop-down mobile-icon"></i>
        </label>
      </div>
    </div>
      {isModal && ( 
        <div className="window-cart-container">
          <WindowCart
            setModal={setModal} />
        </div>
      )}
  </div>
)
}

export default Footer;