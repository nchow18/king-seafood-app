import React, { useState } from 'react';
import { Linking } from 'react-native-web';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from '../../utils/mutations';

function CheckOut(props) {

  const {
    user_me,
    products,
    user_cart
  } = props


  const today = new Date();
  const [currentForm, setFormType] = useState(false)
  const [updateUserAddress, { error }] = useMutation(UPDATE_USER);
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
  const currentDate = today.toLocaleDateString("en-US", options);
  const [checkOut, setCheckOut]  = useState(false);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    message: '',
    delivery_date: '',
    phone: ''
  })

  const saveUserData = async (event) => {

  }

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  var cart_message = '';
  var cart_price = '';

  function cart_total() {
    var total = '';

    for (var i = 0; i < user_cart.length; i++) {
     var a = total;
     var b = user_cart[i].final_price;
     var z = +a + +b;
     total = z;
    }

    cart_price = total;

    return total;
  }

  for (var i = 0; i < user_cart.length; i++) {
    cart_message += "\n %0a ===== Item:"+[i+1]+"=====\n %0a *Item:* "+user_cart[i].product_name+", *Quantity:* "+user_cart[i].quantity+", *Price:* RM "+user_cart[i].final_price+" ";
  }

  const info = 
    '*First Name:* '+formData.first_name+
    ',\n %0a*Last Name:* '+formData.last_name+
    ',\n %0a*Phone:* '+formData.phone+
    ',\n %0a*Address:* '+formData.address+
    ',\n %0a*Message:* '+formData.message+
    ',\n %0a*Delivery Date:* '+formData.delivery_date;

  const message = info + cart_message + ',\n %0a*TOTAL PRICE:* RM ' + cart_total();

  const number = '60164223018'
  // const number = '60103893421'

  function sendMessage() {
    const confirm = window.confirm('Please confirm Whatsapp has opened to submit order OR screenshot order and submit directly on Whatsapp');

    // https://api.whatsapp.com/send?text=First%20Name:%20Grace,%20%0a*Last%20Name:*%20Jong,%20%0a*Phone:*%200103893421,%20%0a*Address:*%20205,%20Jalan%20Perak,%20%0a*Message:*%20After%205pm,%20%0a*Delivery%20Date:*%202021-08-13%20%0a%20=====%20Item:1=====%20%0a%20Item:%20Halibut%20Steak%20%E5%A4%A7%E6%AF%94%E7%9B%AE%E9%B1%BC%E6%8E%92%20454g,%20Quantity:%201,%20Price:%2022.96%20%20%0a%20=====%20Item:2=====%20%0a%20Item:%20Halibut%20Fillet%20%E5%A4%A7%E6%AF%94%E7%9B%AE%E9%B1%BC%E7%89%87%20%C2%B1150g/pc*,%20Quantity:%202,%20Price:%2015.15%20,%20%0a*TOTAL%20PRICE:*%2038.11&phone=+60164223018

    if (confirm) {
      // // Check for perfect 10 digit length
      // if (formData.phone.length > 9) {
      //   alert('Please insert correct contact number');
      //   return;
      // }
      // Using +1 for canada

      let url =
        'https://api.whatsapp.com/send?text=' + message + '&phone=+' + number;
      Linking.openURL(url)
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure Whatsapp installed on your device');
        });  

    }
 
  }

  if (error) return `... ERROR`;

  return (
    <div className="checkout-v2-container">
      {checkOut === false && (
        <button onClick={() => setCheckOut(true)}>CHECKOUT</button>
      )}

      {checkOut === true && (
        <div>
          <div>
            <button onClick={() => setCheckOut(false)}>CLOSE</button>
          </div>
          <div className="checkout-display-content">
            <div className="checkout-details-container">
            <div className="checkout-buttons-row">
              <div onClick={() => {setFormType(false)}}>DELIVERY</div>
              <div onClick={() => {setFormType(true)}}>PICK-UP</div>
            </div>
            <input value={formData.first_name} name="first_name" placeholder="First Name" onChange={handleInputChange} />
            <input value={formData.last_name} name="last_name" placeholder="Last Name" onChange={handleInputChange} />
            <input value={formData.phone} name="phone" placeholder="Phone" onChange={handleInputChange} />
            {currentForm === false && (
              <>
              <input value={formData.address} name="address" placeholder="Full Address" onChange={handleInputChange} />
              <input type="date" value={formData.delivery_date} name="delivery_date" placeholder="Delivery Date (except Sundays and Public Holidays)" onChange={handleInputChange} />
              <span className="delivery-date">Delivery Date (except Sundays and Public Holidays)</span>
              </>
            )}
            <textarea value={formData.message} name="message" placeholder="Message" onChange={handleInputChange}></textarea>
            
          </div>
          {currentForm === false && (
            <div className="payment-container">
              <div onClick={() => {sendMessage(); saveUserData()}} disabled={!(formData.first_name && formData.last_name && formData.address && formData.delivery_date && formData.phone)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div>
          </div>
         
          )}
          {currentForm === true && (
            <div className="payment-container">
              {/* <div to="/cart/finalorder" onClick={() => {sendMessage()}} disabled={(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div> */}
              <div to="/cart/finalorder" onClick={() => {sendMessage(); saveUserData()}} disabled={!(formData.first_name && formData.last_name)}  className="payment-button">SUBMIT ORDER WITH WHATSAPP</div>
          </div>          
          )}
          <div className="checkout-cart-details">
            <h1><b>Your Order Details:</b> {currentDate}</h1>
            {user_cart.map((cart) => (
              <div>
                <b>{cart.product_name}</b>
                {cart.new_quantity ? (
                  <span><b>Qty: </b>{cart.quantity}</span>
                ) : (
                  <span><b>Qty: </b>{cart.quantity}</span>
                )}

                <span><b>Price: RM </b>{cart.final_price}</span>
              </div>
            ))}
            <h1><b>Your Total: RM </b>{cart_total().toFixed(2)}</h1>
          </div>
          </div> 
        </div>
      )}
    </div>
  )
}

export default CheckOut;