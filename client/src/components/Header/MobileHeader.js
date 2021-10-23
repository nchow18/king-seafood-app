import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import Lobster from '../../assets/images/lobster-logo3.png';
import Cart from '../../assets/images/cart.png';

function MobileHeader(props) {

  const {
    guestLinks,
    userLinks,
    adminLinks,
    setCurrentHeaderLink,
    logout,
    headerLinks
  } = props

  const [currentMenu, setMenu] = useState(false);

  return (
    <>
      <div className="mobile-header-container">
        {currentMenu ? (
          <div className="mobile-header-links">
            {Auth.loggedIn() ? (
              <>
              {Auth.getAdmin() ? (
                <>
                {adminLinks.map((link) => (
                  <span onClick={() => {setCurrentHeaderLink(link); setMenu(false)}} className="header-link">{link.name}</span>
                ))}
                <span onClick={() => {logout(); setMenu(false)}} className="header-link">{headerLinks[8].name}</span>
              </>
              ) : (
                <>
                  {userLinks.map((link) => (
                    <span onClick={() => {setCurrentHeaderLink(link); setMenu(false)}} className="header-link">{link.name}</span>
                  ))}
                  <span onClick={() => {logout(); setMenu(false)}} className="header-link">{headerLinks[8].name}</span>                  
                </>
              )}

              </>
            ) : (
              <>
              {guestLinks.map((link) => (
                <span onClick={() => {setCurrentHeaderLink(link); setMenu(false)}} className="header-link">{link.name}</span>
              ))}
              <span onClick={() => {setCurrentHeaderLink(headerLinks[7]); setMenu(false)}} className="header-link">{headerLinks[7].name}</span>              
              </>
            )}
          </div>
        ) : (
          <span onClick={() => {setMenu(true)}}>MENU</span>
        )}
      </div>
    </>
  )
}

export default MobileHeader;



  

