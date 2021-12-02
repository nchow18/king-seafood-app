import React, { useState } from 'react';

function CartCounter(props) {

  const {
    userCart,
    index,
    addQty,
    minusQty
  } = props

  const [itemQty, setItemQty] = useState(1)

  function add() {
    setItemQty(itemQty + 1)
  }

  function minus() {

    if (itemQty !== 1) {
      setItemQty(itemQty - 1)
    }
  }

  return (
    <>
    <div onClick={() => {minus(); minusQty(index)}}>-</div>
      <div>    
        {itemQty}
      </div>
      <div onClick={() => {add(); addQty(index)}}>+</div>
    </>
  )
}

export default CartCounter;