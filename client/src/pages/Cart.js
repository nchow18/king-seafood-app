import React, { useEffect } from 'react';
import Auth from '../utils/auth';
import '../css/Cart.css';
import '../css/App.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { REMOVE_CART, UPDATE_CART } from '../utils/mutations';
import { USER, PRODUCTS } from '../utils/queries';

function Cart() {

    const {loading, data} = useQuery(PRODUCTS)

    const user_cart = JSON.parse(localStorage.getItem('user_cart'));
    const products = data?.products || {};

    console.log(user_cart);

    const cartArr = [];
    const cartTotal = [];
    var newCart = [];

    useEffect(() => {

    })

    if (Auth.getToken()) {
        for (var i = 0; i < user_cart.length; i++) {

        let test = i;

            const productsArr = Object.values(products).filter(product => product._id === user_cart[test].product_id)

            cartArr.push(productsArr);
        }

        for (var y = 0; y < cartArr.length; y++) {
            const price = cartArr[y][0].product_price;
            cartTotal.push(price);
            newCart.push(cartArr[y][0])
        }
        for (var t = 0; t < user_cart.length; t++) {
            newCart[t].quantity = user_cart[t].quantity;
        }
    }
    const cart_total = cartTotal.reduce((a,b) => a + b, 0);

    function viewProduct(id) {
        Auth.setSingleProduct(id);
        Auth.viewSingleProduct();
    }

    Auth.getCartTotal(cart_total);

    if (loading) return 'Loading...';

    return (
        <>
    	    <div className="flex-c-column content">
                <div className="flex-top-center-row">
                    <div className="flex-start-column">
                        {newCart.map((cart) => (
                        <div key={cart.product_id} className="flex-start-row cart-row">
                            <div>
                                <img className="cart-picture" alt={cart.product_id} src={cart.product_picture} />
                            </div>
                            <div className="flex-start-between-column cart-column">
                                <span><b>Order Details</b></span>
                                <span>{cart.product_name}</span>
                                <span>{cart.product_description}</span>
                                <button key={cart._id} onClick={() => {viewProduct(cart._id)}}>VIEW ITEM</button>
                            </div>
                            <div className="flex-middle-column cart-column-small">
                                <div className="flex-middle-column">
                                    <span><b>Price</b></span>
                                    <span>{cart.product_price} RM</span>
                                </div>
                                <div className="flex-middle-column">
                                    <span><b>Weight</b></span>
                                    <span>{cart.product_weight}</span>
                                </div>

                            </div>
                            <div className="flex-middle-column cart-column-small">
                                <span><b>Quantity</b></span>
                                <span>{cart.quantity}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="flex-start-column payment-column cart-row">
                        <span><b>Cart Total: </b>{cart_total} RM</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;