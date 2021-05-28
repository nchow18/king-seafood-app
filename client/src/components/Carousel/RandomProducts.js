import React from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../../utils/queries';
import '../../css/RandomProducts.css';

function ProductCarousel() {

  const { loading, data } = useQuery(PRODUCTS);
  const productsArr = data?.products || {};

  function viewProduct(id) {
    Auth.setSingleProduct(id);
    Auth.viewSingleProduct();
  }

  const randomProducts = [];
  const products = randomProducts;

  if (data) {
    for (var i = 0; i < Math.round(productsArr.length * .3); i++ ) {
      var randomNumber = productsArr[Math.round(Math.random(productsArr.length))];
      randomProducts.push(randomNumber);
    }
  }

  if (loading) return `...Loading Data`;

  return (
    <>

      <Flickity>
      {products.map((product) => (
          <div key={product._id} className="carousel-img-container">
            <img alt={product.product_name} className="carousel-img" src={product.product_picture} />
            <div key={product._id} onClick={() => { viewProduct( product._id )}} className="carousel-img-title">
              <p>{product.product_name}</p>
              <p>RM {product.product_price}</p>
            </div>
          </div>
        ))}
      </Flickity>

    </>
  );
}

export default ProductCarousel;