import React, { useState, useEffect } from 'react';
import CartListQuantity from './CartListQuantity';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';

function CartList(props) {
  const {
    user_me,
    products,
    promotions
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

  function cart_total() {
    var total = '';

    for (var i = 0; i < user_cart.length; i++) {
     var a = total;
     var b = user_cart[i].final_price;
     var z = +a + +b;
     total = z.toFixed(2);
    }
    return total;
  }

  const cart_price = cart_total();
  const [currentCartTotal, setCartTotal] = useState(cart_price);

  console.log(currentCartTotal);

  return (
    <div className="cart-list">
      <span>Your Cart: <b>RM {currentCartTotal}</b></span>
      {user_cart.map((item, index) => (
        <div>
          <span>{item.product_name}</span>
          <CartListQuantity 
            item={item}
            user_cart={user_cart}
            index={index}
            currentCartTotal={currentCartTotal}
            setCartTotal={setCartTotal}
            promotions={promotions} />
          <span onClick={() => {removeCartItem(index)}} className="cart-delete">X</span>
        </div>
      ))}
    </div>
  )
}

export default CartList;