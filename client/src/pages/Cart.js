import React from 'react';
import Auth from '../utils/auth';
import '../css/Cart.css';
import '../css/App.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../utils/mutations';
import { USER, PRODUCTS } from '../utils/queries';
import ViewProduct from '../components/Buttons/ViewProduct';

function Cart() {

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

  console.log(cartArr);

  if (dataR) {
    console.log(dataR.user.cart);
    console.log(data);
    console.log('ITEMS IN CART')
    for (var i = 0; i < user_data.cart.length; i++) {
      for (var t = 0; t < product_data.length; t++) {
        if (user_data.cart[i].product_id === product_data[t]._id) {
          cartArr.push(product_data[t])
          cartArr[i].quantity = product_data[t].product_price;
          cart_price.push(product_data[t].product_price);
        }
      }
    }
  } else {
    console.log('no user data');
  }
  
  const cart_total = cart_price.reduce((a,b) => a + b, 0);

  const removeProduct = async (id) => {
    try {
      removeCart({
        variables: {
          product_id: id
        }
      })
      alert('removed from cart')
    } catch (error) {
      console.log(error)
    }
  }

  Auth.getCartTotal(cart_total);

  return (
    <>
  	  <div className="cart-container">
        {user_cart.length && (
          <>
          <div className="cart-items-container">
            {user_cart.map((cart) => (
              <div key={cart.product_id} className="cart-row">
                <div>
                  <img className="cart-picture" alt={cart.product_id} src={cart.product_picture} />
                </div>
                <div className="cart-details-row">
                  <div className="cart-details">
                    <span><b>Order Details</b></span>
                    <span>{cart.product_name}</span>
                    <span>{cart.product_description}</span>
                  </div>
                  <div className="cart-details">
                    <div className="">
                      <span><b>Price</b></span>
                      <span>{cart.product_price} RM</span>
                    </div>
                    <div className="">
                      <span><b>Weight</b></span>
                      <span>{cart.product_weight}</span>
                    </div>
                  </div>
                  <div className="">
                    <span><b>Quantity</b></span>
                    <span>{cart.quantity}</span>
                  </div>
                  <div className="cart-buttons-row">
                    <ViewProduct product_id={cart._id} />
                    <div className="product-button" key={cart._id} onClick={() => {removeProduct(cart._id)}}>REMOVE</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          <div className="payment-column cart-row">
              <span><b>Cart Total: </b>{cart_total} RM</span>
          </div>
          </>
        )}
        {!user_cart.length && (
          <div className="flex-c-column">
            <b>Your cart is empty</b>
          </div>
        )}
      </div>
    </>
  )
}

export default Cart;