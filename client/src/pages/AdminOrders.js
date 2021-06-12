import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ORDERS } from '../utils/queries';
import { REMOVE_ORDER } from '../utils/mutations';
import '../css/Orders.css';

function AdminOrders() {

    const [removeOrder] = useMutation(REMOVE_ORDER)
    const [details, viewDetails] = useState(false);
    const {loading, data} = useQuery(ORDERS);
    const orders = data?.orders || {};
    const [ordersArray] = useState(orders);
    const [currentOrders, updateOrders] = useState(ordersArray)

    const deleteOrder = async (id) => {

      const index = orders.findIndex((order) => order._id === id)
      orders.splice(index, 1);
      updateOrders([...orders])
      try {
        removeOrder({
          variables: {
            order_id: id
          }
        })
      } catch (e) {
        console.log(e)
      }
    }

    for (var i = 0; i < orders.length; i++) {
      const cart = JSON.parse(orders[i].cart)
      orders[i].new_cart = cart
    }

    const newest_orders = [].concat(orders).reverse();

    if (loading) return `...Loading`;

    return (
        <>
        {orders && (
            <div className="order-page">
            {newest_orders.map((order) => (
                <div className="order-container">
                  <div className="order-view-button" onClick={() => {deleteOrder(order._id)}}>REMOVE ORDER</div>               
                  <span><b>Order ID:</b> {order._id}</span>
                  <span><b>Order Date:</b> {order.createdAt}</span>
                  <span><b>Delivery Date:</b> {order.delivery_date}</span>
                  <span><b>Name:</b> {order.name}</span>
                  <span><b>Phone:</b> {order.phone}</span>
                  <span><b>Address:</b> {order.address}</span>
                  <span><b>TOTAL:</b> {order.orderTotal}</span>
                  {details ? (
                    <div className="order-details-comp">
                      <div className="order-view-button" onClick={() => viewDetails(false)}>Hide Details</div>
                      <div className="order-cart-details-container">
                        {order.new_cart.map((cart) => (
                          <div>
                            <span><b>Product:</b> {cart.product_name}</span>
                            <span><b>Qty:</b> {cart.quantity}</span>
                            <span><b>Price:</b> {cart.total_price}</span>
                          </div>
                        ))}
                      </div>                      
                    </div>
                  ) : (
                    <div className="order-details-comp">
                      <div className="order-view-button" onClick={() => viewDetails(true)}>View Order Details</div>
                    </div>
                  )}
                </div>
            ))}
        </div>
        )}

        </>
    )
}

export default AdminOrders;