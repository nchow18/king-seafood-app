import React, { useState, useContext, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_CART } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { UserContext } from '../../utils/GlobalState';

function UpdateCartButton(props) {

  const {
    product = [],
    updateMainCart,
    user_cart=[],
    setNewCount
  } = props

  const [count, setCount] = useState(product.product_quantity)
  const [state, dispatch] = useContext(UserContext);
  const [updateCart, { error }] = useMutation(UPDATE_CART);

  function decreaseCount() {
    if (count >= 2) {
      setCount((count) => count - 1);
    }
  }

  function increaseCount() {
      setCount((count) => count + 1);
  }

  useEffect(() => {
    console.log(`you clicked ${count} times`)

    addQuantity(product._id);

    dispatch({ type: 'toggle_button'})
    return () => {
    }
  }, [count])

  function addQuantity(id) {
    if (Auth.loggedIn() === true) {
      const index = user_cart.findIndex((item) => item._id === product._id)
      var newCart = []
      newCart = [...user_cart]
      newCart[index].new_quantity = count;
      updateMainCart([...newCart])

      try {
        updateCart({
          variables: {
            quantity: count,
            product_id: product._id,
          }
        })
      } catch (e) {
        console.log(e);
      }
    } else {
    // if NOT logged in (update localStorage Quantity)
      const local_cart = JSON.parse(localStorage.getItem('guest_cart'))
      //find index of matching local_cart.product_id and id
      for (var i = 0; i <  local_cart.length; i++) {
        if (local_cart[i].product_id === product._id) {
          local_cart[i].quantity = count;

          // remove and save new updated 'guest_cart' from localStorage
          localStorage.removeItem('guest_cart');
          return localStorage.setItem('guest_cart', JSON.stringify(local_cart))
        }
      }
    }
  }

  if (error) return `...ERROR`;

  return (
    <>
      <div className="mobile-cart-quantity">
        <div>Quantity</div>
        <div className="quantity-counter">
          <div onClick={() => {decreaseCount(); setNewCount(true)}}><i className="fas fa-minus"></i></div>
          <div>{count}</div>
          <div onClick={() => {increaseCount(); setNewCount(true)}}><i className="fas fa-plus"></i></div>
        </div>
        {/* <input className="mobile-cart-quantity-input" type="number" value={formData.quantity} onChange={handleInputChange} placeholder={product.product_quantity} min="1" name="quantity" /> */}
      </div>
    </>
  )
}

export default UpdateCartButton;