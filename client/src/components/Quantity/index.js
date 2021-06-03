import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CART } from '../../utils/mutations';

function Quantity(props) {

  const {
    product=[]
  } = props

  const [addCart, {error}] = useMutation(ADD_CART)
  const [formData, setFormData] = useState({
    quantity: 1,
  })

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  console.log(formData);

  const addToCart = async (data, quantity) => {
    if (Auth.loggedIn() === false) {
    //if NOT logged in, save to localStorage
    console.log(data)
    if (localStorage.getItem('guest_cart')) {
      const guest_cart = {product_id: data, quantity: parseInt(quantity)};
      const new_cart = JSON.parse(localStorage.getItem('guest_cart'));
      const cart = [...new_cart, guest_cart]
      return localStorage.setItem('guest_cart', JSON.stringify(cart));
    } else {
      const guest_cart = [{product_id: data, quantity: parseInt(quantity)}];
      return localStorage.setItem('guest_cart', JSON.stringify(guest_cart));
    }
  
    } else {
    // if logged in, save data to user cart
    try {
        addCart({ variables: {
        input: {
          product_id: data,
          quantity: 1,
        }
        }})
        alert('Added to cart');
        } catch (e) {
          console.log(e);
        }
      }
    }

  if (error) return '...ERROR';

  return (
    <>
      <span>Quantity: <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} /></span>
      <div className="product-button" key={product._id} onClick={() => { addToCart(product._id, formData.quantity) }}>ADD TO CART</div>
    </>
  )
}

export default Quantity;