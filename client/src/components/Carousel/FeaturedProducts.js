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

  const featuredProducts = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].product_featured === true) {
      featuredProducts.push(products[i])
    }
  }

  if (featuredProducts.length === 0) return `...No Featured Products`;

  return (
  <>
    <div className="random-product-container">
      <div className="random-product-slider">
        {featuredProducts.map((product) => (
          <div className="carousel-img-container">
            <img alt={product.product_name} onClick={() => {setModal(true); setProduct(product)}} className="carousel-img" src={`http://media.kingsseafood18.com/media/products/${product.product_picture[0]}.jpg`} />
            <div className="carousel-img-title">
              <span><b>{product.product_name}</b></span>
              <span><b>RM {product.product_price}</b></span>
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