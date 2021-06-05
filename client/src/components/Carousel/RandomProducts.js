import React, { useState } from 'react';
import Auth from '../../utils/auth';
import Flickity from 'react-flickity-component';
import '../../css/flickity.css';
import { useQuery } from '@apollo/react-hooks';
import { PRODUCTS } from '../../utils/queries';
import '../../css/RandomProducts.css';
import SingleProduct from '../SingleProduct/index';
import '../../css/Products.css';

function ProductCarousel() {

  const { loading, data } = useQuery(PRODUCTS);
  const [isModal, setModal] = useState(false);
  const productsArr = data?.products || {};


  function viewProduct(id) {
    Auth.setSingleProduct(id);
    Auth.viewSingleProduct();
  }

  const randomProducts = [];
  const products = randomProducts;
  const randomNumbers = [];

  const [links] = useState({...products})

  if (data) {
    for (var i = 0; i < Math.round(productsArr.length * .1); i++ ) {
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

  const [currentProduct, setProduct] = useState(links[0])

  if (loading) return `...Loading Data`;

  return (
    <>

      <Flickity>
      {products.map((product) => (
          <div key={product._id} onClick={() => {setModal(true); setProduct(product)}} className="carousel-img-container">
            <img alt={product.product_name} className="carousel-img" src={product.product_picture[0]} />
            <div key={product._id} className="carousel-img-title">
              <b>{product.product_name}</b>
              <b>RM {product.product_price}</b>
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

export default ProductCarousel;