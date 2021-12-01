import React, { useState, useEffect } from 'react';
import Auth from '../../utils/auth';

function Header(props) {

  const {
    headerLinks,
    setCurrentHeaderLink,
    user_type,
    promoData,
    userData,
    cartQty,
    setCartQty,
    userCart,
    cart
  } = props

  var header_link = [];
  const [isModal, setModal] = useState(false)

  if (user_type === 'admin') {
    for (var i = 0; i < headerLinks.length; i++) {
      if (headerLinks[i].admin === true) {
        header_link.push(headerLinks[i].name)
      }
    }
  } else if (user_type === 'user') {
    for (var w = 0; w < headerLinks.length; w++) {
      if (headerLinks[w].user === true) {
        header_link.push(headerLinks[w].name)
      }
    }    
  } else {
    for (var a = 0; a < headerLinks.length; a++) {
      if (headerLinks[a].guest === true) {
        header_link.push(headerLinks[a].name)
      }
    }    
  }

  return (
    <>
      <div className="header-promo highlight">
        {promoData.mainPromo}
      </div>
      <div className="header-mobile-container padding-1rem">      
        {isModal ? (
          <>
            <div className="header-mobile-logo">
              KS 18
            </div>
            <div className="header-mobile-icons">
              <i className="fas fa-home padding-1rem icon-size" onClick={() => (setCurrentHeaderLink('Home'))}></i>
              <i className="fas fa-shopping-cart padding-1rem icon-size" onClick={() => (setCurrentHeaderLink('Cart'))}> ({cartQty})</i>  
              <i className="fas fa-bars padding-1rem icon-size" onClick={() => (setModal(true))}></i>                         
            </div>        
            <div className="header-mobile-modal">
              <div className="header-mobile-links padding-1rem">
                {user_type !== undefined && (
                  <div className="bold-font padding-bottom-1rem">
                    Welcome, {userData.first_name} {userData.last_name}
                  </div>                  
                )}
                {user_type === undefined && (
                  <div className="bold-font padding-bottom-1rem">
                    Welcome, Guest
                  </div>                  
                )}
                {user_type === 'admin' && (
                  <>
                    {header_link.map((link) => (
                      <div key={link} className="header-mobile-link" onClick={() => (setCurrentHeaderLink(link), setModal(false))}>
                        {link}
                      </div>
                      )
                    )}
                  </>
                )}
                {user_type === 'user' && (
                  <>
                    {header_link.map((link) => (
                      <div key={link} className="header-mobile-link" onClick={() => (setCurrentHeaderLink(link), setModal(false))}>
                        {link}
                      </div>
                      )
                    )}
                  </>
                )}
                {user_type === undefined && (
                  <>
                    {header_link.map((link) => (
                      <div key={link} className="header-mobile-link" onClick={() => (setCurrentHeaderLink(link), setModal(false))}>
                        {link}
                      </div>
                      )
                    )}
                  </>
                )}                    
                {user_type !== undefined && (
                  <div className="header-desktop-link" onClick={() => (Auth.logout())}>
                    Log Out
                  </div>
                )}
                <i className="fas fa-times close-icon" onClick={() => setModal(false)}></i>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="header-mobile-logo">
              KS 18
            </div>
            <div className="header-mobile-icons">
              <i className="fas fa-home padding-1rem icon-size" onClick={() => (setCurrentHeaderLink('Home'))}></i>
                  <i className="fas fa-shopping-cart padding-1rem icon-size" onClick={() => (setCurrentHeaderLink('Cart'))}> ({cartQty})</i>               
              <i className="fas fa-bars padding-1rem icon-size" onClick={() => (setModal(true))}></i>                         
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Header;