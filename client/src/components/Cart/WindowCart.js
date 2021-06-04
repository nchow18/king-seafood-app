import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/WindowCart.css';
import '../../css/MobileCart.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART } from '../../utils/mutations';
import { USER_ME, PRODUCTS } from '../../utils/queries';
import ViewProduct from '../../components/Buttons/ViewProduct';
import UpdateCartButton from '../../components/Buttons/UpdateCart';
import Checkout from '../Buttons/Checkout';
import CheckoutDisplay from '../Cart/CheckoutDisplay';

function WindowCart(props) {

  const {
    setModal
  } = props

  const [checkOutModal, setCheckOutModal] = useState(false);
  const [removeCart, { error }] = useMutation(REMOVE_CART);
  const {data: dataR} = useQuery(USER_ME);
  const {loading, data} = useQuery(PRODUCTS);

  if (loading) return `...Loading`;

  const user_data = dataR?.userMe || {};
  const product_data = data?.products || {};
  const cartArr = [];
  const user_cart = cartArr;
  const cart_price = [];

  const removeProduct = async (id) => {

    if (Auth.loggedIn()) {
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
    } else {
      console.log('removing local storage item');
      // if NOT logged in, slice from localStorage
      // use array to sort guest_cart to find matching product_id
      for (var i = 0; i < user_cart.length; i++) {
        if (id === user_cart[i]._id) {
          //  splices at i = index, and 1 for removing 1 at a time
          user_cart.splice(i,1);
          console.log(user_cart);
          // push new cart to localStorage
          Auth.saveGuestCart(user_cart);
        }
      }
    }

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
                  // IF no special discounts applied, proceed to apply GLOBAL discount
                  if (cartArr[i].product_sale_price === 0 && cartArr[i].product_bulk_quantity === 0 ) {
                    //IF Both special discounts DO NOT exist on the product, apply the GLOBAL discount
                    const discount = Auth.getGlobalDiscount();
                    cartArr[i].total_price = (1 - discount/100) * cartArr[i].product_price * cartArr[i].quantity;
                } else {
                  // Check if product_sale_price exists, if so, apply update
                  if (cartArr[i].product_sale_price >= 1) {
                    // IF product_sale_price EXISTS,  SALE PRICE * QUANTITY to total_price
                    cartArr[i].total_price = (product_data[t].product_sale_price * user_data.cart[i].quantity);
                  } else {
                    // IF product_sale_price does NOT exist, apply discount for BULK quantity*price
                    if (cartArr[i].product_bulk_quantity <= user_data.cart[i].quantity) {
                      // IF cart quantity is GREATER than the product_bulk_quantity, discount can be applied
                      cartArr[i].total_price = (cartArr[i].product_bulk_price * user_data.cart[i].quantity);
                    } else {
                      // IF cart quantity is LESS than product_bulk_quantity, apply regular price
                      cartArr[i].total_price = (cartArr[i].product_price * user_data.cart[i].quantity)
                    }
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
    if (cart_length.length >= 1) {console.log('getting cart data from localStorage')
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
        console.log(cart_data);
        // SORT and include product data from database
        for (var y = 0; y < product_data.length; y++) {
          if (cart_data[r]._id === product_data[y]._id) {
            cartArr.push(product_data[y])
            // check for duplicate in cart and delete from guest_cart

            cartArr[r].quantity = cart_data[r].quantity;

            // IF no special discounts applied, proceed to apply GLOBAL discount
            if (cartArr[r].product_sale_price === 0 && cartArr[r].product_bulk_quantity === 0 ) {
              //IF Both special discounts DO NOT exist on the product, apply the GLOBAL discount
              const discount = Auth.getGlobalDiscount();
              cartArr[r].total_price = (1 - discount/100) * cartArr[r].product_price * cartArr[r].quantity;
          } else {
            // Check if product_sale_price exists, if so, apply update
            if (cartArr[r].product_sale_price >= 1) {
              // Check IF product_bulk_quantity exists, if so, SKIP
              if (cartArr[r].product_bulk_quantity >= 1) {
                return;
              } else {
                // IF product_bulk_quantity does not exist,SALE PRICE * QUANTITY to total_price
                cartArr[r].total_price = (product_data[y].product_sale_price * cart_data[r].quantity);
              }
            } else {
              // IF product_sale_price does NOT exist, apply discount for BULK quantity*price
              if (cartArr[r].product_bulk_quantity <= cart_data[r].quantity) {
                // IF cart quantity is GREATER than the product_bulk_quantity, discount can be applied
                cartArr[r].total_price = (cartArr[r].product_bulk_price * cart_data[r].quantity);
              }
            }
          }
        }
      }
    }
  }
}

  console.table(user_cart);

  Auth.setCartQuantity(user_cart.length);

  const cart_total = cart_price.reduce((a,b) => a + b, 0);
  Auth.getCartTotal(cart_total);

  if (error) return `...ERROR`;

  return (
    <div className="window-cart-content">
      <i onClick={() => {setModal(false)}} className="fas fa-times close-button"></i>         
          <div className="window-cart-column to-night">            
            <div className="window-cart-items-container to-night">
              <b>Your Cart</b>
              {user_cart.map((product) => (
                <div key={product._id} className="window-cart-product-row">
                  <img className="window-cart-product-img" alt={product.product_name} src={product.product_picture[0]} />
                  <div className="window-cart-product-details">
                    <div className="window-cart-product-text">
                      <b>{product.product_name}</b>
                      <p>{product.total_price}</p>
                    </div>
                      <div key={product._id} onClick={() => {removeProduct(product._id)}} className="mobile-cart-remove-button">REMOVE</div>
                  </div>
                  <UpdateCartButton product={product} />
                </div>
              ))}

            </div>
            <input type="checkbox" id="window-checkout-display" />
            <div className="window-cart-checkout-container">
              {checkOutModal && (
                <div className="checkout-container">
                <CheckoutDisplay
                  setCheckOutModal={setCheckOutModal} 
                  cart={user_cart} 
                />
                </div>
              )}
            <div onClick={() => {setCheckOutModal(true)}} className="checkout-button">CHECKOUT</div>
            <div className="checkout-disclaimer">Checkout with SWIPE</div>
            </div>
          </div>
    </div>
  )
}

export default WindowCart;