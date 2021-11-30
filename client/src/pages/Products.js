import React, { useState } from 'react';
import Auth from '../utils/auth.js'

function Products(props) {

  const {
    setCart,
    user_type,
    products
  } = props

  const categories = Auth.getCategories();
  const [productModal, setProductModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState();
  const [imageCounter, setImageCounter] = useState(1);

  function previousPic() {
    if (imageCounter !== 1) {
      setImageCounter(imageCounter - 1)
    }
  }

  function nextPic() {
    if (imageCounter !== currentProduct.product_picture.length) {
      setImageCounter(imageCounter + 1)
    }
  }

  console.log(products);
  console.log(currentProduct);
  console.log(imageCounter);

  return (
    <>
      {productModal ? (
        <>
          <div onClick={() => (setProductModal(false), setImageCounter(1))}><i className="fas fa-arrow-left font-size-12px"></i>   <b>Go Back</b></div>          
          <div className="product-desktop-view">
            <div className="product-desktop-image-container">
              {currentProduct.product_picture.length > 1 && (
                <>
                  <i className="fas fa-arrow-left" onClick={() => (previousPic())}></i>              
                </>
              )}
              <img alt={currentProduct._id} className="product-desktop-picture-full border-round" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${currentProduct.product_id}-${imageCounter}.jpg`} />
              {currentProduct.product_picture.length > 1 && (
                <>
                  <i className="fas fa-arrow-right" onClick={() => (nextPic())}></i>            
                </>
              )}            

            </div>
            <div className="product-desktop-view-details">
              <div>{currentProduct.product_name}</div>
              <div>{currentProduct.product_price}</div>
            </div>
          </div>
        </>
      ) : (
        <div className="products-desktop-container">
          <div className="categories-desktop-container">
            <div className="bold-font">Categories</div>
            <div className="categories-desktop-list">
              {categories.map((cat) => (
                <div key={cat.name} className="category-item">
                  {cat.name}
                </div>
              ))}
            </div>
          </div>
          <div className="products-desktop-list">
            {products.map((product) => (
              <div key={product._id} className="product-desktop-card" onClick={() => (setProductModal(true), setCurrentProduct(product))}>
                <div className="display-flex-center-all">
                  <img alt={product._id} className="product-desktop-picture border-round" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${product.product_id}-1.jpg`} />
                </div>
                <div className="products-desktop-description">
                  <div><b>{product.product_name}</b></div>
                  <div>RM {product.product_price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Products;