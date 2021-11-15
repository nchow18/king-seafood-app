import React from 'react';
import Auth from '../../utils/auth';

function PastOrders(props) {

const {
  pastOrders
 } = props

console.log(pastOrders);

const past_orders = [].concat(pastOrders).reverse();

console.log(past_orders);

  return (
    <div className="past-orders-section">
      <h3>Your Past Orders (Newest to Oldest)</h3>      
      {Auth.loggedIn() ? (
        <>
        {pastOrders !== false ? (
          <div>
            {past_orders.map((item, index) => (
              <div>
                <span><b>Date Ordered: </b>{item.date}</span>
                <div className="past-orders-item">
                  {item.cart.map((cart, index) => (
                    <div>
                      <span><b>{index + 1}. </b>{cart.product_name}</span>
                      <span><b>Qty: </b>{cart.quantity}</span>
                      <span><b>Price: </b>RM {cart.final_price}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span><b>Cart Total: </b>RM {item.user_cart_total}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h5>You have no past orders</h5>
        )}        
        </>
      ) : (
        <>
        {pastOrders !== 'empty' ? (
          <div>
            {pastOrders.reverse().map((item, index) => (
              <div>
                <span><b>Date Ordered: </b>{item.date}</span>                
                <div className="past-orders-item">
                  {item.cart.map((cart, index) => (
                    <div>
                      <span><b>{index + 1}. </b>{cart.product_name}</span>
                      <span><b>Qty: </b>{cart.product_quantity}</span>
                      <span><b>Price: </b>RM {cart.final_price}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span><b>Cart Total: </b>RM {item.user_cart_total}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h5>You have no past orders</h5>
        )}
        </>      
      )}
    </div>
  )
}

export default PastOrders;