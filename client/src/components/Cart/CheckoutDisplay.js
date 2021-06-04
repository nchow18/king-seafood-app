import React, { useState } from 'react';

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
  postal_code: ''
})

const handleInputChange = async (event) => {
  const { name, value} = event.target;
  setFormData({
    ...formData,
    [name]: value
  })
}

console.log(cart);

const payment = event => {
  console.log('processing payment');
}


  return (
    <>
      <div className="checkout-display-content">
        <i onClick={() => {setCheckOutModal(false)}} className="fas fa-times close-button"></i>        
        <div className="checkout-details-container">
          <input value={formData.first_name} onChange={handleInputChange} />

        </div>
        <div className="payment-container">
          <div onClick={payment} className="payment-button">SUBMIT ORDER</div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDisplay;