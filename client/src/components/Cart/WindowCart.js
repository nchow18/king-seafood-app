import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import MoreInfo from './MoreInfo';
import { Link } from 'react-router-dom';
import PastOrders from './PastOrders';
import CartList from './CartList';

function WindowCart(props) {

  const {
    products,
    user_me,
    setPastOrders,
  } = props

  const [removeCart, { error }] = useMutation(REMOVE_CART);

  const removeProduct = async (id) => {

    if (Auth.loggedIn() === true) {
      alert('product removed')
    }
  }

  return (
    <div className="window-cart-content">
      <span onClick={() => {setPastOrders(true)}} className="past-orders-button">Past Orders</span>
      {user_me.cart.length > 0 ? (
          <div className="window-cart-column">
            <CartList
              user_me={user_me}
              products={products} />      
            <div className="more-info-container">
              <MoreInfo />
            </div>
          </div>        
        ) : (
          <div className="empty-cart-display">
            <div className="empty-cart-content">
              <h1>Please fill your Cart</h1>
              <div className="more-info-container">
                <MoreInfo />
              </div>

              <div className="past-orders-container">
                <PastOrders />
              </div>              
            </div>
          </div>
        )}               
    </div>
  )
}

export default WindowCart;