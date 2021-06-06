import React, { useState } from 'react';
import '../../css/flickity.css';
import '../../css/RandomProducts.css';
import SingleProduct from '../SingleProduct/index';
import '../../css/Products.css';
import '../../css/FeaturedProducts.css';

function FeaturedCarousel(props) {

  const {
  products = []
  } = props

  const [isModal, setModal] = useState(false);
  const [links] = useState({...products})
  const [currentProduct, setProduct] = useState(links[0])

  const featuredProducts = products.filter(function (product) {
    return product.product_featured === true;
  })
  

  if (products.length === 0) return `...Loading`;

  return (
  <>
    <div className="featured-product-slider-container">
      <div className="featured-product-slider">
        {featuredProducts.map((product) => (
          <div>
            <img alt={product.product_name} onClick={() => {setModal(true); setProduct(product)}} className="carousel-img" src={product.product_picture[0]} />
            <div className="carousel-img-title">
              <p>{product.product_name}</p>
              <p>RM {product.product_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {isModal && (
    <div className="random-product-display">
      <SingleProduct
      setModal={setModal}
      singleProduct={currentProduct}
      />
    </div>
    )}
  </>
  );
}

export default FeaturedCarousel;