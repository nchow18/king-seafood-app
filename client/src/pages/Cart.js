import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CLEAR_CART } from '../utils/mutations';

function Cart(props) {

  const {
    cart,
    userData,
    setCart,
    setCartQty
  } = props

  const [clearCart] = useMutation(CLEAR_CART);

  const clearUserCart = async => {

    try {
      clearCart({
        variables: {
          user_id: userData._id
        }
      })
    } catch (e) {
      console.log(e);
    }

    console.log(userData.cart);
    setCart([])
    userData.cart = [];
    setCartQty(0)
    console.log(userData.cart);
    console.log(userData._id)

  }

  return (
    <div>
      <button onClick={() => {clearUserCart()}}>BUTTON</button>
    </div>
  )
}

export default Cart;