import React, { useState } from 'react';

function CartItem(props) {

  const {
    cart,
    setCart,
    siteSale,
    item,
    index,
    removeItem
  } = props

  const [qty, setQty] = useState(item.quantity)
  const [price, setPrice] = useState()

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

  function checkPrice() {

    if (item.bulk_qty >= 1 && item.bulk_qty <= item.quantity) {

      //checks for bulk quantity to be greater or equal to quantity
      item.new_price = item.bulk_price * item.quantity;

    } else if (item.sale_price !== '' && item.sale_price < (item.price * (1 - siteSale/100))) {

      // checks if sale price exists, if so, apply sale price
      item.new_price = item.sale_price * item.quantity;

    } else {

      // if no sale / bulk price exists, apply site sale to regular price
      item.new_price = (item.price * (1 - siteSale/100).toFixed(2)) * item.quantity;

    }

    cart[index].new_price = item.new_price;
    cart[index].quantity = qty;

    setCart(cart);

    localStorage.setItem('user_cart', JSON.stringify(cart))

    return `RM ${item.new_price}`;
  }

  return (
    <>
      <div key={item.id} className="cart-item-container">
        <img alt={item.name} src={process.env.PUBLIC_URL + `/products/${item.picture[0]}`} />
        <div>
          <li>{item.name}</li>
          <li>{checkPrice()}</li>
          <li className="cart-qty-container">
            <div onClick={() => {setQty(qty + 1); addQty()}}>+</div>
            <div className="add-cart-counter">{qty}</div>
            <div onClick={() => minusQty()}>-</div>
          </li>
        </div>
        <div onClick={() => removeItem(index)} className="cart-button-delete">X</div>
      </div>
    </>

  )
}

export default CartItem;