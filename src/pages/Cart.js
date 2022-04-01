import React, { useState } from 'react';
import CartItem from '../components/CartItem';

function Cart(props) {

  const {
    cart,
    setCart,
    siteSale
  } = props

  const [isModal, setModal] = useState(false);

  function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem('user_cart', JSON.stringify(cart))

    setCart(cart.splice(0, index));
  }

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <CartItem 
          cart={cart}
          setCart={setCart}
          siteSale={siteSale} 
          item={item}
          index={index}
          removeItem={removeItem}     />
      ))}
      <div onClick={() => setModal(true)} className="cart-checkout-button">CHECKOUT ( GENERATE INVOICE )</div>
      {isModal === true && (
        <div onClick={() => setModal(false)} className="invoice-modal">
          <div className="invoice-content">
            INVOICE
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Cart;