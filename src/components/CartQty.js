import React, { useState } from 'react';

function CartQty(props) {

  const {
    cart,
    setCart,
    item,
    index
  } = props

  const [qty, setQty] = useState(item.quantity)

  function addQty() {
    item.quantity = qty + 1;

    // remove old cart item with old quantity
    cart[index].quantity = qty + 1;
    // setCart updated with new cart and item quantity
    setCart(cart);
  }

  function minusQty() {

    if (qty === 1) {
      return;
    } else {
      setQty(qty - 1)
      item.quantity = qty - 1;

      // remove old cart item with old quantity
      cart[index].quantity = qty - 1
      // setCart updated with new cart and item quantity
      setCart(cart);
    }

  }

  return (
    <div className="cart-qty-container">
      <div onClick={() => {setQty(qty + 1); addQty()}}>+</div>
      <div className="add-cart-counter">{qty}</div>
      <div onClick={() => minusQty()}>-</div>
    </div>
  )
}

export default CartQty;