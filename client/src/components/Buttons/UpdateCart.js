import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_CART } from '../../utils/mutations';
import Auth from '../../utils/auth';
import { UserContext } from '../../utils/GlobalState';

function UpdateCartButton(props) {

  const {
    product = [],
    updateMainCart,
    user_cart=[]
  } = props

  const [dispatch] = useContext(UserContext);
  const [updateCart, { error }] = useMutation(UPDATE_CART);
  const [formData, setFormData] = useState({
    quantity: product.product_quantity,
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const updateUserCart = async (id) => {

    if (Auth.loggedIn()) {
      const quantity = formData.quantity;
      const index = user_cart.findIndex((item) => item._id === id)
      var newCart = []
      newCart = [...user_cart]
      newCart[index].new_quantity = parseInt(formData.quantity);
      updateMainCart([...newCart])

      try {
        updateCart({
          variables: {
            quantity: parseInt(quantity),
            product_id: id,
          }
        })
        alert('Cart Quantity Updated')
      } catch (e) {
        console.log(e);
      }
    } else {
    // if NOT logged in (update localStorage Quantity)
      const local_cart = JSON.parse(localStorage.getItem('guest_cart'))
      //find index of matching local_cart.product_id and id
      for (var i = 0; i <  local_cart.length; i++) {
        if (local_cart[i].product_id === id) {
          local_cart[i].quantity = parseInt(formData.quantity);

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
        <input className="mobile-cart-quantity-input" type="number" value={formData.quantity} onChange={handleInputChange} placeholder={product.product_quantity} min="1" name="quantity" />
        <div className="mobile-cart-update" key={product._id} onClick={() => {updateUserCart(product._id); dispatch({ type: 'toggle_button' })}}>UPDATE</div>
      </div>
    </>
  )
}

export default UpdateCartButton;