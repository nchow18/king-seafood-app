import React, { useState } from 'react';
import '../../css/WindowCart.css';
import { Linking } from 'react-native-web';
import FinalOrder from './FinalOrder';
import { Link } from 'react-router-dom';
import { USER_ME } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import Auth from '../../utils/auth';

function CheckoutDisplay(props) {

  // const {
  //   setCheckOutModal,
  //   cart=[],
  //   cart_total
  // } = props

  var firstName = '';
  var lastName = '';
  var address = '';
  var phone = '';

  if (Auth.loggedIn() === true) {
    //iF LOGGED IN, use USER data
    firstName= user_data.first_name;
    lastName = user_data.last_name;
    phone = user_data.phone;
  } else {
    //IF GUEST, use localstorage data
    if (localStorage.getItem('checkout_user_data') !== null) {
      const user_details = JSON.parse(localStorage.getItem('checkout_user_data'));
      console.log(user_details);
      firstName = user_details.first_name;
      lastName = user_details.last_name;
      address = user_details.address;
      phone = user_details.phone;
    }
  }

  const cart = JSON.parse(localStorage.getItem('new_cart'));
  const cart_total = JSON.parse(localStorage.getItem('cart_total'));
  const { loading, data } = useQuery(USER_ME)
  const user_data = data?.userMe || {};
  const [order, setOrder] = useState(true)
  const [currentForm, setFormType] = useState(false)
  const [formData, setFormData] = useState({
    first_name: firstName,
    last_name: lastName,
    address: address,
    message: '',
    delivery_date: '',
    phone: phone,
  })



  const today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
  const currentDate = today.toLocaleDateString("en-US", options);

  const handleInputChange = async (event) => {
    const { name, value} = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  var cart_message = '';

  for (var i = 0; i < cart.length; i++) {
    cart_message += "\n %0a ===== Item:"+[i+1]+"=====\n %0a *Item:* "+cart[i].product_name+", *Quantity:* "+cart[i].product_quantity+", *Price:* "+cart[i].total_price.toFixed(2)+" ";
  }

  const info = 
    '*First Name:* '+formData.first_name+
    ',\n %0a*Last Name:* '+formData.last_name+
    ',\n %0a*Phone:* '+formData.phone+
    ',\n %0a*Address:* '+formData.address+
    ',\n %0a*Message:* '+formData.message+
    ',\n %0a*Delivery Date:* '+formData.delivery_date;

  const message = info + cart_message + ',\n %0a*TOTAL PRICE:* ' + cart_total;

  const number = '60103893421'

  function sendMessage() {
    const confirm = window.confirm('Proceed to submit your order through Whatsapp?');

    if (confirm) {
      // // Check for perfect 10 digit length
      // if (formData.phone.length > 9) {
      //   alert('Please insert correct contact number');
      //   return;
      // }
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

      window.location.href = '/cart/finalorder'
      localStorage.setItem('checkout_user_data', JSON.stringify(formData))
    }
 
  }

  console.log(formData);

  return (
    <>
          <div className="checkout-display-content">
            <div className="checkout-details-container">
            <div className="checkout-buttons-row">
              <div onClick={() => {setFormType(false)}}>DELIVERY</div>
              <div onClick={() => {setFormType(true)}}>PICK-UP</div>
            </div>
            <input value={formData.first_name} name="first_name" placeholder="First Name" onChange={handleInputChange} />
            <input value={formData.last_name} name="last_name"placeholder="Last Name" onChange={handleInputChange} />
            <input value={formData.phone} name="phone" placeholder="Phone" onChange={handleInputChange} />
            {currentForm === false && (
              <>
              <input value={formData.address} name="address"placeholder="Full Address" onChange={handleInputChange} />
              <input type="date" value={formData.delivery_date} name="delivery_date" placeholder="Delivery Date (except Sundays and Public Holidays)" onChange={handleInputChange} />
              <span className="delivery-date">Delivery Date (except Sundays and Public Holidays)</span>
              </>
            )}
            <textarea value={formData.message} name="message" placeholder="Message" onChange={handleInputChange}></textarea>
            
          </div>
          {currentForm === false && (
            <div className="payment-container">
              <div to="/cart/finalorder" onClick={() => {sendMessage()}} disabled={!(formData.first_name && formData.last_name && formData.address && formData.delivery_date)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div>
          </div>
         
          )}
          {currentForm === true && (
            <div className="payment-container">
              {/* <div to="/cart/finalorder" onClick={() => {sendMessage()}} disabled={(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div> */}
              <div to="/cart/finalorder" onClick={() => {}} disabled={(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div>
          </div>          
          )}
          <div className="checkout-cart-details">
            <h1><b>Your Order Details:</b> {currentDate}</h1>
            {cart.map((cart) => (
              <div>
                <b>{cart.product_name}</b>
                {cart.new_quantity ? (
                  <span><b>Qty: </b>{cart.new_quantity}</span>
                ) : (
                  <span><b>Qty: </b>{cart.product_quantity}</span>
                )}

                <span><b>Price: RM </b>{cart.total_price.toFixed(2)}</span>
              </div>
            ))}
            <h1><b>Your Total: RM </b>{cart_total}</h1>
          </div>
          </div>        
    </>
  )
}

export default CheckoutDisplay;