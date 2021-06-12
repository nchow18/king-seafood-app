import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { ADD_ORDER } from '../../utils/mutations';

function FinalOrder(props) {

  const {
    cart= [],
    cart_total,
    order,
    formData=[]
  } = props
  
  const [addOrder, { error }] = useMutation(ADD_ORDER);

  useEffect(() => {
    try {
      addOrder({
        variables: {
        input: {
          cart: JSON.stringify(cart),
          orderTotal: JSON.stringify(cart_total),
          delivery_date: formData.delivery_date,
          name: formData.first_name + ' ' + formData.last_name,
          phone: formData.phone,
          address: formData.address
        }
    }})
    } catch (e) {
      console.log(e)
    }

  },[order])

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