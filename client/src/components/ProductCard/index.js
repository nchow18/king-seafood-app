import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';

import SingleProduct from '../SingleProduct/';
import Quantity from '../Quantity';

function ProductCard(props) {

  const {
  products=[],
  currentProductLink,
  productCategory=[],
  user,
  setCategoryModal
  } = props

  const [productArr] = useState({...products})

  const [isModal, setModal] = useState(false);
  const [currentSingleProduct, setSingleProduct] = useState(productArr[0])
  const featured = currentProductLink === 'featured' ? true : false;

  console.log(featured);

  return (
  <>
    {isModal && (
    <div className="single-product-modal-container">
      <SingleProduct 
      setModal={setModal}
      singleProduct={currentSingleProduct}
      user={user}
      setCategoryModal={setCategoryModal}
      />
    </div>
    )}
  {productCategory.map((product) => (
    <div key={product._id} className="product-card night-bg">
    <div className="product-card-picture-container">

      {product.product_status ? (
        <img onClick={() => {setSingleProduct(product); setModal(true);}} alt={product.product_name} src={product.product_picture[0]} className="product-card-picture"/>
      ) : (
        <>
          <div className="out-stock-cover">OUT OF STOCK</div>
          <img onClick={() => {setSingleProduct(product); setModal(true);}} alt={product.product_name} src={product.product_picture[0]} className="product-card-picture"/>
        </>
      )}
    </div>
    <div className="product-card-description">
      <div className="product-card-font">
      <span className="bold">{product.product_name} {product.product_nameChinese !== '' && (
        <>{ product.product_nameChinese }</> )}</span>
      {product.product_sale_price > 1  && (
        <>
        <span><b>Price: </b><span className="font-strike">{product.product_price}</span></span>
        </>
      )}
      {product.product_sale_price <= 0 && (
        <>
        <span><b>Price: </b>{product.product_price}</span>
        </>
      )}
      {product.product_sale_price >= 1 && (
        <b className="font-red">Sale Price: RM {product.product_sale_price}</b>
      )}
      {product.product_bulk_quantity >=1 && (
        <b className="font-red">Bundle Deal! Buy {product.product_bulk_quantity} or more for RM {product.product_bulk_price} each</b>
      )}
      {product.product_weight !== '' && (
        <span>{product.product_weight}</span>
      )}
      {product.product_status !== false ? (
        <span>Product Available</span>
      ) : (
        <span>Out Of Stock</span>
      )}
      {product.product_description !== '' && (
        <>
          <b>Description:</b><span className="blue-font">{product.product_description}</span>
        </>
      )}
      </div>

      <div className="quantity-section">
        <Quantity
          product={product}
          user={user}
        />
      </div>
    </div>
    </div>
  ))}
  </>
  )
}

export default ProductCard;