import React from 'react';
import Auth from '../../utils/auth';
import { useLocation } from 'react-router-dom';

function SingleProduct() {

    const productId = Auth.getSingleProduct();
    const productType = Auth.getProduct();
    const location = useLocation();

    if (Auth.getMode() === 'dark') {
        Auth.getMode();
    }

    const products = Auth.getProductArr();

    var currentProduct = '';

    if (productId) {
        currentProduct = products.filter((id) => id._id === productId)
    }

    console.log(currentProduct);

    return (
        location.pathname === `/product/${productId}` &&
        <>
    	    <div className="flex-c-column content">
                <div className="flex-start-row">
                    <div>
                        {/* <img alt={currentProduct.} */}
                    </div>
                    <div>

                    </div>
                </div>                
            </div>

        </>
    )
}

export default SingleProduct;