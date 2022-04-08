import React, { useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

function Cart(props) {

  const {
    cart,
    setCart,
    sale
  } = props

  const siteSale = sale;
  const [isModal, setModal] = useState(false);
  const [totalCart, setTotal] = useState([]);

  const cartPriceArr = [];

  useEffect(() => {

  }, [cart])

  function removeItem(index) {

    cart.splice(index, 1);

    localStorage.setItem('user_cart', JSON.stringify(cart))

    setCart(cart.splice(0, index));
  }

  function getCartTotal() {

    var totalPrice = '';


     for (var i = 0; i < cart.length; i++) {
       totalPrice = +totalPrice + +cart[i].new_price;
      cartPriceArr.push(cart[i].new_price);
     }

     return totalPrice;
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
          removeItem={removeItem}
          setTotal={setTotal}
          totalCart={totalCart}
          getCartTotal={getCartTotal}
          cartPriceArr={cartPriceArr}    />
      ))}
      <div className="cart-total">Your Total: RM {totalCart}</div>
      <div onClick={() => {setModal(true)}} className="cart-checkout-button">CHECKOUT ( GENERATE INVOICE )</div>
      {isModal === true && (
        <div onClick={() => setModal(false)} className="invoice-modal">
          <div className="invoice-content">
            <div>INVOICE</div>
            <div className="invoice-item-container">
              {cart.map((item) => (
                <div className="invoice-item">
                  <li>{item.name}</li>
                  <div>
                    <li>Qty: {item.quantity}</li>
                    <li>RM {item.new_price.toFixed(2)}</li>
                  </div>
                </div>
              ))}
            </div>
            <div className="invoice-total-price">
              <li>Your Total:</li>
              <li>RM {totalCart}</li>
            </div>
          </div>
        </div>
      )}
    </div>
    
  )
}

export default Cart;