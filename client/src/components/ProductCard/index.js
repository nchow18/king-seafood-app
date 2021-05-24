import React from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../../utils/queries';

function ProductCard() {

    const { loading, data } = useQuery(PRODUCTS);

    const products = data?.products || {};

    function viewProduct(productId) {
        Auth.setSingleProduct(productId);
        Auth.viewSingleProduct();
    }

    var currentProduct = '';

    if (Auth.getProduct() === 'All') {
        currentProduct = products;
    } else {
        currentProduct = products.filter((product) => product.category === Auth.getProduct());
    }
    
    return (
        <>
        {currentProduct.map((product) => (
            <div key={product._id} className="product-card night-bg">
                <div className="product-card-picture-container">
                    <img alt={product._id} src={product.product_picture} className="product-card-picture"/>
                </div>
                <div className="product-card-description">
                    <div>
                        <p className="bold">{product.product_name} {product.product_nameChinese !== '' && (
                            <>({ product.product_nameChinese })</> )}</p>
                        <p>RM {product.product_price}</p>
                        {product.product_weight !== '' && (
                            <p>{product.product_weight}</p>
                        )}
                        {product.product_description !== 0 ? (
                            <p>Product Available</p>
                        ) : (
                            <p>Out Of Stock</p>
                        )}
                        <p>{product.product_description}</p>
                    </div>
                    <div>
                        <div className="product-button" key={product._id} onClick={() => {viewProduct(product._id)}}>VIEW PRODUCT</div>
                        <div className="product-button">ADD TO CART</div>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default ProductCard;