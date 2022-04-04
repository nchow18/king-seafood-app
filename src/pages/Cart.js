import React, { useState } from 'react';
import CartItem from '../components/CartItem';

function Cart(props) {

  const {
    cart,
    setCart,
    siteSale
  } = props

  var totalPrice = '';
  var test = getCartTotal(cart);

  const [isModal, setModal] = useState(false);
  const [totalCart, setTotal] = useState(test);

  function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem('user_cart', JSON.stringify(cart))

    setCart(cart.splice(0, index));
  }


  function getCartTotal(getCartTotal) {

     for (var i = 0; i < getCartTotal.length; i++) {
       totalPrice = +totalPrice + +getCartTotal[i].new_price;
     }

     return totalPrice;
  }

  console.log(totalCart);

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <CartItem 
          cart={cart}
          setCart={setCart}
          siteSale={siteSale} 
          item={item}
          index={index}
          removeItem={removeItem}
          setTotal={setTotal}
          totalCart={totalCart}
          getCartTotal={getCartTotal}    />
      ))}
      <div className="cart-total">Your Total: RM {totalCart}</div>
      <div onClick={() => {setModal(true)}} className="cart-checkout-button">CHECKOUT ( GENERATE INVOICE )</div>
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