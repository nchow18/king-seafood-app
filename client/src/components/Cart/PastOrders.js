import React from 'react';
import Auth from '../../utils/auth';

function PastOrders() {

  const pastOrders = JSON.parse(localStorage.getItem('previous_orders'))

  console.log(pastOrders[0].cart[0])

  return (
    <div className="past-orders-section">
      {Auth.loggedIn() ? (
        <>
        {pastOrders !== 'empty' ? (
          <div>
            {pastOrders.reverse().map((item, index) => (
              <div>
                <div className="past-orders-item">
                  {item.cart.map((cart, index) => (
                    <div>
                      <span><b>{index + 1}. </b>{cart.product_name}</span>
                      <span><b>Qty: </b>{cart.product_quantity}</span>
                      <span><b>Price: </b>RM {cart.total_price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span><b>Cart Total: </b>RM {item.cart_total}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>You have no past orders</h2>
        )}        
        </>
      ) : (
        <>
        {pastOrders !== 'empty' ? (
          <div>
            {pastOrders.reverse().map((item, index) => (
              <div>
                <div className="past-orders-item">
                  {item.cart.map((cart, index) => (
                    <div>
                      <span><b>{index + 1}. </b>{cart.product_name}</span>
                      <span><b>Qty: </b>{cart.product_quantity}</span>
                      <span><b>Price: </b>RM {cart.total_price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span><b>Cart Total: </b>RM {item.cart_total}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h2>You have no past orders</h2>
        )}
        </>      
      )}
    </div>
  )
}

export default PastOrders;