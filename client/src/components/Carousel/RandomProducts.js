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
  const randomNumbers = [];

  if (data) {
    for (var i = 0; i < Math.round(productsArr.length); i++ ) {
      var number = 1 + i;

      // get random number within the range of productsArr
      var randomNumber = Math.round(Math.random() * productsArr.length);
      randomNumbers.push(randomNumber);

      var verify = randomNumbers.filter(function (number) {
        return number === i;
      })

      if (verify.length === 0) {
        randomProducts.push(productsArr[i])
      }

      }
    }

  if (loading) return `...Loading Data`;

  return (
    <>

      <Flickity>
      {products.map((product) => (
          <div key={product._id} className="carousel-img-container">
            <img alt={product.product_name} className="carousel-img" src={product.product_picture[0]} />
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