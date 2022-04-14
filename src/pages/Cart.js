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

  function getCartTotal(newArr) {

    var totalPrice = '';

     for (var i = 0; i < newArr.length; i++) {
       totalPrice = +totalPrice + +newArr[i].new_price;
      cartPriceArr.push(newArr[i].new_price);
     }

    if (newArr.length !== 0) {
     setTotal(totalPrice.toFixed(2));
    } else {
      setTotal('0.00')
    }

  }

  return (
    <div className="cart-page">
      {cart.map((item, index) => (
        <div key={item.name}>
          <CartItem 
            cart={cart}
            setCart={setCart}
            siteSale={siteSale} 
            item={item}
            index={index}
            setTotal={setTotal}
            totalCart={totalCart}
            getCartTotal={getCartTotal}
            cartPriceArr={cartPriceArr}    />
          </div>
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