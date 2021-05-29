import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/MobileCart.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import { USER, PRODUCTS } from '../../utils/queries';
import ViewProduct from '../../components/Buttons/ViewProduct';
import UpdateCartButton from '../../components/Buttons/UpdateCart';

function MobileCart() {

  const profileData = Auth.getProfile();
  const user_id = profileData.data._id;
 
  const [removeCart, { error }] = useMutation(REMOVE_CART);
  const {data: dataR} = useQuery(USER, { variables: { user_id: user_id }});
  const {loading, data} = useQuery(PRODUCTS);

  if (loading) return `...Loading`;

  const user_data = dataR?.user || {};
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


  console.log(user_cart);
  console.log(dataR);
  
  const cart_total = cart_price.reduce((a,b) => a + b, 0);

  if (error) return `...ERROR`;

  Auth.getCartTotal(cart_total);
  return (
    <> 
    {Auth.loggedIn() ? (
      <>
      {user_data.cart.length === 0 && (
        <div className="mobile-cart-container to-night">You have <b>0</b> items in your cart</div>
      )}
      {user_data.cart.length >= 1 && (
        <div className="mobile-cart-container to-night">
          <div className="mobile-cart-items-container to-night">
            PRODUCTS
            {user_cart.map((product) => (
              <div className="mobile-cart-product-row">
                <img className="mobile-cart-product-img" alt={product.product_name} src={product.product_picture} />
                <div className="mobile-cart-product-details">
                  <div>
                    <b>{product.product_name}</b>
                    <p>{product.total_price}</p>
                  </div>
                  <div key={product._id} onClick={() => {removeProduct(product._id)}} className="mobile-cart-remove-button">REMOVE</div>
                </div>
                <UpdateCartButton product={product} />
              </div>
            ))}

          </div>
          <div className="mobile-cart-checkout-container">
            <div className="checkout-button">CHECKOUT</div>
            <div className="checkout-disclaimer">Checkout with SWIPE</div>
          </div>
        </div>
      )}
      </>
    ) : (
      <h1 className="mobile-cart-container night-bg">You are not logged-in</h1>
    )}


    </>
  )
}

export default MobileCart;