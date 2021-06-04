import React, { useState } from 'react';

function CheckoutDisplay(props) {

  const {
    setCheckOutModal,
    cart=[]
  } = props

const [formData, setFormData] = useState({
  first_name: '',
  last_name: '',
})

console.log(cart);

const payment = event => {
  console.log('processing payment');
}


  return (
    <>
      <div className="checkout-display-content">
        <i onClick={() => {setCheckOutModal(false)}} className="fas fa-times close-button"></i>        
        <div className="checkout-details-container">
          <p>DETAILS</p>

        </div>
        <div className="payment-container">
          <div onClick={payment} className="payment-button">SUBMIT ORDER</div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDisplay;