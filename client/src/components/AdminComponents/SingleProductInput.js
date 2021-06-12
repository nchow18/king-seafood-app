import React, { useState, useContext } from 'react';
import { useMutation} from '@apollo/react-hooks';
import { REMOVE_PRODUCT, UPDATE_PRODUCT, ADD_PRODUCT_PICTURE } from '../../utils/mutations';
import { UserContext } from '../../utils/GlobalState';

function SingleProductInput(props) {

  const {
    product
  } = props

  const [dispatch] = useContext(UserContext)
  const [removeProduct] = useMutation(REMOVE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);
  const [addPicture] = useMutation(ADD_PRODUCT_PICTURE);


  const [formData, setFormData] = useState({
    product_name: product.product_name,
    product_description1: product.product_description1,
    product_description2: product.product_description2,
    product_description3: product.product_description3,
    product_description4: product.product_description4,
    product_category: product.product_category,
    product_weight: product.product_weight,
    product_price: product.product_price,
    product_picture: product.product_picture,
    product_nameChinese: product.product_nameChinese,
    product_status: JSON.stringify(product.product_status),
    product_descriptionChinese: product.product_descriptionChinese,
    product_sale_price: product.product_sale_price,
    product_bulk_quantity: product.product_bulk_quantity,
    product_bulk_price: product.product_bulk_price,
    product_featured: product.product_featured
  })

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
          product_status: JSON.parse(formData.product_status.toLowerCase()),
          product_sale_price: formData.product_sale_price,
          product_bulk_quantity: parseInt(formData.product_bulk_quantity),
          product_bulk_price: formData.product_bulk_price,
          product_featured: JSON.parse(formData.product_featured)
        },
       }})

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
              <b className="bold">Description1</b>
              <input value={formData.product_description1} onChange={handleInputChange} className="product-description admin-input-width" name='product_description1' placeholder={product.product_description1} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Description2</b>
              <input value={formData.product_description2} onChange={handleInputChange} className="product-description admin-input-width" name='product_description2' placeholder={product.product_description2} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Description3</b>
              <input value={formData.product_description3} onChange={handleInputChange} className="product-description admin-input-width" name='product_description3' placeholder={product.product_description3} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Description</b>
              <input value={formData.product_description4} onChange={handleInputChange} className="product-description admin-input-width" name='product_description4' placeholder={product.product_description4} type="text"   />
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
              <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' placeholder={product.product_status.toString()} type="text"   />
            </div>
            <div className="admin-input-row">
              <b className="bold">Featured: true/false</b>
              <input value={formData.product_featured} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_featured' placeholder={product.product_featured.toString()} type="text"   />
            </div>
            <div className="admin-input-row">
              <div onClick={() => {updateProductFormSubmit(); dispatch({ type: 'toggle_button' })}} className="admin-button">UPDATE</div>
              <div onClick={() => {addProductPicture()}} className="admin-button">ADD PICTURE SLOT</div>
              <div className="admin-button" onClick={() => { deleteProductFormSubmit()}}>DELETE</div>
          </div>
    </>
  )
}

export default SingleProductInput;