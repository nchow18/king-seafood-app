import React, { useState } from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';
import '../../css/RandomProducts.css';
import SingleProduct from '../SingleProduct/index';
import '../../css/Products.css';

function FeaturedCarousel(props) {

  const {
    products = []
  } = props

  const [isModal, setModal] = useState(false);
  const [links] = useState({...products})
  const [currentProduct, setProduct] = useState(links[0])


  if (products.length === 0) return `...Loading Data`;

  const featuredProducts = products;
  
  return (
    <>
      <Flickity>
      {featuredProducts.map((product) => (
          <div key={product._id} className="promo-img-container">
            <img alt={product.product_name} onClick={() => {setModal(true); setProduct(product)}} className="promo-img" src={product.product_picture[0]} />
            <div key={product._id} className="promo-img-title">
              <p>{product.product_name}</p>
              <p>RM {product.product_price}</p>
            </div>
          </div>
        ))}
      </Flickity>
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