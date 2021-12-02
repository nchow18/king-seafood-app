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

  return (
    <>
      {userCart[index].product_price}
    </>
  )
}

export default ItemPrice;