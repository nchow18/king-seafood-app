import React, { useState } from 'react';
import '../../css/Header.css';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import MobileHeader from './MobileHeader';
import Logo from '../../assets/images/king-net-logo.png';
import { useQuery } from '@apollo/react-hooks';
import { USER_ME } from '../../utils/queries';

function Header(props) {

  const {
    headerLinks = [],
    setCurrentHeaderLink,
    cartModal,
    setCartModal,
  } = props

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  const { loading, data } = useQuery(USER_ME)
  const [isModal, setModal] = useState(false);
  const user = data?.userMe.cart.length;
  const user_cart_length = user;

  // prevent guest_cart_quantity to be below 0
  const guest_cart = localStorage.getItem('guest_cart_quantity');

  if (guest_cart <= 0) {
    localStorage.setItem('guest_cart_quantity', 0)
  }

  const guestLinks = headerLinks.filter((link) => link.guest === true);
  const adminLinks = headerLinks.filter((link) => link.admin === true);
  const userLinks = headerLinks.filter((link) => link.user === true);

  if (loading) return `...Loading`;

  return (
      <div className="header-items">
        <div className="header-links-container">
        <Link to="/">
            <div>
              <img alt="kinglogo" src={Logo} className="header-logo"/>
              <span>KING'S SEAFOOD 18</span>
            </div>
          </Link>
          <div className="links">
            {Auth.loggedIn() ? (
              <>
              {Auth.getAdmin() ? (
                <>
                {adminLinks.map((link) => (
                  <span onClick={() => {setCurrentHeaderLink(link)}} className="header-link">{link.name}</span>
                ))}
              </>
              ) : (
                <>
                  {userLinks.map((link) => (
                    <span onClick={() => {setCurrentHeaderLink(link)}} className="header-link">{link.name}</span>
                  ))}
                </>
              )}

              </>
            ) : (
              <>
              {guestLinks.map((link) => (
                <span onClick={() => {setCurrentHeaderLink(link)}} className="header-link">{link.name}</span>
              ))}
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
            guestLinks={guestLinks}
            adminLinks={adminLinks}
            userLinks={userLinks}
            setCurrentHeaderLink={setCurrentHeaderLink}
            />
        </div> 
      </div>
  )
}

export default Header;