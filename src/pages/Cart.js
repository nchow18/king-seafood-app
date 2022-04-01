import React, { useState } from 'react';

function Cart(props) {

  const {
    cart,
    setCart,
    siteSale
  } = props

  function checkPrice(item) {

    var newPrice = '';

    if (item.bulk_qty !== '') {
      // check if qty meets bulk_qty
      if (item.bulk_qty >= item.qty) {
        item.new_price = item.bulk_price * item.qty;
      } else {
        item.new_price = item.price * (1 - siteSale/100).toFixed(2);
      }
    } else if (item.sale_price !== '' && item.sale_price < (item.price * (1 - siteSale/100))) {
      item.new_price = item.sale_price;
    } else {
      item.new_price = item.price * (1 - siteSale/100).toFixed(2);
    }

    console.log(item);


    return `RM ${item.new_price}`;
  }

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <div key={item.id} className="cart-item-container">
          <img alt={item.name} src={process.env.PUBLIC_URL + `/products/${item.picture[0]}`} />
          <div>
            <li>{item.name}</li>
            <li>{checkPrice(item)}</li>
            <div>

            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart;