import React from 'react';
import Auth from '../../utils/auth';
import { useLocation } from 'react-router-dom';

function SingleProduct() {

    const productId = Auth.getSingleProduct();
    const productType = Auth.getProduct();
    const location = useLocation();

    console.log(productId);
    console.log(productType);

    if (Auth.getMode() === 'dark') {
        Auth.getMode();
    }

    return (
        location.pathname === `/product/${productId}` &&
        <>
    	    <div className="flex-c-column content">
                {productId}                
            </div>

        </>
    )
}

export default SingleProduct;