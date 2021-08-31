import React, { useState } from 'react';

function CartList(props) {
  const {
    user_me,
    products
  } = props

  const user_cart = user_me.cart;

  return (
    <div className="cart-list">
      Cart list
      {user_cart.map((item) => (
        <span>{item.product_name}</span>
      ))}
    </div>
  )
}

export default CartList;