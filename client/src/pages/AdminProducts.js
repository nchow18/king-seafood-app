import React, { useState } from 'react';
import Auth from '../utils/auth';
import '../css/Admin.css';
import AdminCategories from '../components/AdminComponents/Products';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { ADD_PRODUCT } from '../utils/mutations';
import { PRODUCTS } from '../utils/queries';
import ProductHeader from '../components/ProductHeader';
import '../css/ProductHeader.css';

function AdminProducts() {

  const [isModal, setModal] = useState(false)
  const [productLinks] = useState(Auth.getCategories())
  const [formData, setProductFormData] = useState({
  product_name: '',
  product_category: '',
  product_weight: '',
  product_price: '',
  product_picture: '',
  product_nameChinese: '',
  product_descriptionChinese: '',
  })

  const [addProduct, { error }] = useMutation(ADD_PRODUCT);
  const { loading, data } = useQuery(PRODUCTS);
  const products = data?.products || {};
  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setProductFormData({
    ...formData,
    [name]: value
  })
  }

  const addProductFormSubmit = async (e) => {
  e.preventDefault();

  try {
    addProduct({ variables: { input: {
    product_name: formData.product_name,
    product_description: formData.product_description,
    product_price: parseInt(formData.product_price),
    product_weight: formData.product_weight,
    product_nameChinese: formData.product_nameChinese,
    product_descriptionChinese: formData.product_descriptionChinese,
    product_picture: formData.product_picture,
    product_category: formData.product_category,
    product_status: JSON.parse(formData.product_status.toLowerCase()),
    product_sale_price: parseInt(formData.product_sale_price),
    product_bulk_quantity: parseInt(formData.product_bulk_quantity),
    product_bulk_price: parseInt(formData.product_bulk_price)
    } }})

    alert('product added');
  } catch (e) {
    console.log(e);
    alert(e);
  }
  } 

  if (loading) return `..Loading`;
  if (error) return `...ERROR`;

  return (
  <>
  <div className="admin-container">
    <div className="page-title bold font-2rem">
      ADD NEW PRODUCT
    </div>
    <div className="admin-form-container night-bg">
    <div className="admin-input-width" value="ID">ID</div>
    <form className="flex-start-row" onSubmit={addProductFormSubmit}>
      <div className="admin-input-row">
        <label className="bold">Name</label>
        <input value={formData.product_name} onChange={handleInputChange} className="product-name admin-input-width" name='product_name' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Category</label>
        <input value={formData.product_category} onChange={handleInputChange} className="product-category admin-input-width" name='product_category' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Price</label>
        <input value={formData.product_price} onChange={handleInputChange} className="product-price admin-input-width" name='product_price' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Description</label>
        <input value={formData.product_description} onChange={handleInputChange} className="product-description admin-input-width" name='product_description' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Weight</label>
        <input value={formData.product_weight} onChange={handleInputChange} className="product-weight admin-input-width" name='product_weight' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Chinese Name</label>
        <input value={formData.product_nameChinese} onChange={handleInputChange} className="product-name-chinese admin-input-width" name='product_nameChinese' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Chinese Description</label>
        <input value={formData.product_descriptionChinese} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_descriptionChinese' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Product Status: true/false</label>
        <input value={formData.product_status} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_status' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Sale Price</label>
        <input value={formData.product_sale_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_sale_price' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Bulk Quantity</label>
        <input value={formData.product_bulk_quantity} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_bulk_quantity' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Bulk Sale Price</label>
        <input value={formData.product_bulk_price} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_bulk_price' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Picture Location</label>
        <input value={formData.product_picture} onChange={handleInputChange} className="product-picture admin-input-width" name='product_picture' type="text"></input>
      </div>
        <button className="admin-button" type='submit'>ADD PRODUCT</button>
      </form>
    </div>
    <div className="flex-start-row">
    <div className="page-title bold font-2rem">
      CURRENT PRODUCTS
    </div>

      <label>Sort by CATEGORY:</label>
      {isModal && (
      <ProductHeader 
        productLinks={productLinks}
        currentProductLink={currentProductLink}
        setCurrentProductLink={setCurrentProductLink}
        setModal={setModal}
      />
      )}
      <button onClick={() => {setModal(true)}} type="submit">SELECT</button>
    </div>
    <AdminCategories
      currentCategory={currentProductLink}
     />
  </div>

  </>
  )
}

export default AdminProducts;