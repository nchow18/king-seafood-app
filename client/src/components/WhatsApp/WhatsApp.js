import React from 'react';
import '../../css/Whatsapp.css';

function WhatsApp() {


  function sendMessage() {
   window.confirm('Proceed to send message?');
  }

  return (
    <>
      <div className="whatsapp-container">
      <div className="triangle-right"></div>
        <b>WhatsApp</b>
        <input className="whatsapp-row" type="text" name="name" placeholder="Name"></input>
        <input className="whatsapp-row" type="tel" name="phone" placeholder="Phone Number"></input>
        <textarea className="whatsapp-row" name="body" placeholder="Message"></textarea>
        <div onClick={sendMessage} className="whatsapp-send">SEND</div>
      </div>
    </>
  )
}

export default WhatsApp;