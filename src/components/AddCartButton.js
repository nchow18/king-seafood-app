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

    var dup = '';

    if (fav.length === 0) {
        const oldFav = fav;
        const newFav = [...oldFav, prod];

        setFav(newFav)
      } else {
        for (var i = 0; i < fav.length; i++) {
          if (fav[i].name === prod.name) {
            alert('Product is already in your Favorites');

            dup = 'duplicate';
          } 
        }
        
        if (dup !== 'duplicate') {
          const oldFav = fav;
          const newFav = [...oldFav, prod];
  
          setFav(newFav)
        }
      }
    }

  function addCart() {

    var dup = '';

    if (fav.length === 0) {
      const oldCart = cart;
      prod.quantity = qty
      const newCart = [...oldCart, prod];
  
      setCart(newCart);
      } else {
        for (var i = 0; i < cart.length; i++) {
          if (cart[i].name === prod.name) {
            alert('Product is already in your Cart');

            dup = 'duplicate';
          } 
        }
        
        if (dup !== 'duplicate') {
          const oldCart = cart;
          prod.quantity = qty
          const newCart = [...oldCart, prod];
      
          setCart(newCart);
        }
    }
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