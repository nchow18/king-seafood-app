import React from 'react';

function Checkout(props) {

  const {
    cart=[]
  } = props

  console.log(cart);

  const checkout = async (event) => {
    console.log('checking out');
  }

  return (
    <>
      <div onClick={checkout} className="checkout-button">CHECKOUT</div>
    </>
  )
}

export default Checkout;