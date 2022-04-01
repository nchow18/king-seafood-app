import React, { useState } from 'react';

function AddCartButton(props) {

  const {
    prod,
    fav,
    setFav,
    cart,
    setCart
  } = props

  const [qty, setQty] = useState(1);

  function minusQty() {

    if (qty === 1) {
      return;
    } else {
      setQty(qty - 1)
    }
  }

  function addFav() {

    const oldFav = fav;
    const newFav = [...oldFav, prod];

    setFav(newFav)
  }

  function addCart() {

    const oldCart = cart;
    prod.quantity = qty
    const newCart = [...oldCart, prod];


    setCart(newCart);
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
      <div onClick={() => addFav()} className="add-cart-button">
        ADD TO FAVORITES
      </div>


    </div>
  )
}

export default AddCartButton;