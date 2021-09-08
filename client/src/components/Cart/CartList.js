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
  const [cart, updateCart] = useState(0)
  var cart_price = '';

  
  useEffect(() => {

    calcTotal();

  }, [cart]);

  function updateCartTotal() {
    updateCart(cart + 1);
  }

  function calcTotal() {

    console.log('updating cart total')

    var total = '';

    for (var i = 0; i < user_cart.length; i++) {
      var a = total;
      var b = user_cart[i].final_price;
      var z = +a + +b;
      total = z.toFixed(2);
    }
    cart_price = total;
    return total;
  }

  console.log(cart_price);

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



  return (
    <div className="cart-list">
      <span>Your Cart: <b>RM {calcTotal()}</b> <button onClick={() => {updateCartTotal()}}>Update Total</button></span>
      {user_cart.map((item, index) => (
        <div>
          <span>{item.product_name}</span>
          <CartListQuantity 
            item={item}
            user_cart={user_cart}
            index={index}
            updateCartTotal={updateCartTotal}
            promotions={promotions} />
          <span onClick={() => {removeCartItem(index)}} className="cart-delete">X</span>
        </div>
      ))}
    </div>
  )
}

export default CartList;