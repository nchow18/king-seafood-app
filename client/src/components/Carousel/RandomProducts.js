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
    console.log('begin sorting numbers');
    for (var i = 0; i < Math.round(productsArr.length * .3); i++ ) {
      var number = 1;

      console.log(number)
      // get random number within the range of productsArr
      var randomNumber = Math.round(Math.random((productsArr.length * 0.3) * number));
      randomNumbers.push(randomNumber);
      
      //checks if there is a duplicate number in randomNumbers array with randomNumber, true or false.
      var duplicateCheck = randomNumbers.map((number) => number === randomNumber);

      // if true and randomNumbers length greater than 1, proceed to add product to randomProducts array list
      if (duplicateCheck && randomNumbers.length > 1) {
        return false;
      } else {
        randomProducts.push(productsArr[i])
      }
      number += 1;
      }
    }

    console.log(randomNumbers);

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