import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import { USER_ME, PRODUCTS } from '../../utils/queries';
import ViewProduct from '../../components/Buttons/ViewProduct';
import UpdateCartButton from '../../components/Buttons/UpdateCart';
import Checkout from '../Buttons/Checkout';
import CheckoutDisplay from '../Cart/CheckoutDisplay';

function WindowCart() {

  const [removeCart, { error }] = useMutation(REMOVE_CART);
  const {data: dataR} = useQuery(USER_ME);
  const {loading, data} = useQuery(PRODUCTS);

  if (loading) return `...Loading`;

  const user_data = dataR?.userMe || {};
  const product_data = data?.products || {};
  const cartArr = [];
  const user_cart = cartArr;
  const cart_price = [];

  const removeProduct = async (id) => {
    try {
      removeCart({
        variables: {
          product_id: id
        }
      })
      alert('removed from cart');
      return;
    } catch (e) {
      console.log(e)
    }
  }
if (user_data.cart) {
  if (user_data.cart.length === 0) {
    console.log('there are no items in your cart')
  } else {
    console.log('there are items in your cart')
    for (var i = 0; i < user_data.cart.length; i++) {
      console.log('starting checking')

      var checkExisting = product_data.filter(function (item) {
        return item._id === user_data.cart[i].product_id;
      })

      if (checkExisting.length === 0) {
        console.log('items in your cart have non-existing products');
        console.log(user_data.cart[i].product_id)
        try {
          removeCart({
            variables: {
              product_id: user_data.cart[i].product_id
            }
          })
          console.log('removed from cart');
        } catch (e) {
          console.log(e)
        }
      } else {
        console.log('your cart products still exist in the database');
      }

      for (var t = 0; t < product_data.length; t++) {
        console.log('adding product to cart');
        if (user_data.cart[i].product_id === product_data[t]._id) {
          cartArr.push(product_data[t])
          cartArr[i].quantity = user_data.cart[i].quantity;
          cartArr[i].total_price = (product_data[t].product_price * user_data.cart[i].quantity);
          cart_price.push(product_data[t].product_price);
        }
      }
    }
  }  
}

  const cart_total = cart_price.reduce((a,b) => a + b, 0);
  Auth.getCartTotal(cart_total);

  if (error) return `...ERROR`;

  return (
    <div className="window-cart-content">
      <div className="border">
      {dataR ? (
      <>
      {user_data.cart.length === 0 && (
        <b>You have <u>0</u> products in your cart</b>
      )}
      {user_data.cart.length >= 1 && (
        <div className="window-cart-column to-night">
          <div className="window-cart-items-container to-night">
            <b>Your Cart</b>
            {user_cart.map((product) => (
              <div key={product._id} className="window-cart-product-row">
                <img className="window-cart-product-img" alt={product.product_name} src={product.product_picture} />
                <div className="window-cart-product-details">
                  <div className="window-cart-product-text">
                    <b>{product.product_name}</b>
                    <p>{product.total_price}</p>
                  </div>
                  <div key={product._id} onClick={() => {removeProduct(product._id)}} className="mobile-cart-remove-button">REMOVE</div>
                </div>
                <UpdateCartButton product={product} />
              </div>
            ))}

          </div>
          <input type="checkbox" id="window-checkout-display" />
          <div className="window-display-container">
            <label htmlFor="window-checkout-display"><i className="fas fa-times checkout-x-icon"></i></label>
            <CheckoutDisplay />
          </div>
          <div className="window-cart-checkout-container">
            <label htmlFor="window-checkout-display">
              <Checkout cart={user_cart} />
            </label>
            <div className="checkout-disclaimer">Checkout with SWIPE</div>
          </div>
        </div>
      )}
      </>
    ) : (
      <h1 className="mobile-cart-container night-bg">You are not logged-in</h1>
    )}
      </div>
    </div>
  )
}

export default WindowCart;