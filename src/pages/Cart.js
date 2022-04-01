import React, { useState } from 'react';

import CartItem from '../components/CartItem';

function Cart(props) {

  const {
    cart,
    setCart,
    siteSale
  } = props


  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <CartItem 
          cart={cart}
          setCart={setCart}
          siteSale={siteSale} 
          item={item}
          index={index}     />
      ))}
    </div>
    
  )
}

export default Cart;