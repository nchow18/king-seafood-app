import React from 'react';
import '../../css/ProductSlide.css';


function ProductPictureCarousel(props) {

  const {
    product
  } = props

  console.log(product[0]);

  return (
    <>
      <div className="product-slide-container">
        <div className={`product-slider ${product.product_picture.length === 1 && `single-product-center`}`}>
        {product.product_picture.map((picture) => (
          <img key={picture} alt={product._id} src={`http://media.kingsseafood18.com/media/products/${picture}.jpg`} className="single-product-img" />
        ))}
        </div>
      </div> 
    </>
  );
}

export default ProductPictureCarousel;