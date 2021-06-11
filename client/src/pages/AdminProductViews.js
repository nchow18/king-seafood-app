import React, { useEffect } from 'react';

function ProductViews(props) {

  const {
    products=[]
  } = props

  var product_views_array = [];

  for (var i = 0; i < products.length; i++) {
    if (products[i].product_views > 0) {
      product_views_array.push(products[i])
    }
  }

  product_views_array.sort(function(a,b) {
    return b.product_views - a.product_views;
  })

  return (
    <>
      <div className="admin-views-container">
        {product_views_array.map((product) => (
          <div>
            <span><b>Views:</b> {product.product_views}</span>
            <span><b>Product ID:</b> {product._id}</span>
            <span><b>Product Name:</b> {product.product_name}</span>
            <span><b>Product Price:</b> {product.product_price}</span>
          </div>
        ))}

      </div>
    </>
  )
}

export default ProductViews;