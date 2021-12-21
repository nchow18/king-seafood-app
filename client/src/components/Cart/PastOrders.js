import React, { useState } from 'react';

function PastOrders(props) {

  const {
    userData,
    pastOrderCart,
    setPastOrderModal
  } = props

  console.log(pastOrderCart);

  function checkPrice(index) {
    console.log(pastOrderCart.cart[index])

    var newPrice = '';

    if (pastOrderCart.cart[index].product_bulk_quantity !== 0 && pastOrderCart.cart[index].quantity >= pastOrderCart.cart[index].product_bulk_quantity) {
      newPrice = (pastOrderCart.cart[index].quantity * pastOrderCart.cart[index].product_bulk_price)
    } else {
      newPrice = pastOrderCart.cart[index].product_price;
    }

    return parseFloat(newPrice).toFixed(2);
  }

  return (
    <div className="past-cart-container" onClick={() => {setPastOrderModal(false)}}>
      <div className="past-cart-details">
        <div><b>Message:</b> {pastOrderCart.message}</div><br></br>
        <p>Cart Total: RM {pastOrderCart.user_cart_total}</p>    
        <div>Cart Items:</div>    
        {pastOrderCart.cart.map((past, index) => (
          <div className="past-orders-item">
            <p>{past.product_name}</p>
            <p>Qty: {past.quantity}</p>
            <p>RM {checkPrice(index)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PastOrders;