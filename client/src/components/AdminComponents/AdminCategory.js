import React from 'react';

function AdminCategory(props) {

  const {
    products,
    open,
    setClose,
    category,
    currentCategory,
    listProduct
  } = props

  console.log(listProduct); 

  return (
    <>
      {open === true && (
        <div className="admin-category-content">
          <div><b>{category.name.toUpperCase()}</b></div>
          {listProduct.map((product) => (
            <div className="admin-product-list">
              <div>{product.product_id}</div>
              <div>{product.product_name}</div>
              <div>RM {product.product_price}</div>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default AdminCategory;