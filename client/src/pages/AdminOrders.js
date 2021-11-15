import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ORDERS } from '../utils/queries';
import { REMOVE_ORDER } from '../utils/mutations';
import AdminOrderDetails from '../components/AdminComponents/AdminOrderDetails';
import '../css/Orders.css';

function AdminOrders() {

    const [removeOrder] = useMutation(REMOVE_ORDER)

    const {loading, data} = useQuery(ORDERS);
    const orders = data?.orders || {};
    const [ordersArray] = useState(orders);
    const [currentOrders, updateOrders] = useState(ordersArray)

    console.log(orders);

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
                    <span><b>Order Date:</b> {order.order_date}</span>
                    <span><b>Delivery Date:</b> {order.delivery_date}</span>
                    <span><b>Name:</b> {order.name}</span>
                    <span><b>Phone:</b> {order.phone}</span>
                    <span><b>Address:</b> {order.address}</span>
                    <span><b>TOTAL:</b> {order.orderTotal}</span>
                      <AdminOrderDetails
                        order={order} />
                  </div>
              ))}
          </div>
        )}

        </>
    )
}

export default AdminOrders;