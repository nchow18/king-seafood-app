import React, { useState } from 'react';

function PastOrders(props) {

  const {
    userData,
    pastOrderCart,
    setPastOrderModal
  } = props

  console.log(pastOrderCart);

  return (
    <div className="past-cart-container" onClick={() => {setPastOrderModal(false)}}>
      <div className="past-cart-details">
        <div><b>Message:</b> {pastOrderCart.message}</div><br></br>
        <div>Cart Items:</div>
        <p>Cart Total: RM {pastOrderCart.user_cart_total}</p>        
        {pastOrderCart.cart.map((past) => (
          <div className="past-orders-item">
            <p>{past.product_name}</p>
            <p>Qty: {past.quantity}</p>
            <p>RM {past.product_price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastOrders;