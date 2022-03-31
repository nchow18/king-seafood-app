import React, { useState } from 'react';

function AddCartButton(props) {

  const {
    prod
  } = props

  const [qty, setQty] = useState(1);

  function minusQty() {

    if (qty === 1) {
      return;
    } else {
      setQty(qty - 1)
    }
  }

  function addCart() {
    console.log(`added ${qty} of ${prod.name} at RM ${prod.price * qty} to cart`);
  }

  return (
    <div className="add-cart-container">
      <div className="add-cart-counter-container">
        <div onClick={() => setQty(qty + 1)}>+</div>
        <div className="add-cart-counter">{qty}</div>
        <div onClick={() => minusQty()}>-</div>
      </div>
      <div onClick={() => addCart()} className="add-cart-button">
        ADD TO CART
      </div>


    </div>
  )
}

export default AddCartButton;