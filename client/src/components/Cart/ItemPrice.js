import React, { useState, useEffect } from 'react';

function ItemPrice(props) {

  const {
    index,
    userCart,
    price,
    state,
    setState
  } = props

  useEffect(() => {

  },[state])

  function bulkCheck(quantity) {

    var newPrice = '';

    if (userCart[index].product_bulk_quantity !== 0) {
      if (userCart[index].quantity >= userCart[index].product_bulk_quantity) {
        newPrice = (userCart[index].product_bulk_price * userCart[index].quantity)
      } else {
        newPrice = userCart[index].product_price
      }
    } else {
      newPrice = userCart[index].product_price
    }

    return parseFloat(newPrice).toFixed(2);
  }

  return (
    <>
      {bulkCheck(index)}
    </>
  )
}

export default ItemPrice;