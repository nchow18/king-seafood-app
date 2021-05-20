import React from 'react';
import Auth from '../../utils/auth';
import { useLocation } from 'react-router-dom';

function SingleProduct() {

    const productId = Auth.getSingleProduct();
    const productType = Auth.getProduct();
    const location = useLocation();

    console.log(productId);
    console.log(productType);

    return (
        location.pathname !== productId &&
        <>
            {productType} - {productId}
        </>
    )
}

export default SingleProduct;