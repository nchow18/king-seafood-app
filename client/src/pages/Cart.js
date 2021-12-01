import React, { useState, useEffect } from 'react';

function Cart(props) {

  const {
    cart,
    userData,
    setCart
  } = props

  console.log(cart);
  console.log(userData);

  return (
    <div>
      Cart
    </div>
  )
}

export default Cart;