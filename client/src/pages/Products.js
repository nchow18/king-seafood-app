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

  console.log(products);

  return (
    <>
      {productModal ? (
        <>
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
              <div key={product._id} className="product-desktop-card">
                <div className="display-flex-center-all">
                  <img className="product-desktop-picture border-round" src={process.env.PUBLIC_URL + `/images/products/half_size/tn_${product.product_id}-1.jpg`} />
                </div>
                <div className="products-desktop-description">
                  {product.product_name}
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