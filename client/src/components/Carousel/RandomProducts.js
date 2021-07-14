import React, { useState, useEffect } from 'react';
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

  var newList = []

  for (var i = 0; i < productsArr.length; i++) {
    if (productsArr[i].product_views > 0) {
      newList.push(productsArr[i])
    }
  }

  const mostViewed = newList.sort((a,b) => b.product_views - a.product_views)

  const products = mostViewed;
  const [links] = useState({...products})

  const [currentProduct, setProduct] = useState(links[0])

  if (loading) return `...Loading Data`;

  return (
    <>
      <div className="random-product-container">
        <div className="random-product-slider">
          {products.map((product) => (
              <div key={product._id} onClick={() => {setModal(true); setProduct(product)}} className="carousel-img-container">
                <img alt={product.product_name} className="carousel-img" src={process.env.PUBLIC_URL + `/images/products/${product.product_picture[0]}.JPEG`} />
                <div key={product._id} className="carousel-img-title">
                  <b>{product.product_name}</b>
                  <b>RM {product.product_price}</b>
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

export default ProductCarousel;