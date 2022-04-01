import React, { useState } from 'react';

function CartPrice(props) {

  const {
    cart,
    setCart,
    checkPrice,
    index,
    item
  } = props

  const [price, setPrice] = useState(checkPrice(item, index))

  return (
    <div>
      {price}
    </div>
  )
}

export default CartPrice;