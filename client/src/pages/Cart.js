import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER } from '../utils/mutations';

function Cart(props) {

  const {
    cart,
    userData,
    setCart,
    setCartQty
  } = props

  const [updateUser] = useMutation(UPDATE_USER);
  const [isOrder, setOrder] = useState(true);

  const clear_cart = async => {

    try {

      updateUser({
        variables: {
          input: {
              cart: []
          }
        }
      })
      
    } catch (e) {
      console.log(e);
    }

    setCart([])
    userData.cart = [];
    setCartQty(0)
  }

  console.log(cart);

  return (
    <div className="cart-container">
      <div className="cart-items-container">
        <div>
          <div className="font-face-bebas font-size-large">YOUR CART</div>
           {userData.cart.map((item) => (
              <div className="cart-item">
                <img alt={item.product_id} src={process.env.PUBLIC_URL + `./images/products/half_size/tn_${item.product_id}-1.jpg`} />
                <div className="cart-item-section-2">
                  <div className="cart-item-name">
                    {item.product_name}
                  </div>
                  <div className="cart-item-quantity">
                    {item.quantity}
                  </div>
                </div>
                
              </div>
           ))}
        </div>
      </div>
      <div className="cart-checkout-container">
        <div className={`checkout-tab ${isOrder === true && `opacity-08`}`} onClick={() => {setOrder(true)}}>
          CHECKOUT
        </div>
        <div className={`how-to-tab ${isOrder === false && `opacity-08`}`} onClick={() => {setOrder(false)}}>
          HOW TO ORDER
        </div>
        {isOrder ? (
          <div className="cart-checkout-content padding-1rem">
            CHECKOUT
          </div>
        ) : (
          <div className="cart-how-content padding-1rem">
            HOW TO ORDER
          </div> 
        )}
      </div>
    </div>
  )
}

export default Cart;