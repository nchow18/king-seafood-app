import React, { useState } from 'react';
import { useMutation} from '@apollo/react-hooks';
import { REMOVE_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT_PICTURE } from '../../utils/mutations';

function AdminProduct(props) {

  const {
    singleProduct,
    formData,
    setFormData,
    products,
    setUpdateProducts,
    setSingleProduct
  } = props

  var product = singleProduct;

  const [removeProduct] = useMutation(REMOVE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [addPicture] = useMutation(ADD_PRODUCT_PICTURE);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const updateProductFormSubmit = async (e) => {

    try {

      updateProduct({ variables: {
        product_id: product._id, 
        input: {
          product_name: formData.product_name,
          product_description1: formData.product_description1,
          product_description2: formData.product_description2,
          product_description3: formData.product_description3,
          product_description4: formData.product_description4,
          product_price: formData.product_price,
          product_weight: formData.product_weight,
          product_nameChinese: formData.product_nameChinese,
          product_descriptionChinese: formData.product_descriptionChinese,
          product_picture: formData.product_picture,
          product_category: formData.product_category,
          product_status: JSON.parse(formData.product_status),
          product_sale_price: formData.product_sale_price,
          product_bulk_quantity: parseInt(formData.product_bulk_quantity),
          product_bulk_price: formData.product_bulk_price,
          product_featured: JSON.parse(formData.product_featured),
          product_id: formData.product_id,
          product_new: JSON.parse(formData.product_new)
        },
       }})

      for (var i = 0; i < products.length; i++) {
        if (formData.product_id === products[i].product_id) {

          products[i] = formData;
          setUpdateProducts(products);
          setFormData(formData);
        }
      }

      alert('product updated');
    } catch (e) {
      console.log(e);
    }
  } 

  const deleteProductFormSubmit = async (e) => {

    var confirm = window.confirm('Continue to DELETE product');

    if (confirm === false) {
      return false;
    }

    try {
      removeProduct({ variables: {
        product_id: product._id
      }})

      window.location.href =`/admindashboard`;
    } catch (e) {
      console.log(e);
    }
  }

  const addProductPicture = async (e) => {

    console.log('adding picture slot');

    try {
      addPicture({
        variables: {
          product_url: "",
          product_id: product._id
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <div className="admin-single-product-container">
        <div>
          <li key='product id'>Product ID</li>
          <li key='product_name'>Name</li>
          <li key='product_category'>Category</li>
          <li key="product_price">Price</li>
          <li key='desc 1'>Description 1</li>
          <li key='desc 2'>Description 2</li> 
          <li key='desc 3'>Description 3</li>
          <li key='desc 4'>Description 4</li>
          <li key='product-status'>Product Status: true / false</li>
          <li key="sale price">Sale Price</li>
          <li key="bulk_quantity">Bulk Quantity</li>
          <li key="bulk_sale_price">Bulk Sale Price</li>
          <li key="product_featured">Featured: true / false</li>
          <li key="product_new">New Product: true / false</li>
          <li key="product_picture">Pictures</li>
        </div>
        <div>
          <input onChange={handleInputChange} name='product_id' className="product-name admin-input-width" type="text" value={formData.product_id} />
          <input onChange={handleInputChange} name='product_name' className="product-name admin-input-width" type="text" value={formData.product_name} />  
          <input value={formData.product_category} onChange={handleInputChange} className="product-category admin-input-width" name='product_category' placeholder={product.product_category} type="text"   />     
          <input value={formData.product_price} onChange={handleInputChange} className="product-price admin-input-width" name='product_price' placeholder={product.product_price} type="text"   />
          <input value={formData.product_description1} onChange={handleInputChange} className="product-description admin-input-width" name='product_description1' placeholder={product.product_description1} type="text"   />   
          <input value={formData.product_description2} onChange={handleInputChange} className="product-description admin-input-width" name='product_description2' placeholder={product.product_description2} type="text"   />   
          <input value={formData.product_description3} onChange={handleInputChange} className="product-description admin-input-width" name='product_description3' placeholder={product.product_description3} type="text"   />      
          <input value={formData.product_description4} onChange={handleInputChange} className="product-description admin-input-width" name='product_description4' placeholder={product.product_description4} type="text"   />      
          <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' placeholder={product.product_status.toString()} type="text"   />    
          <input value={formData.product_sale_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_sale_price} name='product_sale_price' type="text"   />     
          <input value={formData.product_bulk_quantity} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_bulk_quantity} name='product_bulk_quantity' type="text"   />       
          <input value={formData.product_bulk_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" placeholder={product.product_bulk_price} name='product_bulk_price' type="text"   />  
          <input value={formData.product_featured} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_featured' placeholder={product.product_featured.toString()} type="text"/>  
          <input value={formData.product_new} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_new' placeholder={product.product_new.toString()} type="text"   />
          <input value={formData.product_picture} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_picture' placeholder={product.product_new.toString()} type="text" />                                                                                                     
        </div>
      </div>
      <div onClick={() => {updateProductFormSubmit();}} className="admin-button">UPDATE</div>  
      <div className="admin-button admin-button-delete" onClick={() => { deleteProductFormSubmit()}}>DELETE</div>       
    </>
  )
}

export default AdminProduct;