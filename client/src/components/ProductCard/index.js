import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Steak from '../../../src/assets/images/steak.jpeg';
import Seafood from '../../../src/assets/images/seafood.png';
import Cabbage from '../../../src/assets/images/cabbage.jpeg';
import Apple from '../../../src/assets/images/apple.jpeg';
import '../../css/Products.css';

function ProductCard() {

    const products = [
        {
            _id: '1239',
            name: 'Steak',
            category: 'Meat',
            price: '40',
            description: 'Great Wagyu steak from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
            weight: '10oz',
            picture: 'https://assets.bonappetit.com/photos/57ae47b5f1c801a1038bd23a/16:9/w_1280,c_limit/garlic-rosemary-steak.jpg',
            nameChinese: '牛扒',
            descriptionChinese: ''
        },
        {
            _id: '1234',
            category: 'Seafood',
            name: 'Lobster',
            price: '100',
            description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
            weight: '10oz',
            picture: 'https://st.depositphotos.com/1874629/1688/i/600/depositphotos_16882595-stock-photo-cooked-european-common-lobster.jpg',
            nameChinese: '龙虾',
            descriptionChinese: ''
            },
            {
            _id: '12348',
            category: 'Vegetables',
            name: 'Cabbage',
            price: '100',
            description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
            weight: '10oz',
            picture: 'https://healthyrecipesblogs.com/wp-content/uploads/2013/10/steamed-cabbage-square-2020.jpg',
            nameChinese: '龙虾',
            descriptionChinese: ''
            },
            {
            _id: '12342',
            category: 'Fruits',
            name: 'Apple',
            price: '100',
            description: 'Great Lobster from Japan, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mi id justo dignissim vulputate. Quisque ut erat dapibus, condimentum.',
            weight: '10oz',
            picture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/toast-with-avocado-and-cress-royalty-free-image-544809990-1541541433.jpg?crop=0.667xw:1.00xh;0.147xw,0&resize=480:*',
            nameChinese: '龙虾',
            descriptionChinese: ''
            },
      ]

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