import React from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';

function FeaturedCarousel(props) {

  const {
    products = []
  } = props

  function viewProduct(id) {
    Auth.setSingleProduct(id);
    Auth.viewSingleProduct();
  }

  if (products.length === 0) return `...Loading Data`;

  const featuredProducts = products;
  
  return (
    <>

      <Flickity>
      {featuredProducts.map((product) => (
          <div key={product._id} className="promo-img-container">
            <img alt={product.product_name} className="promo-img" src={product.product_picture} />
            <div key={product._id} onClick={() => { viewProduct( product._id )}} className="promo-img-title">
              <p>{product.product_name}</p>
              <p>RM {product.product_price}</p>
            </div>
          </div>
        ))}
      </Flickity>

    </>
  );
}

export default FeaturedCarousel;