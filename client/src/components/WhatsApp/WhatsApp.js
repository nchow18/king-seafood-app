import React, { useState } from 'react';
import '../../css/Whatsapp.css';
import { Linking } from 'react-native-web';

function WhatsApp() {

  const [ formData, setFormData ] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const message = formData.name + " || " + formData.phone + " || " + formData.message;
  const number = '6472986836'

  console.log(formData);
  
  function sendMessage() {
   window.confirm('Proceed to send message?');

    // Check for perfect 10 digit length
    if (formData.phone.length !== 10) {
      alert('Please insert correct contact number');
      return;
    }
    // Using 91 for India
    // You can change 91 with your country code
    let url =
      'whatsapp://send?text=' + message + '&phone=+1' + number;
    Linking.openURL(url)
      .then((data) => {
        console.log('WhatsApp Opened');
      })
      .catch(() => {
        alert('Make sure Whatsapp installed on your device');
      });

  }

  return (
    <>
      <div className="whatsapp-container">
      <div className="triangle-right"></div>
        <b>WhatsApp</b>
        <input className="whatsapp-row" value={formData.name} onChange={handleInputChange} type="text" name="name" placeholder="Name"></input>
        <input className="whatsapp-row" value={formData.phone} onChange={handleInputChange} type="tel" name="phone" placeholder="Phone Number"></input>
        <textarea className="whatsapp-row" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message"></textarea>
        <div onClick={sendMessage} className="whatsapp-send">SEND</div>
      </div>
    </>
  )
}

export default WhatsApp;