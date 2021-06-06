import React, { useContext } from 'react';
import SingleProductUpdate from '../AdminComponents/SinglePictureUpdate';
import { UserContext } from '../../utils/GlobalState';

function UpdateProductInputFields(props) {

  const {
    handleInputChange,
    formData=[],
    updateProductFormSubmit,
    addProductPicture,
    deleteProductFormSubmit,
    pictureArr=[],
    product,
  } = props

  const [state, dispatch] = useContext(UserContext)
  console.log(state.active)

  return (
    <>
<form className="admin-form-container night-bg">
          <div className="product-id bold" value={product._id}>{product._id}</div>
            <div className="admin-input-row">
              <b className="bold">Name</b>
              <input onChange={handleInputChange} name='product_name' className="product-name admin-input-width" type="text" value={formData.product_name} />
            </div>
            <div className="admin-input-row">
              <b className="bold">Category</b>
              <input value={formData.product_category} onChange={handleInputChange} className="product-category admin-input-width" name='product_category' placeholder={product.product_category} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Price</b>
              <input value={formData.product_price} onChange={handleInputChange} className="product-price admin-input-width" name='product_price' placeholder={product.product_price} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Description</b>
              <input value={formData.product_description} onChange={handleInputChange} className="product-description admin-input-width" name='product_description' placeholder={product.product_description} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Weight</b>
              <input value={formData.product_weight} onChange={handleInputChange} className="product-weight admin-input-width" name='product_weight' placeholder={product.product_weight} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Chinese Name</b>
              <input value={formData.product_nameChinese} onChange={handleInputChange} className="product-name-chinese admin-input-width" name='product_nameChinese' placeholder={product.product_nameChinese} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Chinese Description</b>
              <input value={formData.product_descriptionChinese} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_descriptionChinese} name='product_descriptionChinese' type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Sale Price</b>
              <input value={formData.product_sale_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_sale_price} name='product_sale_price' type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Bulk Quantity</b>
              <input value={formData.product_bulk_quantity} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_bulk_quantity} name='product_bulk_quantity' type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Bulk Sale Price</b>
              <input value={formData.product_bulk_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_bulk_price} name='product_bulk_price' type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Product Status: true/false</b>
              <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' placeholder={product.product_status} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Featured: true/false</b>
              <input value={formData.product_featured} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_featured' placeholder={product.product_featured} type="text"   />
            </div>
            {state.active === true && (
              <>
                {product.product_picture.map((picture) => (
                  <div key={picture} className="admin-input-row">
                    <SingleProductUpdate
                    pictureArr={pictureArr}
                    product_id={product._id}
                    picture={picture} />
                  </div>
                ))}              
              </>
            )}
            {state.active === false && (
              <>
              {product.product_picture.map((picture) => (
                <div key={picture} className="admin-input-row">
                  <SingleProductUpdate
                  pictureArr={pictureArr}
                  product_id={product._id}
                  picture={picture}
                  />
                </div>
              ))}              
              </>
            )}
            <div className="admin-input-row">
              <div onClick={() => {updateProductFormSubmit(); dispatch({ type: 'toggle_button'})}} className="admin-button">UPDATE</div>
              <div onClick={() => {addProductPicture(); dispatch({ type: 'toggle_button'})}} className="admin-button">ADD PICTURE SLOT</div>
              <div className="admin-button" onClick={() => { deleteProductFormSubmit(); dispatch({ type: 'toggle_button'})}}>DELETE</div>
            </div>
          </form>    
    </>
  )
}

export default UpdateProductInputFields;