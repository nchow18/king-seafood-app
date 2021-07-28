import React, { useState } from 'react';
import '../../css/ProductSlide.css';
import SingleProduct from '../SingleProduct';

function ProductSlide(props) {

  const {
    product_data = []
  } = props

  const [singleProduct] = useState([...product_data])
  const [isModal, setModal] = useState(false);
  var newList = []

  for (var i = 0; i < product_data.length; i++) {
    if (product_data[i].product_views > 0) {
      newList.push(product_data[i])
    }
  }

  const mostViewed = newList.sort((a,b) => b.product_views - a.product_views)
  const random_products = mostViewed;
  const [currentProduct, setProduct] = useState(singleProduct[0])

  return (
    <>
      <div className="product-slide-container">
        <div className="product-slider">
          {random_products.map((product) => (
            <>
            <div className="product-slide-img-container">
              <img alt={product} src={`http://media.kingsseafood18.com/media/products/${product.product_picture[0]}.jpg`} className="product-slide-img" onClick={() => {setModal(true); setProduct(product)}}/>
              <div className="product-slide-info">
                <span className="font-mobile">{product.product_name} -</span>
                <span className="font-mobile"> RM {product.product_price}</span>
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