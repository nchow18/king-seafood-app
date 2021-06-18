import React, { useEffect, useState, useContext } from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import { USER_ME, PRODUCTS } from '../../utils/queries';
import CheckoutDisplay from '../Cart/CheckoutDisplay';
import CartItem from '../Cart/CartItem';
import Fish from '../../assets/images/clown-fish.png';
import ProductSlide from '../Cart/ProductsSlide';
import { UserContext } from '../../utils/GlobalState';
import MoreInfo from './MoreInfo';
import { Link } from 'react-router-dom';
import PastOrders from './PastOrders';

function WindowCart(props) {

  const {
    setCartModal
  } = props

  const [state, dispatch] = useContext(UserContext);
  const [currentState, updateState] = useState(true);
  const [removeCart, { error }] = useMutation(REMOVE_CART);
  const {data: dataR} = useQuery(USER_ME);
  const {loading, data} = useQuery(PRODUCTS);
  const user_data = dataR?.userMe || {};
  const product_arr = data?.products || {};
  const cartArr = [];
  const user_cart = cartArr;
  const product_data = []
  
  for (var i = 0; i < product_arr.length; i++) {
    product_data.push(product_arr[i])
  }

  const [currentCart, updateMainCart] = useState(cartArr)

  const removeProduct = async (id) => {

    if (Auth.loggedIn() === true) {

      // if LOGGED IN, remove from Database
      const index = cartArr.findIndex((item) => item._id === id)
      cartArr.splice(index, 1);
      updateMainCart([...cartArr])
      try {
        removeCart({
          variables: {
            product_id: id
          }
        })
        alert('removed from cart');
        return;
      } catch (e) {
        console.log(e)
      }
    const user_storage = localStorage.getItem('user_cart_quantity')
    localStorage.setItem('user_cart_quantity', (user_storage - 1))
    } else {
      // if NOT logged in, slice from localStorage
      // use array to sort guest_cart to find matching product_id
      for (var i = 0; i < user_cart.length; i++) {
        if (id === user_cart[i]._id) {
          //  splices at i = index, and 1 for removing 1 at a time
          const guest_cart = JSON.parse(localStorage.getItem('guest_cart'));
          const new_cart = JSON.parse(localStorage.getItem('new_cart'));
          guest_cart.splice(i,1);
          new_cart.splice(i,1);
          // update localStorage guesT_cart_quantity
          const guest_storage = localStorage.getItem('guest_cart_quantity')
          localStorage.setItem('guest_cart_quantity', (parseInt(guest_storage) - 1))

          localStorage.setItem('guest_cart', JSON.stringify(guest_cart))
          localStorage.setItem('new_cart', JSON.stringify(new_cart))
          // push new cart to localStorage

        }
      }
    }

  }

const local_cart = JSON.parse(localStorage.getItem('guest_cart'));

if (local_cart === null) {
  return localStorage.setItem('guest_cart', JSON.stringify([]))
}

if (Auth.loggedIn()) {
  // IF logged in, get data from USER Database
    if (user_data.cart) {
      if (user_data.cart.length === 0 && user_data === false) {
        } else {
            for (var i = 0; i < user_data.cart.length; i++) {

              let index = i;
        
              var checkExisting = product_data.filter(function (item) {
                return item._id === user_data.cart[index].product_id;
              })
        
              if (checkExisting.length === 0) {
                console.log(user_data.cart[i].product_id)
                try {
                  removeCart({
                    variables: {
                      product_id: user_data.cart[i].product_id
                    }
                  })
                } catch (e) {
                  console.log(e)
                }
              }

              for (var t = 0; t < product_data.length; t++) {
                if (user_data.cart[i].product_id === product_data[t]._id) {
                  cartArr.push(product_data[t])
                  cartArr[i].product_quantity = user_data.cart[i].quantity;

                  //check for global discount
                for (var e = 0; e < user_data.cart.length; e++) {
                  if (Auth.getGlobalDiscount !== '0') {
                    // If global discount is greater than 0, proceed check if bulk / special exists on the product
                    console.log('global discount greater than 0')
                    //check if sale price exists
                    if (cartArr[i].product_sale_price !== '0') {
                      //if sale price greater than 0, apply sale discount
                      if (cartArr[i].new_quantity > 0) {
                        cartArr[i].total_price = JSON.parse(cartArr[i].product_sale_price) * cartArr[i].new_quantity;                        
                      } else {
                        cartArr[i].total_price = JSON.parse(cartArr[i].product_sale_price) * cartArr[i].product_quantity;
                      }
                    } else if (cartArr[i].product_bulk_price !== "0" && cartArr[i].product_bulk_quantity <= parseInt(cartArr[i].quantity)) {
                      // if bulk price is greater than 0 AND bulk quantity is less than QUANTITY
                      if (cartArr[i].new_quantity >0) {
                        cartArr[i].total_price = cartArr[i].new_quantity * cartArr[i].product_bulk_price
                      } else {
                        cartArr[i].total_price = cartArr[i].product_quantity * cartArr[i].product_bulk_price
                      }
                    } else {
                      //if sale price / bulk price doesn't exist, apply global discount
                      if (cartArr[i].new_quantity>0) {
                        cartArr[i].total_price = cartArr[i].new_quantity * (cartArr[i].product_price * (1 - (Auth.getGlobalDiscount()/100)));
                      } else {
                        cartArr[i].total_price = cartArr[i].product_quantity * (cartArr[i].product_price * (1 - (Auth.getGlobalDiscount()/100)));
                      }
                    }
                  } else {
                    // if gobal discount does not exist, apply regular price
                      if (cartArr[i].new_quantity>0) {
                        cartArr[i].total_price = cartArr[i].product_price * cartArr[i].new_quantity
                      } else {
                        cartArr[i].total_price = cartArr[i].product_price * cartArr[i].product_quantity
                      }
                  }
                }
              }
            }  
          }  
        }
      }
    } else {
      // IF NOT logged in
      const cart_length = JSON.parse(localStorage.getItem('guest_cart'));

    //Proceed if there are items in localStorage guest cart
    if (cart_length.length >= 1) {
      // IF NOT logged in, get data from localStorage 'guest_cart'
      const cart_data = JSON.parse(localStorage.getItem('guest_cart'));

      for (var r = 0; r < cart_data.length; r++) {

        let index = r;
        const checkExisting = product_data.filter(function (item) {
          return item._id === cart_data[index].product_id;
        })

        // checks if items in local storage CART still exists
        if (checkExisting.length === 0) {
          //if it does not exist, splice product at index (r)
          cart_data.splice(r, 1);
        } else {
        }

        //check for duplicates and remove from cart_data
        if (cart_data.length >= 2) {
          for (var p = 1; p < cart_data.length; p++) {
            if (cart_data[r].product_id === cart_data[p].product_id && r !== p) {
              cart_data.splice(p, 1);
            }
          }
          // remove old local storage guest_cart
          localStorage.removeItem('guest_cart');
          // update new local storage guest_cart
          localStorage.setItem('guest_cart', JSON.stringify(cart_data));
        }
        //push all product_id into cartArr

        for (var q = 0; q < product_data.length; q++) {
          if (cart_data[r].product_id === product_data[q]._id) {
            //pushing product into cartArr
            cartArr.push(product_data[q])
            //add quantity KEY into cartArr[r]
            cartArr[r].product_quantity = cart_data[r].quantity;
          }
        }

        const global_discount = (1 - JSON.parse(Auth.getGlobalDiscount()) / 100);
        //Start Discount Check
        if (global_discount > 0) {
          console.log('|||||||||||||||||||||||| ADDING PRICES ||||||||||||||||||||||||||')
          //if discount exists, check if bulk and sale price exists before proceeding
          //Check product_sale_price
          if (cartArr[r].product_sale_price > 0) {
            cartArr[r].total_price = (cartArr[r].product_sale_price * cartArr[r].product_quantity);
          } else
          //check product_bulk_quantity, greater than 0 AND quantity is greater than the bulk to qualify
          if (cartArr[r].product_bulk_quantity > 0 && cartArr[r].product_bulk_quantity <= cartArr[r].product_quantity) {

            cartArr[r].total_price = (cartArr[r].product_quantity * cartArr[r].product_bulk_price);
          } else if (global_discount > 0) {
            // if quantity isn't enough, check if global discount is available to be applied
            cartArr[r].total_price = (cartArr[r].product_price * global_discount * cartArr[r].product_quantity);
          } else {
            // if global discount doesn't exist, proceed with regular price
            cartArr[r].total_price = (cartArr[r].product_quantity * cartArr[r].product_price);
          }

        } else {
          // Use regular price, since no discounts exist
          cartArr[r].total_price = (cartArr[r].product_quantity * cartArr[r].product_price);
        }
    }
  } else {
    console.log('your guest cart is empty')
  }
}

  localStorage.removeItem('new_cart');
  localStorage.setItem('new_cart', JSON.stringify(user_cart))
  const new_cart = localStorage.getItem('new_cart');

  //Add to cart price
  const cart_price = [];

  if (Auth.loggedIn()) {
    //check for USER total price
    for (var m = 0; m < cartArr.length; m++) {
      cart_price.push(JSON.parse(cartArr[m].total_price))
    }
  } else {
    //check for GUEST total price
    const cart_array_price = JSON.parse(new_cart);

    for (var h = 0; h < cart_array_price.length; h++) {
      cart_price.push(cart_array_price[h].total_price)
    }
  }

  const cart_total = cart_price.reduce((a,b) => a + b, 0);

  //check for guest_cart length
  const guest_cart_length = localStorage.getItem('guest_cart_quantity')
  //check for user_cart length
  const user_cart_length = cartArr.length;

  localStorage.setItem('cart_total', JSON.stringify(cart_total.toFixed(2)))

  if (error) return `...ERROR`;
  if (loading) return `...Loading`;

  return (
    <div className="window-cart-content">
      <Link to="/cart/pastorders" className="past-orders-button">Past Orders</Link>
      {(guest_cart_length > 0 || user_cart_length > 0) ? (
        <div className="window-cart-column">      
          <span className="total-text">Cart Total: RM {cart_total.toFixed(2)}</span> 
            <div className="window-cart-items-container">
              {state.active ? (
                <>
                {(JSON.parse(new_cart)).map((product) => (
                  <CartItem 
                    product={product}
                    user_cart={user_cart}
                    new_cart={new_cart}
                    updateState={updateState}
                    removeProduct={removeProduct}
                    updateMainCart={updateMainCart}
                  />
                ))}  
                </>               
              ) : (
                <>
                {(JSON.parse(new_cart)).map((product) => (
                  <CartItem 
                    product={product}
                    user_cart={user_cart}
                    new_cart={new_cart}
                    updateState={updateState}
                    removeProduct={removeProduct}
                    updateMainCart={updateMainCart}
                  />
                ))}
                </>                 
              )}
                        
            </div>
            <div className="window-cart-checkout-container">
              <Link to="/cart/checkout" className="checkout-button">CHECKOUT</Link>
              <div className="more-info-container">
                <MoreInfo />
              </div>
              <div className="empty-cart-slide">
                <ProductSlide
                  product_data={product_data}
                />
              </div>            
            </div>     
          </div>        
        ) : (
          <div className="empty-cart-display">
            <div className="empty-cart-content">
              <h1>Please fill your Cart</h1>
              <img alt="fish" src={Fish} className="empty-fish" />
              <div className="more-info-container">
                <MoreInfo />
              </div>
              <h1>Popular Products</h1>
              <div className="empty-cart-slide">
                <ProductSlide
                  product_data={product_data}
                />
              </div>

              <div className="past-orders-container">
                <PastOrders />
              </div>              
            </div>
          </div>
        )}               
    </div>
  )
}

export default WindowCart;