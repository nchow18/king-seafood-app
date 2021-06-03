import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useLocation } from 'react-router-dom';
import '../../css/Products.css';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { PRODUCT } from '../../utils/queries';
import { ADD_CART } from '../../utils/mutations';

function SingleProduct(props) {

  const {
    setModal,
    singleProduct
  } = props

  const product = singleProduct;
  const [addCart, {error}] = useMutation(ADD_CART);
  const [ formData, setFormData ] = useState ({
    quantity: '',
  })

  if (Auth.getMode() === 'dark') {
    Auth.getMode();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const addToCart = async (e) => {

    try {
      addCart({ variables: {
        input: {
          product_id: product._id,
          quantity: parseInt(formData.quantity),
        }
      }})
      alert('Added to cart');
    } catch (e) {
      console.log(e);
    }
  }

  if (error) return '...ERROR';

  return (
    <>
  	  <div className="single-product-page">
      <i onClick={() => {setModal(false)}} className="fas fa-times admin-close"></i>
        <div className="single-product-container">
          <div className="single-product-img-container">
            <img alt={product._id} src={product.product_picture} className="single-product-img" />
          </div>
          <div className="single-product-details">
            <span><b>Name: </b>{product.product_name}</span>
            {product.product_nameChinese !== '' && (
              <span><b>Chinese Name: </b>{product.product_nameChinese}</span>
            )}
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
              <b className="font-red">Sale Price: {product.product_sale_price} RM</b>
            )}
            {product.product_bulk_quantity && (
              <b className="font-red">Bundle Deal! Buy {product.product_bulk_quantity} for {product.product_bulk_price} RM</b>
            )}
            <span><b>Description: </b>{product.product_name}</span>
            {product.descriptionChinese !== '' && (
              <span><b>Chinese Description: </b>{product.product_descriptionChinese}</span>
            )}
            {product.weight !== ''&& (
              <span><b>Weight: </b>{product.product_weight}</span>
            )}

            {product.product_status !== 0 ? (
              <>
                <span><b>Availability: </b>In Stock</span>
              </>
            ) : (
              <>
                <span><b>Availability: </b>Out Of Stock</span>
              </>
            )}
            <b>Quantity: </b><input value={formData.quantity} onChange={handleInputChange} name="quantity" className="quantity-product-input" />
            <button className="product-button" onClick={() => { addToCart() }}>ADD TO CART</button>
          </div>
        </div>        
      </div>

    </>
  )
}

export default SingleProduct;