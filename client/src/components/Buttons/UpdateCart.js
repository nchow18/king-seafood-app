import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_CART } from '../../utils/mutations';
import Auth from '../../utils/auth';

function UpdateCartButton(props) {

  const {
    product = []
  } = props

  const [updateCart, { error }] = useMutation(UPDATE_CART);
  const [formData, setFormData] = useState({
    quantity: '',
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
    }
    // if NOT logged in (update localStorage Quantity)

  }

  if (error) return `...ERROR`;

  return (
    <>
      <div className="mobile-cart-quantity">
        <div>Quantity</div>
        <input className="mobile-cart-quantity-input" type="number" value={formData.quantity} onChange={handleInputChange} placeholder={product.product_quantity} min="1" name="quantity" />
        <div className="mobile-cart-update" key={product._id} onClick={() => {updateUserCart(product._id)}}>UPDATE</div>
      </div>
    </>
  )
}

export default UpdateCartButton;