import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../../utils/queries';
import { ADD_CART } from '../../utils/mutations';
import SingleProduct from '../SingleProduct/';

function ProductCard() {

  const { loading, data } = useQuery(PRODUCTS);
  const [addCart, {error}] = useMutation(ADD_CART);


  const products = data?.products || {};

  const [productArr] = useState({...products})
  const [currentSingleProduct, setSingleProduct] = useState(productArr[0])

  const addToCart = async (data) => {
    if (Auth.loggedIn() === false) {
    return alert('Please Sign in OR Sign up');
    }
    
    try {
      addCart({ variables: {
        input: {
          product_id: data,
          quantity: 1,
        }
      }})
      alert('Added to cart');
    } catch (e) {
      console.log(e);
    }
  }

  var currentProduct = '';

  if (Auth.getProduct() === 'All') {
    currentProduct = products;
  } else {
    currentProduct = products.filter((product) => product.category === Auth.getProduct());
  }

  const [isModal, setModal] = useState(false);

  if (loading) return 'Loading...';
  if (error) return '...ERROR';

  
  return (
    <>
      {isModal && (
        <div className="single-product-modal-container">
          <SingleProduct 
            setModal={setModal}
            singleProduct={currentSingleProduct}
          />
        </div>
      )}
    {currentProduct.map((product) => (
      <div key={product._id} className="product-card night-bg">
        <div className="product-card-picture-container">
          <img alt={product.product_name} src={product.product_picture} className="product-card-picture"/>
        </div>
        <div className="product-card-description">
          <div className="product-card-font">
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
          </div>

          <div className="product-button-container">
            <div className="product-button" onClick={() => {setSingleProduct(product); setModal(true)}}>VIEW PRODUCT</div>
            <div className="product-button" key={product._id} onClick={() => { addToCart(product._id) }}>ADD TO CART</div>
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default ProductCard;