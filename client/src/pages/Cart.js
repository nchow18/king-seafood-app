import React from 'react';
import Auth from '../utils/auth';
import '../css/Cart.css';
import '../css/App.css';

function Cart() {

    const list = Auth.getCart();
    const cartArr = list[0].productList;

    console.log(list[0].cartTotal);

    return (
        <>
    	    <div className="flex-c-column content">
                <div className="flex-top-center-row">
                    <div className="flex-start-column">
                        {cartArr.map((cart) => (
                        <div key={cart.product_id} className="flex-start-row cart-row">
                            <div>
                                <img className="cart-picture" alt={cart.product_id} src={cart.product.picture} />
                            </div>
                            <div className="flex-start-between-column cart-column">
                                <span><b>Order Details</b></span>
                                <span>{cart.product.name}</span>
                                <span>{cart.product.description}</span>
                            </div>
                            <div className="flex-middle-column cart-column">
                                <div className="flex-middle-column">
                                    <span><b>Price</b></span>
                                    <span>{cart.product.price} RM</span>
                                </div>
                                <div className="flex-middle-column">
                                    <span><b>Weight</b></span>
                                    <span>{cart.product.weight}</span>
                                </div>

                            </div>
                            <div className="flex-middle-column cart-column">
                                <span><b>Quantity</b></span>
                                <span>{cart.qty}</span>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="flex-start-column payment-column cart-row">
                        <span><b>Cart Total: </b>{list[0].cartTotal} RM</span>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart;