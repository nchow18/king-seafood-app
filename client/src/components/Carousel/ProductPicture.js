import React, { useState } from 'react';
import '../../css/ProductSlide.css';


function ProductPictureCarousel(props) {

  const {
    product
  } = props

  return (
    <>
      <div className="product-slide-container">
        <div className={`product-slider ${product.product_picture.length === 1 && `single-product-center`}`}>
        {product.product_picture.map((picture) => (
          <img key={picture} alt={product._id} src={picture} className="single-product-img" />
        ))}
        </div>
      </div> 
    </>
  );
}

export default ProductPictureCarousel;