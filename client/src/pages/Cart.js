import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_USER, UPDATE_CART, REMOVE_CART } from '../utils/mutations';
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
  const [removeCart] = useMutation(REMOVE_CART)
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

    try {
      removeCart({
        variables: {
          product_id: userCart[index].product_name
        }
      })
    } catch (e) {
      console.log(e)
    }

    new_cart.splice(index, 1);
    setUserCart(new_cart);
    setCartQty(new_cart.length);
  }

  const addQty = async(index) => {

    userCart[index].product_price = ((userCart[index].product_price / userCart[index].quantity) * (userCart[index].quantity + 1)).toFixed(2);
    userCart[index].quantity = (userCart[index].quantity + 1);

    for (var i = 0; i < userCart.length; i++) {
      delete userCart[i]._id
    }

    const item = userCart[index]

    const updateItem = {
      product_id: item.product_id,
      product_bulk_price: item.product_bulk_price,
      product_bulk_quantity: item.product_bulk_quantity,
      product_sale_price: item.product_sale_price,
      quantity: item.quantity,
      product_price: item.product_price,
      product_name: item.product_name
    }

    try {
      updateCart({
        variables: {
          product_id: userCart[index].product_name,
          input: updateItem
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  const minusQty = async(index) => {

    if (userCart[index].quantity !== 1) {
      userCart[index].product_price = ((userCart[index].product_price / userCart[index].quantity) * (userCart[index].quantity - 1)).toFixed(2);
      userCart[index].quantity = (userCart[index].quantity - 1);
    }

    for (var i = 0; i < userCart.length; i++) {
      delete userCart[i]._id
    }

    const item = userCart[index]

    const updateItem = {
      product_id: item.product_id,
      product_bulk_price: item.product_bulk_price,
      product_bulk_quantity: item.product_bulk_quantity,
      product_sale_price: item.product_sale_price,
      quantity: item.quantity,
      product_price: item.product_price,
      product_name: item.product_name
    }
    
    try {
      updateCart({
        variables: {
          product_id: userCart[index].product_name,
          input: updateItem
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
            <div className="order-fill">
              <div>YOUR ORDER DETAILS:</div>
              <form className="input-container">
                <input placeholder="Full Name:"></input>
                <input placeholder="Phone:"></input>
                <input  placeholder="Full Address:"></input>
                <input type="date"></input>
                <textarea placeholder="Message"></textarea>
                <div className="submit-whatsapp-button">Submit order with Whatsapp <img alt="whatsapp" src={process.env.PUBLIC_URL + `./icons/cart/whatsappicon.png`} /></div>
              </form>
              <div className="delivery-details">
                <div>DELIVERY FEE:</div>
                <div className="delivery-fee-container">
                  <div>
                    <img alt="car" src={process.env.PUBLIC_URL + `./icons/cart/car.png`} />
                    <p>FREE DELIVERY for orders RM100 and above for Penang area (RM5 delivery fee for orders than than RM100)</p>
                  </div>
                  <div>
                    <img alt="outstation" src={process.env.PUBLIC_URL + `./icons/cart/outofstation.png`} />
                    <p>Outstation delivery fee RM40</p>
                  </div>  
                  <div>
                    <img alt="pickup" src={process.env.PUBLIC_URL + `./icons/cart/pickup.png`} />
                    <p>Pickup location: <br></br> 205, Jalan Perak, 11600 Jelulong</p>

                  </div>
                  <div>
                    <img alt="notice" src={process.env.PUBLIC_URL + `./icons/cart/outofstation.png`} />
                    <p>NOTICE: For any troubles during checkout, please contact Grace 016-4223018</p>
                  </div>                                   
                </div>
              </div>              
            </div>

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