import React from 'react';
import '../../css/About.css';

function AboutSection(props) {

  const {
    promo
  } = props

  return (
    <>
      <div className="about-container">
        <div className="about-left-container">
          <span className="about-title"><b>Address</b></span>
          <span className="about-us-small">{promo[0].address}</span>
          <span className="about-title"><b>Operating Hours</b></span>
          <span className="about-us-small">10:00AM - 5:30PM (Closed on Sundays & Public Holidays)</span>
          <span className="about-title"><b>Contact Us</b></span>
          <span className="about-us-small">{promo[0].contact_us_1}</span>
          <span className="about-us-small">{promo[0].contact_us_2}</span>
          <span className="about-title"><b>Follow Us</b></span>
          <div className="row">
              <div className="row">
                <div onClick={() => {window.open("https://www.facebook.com/kingsseafood18/")}}><i className="fab fa-facebook about-icon"></i></div>
                <span className="about-us-small">@kingsseafood18</span>
              </div>
              <div className="row">
                <div onClick={() => {window.open("https://instagram.com/kingsseafood18?utm_medium=copy_link")}}><i className="fab fa-instagram about-icon"></i></div>
                <span className="about-us-small">@kingsseafood18</span>
              </div>
          </div>
        </div>        
        <div className="about-right-container">

          <iframe title="map" className="king-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.041964443941!2d100.31403875172646!3d5.410579936576945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3b801b3cb3f%3A0x461457f2a8d2bd!2s205%2C%20Jln%20Perak%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang%2C%20Malaysia!5e0!3m2!1sen!2sca!4v1622922167047!5m2!1sen!2sca" width="600" height="450" style={{border:0}} aria-hidden="false"></iframe>
        </div>
      </div>
    </>
  )
}

export default AboutSection;