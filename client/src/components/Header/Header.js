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

  useEffect(() => {
    if (Auth.loggedIn()) {
      setCartQty(userData.cart.length);
    } else {
      setCartQty(0)
    }

  },[])

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
      <div className="header-promo">
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
              <i onClick={() => {window.open("https://wa.me/60164223018")}} className="fab fa-whatsapp-square whatsapp-icon-size padding-1rem"></i>  
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
                <div className="menu-footer">
                  <div className="menu-details-container">
                    <h5><b>Address</b></h5>
                    <h6>{promoData.address}</h6>
                    <h5><b>Operating Hours</b></h5>
                    <h6>10:00AM - 5:30PM (Closed on Sundays & Public Holidays)</h6>
                    <h5><b>Contact Us</b></h5>
                    <h6>{promoData.contact_us_1}<br></br></h6>
                    <h6>{promoData.contact_us_2}</h6>
                    <h5><b>Follow Us</b></h5>
                    <div className="menu-social-icons">
                      <div onClick={() => {window.open("https://www.facebook.com/kingsseafood18/")}}>
                        <i className="fab fa-facebook"></i>
                        <h6>@kingsseafood18</h6>
                      </div>
                      <div onClick={() => {window.open("https://instagram.com/kingsseafood18?utm_medium=copy_link")}}>
                        <i className="fab fa-instagram"></i>
                        <h6>@kingsseafood18</h6>
                      </div>
                    </div>
                    <div className="menu-map">
                      <iframe title="map" className="king-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.041964443941!2d100.31403875172646!3d5.410579936576945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3b801b3cb3f%3A0x461457f2a8d2bd!2s205%2C%20Jln%20Perak%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang%2C%20Malaysia!5e0!3m2!1sen!2sca!4v1622922167047!5m2!1sen!2sca" width="auto" height="auto" style={{border:0}} aria-hidden="false"></iframe>                      
                    </div>
                  </div>
                  <div className="menu-map-container">

                  </div>
                </div>
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
              <i onClick={() => {window.open("https://wa.me/60164223018")}} className="fab fa-whatsapp-square whatsapp-icon-size padding-1rem"></i>            
              <i className="fas fa-bars padding-1rem icon-size" onClick={() => (setModal(true))}></i>                         
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Header;