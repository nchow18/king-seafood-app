import React, { useState } from 'react';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';


function ProductPictureCarousel(props) {

  const {
    product
  } = props


  return (
    <>
      <Flickity>
        {product.product_picture.map((picture) => (
          <img key={picture} alt={product._id} src={picture} className="single-product-img" />
        ))}
      </Flickity>    
    </>
  );
}

export default ProductPictureCarousel;