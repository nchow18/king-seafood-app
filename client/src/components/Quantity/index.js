import React, { useState, useContext } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import { useMutation } from '@apollo/react-hooks';
import { ADD_CART } from '../../utils/mutations';
import { UserContext } from '../../utils/GlobalState';

function Quantity(props) {

  const {
    product=[],
    user
  } = props

  const [state, dispatch] = useContext(UserContext)
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

  const addToCart = async (data, quantity) => {
    if (Auth.loggedIn() === false) {
    // IF data is stored in Local Storage

      const new_cart = JSON.parse(localStorage.getItem('guest_cart'));
    //if NOT logged in, save to localStorage
    if (new_cart.length > 0) {
      // Check for duplicate
      for (var t = 0; t < new_cart.length; t++) {
        if (data === new_cart[t].product_id) {
          alert('items already exists in your cart')
          return false;
        }
      }      
      const guest_cart = {product_id: data, quantity: parseInt(quantity)};

      console.log(new_cart[0].product_id);
      const cart = [...new_cart, guest_cart]

      alert('Product added to cart');
      // store CART length as quantity
      localStorage.setItem('guest_cart_quantity', JSON.stringify(cart.length))
      return localStorage.setItem('guest_cart', JSON.stringify(cart));
    } else {
      //IF data is NOT stored in local storage
      const guest_cart = [{product_id: data, quantity: parseInt(quantity)}];
      alert('Product added to cart');
      //update quantity to 1 product
      localStorage.setItem('guest_cart_quantity', JSON.stringify(1))
      return localStorage.setItem('guest_cart', JSON.stringify(guest_cart));
    }
    } else {
    // if logged in, save data to user cart
    // prevent duplicate product in cart
      for (var i = 0; i < user.userMe.cart.length; i++) {
        if (data === user.userMe.cart[i].product_id) {
          alert('This product exists in your cart!')
          return false;
        }
      }

    // if it doesn't exist in USER cart, add to user CART db
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
      <div className="quantity-button-container">
        <span>Quantity: <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} /></span>
        {product.product_status ? (
          <div className="product-button" key={product._id} onClick={() => { addToCart(product._id, formData.quantity); dispatch({ type: 'toggle_button' }) }}>ADD TO CART</div>
        ) : (
          <div className="product-button" key={product._id}>OUT OF STOCK</div>
        )}

      </div>
    </>
  )
}

export default Quantity;