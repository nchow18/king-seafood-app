import React from 'react';

function CheckoutDisplay() {

const payment = event => {
  console.log('processing payment');
}


  return (
    <>
      <div className="checkout-display-content">
        <div className="checkout-details-container">
          <p>DETAILS</p>

        </div>
        <div className="payment-container">
          <div onClick={payment} className="payment-button">PAY NOW</div>
        </div>
      </div>
    </>
  )
}

export default CheckoutDisplay;