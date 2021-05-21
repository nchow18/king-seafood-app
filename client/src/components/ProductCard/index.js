import React from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';

function ProductCard() {

    const products = Auth.getProductArr();

    function viewProduct(productId) {

        Auth.setSingleProduct(productId);
        Auth.viewSingleProduct();
    }

    function setMode() {
        if (Auth.getMode() === 'dark') {
            Auth.getMode();
        }
    }

    var currentProduct = '';

    if (Auth.getProduct() === 'All') {
        currentProduct = products;
    } else {
        currentProduct = products.filter((product) => product.category === Auth.getProduct());
    }

    console.log(currentProduct);
    
    return (
        <>
        {currentProduct.map((product) => (
            <div onload={setMode()} className="product-card night-bg">
                <div className="product-card-picture-container">
                    <img alt={product._id} src={product.picture} className="product-card-picture"/>
                </div>
                <div className="product-card-description">
                    <p className="bold">{product.name} {product.nameChinese !== '' && (
                        <>({ product.nameChinese })</> )}</p>
                    <p>RM {product.price}</p>
                    {product.weight !== '' && (
                        <p>{product.weight}</p>
                    )}
                    <p>{product.description}</p>
                    <div className="product-button" key={product._id} onClick={() => {viewProduct(product._id)}}>VIEW PRODUCT</div>
                    <div className="product-button">ADD TO CART</div>
                </div>
            </div>
        ))}
        </>
    )
}

export default ProductCard;