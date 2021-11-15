import React, { useState, useEffect} from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import MoreInfo from './MoreInfo';
import { Link } from 'react-router-dom';
import PastOrders from './PastOrders';
import CartList from './CartList';
import CheckOut from '../Cart/CheckOut';

function WindowCart(props) {

  const {
    products,
    user_me,
    setPastOrders,
    promotions,
    setCurrentHeaderLink,
    headerLinks
  } = props

  const [ordersModal, setOrdersModal] = useState(true);
  const [pastOrders, setOrders] = useState([])
  const user_cart = user_me.cart;

  useEffect(() => {

    const ordersArr = [];
    
    for (var i = 0; i < user_me.previous_orders.length; i++) {
      ordersArr.push(JSON.parse(user_me.previous_orders[i]))
    }

    setOrders(ordersArr)

  },[])

  return (
    <div className="window-cart-content">
      {ordersModal ? (
        <>
          <span onClick={() => {setOrdersModal(false)}} className="past-orders-button">Past Orders</span>
          {user_me.cart.length > 0 ? (
            <div className="window-cart-column">
              <CartList
                user_me={user_me}
                products={products}
                promotions={promotions}
                setCurrentHeaderLink={setCurrentHeaderLink}
                headerLinks={headerLinks} />
              <CheckOut 
                user_me={user_me}
                products={products}
                user_cart={user_cart}
                setOrdersModal={setOrdersModal}
                />
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
                  <PastOrders
                    pastOrders={pastOrders}
                  />
                </div>              
              </div>
            </div>
          )}  
        </>
      ) : (
        <>
        <span onClick={() => {setOrdersModal(true)}} className="past-orders-button">BACK TO CART</span>
          <div className="past-orders-container">
            <PastOrders
              pastOrders={pastOrders}
            />
        </div> 
        </>
      )}
             
    </div>
  )
}

export default WindowCart;