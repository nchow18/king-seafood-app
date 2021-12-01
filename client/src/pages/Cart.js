import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from '../utils/mutations';

function Cart(props) {

  const {
    cart,
    userData,
    setCart,
    setCartQty
  } = props

  const [updateUser] = useMutation(UPDATE_USER);

  console.log(cart);

  const clear_cart = async => {

    try {

      updateUser({
        variables: {
          input: {
              cart: []
          }
        }
      })
      
    } catch (e) {
      console.log(e);
    }

    setCart([])
    userData.cart = [];
    setCartQty(0)
  }

  return (
    <div>
      <button onClick={() => {clear_cart()}}>CLEAR CART</button>
    </div>
  )
}

export default Cart;