import React, { useState } from 'react';
import '../../css/Orders.css';

function AdminOrderDetails( props) {

  const [details, viewDetails] = useState(false);

  const {
    order
  } = props

  return (
    <>
      {details ? (
        <div className="order-details-comp">
          <div className="order-view-button" onClick={() => viewDetails(false)}>Hide Details</div>
          <div className="order-cart-details-container">
            {order.new_cart.map((cart) => (
              <div>
                <span><b>Product:</b> {cart.product_name}</span>
                <span><b>Qty:</b> {cart.quantity}</span>
                <span><b>Price:</b> {cart.final_price}</span>
              </div>
            ))}
          </div>                      
        </div>
      ) : (
        <div className="order-details-comp">
          <div className="order-view-button" onClick={() => viewDetails(true)}>View Order Details</div>
        </div>
      )}    
    </>
  )
}

export default AdminOrderDetails;