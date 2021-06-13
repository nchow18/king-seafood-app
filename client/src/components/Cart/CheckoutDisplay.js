import React, { useState } from 'react';
import '../../css/WindowCart.css';
import { Linking } from 'react-native-web';
import FinalOrder from './FinalOrder';

function CheckoutDisplay(props) {

  const {
    setCheckOutModal,
    cart=[],
    cart_total
  } = props

  const [order, setOrder] = useState(true)
  const [currentForm, setFormType] = useState(false)
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    address: '',
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

  var cart_message = '';

  for (var i = 0; i < cart.length; i++) {
    cart_message += "\n %0a ===== Item:"+[i+1]+"=====\n %0a *Item:* "+cart[i].product_name+", *Quantity:* "+cart[i].product_quantity+", *Price:* "+cart[i].total_price+" ";
  }

  const info = 
    '*First Name:* '+formData.first_name+
    ',\n %0a*Last Name:* '+formData.last_name+
    ',\n %0a*Phone:* '+formData.phone+
    ',\n %0a*Address:* '+formData.address+
    ',\n %0a*Message:* '+formData.message+
    ',\n %0a*Delivery Date:* '+formData.delivery_date;

  const message = info + cart_message + ',\n %0a*TOTAL PRICE:* ' +cart_total;

  const number = '60103893421'

  function sendMessage() {
    window.confirm('Proceed to submit your order through Whatsapp?');
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
  }

  function sendMessageOnline() {
    window.confirm('Proceed to submit order online?')
    let url = 'https://wa.me/' + number + '/?text=' + message;
    Linking.openURL(url)
    .then((data) => {
      console.log('WhatsApp Web Opened');
    })
    .catch(() => {
      alert('Error with browser');
    })
  }

  return (
    <>

        <i onClick={() => {setCheckOutModal(false)}} className="fas fa-times close-button"></i> 
        {order ? (
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
              <input value={formData.delivery_date} name="delivery_date" placeholder="Delivery Date (except Sundays and Public Holidays)" onChange={handleInputChange} />
              </>
            )}
            <textarea value={formData.message} name="message" placeholder="Message" onChange={handleInputChange}></textarea>
            
          </div>
          {currentForm === false && (
            <div className="payment-container">
              <button onClick={() => {sendMessage(); setOrder(false)}} disabled={!(formData.first_name && formData.last_name && formData.address && formData.delivery_date)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</button>
            <button onClick={() => {sendMessageOnline(); setOrder(false)}} disabled={!(formData.first_name && formData.last_name && formData.address && formData.delivery_date)}  className="payment-button">SUBMIT ORDER ONLINE</button>
          </div>
         
          )}
          {currentForm === true && (
            <div className="payment-container">
              <button onClick={() => {sendMessage(); setOrder(false)}} disabled={!(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</button>
              <button onClick={() => {sendMessageOnline(); setOrder(false)}} disabled={!(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER ONLINE</button>
          </div>          
          )}
          <div className="checkout-cart-details">
            <h1>Your Order Details:</h1>
            {cart.map((cart) => (
              <div>
                <b>{cart.product_name}</b>
                <span><b>Qty: </b>{cart.product_quantity}</span>
                <span><b>Price: RM </b>{cart.total_price.toFixed(2)}</span>
              </div>
            ))}
            <h1><b>Your Total: RM </b>{cart_total.toFixed(2)}</h1>
          </div>
          </div>        
        ) : (
          <div className="checkout-display-content">
            <FinalOrder 
              cart={cart}
              cart_total={cart_total}
              order={order}
              formData={formData}
            />
          </div>
        )}



    </>
  )
}

export default CheckoutDisplay;