import React from 'react';
import '../css/main.css';

function Footer() {

  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-title">
          Address
        </div>
        <div className="footer-details">
          205, Jalan Perak, 11600 Jelutong, Penang, Malaysia  
        </div>
        <div className="footer-title">
          Operating Hours
        </div>
        <div className="footer-details">
          10:00AM - 5:30PM (Closed on Sundays & Public Holidays)
        </div>        
        <div className="footer-title">
         Contact Us
        </div>
        <div className="footer-details">
          Joey 011-11264018
        </div>
        <div className="footer-details">
          Kelvin 016-4849744
        </div>        
        <div className="footer-title">
          Follow Us
        </div>  
        <div className="footer-details">

        </div>                              
      </div>
      <div className="footer-right">
        <iframe title="map" className="king-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.041964443941!2d100.31403875172646!3d5.410579936576945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3b801b3cb3f%3A0x461457f2a8d2bd!2s205%2C%20Jln%20Perak%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang%2C%20Malaysia!5e0!3m2!1sen!2sca!4v1622922167047!5m2!1sen!2sca" width="auto" height="auto" aria-hidden="false"></iframe>      
      </div>
    </div>
  )
}

export default Footer;