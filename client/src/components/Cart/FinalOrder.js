import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER,UPDATE_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

function FinalOrder(props) {

  // const {
  //   cart= [],
  //   cart_total,
  //   order,
  //   formData=[]
  // } = props

  const cart_total = JSON.parse(localStorage.getItem('cart_total'));
  const cart = JSON.parse(localStorage.getItem('new_cart'))
  const formData = JSON.parse(localStorage.getItem('checkout_user_data'))
  const [addOrder, { error }] = useMutation(ADD_ORDER);
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {

    const previousOrder = [{
      cart_total: cart_total,
      cart: cart
    }]
  
    console.log(previousOrder);

    if (Auth.loggedIn()) {

    } else {
      if (JSON.parse(localStorage.getItem('previous_orders')) === 'empty') {
        localStorage.setItem('previous_orders', JSON.stringify(previousOrder))
        window.location.href = "/cart/ordered"
      } else {
        const existingOrders = JSON.parse(localStorage.getItem('previous_orders'))
        const allOrders = [...existingOrders, ...previousOrder]
        localStorage.setItem('previous_orders', JSON.stringify(allOrders))
        //clear guest cart
        window.location.href = "/cart/ordered"
      }      
    }


    // try {
    //   addOrder({
    //     variables: {
    //     input: {
    //       cart: JSON.stringify(cart),
    //       orderTotal: JSON.stringify(cart_total),
    //       delivery_date: formData.delivery_date,
    //       name: formData.first_name + ' ' + formData.last_name,
    //       phone: formData.phone,
    //       address: formData.address
    //     }
    // }})
    // } catch (e) {
    //   console.log(e)
    // }

  },[])



  if (error) return `...ERROR`;

  return (
    <>
      <div className="checkout-order-submitted">
        <span>ORDER SUBMITTED VIA WHATSAPP</span>
      </div>    
    </>
  )
}

export default FinalOrder;