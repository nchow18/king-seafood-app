import React, { useState } from 'react';
import '../../css/WindowCart.css';
import { Linking } from 'react-native-web';

function CheckoutDisplay(props) {

  const {
    setCheckOutModal,
    cart=[]
  } = props

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    street_number: '',
    street_name: '',
    state: '',
    region: '',
    city: '',
    postal_code: '',
    message: '',
    delivery_date: '',
    phone: '',
  })

  const handleInputChange = async (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  console.log(cart);

  var cart_message = '';

  for (var i = 0; i < cart.length; i++) {
    cart_message += "\n %0a ===== Item:"+[i+1]+"====="+"\n %0a *Item:* "+cart[i].product_name+", *Quantity:* "+cart[i].quantity+", *Price:* "+cart[i].total_price+" ";
  }

  const info = 
    '*First Name:* '+formData.first_name+
    ',\n %0a*Last Name:* '+formData.last_name+
    ',\n %0a*Phone:* '+formData.phone+
    ',\n %0a*Street Number:* '+formData.street_number+
    ',\n %0a*Street Name:* '+formData.street_name+
    ',\n %0a*State:* '+formData.state+
    ',\n %0a*Region:* '+formData.region+
    ',\n %0a*City:* '+formData.city+
    ',\n %0a*Postal Code:* '+formData.postal_code+
    ',\n %0a*Message:* '+formData.message+
    ',\n %0a*Delivery Date:* '+formData.delivery_date;

  const message = info + cart_message;

  const number = '60103893421'

  function sendMessage() {
    window.confirm('Proceed to send message?');

    // Check for perfect 10 digit length
    if (formData.phone.length >= 9) {
      alert('Please insert correct contact number');
      return;
    }
    // Using +1 for canada
    let url =
      'whatsapp://send?text=' + message + '&phone=+' + number;
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
      <div className="checkout-display-content">
        <i onClick={() => {setCheckOutModal(false)}} className="fas fa-times close-button"></i>        
        <div className="checkout-details-container">
          <input value={formData.first_name} name="first_name" placeholder="First Name" onChange={handleInputChange} />
          <input value={formData.last_name} name="last_name"placeholder="Last Name" onChange={handleInputChange} />
          <input value={formData.phone} name="phone" placeholder="Phone" onChange={handleInputChange} />
          <input value={formData.street_number} name="street_number"placeholder="Street Number" onChange={handleInputChange} />
          <input value={formData.street_name} name="street_name"placeholder="Street Name" onChange={handleInputChange} />
          <input value={formData.state} name="state" placeholder="State" onChange={handleInputChange} />
          <input value={formData.region} name="region" placeholder="Region" onChange={handleInputChange} />
          <input value={formData.city} name="city" placeholder="City" onChange={handleInputChange} />
          <input value={formData.postal_code} name="postal_code" placeholder="Postal Code" onChange={handleInputChange} />
          <input value={formData.delivery_date} name="delivery_date" placeholder="Delivery Date" onChange={handleInputChange} />
          <textarea value={formData.message} name="message" placeholder="Message" onChange={handleInputChange}></textarea>

        </div>
        <div className="payment-container">
          <div onClick={() => {sendMessage()}} className="payment-button">SUBMIT ORDER</div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDisplay;