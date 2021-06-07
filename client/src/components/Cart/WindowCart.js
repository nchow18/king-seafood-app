import React, { useEffect, useState, useContext } from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import { USER_ME, PRODUCTS } from '../../utils/queries';
import CheckoutDisplay from '../Cart/CheckoutDisplay';
import { UserContext } from '../../utils/GlobalState';
import CartItem from '../Cart/CartItem';
import Fish from '../../assets/images/clown-fish.png';
import ProductSlide from '../Cart/ProductsSlide';

function WindowCart(props) {

  const {
    setCartModal
  } = props

  const [state, dispatch] = useContext(UserContext)
  const [currentState, updateState] = useState(true);
  const [checkOutModal, setCheckOutModal] = useState(false);
  const [removeCart, { error }] = useMutation(REMOVE_CART);
  const {data: dataR} = useQuery(USER_ME);
  const {loading, data} = useQuery(PRODUCTS);

  if (loading) return `...Loading`;

  const user_data = dataR?.userMe || {};
  const product_data = data?.products || {};
  const cartArr = [];
  const user_cart = cartArr;


  const removeProduct = async (id) => {

    if (Auth.loggedIn() === true) {
      console.log('removing from USER database')
      // if LOGGED IN, remove from Database
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
      console.log('removing local storage item');
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
  console.log('getting data from USER cart data from database')
    if (user_data.cart) {
      if (user_data.cart.length === 0 && user_data === false) {
        console.log('there are no items in your cart')
        } else {
            console.log('there are items in your cart')
            for (var i = 0; i < user_data.cart.length; i++) {
              console.log('starting checking')
        
              var checkExisting = product_data.filter(function (item) {
                return item._id === user_data.cart[i].product_id;
              })
        
              if (checkExisting.length === 0) {
                console.log('items in your cart have non-existing products');
                console.log(user_data.cart[i].product_id)
                try {
                  removeCart({
                    variables: {
                      product_id: user_data.cart[i].product_id
                    }
                  })
                  console.log('removed from cart');
                } catch (e) {
                  console.log(e)
                }
              } else {
                console.log('your cart products still exist in the database');
              }

              for (var t = 0; t < product_data.length; t++) {
                if (user_data.cart[i].product_id === product_data[t]._id) {
                  cartArr.push(product_data[t])
                  cartArr[i].quantity = user_data.cart[i].quantity;
                  
                  //check for global discount
                for (var e = 0; e < user_data.cart.length; e++) {
                  if (Auth.getGlobalDiscount !== '0') {
                    // If global discount is greater than 0, proceed check if bulk / special exists on the product
                    console.log('global discount greater than 0')
                    //check if sale price exists
                    if (cartArr[i].product_sale_price !== '0') {
                      //if sale price greater than 0, apply sale discount
                      cartArr[i].total_price = JSON.parse(cartArr[i].product_sale_price) * cartArr[i].quantity;
                    } else if (cartArr[i].product_bulk_price !== "0" && cartArr[i].product_bulk_quantity <= parseInt(cartArr[i].quantity)) {
                      // if bulk price is greater than 0 AND bulk quantity is less than QUANTITY
                      cartArr[i].total_price = cartArr[i].quantity * cartArr[i].product_bulk_price
                    } else {
                      //if sale price / bulk price doesn't exist, apply global discount
                      cartArr[i].total_price = cartArr[i].quantity * (cartArr[i].product_price * (1 - (Auth.getGlobalDiscount()/100)));
                    }
                  } else {
                    // if gobal discount does not exist, apply regular price
                    cartArr[i].total_price = cartArr[i].product_price * cartArr[i].quantity
                  }
                }
              }
            }  
          }  
        }
      }
    } else {

      const cart_length = JSON.parse(localStorage.getItem('guest_cart'));

    //Proceed if there are items in localStorage guest cart
    if (cart_length.length >= 1) {
      console.log('getting cart data from localStorage')
      // IF NOT logged in, get data from localStorage 'guest_cart'
      const cart_data = JSON.parse(localStorage.getItem('guest_cart'));

      for (var r = 0; r < cart_data.length; r++) {
        var checkExisting = product_data.filter(function (item) {
          return item._id === cart_data.[r].product_id;
        })

        // checks if items in local storage CART still exists
        if(checkExisting.length === 0) {
          console.log('items in your cart have non-existing products');
          //if it does not exist, splice product at index (r)
          cart_data.splice(r, 1);
        } else {
          console.log('your cart products still exist in the database');
        }

        //check for duplicates and remove from cart_data
        if (cart_data.length >= 2) {
          for (var p = 1; p < cart_data.length; p++) {
            if (cart_data[r].product_id === cart_data[p].product_id && r !== p) {
              cart_data.splice(p, 1);
              console.log('duplicate at ' + p + ' index removed');
            }
          }
          // remove old local storage guest_cart
          localStorage.removeItem('guest_cart');
          // update new local storage guest_cart
          localStorage.setItem('guest_cart', JSON.stringify(cart_data));
        }
        console.log('no duplicates found');
        //push all product_id into cartArr

        for (var q = 0; q < product_data.length; q++) {
          if (cart_data[r].product_id === product_data[q]._id) {
            //pushing product into cartArr
            cartArr.push(product_data[q])
            //add quantity KEY into cartArr[r]
            cartArr[r].quantity = cart_data[r].quantity;
          }
        }

        const global_discount = (1 - parseInt(Auth.getGlobalDiscount()) / 100);
        //Start Discount Check
        if (global_discount > 0) {
          console.log('|||||||||||||||||||||||| ADDING PRICES ||||||||||||||||||||||||||')
          //if discount exists, check if bulk and sale price exists before proceeding
          //Check product_sale_price
          if (cartArr[r].product_sale_price > 0) {
            cartArr[r].total_price = (cartArr[r].product_sale_price * cartArr[r].quantity);
          } else
          //check product_bulk_quantity, greater than 0 AND quantity is greater than the bulk to qualify
          if (cartArr[r].product_bulk_quantity > 0 && cartArr[r].product_bulk_quantity <= cartArr[r].quantity) {

            cartArr[r].total_price = (cartArr[r].product_bulk_quantity * cartArr[r].product_bulk_price);
          } else if (global_discount > 0) {
            // if quantity isn't enough, check if global discount is available to be applied
            cartArr[r].total_price = (cartArr[r].product_price * global_discount * cartArr[r].quantity);
          } else {
            // if global discount doesn't exist, proceed with regular price
            cartArr[r].total_price = (cartArr[r].quantity * cartArr[r].product_price);
          }

        } else {
          // Use regular price, since no discounts exist
          cartArr[r].total_price = (cartArr[r].quantity * cartArr[r].product_price);
        }
    }
  } else {
    console.log('your guest cart is empty')
  }
}

  localStorage.removeItem('new_cart');
  localStorage.setItem('new_cart', JSON.stringify(user_cart))
  const new_cart = localStorage.getItem('new_cart');
  // Auth.setCartQuantity(user_cart.length);

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

  if (error) return `...ERROR`;

  return (
    <div className="window-cart-content">
      <i onClick={() => {setCartModal(false)}} className="fas fa-times menu-icon"></i>
      {(guest_cart_length > 0 || user_cart_length > 0) ? (
        <div className="window-cart-column to-night">
          <span className="total-text">Cart Total: {cart_total.toFixed(2)}</span> 
            <div className="window-cart-items-container to-night">
              {state.active === true && (
                <>
              {(JSON.parse(new_cart)).map((product) => (
                  <CartItem 
                    product={product}
                    user_cart={user_cart}
                    new_cart={new_cart}
                    updateState={updateState}
                    removeProduct={removeProduct}
                  />
                ))}
                </>
              )}
              {state.active === false && (
                <>
              {(JSON.parse(new_cart)).map((product) => (
                  <CartItem 
                    product={product}
                    user_cart={user_cart}
                    new_cart={new_cart}
                    updateState={updateState}
                    removeProduct={removeProduct}
                  />

                ))}
                </>
              )}                            
            </div>
            <div className="window-cart-checkout-container">
              {checkOutModal && (
                <div className="checkout-container">
                  <CheckoutDisplay
                    setCheckOutModal={setCheckOutModal} 
                    cart={user_cart}
                    local_cart={local_cart}
                    cart_total={cart_total}
                />
                </div>
              )}
            <div onClick={() => {setCheckOutModal(true)}} className="checkout-button">CHECKOUT</div>
            <div className="checkout-disclaimer">Checkout with SWIPE</div>
            </div>
          </div>        
        ) : (
          <div className="empty-cart-display">
            <div className="empty-cart-content">
              <span>Please fill your Cart</span>
              <img alt="fish" src={Fish} className="empty-fish" />
              <span>Products you might like</span>
              <ProductSlide
                product_data={product_data}
              />
            </div>
          </div>
        )}               
    </div>
  )
}

export default WindowCart;