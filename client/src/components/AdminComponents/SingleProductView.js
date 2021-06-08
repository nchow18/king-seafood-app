import React from 'react'


function SingleProductView(props) {

  const {
    product
  } = props

  return (
    <>
      <div className="product-id bold" value={product._id}>{product._id}</div>
      <div className="admin-input-row">
        <b className="bold">Name</b>
        <div className="product-name admin-input-width" >{product.product_name}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Category</b>
        <div className="product-category admin-input-width" name='product_category' >{product.product_category}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Price</b>
        <div className="product-price admin-input-width" name='product_price'  >{product.product_price}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Description</b>
        <div className="product-description admin-input-width" name='product_description'  >{product.product_description}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Weight</b>
        <div className="product-weight admin-input-width" name='product_weight'  >{product.product_weight}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Chinese Name</b>  
        <div className="product-name-chinese admin-input-width" name='product_nameChinese'  >{product.product_nameChinese}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Chinese Description</b>
        <div className="product-description-chinese admin-input-width"  name='product_descriptionChinese' >{product.product_descriptionChinese}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Sale Price</b>
        <div className="product-description-chinese admin-input-width"  name='product_sale_price' >{product.product_sale_price}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Bulk Quantity</b>
        <div className="product-description-chinese admin-input-width"  name='product_bulk_quantity' >{product.product_bulk_quality}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Bulk Sale Price</b>
        <div className="product-description-chinese admin-input-width"  name='product_bulk_price' >{product.product_bulk_price}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Product Status: true/false</b>
        <div className="product-description-chinese admin-input-width" name='product_status'  >{product.product_status}</div>
      </div>
      <div className="admin-input-row">
        <b className="bold">Featured: true/false</b>
        <div className="product-description-chinese admin-input-width" name='product_featured'  >{product.product_featured}</div>
      </div>    
    </>
  )
}

export default SingleProductView;