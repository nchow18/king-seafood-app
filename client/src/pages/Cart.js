import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER, UPDATE_CART } from '../utils/mutations';
import CartCounter from '../components/Cart/CartCounter';
import ItemPrice from '../components/Cart/ItemPrice';

function Cart(props) {

  const {
    cart,
    userData,
    setCart,
    setCartQty,
    loading2
  } = props

  const [updateUser] = useMutation(UPDATE_USER);
  const [updateCart] = useMutation(UPDATE_CART);
  const [isOrder, setOrder] = useState(true);
  const [userCart, setUserCart] = useState(userData.cart)
  const [state, setState] = useState(0)


  useEffect(() => {

  },[userCart])

  const clear_cart = async => {

    try {

      updateUser({
        variables: {
          input: {
              cart: []
          }
        }
      })
      
    } catch (e) {
      console.log(e);
    }

    setCart([])
    userData.cart = [];
    setCartQty(0)
  }

  const removeItem = async(index) => {

    const new_cart = userCart;

    new_cart.splice(index, 1);
    setUserCart(new_cart);
    setCartQty(new_cart.length);

    try {
      updateUser({
        variables: {
          input: {
            cart: [new_cart]
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const addQty = async(index) => {

    userCart[index].product_price = ((userCart[index].product_price / userCart[index].quantity) * (userCart[index].quantity + 1)).toFixed(2);
    userCart[index].quantity = (userCart[index].quantity + 1);

    for (var i = 0; i < userCart.length; i++) {
      delete userCart[i]._id
    }

    console.log(userCart[index])

    try {
      updateCart({
        variables: {
          product_id: userCart[index].product_id,
          input: {
            cart: [userCart[index]]
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const minusQty = async(index) => {

    const newArr = [];

    if (userCart[index].quantity !== 1) {
      userCart[index].product_price = ((userCart[index].product_price / userCart[index].quantity) * (userCart[index].quantity - 1)).toFixed(2);
      userCart[index].quantity = (userCart[index].quantity - 1);
    }

    for (var i = 0; i < userCart.length; i++) {
      delete userCart[i]._id
    }

    console.log(userCart)

    try { 
      updateUser({
        variables: {
          input: {
            cart: userCart
          }
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  function getCartTotal() {
    var total = '';

    for (var i = 0; i < userData.cart.length; i++) {
      total = +total + +userData.cart[i].product_price;
    }

    return total.toFixed(2)
  }

  if (loading2) return `...Loading user data`;

  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {userData.cart.length !== 0 && (
          <div className="cart-items-width">
            <div className="font-face-bebas font-size-large">YOUR CART</div>
            <div className="cart-items-content">
            {userCart.map((item, index) => (
                <div key={item._id} className="cart-item">
                  <img className="cart-item-picture" alt={item.product_id} src={process.env.PUBLIC_URL + `./images/products/half_size/tn_${item.product_id}-1.jpg`} />
                  <div className="cart-item-section-2">
                    <div className="cart-item-name">
                      {item.product_name}
                    </div>
                    <div className="cart-item-quantity">
                      <div>Qty: </div>
                      <div className="counter-container">
                        <CartCounter 
                          userCart={userCart}
                          index={index}
                          minusQty={minusQty}
                          addQty={addQty}
                          state={state}
                          setState={setState}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cart-item-price">
                    RM <ItemPrice 
                          index={index}
                          userCart={userCart}
                          price={item.product_price}
                          state={state}
                          setState={setState}                          />
                  </div>
                  <div className="cart-item-remove">
                    <i className="far fa-times-circle delete-circle" onClick={() => {removeItem(index)}}></i>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-item-total-container">
              <div className="font-size-large font-face-bebas">YOUR TOTAL:</div>
              <div>RM {getCartTotal()}</div>
            </div>
          </div>
        )}
        {userData.cart.length === 0 && (
          <>
            Please Fill Your Cart
          </>
        )}
      </div>
      <div className="cart-checkout-container">
        <div className={`checkout-tab font-face-bebas ${isOrder === true && `active-tab`}`} onClick={() => {setOrder(true)}}>
          PLACE YOUR ORDER
        </div>
        <div className={`how-to-tab font-face-bebas ${isOrder === false && `active-tab`}`} onClick={() => {setOrder(false)}}>
          HOW TO ORDER
        </div>
        {isOrder ? (
          <div className="cart-checkout-content padding-1rem">
            YOUR ORDER DETAILS:
          </div>
        ) : (
          <div className="cart-how-content padding-1rem">
            <div className="cart-how-details">
              <div className="font-face-bebas font-size-xl">STEPS:</div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/1.png`} />
                <div>Add to cart and update quantity desired</div>
              </div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/2.png`} />
                <div>Fill in ALL details on checkout page</div>
              </div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/3.png`} />
                <div>Delivery/Pickup options available at checkout</div>
              </div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/4.png`} />
                <div>All orders will be submitted via WhatsApp</div>
              </div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/5.png`} />
                <div>Final invoice will be sent via WhatsApp</div>
              </div>
              <div className="cart-how-line">
                <img alt="number" className="number-circle" src={process.env.PUBLIC_URL + `./icons/cart/how_icons/payment.png`} />
                <div>Payment Method: Bank transfer, TNG e-wallet, COD (exact change only) - details will be provided in invoice</div>
              </div>  
              <div className="place-order">
                <div>PLACE YOUR ORDER</div>
              </div>                                                                    
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Cart;