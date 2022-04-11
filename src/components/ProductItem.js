import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ProductItem(props) {

  const {
    prod,
    prodTitle,
    index,
    products,
    setProducts,
  } = props

  const [update, setUpdate] = useState(null);

  const apiClient = Axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  const apiLive = Axios.create({
    baseURL: 'https://kingsseafood18.com/api',
    timeout: 1000,
    headers: {'X-Customer-Header': 'foobar'}
  })

  useEffect(() => {
    // setProd(prod);
  },[])

  const [formData, setFormData] = useState({
    product_id: prod.product_id,
    category: prod.category,
    name: prod.name,
    d1: prod.d1,
    d2: prod.d2,
    d3: prod.d3,
    d4: prod.d4,
    price: prod.price,
    bulk_qty: prod.bulk_qty,
    bulk_price: prod.bulk_price,
    featured: prod.featured,
    status: prod.status,
    picture: prod.picture
  })

  const inputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function removeArr(info) {

    if (Array.isArray(info)) {
      // if data is an array

      const final = info.join(', ').replaceAll(' ', '');

      return final;      
    } else {
      // if data is NOT an array

      return info;
    }
  }

  const updateProd = async (event) => {

    const currentURL = window.location.href.search('localhost');

    const data1 = {
        product_id: formData.product_id,
        category: removeArr(formData.category),
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
        picture: removeArr(formData.picture),
        new_product: true
      }

      console.log(data1);         
      
    if (currentURL >= 1) {
      apiClient.put(`/products/${prod.product_id}`, data1).then((response) => {setUpdate(response.data)});
    } else {
      apiLive.put(`/products/${prod.product_id}`, data1).then((response) => {setUpdate(response.data)});
    }



    alert(`${formData.name} has been updated!`)

  }

  function removeProd() {

    const confirm = window.confirm('Confirm removing product?')


    if (confirm) {

      const currentURL = window.location.href;
      
      for (var i = 0; i < products.length; i++) {

        if (products[i].product_id === prod.product_id) {

          setProducts(products.splice(0,i));
        }
      }

      if (currentURL >= 1) {
        apiClient.delete(`/products/${prod.product_id}`, prod.product_id).then((response) => {setUpdate(response.data)});
      } else {
        apiLive.delete(`/products/${prod.product_id}`, prod.product_id).then((response) => {setUpdate(response.data)});
      }
    }
  }

  return (
    <div className="dashboard-product-item">
      <div className="dashboard-product-titles">
        {prodTitle.map((item) => (
          <li key={item}>{item}</li>
        ))}
        <li onClick={() => {removeProd()}} className="dashboard-product-delete">DELETE</li>
      </div>
      <div className="dashboard-product-input">
        <input id='product_id' placeholder={prod.product_id} onChange={inputChange} value={formData.product_id} name='product_id'></input>
        <input id='category' placeholder={prod.category} onChange={inputChange} value={formData.category} name='category'></input>
        <input id='name' placeholder={prod.name} onChange={inputChange} value={formData.name} name='name'></input>
        <input id='d1' placeholder={prod.d1} onChange={inputChange} value={formData.d1} name='d1'></input>
        <input id='d2' placeholder={prod.d2} onChange={inputChange} value={formData.d2} name='d2'></input>
        <input id='d3' placeholder={prod.d3} onChange={inputChange} value={formData.d3} name='d3'></input>
        <input id='d4' placeholder={prod.d4} onChange={inputChange} value={formData.d4} name='d4'></input>
        <input id='price' placeholder={prod.price} onChange={inputChange} value={formData.price} name='price'></input>
        <input id='bulk_qty' placeholder={prod.bulk_qty} onChange={inputChange} value={formData.bulk_qty} name="bulk_qty"></input>
        <input id='bulk_price' placeholder={prod.bulk_price} onChange={inputChange} value={formData.bulk_price} name="bulk_price"></input>
        <input id="sale_price" placeholder={prod.sale_price} onChange={inputChange} value={formData.sale_price} name="sale_price"></input>
        <input id='featured' placeholder={JSON.stringify(prod.featured)} onChange={inputChange} value={formData.featured} name="featured"></input>
        <input id='status' placeholder={JSON.stringify(prod.status)} onChange={inputChange} value={formData.status} name="status"></input>
        <input id='picture' placeholder={prod.picture} onChange={inputChange} value={formData.picture} name="picture"></input>
        <button onClick={() => updateProd()}>UPDATE</button>
      </div>
    </div>
  )
}

export default ProductItem;