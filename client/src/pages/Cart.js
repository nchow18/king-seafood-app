import React from 'react';
import Auth from '../utils/auth';
import '../css/Cart.css';
import '../css/App.css';

function Cart() {

    const list = Auth.getCart();

    const cartArr = list[0].productList;

    console.log(cartArr);

    return (
        <>
    	    <div className="flex-c-column content">
                {cartArr.map((cart) => (
                    <div key={cart.product_id} className="flex-start-row cart-row">
                        <div>
                            <img className="cart-picture" alt={cart.product_id} src={cart.product.picture} />
                        </div>
                        <div className="flex-start-column cart-column">
                            <span><b>Order Details</b></span>
                            <span>{cart.product.name}</span>
                            <span>{cart.product.price}</span>
                            <span>{cart.product.description}</span>
                        </div>
                        <div>
                            <span><b>Price</b></span>
                        </div>
                        <div>QUANTITY</div>
                    </div>
                ))}
                
            </div>
        </>
    )
}

export default Cart;