import React, { useState } from 'react';

function CartCounter(props) {

  const {
    userCart,
    index,
    addQty,
    minusQty,
    state,
    setState
  } = props

  const [itemQty, setItemQty] = useState(userCart[index].quantity)

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
    <div onClick={() => {minus(); minusQty(index); setState(state +1)}}>-</div>
      <div>    
        {itemQty}
      </div>
      <div onClick={() => {add(); addQty(index); setState(state + 1)}}>+</div>
    </>
  )
}

export default CartCounter;