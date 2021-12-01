import React from 'react';

function Footer(props) {

  const {
    promoData
  } = props

  return (
    <div className="footer-container">
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
      </div>
    <div className="menu-map-container">
      <div className="menu-map">
            <iframe title="map" className="king-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.041964443941!2d100.31403875172646!3d5.410579936576945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3b801b3cb3f%3A0x461457f2a8d2bd!2s205%2C%20Jln%20Perak%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang%2C%20Malaysia!5e0!3m2!1sen!2sca!4v1622922167047!5m2!1sen!2sca" width="auto" height="auto" style={{border:0}} aria-hidden="false"></iframe>                      
          </div>
      </div>
  </div>
)
}

export default Footer;