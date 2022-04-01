import React, { useState } from 'react';
import CartQty from '../components/CartQty';
import CartPrice from '../components/CartPrice';

function Cart(props) {

  const {
    cart,
    setCart,
    siteSale
  } = props

  function checkPrice(item, index) {

    if (item.bulk_qty >= 1 && item.bulk_qty >= item.quantity) {

      //checks for bulk quantity to be greater or equal to quantity
      item.new_price = item.bulk_price * item.quantity;

      console.log(`bulk price applied to ${item.name}`);

    } else if (item.sale_price !== '' && item.sale_price < (item.price * (1 - siteSale/100))) {

      // checks if sale price exists, if so, apply sale price
      item.new_price = item.sale_price * item.quantity;

      console.log(`sale price applied to ${item.name}`)


    } else {

      // if no sale / bulk price exists, apply site sale to regular price
      item.new_price = (item.price * (1 - siteSale/100).toFixed(2)) * item.quantity;

      console.log(`site sale applied to ${item.name}`)

    }
    return `RM ${item.new_price}`;
  }

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <div key={item.id} className="cart-item-container">
          <img alt={item.name} src={process.env.PUBLIC_URL + `/products/${item.picture[0]}`} />
          <div>
            <li>{item.name}</li>
            <li>{checkPrice(item, index)}</li>
            <div>
              <CartQty 
                cart={cart}
                setCart={setCart}
                item={item}
                index={index} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart;