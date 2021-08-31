import React, { useState } from 'react';
import CartListQuantity from './CartListQuantity';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';

function CartList(props) {
  const {
    user_me,
    products
  } = props

  const user_cart = user_me.cart;
  const [removeCart, { ERROR }] = useMutation(REMOVE_CART);

  const removeCartItem = async (index) => {
    alert('cart item removed')

    try {
      removeCart({
        variables: {
          product_id: user_cart[index].product_name
        }
      })
    } catch (e) {
      console.log(e)
    }

    user_cart.splice(index, 1);

  }

  var cart_price = '';

  function cart_total() {
    var total = '';

    for (var i = 0; i < user_cart.length; i++) {
     var a = total;
     var b = user_cart[i].final_price;
     var z = +a + +b;
     total = z;
    }

    cart_price = total;

    return total;
  }

  return (
    <div className="cart-list">
      <span>Your Cart: <b>RM {cart_total().toFixed(2)}</b></span>
      {user_cart.map((item, index) => (
        <div>
          <span>{item.product_name}</span>
          <CartListQuantity 
            item={item}
            user_cart={user_cart}
            index={index} />
          <span onClick={() => {removeCartItem(index)}} className="cart-delete">X</span>
        </div>
      ))}
    </div>
  )
}

export default CartList;