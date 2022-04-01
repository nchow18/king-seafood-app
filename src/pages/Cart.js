import React, { useState } from 'react';

function Cart(props) {

  const {
    cart,
    setCart
  } = props

  function checkPrice(item) {

  }

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <div key={item.name} className="cart-item-container">
          <img alt={item.name} src={process.env.PUBLIC_URL + `/products/${item.picture[0]}`} />
          <div>
            <li>{item.name}</li>
            <div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart;