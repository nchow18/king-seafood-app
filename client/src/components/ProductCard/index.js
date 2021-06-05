import React, { useState } from 'react';
import Auth from '../../utils/auth';
import '../../css/Products.css';

import SingleProduct from '../SingleProduct/';
import Quantity from '../Quantity';

function ProductCard(props) {

  const {
  products=[],
  currentProductLink
  } = props

  const [productArr] = useState({...products})

  var productCategory = []

  if (currentProductLink.name === 'All') {
    productCategory = products;
  } else {
    const currentProduct = products.filter((product) => product.product_category.toLowerCase() === currentProductLink.name.toLowerCase());
    productCategory = currentProduct;
  }

  const [isModal, setModal] = useState(false);
  const [currentSingleProduct, setSingleProduct] = useState(productArr[0])

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
  {productCategory.map((product) => (
    <div key={product._id} className="product-card night-bg">
    <div className="product-card-picture-container">
      <img onClick={() => {setSingleProduct(product); setModal(true)}} alt={product.product_name} src={product.product_picture[0]} className="product-card-picture"/>
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
      {product.product_description !== 0 ? (
        <span>Product Available</span>
      ) : (
        <span>Out Of Stock</span>
      )}
      </div>

      <div className="quantity-section">
        <Quantity
          product={product}
        />
      </div>
    </div>
    </div>
  ))}
  </>
  )
}

export default ProductCard;