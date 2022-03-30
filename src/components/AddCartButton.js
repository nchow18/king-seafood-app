import React, { useState } from 'react';

function AddCartButton(props) {

  const {
    prod
  } = props

  const [qty, setQty] = useState(1);

  return (
    <div className="add-cart-container">
      <div className="add-cart-counter-container">
        <div onClick={() => setQty(qty + 1)}>+</div>
        <div className="add-cart-counter">{qty}</div>
        <div onClick={() => setQty(qty - 1)}>-</div>
      </div>


    </div>
  )
}

export default AddCartButton;