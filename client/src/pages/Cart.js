import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CLEAR_CART } from '../utils/mutations';

function Cart(props) {

  const {
    cart,
    userData,
    setCart
  } = props

  const [clearCart] = useMutation(CLEAR_CART);

  const clearUserCart = async() => {

    try {
      clearCart({
        user_id: userData._id
      })
    } catch (e) {
      console.log(e);
    }
    console.log(userData);
  }

  console.log(userData);

  return (
    <div>
      <button onClick={() => {clearUserCart()}}>BUTTON</button>
    </div>
  )
}

export default Cart;