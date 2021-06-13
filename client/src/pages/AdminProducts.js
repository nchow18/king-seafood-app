import React, { useState, useEffect, useContext } from 'react';
import Auth from '../utils/auth';
import '../css/Admin.css';
import AdminCategories from '../components/AdminComponents/Products';
import { useMutation } from '@apollo/react-hooks';
import { ADD_PRODUCT } from '../utils/mutations';
import ProductHeader from '../components/ProductHeader';
import '../css/ProductHeader.css';
import { UserContext } from '../utils/GlobalState';

function AdminProducts(props) {

  const {
    products=[]
  } = props

  const [formData, setProductFormData] = useState({
    product_name: '',
    product_category: '',
    product_description1: '',
    product_description2: '',
    product_description3: '',
    product_description4: '',
    product_weight: '',
    product_price: '',
    product_picture: '',
    product_nameChinese: '',
    product_descriptionChinese: '',
    product_featured: '',
    product_sale_price: '0',
    product_bulk_quantity: '0',
    product_bulk_price: '0',
    product_status: 'true',
    search: '',
    inventory_id:'',
  })

  const [state, dispatch] = useContext(UserContext)
  const [categoryModal, setCategoryModal] = useState(false)
  const [productLinks] = useState(Auth.getCategories())
  const [status, setStatus] = useState(false)
  const [load, setLoad] = useState(false)
  const [edit, setEdit] = useState(true);
  const [search, setSearch] = useState(false);
  const [addProduct, { error }] = useMutation(ADD_PRODUCT);
  const [currentProductLink, setCurrentProductLink] = useState(productLinks[0])

  const handleInputChange = (event) => {
  const { name, value } = event.target;
  setProductFormData({
    ...formData,
    [name]: value
  })
  }

  const addProductFormSubmit = async (e) => {

    try {
      addProduct({ variables: { input: {
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
      product_featured: JSON.parse(formData.product_featured),
      inventory_id: formData.inventory_id
      } }})

        alert('product added');
      } catch (e) {
        console.log(e);
        alert(e);
      }
  }

  useEffect(() => {
    console.log('updating componenet');
    
    return () => {
      console.log('cleaned up')
    }
  }, [status, state])

  //add search results into productArr
  const productArr = products;
  const searchLocalStorage = Auth.getSearchProduct();
  const searchResults = JSON.parse(searchLocalStorage);

  function searchProduct() {

    console.log('using keywords for search');
    const searchResults = products.findIndex((product) => product.product_name.toLowerCase().includes(formData.search.toLowerCase()));
    const result = products[searchResults];

    return Auth.setSearchProduct(JSON.stringify(result));
  }

  if (error) return `...ERROR`;

  return (
  <>
  <div className="admin-container">
    <div className="page-title bold font-1rem">
      ADD NEW PRODUCT
    </div>
    <div className="admin-form-container night-bg">
    <div className="admin-input-width" value="ID">ID</div>
    <form className="flex-start-row">
        <label className="bold">Inventory ID</label>
        <input value={formData.inventory_id} onChange={handleInputChange} className="product-name admin-input-width" name='inventory_id' type="text"></input>      
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
        <label className="bold">Description1</label>
        <input value={formData.product_description1} onChange={handleInputChange} className="product-description admin-input-width" name='product_description1' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Description2</label>
        <input value={formData.product_description2} onChange={handleInputChange} className="product-description admin-input-width" name='product_description2' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Description3</label>
        <input value={formData.product_description3} onChange={handleInputChange} className="product-description admin-input-width" name='product_description3' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Description4</label>
        <input value={formData.product_description4} onChange={handleInputChange} className="product-description admin-input-width" name='product_description4' type="text"></input>
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
        <label className="bold">Featured: True / False</label>
        <input value={formData.product_featured} onChange={handleInputChange} className="product-description-chinese admin-input-width" name='product_featured' type="text"></input>
      </div>
      <div className="admin-input-row">
        <label className="bold">Picture Location</label>
        <input value={formData.product_picture} onChange={handleInputChange} className="product-picture admin-input-width" name='product_picture' type="text"></input>
      </div>
        <div className="admin-button" type='submit' onClick={() => {addProductFormSubmit(); setStatus(true)}}>ADD PRODUCT</div>
      </form>
    </div>
    <div className="flex-start-row">
      <span><b>Sort by CATEGORY: </b> </span>
      {categoryModal && (
      <ProductHeader 
        productLinks={productLinks}
        currentProductLink={currentProductLink}
        setCurrentProductLink={setCurrentProductLink}
        setCategoryModal={setCategoryModal}
        setEdit={setEdit}
        setSearch={setSearch}
      />
      )}
      <button onClick={() => {setCategoryModal(true)}} type="submit">SELECT</button>
      {load ? (
        <button onClick={() => {setLoad(false)}} type="submit">CONFIRM</button>        
      ) : (
        <button onClick={() => {setLoad(true)}} type="submit">CONFIRM</button>
      )}
      <input className="admin-input-width" placeholder="Enter keywords" value={formData.search} onChange={handleInputChange} name="search" />
        {search ? (
          <div onClick={() => {searchProduct(); setSearch(false)}} className="admin-button">CLEAR SEARCH</div>
        ) : (
          <div onClick={() => {searchProduct(); setSearch(true)}} className="admin-button">SEARCH</div>
        )}       
    </div>
    {search ? (
      <AdminCategories
        currentCategory={currentProductLink}
        searchResults={searchResults}
        setStatus={setStatus}
        currentProductLink={currentProductLink}
        load={load}
        setEdit={setEdit}
        edit={edit}
        search={search}
    />
    ) : (
      <AdminCategories
        currentCategory={currentProductLink}
        productArr={productArr}
        setStatus={setStatus}
        currentProductLink={currentProductLink}
        load={load}
        setEdit={setEdit}
        edit={edit}
        search={search}
     />      
    )}

  </div>

  </>
  )
}

export default AdminProducts;