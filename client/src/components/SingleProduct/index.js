import React from 'react';
import Auth from '../../utils/auth';
import { useLocation } from 'react-router-dom';
import '../../css/Products.css';

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
                <div className="single-product-container">
                    <div>
                        <img alt={currentProduct[0]._id} src={currentProduct[0].picture} className="single-product-img" />
                    </div>
                    <div className="flex-start-column single-product-details">
                        <span><b>Name: </b>{currentProduct[0].name}</span>
                        {currentProduct[0].nameChinese !== '' && (
                            <span><b>Chinese Name: </b>{currentProduct[0].nameChinese}</span>
                        )}
                        <span><b>Price: </b>{currentProduct[0].name}</span>
                        <span><b>Description: </b>{currentProduct[0].name}</span>
                        {currentProduct[0].descriptionChinese !== '' && (
                            <span><b>Chinese Description: </b>{currentProduct[0].name}</span>
                        )}
                        {currentProduct[0].weight !== ''&& (
                            <span><b>Weight: </b>{currentProduct[0].weight}</span>
                        )}

                        {currentProduct[0].availability !== 0 ? (
                            <>
                                <span><b>Availability: </b>In Stock</span>
                            </>
                        ) : (
                            <>
                                <span><b>Availability: </b>Out Of Stock</span>
                            </>
                        )}
                    </div>
                </div>                
            </div>

        </>
    )
}

export default SingleProduct;