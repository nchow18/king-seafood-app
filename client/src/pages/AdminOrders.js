import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { ORDERS } from '../utils/queries';
import { REMOVE_ORDER } from '../utils/mutations';

function AdminOrders() {

    const [removeOrder] = useMutation(REMOVE_ORDER)
    const [details, viewDetails] = useState(false);
    const {loading, data} = useQuery(ORDERS);
    const orders = data?.orders || {};
    const [ordersArray] = useState(orders);
    const [currentOrders, updateOrders] = useState(ordersArray)
    const [orderIndex, setOrderIndex] = useState(0);

    const deleteOrder = async (id) => {

      const confirm = window.confirm('Confirm to remove order')

      if (confirm) {

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
      } else {
        return;
      }
    }

    for (var i = 0; i < orders.length; i++) {
      const cart = JSON.parse(orders[i].cart)
      orders[i].new_cart = cart
    }

    function checkPrice(orderIndex, cartIndex) {

      const order = newest_orders[orderIndex].new_cart[cartIndex]
  
      var newPrice = '';
  
      if (newest_orders[orderIndex].new_cart[cartIndex].product_bulk_quantity !== 0 && newest_orders[orderIndex].new_cart[cartIndex].quantity >= newest_orders[orderIndex].new_cart[cartIndex].product_bulk_quantity) {
        newPrice = (newest_orders[orderIndex].new_cart[cartIndex].quantity * newest_orders[orderIndex].new_cart[cartIndex].product_bulk_price)
      } else {
        newPrice = newest_orders[orderIndex].new_cart[cartIndex].product_price;
      }
  
      return parseFloat(newPrice).toFixed(2);
    }

    const newest_orders = [].concat(orders).reverse();

    if (loading) return `...Loading`;

    return (
        <>
        {orders && (
            <div className="order-page">
            {newest_orders.map((order, orderIndex) => (
                <div className="order-container">
                  <div className="order-view-button" onClick={() => {deleteOrder(order._id)}}>REMOVE ORDER</div>               
                  <span><b>Order ID:</b> {order._id}</span>
                  <span><b>Order Date:</b> {order.order_date}</span>
                  <span><b>Delivery Date:</b> {order.delivery_date}</span>
                  <span><b>Name:</b> {order.name}</span>
                  <span><b>Phone:</b> {order.phone}</span>
                  <span><b>Address:</b> {order.address}</span>
                  <span><b>TOTAL:</b> {order.orderTotal}</span>
                  <div className="order-view-button" onClick={() => {setOrderIndex(orderIndex); viewDetails(true)}}>View Details</div>
                </div>
            ))}
        </div>
        )}

          {details === true && (
            <div className="order-details-modal">
              <div className="order-details-comp">
                <div className="modal-hide" onClick={() => viewDetails(false)}>Hide Details</div>
                <div className="order-cart-details-container">
                  {newest_orders[orderIndex].new_cart.map((cart, cartIndex) => (
                    <div className="order-detail-row">
                      <div>
                        <span className="">{cartIndex + 1}</span>
                        <span className="order-detail-item"><b>Product:</b> {cart.product_name}</span></div>
                      <div className="space-between"> 
                        <span className="order-detail-item"><b>Qty:</b> {cart.quantity}</span>
                        <span className="order-detail-item"><b>Price:</b> {checkPrice(orderIndex, cartIndex)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
    )
}

export default AdminOrders;