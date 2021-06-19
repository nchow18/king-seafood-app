import React from 'react';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { USER_ME } from '../../utils/queries';

function PastOrders() {

  const pastOrders = JSON.parse(localStorage.getItem('previous_orders'))
  const { loading, data } = useQuery(USER_ME);
  const user_old_cart = data?.userMe.pastOrders || {};
  const userCartArr = [];

  for (var i = 0; i < user_old_cart.length; i++) {
    const cart = user_old_cart[i];
    const cartParse = JSON.parse(cart)
    userCartArr.push(cartParse[0]);
  }

  if (loading) return `...LOADING`;

  return (
    <div className="past-orders-section">
      <h3>Your Past Orders</h3>      
      {Auth.loggedIn() ? (
        <>
        {userCartArr !== false ? (
          <div>
            {userCartArr.reverse().map((item, index) => (
              <div>
                <span><b>Date Ordered: </b>{item.date}</span>
                <div className="past-orders-item">
                  {item.cart.map((cart, index) => (
                    <div>
                      <span><b>{index + 1}. </b>{cart.product_name}</span>
                      <span><b>Qty: </b>{cart.new_quantity}</span>
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
          <h5>You have no past orders</h5>
        )}
        </>      
      )}
    </div>
  )
}

export default PastOrders;