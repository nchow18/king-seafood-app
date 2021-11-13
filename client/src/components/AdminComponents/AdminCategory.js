import React, { useState } from 'react';

function AdminCategory(props) {

  const {
    products,
    open,
    setClose,
    category,
    currentCategory,
    listProduct,
    setProductDisplay,
    setSingleProduct,
    findProduct
  } = props

  return (
    <>
      {open ? (
        <div className="admin-category-content">
          <div><b>{category.name.toUpperCase()}</b></div>
          {listProduct.map((product) => (
            <div onClick={() => {setProductDisplay(true); findProduct(product)}} className="admin-product-list">
              <div>{product.product_id}</div>
              <div>{product.product_name}</div>
              <div>RM {product.product_price}</div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          Select Category
        </div>
      )}
    </>
  )
}

export default AdminCategory;