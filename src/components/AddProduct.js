import React, { useState } from 'react';
import Axios from 'axios';

function AddProduct(props) {

  const {
    products,
    setProducts,
    prodTitle
  } = props

  const [update, setUpdate] = useState(null);

  const [formData, setFormData] = useState({
    product_id: '',
    category: '',
    name: '',
    d1: '',
    d2: '',
    d3: '',
    d4: '',
    price: '',
    bulk_qty: '',
    bulk_price: '',
    featured: '',
    status: '',
    picture: ''
  })  

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }  

  function addProd() {

    const currentURL = window.location.href;
    const updateURL = 'http://localhost:3001/api/products'

    const data1 = {
        product_id: formData.product_id,
        category: formData.category,
        name: formData.name,
        price: formData.price,
        d1: formData.d1,
        d2: formData.d2,
        d3: formData.d3,
        d4: formData.d4,
        status: formData.status,
        sale_price: formData.sale_price,
        bulk_qty: formData.bulk_qty,
        bulk_price: formData.bulk_price,
        featured: formData.featured,
        picture: formData.picture,
        new_product: true
      }           

    console.log(data1);

    setProducts([...products, data1])

    Axios.post(updateURL, data1).then((response) => {setUpdate(response.data)});
  }

  return (
    <div className="add-product-container">
      <div className="dashboard-product-item">
        <div className="dashboard-product-titles">
          {prodTitle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </div>
        <div className="dashboard-product-input">
          <input id='product_id' placeholder='Product ID' onChange={inputChange} value={formData.product_id} name='product_id'></input>
          <input id='category' placeholder='Category' onChange={inputChange} value={formData.category} name='category'></input>
          <input id='name' placeholder='Product Name' onChange={inputChange} value={formData.name} name='name'></input>
          <input id='d1' placeholder='Description 1' onChange={inputChange} value={formData.d1} name='d1'></input>
          <input id='d2' placeholder='Description 2' onChange={inputChange} value={formData.d2} name='d2'></input>
          <input id='d3' placeholder='Description 3' onChange={inputChange} value={formData.d3} name='d3'></input>
          <input id='d4' placeholder='Description 4' onChange={inputChange} value={formData.d4} name='d4'></input>
          <input id='price' placeholder='Price' onChange={inputChange} value={formData.price} name='price'></input>
          <input id='bulk_qty' placeholder='Bulk Quantity' onChange={inputChange} value={formData.bulk_qty} name="bulk_qty"></input>
          <input id='bulk_price' placeholder='Bulk Price' onChange={inputChange} value={formData.bulk_price} name="bulk_price"></input>
          <input id="sale_price" placeholder='Sale Price' onChange={inputChange} value={formData.sale_price} name="sale_price"></input>
          <input id='featured' placeholder='Featured (true / false)' onChange={inputChange} value={formData.featured} name="featured"></input>
          <input id='status' placeholder='Status (true / false)' onChange={inputChange} value={formData.status} name="status"></input>
          <input id='picture' placeholder='Picture (full picture name with extension)' onChange={inputChange} value={formData.picture} name="picture"></input>
          <button onClick={() => addProd()}>ADD PRODUCT</button>
        </div>
      </div>
    </div>
  )
}

export default AddProduct;