import React, { useState } from 'react';
import '../../css/Products.css';

import AddCart from './AddCart';

function ProductCard(props) {

  //process.env.PUBLIC_URL

  const {
  productCategory=[],
  setCurrentHeaderLink,
  user_me,
  headerLinks
  } = props

  return (
  <>
  {productCategory.map((product) => (
    <div key={product._id} className="product-card">
      {product.product_status === false && (
          <>
          <div className="out-stock-cover mobile-out-stock">
            <span>OUT OF STOCK</span>
          </div>
        </>
      )}
      <div>
          <img onClick={() => {}} alt={product.product_name} src={`http://media.kingsseafood18.com/media/products/thumbnails/tn_${product.product_picture[0]}.jpg`} className="product-card-picture"/>
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
        <span><b>Price: RM </b>{product.product_price}</span>
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
      {product.product_description1 !== '0' && (
        <>
          <b>Description:</b><span className="blue-font">{product.product_description1}</span>
        </>
      )}
      </div>
    </div>
        <AddCart 
          product={product}
          user_me={user_me}
          setCurrentHeaderLink={setCurrentHeaderLink}
          headerLinks={headerLinks}
        />
    </div>
  ))}
  </>
  )
}

export default ProductCard;