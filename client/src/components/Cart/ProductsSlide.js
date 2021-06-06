import React, { useState } from 'react';
import '../../css/ProductSlide.css';
import SingleProduct from '../SingleProduct';

function ProductSlide(props) {

  const {
    product_data = []
  } = props

  const [singleProduct] = useState([...product_data])
  const [isModal, setModal] = useState(false);
  const random_products = [];

  if (product_data) {
    for (var i = 0; i < 10; i++) {
      const randomNumber = Math.round(Math.random() * product_data.length);
      random_products.push(product_data[randomNumber])
    }
  }

  const [currentProduct, setProduct] = useState(singleProduct[0])

  return (
    <>
      <div className="product-slide-container">
        <div className="product-slider">
          {random_products.map((product) => (
            <>
            <div className="product-slide-img-container">
              <img alt={product} src={product.product_picture[0]} className="product-slide-img" onClick={() => {setModal(true); setProduct(product)}}/>
              <div className="product-slide-info">
                <span>{product.product_name} -</span>
                <span> RM {product.product_price}</span>
              </div>
            </div>
            </>
          ))}
        </div>
        {isModal && (
          <div className="product-slide-modal">
          <SingleProduct
            setModal={setModal}
            singleProduct={currentProduct}
            />
          </div>
        )}        
      </div>
    </>
  )
}

export default ProductSlide;