import React from 'react';

function Checkout(props) {

  const {
    cart=[]
  } = props

  console.log(cart);

  return (
    <>
      <div className="checkout-button">CHECKOUT</div>
    </>
  )
}

export default Checkout;