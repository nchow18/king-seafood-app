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
          <img alt={product.product_name} src={product.product_picture[0]} className="product-card-picture"/>
        </div>
        <div className="product-card-description">
          <div className="product-card-font">
            <span className="bold">{product.product_name} {product.product_nameChinese !== '' && (
              <>({ product.product_nameChinese })</> )}</span>
            {product.product_sale_price ? (
              <>
              <span><b>Price: </b><span className="font-strike">{product.product_price}</span></span>
              </>
            ) : (
              <>
              <b>Price: </b><span>{product.product_price}</span>
              </>
            )}
            {product.product_sale_price && (
              <b className="font-red">Sale Price: RM {product.product_sale_price}</b>
            )}
            {product.product_bulk_quantity && (
              <b className="font-red">Bundle Deal! Buy {product.product_bulk_quantity} or more for RM {product.product_bulk_price} each</b>
            )}
            {product.product_weight !== '' && (
              <span>{product.product_weight}</span>
            )}
            {product.product_description !== 0 ? (
              <span>Product Available</span>
            ) : (
              <span>Out Of Stock</span>
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