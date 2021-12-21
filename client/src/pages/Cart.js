import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { Linking, Vibration } from 'react-native-web';
import { UPDATE_USER, UPDATE_CART, REMOVE_CART, ADD_USER_ORDER, ADD_ORDER } from '../utils/mutations';
import CartCounter from '../components/Cart/CartCounter';
import PastOrders from '../components/Cart/PastOrders';
import ItemPrice from '../components/Cart/ItemPrice';

function Cart(props) {

  window.scrollTo(0,0)

  const {
    userData,
    setCart,
    setCartQty,
    loading2
  } = props

  const [updateUser] = useMutation(UPDATE_USER);
  const [updateCart] = useMutation(UPDATE_CART);
  const [removeCart] = useMutation(REMOVE_CART)
  const [addAdminOrder] = useMutation(ADD_ORDER);
  const [isOrder, setOrder] = useState(true);
  const [pastOrderModal, setPastOrderModal] = useState(false);
  const [pastOrderCart, setPastOrderCart] = useState()
  const [userCart, setUserCart] = useState(userData.cart)
  const [state, setState] = useState(0);
  const [isPastOrders, setPastOrders] = useState(false);
  const [isDelivery, setDelivery] = useState(false);

  const [formData, setFormData] = useState({
    first_name: userData.first_name,
    last_name: userData.last_name,
    message: '',
    delivery_date: '',
    address: userData.address,
    phone: userData.phone
  })

  // Date formatting
  const today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; 
  const currentDate = today.toLocaleDateString("en-US", options);

  const time_diff = Date.now() + (12 * 3600 * 1000);
  // console.log(time_diff);
  const adjusted_date = new Date(time_diff);
  const current_date = JSON.stringify(adjusted_date + ' Malaysia-Penang');
  // console.log(current_date);

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  useEffect(() => {

  },[userCart])

  const clear_cart = async => {

    const new_cart = [];

    for (var i = 0; i < userCart.length; i++) {
      const cartArr = {
        product_id: userCart[i].product_id,
        quantity: userCart[i].quantity,
        product_name: userCart[i].product_name,
        product_price: userCart[i].product_price,
        product_sale_price: userCart[i].product_sale_price,
        product_bulk_price: userCart[i].product_bulk_price,
        product_bulk_quantity: userCart[i].product_bulk_quantity
      };

      new_cart.push(cartArr);
    }

    const previousOrder = {
      user_cart_total: getCartTotal(),
      cart: userCart,
      date: current_date,
      message:  formData.message
    }

    console.log(JSON.stringify(previousOrder))

    try {

      // Clear USER cart
      updateUser({
        variables: {
          input: {
            cart: [],
            pastOrders: [...userData.pastOrders, JSON.stringify(previousOrder)],
            phone: formData.phone,
            address: formData.address
          }
        }
      })

      // Add order to admin dashboard
      addAdminOrder({
        variables: {
          input: {
            orderTotal: JSON.stringify(getCartTotal()),
            cart: JSON.stringify(userCart),
            paid: false,
            delivery_date: formData.delivery_date,
            name: formData.first_name + ' ' + formData.last_name,
            phone: formData.phone,
            address: formData.address,
            order_date: current_date
          }
        }
      })
      

    } catch (e) {
      console.log(e);
    }

    setCart([])
    userData.cart = [];
    setUserCart([])
    setCartQty(0)
    userData.pastOrders = [...userData.pastOrders, JSON.stringify(previousOrder)]
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

  // if (userCart.length !== 0) {
  //   setEmpty(false)
  // } else {
  //   setEmpty(true)
  // }

  function getCartTotal() {
    var total = '';
    var value = '';

    for (var i = 0; i < userData.cart.length; i++) { 
      
      if (userData.cart[i].product_bulk_quantity !== 0 && userData.cart[i].quantity >= userData.cart[i].product_bulk_quantity) {
        total = +total + +(userData.cart[i].product_bulk_price * userData.cart[i].quantity);
      } else {
        total = +total + +userData.cart[i].product_price;
      }
    }

    if (total) {
      value = total.toFixed(2);
    } else {
      value ='0.00'
    }

    return value
  }

  function cartMessage() {
    var message = '';

    for (var y = 0; y < userCart.length; y++) {
      message += "\n %0a ===== Item:"+[y+1]+"=====\n %0a *Item:* "+userCart[y].product_name.replace('&','And')+", *Quantity:* "+userCart[y].quantity+", *Price:* RM "+userCart[y].product_price+" ";
    }
    return message;
  }

  const info = 
    '*First Name:* '+formData.first_name+
    ',\n %0a*Last Name:* '+formData.last_name+
    ',\n %0a*Phone:* '+formData.phone+
    ',\n %0a*Address:* '+formData.address+
    ',\n %0a*Message:* '+formData.message+
    ',\n %0a*Delivery Date:* '+formData.delivery_date;

  const message = info + cartMessage() + ',\n %0a*TOTAL PRICE:* RM ' + getCartTotal();

  const number = '60164223018'
  // const number = '60103893421'

  function sendMessage() {
    const confirm = window.confirm('Please confirm Whatsapp has opened to submit order OR screenshot order and submit directly on Whatsapp');

    // https://api.whatsapp.com/send?text=First%20Name:%20Grace,%20%0a*Last%20Name:*%20Jong,%20%0a*Phone:*%200103893421,%20%0a*Address:*%20205,%20Jalan%20Perak,%20%0a*Message:*%20After%205pm,%20%0a*Delivery%20Date:*%202021-08-13%20%0a%20=====%20Item:1=====%20%0a%20Item:%20Halibut%20Steak%20%E5%A4%A7%E6%AF%94%E7%9B%AE%E9%B1%BC%E6%8E%92%20454g,%20Quantity:%201,%20Price:%2022.96%20%20%0a%20=====%20Item:2=====%20%0a%20Item:%20Halibut%20Fillet%20%E5%A4%A7%E6%AF%94%E7%9B%AE%E9%B1%BC%E7%89%87%20%C2%B1150g/pc*,%20Quantity:%202,%20Price:%2015.15%20,%20%0a*TOTAL%20PRICE:*%2038.11&phone=+60164223018

    if (confirm) {

      let url =
        'https://api.whatsapp.com/send?text=' + message + '&phone=+' + number;
      Linking.openURL(url)
        .then((data) => {
          console.log('WhatsApp Opened');
        })
        .catch(() => {
          alert('Make sure Whatsapp installed on your device');
        }); 

      clear_cart() 
    }
  }

  function parsePastOrders() {
    const orders = [];

    for (var i = 0; i < userData.pastOrders.length; i++) {
      orders.push(JSON.parse(userData.pastOrders[i]))
    }

    return orders;
  }

  function formatTime(time) {
    const newTime = time.replace('GMT-0500 (Eastern Standard Time) Malaysia-Penang', '')

    return newTime
  }

  if (loading2) return `...Loading user data`;

  console.log(userData.cart)

  return (
    <div className="cart-container">
      <div className="cart-items-container">
        {pastOrderModal === true && (
          <PastOrders 
            setPastOrderModal={setPastOrderModal}
            pastOrderCart={pastOrderCart}/>
        )}        
        {isPastOrders ? (
          <div className="cart-items-width">
              <div className="past-orders-button" onClick={() => {setPastOrders(false)}}>Current Order</div>
              <div className="font-face-bebas font-size-large">YOUR PAST ORDERS</div>
              <div className="past-orders-container">
                {parsePastOrders().map((item, index) => (
                  <div key={index} className="past-orders-item">
                    <p>{index + 1}</p>
                    <p>{formatTime(item.date)}</p>
                    <p>RM {item.user_cart_total}</p>
                    <p onClick={() => {setPastOrderCart(item); setPastOrderModal(true)}}>View Order</p>
                  </div>
                ))}

              </div>
          </div>
        ) : (
          <>
          {userData.cart.length !== 0 && (
            <div className="cart-items-width">
              <div className="past-orders-button" onClick={() => {setPastOrders(true)}}>Past Orders</div>
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
              <div className="past-orders-button" onClick={() => {setPastOrders(true)}}>Past Orders</div>
              Please Fill Your Cart
            </>
          )}
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
                <input value={formData.first_name} onChange={handleInputChange} name="first_name" placeholder="Full Name:"></input>
                <input value={formData.phone} onChange={handleInputChange} name="phone" placeholder="Phone:"></input>
                {isDelivery === true && (
                  <>
                    <input value={formData.address} onChange={handleInputChange} name="address" placeholder="Full Address:"></input>
                    <input value={formData.delivery_date} onChange={handleInputChange} name="delivery_date" type="date"></input>                  
                    <span className="delivery-date">Delivery Date (except Sundays and Public Holidays)</span>
                  </>
                )}
                <textarea value={formData.message} onChange={handleInputChange} name="message" placeholder="Message"></textarea>
                  <div className="delivery-choice-container">
                    {isDelivery ? (
                      <>
                        <div className="circle-choice-container">                      
                          <img alt="circle-empty" className="circle-empty" src={process.env.PUBLIC_URL + `./icons/cart/circle-empty.png`} />
                          <img onClick={() => {setDelivery(false)}} alt="circle-dot" className="circle-dot" src={process.env.PUBLIC_URL + `./icons/cart/circle-dot.png`} />    
                        </div>
                        <p>Delivery</p>
                        <div className="circle-choice-container">                      
                            <img onClick={() => {setDelivery(false)}} alt="circle-empty" className="circle-empty" src={process.env.PUBLIC_URL + `./icons/cart/circle-empty.png`} />  
                          </div> 
                        <p>Pick-up</p>                       
                      </>
                      ) : (   
                        <>
                          <img onClick={() => {setDelivery(true)}} alt="circle-empty" className="circle-empty" src={process.env.PUBLIC_URL + `./icons/cart/circle-empty.png`} />
                          <p>Delivery</p>
                          <div className="circle-choice-container">                      
                            <img alt="circle-empty" className="circle-empty" src={process.env.PUBLIC_URL + `./icons/cart/circle-empty.png`} />
                            <img onClick={() => {setDelivery(true)}} alt="circle-dot" className="circle-dot" src={process.env.PUBLIC_URL + `./icons/cart/circle-dot.png`} />    
                          </div> 
                          <p>Pick-up</p>                       
                        </>
                      )}                                
                  </div>
                  {userCart.length === 0 && (
                    <div className="submit-whatsapp-button">
                      Please fill your cart
                      <img alt="whatsapp" src={process.env.PUBLIC_URL + `./icons/cart/whatsappicon.png`} />
                    </div> 
                  )}
                  {userCart.length !== 0 && (
                    <div className="submit-whatsapp-button" onClick={() => {sendMessage()}}>
                        Submit order with Whatsapp
                      <img alt="whatsapp" src={process.env.PUBLIC_URL + `./icons/cart/whatsappicon.png`} />
                    </div>                    
                  )}
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
                <div onClick={() => {setOrder(true)}}>PLACE YOUR ORDER</div>
              </div>                                                                    
            </div>
          </div> 
        )}
      </div>
    </div>
  )
}

export default Cart;